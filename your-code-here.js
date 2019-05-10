function tick() {
    let car = document.querySelector('#car'); //get reference to car
    movingAround(car, 5); //move the car left
}

function moveRight(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    console.log(props); //check the console for what props has in it!
    element.style.left = (props.left + increment) + 'px'; //move element
}
function moveLeft(element, increment) {
    let props = getProps(element); //get the positional information you need to move an element
    console.log(props); //check the console for what props has in it!
    element.style.left = (props.left - increment) + 'px'; //move element
}

function moveDown(element, increment){
    let props = getProps(element)
    console.log(props)
    element.style.top = (props.top + increment) + 'px';
 
}

function moveUP(element, increment){
    let props = getProps(element)
    console.log(props)
    element.style.top = (props.top - increment) + 'px';
 
}

function  movingAround(element,increment){
    let props = getProps(element);
    console.log(props);
    if(props.left >= 700 && props.left <=800){
        moveRight(element,increment);
    }else if(props.top >= 130 && props.top >= 80){ 
        moveDown(element,increment)
     }else if(props.top >= 320 && props.top >= 340){
        moveLeft(element,increment);
    }
}
