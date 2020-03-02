const userDefaults = {
    uid: 0,          // From Auth
    displayName: "John Doe", // From Auth
    about: "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
    photoURL: '', // From Auth
    status: "online",
    userRole: "admin",
};
// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////
const state = {
    AppActiveUser: userDefaults,
    token: JSON.parse(localStorage.getItem("userInfo")) || ''
};
export default state
