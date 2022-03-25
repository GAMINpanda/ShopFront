function SubmitFunction() {
  var x = document.getElementById("ServiceForm");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    data = x.elements[i].value;
    text += "You want " + data + " service.";
  }
  document.getElementById("output_here").innerHTML = text;
}


