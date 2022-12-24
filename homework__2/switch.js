//3*)Solve #3 using the switch statement

let phone = prompt("Enter your phone including your country code!", "+38");
const kyivstar = phone.includes("039", 3) || phone.includes("096", 3) || phone.includes("097", 3) || phone.includes("098", 3) || phone.includes("067", 3);
const vodafone = phone.includes("050", 3) || phone.includes("066", 3) || phone.includes("095", 3) || phone.includes("099", 3);
const lifecell = phone.includes("063", 3) || phone.includes("073", 3) || phone.includes("093", 3);

if (kyivstar === true) {
  phone = "kyivstar";
} else if (vodafone === true) {
  phone = "vodafone";
} else if (lifecell === true) {
  phone = "lifecell";
} else {
  phone = "undefined";
}

switch (phone) {
  case "kyivstar":
    console.log("3)You using Kyivstar");
    break;
  case "vodafone":
    console.log("3)You using Vodafone");
    break;
  case "lifecell":
    console.log("3)You using Lifecell");
    break;
  default:
    console.log("3)You using undefined operator");
}
