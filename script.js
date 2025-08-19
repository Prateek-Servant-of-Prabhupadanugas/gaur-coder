// navbar transparency 
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

const homeButton = document.getElementById('home');
const servicesButton = document.getElementById('services');
const projectsButton = document.getElementById('projects');
const aboutButton = document.getElementById('about');
const contactButton = document.getElementById('contact');

const targetHomeSection = document.getElementById('container-section-1');

homeButton.addEventListener('click' , function() {
  targetHomeSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'start' 
  });
  navMenu.classList.toggle('active');
});

const targetServicesSection = document.getElementById('carousel-container');

servicesButton.addEventListener('click' , function() {
  targetServicesSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'start' 
  });
  navMenu.classList.toggle('active');
});

const targetContactsSection = document.getElementById('footer-section');

contactButton.addEventListener('click' , function() {
  targetContactsSection.scrollIntoView({
    behaviour : 'smooth' , 
    block : 'end' 
  });
  navMenu.classList.toggle('active');
});








// function to handle scroll event 
window.onscroll = function() {
  if (window.scrollY > 0){

    navbar.classList.add('transparent') ; 
    navbar.classList.remove('visible') ; 

  } else {
    navbar.classList.add('visible') ; 
    navbar.classList.remove('transparent') ; 

  }
}
    

    
    
    
    // Hamburger Script 


    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    const outerDiv = document.querySelector('.outerDiv');
    const innerDiv = document.querySelector('.innerDiv');

    window.addEventListener('mousemove', () => {
      const rect = outerDiv.getBoundingClientRect() ; 
      const x = e.clientX - rect.left ; 
      const y = e.clientY - rect.top ; 

      const tiltX = (x - rect.width / 2) / 20  ;
      const tiltY = (y - rect.height / 2) / 20 ; 

      innerDiv.style.transform = 'translate(-50% , -50%) rotateX(${tiltY}deg) rotateY(${tiltX}deg)'

    });

   






    // Code Alive Element 
  const text = "Make Code Come Alive";
  let index = 0;
  let isTyping = true;

  function typeAndDeleteEffect() {
    const typingTextElement = document.getElementById("typingText");

    if (isTyping) {
      // Typing the text
      if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeAndDeleteEffect, 80); // Typing speed
      } else {
        isTyping = false;
        setTimeout(typeAndDeleteEffect, 1000); // Wait before deleting
      }
    } else {
      // Deleting the text
      if (index > 0) {
        typingTextElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeAndDeleteEffect, 100); // Deleting speed
      } else {
        isTyping = true;
        setTimeout(typeAndDeleteEffect, 500); // Wait before typing again
      }
    }
  }

  // Start typing and deleting effect when the page loads
  window.onload = typeAndDeleteEffect();


  const text2 = "Services We Provide";
  let index2 = 0;
  let isTyping2 = true;

  function typeAndDeleteEffect2() {
    const typingTextElement2 = document.getElementById("typingText2");

    if (isTyping2) {
      // Typing the text
      if (index2 < text2.length) {
        typingTextElement2.textContent += text2.charAt(index2);
        index2++;
        setTimeout(typeAndDeleteEffect2, 80); // Typing speed
      } else {
        isTyping2 = false;
        setTimeout(typeAndDeleteEffect2, 1000); // Wait before deleting
      }
    } else {
      // Deleting the text
      if (index2 > 0) {
        typingTextElement2.textContent = text2.substring(0, index2 - 1);
        index2--;
        setTimeout(typeAndDeleteEffect2, 100); // Deleting speed
      } else {
        isTyping2 = true;
        setTimeout(typeAndDeleteEffect2, 500); // Wait before typing again
      }
    }
  }

  window.onload = typeAndDeleteEffect2();




    // Reset the content's tilt on resize
    window.addEventListener('resize', () => {
      content.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    let rotationInterval;
    let rotationX = 0;
    let rotationY = 0;
    let rotationZ = 0;

    // Function to start continuous rotation
    function startRotation() {
        rotationInterval = setInterval(() => {
        rotationX += 0.5; // Adjust rotation speed for X
        rotationY += 1; // Adjust rotation speed for Y
        rotationZ += 0.5; // Adjust rotation speed for Z
        document.getElementById('cube').style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
        }, 20); // Adjust the interval speed for smoothness
    }

    // Start the rotation when the page loads
    window.onload = startRotation;

    // Border Effect 



    // Star Effect 
    // Select the container where the effect will happen
  const effectContainer = document.querySelector('.hero-section');

// Function to create stars/bubbles
  function createStar(x, y) {
  const star = document.createElement('div');
  star.classList.add('star');
  effectContainer.appendChild(star);

  // Set the star's initial position to the mouse coordinates
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  // Randomize size and movement to make it more dynamic
  const size = Math.random() * 10 + 10;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  const moveX = (Math.random() - 0.5) * 50;
  const moveY = (Math.random() - 0.5) * 50;
  star.style.transform = `translate(${moveX}px, ${moveY}px)`;

  // Remove the star after its animation ends
  setTimeout(() => {
    star.remove();
  }, 2000); // Match with animation duration
}

// Track mouse movement inside the container
  effectContainer.addEventListener('mousemove', (e) => {
  const rect = effectContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Create a star at the mouse position
  createStar(x, y);
});


  // Carousel
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  
  document.querySelector('.next-btn').addEventListener('click', () => {
    updateCarousel((currentIndex + 1) % items.length);
  });

  document.querySelector('.prev-btn').addEventListener('click', () => {
    updateCarousel((currentIndex - 1 + items.length) % items.length);
  });

  function updateCarousel(newIndex) {
    items.forEach((item, index) => {
      item.classList.remove('active', 'prev', 'next');
      if (index === newIndex) {
        item.classList.add('active');
      } else if (index === (newIndex - 1 + items.length) % items.length) {
        item.classList.add('prev');
      } else if (index === (newIndex + 1) % items.length) {
        item.classList.add('next');
      }
    });

    currentIndex = newIndex;
  }

  // Initialize the carousel with the first item active
  updateCarousel(currentIndex);

