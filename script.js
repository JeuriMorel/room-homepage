const hamburger = document.querySelector('.header__hamburger');
const bar = document.getElementById('bar');
const header = document.querySelector('.header');
const left = document.querySelector('.img__one__left');
const right = document.querySelector('.img__one__right');
const h1 = document.querySelector('.text__one__h1');
const p = document.querySelector('.text__one__p');
const div = document.querySelector('.img__one');
const body = document.querySelector('.body');


//Image on load
body.onload = () => {
  if (window.innerWidth < 500) {
    div.style.backgroundImage = "url(/images/mobile-image-hero-1.jpg)";
  } else {
    div.style.backgroundImage = "url(/images/desktp-image-hero-1.jpg)";
  }
}

const handleResize = () => {
  if (window.innerWidth < 500) {
    div.style.backgroundImage = div.style.backgroundImage.replace(/desktp/, 'mobile')
  } else { 
    div.style.backgroundImage = div.style.backgroundImage.replace(/mobile/, 'desktp')
  }
}

//debounce
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};


const openNav = () => {
    hamburger.classList.toggle('open');
    header.classList.toggle('open');
}
const closeNav = () => {
    hamburger.classList.remove('open');
    header.classList.remove('open');
}

const swipe = (e) => { 
    const arr = ["1", "2", "3"];

    if(e.target.classList.contains('img__one__right') || e.keyCode == 39) { 
      let num = div.style.backgroundImage.charAt(31);
      let str = div.style.backgroundImage.split('');
      str[31] = arr[(num + 3) % 3];
      div.style.backgroundImage = str.join('');

        if (num == 1) {
          h1.textContent = "We are available all across the globe";
          p.textContent =
            "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
        } else if (num == 2) {
          h1.textContent = "Manufactured with the best materials";
          p.textContent =
            "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
        } else {
          h1.textContent = "Discover innovative ways to decorate";
          p.textContent =
            "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
        }
      
        
    } else if (e.target.classList.contains(
        "img__one__left") || e.keyCode == 37) {
      let num = div.style.backgroundImage.charAt(31);
      let str = div.style.backgroundImage.split("");
      str[31] = arr[(num + 4) % 3];
      div.style.backgroundImage = str.join("");


      if (num == 1) {
        h1.textContent = "We are available all across the globe";
        p.textContent =
          "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
      } else if (num == 2) {
        h1.textContent = "Manufactured with the best materials";
        p.textContent =
          "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
      } else {
        h1.textContent = "Discover innovative ways to decorate";
        p.textContent =
          "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
      }

    }

}

//Add event Listeners

hamburger.addEventListener('click', openNav);

document.querySelectorAll(".nav__list__links").forEach(x => { 
    x.addEventListener("click", closeNav);
});

window.addEventListener("keydown", swipe);
window.addEventListener("resize", debounce(handleResize, 500));

left.addEventListener('click', swipe);
right.addEventListener('click', swipe);