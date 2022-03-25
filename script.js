// Sign Up starts ----->
function signup(e) {
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
// Sign Up ends --------

// Sign In starts ------->
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
// Sign In ends ---------



// Home Page Script starts ------>

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

// Home page script ends-----


// Boys section start ------>
function pushCart() {
    window.location.href = "cart.html"
}

var data = [{
    name: "Boys' stretch jean in medium wash",
    price: "6000",
    image: "https://www.jcrew.com/s7-img-facade/BA081_DM2237?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420"
},];

var items = {}
items.name = data[0].name;
items.price = data[0].price;
items.image = data[0].image;

let addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", add);

function add() {

    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", JSON.stringify([]))
    }

    let product = JSON.parse(localStorage.getItem("bag"))

    product.push(items)


    localStorage.setItem("bag", JSON.stringify(product))

}
// Boys section ends ------

// Girls section starts ----->
function pushCart() {
    window.location.href = "cart.html"
}

var data = [{
    name: "Metallic lodge moccasins",
    price: "7095",
    image: "https://www.jcrew.com/s7-img-facade/BC932_GY6628?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420"
},];

var items = {}
items.name = data[0].name;
items.price = data[0].price;
items.image = data[0].image;

let addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", add);

function add() {

    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", JSON.stringify([]))
    }

    let product = JSON.parse(localStorage.getItem("bag"))

    product.push(items)


    localStorage.setItem("bag", JSON.stringify(product))

}
// Girls section ends -----

// Men section starts ----->
function pushCart() {
    window.location.href = "cart.html"
}

var data = [{
    name: "Kenton cap-toe boots in English waxed leather",
    price: "10000",
    image: "https://www.jcrew.com/s7-img-facade/AQ375_PP0354?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420"
},];

var items = {}
items.name = data[0].name;
items.price = data[0].price;
items.image = data[0].image;

let addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", add);

function add() {

    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", JSON.stringify([]))
    }

    let product = JSON.parse(localStorage.getItem("bag"))

    product.push(items)


    localStorage.setItem("bag", JSON.stringify(product))

}
// Mens section ends -------

// Women section starts ------>
function pushCart() {
    window.location.href = "cart.html"
}

var data = [{
    name: "Rollneck™ sweater in supersoft yarn",
    price: "11095",
    image: "https://www.jcrew.com/s7-img-facade/BD613_RD6052?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=420&hei=420"
},];

var items = {}
items.name = data[0].name;
items.price = data[0].price;
items.image = data[0].image;

let addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", add);

function add() {

    if (localStorage.getItem("bag") === null) {
        localStorage.setItem("bag", JSON.stringify([]))
    }

    let product = JSON.parse(localStorage.getItem("bag"))

    product.push(items)


    localStorage.setItem("bag", JSON.stringify(product))

}
// Women section ends ------

// Cart starts ------>
var cartItems = JSON.parse(localStorage.getItem("bag"));
    console.log(cartItems);
    displayItem(cartItems);

    function handlePriceSort() {
        console.log("here");
        var selected = document.getElementById("sortByPrice").value;
        if (selected == "low") {
            cartItems = cartItems.sort(function (a, b) {
                return a.price - b.price;
            });
            displayItem(cartItems);
        }
        if (selected == "high") {
            cartItems = cartItems.sort(function (a, b) {
                return b.price - a.price;
            });
            displayItem(cartItems);
        }
        console.log(cartItems);
        // displayItem(cartItems);
    }

    function handleNameSort() {
        var selected = document.getElementById("sortByName").value;
        if (selected == 'asc') {
            cartItems = cartItems.sort(function (a, b) {
                return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            });
            displayItem(cartItems);
        }
        if (selected == 'dsc') {
            cartItems = cartItems.sort(function (a, b) {
                return a.name > b.name ? -1 : b.name > a.name ? 1 : 0;
            });
            displayItem(cartItems);
        }
        console.log(cartItems);

    }
    function displayItem(cartItems) {
        console.log('itemm', cartItems)
        document.querySelector("#dis").innerHTML = "";

        cartItems.map(function (item) {

            var h1 = document.createElement("h1");
            h1.textContent = ` ${item.name}`;
            h1.style.color = 'grey';
            h1.style.fontSize = '22px'

            var h2 = document.createElement("h2");
            h2.textContent = `Rs: ${item.price}`;

            var img = document.createElement("img");
            img.setAttribute("src", item.image);
            img.style.height = '230px'
            img.style.width = '250px'

            var hr = document.createElement("hr");
            console.log('asdd', item)
            document.querySelector("#dis").append(img, h1, h2, hr);
        });
    }

    var total = cartItems.reduce(function (acc, cv) {
        return acc + Number(cv.price);
    }, 0);

    console.log(total);
    localStorage.setItem("total_details", JSON.stringify(total))
    //document.getElementById("total").textContent = total;

    document.getElementById("total").innerHTML = `<h5 class='totalcost'>Total Cost is Rs:${total}</h5>
    <button onclick="goToCheckout()" class='checkout' >Checkout</button>`;

    function goToCheckout() {
        window.location.href = "checkout.html"
    }
    // Cart Ends -----------

    // Payment starts -------->
    function done(e) {
        e.preventDefault()
        console.log("hi")
        window.location.href = "proceed.html"
    }
    // Payment Ends ----------

    // checkout starts -------->
    let total = JSON.parse(localStorage.getItem("total_details"))
    console.log('maindata', total)
    let apped = document.getElementById("total_append")

    apped.innerHTML = total

    let coupan = document.getElementById("coupan")
    console.log(coupan)

    let apply = document.querySelector(".btn")
    apply.addEventListener("click", validate)


    function validate() {
        let coupan = document.getElementById("coupan")
        console.log(coupan.value)
        if (coupan.value === "masai30") {
            alert("Coupan successfully applied. Please check the updated total amount.")
            apped.innerHTML = Number(total - total * .30)
        } else {
            alert("Invalid Coupan")
        }
    }

    function proceed(e) {
        e.preventDefault()
        console.log("hi")
        window.location.href = "payment.html"
    }
    // Checkout ends -----------