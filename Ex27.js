function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                resolve(" name: John Doe, age: 30 ");
            } else {
                reject("Error: Data fetch failed");
            }
        }, 2000);
    });
}

fetchDataWithPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
