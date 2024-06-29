const employee = {
    name: "Soka",
    streetAddress: "China", 
}
//function to  return a new Object that has an updated value for the key passed in
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, [key]:value
    }
}
//function to mutate the employee Object passed in
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value;
   return employee;
}
//function to  delete the property with that key from the employee Object
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
} 
//function to delete the property but mutate the employee Object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
} 