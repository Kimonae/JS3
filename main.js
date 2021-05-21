const convert = document.getElementById("convert");
var result = document.getElementById("crypted");
var text = document.getElementById("msgToCode");
convert.addEventListener("click", function () {
  var ba = text.value;
  var ha = "";

  var x = "";
  for (i = 0; i < ba.length; i++) {
    x += tobinary(ba[i]) + " ";
  }

  result.innerHTML = x;
  console.log(x);

  var ja = x.split(" ");
  var k = "";
  for (i = 0; i < ja.length; i++) {
    k += toascii(ja[i]);
  }
  result.innerHTML +="<br>" +k;
});

function tobinary(test) {
  return test.charCodeAt(0).toString(2);
}

function toascii(ad) {
  return String.fromCharCode(parseInt(ad, 2));
}
