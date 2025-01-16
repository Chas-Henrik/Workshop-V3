export type Employee = {
    id: number,
    name: string,
    salary: number,
    consultant: boolean,
    contractEnd?: Date,
    contractRenew?: boolean
}