var assert = require("assert");
var airtimeReport = require("../AirtimeReport");

describe('airtimeReport',  function () {
    it("It should add calls,sms and Data ", function () {
        var input = airtimeReport()

        input.addAirtime("sms,sms,call,call,sms,call,sms,mb,mb");
        var report = input.keepTotalReport();
        assert.equal(28.55, report);
    
  
    });
   
    it("It should add calls,sms and Data ", function () {
        var input = airtimeReport()

        input.addAirtime("sms,sms,call,sms,call,sms,mb");
        var report = input.keepTotalReport();
        assert.equal(16.40, report);
    
  
    });
   
    it("It should add calls,smss only", function () {
        var input = airtimeReport()

        input.addAirtime("sms,sms,call,sms,call,sms");
        var report = input.keepTotalReport();
        assert.equal(5.90, report);
    
  
    });
    it("It should add calls,only", function () {
        var input = airtimeReport()

        input.addAirtime("call,call,call,call,call,call");
        var report = input.keepTotalReport();
        assert.equal(9.90, report);
    
  
    });
   
});

