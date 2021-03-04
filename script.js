var compatibleUnits = {
    mile: 1,
    kilometer: 1,

}
var outputValue = document.getElementById("convertedValue");

function convertValues(){
    let initialValue = document.getElementById("initialValue").value;
    let initialUnit = document.getElementById("initialUnit").value;
    let convertUnit = document.getElementById("convertUnit").value;
    if(compatibleUnits[convertUnit] == compatibleUnits[initialUnit]){
        
    } else{
        outputValue.value = null;
        outputValue.placeholder = "Units invalid!";
    }
}
