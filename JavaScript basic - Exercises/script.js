/*

// 1). Display the current day and time

var today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
var day = today.getDay();
// Array of day names
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display the current day
console.log("Today is: " + daylist[day] + ".");

// for date
var nY = today.getFullYear();
var nM = today.getMonth();
var nD = today.getDate();

console.log(`Today date is ${nD}/${nM}/${nY}`);

// for time

var nHoure = today.getHours();
var nMinutes = today.getMinutes();
var nSecond = today.getSeconds();

console.log(`Current time is ${nHoure}:${nMinutes}:${nSecond}`);

//  2). Print the contents of the current window
// Note first creat a print bottone using HTML and CSS than apply JS

function print_Current_Page()
{
    let setPass = "Daxesh123@";
    let enterPass = prompt("Enter your password ??");
    while(setPass !== enterPass)
    {
        enterPass = prompt("You Entered rong password ! Tyr again ??");
    }
    window.print();
}
*/

// 3). 