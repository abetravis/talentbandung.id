function input(){
  var nama = document.getElementById("name")
  var inputn = nama.value;

  var surat = document.getElementById("email");
  var inpute = surat.value;

  var a = alert(inputn + " " + inpute)
  return a;
}
var greeting = document.getElementById('greeting');
greeting.addEventListener('click', input);

function greeting(){
  alert("Halo")
}

var btnname = document.getElementsByClassName("randomname");

  for (var i = 0; i < btnname.length; i++) {
    if (btnname[i] == btnname[0]) {
      btnname[0].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[0].textContent);
      }
    }else if (btnname[i] == btnname[1]) {
      btnname[1].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[1].textContent);
      }
    }else if (btnname[i] == btnname[2]) {
      btnname[2].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[2].textContent);
      }
    }else if (btnname[i] == btnname[3]) {
      btnname[3].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[3].textContent);
      }
    }else if (btnname[i] == btnname[4]) {
      btnname[4].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[4].textContent);
      }
    }else if (btnname[i] == btnname[5]) {
      btnname[5].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[5].textContent);
      }
    }else if (btnname[i] == btnname[6]) {
      btnname[6].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[6].textContent);
      }
    }else if (btnname[i] == btnname[7]) {
      btnname[7].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[7].textContent);
      }
    }else if (btnname[i] == btnname[8]) {
      btnname[8].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[8].textContent);
      }
    }else if (btnname[i] == btnname[9]) {
      btnname[9].addEventListener('click', greet);
      function greet(){
        alert("Halo " +btnname[9].textContent);
      }
    }


}