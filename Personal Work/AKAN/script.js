var submission = function() {
	var daysOfTheWeek = [
	  "Sunday",
	  "Monday",
	  "Tuesday",
	  "Wednesday",
	  "Thursday",
	  "Friday",
	  "Saturday"
	];
	var maleNames = [
	  "Kwasi",
	  "Kwadwo",
	  "Kwabena",
	  "Kwaku",
	  "Yaw",
	  "Kofi",
	  "Kwame"
	];
	var femaleNames = [
	  "Akosua",
	   " Adwoa",
	  "Abenaa",
	  "Akua",
	  "Yaa",
	  "Afua",
	  "Ama"
	];
	var month = parseInt(document.getElementById("month").value);
	var year = parseInt(document.getElementById("year").value);
	var day = parseInt(document.getElementById("day").value);
	var name =(document.getElementById("name").value);
	var date0fbirth = new Date(year + "/" + month + "/" + day);
	var results = date0fbirth.getDay();
	var output = document.getElementById("output");
	var male = document.getElementById("male")
	var female = document.getElementById("female")
	
	if (month =="" && year =="" && day =="" && name=="") {
	  alert("Please Enter you credentials");
	  return false;
	}
  
  //   if (month == null || month== "", day == null || day == "", year== null || year == "", name == null || name == "") {
  //     alert("Please Fill All Required Field");
  //     return false;
  //   }
  // }
	
	
   if (year < 0) {
	  output.style.background ="red"
	  output.style.color= "white"
	  output.innerHTML = "Hey! " + name + " please enter a valid year! "
  }
	
  else if ((month < 1) || (month > 31)) {
	  output.style.background ="red"
	  output.style.color= "white"
	  output.innerHTML = "Hey! " + name + " please enter a valid month! "
  }
	
   else if (day < 0 || day > 31) {
	  output.style.background ="red"
	  output.style.color= "white"
	  output.innerHTML = "Hey! " + name + " please enter a valid day! "
  }
  //  var valid = (year>0 && (month > 0 && month <= 12) (day > 0 && day <32))
   
  //  if(valid == false){
  //    alert("No Input received!!");
  //  }
  
	if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
	  alert("Your akan name is..")
	}
	 else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
	  output.style.background ="lime"
	  output.style.background ="red"
	  output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
  }
} 
