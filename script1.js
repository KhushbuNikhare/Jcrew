// HOME PAGE 
function signup() {
    window.location.href = "sign_up.html"
}

function shopWomen() {
    window.location.href = "women_new_arrival.html"
}
function shopMen() {
    window.location.href = "men_new_arrival.html"
}
function shopGirl() {
    window.location.href = "girl_new_arrival.html"
}
function shopBoy() {
    window.location.href = "boy_new_arrival.html"
}

function pushCart() {
    window.location.href = "cart.html"
}
const left = document.getElementById('left');
const right = document.getElementById('right');

let count = 0;
const images = [];

images[0] = "https://edge.curalate.com/v1/img/RaZZi9BtCqp_so4-IYI7kJXUg3CBS-36vNDGkVGts9k=/w/450?typ=webp";
images[1] = "https://edge.curalate.com/v1/img/EjLKSXRfAKC6cnkUQjA0x9bJrCHonnLewL-2_FVa2IQ=/w/450?typ=webp";
images[2] = "https://edge.curalate.com/v1/img/PL1MMgSVFSBsqHhTQOcNtrRoBOY6z1IkAfKKK6siZvk=/w/450?typ=webp";
images[3] = "https://edge.curalate.com/v1/img/EUxiP99yfICxg6oVSz7D_kgnmo_3kHPwedOjbcbjsSw=/w/450?typ=webp";
images[4] = "https://edge.curalate.com/v1/img/xWQamNWT9gc_7vTTL4x-b8g1IWuNT3heHcoV6suEIME=/w/450?typ=webp";
images[5] = "https://edge.curalate.com/v1/img/97ExRDmFF5aHi2HPZusjcDdap_oTxnTFRqid0I8rjWc=/w/450?typ=webp";
images[6] = "https://edge.curalate.com/v1/img/zo4RcL30vs37YmQ7p8qVsA6WF69HaBOIOFH1z0Dk29A=/w/450?typ=webp";

left.addEventListener('click', slideLeft);
right.addEventListener('click', slideRight);

function initial() {
    document.slide1.src = images[count];
    document.slide2.src = images[count + 1];
    document.slide3.src = images[count + 2];
    document.slide4.src = images[count + 3];

}

function slideLeft() {
    let first = images.shift();
    images.push(first);

    initial();
}

function slideRight() {
    let first = images.pop();
    images.unshift(first);

    initial();
}

window.onload = initial;

// SIGN UP
function signup1(e) {
    e.preventDefault();

    let myForm = document.getElementById("form");

    let name = myForm.name.value;
    let email = myForm.email.value;
    let mobile = myForm.mobile.value;
    let password = myForm.password.value;

    console.log("hi", email, name)

    var user = {
        name,
        email,
        mobile,
        password
    }

    function checkForProperData() {

        for (k in user) {
            if (user[k] === "") {
                alert("Please fill all the details")
                return false;
            }
        }
        return true;
    }

    if (checkForProperData()) {

        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]))
        }

        let users = JSON.parse(localStorage.getItem("users"));

        users.push(user)

        localStorage.setItem("users", JSON.stringify(users))

    }
    window.location.href = "sign_in.html";

}

// LOGIN 
function login(e) {
    e.preventDefault();
    console.log("hi")
    let myForm = document.getElementById("form");
    console.log(myForm)

    let email = myForm.email.value;

    let password = myForm.password.value;
    console.log(email, password)
    let all_users = JSON.parse(localStorage.getItem("users"))

    let result = false;
    all_users.forEach(element => {

        if (element.email === email && element.password == password) {

            result = true
            window.location.href = "home_page.html";
        }
    });

    if (!result) {
        alert("Invalid Credentials");
    }

}

// PAYMENT PAGE
function done(e) {
    e.preventDefault()
    console.log("hi")
    window.location.href = "proceed.html"
}






