import { CassandraKeyspace } from "../../types/index";
import { aggregateClone } from "../aggregate/index";
import { functionClone } from "../function/clone";
import { materializedViewClone } from "../materialized-view";
import { tableClone } from "../table";
import { typeClone } from "../type";
import { keyspaceClone } from "./clone";

export const exportStructure = async (keyspace: string, data: CassandraKeyspace): Promise<string> => {

    const types = data.types;
    const functions = data.functions;
    const aggregates = data.aggregates;
    const tables = data.tables;
    const views = data.materializedViews;

    const cqls: string[] = [];

    const ksc = await keyspaceClone(keyspace, data);

    cqls.push(ksc);

    cqls.push(`/*`);
    cqls.push(`################################################`);
    cqls.push(`################### TYPES ######################`);
    cqls.push(`################################################`);
    cqls.push(`*/`);

    for (const o of types) {
        const p = await typeClone(keyspace, o);
        cqls.push(p);
        cqls.push("");

    }

    cqls.push(``);
    cqls.push(`/*`);
    cqls.push(`################################################`);
    cqls.push(`################# FUNCTIONS ####################`);
    cqls.push(`################################################`);
    cqls.push(`*/`);

    for (const o of functions) {
        const p = await functionClone(keyspace, o);
        cqls.push(p);
        cqls.push("");
    }

    cqls.push(``);
    cqls.push(`/*`);
    cqls.push(`################################################`);
    cqls.push(`################# AGGREGATES ###################`);
    cqls.push(`################################################`);
    cqls.push(`*/`);

    for (const o of aggregates) {
        const p = await aggregateClone(keyspace, o);
        cqls.push(p);
        cqls.push("");
    }

    cqls.push(``);
    cqls.push(`/*`);
    cqls.push(`################################################`);
    cqls.push(`################### TABLES #####################`);
    cqls.push(`################################################`);
    cqls.push(`*/`);

    for (const o of tables) {
        const p = await tableClone(keyspace, o);
        cqls.push(p);
        cqls.push("");
    }

    cqls.push(``);
    cqls.push(`/*`);
    cqls.push(`################################################`);
    cqls.push(`############# MATERIALIZED VIEWS ###############`);
    cqls.push(`################################################`);
    cqls.push(`*/`);

    for (const o of views) {
        const p = await materializedViewClone(keyspace, o);
        cqls.push(p);
        cqls.push("");
    }

    return cqls.join("\n");
};
