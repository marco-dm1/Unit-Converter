var outputValue = document.getElementById("convertedValue");

function convertValues(){
    let initialValue = document.getElementById("initialValue").value;
    let initialUnit = document.getElementById("initialUnit").value;
    let convertUnit = document.getElementById("convertUnit").value;
    if(initialValue){
        if(initialUnit == convertUnit){
            outputValue.value = initialValue
        }
        else if(initialUnit == "mile"){
            if(convertUnit = "kilometer"){
                outputValue.value = (initialValue * 1.60934)
            }
        }
        else{
            outputValue.value = (initialValue * 0.621371)
        }
    }
}
