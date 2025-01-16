import { Employee } from "./types.js";
import { Employees } from "./employees.js";

const listElement: (HTMLElement | null) = document.getElementById("employeelist");



function renderEmployees(Employees: Employee[]): void {
    if (listElement !== null) {
        listElement.innerHTML = Employees.map(employee => {
            if (employee.consultant) {
                return `<div class="employee-container" data-id="${employee.id}">
                            <p class="employee-name">${employee.name}</p>
                            <p class="consultant">Consultant</p>
                            <input class="employee-salary" type="number" value="${employee.salary}">
                            <input class="employee-date" type="date" value="${employee.contractEnd}">
                            <label for="checkbox-${employee.id}">Renew contract </label>
                            <input id="checkbox-${employee.id}" class="checkbox" type="checkbox" value="${employee.contractRenew}">
                        </div>`
            } else {
                return `<div class="employee-container" data-id="${employee.id}">
                            <p class="employee-name">${employee.name}</p>
                            <input class="employee-salary" type="number" value="${employee.salary}">
                        </div>`
            }
        }).join("");
    }
}

renderEmployees(Employees)