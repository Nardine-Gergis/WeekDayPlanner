$.noConflict();

$(document).ready (function () {
    //global array 
var k =["Nine", "Ten","Eleven", "Twelve", "One","Two","Three","Four","Five"];
var Area =["#text9","#text10","#text11","#text12","#text1","#text2","#text3","#text4","#text5"];

//setting time and gettin seconds to run live
setInterval(function () {
    $("aCurrentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    
}, 1000);

//variables to help retrieve time in DOm
var today = new Date();
var hour = today.getHours();
console.log(hour);

//use the loop to go over the tetareas on the html
for (var i =0; index < Area.length; i++) {

    //set the data time into a var
    var data= $(Area[i]).atrr("data-time");
    
    //chang a string t a number to use in if statement 
    data =parseInt(data);

    //future if 
    if (hour<data) {
        $(Area[i]).addClass("col-md-10 future description");
        
    }

    //present if 
    if (hour==data) {
        $(Area[i]).addClass("col-md-10 present description");
        
    }

    //past if 
    if (hour>data) {
        $(Area[i]).addClass("col-md-10 past description");
        
    }
}

//adding event listener to  text content
$(".saveBtn").on(click,function () {
    //get nearby value using siblings method 
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().atrr("id");
    //save it in local storage
    localStorage.setItem(time,value);
    
});
//for loopwill matc the array above and link them via k method and place them back 
for (let i = 0; i < k.length; i++) {
    //gets all the setitem to the local storage 
    var cool=localStorage.getItem(k[i]);
    console.log(localStorage.getItem(k[i]));

    //if local storage is null then the loop will skip and print back in txt area
    if(cool != null){
        $(Area[i]).text(cool);
    }
}
console.log(localStorage.length);

    

});