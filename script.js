// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let shroomHP = 100;
let myAP = 100;
// let shroomHP = document.querySelector('hp-text').innerHTML;
// let myAP = document.getElementById('ap-meter').innerHTML;
const arcaneScepterStats = {
    damage: 14,
    apCost: 12
}
const entangleStats = {
    damage: 9,
    apCost: 23
}
const dragonBladeStats = {
    damage: 47,
    apCost: 38
}
const starFireStats = {
    damage: 25,
    apCost: 33
}

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()

function arcaneScepterAttack (event) {
    console.log('Arcane Scepter attack!')
    if (myAP < arcaneScepterStats.apCost){
        console.log('Not enough AP!')
    }
    else if (myAP > arcaneScepterStats.apCost) {myAP -= arcaneScepterStats.apCost;
    shroomHP -= arcaneScepterStats.damage;

    console.log('You dealt 14 damage with your scepter. Enemy has', shroomHP, ' left. You have' , myAP, 'attack points remaining');
}}

function entangleAttack(event) {
    console.log('Entangling action!')
    if (myAP < entangleStats.apCost){
        console.log('Not enough AP! Try something else!')
    }
    else if (myAP >= entangleStats.apCost){
    shroomHP -= entangleStats.damage;
    myAP -= entangleStats.apCost;
    console.log('You entangled the enemy! Enemy has ', shroomHP, 'health remaining. You have ', myAP, 'attack points remaining')
}}
function dragonBladeAttack(event) {
    console.log('Attacked with the Dragon Blade!')
    if (myAP < dragonBladeStats.apCost){
        console.log('You are too tired, try a smaller attack!')
    }
    else if (myAP >= dragonBladeStats.apCost){
    shroomHP -= dragonBladeStats.damage;
    myAP -= dragonBladeStats.apCost;
    console.log('You smote the enemy with your Dragon Blade! Enemy has ', shroomHP, 'Remaining. You have ', myAP, 'attack pointsremaining')
    }
}
function starFireAttack(event) {
    console.log('Launched Star Fire!')
    if (myAP < starFireStats.apCost){
        console.log('Out of AP! Finish them!')
    }
    else if (myAP >= starFireStats.apCost){
    
    shroomHP -= starFireStats.damage;
    myAP -= starFireStats.apCost;
    console.log('You unleased Star Fire! Enemy has ', shroomHP, 'Remaining. You have ', myAP, 'attack points remaining')
    }
}