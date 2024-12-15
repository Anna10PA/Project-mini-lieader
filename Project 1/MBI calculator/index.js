// ფორმულა KG / ((CM/100)*2)
// Bmi 
function bmi(){
    let KG = document.getElementById('Weight').value;
    let CM = document.getElementById('height').value;
    let BMI = (KG / ((CM/100)*2)).toFixed(1);
    let result = '';

    if (KG <=0 || CM <=0){
        result = 'height or weight is incorect'
        document.getElementById('BMI').innerHTML = '- - - -'
        console.log('error')
    }
    else{
        document.getElementById('BMI').innerHTML = BMI;

        if (BMI < 16 ){
            result = 'You are Severe Thinness';
        } 
        else if (16 <= BMI && BMI <17 ){
            result = 'You are Moderate Thinness';
        }
        else if (17 <= BMI && BMI <18.5){
            result = 'You are Mild Thinness';
        }
        else if (18.5 <= BMI && BMI < 25){
            result = 'You are Normal'
        }
        else if (25 <= BMI && BMI < 30){
            result = 'You are Overweight'
        }
        else if (30 <= BMI && BMI < 35){
            result = 'You are Obese Class I';
        }
        else if (35 <= BMI && BMI <= 40){
            result = 'You are Obese Class II';
        }
        else if (BMI > 40){
            result = 'You are Obese Class III'
        }
    }
    document.getElementById('result').innerHTML = result;

    console.log('result was: ' + result)
    console.log('Bmi was: ' + BMI)
}

// delete values
function Delete(){
    document.getElementById('height').value = '';
    document.getElementById('Weight').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('BMI').innerHTML = ''
}

// delete story (Refresh)
function Refresh(){
    location.reload()
}