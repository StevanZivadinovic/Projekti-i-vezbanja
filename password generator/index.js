let funkcija = () => {
  let uppercase = document.querySelector("#uppercase").checked;
  let lowercase = document.querySelector("#lowercase").checked;
  let numbers = document.querySelector("#numbers").checked;
  let symbols = document.querySelector("#symbols").checked;

  let password = document.getElementById("result");

  console.log(password);

  let length = document.querySelector("input[type=number]").value;

  if (
    uppercase === true &&
    lowercase === true &&
    symbols === true &&
    numbers === false
  ) {
    function getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }

      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === true &&
    symbols === true &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === true &&
    symbols === false &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === false &&
    symbols === true &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === false &&
    lowercase === true &&
    symbols === true &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars =
        "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === false &&
    lowercase === false &&
    symbols === true &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars = "0123456789!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === false &&
    symbols === false &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === true &&
    symbols === false &&
    numbers === false
  ) {
    function getRandomString(length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === false &&
    lowercase === true &&
    symbols === true &&
    numbers === false
  ) {
    function getRandomString(length) {
      var randomChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === false &&
    lowercase === true &&
    symbols === false &&
    numbers === true
  ) {
    function getRandomString(length) {
      var randomChars = "abcdefghijklmnopqrstuvwxyz0123456789";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === true &&
    lowercase === false &&
    symbols === true &&
    numbers === false
  ) {
    function getRandomString(length) {
      var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]=<>/,.";
      var result = "";
      for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
          Math.floor(Math.random() * randomChars.length)
        );
      }
      password.innerText = result;
      return result;
    }

    console.log("Here is your shiny new password:", getRandomString(length)); // pass desired length of random string
  } else if (
    uppercase === false &&
    lowercase === false &&
    symbols === false &&
    numbers === false
  ) {
    password.innerHTML = "Choose minimum two parameters";
  }
};

funkcija();

// const symbols = "!@#$%^&*(){}[]=<>/,.";
// let sifra =

//   Math.random().toString(36).slice(2) +
//   symbols[Math.floor(Math.random() * symbols.length)] +
//   Math.random().toString(36).toUpperCase().slice(2);
//   console.log(a);

//   let withoutLower = sifra.replace(/[a-z]/g, '2')
//   let withoutLower1 = withoutLower.substr(2, a);
//   console.log(withoutLower1.length);
//   console.log("Here is your shiny new password:", withoutLower1);

//Kopiranje text-a na clipboard

function copy_password() {
  let btnCopy = document.getElementById("result");
  var textArea = document.createElement("textarea");
  textArea.value = btnCopy.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  alert(`Password has copied: ${textArea.value}`);
  textArea.remove();
}
