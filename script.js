//MODEL
let app = document.getElementById("app");
let dragon = {
	idle: "<img src='images/idle.gif'/>",
	eat: "<img src='images/eat.gif'/>",
	sleep: "<img src='images/sleep.gif'/>",
	cleanFlames: "<img src='images/Cleanup.gif'/>",
	fly: "<img src='images/fly.gif'/>",
	borat: "<img src='images/borat.png'/>",
};
let state = dragon.idle;
//VIEW
updateView();
function updateView() {
	let html;
	html = /*HTML*/ `
  <button onclick="borat()">Borat?</button>
    <div class="gameContainer">
      <h1>Ragnar</h1>
      <div class="screen">
        ${state}
      </div>
      <div class="buttonContainer">
        <button onclick="eat()" id="eatButton">Eat</button>
        <button onclick="sleep()" id="sleepButton">Sleep</button>
        <button onclick="cleanFlames()" id="cleanUpButton">Clean up</button>
        <button onclick="fly()" id="activityButton">Fly</button>
      </div>
      </div>  
  `;
	app.innerHTML = html;
}

//CONTROLLER
function idle() {
	state = dragon.idle;
	updateView();
}
function fly() {
	state = dragon.fly;
	updateView();
	setTimeout(idle, 2500);
}
function eat() {
	state = dragon.eat;
	updateView();
	setTimeout(idle, 875);
}
function sleep() {
	state = dragon.sleep;
	updateView();
	setTimeout(idle, 6000);
}
function cleanFlames() {
	state = dragon.cleanFlames;
	updateView();
	setTimeout(idle, 3500);
}
function borat() {
	state = dragon.borat;
	updateView();
	setTimeout(idle, 750);
}
