const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

/**
 *
 * VALIDATORS
 *
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
  return /^[a-z]+$/.test(username);
}

// Must contain a lowercase, uppercase letter and a number
function isValidPassword(password) {
  let upperCaseTest = /[A-Z]/.test(password);
  let lowerCaseTest = /[a-z]/.test(password);
  let digitTest = /\d/.test(password);
  return upperCaseTest && lowerCaseTest && digitTest;
}

// The telephone number must be in the format of (555) 555-5555
function isValidTelephone(telephone) {
  return /^(\d{3})(\d{3})(\d{4})$/.test(telephone);
}

// Must be a valid email address
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

/**
 *
 * FORMATTING FUNCTIONS
 *
 */

function formatTelephone(text) {
  let regex = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})$/
 return text.replace(
      regex,
      "($1) $2-$3"
    );
}

/**
 *
 * SET UP EVENTS
 *
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    //this fxn returned has closure over validator
    //from the creatListener fxn
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));

passwordInput.addEventListener("input", createListener(isValidPassword));

telephoneInput.addEventListener("input", createListener(isValidTelephone));

telephoneInput.addEventListener("blur", e => {
  e.target.value = formatTelephone(e.target.value)
});

emailInput.addEventListener("input", createListener(isValidEmail));

let obj = /e/.exec("The best things in life are free!");
console.log(obj);
