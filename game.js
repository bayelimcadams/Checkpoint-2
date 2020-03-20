
let clickUpgrades = {
  teacups: {
    price: 50,
    quantity: 0,
    multiplier: 5,
  },
  butterknives: {
    price: 150,
    quantity: 0,
    multiplier: 10,
  }
};

let automaticUpgrades = {
  gromits: {
    price: 500,
    quantity: 0,
    multiplier: 25,
  },
  wereRabbits: {
    price: 1000,
    quantity: 0,
    multiplier: 50,
  }
};

let cheese = 0

function update() {
  document.getElementById("cheese").innerHTML = cheese.toString();


}


function mine() {
  cheese++
  console.log(cheese)
  update()
}

function teacup() {
  if(cheese >= 50){
    cheese -= 50
    update()
    console.log("TEACUP ACQUIRED")
    clickUpgrades.teacups.quantity++
  }
}

function butterknife() {
  if(cheese >= 150){
    cheese -= 150
    update()
    console.log("BUTTERKNIFE ACQUIRED")
  }
}

function gromit() {
  if(cheese >= 500){
    cheese -= 500
    update()
    console.log("GROMIT ACQUIRED")
  }
}

function wereRabbit() {
  if(cheese >= 1000){
    cheese -= 1000
    update()
    console.log("WERE-RABBIT ACQUIRED")
  }
}

update()