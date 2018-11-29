import { ValidatedConfigClusterItem } from "../../../types";

export const configGood: ValidatedConfigClusterItem[] = [
    {
        name: "Cluster1",
        contactPoints: ["127.0.0.1"],
        valid: true,
    },
];
