function func() {
  var val = document.getElementById("digits").value;
  if (val == null) {
    alert("Enter a 5 digit number");
  } else {
    var sum = 0;
    var l = val.toString().length;

    if (l == 5) {
      while (val > 0) {
        let rem = val % 10;
        sum += rem;
        val = val / 10;
      }

      var borderRa = sum / 5;
      document.getElementById("div1").style.height = sum * 5 + "px";
      document.getElementById("div1").style.width = sum * 5 + "px";
      document.getElementById("div1").style.borderRadius = borderRa + "px";
    } else {
      alert("Enter a 5 digit number only");
    }
  }
}
