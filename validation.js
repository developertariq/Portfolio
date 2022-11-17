
function showMessage(input, message, type) {
	const msg = document.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
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

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contact-me-form");
const NAME_REQUIRED = "Please enter your full name.";
const f_NAME_REQUIRED = "Please enter your first name.";
const l_NAME_REQUIRED = "Please enter your last name.";
const EMAIL_REQUIRED = "Please enter your email address.";
const EMAIL_INVALID = "Please enter a correct email address format.";

form.addEventListener("submit", function (event) {
	event.preventDefault();
  let fullNameValid;
  let firstNameValid;
  let lastNameValid;
  let emailValid;
  if (window.matchMedia("(max-width: 700px)").matches) {
    fullNameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    if(!fullNameValid) return;
  } else {
    firstNameValid = hasValue(form.elements["firstname"], f_NAME_REQUIRED);
    if(!firstNameValid) return;
    lastNameValid = hasValue(form.elements["lastname"], l_NAME_REQUIRED);
    if(!lastNameValid) return;
  }

  emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
  if (window.matchMedia("(max-width: 700px)").matches) {
    if (emailValid && fullNameValid) {
      form.submit();
    }
  } else {
    if (emailValid && firstNameValid && lastNameValid) {
      form.submit();
    }
  } 
  clearField()
});

function clearField() {
  form.elements["firstname"].value='';
  form.elements["lastname"].value='';
  form.elements["name"].value='';
  form.elements["email"].value='';
}
