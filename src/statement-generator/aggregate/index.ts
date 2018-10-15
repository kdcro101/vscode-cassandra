import { TreeItemAggregateItem } from "../../cassandra-workbench/treeview-provider/tree-item-aggregate-item";
import { typeParser, typeRender } from "../../data-type/type-parser";
import { CassandraAggregate } from "../../types";

export const aggregateCreate = (keyspace: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const out: string[] = [
            `-- change aggregate name and definition`,
            `CREATE AGGREGATE ${keyspace}.aggregate_name(int)`,
            `SFUNC function_name`,
            `STYPE int`,
            `FINALFUNC function_name`,
            `INITCOND 0;`,

        ];

        resolve(out.join("\n"));
    });
};
export const aggregateDrop = (keyspace: string, data: CassandraAggregate): Promise<string> => {
    return new Promise((resolve, reject) => {
        const out: string[] = [
            `DROP AGGREGATE ${keyspace}.${data.name};`,
        ];

        resolve(out.join("\n"));
    });
};
export const aggregateReplace = (keyspace: string, data: CassandraAggregate): Promise<string> => {
    return aggregateClone(keyspace, data, true);
};
export const aggregateClone = (
    keyspace: string,
    data: CassandraAggregate, replace: boolean = false, cloneName?: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const name = !cloneName ? `${data.name}` : cloneName;
        const all = data.all;

        const pt = typeParser(all.state_type);
        const rt = pt.isFrozen ? typeRender(pt.contains[0]) : typeRender(pt);

        const out: string[] = [
            !replace ?
                `CREATE AGGREGATE ${keyspace}.${name}(${all.argument_types.join(", ")})`
                :
                `CREATE OR REPLACE AGGREGATE ${keyspace}.${name}(${all.argument_types.join(", ")})`,
            `SFUNC ${all.state_func}`,
            `STYPE ${rt}`,
            `FINALFUNC ${all.final_func}`,
            `INITCOND ${all.initcond};`,

        ];

        resolve(out.join("\n"));
    });
};
