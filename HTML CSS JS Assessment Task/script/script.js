"use strict";

// $(document).ready(show_cupcakes);


//===================Global Declarations==========================//
let customerName = document.querySelector(".form-control");
let count = document.querySelector("#count");
let selectType = document.querySelector("#selectType");
let selectTime = document.querySelector("#selectTime");
let selectAllergies = document.querySelector("#selectAllergies");
let messageAlert1 = document.querySelector(".message");
let messageAlert2 = document.querySelector(".message2");
let messageAlert3 = document.querySelector(".message3");
let messageAlert4 = document.querySelector(".message4");
let messageAlert5 = document.querySelector(".message5");
let submitBtn = document.querySelector("#submitBtn");
let welcomeUser = document.querySelector("#welcomeUser");
let showBtn = document.querySelector("#changeBtn");
let tablecup=document.querySelector(".table");
let username=document.querySelector("#customerName");

var cup_cakes=[
    {name:"Chocolate",calories:"high",weight:"200gm"},
    {name:"Carrot",calories:"medium",weight:"150gm"},
    {name:"Banana",calories:"high",weight:"200gm"},
    {name:"Strawberry",calories:"low",weight:"160gm"},
    {name:"Peanut",calories:"medium",weight:"200gm"}
];

// table///////////
function show_cupcakes(){
    //write code that shows the cupcakes in the table as per the instructions
    console.log(cup_cakes[0].name)
console.log(tablecup)
    let i=0;
    for( i; i < cup_cakes.length;i++){
    let tableRow= document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    console.log(cup_cakes[i])
    console.log(i);
    td1.innerHTML=`${cup_cakes[i].name}`;
    td2.innerHTML=`${cup_cakes[i].calories}`;
    td3.innerHTML=`${cup_cakes[i].weight}`;

    tableRow.appendChild(td1);
    tableRow.appendChild(td2);
    tableRow.appendChild(td3);
    tablecup.appendChild(tableRow);


    if(cup_cakes[i].calories =="high")
    td2.style.background="red";
    else if (cup_cakes[i].calories=="medium")
    td2.style.background="orange";
    else if (cup_cakes[i].calories=="low")
    td2.style.background="green";
    }
}

show_cupcakes();




/////////////////validate//////////////////
// let submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function (nameValidation) {
nameValidation.preventDefault();

//customer name
if (customerName.value.length<5 || customerName.value.length>16 || customerName.value=="")
messageAlert1.innerHTML="The name is required and must be at least five characters long and at most 16 characters long";
else 
messageAlert1.innerHTML="";

//count
if (count.value.length<1|| count.value.length>15 )
messageAlert2.innerHTML="The count is required and must be at least 1 and at most 15";
else 
messageAlert2.innerHTML="";

//type
if (selectType.value=="none")
messageAlert3.innerHTML="The user must choose a type (None is not accepted)";
else 
messageAlert3.innerHTML="";


//time  selectTime
if (selectTime.value=="none")
messageAlert4.innerHTML="The user must choose an appointment time (None is not accepted) ";
else 
messageAlert4.innerHTML="";

//chocolate and dairy free
if (selectType.value=="Chocolate" && selectAllergies.value=="Dairy free" )
messageAlert5.innerHTML="type of cake is not dairy free";
else if (selectType.value=="Pecan" && selectAllergies.value=="Nut free" )
messageAlert5.innerHTML=" the pecan cake is not nut free";
else 
messageAlert5.innerHTML="";


// 4pm chocolate
if (selectType.value=="Chocolate" && selectTime.value=="4:00 PM" )
messageAlert5.innerHTML="this type of cake cannot be delivered at 4 PM";
else 
messageAlert5.innerHTML="";
})


let welcome=document.querySelector(".welcome");

function show_storage(){
    welcome.innerHTML=`welcome ${username.value}`;
    localStorage.setItem("fname",username.value);
}