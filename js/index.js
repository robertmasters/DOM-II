// Your code goes here
// Your code goes here


//1 mouseover - will change the color of the fun bus for 500 miliseconds
let headerH1 = document.querySelector('h1')
headerH1.addEventListener("mouseenter", function(event){
    event.target.style.color = "lightgrey";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

//2 Keydown - will display Robert is great next to the "Welcome to the fun bus text"
let headerh2 = document.querySelector('.intro h2')

document.addEventListener('keydown', logKey);
function logKey() {
    headerh2.textContent += ` Robert is great! `;
  }

//3 wheel - zooms and unzooms on the bus image
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.5, scale), 4);
  
    // Apply scale transform
    busImage.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const busImage = document.querySelector('.intro img');
  busImage.onwheel = zoom;

//4 copy - when you copy the intro paragraph text it will paste in all lower case letters.
0
const firstParagraph = document.querySelector('.intro p');

firstParagraph.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault();
});
//5 dblclick - when you double click on the 2nd image with the pen it will resize.


const contentH2 = document.querySelector('.content-section h2')

contentH2.addEventListener('dblclick', function(){
    
    event.target.style.color = "red";
})

//6 contextmenu - will disable the right click menu on the first image

const imgContentSection = document.querySelector('.img-content img') // no need to make an array since the querySelector will use the first element with the img tag.

imgContentSection.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

//7 blur - function takes effect when you click out of the input text field.
const inputTextBlur = document.getElementById('inputText');

inputTextBlur.addEventListener('blur', (e) => {
    const val = e.target.value;

    console.log("you typed: '"+ val+"'"); // shows in the console
});


//8 scroll - function takes effect when you scroll.
window.addEventListener('scroll', () => {
    console.log ('you are scrolling!') // shows in the console
    // alert('you are scrolling!'); // uncomment to show an alert pop up
});
//9 resize - function will take place when you resize the window

function consoleResize() {
    console.log("you are resizing the screen! stop it!")
  }
  
  window.addEventListener('resize', consoleResize);


//10 click - function is activated when you click on the element, in this case its the footer, an event log is displayed on the console and an alert pops up.

const footer = document.querySelector('footer p');

footer.addEventListener('click', event => {
    alert(`you have clicked me! how dare you!`);
    console.log(event)
});

//11 fullscreenerror

// const requestor = document.querySelector('div');

// document.addEventListener('fullscreenerror', () => {
//   console.error('an error occurred changing into fullscreen');
// });

// requestor.requestFullscreen();

//Nest two similar events somewhere in the site and prevent the event propagation properly.

const introBackground = document.querySelector('header.intro');
const headerH2 = document.querySelector('header h2');

introBackground.addEventListener('click', function() {
    // e.stopPropagation();
    this.style.backgroundColor = "red";
});

headerH2.addEventListener('click', function(e){
    e.stopPropagation(e); // stops the introbackground from having an event on the h2 element
    console.log("we be pressing things")
});

//Stop the navigation items from refreshing the page by using `preventDefault()`

const navLinks = document.querySelectorAll('a')

navLinks.forEach(link => {
    link.addEventListener('click', function (e){
        e.preventDefault();
    })
})
//note, added actual links to make sure default behavior was not working :) 