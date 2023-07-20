function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
  
    if (isNaN(height) || isNaN(weight)) {
      document.getElementById("result").innerText = "Please enter valid values for height and weight.";
      return;
    }
  
    const bmi = weight / ((height / 100) ** 2);
    const bmiRounded = bmi.toFixed(2);
  
    let bmiLevel = "";
    if (bmi < 18.5) {
      bmiLevel = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiLevel = "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiLevel = "Overweight";
    } else {
      bmiLevel = "Obese";
    }
  
    document.getElementById("result").innerText = `Your BMI is: ${bmiRounded}. BMI Level: ${bmiLevel}`;
  }
  