   function changeContent() {
            const header = document.querySelector("#header");
            const paragraph = document.querySelector("#paragraph");

      
            header.textContent = "Welcome to the DOM Manipulation Exercise";
           
            paragraph.innerHTML = "This content has been updated";
        }