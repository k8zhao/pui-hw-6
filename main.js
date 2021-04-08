/* Global Variables */
var counter = 0; 
var cart_items = []; 
var pillow_id = 0; 
var pillow_from_storage = JSON.parse(localStorage.getItem("cart"));

/* Object Constructors */
function Pillow(id, type, color, material, quantity, image) {
    this.id = id;
    this.type = type;
    this.color = color;
    this.material = material;
    this.quantity = quantity;
    this.image_alt = "image of" + this.type + "pillow";
    this.image = image;
}

/* Deletes product from cart + local storage */
function deleteItem(item) {
    console.log(item.firstElementChild.innerHTML); 
    item.parentNode.removeChild(item);
    pillow_from_storage.splice(item.firstElementChild.innerHTML, 1); 
    localStorage.setItem("cart", JSON.stringify(pillow_from_storage));
    // cart_items.splice(item.firstElementChild.innerHTML, 1); 
    // console.log(cart_items);
    // localStorage.setItem("cart", JSON.stringify(cart_items));
}


/* Functions */
//Checks 'color' filter and updates browse page
function checkFilter(item) {
    if (item.checked) {
        if (item.id === "after-school") {
            document.getElementById("browse-img1").setAttribute("src", "images/browse-after-school1.png");
            document.getElementById("browse-img2").setAttribute("src", "images/browse-after-school2.png");
            document.getElementById("browse-img3").setAttribute("src", "images/browse-after-school3.png");
            document.getElementById("browse-img4").setAttribute("src", "images/browse-after-school4.png");
        } else if (item.id === "morning-haze") {
            document.getElementById("browse-img1").setAttribute("src", "images/browse-morning-haze1.png");
            document.getElementById("browse-img2").setAttribute("src", "images/browse-morning-haze2.png");
            document.getElementById("browse-img3").setAttribute("src", "images/browse-morning-haze3.png");
            document.getElementById("browse-img4").setAttribute("src", "images/browse-morning-haze4.png");
        } else if (item.id === "cozy-denim") {
            document.getElementById("browse-img1").setAttribute("src", "images/browse-cozy-denim1.png");
            document.getElementById("browse-img2").setAttribute("src", "images/browse-cozy-denim2.png");
            document.getElementById("browse-img3").setAttribute("src", "images/browse-cozy-denim3.png");
            document.getElementById("browse-img4").setAttribute("src", "images/browse-cozy-denim4.png");
        } else if (item.id === "rainy-day") {
            document.getElementById("browse-img1").setAttribute("src", "images/browse-rainy-day1.png");
            document.getElementById("browse-img2").setAttribute("src", "images/browse-rainy-day2.png");
            document.getElementById("browse-img3").setAttribute("src", "images/browse-rainy-day3.png");
            document.getElementById("browse-img4").setAttribute("src", "images/browse-rainy-day4.png");
        }
    }
}

// Sets initial default images for product page 
function setProductImages() {
    // set images for product page 
    document.getElementById("big-pillow-img").setAttribute("src", "images/after-school1.png");
    document.getElementById("small-pillow-img1").setAttribute("src", "images/after-school2.png");
    document.getElementById("small-pillow-img2").setAttribute("src", "images/after-school3.png");
    document.getElementById("small-pillow-img3").setAttribute("src", "images/after-school4.png");
}

// Sets initial default images for browse page 
function setBrowseImages() {
    document.getElementById("browse-img1").setAttribute("src", "images/browse-after-school1.png");
    document.getElementById("browse-img2").setAttribute("src", "images/browse-morning-haze1.png");
    document.getElementById("browse-img3").setAttribute("src", "images/browse-cozy-denim1.png");
    document.getElementById("browse-img4").setAttribute("src", "images/browse-rainy-day1.png");
}

// Updates images on product page based on which color was selected 
function changeDetails() {
    let color = document.getElementById("color");
    if (color.value === "after-school") {
        document.getElementById("big-pillow-img").setAttribute("src", "images/after-school1.png");
        document.getElementById("small-pillow-img1").setAttribute("src", "images/after-school2.png");
        document.getElementById("small-pillow-img2").setAttribute("src", "images/after-school3.png");
        document.getElementById("small-pillow-img3").setAttribute("src", "images/after-school4.png");
    } else if (color.value === "morning-haze") {
        document.getElementById("big-pillow-img").setAttribute("src", "images/morning-haze1.png");
        document.getElementById("small-pillow-img1").setAttribute("src", "images/morning-haze2.png");
        document.getElementById("small-pillow-img2").setAttribute("src", "images/morning-haze3.png");
        document.getElementById("small-pillow-img3").setAttribute("src", "images/morning-haze4.png");
    } else if (color.value === "cozy-denim") {
        document.getElementById("big-pillow-img").setAttribute("src", "images/cozy-denim1.png");
        document.getElementById("small-pillow-img1").setAttribute("src", "images/cozy-denim2.png");
        document.getElementById("small-pillow-img2").setAttribute("src", "images/cozy-denim3.png");
        document.getElementById("small-pillow-img3").setAttribute("src", "images/cozy-denim4.png");
    } else if (color.value === "rainy-day") {
        document.getElementById("big-pillow-img").setAttribute("src", "images/rainy-day1.png");
        document.getElementById("small-pillow-img1").setAttribute("src", "images/rainy-day2.png");
        document.getElementById("small-pillow-img2").setAttribute("src", "images/rainy-day3.png");
        document.getElementById("small-pillow-img3").setAttribute("src", "images/rainy-day4.png");
    }
}

// When 'add to cart' button is pressed 
function addItem() {
    // change button text 
    document.getElementById("add-cart").innerHTML = "Added to cart";
    
    // get selected options 
    let color = document.getElementById("color");
    let material = document.getElementById("material");
    let quantity = document.getElementById("quantity")

    // create new instance of pillow with selected attributes and save in storage
    // setting image based on color selected 
    let img_src = "images/after-school1.png"
    if (color.value === "morning-haze") {
        img_src = "images/morning-haze1.png";
    } else if (color.value === "cozy-denim") {
        img_src = "images/cozy-denim1.png";
    } else if (color.value === "rainy-day") {
        img_src = "images/rainy-day1.png";
    }

    let pillow = new Pillow(pillow_id, "Couch", color.value, material.value, quantity.value, img_src);
    pillow_id += 1; 
    console.log(cart_items);
    cart_items.push(pillow); 
    localStorage.setItem("cart", JSON.stringify(cart_items));

    counter += 1; 
    localStorage.setItem("cartCounter", counter);
    let counter_from_storage = localStorage.getItem("cartCounter");
    let cart_counter_span = document.getElementById("cart-counter"); 
    cart_counter_span.innerHTML = counter_from_storage;
}

// gets pillow from local storage and puts it in cart 
function getStoragePillow() {
    if (pillow_from_storage == null) {
        let cart = document.getElementById("shopping-bag");
        let product_wrapper = document.createElement("div");
        let text = document.createElement("h4");
        text.innerText = "Your Cart is Empty.";
        product_wrapper.appendChild(text);
        cart.appendChild(product_wrapper);
    } else {
        var i;
        for (i = 0; i < pillow_from_storage.length; i++) {
            console.log(pillow_from_storage[i]);
            item = pillow_from_storage[i]; 
            let cart = document.getElementById("shopping-bag");
            let product_wrapper = document.createElement("div");
            product_wrapper.setAttribute("class", "product");
            let prod_details_div = document.createElement("div");
            prod_details_div.setAttribute("class", "flex");
            let pillow_img_div = document.createElement("div");
            let pillow_details_div = document.createElement("div");
            let quantity_div = document.createElement("div");
            let price_div = document.createElement("div");
            let delete_btn_div = document.createElement("div");
        
            let pillow_img = document.createElement("img")
            pillow_img.setAttribute("src", item.image);
            pillow_img.setAttribute("class", "cart_img");
            pillow_img_div.appendChild(pillow_img);
        
            let pillow_name = document.createElement("h4");
            pillow_details_div.appendChild(pillow_name);
            pillow_name.innerText = item.type + " Pillow";
        
            let pillow_color = document.createElement("h5");
            pillow_details_div.appendChild(pillow_color);
            pillow_color.innerText = "Color: " + item.color;
        
            let pillow_material = document.createElement("h5");
            pillow_details_div.appendChild(pillow_material);
            pillow_material.innerText = "Material: " + item.material;
        
            let quantity = document.createElement("input");
            quantity.setAttribute("type", "number");
            quantity_div.appendChild(quantity);
            quantity.value = item.quantity;
        
            price_div.appendChild(document.createTextNode("$25"));
        
            let delete_btn = document.createElement("button");
            delete_btn.setAttribute("class", "delete-item");
            delete_btn.innerText = "X";
            delete_btn.setAttribute("onclick", "deleteItem(this.parentNode.parentNode)");
            delete_btn_div.appendChild(delete_btn);
        
            prod_details_div.appendChild(pillow_img_div);
            prod_details_div.appendChild(pillow_details_div);
        
            product_wrapper.appendChild(prod_details_div);
            product_wrapper.appendChild(quantity_div);
            product_wrapper.appendChild(price_div);
            product_wrapper.appendChild(delete_btn_div);
            cart.appendChild(product_wrapper);
        
            cart.appendChild(document.createElement("hr"));
        }
    }
}
