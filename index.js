console.log("form validation");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");

name.addEventListener("blur", () => {
  console.log("name");

  //validate your name
  let regex = /^[a-zA-Z]+$/;
  let str = name.value;
  console.log(regex.exec(str));
  if (regex.test(str)) {
    console.log("it is matched");
    name.classList.add("is-valid");
    let go = document.getElementById("go");
    go.classList.add("valid-feeback");
    go.classList.remove("invalid-feeback");
  } else {
    console.log("it did not match");
    name.classList.add("is-invalid");
    let go = document.getElementById("go");
    go.classList.add("invalid-feeback");
    let qw = document.createTextNode(
      "Your name must be 8-20 characters long without spaces, containing only letters."
    );

    go.appendChild(qw);
    document.getElementById("go").style.color = "red";
    go.classList.remove("valid-feeback");
  }
});
email.addEventListener("blur", () => {
  console.log("email");

  //validate your email
  let re = /^([_\.0-9a-zA-Z]+)@([_\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
  let str = email.value;
  console.log(re.exec(str));
  if (re.test(str)) {
    console.log("it is matched");
    email.classList.add("is-valid");
    let set = document.getElementById("set");
    set.classList.add("valid-feeback");
    set.classList.remove("invalid-feeback");
  } else {
    console.log("it did not match");
    email.classList.add("is-invalid");
    let set = document.getElementById("set");
    set.classList.add("invalid-feeback");
    let qw = document.createTextNode("Enter your valid email.");

    set.appendChild(qw);
    document.getElementById("set").style.color = "red";
    set.classList.remove("valid-feeback");
  }
});
phone.addEventListener("blur", () => {
  console.log("phone");

  //validate you phone number
  let reg = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(reg.exec(str));
  if (reg.test(str)) {
    console.log("it is matched");
    phone.classList.add("is-valid");
    let get = document.getElementById("get");
    get.classList.add("valid-feeback");
    get.classList.remove("invalid-feeback");
  } else {
    console.log("it did not match");
    phone.classList.add("is-invalid");
    let get = document.getElementById("get");
    get.classList.add("invalid-feeback");
    let qw = document.createTextNode("Your phone number should be valid.");

    get.appendChild(qw);
    document.getElementById("get").style.color = "red";
    get.classList.remove("valid-feeback");
  }
});

submit.addEventListener("click", function (e) {
  console.log("submitted");
  if (email.value.length < 1) {
    email.classList.add("is-invalid");
    let set = document.getElementById("set");
    set.classList.add("invalid-feeback");
    let qw = document.createTextNode("Please enter your email.");
    set.appendChild(qw);
    document.getElementById("set").style.color = "red";
    set.classList.remove("valid-feeback");
  }
  if (name.value.length < 1) {
    name.classList.add("is-invalid");
    let go = document.getElementById("go");
    go.classList.add("invalid-feeback");
    let qw = document.createTextNode("Please enter you name.");
    go.appendChild(qw);
    document.getElementById("go").style.color = "red";
    go.classList.remove("valid-feeback");
  }
  if (phone.value.length < 1) {
    phone.classList.add("is-invalid");
    let get = document.getElementById("get");
    get.classList.add("invalid-feeback");
    let qw = document.createTextNode("please enter your phone number.");

    get.appendChild(qw);
    document.getElementById("get").style.color = "red";
    get.classList.remove("valid-feeback");
  }
  let regex = /^[a-zA-z]+$/;
  let re = /^([_\.0-9a-zA-Z]+)@([_\.0-9a-zA-Z]+)\.([a-zA-Z]){2,5}$/;
  let reg = /^([0-9]){10}$/;
  if (
    regex.test(name.value) == true &&
    re.test(email.value) == true &&
    reg.test(phone.value) == true
  ) {
    console.log("yesss");
    let al = document.getElementById("al");
    al.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>SUCCESS : </strong>Your Form Is Submitted Successfully.
                               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                               </button>
                          </div>
    `;
    setTimeout(function () {
      al.innerHTML = "";
    }, 5000);
    let form = document.getElementById("form");
    form.reset();
    e.preventDefault();
  }
});