const phone = prompt("3)Enter your phone including your country code!", "+38");
const phoneCode = phone.substring(3, 6);

const kyivstar = ["039", "096", "097", "098", "067"];
const vodafone = ["050", "066", "095", "099"];
const lifecell = ["063", "073", "093"];

const isKyivstar = kyivstar.includes(phoneCode);
const isVodafone = vodafone.includes(phoneCode);
const isLifecell = lifecell.includes(phoneCode);

console.log("Your operator: \nIs Kyivstar:", isKyivstar, "\nIs Vodafone:", isVodafone, "\nIs Lifecell:", isLifecell);


