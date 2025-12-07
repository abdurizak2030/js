//blocking 
function fetchUserDataSync() {
    alert("Fetching user data...");
    return {  name: "ahmed " };
}
console.log("Start fetching user data...");
const user = fetchUserDataSync(); 
console.log("User data:", user);
console.log("This message is blocked until user data is fetched.");


//non-blocking
function fetchUserDataAsync(callback) {
    setTimeout(() => {
        const userData = {name: "Ahmed" };
        callback(userData);
    }, 2000);