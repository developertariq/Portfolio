
function showMessage(input, message, type) {
	const msg = input.parentElement.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
  console.log(type, input);
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contact-me-form");

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", function (event) {
	event.preventDefault();
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);

  console.log(emailValid);

	if (emailValid) {
    //form.submit();
	}
});

