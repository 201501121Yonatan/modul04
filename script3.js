var person = new Object();

person["firtname"]="Tony";
person["lastname"]="Alice";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firtname);
console.log(person.lastname);

person.address =new Object();
person.address.street="111 Main St.";
person.address.city="New York";
person.address.state="NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);