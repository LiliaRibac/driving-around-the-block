let car = document.getElementById('car');
let carProps = {
    drivingDirection: 'right',
    carSpeed: 3
}
let board = document.getElementById('game-board');
let intervalId;

function reset() {
    stop();
    carProps.drivingDirection = 'right';
    var board = document.querySelector("#game-board");
    board.innerHTML = '';
    
    road.paint(road);
    road2.paint(road2);
    road3.paint(road3);
    road4.paint(road4);

    intersection.paint(intersection);
    intersection2.paint(intersection2);
    intersection3.paint(intersection3);
    intersection4.paint(intersection4);

    showCar(road, intersection)

}


function start() {
    intervalId = setInterval(function () {
        move()
    }, 50);
}

function stop() {
    let car = document.getElementById('car');
    clearInterval(intervalId);
}


function Road(width, height, top, left, drivingSpeed) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.drivingSpeed = drivingSpeed;

    this.paint = (road) => {
        console.log("Painting the road")

        let section = document.createElement('div');
        section.style.width = `${road.width}px`;
        section.style.height = `${road.height}px`;
        section.style.position = `absolute`;
        section.style.top = `${road.top}px`;
        section.style.left = `${road.left}px`;
        section.style.backgroundColor = '#333';

        board.appendChild(section);
    }

    this.slow = () => {

    }
}

function Intersection(width, height, top, left) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;

    this.paint = (intersection) => {
        console.log("Painting the road")

        let section = document.createElement('div');
        section.style.width = `${intersection.width}px`;
        section.style.height = `${intersection.height}px`;
        section.style.position = `absolute`;
        section.style.top = `${intersection.top}px`;
        section.style.left = `${intersection.left}px`;
        section.style.backgroundColor = 'yellow';

        board.appendChild(section);
    }
}

function showCar(road, intersection) {
    var start = document.querySelector("#start");
    var car = document.createElement("img");
    car.setAttribute("id", "car");
    car.setAttribute("style", ("top:" + (road.top + 50) + "px;" + "left:" + (road.width + intersection.width) + "px;"));
    car.setAttribute("src", "art/car-red.png");
    board.appendChild(car);
}

// Creates Roads && Intersections
let road = new Road(600, 100, 100, 200); // top road
let road2 = new Road(600, 100, 400, 200); // bottom road
let road3 = new Road(100, 200, 200, 100); // left road
let road4 = new Road(100, 200, 200, 800); // right road

let intersection = new Intersection(100, 100, 100, 100); // top left intersection
let intersection2 = new Intersection(100, 100, 400, 100); // bottom left Intersection
let intersection3 = new Intersection(100, 100, 100, 800); // top right Intersection
let intersection4 = new Intersection(100, 100, 400, 800); //  bottom right Intersection

// Painted Roads && Intersections to screen
road.paint(road);
road2.paint(road2);
road3.paint(road3);
road4.paint(road4);

intersection.paint(intersection);
intersection2.paint(intersection2);
intersection3.paint(intersection3);
intersection4.paint(intersection4);

showCar(road, intersection)



function move() {
    checkIfInIntersection();
    nearIntersection();
    if (carProps.drivingDirection === 'right') {
        moveRight();
    } else if (carProps.drivingDirection === 'down') {
        moveDown();
    } else if (carProps.drivingDirection === 'left') {
        moveLeft();
    } else if (carProps.drivingDirection === 'up') {
        moveUp();

    }
}

function moveRight() {
    let car = document.getElementById('car');
    return car.style.left = `${parseInt(car.style.left.replace('px', '')) + carProps.carSpeed}px`;
}

function moveDown() {
    let car = document.getElementById('car');
    return car.style.top = `${parseInt(car.style.top.replace('px', '')) + carProps.carSpeed}px`;
}

function moveLeft() {
    let car = document.getElementById('car');
    return car.style.left = `${parseInt(car.style.left.replace('px', '')) - carProps.carSpeed}px`;
}

function moveUp() {
    let car = document.getElementById('car');
    return car.style.top = `${parseInt(car.style.top.replace('px', '')) - carProps.carSpeed}px`;
}


function checkIfInIntersection() {
    let car = document.getElementById('car');
    let carLeft = `${parseInt(car.style.left.replace('px', ''))}`
    let carTop = `${parseInt(car.style.top.replace('px', ''))}`

    if (carTop <= 200 && carLeft >= 800) { // top right int
        carProps.carSpeed = 1;
        car.style.transform = 'rotate(90deg)';
        carProps.drivingDirection = 'down';

    } else if (carTop >= 415 && carLeft >= 800) { // bottom right int
        carProps.carSpeed = 1;
        car.style.transform = 'rotate(180deg)';
        carProps.drivingDirection = 'left';

    } else if (carTop >= 405 && carLeft <= 130) { // bottom left int
        carProps.carSpeed = 1;
        car.style.transform = 'rotate(270deg)';
        carProps.drivingDirection = 'up';

    } else if (carTop <= 150 && carLeft <= 150) {
        carProps.carSpeed = 1;
        car.style.transform = 'rotate(360deg)';
        carProps.drivingDirection = 'right';

    } else if (carTop <= 150 && carLeft > 200 && carLeft < 250) {
        console.log(
            "Stopping Car!"
        )
        stop()
    } else {
        console.log("Not in intersection", "left: ", carLeft, "top: ", carTop, carProps);
        carProps.carSpeed = 10;
    }
}

function nearIntersection() {
    let car = document.getElementById('car');
    let carLeft = `${parseInt(car.style.left.replace('px', ''))}`
    let carTop = `${parseInt(car.style.top.replace('px', ''))}`

    if (carTop <= 150 && carLeft >= 700) { // top right int
        carProps.carSpeed = 5;

    } else if (carTop >= 320 && carLeft >= 800) { // bottom right int
        carProps.carSpeed = 5;

    } else if (carTop >= 400 && carLeft <= 230) { // bottom left int
        carProps.carSpeed = 5;

    } else if (carTop <= 250 && carLeft <= 100) { // top left
        carProps.carSpeed = 5;
    }
}