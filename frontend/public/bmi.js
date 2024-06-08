const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height)) {
        resultDiv.textContent = 'Please enter valid weight and height values!';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${category}.`;
});

function calculateBMI(weight, height) {
    return weight / Math.pow(height / 100, 2);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
}