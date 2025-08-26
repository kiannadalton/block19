const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];
const newFreelancers = [
  { name: "Dr. House", price: 58, occupation: "doctor" },
  { name: "Dr. Cudy", price: 55, occupation: "manager" },
  { name: "Prof. Law", price: 45, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function init() {
  // add h1 with Freelancer Forum
  const root = document.querySelector("#root");
  const header = document.createElement("h1");
  header.innerText = "Freelancer Form";
  root.appendChild(header);

  // add h3 as "the average starting price is " + avPrice
  const priceDiv = document.createElement("div");
  priceDiv.setAttribute("id", "avPrice");
  root.appendChild(priceDiv);
  renderAveragePrice();

  // add h2 Available Freelancers
  const availFreelancers = document.createElement("h2");
  availFreelancers.innerText = "Available Freelancers";
  root.appendChild(availFreelancers);

  // Add table, thead > th, tbody > tr > td
  const freelancerTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  root.appendChild(freelancerTable);
  freelancerTable.appendChild(thead);
  freelancerTable.appendChild(tbody);

  // create th for thead
  for (let key of Object.keys(freelancers[0])) {
    const th = document.createElement("th");
    th.innerText = key;
    thead.appendChild(th);
  }

  renderFreelancers();
}

function renderFreelancers() {
  // traverse to find tbody variable
  const freelancerTable = document.querySelector("tbody");
  // create a method that goes through the array
  const freelancerElement = freelancers.map((person) => {
    const row = document.createElement("tr");

    const f_name = document.createElement("td");
    f_name.innerText = person.name;

    const f_price = document.createElement("td");
    f_price.innerText = person.price;

    const f_occupation = document.createElement("td");
    f_occupation.innerText = person.occupation;

    row.appendChild(f_name);
    row.appendChild(f_price);
    row.appendChild(f_occupation);
    return row;
  });
  freelancerTable.replaceChildren(...freelancerElement);
}

// create add freelancer function
function addFreelancer() {
  const newFreelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  freelancers.push(newFreelancer);

  //re-render the freelancers
  renderFreelancers();
  // re-render the price as freelancers are added
  renderAveragePrice();
}

setInterval(addFreelancer, 3000);

// create function with average price.
// for(let value of Object
function renderAveragePrice() {
  const priceDiv = document.querySelector("#avPrice");
  const averagePrice = calcAverage(freelancers);
  const priceSentence = document.createElement("p");
  priceSentence.innerHTML = `The average starting price is ${averagePrice}`;

  priceDiv.replaceChildren(priceSentence);
}

function calcAverage(arr) {
  let totalPrice = arr.reduce((acc, currValue) => {
    acc += currValue.price;
    return acc;
  }, 0);
  return (totalPrice / arr.length).toFixed(2);
}

init();
