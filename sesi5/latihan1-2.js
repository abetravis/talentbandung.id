var listBuah = document.getElementById('li-buah');
var buah = ['jeruk','nanas','mangga','seteroberi','apel'];

for (var i=0; i<buah[i].length; i++) {
    var listItem = document.createElement('li');
    listItem.classList.add('buah');
    listItem.textContent = buah[i];
    listBuah.appendChild(listItem);
    
} 

/* function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("li-buah");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";

        }
    }
} */

var filter = document.getElementById("filter");
filter.addEventListener("keyup",filterBuah);

function filterBuah() {
    var listItem = document.getElementsByClassName("buah");
    for (var i=0; i<listItem.length; i++){
        var listText = listItem[i].textContent.toLowerCase();
        if (listText.indexOf (filter.value) != -1 )   {
            
            listItem[i].style.display = "block"
        }
        else{ 
            listItem[i].style.display = "none"
        }
    }

}
