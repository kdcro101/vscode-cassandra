import * as cassandra from "cassandra-driver";
import { CassandraClient } from "..";
export const columnTypeToV3 = (client: CassandraClient, dataType: cassandra.metadata.DataTypeInfo): string => {

    if (dataType.info == null) {
        return client.getNativeTypes(dataType.code);
    }

    try {

        const native = client.getNativeTypes(dataType.code);
        const list = Array.isArray(dataType.info) ? dataType.info : [dataType.info];
        const rendered = list.map((i) => columnTypeToV3(client, i as cassandra.metadata.DataTypeInfo));

        // UDT are always frozen in Cassandra2
        if (native === "udt") {
            const info = dataType.info as cassandra.metadata.DataTypeInfo;
            return `frozen<${info.name}>`;
        }

        if (dataType.options && dataType.options.frozen) {
            return `frozen<${native}<${rendered.join(",")}>>`;
        } else {
            return `${native}<${rendered.join(",")}>`;
        }

    } catch (e) {
        console.log(e);
        console.log(dataType);
    }

};
