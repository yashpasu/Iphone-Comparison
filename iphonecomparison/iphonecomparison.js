var iData = { //JSON File
    "names" : [{
        "model": "Iphone X",
        "price": "$999",
        "size": "5.85 inches",
        "biometric": "Face ID",
        "chip": "A11 Bionic",
        "camera": "12MP Camera",
        "image": "iphonex.jpg",
        "moIn": "The IPhone X was released November of 2017 and was apples biggest step up in terms of design change due to removing the beloved home button and introducing face id"
    },
    {
        "model": "Iphone XS",
        "price": "$1149",
        "size": "5.85 inches",
        "biometric": "Face ID",
        "chip": "A12 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphonexs.jpg",
        "moIn": "The IPhone XS was released in September of 2018, and consisted on minor design changes, but improved on chip and processing power."
    },
    {
        "model": "Iphone XR",
        "price": "$749",
        "size": "6.06 inches",
        "biometric": "Face ID",
        "chip": "A12 Bionic",
        "camera": "12MP Camera",
        "image": "iphonexr.jpg",
        "moIn": "The IPhone XR, released along side the XS was the mid range price point IPhone, with its appeal for a wider audience with its many different colour option and less processing power."
    },
    {
        "model": "Iphone 11",
        "price": "$699",
        "size": "6.06 inches",
        "biometric": "Face ID",
        "chip": "A13 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone11.jpg",
        "moIn": "The iPhone 11, released in September 2019, is a sleek and powerful smartphone with impressive performance and an excellent camera system."
    },
    {
        "model": "Iphone 11 Pro Max",
        "price": "$1099",
        "size": "6.46 inches",
        "biometric": "Face ID",
        "chip": "A13 Bionic",
        "camera": "Triple 12MP Cameras",
        "image": "iphone11pro.jpg",
        "moIn": "The iPhone 11 Pro Max, released in September 2019, is a premium flagship device with an exceptional display, advanced camera capabilities, and impressive performance."
    },
    {
        "model": "Iphone 12",
        "price": "$799",
        "size": "6.06 inches",
        "biometric": "Face ID",
        "chip": "A14 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone12.jpg",
        "moIn": "The iPhone 12, released in September 2020, combines sleek design, 5G connectivity, and a powerful A14 Bionic chip for an enhanced user experience."
    },
    {
        "model": "Iphone 12 Pro Max",
        "price": "$1199",
        "size": "6.68 inches",
        "biometric": "Face ID",
        "chip": "A14 Bionic",
        "camera": "Triple 12MP Pro Cameras",
        "image": "iphone12pro.jpg",
        "moIn": "The iPhone 12 Pro Max, released in September 2020, offers a stunning Super Retina XDR display, an advanced camera system, and the fastest performance in an iPhone."
    },
    {
        "model": "Iphone 12 Mini",
        "price": "$699",
        "size": "5.42 inches",
        "biometric": "Face ID",
        "chip": "A14 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone12mini.jpg",
        "moIn": "The iPhone 12 mini, released in September 2020, packs the power and features of the iPhone 12 into a compact and pocket-friendly size."
    },
    {
        "model": "Iphone SE",
        "price": "$479",
        "size": "4.7 inches",
        "biometric": "Touch ID",
        "chip": "A15 Bionic",
        "camera": "12MP Camera",
        "image": "iphonese.jpg",
        "moIn": "The iPhone SE, released in September 2020 along side the 12, combines the power of the latest chip with a compact design, making it a budget-friendly yet capable smartphone option."
    },
    {
        "model": "Iphone 13",
        "price": "$699",
        "size": "6.06 inches",
        "biometric": "Face ID",
        "chip": "A15 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone13.jpg",
        "moIn": "The iPhone 13, released in September 2021, is a powerful phone with a 6.1-inch Super Retina XDR display and the super-powerful A15 Bionic Chip"
    },
    {
        "model": "Iphone 13 Pro Max",
        "price": "$1099",
        "size": "6.68 inches",
        "biometric": "Face ID",
        "chip": "A15 Bionic",
        "camera": "Triple 48MP Pro Cameras",
        "image": "iphone13pro.jpg",
        "moIn": "The iPhone 13 Pro, released in September 2021, is the flagaships of this years IPhone offerings its huge display and state-of-the-art camera system"
    },
    {
        "model": "Iphone 13 Mini",
        "price": "$599",
        "size": "5.42 inches",
        "biometric": "Face ID",
        "chip": "A15 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone13mini.jpg",
        "moIn": "The iPhone 13 Mini release alongside the iPhone 13 packs the same processing power as the 13, in a smaller comapact size and smaller battery"
    },
    {
        "model": "Iphone 14",
        "price": "$799",
        "size": "6.06 inches",
        "biometric": "Face ID",
        "chip": "A16 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone14.jpg",
        "moIn": "The iPhone 14, released in September 2022, incorporates Apples new A16 Bionic chip, aswell as car crash detection"
    },
    {
        "model": "Iphone 14 Plus",
        "price": "$899",
        "size": "6.68 inches",
        "biometric": "Face ID",
        "chip": "A16 Bionic",
        "camera": "Dual 12MP Cameras",
        "image": "iphone14plus.jpg",
        "moIn": "The iPhone 14 Plus, released in Sepetember 2022, contains the same features aswell as a smarter camera system, ina larger form factor."
    },
    {
        "model": "Iphone 14 Pro Max",
        "price": "$1099",
        "size": "6.68 inches",
        "biometric": "Face ID",
        "chip": "A16 Bionic",
        "camera": "Triple 48MP Cameras",
        "image": "iphone14pro.jpg",
        "moIn": "The iPhone 14 Pro Max, released in September 2022, introduces Apples new take on the front facing notch, called Dynamic Island."
    },
    
]
};


const cBox = document.getElementById("scrollBox"); //Call the scroll box id created in the HTML and assign it var cBox


//Phone 1 
//const compNum = 0;
iData.names.forEach(data => { //Loop through json file where data is the index.
    const opt = document.createElement("option"); //create an option tag in the html and assign it to var opt
    opt.text= data.model; // Make the text withtin the option tag the model attribute in the json file at selected index.

    const moInButton = document.createElement("button");
    moInButton.textContent = "More Info";

    // Make the value equal a concatenation of innerHTML elements so the correct attributes are displayed.
    opt.value = `<br><b>Price:</b> ${data.price}
    <br>
    <br><b>Size:</b> ${data.size}
    <br>
    <br><b>Biometric:</b> ${data.biometric}
    <br>
    <br><b>Chip: </b>${data.chip}
    <br>
    <br><b>Camera:</b> ${data.camera}
    <br>
    <br><img src = ${data.image}>
    <br>`;

    const moInTxt = document.createElement("button"); //Create more info button
    moInTxt.textContent = data.moIn;
    moInTxt.style.display = "none"; //Set initial visibility
    
    cBox.onchange = () => {
        result.innerHTML = cBox.value; //Whenever the the scroll box value changes, update the result id withtin the html to show the correct attributes.
        moInButton.style.display = "inline";
        moInTxt.style.display = "none"
        result.appendChild(moInTxt);
        result.appendChild(moInButton);
    };
    
    moInButton.onclick = () => {  //Whenever the button is clicked chnage to these values.
        moInButton.style.display = "none";
        moInTxt.style.display = "inline";
    };

    
    
    cBox.appendChild(opt); //Add the option tag to the scroll box

});



//Repeat the same but for a second scroll box
const cBox1 = document.getElementById("scrollBox1");

//Phone 2
iData.names.forEach(data => {
    const opt = document.createElement("option");
    opt.text= data.model;

    const moInButton1 = document.createElement("button");
    moInButton1.textContent = "More Info";

    opt.value = `<br><b>Price:</b> ${data.price}
    <br>
    <br><b>Size:</b> ${data.size}
    <br>
    <br><b>Biometric:</b> ${data.biometric}
    <br>
    <br><b>Chip: </b>${data.chip}
    <br>
    <br><b>Camera:</b> ${data.camera}
    <br>
    <br><img src = ${data.image}>
    <br>`;

    const moInTxt1 = document.createElement("button");
    moInTxt1.textContent = data.moIn;
    moInTxt1.style.display = "none";
    
    cBox1.onchange = () => {
        result1.innerHTML = cBox1.value; //Whenever the the scroll box value changes, update the result id withtin the html to show the correct attributes.
        moInButton1.style.display = "inline";
        moInTxt1.style.display = "none"
        result1.appendChild(moInTxt1);
        result1.appendChild(moInButton1);

    };

    moInButton1.onclick = () => {
        moInButton1.style.display = "none";
        moInTxt1.style.display = "inline";
    };


    cBox1.appendChild(opt);

});



//Code for the original iphone image: Set initial visibility
const originalPhone = document.getElementById("origPhone");
const ogPhoneImage = document.createElement("img");
ogPhoneImage.src = "iphone.jpg";
originalPhone.textContent = "";
ogPhoneImage.style.width = "350px";
ogPhoneImage.style.height = "400px";
originalPhone.appendChild(ogPhoneImage);

//Change to this code when you hover the mouse over the image
originalPhone.onmouseover = () => {
    ogPhoneImage.style.display = "none";
    originalPhone.textContent = "The orginal iPhone released in June 2007";
    originalPhone.style.textAlign = "center";
}

//Revert back to this code when mouse is taken off
originalPhone.onmouseout = () => {
    ogPhoneImage.style.display = "inline";
    ogPhoneImage.style.width = "350px";
    ogPhoneImage.style.height = "400px";
    originalPhone.textContent = "";
    originalPhone.style.backgroundColor = "";
    originalPhone.appendChild(ogPhoneImage);
}










  












