module.exports = function airtimeReport() {

    var totalReport = 0;
    var call = 0;
    var sms = 0;
    var mb = 0;


    function addAirtime(num) {
        var airtime = num.split(",");
        for (var i = 0; i < airtime.length; i++) {


            if (airtime[i] === "call") {
                call += 1.65;
            } else if (airtime[i] === "sms") {
                sms += 0.65;
            } else if (airtime[i] === "mb") {
                mb += 10.50;
            }

            totalReport = call + sms + mb

        }

    }

    function keepCallReport() {
        return call;
    }

    function keepSmsReport() {
        return sms;
    }

    function keepDataReport() {
        return mb;
    }

    function keepTotalReport() {
        return totalReport.toFixed(2);
    }
    
    function generate(length){
        
        var inputStr = "Airtime report -> 4 sms's, 3 calls & 2mb of data. Total cost: 27.55" 
        var characters = inputStr.length;

        for(var i = 0; i<length; i++){
            
            inputStr += characters.charAt(Math.floor(Math.random()*characters.length))
        }
        return inputStr;
    }




    return {
        addAirtime,
        keepCallReport,
        keepSmsReport,
        keepDataReport,
        keepTotalReport,
         generate
    }

}