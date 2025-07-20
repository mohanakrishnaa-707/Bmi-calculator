function calculatebmi(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const heightInmeters=height/100;
    if(height>0 && weight>0){

            const bmi=weight/(heightInmeters*heightInmeters);
            const result = document.getElementById("result").innerHTML = "Bmi is:" + bmi;
        
    }
    else{
        const result = document.getElementById("result").innerHTML = "Please enter valid height and weight";
    }

}