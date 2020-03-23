
let clickUpgrades = {
  teacups: {
    price: 50,
    quantity: 0,
    multiplier: 2,
  },
  butterknives: {
    price: 150,
    quantity: 0,
    multiplier: 5,
  }
};

let automaticUpgrades = {
  gromits: {
    price: 500,
    quantity: 0,
    multiplier: 10,
  },
  wereRabbits: {
    price: 1000,
    quantity: 0,
    multiplier: 20,
  }
};

let cheese = 0

function update() {
  document.getElementById("cheese").innerHTML = cheese.toString();

  document.getElementById("teacup-price").innerHTML = clickUpgrades.teacups.price.toString();
  document.getElementById("butterknife-price").innerHTML = clickUpgrades.butterknives.price.toString();
  document.getElementById("gromit-price").innerHTML = automaticUpgrades.gromits.price.toString();
  document.getElementById("wereRabbit-price").innerHTML = automaticUpgrades.wereRabbits.price.toString();

  document.getElementById("teacup-quantity").innerHTML = clickUpgrades.teacups.quantity.toString();
  document.getElementById("butterknife-quantity").innerHTML = clickUpgrades.butterknives.quantity.toString();
  document.getElementById("gromit-quantity").innerHTML = automaticUpgrades.gromits.quantity.toString();
  document.getElementById("wereRabbit-quantity").innerHTML = automaticUpgrades.wereRabbits.quantity.toString();
}


function mine() {

    if (clickUpgrades.teacups.quantity == 0) {
    cheese
  } else if (clickUpgrades.teacups.quantity >= 1) {
    cheese += clickUpgrades.teacups.multiplier
  }

    if (clickUpgrades.butterknives.quantity == 0) {
    cheese
  } else if (clickUpgrades.butterknives.quantity >= 1) {
    cheese += clickUpgrades.butterknives.multiplier
  }

    if (automaticUpgrades.gromits.quantity == 0) {
    cheese
  } else if (automaticUpgrades.gromits.quantity >= 1) {
    cheese += automaticUpgrades.gromits.multiplier
  }

    if (automaticUpgrades.wereRabbits.quantity == 0) {
    cheese
  } else if (automaticUpgrades.wereRabbits.quantity >= 1) {
    cheese += automaticUpgrades.wereRabbits.multiplier
  }
  cheese++
  console.log(cheese)
  update()
}

function teacup() {
  if (clickUpgrades.teacups.quantity == 0, cheese >= 50){
    cheese -= 50;
    clickUpgrades.teacups.quantity++
    console.log("TEACUP ACQUIRED - " + clickUpgrades.teacups.quantity)
    update()
    clickUpgrades.teacups.price *= 2
  }
//  try nesting this if statement
  if (clickUpgrades.teacups.quantity >= 1, cheese >= 100) {
    cheese -= 100
    clickUpgrades.teacups.quantity++
    console.log("TEACUP ACQUIRED - " + clickUpgrades.teacups.quantity)
    update()
  }

  
}

function butterknife() {
  if(cheese >= 150){
    cheese -= 150
    clickUpgrades.butterknives.quantity++
    console.log("BUTTERKNIFE ACQUIRED - " + clickUpgrades.butterknives.quantity)
    update()
  }
}

function gromit() {
  if(cheese >= 500){
    cheese -= 500
    automaticUpgrades.gromits.quantity++
    console.log("GROMIT ACQUIRED - " + automaticUpgrades.gromits.quantity)
    update()
  }
}

function wereRabbit() {
  if(cheese >= 1000){
    cheese -= 1000
    automaticUpgrades.wereRabbits.quantity++
    console.log("WERE-RABBIT ACQUIRED - " + automaticUpgrades.wereRabbits.quantity)
    update()
  }
}

update()