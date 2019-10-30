const siteContent = {
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

/*NAV*/
let navBar = document.querySelector('nav');
navBar.append('Gauthier');
navBar.prepend('Emily');

let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

navItems.forEach((greenColor) =>{
  return greenColor.style.color ='green'
})

/*CTA*/
let h1= document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];
let btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button'];
btn.textContent = 'Get Started';

let ctaImg= document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

/*MAIN CONTENT*/
let topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = siteContent['main-content']['features-h4'];
topH4[1].textContent = siteContent['main-content']['about-h4'];
let topP = document.querySelectorAll('.top-content p');
topP[0].textContent = siteContent['main-content']['features-content'];
topP[1].textContent = siteContent['main-content']['about-content'];

let midImg= document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

/* BOTTOM */
let botH4 = document.querySelectorAll('.bottom-content h4');
botH4[0].textContent = siteContent['main-content']['services-h4'];
botH4[1].textContent = siteContent['main-content']['product-h4'];
botH4[2].textContent = siteContent['main-content']['vision-h4'];
let botP = document.querySelectorAll('.bottom-content p');
botP[0].textContent = siteContent['main-content']['services-content'];
botP[1].textContent = siteContent['main-content']['product-content'];
botP[2].textContent = siteContent['main-content']['vision-content'];

/*Contact*/