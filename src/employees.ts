import { Employee } from "./types.js"

export const Employees: Employee[] = [
    {
        id: 0,
        name: "Pelle Svensson",
        salary: 34000,
        consultant: true,
        contractEnd: new Date(2025, 12, 17),
        contractRenew: true
    },
    {
        id: 1,
        name: "Kalle Anka",
        salary: 54000,
        consultant: false
    },
    {
        id: 2,
        name: "Lotta Olsson",
        salary: 44000,
        consultant: true,
        contractEnd: new Date(2025, 7, 10),
        contractRenew: false
    },
    {
        id: 3,
        name: "Charlotte Kalla",
        salary: 64000,
        consultant: false
    }
]