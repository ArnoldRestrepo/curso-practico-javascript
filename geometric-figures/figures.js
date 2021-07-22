console.log('Loading figures.js');

// Squares
function squarePerimeter(side) {
  return 4 * side;
}

function squareArea(side) {
  return side * side;
}

squarePerimeter(squareSide);
squareArea(squareSide);

// Triangles
function trianglePerimeter(firstSide, secondSide, thirdSide) {
  return firstSide + secondSide + thirdSide;
}

function triangleArea(width, height) {
  return (width * height) / 2;
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

