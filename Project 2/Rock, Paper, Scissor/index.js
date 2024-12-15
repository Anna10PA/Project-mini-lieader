let Choise = ["Rock", 'Paper', 'Scissor']
let UserScore = 0
let CompiuterScore = 0
let compiuterChoise = ''
let tie = 0
let compiuterWin = 0
let userWin = 0

function Game(UserChoise){
    compiuterChoise = Math.random()
    if (compiuterChoise >= 0 && compiuterChoise < 1/3){
        compiuterChoise = Choise[0]
    }
    else if(compiuterChoise >= 1/3 && compiuterChoise < 2/3){
        compiuterChoise = Choise[1]
    }
    else{
        compiuterChoise = Choise[2]
    }

    if (UserChoise === compiuterChoise){
        document.getElementById('result').innerHTML = 'Tie';
        document.getElementById('Tie').innerHTML = tie += 1
    }
    else if (UserChoise === 'Rock'){
        if (compiuterChoise === 'Paper'){
            document.getElementById('result').innerHTML = 'You win';
            document.getElementById('user_score').innerHTML = UserScore += 1
            document.getElementById('user_win').innerHTML = userWin += 1
        }
        else if (compiuterChoise === 'Scissor'){
            document.getElementById('result').innerHTML = 'You Lost';
            document.getElementById('compiuter_score').innerHTML = CompiuterScore += 1;
            document.getElementById('compiuter_win').innerHTML = compiuterWin += 1
        }
    }

    else if (UserChoise === 'Paper'){
        if (compiuterChoise === 'Scissor'){
            document.getElementById('result').innerHTML = 'You win';
            document.getElementById('user_score').innerHTML = UserScore += 1;
            document.getElementById('user_win').innerHTML = userWin += 1
        }
        else if (compiuterChoise === 'Rock'){
            document.getElementById('result').innerHTML = 'You Lost';
            document.getElementById('compiuter_score').innerHTML = CompiuterScore += 1;
            document.getElementById('compiuter_win').innerHTML = compiuterWin += 1
        }
    }

    else if (UserChoise === 'Scissor'){
        if (compiuterChoise === 'Paper'){
            document.getElementById('result').innerHTML = 'You win';
            document.getElementById('user_score').innerHTML = UserScore += 1;
            document.getElementById('user_win').innerHTML = userWin += 1
        }
        else if (compiuterChoise === 'Rock'){
            document.getElementById('result').innerHTML = 'You Lost';
            document.getElementById('compiuter_score').innerHTML = CompiuterScore += 1;
            document.getElementById('compiuter_win').innerHTML = compiuterWin += 1
        }
    }
    document.getElementById('user').innerHTML = UserChoise;
    document.getElementById('compiuter').innerHTML = compiuterChoise;
}


function Model(){
    let model = document.getElementById('Model');
    document.body.style.backgroundColor = model.value

    if (model.value === 'rgb(0, 23, 50)'){
        document.body.style.color = 'white';
    }
    else if (model.value == 'white'){
        document.body.style.color = 'rgb(0, 23, 50)'
    }
}