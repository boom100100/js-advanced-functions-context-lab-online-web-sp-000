/* Your Code Here */
let allRecords = function(){}

let createEmployeeRecord = function(){
  let obj = {
    "firstName": this[0],
    "familyName": this[1],
    "title": this[2],
    "payPerHour": this[3],
    "timeInEvents": [],
    "timeOutEvents": []
  }
  return obj;
}

let createEmployeeRecords = function(array){
  return array.map(x => createEmployeeRecord(x));
}


let createTimeInEvent = function(){}


let createTimeOutEvent = function(){}
let hoursWorkedOnDate = function(){}
let wagesEarnedOnDate = function(){}
let payrollExpense = function(){}
let calculatePayroll = function(){}
//let wagesEarnedOnDate = function(){}
//let wagesEarnedOnDate = function(){}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}