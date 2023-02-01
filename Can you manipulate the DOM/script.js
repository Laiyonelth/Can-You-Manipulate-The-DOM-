let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
     let mainTitle = document.getElementById ("main-title")
     mainTitle.innerText = "Hey I'm DOM, Welcome!"

  // Part 2
      document.body.style.backgroundColor = "orange"
    
  // Part 3
  let favThings = document.getElementById("favorite-things")
  favThings.removeChild(favThings.lastElementChild)

  // Part 4
  let specialTitle = document.querySelectorAll("specialtitle")
  for (let i=0; i<specialTitle.length; i++){
    specialTitle[i].style.fontSize = "2rem"; 
  }
    

  // Part 5
      pastRaces = document.getElementById("past-races")
     for (let i=0; i<pastRaces.children.length; i++){
      if(pastRaces.children[i].textContent[i] == "Chicago"){
       pastRaces.children[i].remove();
        }
      }

  // Part 6
    let newLi = document.createElement('li'); 
    pastRaces.appendChild(newLi); 
    newLi.textContent = "New York";


  // Part 7
    let newDiv = document.createElement('div');
    newDiv.classList.add('blog-post');
    newDiv.classList.add('purple')

    let newH2 = document.createElement('h2'); 
    newH2.textContent = "NEW YORK"; 
    newH2.style.color = 'white'

    let newP = document.createElement ('p')
    newP.textContent = "I DROVE OVER THE BROOKLYN BRIDGE";

    let mainDiv = document.querySelector('.main');

    newDiv.appendChild(newH2);
    newDiv.appendChild(newP); 
    mainDiv.appendChild(newDiv); 
  // Part 8
  let quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9
 let allBlogPostS = document.querySelectorAll('.blog-post')
 allBlogPostS.forEach((item) => {
  item.addEventListener('mouseout',mouseoutFn)
  item.addEventListener('mouseenter',mouseinFn)
 })
 function mouseoutFn(evt){
   evt.target.classList.toggle('purple')
 }
 function mouseinFn(evt){
  evt.target.classlist.toggle('red')
 }
})

//