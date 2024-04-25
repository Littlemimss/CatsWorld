let currentFigureIndex = 0;

function shuffleFigures() {
  const figures = document.querySelectorAll('.shuffle');
  figures[currentFigureIndex].classList.remove('active');

  currentFigureIndex = (currentFigureIndex + 1) % figures.length;

  figures[currentFigureIndex].classList.add('active');
}

window.onload = function() {
  const figures = document.querySelectorAll('.shuffle');
  if (figures.length > 0) {
    figures[0].classList.add('active');
  }
};


const images = document.querySelectorAll('.toggle-image');

function toggleText(event) {
  
  const textElement = event.target.nextElementSibling;
  
  
  textElement.classList.toggle('hidden');
  textElement.classList.toggle('visible');
}


images.forEach(image => {
  image.addEventListener('click', toggleText);
});
