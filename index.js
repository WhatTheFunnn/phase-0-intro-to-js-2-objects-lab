const employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
    [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    return {...employee = delete[key]}
   
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}