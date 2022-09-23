fetch("https://http.cat/405")
    .then((response) => response.json())
    .then((data) => {
       
        let imageElement = document.getElementById("cat-image");
       
        console.log(data.message);
        imageElement.src = data.message;
    });