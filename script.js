const handleUnitConvert = () => {
    let cmNumber = parseFloat(document.getElementById("getCmNumber").value);
    let conversionType  = document.getElementById("conversionType").value;

    let result;
    
    if(isNaN(cmNumber)){
        alert("Please Enter a Valid number");
        return;
    }
    
    switch (conversionType) {

        case "meter":
            result = cmNumber/100;
            break;
        case "inch":
            result = cmNumber/2.54;
            break;

        case "feet":
            result = cmNumber/30.48;
            break;
        default:
            result = "Please enter a valid number";
            break;
    }
        document.getElementById("result").textContent = result;
};