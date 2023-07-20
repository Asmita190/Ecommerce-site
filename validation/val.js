function validateForm() {
	var fname = document.forms["messageForm"]["firstname"].value;
	var lname = document.forms["messageForm"]["lastname"].value;
	var gender = document.forms["messageForm"]["gender"].value;
	var message = document.forms["messageForm"]["message"].value;

	if (fname == "" || lname == ""  || message=="" ){
		alert("Empty fields found. Please fill all the required information.");
	}
	else {
		alert("Thank You for your feedback!");
	}
}