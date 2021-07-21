console.log('Loading figures.js');

// Squares
const squareSide = 10;
const squarePerimeter = 4 * squareSide;
const squareArea = squareSide * squareSide;


// Triangles
const triangleFirstSide = 10;
const triangleSecondSide = 4;
const triangleThirdSide = 3;
const trianglePerimeter = (triangleFirstSide + triangleSecondSide + triangleThirdSide) / 2;

const triangleWidth = triangleFirstSide;
const triangleHeight = triangleSecondSide;
const triangleArea = triangleWidth * triangleHeight;

// Circles
const circleRadius = 10;
const circleArea = Math.PI * circleRadius * circleRadius;
const circleDiameter = circleRadius * 2;
const circlePerimeter = circleDiameter * Math.PI;