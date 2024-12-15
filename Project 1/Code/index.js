let heart = 3;

function check(){
    let first  = document.getElementById("p1").value 
    let second = document.getElementById("p2").value 
    let third  = document.getElementById("p3").value 
    let fourth = document.getElementById("p4").value 
    let fifth  = document.getElementById("p5").value 
    let sixth  = document.getElementById("p6").value 

    if (first === '9' && second === '8' && third === '0' && fourth === '0' && fifth === '9' && sixth === "0"){
        document.getElementById('correctText').innerHTML = "CORRECT !";
        document.getElementById('errorText').innerHTML = "";

        document.getElementById("p1").disabled = true;
        document.getElementById("p2").disabled = true;
        document.getElementById("p3").disabled = true;
        document.getElementById("p4").disabled = true;
        document.getElementById("p5").disabled = true;
        document.getElementById("p6").disabled = true; 
    }
    else{   
        if (heart > 0){
            document.getElementById(`heart${heart}`).style.color = 'black';
            heart = heart - 1;

            document.getElementById('errorText').innerHTML = "WRONG !"
            document.getElementById('correctText').innerHTML = "";
        }
        else if (heart <= 0 ){
            heart = heart - 1;
            document.getElementById('errorText').innerHTML = "..."
            document.getElementById('correctText').innerHTML = "...";
            alert("YOU CAN'T TRY ANYMORE!");

            document.getElementById("p1").disabled = true;
            document.getElementById("p2").disabled = true;
            document.getElementById("p3").disabled = true;
            document.getElementById("p4").disabled = true;
            document.getElementById("p5").disabled = true;
            document.getElementById("p6").disabled = true; 
        }
    }
}

function background(){
    const model = document.getElementById('background').value;

    if(model){
        document.body.style.backgroundColor = model
    }
}

