// Select color input
// Select size input
/* const setColor = document.getElementById("colorPicker")//.value;
    setColor.change(function(event){
    setColor = event.target.value
  }); */
//
// Your code goes here!
function makeGrid() {
    // find HTML elements by id and link them in .js
    const table = document.getElementById("pixelCanvas"); // to append grid squares
    const makeHeight = document.getElementById("inputHeight").value; // get user input value
    const makeWidth = document.getElementById("inputWidth").value;
    table.innerHTML = ''; // change content inside element - clear color
    // make row
    for(let i = 0; i < makeHeight; i++) {
        let row = table.insertRow(i); // appends to <tbody> [i] <tr> elements-cells
        // make column
        for(let j = 0; j< makeWidth; j++){
            let col = row.insertCell(j); // appends to <tr> [i] <td> elements-cells

        col.addEventListener('click', function(event){ // add click method to squares to change color
            event.target.style.backgroundColor = document.getElementById("colorPicker").value;
            // event.target allows direct access to paragraph element to modify color in this instance
      });
    }
  }
}

// add method for the event to occur when button is clicked - resets background color
document.getElementById("sizePicker").addEventListener('submit', function(event) {
  event.preventDefault();  // prevent applying color outside grid
  makeGrid();
});

// https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
// https://medium.com/@jacobwarduk/how-to-correctly-use-preventdefault-stoppropagation-or-return-false-on-events-6c4e3f31aedb
// https://forum.freecodecamp.org/t/addeventlistener-and-changing-background-color/193023/2
