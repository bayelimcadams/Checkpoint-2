
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


// function drawCatMood() {
//   let catImageElem = document.getElementById("cat-image")
//   let catStatusElem = document.getElementById("cat-status")
//   let catMood = randomizeCatMood()

//   catStatusElem.innerText = catMood.status
//   catImageElem.src = catMood.img
// }


// function giveCatnip() {
//   if (cat.dosed) {
//     return
//   }
//   let interval = setInterval(drawCatMood, 1000)
//   setTimeout(function () { cat.dosed = false; clearInterval(interval) }, 10000)
//   cat.dosed = true
// }

function collectAutomaticUpgrades () {

  cheese += automaticUpgrades.gromits.quantity * automaticUpgrades.gromits.multiplier

  cheese += automaticUpgrades.wereRabbits.quantity * automaticUpgrades.wereRabbits.multiplier
  update()
}

// let interval = setInterval (autoUpgrades2, 3000)

// }

// function autoUpgrades1 () {
//   automaticUpgrades.gromits.multiplier
// }

// function autoUpgrades2 () {
//   automaticUpgrades.wereRabbits.mutiplier
// }

// set interval should be using the auto upgrades object, going to multiply the quantity by the multiplier (for-in) cheese * quantity * multiplier


// function collectAutomaticUpgrades () {

//   for (const upgradeKey in automaticUpgrades) {
//     if (automaticUpgrades.hasOwnProperty(upgradeKey)) {
//       let upgrade = automaticUpgrades[upgradeKey];
//       let interval = setInterval((upgradeKey, 3000) => {
        
//       }, interval);
//     }
//   }
// }


  // for (const weaponKey in items) {
  //   if (items.hasOwnProperty(weaponKey)) {
  //     let weapon = items[weaponKey];
  //     player.items.push(weapon);
  //   }
  // }


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
  if (cheese >= clickUpgrades.teacups.price){
    cheese -= clickUpgrades.teacups.price;
    clickUpgrades.teacups.quantity++
    console.log("TEACUP ACQUIRED - " + clickUpgrades.teacups.quantity)
    update()
    clickUpgrades.teacups.price *= 2
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

setInterval (collectAutomaticUpgrades, 3000)

update()