const originalPriceInput = document.getElementById('js-original-price');
const discountInput = document.getElementById('js-discount');
const resultText = document.getElementById('js-result');
const calculateBtn = document.getElementById('js-calculate-btn');
const formPorcent = document.getElementById('js-form-porcent');

function calculateDiscountPrice(originalPrice, discount) {
  return originalPrice - (originalPrice * discount) / 100;
}

function calculateDiscountPriceEvent(){
  const originalPrice = Number(originalPriceInput.value);
  const discount = Number(discountInput.value);
  const discountPrice = calculateDiscountPrice(originalPrice, discount);
  resultText.innerHTML = `Tu precio final será de: $${discountPrice}`;
}

formPorcent.addEventListener('submit', (event) => {
  event.preventDefault();
  calculateDiscountPriceEvent();
});