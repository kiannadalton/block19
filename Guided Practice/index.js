// === State ===
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
// This is also where we define functions to modify the state.

// TODO: Add support for more colors
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const sizes = ["small", "medium", "large"];
const maxShapes = 10;
const shapes = [
  {
    color: "red",
    size: "small",
  },
  {
    color: "yellow",
    size: "small",
  },
];

/** Adds a shape with random properties to the `shapes` array */
function addShape() {
  if (shapes.length < 10) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    // TODO: Randomize the size of the shape
    const size = sizes[Math.floor(Math.random() * sizes.length)];

    shapes.push({ color, size });
  } else {
    clearInterval(addShapeIntervalId);
  }
}

// === Render ===
// To "render" is to update the DOM to reflect the current state.
// In this section, we define the functions to render state.

/** Updates the DOM to reflect the current state. */
function render() {
  // Render the squares
  const squareList = document.querySelector("#squares");
  const squareElements = shapes.map((shape) => {
    const squareElement = document.createElement("li");
    squareElement.classList.add(shape.color, shape.size);
    return squareElement;
  });
  squareList.replaceChildren(...squareElements);

  // TODO: Render the circles
  const circleList = document.querySelector("#circles");
  // creates element for each index of the shapes array
  const circleElements = shapes.map((shape) => {
    const circleElement = document.createElement("li");
    // adds classes for color and size in the array to li element
    circleElement.classList.add(shape.color, shape.size);
    return circleElement;
  });
  // adds mapped array to the circleList variable. Using.replaceChildren allows no repeats in generating random circles
  circleList.replaceChildren(...circleElements);
}

// === Script ===
// In this section, we call the functions that we've defined above.

// `setInterval` will call the callback function every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addShapeIntervalId = setInterval(() => {
  addShape();
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
  // added if statement to addShape function to handle this
}, 1000);

render(); // We call this function once to render the initial state
