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
    
    // function filter(cost){
    //     var airtimeList = [];
    //     for(var i = 0; i< cost.length; i++){
    //         var currentList =  cost[i];
    //         if(currentList[i] =="calls"){
    //             airtimeList.push(currentList)
    //         }
    //     }
    //     return airtimeList;
    // }




    return {
        addAirtime,
        keepCallReport,
        keepSmsReport,
        keepDataReport,
        keepTotalReport,
        // filter
    }

}