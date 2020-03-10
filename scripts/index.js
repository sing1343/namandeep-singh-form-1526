// get the reference to button with id validate-form
		let fn = document.getElementById("fname");

		let em = document.getElementById("email");

		let msg = document.getElementById("message");

		let btn = document.getElementById("submit");

		// create the event handler that will take care
		// of the action following button-click
		function formValidator(){

		

			// create object that will save user inputs (empty bucket)
			let feedback = {};

			// create array that will save error messages (empty bucket)
			let errors = [];

			// check if full name has a value
			if (fn.value !== ""){
				feedback.fname = fn.value;
			} else {
				errors.push("<p>please provide your full name</p>");
			}

			// check if email has a value
			if (em.value !==""){
				feedback.email = em.value;
			} else {
				errors.push("<p>please provide your email</p>");
			}

			if (msg.value !== ""){
				feedback.msg = msg.value;
			} else {
				errors.push("<p>message is missing</p>");
			}

			// check if message has a value
			// if it does, save it
			// if it does not, create an error message (and save it too)

			// create either feedback or display all errors
			if (errors.length === 0){
				console.log(feedback);
			} else {
				console.log(errors);
			}
		}

			btn.addEventListener("click", formValidator);
		// close your event-handler

			// register the button for click event