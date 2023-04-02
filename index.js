/* Your Code Here */
const createEmployeeRecord = (array1) => {
    let obj = {
        firstName : array1[0],
        familyName : array1[1],
        title : array1[2],
        payPerHour : array1[3],
        timeInEvents : [],
        timeOutEvents :[]
    }
    return obj
}

const createEmployeeRecords = (array1) => {
    let arr1 = []
    for (let i of array1){
        arr1.push(createEmployeeRecord(i))
    }
    return arr1
}

function createTimeInEvent(time){
    let newtime = time.split(' ')
    let obj = {type:"TimeIn", hour:parseInt(newtime[1]), date:newtime[0]}
    this.timeInEvents.push(obj)
    return this
}


function createTimeOutEvent(time) {
    let ti = time.split(' ')
    let newobj = {type:"TimeOut", hour:parseInt(ti[1]), date:ti[0]}
    this.timeOutEvents.push(newobj)
    return this  
}

function hoursWorkedOnDate(date){
    let timeinobj = this.timeInEvents.find(dateobj=> dateobj.date === date).hour
    let timeoutobj = this.timeOutEvents.find(dateobj=> dateobj.date === date).hour
    return (timeoutobj - timeinobj)/100
}
function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.bind(this, date)
    return hours()* this.payPerHour
}
function findEmployeeByFirstName(collection, firstNameString){
   return collection.find(record => record.firstName === firstNameString)

}
function calculatePayroll(collection){
    return collection.reduce(function(memo,rec){
        return memo + allWagesFor.call(rec)
    },0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

