var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  
  year = document.getElementById("year").value;
  century = findCentury(year);
  month = document.getElementById("month").value;
  dayOfMonth = document.getElementById("monthday").value;


  if(century == ""){
    alert("Input the correct century");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }
}

//function century

function findCentury(year) {
    if(year <= 0){
       century=0;
    }else if (year <= 100){
        century=1;
    }else if (year % 100 == 0){
        century =year/100;
    }else{
        century= parseInt(year/100) + 1;        
    }
    return century;
}

//Calculate func
function calculateDay(){
    getInput();
	
	
	if(parseInt(century)> 0 && parseInt(month) >0 && parseInt(year)> 0 && parseInt(dayOfMonth)> 0){
    
	
	dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
} else{
	alert("enter a valid number")
}
	

}

//main caller func
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//Test chackDayOfWeek function
}

//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    alert("gender cannot be empty")//Test the radio buttons
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
                // console.console.log("Pass");//Test male case
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                  break;

              }
        break
        default:
        console.log("pass");//Test gender switch
    }
}
