// user requst
async function fetchdata () {
    
    try{ 
        console.log("starting data")
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
             throw new Error(`HTTP error! Status: ${response.status}`);
        }
     const data = response.json();
     console.log(data)
      

    } catch (errore) {
console.log(errore)
    }

}
fetchdata ()
