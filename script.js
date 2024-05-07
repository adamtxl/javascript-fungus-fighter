// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let shroomHP = 100;
let myAP = 100;
let fungusDomHp = document.getElementsByClassName('hp-text')[0];
let fungusHpValue = Number(fungusDomHp.innerHTML);
let hpMeterElement = document.getElementById('hp-meter');
let hpMeterValue = hpMeterElement.value;
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

function arcaneScepterAttack(event) {
    console.log('Arcane Scepter attack!')
    if (myAP < arcaneScepterStats.apCost) {
        console.log('Not enough AP!')
    } else if (myAP >= arcaneScepterStats.apCost) {
        myAP -= arcaneScepterStats.apCost;
        hpMeterValue -= arcaneScepterStats.damage;
        fungusHpValue -= arcaneScepterStats.damage;

        // Update the value of the hp-meter progress bar
        hpMeterElement.value = hpMeterValue;

        // Update the value of the fungus HP text
        fungusDomHp.innerHTML = fungusHpValue;

        console.log('You dealt 14 damage with your scepter. Enemy has', hpMeterValue, ' left. You have', myAP, 'attack points remaining');
    }
}

function entangleAttack(event) {
    console.log('Entangling action!')
    if (myAP < entangleStats.apCost) {
        console.log('Not enough AP!')
    } else if (myAP >= entangleStats.apCost) {
        myAP -= entangleStats.apCost;
        hpMeterValue -= entangleStats.damage;
        fungusHpValue -= entangleStats.damage;

        // Update the value of the hp-meter progress bar
        hpMeterElement.value = hpMeterValue;

        // Update the value of the fungus HP text
        fungusDomHp.innerHTML = fungusHpValue;
    console.log('You entangled the enemy! Enemy has ', hpMeterValue, 'health remaining. You have ', myAP, 'attack points remaining')
}}
function dragonBladeAttack(event) {
    console.log('Attacked with the Dragon Blade!')
    if (myAP < dragonBladeStats.apCost) {
        console.log('Not enough AP!')
    } else if (myAP >= dragonBladeStats.apCost) {
        myAP -= dragonBladeStats.apCost;
        hpMeterValue -= dragonBladeStats.damage;
        fungusHpValue -= dragonBladeStats.damage;

        // Update the value of the hp-meter progress bar
        hpMeterElement.value = hpMeterValue;

        // Update the value of the fungus HP text
        fungusDomHp.innerHTML = fungusHpValue;
    console.log('You smote the enemy with your Dragon Blade! Enemy has ', hpMeterValue, 'Remaining. You have ', myAP, 'attack pointsremaining')
    }
}
function starFireAttack(event) {
    console.log('Launched Star Fire!')
    if (myAP < arcaneScepterStats.apCost) {
        console.log('Not enough AP!')
    } else if (myAP >= starFireStats.apCost) {
        myAP -= starFireStats.apCost;
        hpMeterValue -= starFireStats.damage;
        fungusHpValue -= starFireStats.damage;

        // Update the value of the hp-meter progress bar
        hpMeterElement.value = hpMeterValue;

        // Update the value of the fungus HP text
        fungusDomHp.innerHTML = fungusHpValue;
    console.log('You unleased Star Fire! Enemy has ', hpMeterValue, 'Remaining. You have ', myAP, 'attack points remaining')
    }
}