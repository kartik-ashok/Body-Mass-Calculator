const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height  ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML = `<span style="color:#fff">Your Body Mass Index is :${BMI}kg/m2</span>`;

    if (BMI < 18.5) {
      document.getElementById("a").style.backgroundColor = "#FF8800";
    } else if (BMI > 18.5 && BMI < 25) {
      document.getElementById("b").style.backgroundColor = "green";
    } else if (BMI > 25 && BMI < 30) {
      document.getElementById("c").style.backgroundColor = "#FFA500";
    } else if (BMI > 30 && BMI < 40) {
      document.getElementById("d").style.backgroundColor = "red";
    }
  }
});
