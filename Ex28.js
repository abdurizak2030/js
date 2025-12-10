async function displayUserData() {
    try {
        console.log("Start fetching user data...");
        const user = await fetchUserData(); 
        console.log("User data:", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

displayUserData();
console.log("This message runs immediately and is not blocked.");
