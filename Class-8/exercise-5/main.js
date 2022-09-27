fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
       
        let imageElement = document.getElementById("dog-image");
       
        console.log(data.message);
        imageElement.src = data.message;
    });