const siteContent = { //JSON
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Feedback",
    "nav-item-8": "Press",
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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Get all the elements with image tag
const imageCollection = document.getElementsByTagName('img');
// HTMLCollection(3) [img#logo-img.logo, img#cta-img, img#middle-img.middle-img, logo-img: img#logo-img.logo, cta-img: img#cta-img, middle-img: img#middle-img.middle-img]

//Update all the images
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//Create two more elements 
var nav7 = document.createElement('a');
var nav8 = document.createElement('a');

nav7.setAttribute('href', '#');
nav8.setAttribute('href', '#');

const nav = document.querySelector('nav');

//Add them to nav
nav.appendChild(nav7);
nav.prepend(nav8);

//Get the the collection of nodes matching a
const aCollection = document.querySelectorAll('a');

for(let item =0; item < aCollection.length; item++){
	aCollection[item].textContent = siteContent['nav']['nav-item-'+item];
}

nav8.textContent = siteContent['nav']['nav-item-8'];


const h1Updated = document.getElementsByTagName('h1');
h1Updated[0].textContent = siteContent['cta']['h1'];

const buttonUpdated = document.getElementsByTagName('button');
buttonUpdated[0].textContent = siteContent['cta']['button'];


const h4Updated = document.getElementsByTagName('h4');
h4Updated[0].textContent = siteContent['main-content']["features-h4"];
h4Updated[1].textContent = siteContent['main-content']["about-h4"];
h4Updated[2].textContent = siteContent['main-content']["services-h4"];
h4Updated[3].textContent = siteContent['main-content']["product-h4"];
h4Updated[4].textContent = siteContent['main-content']["vision-h4"];
h4Updated[5].textContent = siteContent['contact']["contact-h4"];

let pUpdated = document.getElementsByTagName('p');
pUpdated[0].textContent = siteContent['main-content']["features-content"];
pUpdated[1].textContent = siteContent['main-content']["about-content"];
pUpdated[2].textContent = siteContent['main-content']["services-content"];
pUpdated[3].textContent = siteContent['main-content']["product-content"]
pUpdated[4].textContent = siteContent['main-content']["vision-content"];
pUpdated[5].textContent = siteContent['contact']["address"];
pUpdated[6].textContent = siteContent['contact']["phone"];
pUpdated[7].textContent = siteContent['contact']["email"];
pUpdated[8].textContent = siteContent['footer']["copyright"];



let arrayACollection = Array.from(aCollection);
for (let i =0; i < arrayACollection.length; i++){
	arrayACollection[i].style.color = 'blue';
}






