function move() {
    const element = document.getElementById("myBar");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        element.style.width = width + '%'; 
      }
    }
  }