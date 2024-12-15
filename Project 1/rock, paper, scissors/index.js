// rock button
let compiuterScore = 0
let userScore = 0
let game = 0
function rock() {
    let rock = Math.random()
    let compiuter =""
    let result =""
    const user = "rock👊"
    if (rock >= 0 && rock <1/3){
        compiuter = "rock👊"
    }
    else if (rock >= 1/3 && rock < 2/3){
        compiuter = "paper✋"
    }
    else if (rock >= 2/3 && rock <1){
        compiuter = "scissors✌️"
    }

    if (compiuter === 'rock👊'){
        result = "TIE🤔";
        compiuterScore = compiuterScore + 1;
        userScore = userScore + 1
    }
    else if (compiuter === 'paper✋'){
        result = 'You LOST😂';
        compiuterScore = compiuterScore + 2
    }
    else if (compiuter === 'scissors✌️'){
        result = 'You WIN🥇'
        userScore = userScore + 2
    }
    console.log(compiuter);
    document.getElementById("compiuter").innerHTML = compiuter;
    document.getElementById('Result').innerHTML = result;
    document.getElementById('user').innerHTML = user;
    document.getElementById('userScore').innerHTML = userScore
    document.getElementById('compiuterScore').innerHTML = compiuterScore
    document.getElementById("Game").innerHTML = 
    game = game+1
}

// paper button
function paper() {
    let paper = Math.random()
    let compiuter =""
    let result =""
    const user = "paper✋"

    if (paper >= 0 && paper <1/3){
        compiuter = "rock👊"
    }
    else if (paper >= 1/3 && paper < 2/3){
        compiuter = "paper✋"
    }
    else if (paper >= 2/3 && paper <1){
        compiuter = "scissors✌️"
    }

    if (compiuter === "paper✋"){
        result = 'TIE🤔';
        compiuterScore = compiuterScore + 1;
        userScore = userScore + 1
    }
    else if (compiuter === "scissors✌️"){
        result = 'You LOST😂';
        compiuterScore = compiuterScore + 2
    }
    else if (compiuter === 'rock👊'){
        result = 'You WIN🥇';
        userScore = userScore + 2
    }

    document.getElementById("Result").innerHTML = result;
    console.log(compiuter);
    document.getElementById("compiuter").innerHTML = compiuter;
    document.getElementById('user').innerHTML = user 
    document.getElementById('userScore').innerHTML = userScore
    document.getElementById('compiuterScore').innerHTML = compiuterScore
    document.getElementById("Game").innerHTML = 
    game = game+1
}
// scissors button
function scissors() {
    let scissors = Math.random()
    let compiuter =""
    let result =""
    const user = "scissors✌️"

    if (scissors >= 0 && scissors <1/3){
        compiuter = "rock👊"
    }
    else if (scissors >= 1/3 && scissors < 2/3){
        compiuter = "paper✋"
    }
    else if (scissors >= 2/3 && scissors <1){
        compiuter = "scissors✌️"
    }

    if (compiuter === "scissors✌️"){
        result = "TIE🤔";
        compiuterScore = compiuterScore + 1;
        userScore = userScore + 1
    }
    else if (compiuter === 'paper✋'){
        result = "You WIN🥇";
        userScore = userScore + 2
    }
    else if (compiuter === 'rock👊'){
        result = "You LOST😂";
        compiuterScore = compiuterScore + 2
    }
    console.log(compiuter);
    document.getElementById("compiuter").innerHTML = compiuter;
    document.getElementById("Result").innerHTML = result;
    document.getElementById('user').innerHTML = user;
    document.getElementById('userScore').innerHTML = userScore;
    document.getElementById('compiuterScore').innerHTML = compiuterScore
    document.getElementById("Game").innerHTML = 
    game = game+1
}

