var rootNode = document.getElementById("root");

var firstdiv = document.createElement('div');
firstdiv.className = "first";

var firstdiv1 = document.createElement('div');
firstdiv1.className = "first1 hover";

var first_folder = document.createElement('i');
first_folder.className = "material-icons color close";
first_folder.innerHTML = "folder";



var films = document.createElement('p');
films.className = "films";
films.innerHTML = "Films";



var firstdiv2 = document.createElement('div');
firstdiv2.className = "first2 hover";

var first_open_folder = document.createElement('i');
first_open_folder.className = "material-icons color";
first_open_folder.innerHTML = "folder_open";

var films2 = document.createElement('p');
films2.className = "films2";
films2.innerHTML = "Films";



var firstdiv3 = document.createElement('div');
firstdiv3.className = "first3 hover";

var doc = document.createElement('i');
doc.className = "material-icons doc";
doc.innerHTML = "insert_drive_file";

var iron = document.createElement('p');
iron.className = "iron";
iron.innerHTML = "Iron Man.avi";



var firstdiv4 = document.createElement('div');
firstdiv4.className = "first4 hover";

var first_folder2 = document.createElement('i');
first_folder2.className = "material-icons color close";
first_folder2.innerHTML = "folder";

var fantasy = document.createElement('p');
fantasy.className = "fantasy";
fantasy.innerHTML = "Fantasy";



var firstdiv5 = document.createElement('div');
firstdiv5.className = "first5 hover";

var first_open_folder2 = document.createElement('i');
first_open_folder2.className = "material-icons color";
first_open_folder2.innerHTML = "folder_open";

var fantasy2 = document.createElement('p');
fantasy2.className = "fantasy";
fantasy2.innerHTML = "Fantasy";


var firstdiv6 = document.createElement('div');
firstdiv6.className = "first6 hover";

var doc2 = document.createElement('i');
doc2.className = "material-icons doc";
doc2.innerHTML = "insert_drive_file";

var lord = document.createElement('p');
lord.className = "lord";
lord.innerHTML = "The Lord of the Rings.avi";


var firstdiv7 = document.createElement('div');
firstdiv7.className = "first7 hover";

var first_folder7 = document.createElement('i');
first_folder7.className = "material-icons color close";
first_folder7.innerHTML = "folder";

var newFold = document.createElement('p');
newFold.className = "newFold";
newFold.innerHTML = "New folder 1";



var firstdiv8 = document.createElement('div');
firstdiv8.className = "first8 hover";

var first_open_folder3 = document.createElement('i');
first_open_folder3.className = "material-icons color";
first_open_folder3.innerHTML = "folder_open";

var newFold2 = document.createElement('p');
newFold2.className = "newFold";
newFold2.innerHTML = "New folder 1";


var firstdiv9 = document.createElement('div');
firstdiv9.className = "first9";

var empty = document.createElement('p');
empty.className = "empty";
empty.innerHTML = "Folder is empty";


firstdiv.appendChild(firstdiv1);
firstdiv1.appendChild(first_folder);
firstdiv1.appendChild(films);

firstdiv.appendChild(firstdiv2);
firstdiv2.appendChild(first_open_folder);
firstdiv2.appendChild(films2);
firstdiv.appendChild(firstdiv3);
firstdiv3.appendChild(doc);
firstdiv3.appendChild(iron);

firstdiv.appendChild(firstdiv4);
firstdiv4.appendChild(first_folder2);
firstdiv4.appendChild(fantasy);

firstdiv.appendChild(firstdiv5);
firstdiv5.appendChild(first_open_folder2);
firstdiv5.appendChild(fantasy2);

firstdiv.appendChild(firstdiv6);
firstdiv6.appendChild(doc2);
firstdiv6.appendChild(lord);

firstdiv.appendChild(firstdiv7);
firstdiv7.appendChild(first_folder7);
firstdiv7.appendChild(newFold);

firstdiv.appendChild(firstdiv8);
firstdiv8.appendChild(first_open_folder3);
firstdiv8.appendChild(newFold2);

firstdiv.appendChild(firstdiv9);
firstdiv9.appendChild(empty);



rootNode.appendChild(firstdiv);





window.onclick = myFunction;

function myFunction() {
    document.getElementsByClassName("first1")[0].style.display = "none";
}




var seconddiv = document.createElement('div');
seconddiv.className = "second";
rootNode.appendChild(seconddiv);



