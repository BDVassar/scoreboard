let earthScore = 0;
let buggerScore = 0;



function earthPlanetDestroyed() {
  earthScore += 1;
  console.log("Earth Destroyed a Planet!");
  drawCode();
}

function buggerPlanetDestroyed() {
  buggerScore += 1;
  console.log("Buggers Destroyed a Planet!");
  drawCode();
}

function earthSystemDestroyed() {
  earthScore += 5;
  console.log("Earth Destroyed a Planet!");
  drawCode();
}

function buggerSystemDestroyed() {
  buggerScore += 5;
  console.log("Buggers Destroyed a Planet!");
  drawCode();
}

function earthPlanetColonized() {
  earthScore -= 1;
  console.log("Earth Destroyed a Planet!");
  drawCode();
}

function buggerPlanetColonized() {
  buggerScore -= 1;
  console.log("Buggers Destroyed a Planet!");
  drawCode();
}

function earthSystemColonized() {
  earthScore -= 5;
  console.log("Earth Destroyed a Planet!");
  drawCode();
}

function buggerSystemColonized() {
  buggerScore -= 5;
  console.log("Buggers Destroyed a Planet!");
  drawCode();
}

function reset() {
  earthScore = 0;
  buggerScore = 0;
  drawCode();
}



function drawCode() {
  let earthElm = document.getElementById('earth-Score');
  console.log('earthScore')
  earthElm.innerText = earthScore;
  let buggerElm = document.getElementById('bugger-Score');
  console.log('buggerScore')
  buggerElm.innerText = buggerScore;
}

drawCode();