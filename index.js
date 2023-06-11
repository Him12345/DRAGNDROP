// Selecting the imgbox and whiteboxes classes from the HTML file
const imgbox = document.querySelector(".imgbox");
const whiteBoxes = document.getElementsByClassName("WhiteBox");
const btn = document.querySelector('.btn');
const box1 = document.querySelector('.box1');

// Adding the dragstart event listener
imgbox.addEventListener("dragstart", (event) => {
  console.log("drag starts");

  event.target.className += " hold";
  // Display none after completing all work
  setTimeout(() => {
    event.target.className = " hide";
  }, 0);
});

// Adding dragend event listener to reset the class name
imgbox.addEventListener("dragend", (e) => {
  console.log("drag ends");
  e.target.className = "imgbox";
});

// Loop for selecting all whiteboxes once
for (const WhiteBox of whiteBoxes) {
  WhiteBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("dragover starts");
  });

  WhiteBox.addEventListener("dragenter", (e) => {
    console.log("dragenter starts");
    e.target.className += " impresion";
  });

  WhiteBox.addEventListener("dragleave", (e) => {
    console.log("dragleave starts");
    e.target.className = "WhiteBox";
  });

  WhiteBox.addEventListener("drop", (e) => {
    console.log("drop starts");
    e.target.append(imgbox);
    alert("Your image has been dropped");
  });
}

// Event listener for the reset button
btn.addEventListener("click", () => {
  console.log("clicked");

  // Move imgbox back to box1
  box1.appendChild(imgbox);
});