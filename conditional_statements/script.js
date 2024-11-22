/*

//  *****Check if a number is odd or even in JavaScript******

let num = prompt("Enter Any Number!!");

if(num%2==0){
    console.log(`${num} is Even Number`);
}
else{
    console.log(`${num} is Odd Number`);
}

 

// ****now using functin Check if a number is odd or even in JavaScript*******

let num = prompt("Enter Number!!");

function EvenOdd()
{
    if(num%2==0){
        console.log(`${num} is Even Number`);
    }
    else{
        console.log(`${num} is Odd Number`);
    }
}
EvenOdd(num);


//  2. Check if input variable is a number or not

let num = prompt("Enter number or string and check????SS");
function isValidNum()
{
    if(isNaN(num))
    {
        console.log(`${num} is Not a Number it is a sting`);
    }
    else
    {
    console.log(`${num} is a Number`);
    }
}
isValidNum();



// ***3. Find the largest of two number***

let num1 = prompt("Enter Fist Number");
let num2 = prompt("Enter Second Number");

if(num1>num2) 
    {
        console.log(`${num1} is greter than ${num2}`);
    }
else if(num2>num1)
    {
        console.log(`${num2} is greter than ${num1}`);
    }
else
    {
        console.log(`${num1} and ${num2} is Equal`);
    }


// 4. Find the largest of three number

let num1 = prompt("Enter Fist Number");
let num2 = prompt("Enter Second Number");
let num3 = prompt("Enter third Number");
if((num1>num2)&&(num1>num3))
    {
        console.log(`${num1} is greter than ${num2} and ${num3}`);
    }
else if(num2>num1&&num2>num3)
    {
        console.log(`${num2} is greter than ${num1} and ${num3}`);
    }
else if(num3>num1&&num3>num2)
    {
        console.log(`${num3} is greter than ${num1} and ${num2}`);
    }
else if(num1>num2&&num2==num3)
    {
        console.log(`${num1} is greter than and ${num2} or ${num3} are Equal`);
    }
else if(num2>num3&&num1==num3)
    {
        console.log(`${num2} is greter than and ${num1} or ${num3} are Equal`);
    }
else if(num3>num1&&num1==num2)
    {
        console.log(`${num3} is greter than and ${num1} or ${num2} are Equal`);
    }
else
    {S
        console.log("all  Equal");
    }



//  5. Check if a triangle is equilateral, scalene, or isosceles USING FUNCTION

let side1 = prompt("Enter Side 1 ???");
let side2 = prompt("Enter Side 2 ???");
let side3 = prompt("Enter Side 3 ???");

function FindTriangleType(side1,side2,side3)
{
    if(side1==side2 && side1==side3)
        {
            console.log("This Triangle is Eqilateral !!!");
        }
    else if((side1 == side2) || (side2 == side3) || (side1 == side3))
        {
            console.log("This Triangle is Isosceless !!!");
        }
    else
        {
            console.log("This Triangle is scalene");
        }
    
}

FindTriangleType(side1,side2,side3);



//   6. Find the a number is present in given range using function

let start = Number(prompt("Enter Staring rang number ???"));
let end = Number(prompt("Enter Ending rang number ???"));
let rang = Number(prompt("Enter The Findng Range Number ???"));

function Findingrang(rang,start,end)
{
    if(rang >= start && rang <= end)
    {
        console.log(`${rang} is between the range ${start} and ${end}`);
    }
    else
    {
        console.log(`${rang} is Not oin Rang`);
    }
}
Findingrang(rang,start,end);


//  7. Perform arithmetic operations on two numbers(like calculater)

let num1 = Number(prompt("Enter first value"));
let str = String(prompt("Enter Arathimatic oparations"));
let num2 = Number(prompt("Enter second value"));

if( str=="+")
{
    console.log(`Sum of ${num1} + ${num2} = ${num1+num2}`);
}
if( str=="-")
    {
        console.log(`Subtract of ${num1} + ${num2} = ${num1-num2}`);
    }
if( str=="*")
{
    console.log(`multiply  of ${num1} + ${num2} = ${num1*num2}`);
}
if( str=="/")
    {
        console.log(`Division of ${num1} + ${num2} = ${num1/num2}`);
    }


//  8. Find check if a year is leap year or not

let year = Number(prompt("Enter Year ?"));

function findLeapYear(year)
    {
        if(((year%4 == 0)&&(year%100 != 0))||(year%400 == 0))
        {
            console.log(`${year} is Leap year`);
        }
        else
        {
            console.log(`${year} is not Leap year`);
        }
    }
    findLeapYear(year);

    */

//  9. Find the grade for input marks

let name = String(prompt("Enter Student Name "));
let phy = Number(prompt("Enter Physics Marks "));
let chem = Number(prompt("Enter Chemistry Marks "));
let mathe = Number(prompt("Enter Mathematics Marks "));
let eng = Number(prompt("Enter Mathematics Marks "));
let TotaleMarks;

function checkGrade(phy,chem,mathe,eng)
    {
        TotaleMarks = (phy + chem + mathe + eng)/4;

        if(TotaleMarks>=90 && TotaleMarks<= 100)
            {
                console.log(`${name} is Obtaind A grade and Total Marks is ${TotaleMarks}`);
            }
        else if(TotaleMarks>=75 && TotaleMarks<= 89)
            {
                console.log(`${name} is Obtaind B grade and Total Marks is ${TotaleMarks}`);
            }
        else if(TotaleMarks>=65 && TotaleMarks<= 74)
            {
                console.log(`${name} is Obtaind C grade and Total Marks is ${TotaleMarks}`);
            }
        else if(TotaleMarks>=55 && TotaleMarks<= 64)
            {
                console.log(`${name} is Obtaind D grade and Total Marks is ${TotaleMarks}`);
            }
        else if(TotaleMarks>=33 && TotaleMarks<= 54)
            {
                console.log(`${name} is Obtaind A grade and Total Marks is ${TotaleMarks}`);
            }
        else
            {
                console.log(`${name} is Failed and Total Marks is ${TotaleMarks}`);
            }
    }
    checkGrade(phy,chem,mathe,eng);