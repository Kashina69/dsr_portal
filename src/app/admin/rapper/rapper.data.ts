import type { RapperRecord } from "./rapper.types";

export const MOCK_RAPPER_RECORDS: RapperRecord[] = []; // Empty array to trigger "No record found" state
export const columns = [
    {
        header: "RAPPER NAME",
        accessor: "name" as keyof RapperRecord,
    },
    {
        header: "RAPPER EMAIL",
        accessor: "email" as keyof RapperRecord,
    },
    {
        header: "DEPARTMENT",
        accessor: "department" as keyof RapperRecord,
    },
    {
        header: "RAPPER DATE",
        accessor: "date" as keyof RapperRecord,
    },
    {
        header: "INTERVIEW STATUS",
        accessor: "interviewStatus" as keyof RapperRecord,
    },
];
