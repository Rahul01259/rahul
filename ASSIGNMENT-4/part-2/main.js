const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageslist = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alternativetext = {
    'pic1.jpg' : 'eye image',
    'pic2.jpg' : 'rocks image',
    'pic3.jpg' : 'flowers image',
    'pic4.jpg' : 'art on wall',
    'pic5.jpg' : ' moth on a leaf'
  }

/* Looping through images */

for (const image of imageslist) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativetext[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const isDark = btn.classList.toggle('dark');
    btn.textContent = isDark ? 'Lighten' : 'Darken';
    overlay.style.backgroundColor = isDark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)';
});
