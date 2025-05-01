function calculate() {
  var science = Number(document.getElementById ("num1").value);
  var math = Number(document.getElementById ("num2").value);
  var english = Number(document.getElementById ("num3").value);
  var average = (science + math + english) / 3;
  average = average.toFixed(2);
  var text = "";
  if (average >=94 && average <=100) {
    text = "Your average is " + average + " - Excellent";
  }
  else if (average >=87 && average <94) {
    text = "Your average is " + average + " - Above Satisfactory";
  }
  else if (average >=80 && average <87) {
    text = "Your average is " + average + " - Satisfactory";
  }
  else if (average >=75 && average <80) {
    text = "Your average is " + average + " - Needs Improvement";
  }
  else if (average >=70 && average <75) {
    text = "Your average is " + average + " - Poor";
  }
  else{
    text = "Your average is " + average;
  }
  alert(text)
    }