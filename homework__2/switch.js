//3*)Solve #3 using the switch statement

let phone = prompt("Enter your phone including your country code!", "+38");
const phoneCode = phone.substring(3, 6);

switch (phoneCode) {
  case "039", "096", "097", "098", "067":
    console.log("3)You using Kyivstar");
    break;
  case "050", "066", "095", "099":
    console.log("3)You using Vodafone");
    break;
  case "063", "073", "093":
    console.log("3)You using Lifecell");
    break;
  default:
    console.log("3)You using undefined operator");
}