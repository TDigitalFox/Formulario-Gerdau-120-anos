/** @format */

let email_domains = [
  "@gerdau.com",
  "@gerdau.com.br",
  "@gerdau.com.co",
  "@gerdaumetaldom.com",
  "@siderperu.com.pe",
  "@sizuca.com.ve",
  "@gerdau.com.uy",
  "@sider.com.pe",
  "@gerdau.com.ar",
  "@gerdaudiaco.com",
  "@gerdaucorsa.com.mx",
];

function validate() {
  let form = document.querySelector("form");
  let form_data = new FormData(form);

  // validateEmail(form_data.get("email"));

  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  return true;
}

function ieFormValidation() {
  let isValid = false;
  let inputs = document.querySelectorAll("input");
  let selects = document.querySelectorAll("select");
  let text = document.querySelector("textarea");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      isValid = true;
    } else {
      isValid = false;
    }
  }
  for (var i = 0; i < selects.length; i++) {
    if (selects[i].value === "Country") {
      isValid = false;
    } else if (selects[i].value === "") {
      isValid = false;
    } else {
      isValid = true;
    }
  }
  if (text.value !== "") {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

function validateEmail(email) {
  if (
    !email_domains.includes(email.substring(email.indexOf("@"), email.length))
  ) {
    document
      .querySelector("#email_input")
      .setCustomValidity("O email precisa ser da Gerdau.");
  } else {
    document.querySelector("#email_input").setCustomValidity("");
  }
}
