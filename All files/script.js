// javascript by Shanuka Imesh Dimbukkuwalage - shanuka.20221066@iit.ac.lk  //

// changes color of the web page color when the icon is selected //
document.querySelector('.switcher-btn').onclick = () =>{
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach(color =>{
    color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor);
    });
});

// end of color selector //

// changes the font size when the icon is selected //
let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i <btn.length; i++){
    btn[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('work');
        current[0].className = current[0].className.replace("work", "");
        this.className += " work";
    })
}
// end of font size changer //

// Get the button:
let mybutton = document.getElementById("myBtn");

// javascript part for the back to the top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

