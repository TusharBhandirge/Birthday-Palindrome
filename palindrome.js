

var dateInput = document.querySelector("#birth-date");
var checkButton = document.querySelector("#check");
var outputDiv = document.querySelector("#output");

checkButton.addEventListener("click", function check(){

    var date = dateInput.value;
    console.log(date);
    var count  = 0;
    var flag = false;

    clearOutput();
    flag = checkPalindorme(date);
    if(!flag){
        while(!flag){
            date = nextDate(date);
            flag = checkPalindorme(date);
            count = count+1;
        }
    }
    console.log(flag);
    if(count ==0 && flag == true){
        setMessage("your birthday is a palindrome!");

    }else{
        setMessage("your birthday is not a palindrome, you missed by "+count + "days.");
    }


});

function setMessage(msg){
    outputDiv.innerText = msg;
}

function clearOutput(){
    outputDiv.innerText = "";
}


function checkPalindorme(date){

    var dateArr = date.split("-");
    var yyyymmdd = dateArr.join("");
    var ddmmyyyy = dateArr[2] + dateArr[1] + dateArr[0];
    var mmddyy = dateArr[1]+dateArr[2] + dateArr[0].slice(-2);
    var ddmmyy = dateArr[2] + dateArr[1] + dateArr[0].slice(-2);

    if(isPalindrome(yyyymmdd) || isPalindrome(ddmmyyyy) || isPalindrome(mmddyy) || isPalindrome(ddmmyy)){
        return true;

    }else{
        return false;
    }

}

function isPalindrome(dateStr){

    var strRev = dateStr.split("").reverse().join("");
    
    console.log("date = "+dateStr);
    console.log("rev = "+strRev);

    if(strRev === dateStr){
        return true;
    }else{
        return false;
    }
}

function nextDate(date){

    var today = new Date(date);
    console.log(today);
    var tommorrow = new Date(date);
    tommorrow.setDate(tommorrow.getDate() +1);
    
   
    console.log(tommorrow.toDateString("yyyy-mm-dd"));

    var strdate = tommorrow.toDateString();
    dateArr = strdate.split(" ");

    const map = new Map();
    map.set("Jan","01");
    map.set("Feb","02");
    map.set("Mar","03");
    map.set("Apr","04");
    map.set("May","05");
    map.set("Jun", "06");
    map.set("Jul","07");
    map.set("Aug","08");
    map.set("Sep","09");
    map.set("Oct","10");
    map.set("Nov","11");
    map.set("Dec","12");
    

    var tommorrowStr = dateArr[3]+"-"+ map.get(dateArr[1]) + "-" + dateArr[2];

    console.log(tommorrowStr);

    return tommorrowStr;   

}