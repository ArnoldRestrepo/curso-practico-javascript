console.log('Loading figures.js');

// Squares
function squarePerimeter(side) {
  return 4 * side;
}

function squareArea(side) {
  return side * side;
}


// Triangles
function trianglePerimeter(firstSide, secondSide, thirdSide) {
  return firstSide + secondSide + thirdSide;
}

function triangleArea(width, height) {
  return (width * height) / 2;
}

function isocelesTriangleHeight(firstSide, secondSide, base) {
  if(firstSide === secondSide) {
    return Math.sqrt(firstSide** 2 - (base** 2 / 4));
  }
  return console.warn('Invalid input triangle');
}


// Circles

function circleDiameter(radius) {
  return radius * 2;
}

function circlePerimeter(radius) {
  const diameter = circleDiameter(radius);
  return diameter * Math.PI;
}

function circleArea(radius) {
  return Math.PI * radius * radius;
}


// HTML Events Squares
const squareInputId = document.getElementById('square-input');
const squarePerimeterBtn = document.getElementById('square-diameter-btn');
const squareAreaBtn = document.getElementById('square-area-btn');
const squareResetBtn = document.getElementById('square-reset-input');
const squareResult = document.getElementById('square-result');

function calculateSquarePerimeter() {
  const side = parseInt(squareInputId.value);
  const perimeter = squarePerimeter(side);
  squareResult.innerHTML = `Perímetro del cuadrado: ${perimeter}`;
}

function calculateSquareArea() {
  const side = parseInt(squareInputId.value);
  const area = squareArea(side);
  squareResult.innerHTML = `Área del cuadrado: ${area}`;
}

squarePerimeterBtn.addEventListener('click', calculateSquarePerimeter);
squareAreaBtn.addEventListener('click', calculateSquareArea);
squareResetBtn.addEventListener('click', () => {
  squareInputId.value = '';
  squareResult.innerHTML = '';
});