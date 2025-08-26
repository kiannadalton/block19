const pets = [
  { name: "Thor", type: "cat", age: "6" },
  { name: "Loki", type: "cat", age: "7" },
  { name: "Deku", type: "dog", age: "3" },
];

const newPets = [
  { name: "Rocky", type: "dog", age: "3" },
  { name: "Porky", type: "pig", age: "1" },
  { name: "Spirit", type: "horse", age: "5" },
];

function init() {
  // 👉 STEP 1: Grab the div with the id of "root"
  const root = document.querySelector("#root");
  console.log(root);

  //  👉 STEP 2:
  // Create a new h1 element that says "Pets"
  // Add the new h1 to the root div
  const petsTitle = document.createElement("h1");
  petsTitle.innerText = "Pets";
  root.append(petsTitle);

  // 👉 STEP 3:
  // Create a table to hold our pets in
  const petsTable = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // We have three keys for all of our pets. Name, Type, and Age
  // We want to loop through the keys - use the for of  loop
  for (let key of Object.keys(pets[0])) {
    const th = document.createElement("th");
    th.innerText = key;
    thead.appendChild(th);
  }

  //add table to root
  root.appendChild(petsTable);

  // add thead to pets Table
  petsTable.appendChild(thead);

  // add tbody to petsTable
  petsTable.appendChild(tbody);

  // 👉 STEP 5:
  //   Call the function you created in step 4
  renderPets();
}

// 👉 STEP 4:
//   Create a function to render the pets in our pets array
function renderPets() {
  // select the tbody
  const petsTable = document.querySelector("tbody");
  //go through pets and get petElements returned in new array
  const petsElements = pets.map((pet) => {
    //tr --> table row, td --> table cell
    // create row for pet
    const row = document.createElement("tr");

    const p_name = document.createElement("td");
    p_name.innerText = pet.name;
    const p_type = document.createElement("td");
    p_type.innerText = pet.type;
    const p_age = document.createElement("td");
    p_age.innerText = pet.age;

    row.appendChild(p_name);
    row.appendChild(p_type);
    row.appendChild(p_age);

    return row;
  });

  // use the spread (...) to append and iterate through all of the items in the array
  // use replaceChildren to make sure we don't pets twice
  petsTable.replaceChildren(...petsElements);
}

//  👉 STEP 6:
//  Create a function to add a new pet to the pets array
function addPet() {
  // get random pet from newPets array
  const newPet = newPets[Math.floor(Math.random() * newPets.length)];
  pets.push(newPet);

  //re-render pets
  renderPets();
}

// 👉 STEP 7:
// Add an interval to add a new pet every second
// setInterval(function, milliseconds)
setInterval(addPet, 1000);
// you can stop it by adding an if section to the addPet function (if pets.length > 5){return;}

//call init function
init();
