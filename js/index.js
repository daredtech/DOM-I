const siteContent = { //JSON
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Get all the elements with image tag
const imageCollection = document.getElementsByTagName('img');
// HTMLCollection(3) [img#logo-img.logo, img#cta-img, img#middle-img.middle-img, logo-img: img#logo-img.logo, cta-img: img#cta-img, middle-img: img#middle-img.middle-img]

//Get the list of nodes matching a
const aCollection = document.querySelectorAll('a');


let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


aCollection[0].textContent = "Services";
aCollection[1].textContent = "Product";
aCollection[2].textContent = "Vision";
aCollection[3].textContent = "Features";
aCollection[4].textContent = "About";
aCollection[5].textContent = "Contact";


let h1Updated = document.getElementsByTagName('h1');
h1Updated[0].textContent = "DOM Is Awesome";

let buttonUpdated = document.getElementsByTagName('button');
buttonUpdated[0].textContent = "Get Started";


let h4Updated = document.getElementsByTagName('h4');
h4Updated[0].textContent = "Features";
h4Updated[1].textContent = "About";
h4Updated[2].textContent = "Services";
h4Updated[3].textContent = "Product";
h4Updated[4].textContent = "Vision";
h4Updated[5].textContent = "Contact";

let pUpdated = document.getElementsByTagName('p');
pUpdated[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pUpdated[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pUpdated[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pUpdated[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pUpdated[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
pUpdated[5].textContent = "123 Way 456 Street Somewhere, USA";
pUpdated[6].textContent = "1 (888) 888-8888";
pUpdated[7].textContent = "sales@greatidea.io";
pUpdated[8].textContent = "Copyright Great Idea! 2018";


let arrayACollection = Array.from(aCollection);
for (let i =0; i < arrayACollection.length; i++){
	arrayACollection[i].style.color = 'green';
}


