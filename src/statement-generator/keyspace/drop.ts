import { quouteCaseSensitive } from "../../helpers/quoting";
import { CassandraKeyspace } from "../../types/index";
export const keyspaceDrop = (keyspace: string, data: CassandraKeyspace): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve(`DROP KEYSPACE ${quouteCaseSensitive(keyspace)};`);

    });
};
