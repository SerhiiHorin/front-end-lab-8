// Your code goes here

var rootNode = document.getElementById("root");

var headline = document.createElement('div');
	headline.className = "headline";
	headline.innerHTML = "<h1>Most popular tanks</h1>";

var divTanks = document.createElement('div');
	divTanks.className = "divTanks";
	divTanks.setAttribute('id', 'divTanks');
	
	var firstTank = document.createElement('div');
		firstTank.className = "firstTank";
		firstTank.setAttribute('id', 'firstTank');
		divTanks.appendChild(firstTank);

		var firstTankImg = document.createElement('div');
			firstTankImg.className = "firstTankImg";
			firstTankImg.setAttribute('id', 'firstTankImg');
			var object140 = document.createElement("IMG");
			    object140.setAttribute("src", "images/tanks/object_140.png");
			    object140.setAttribute("width", "600");
			    object140.setAttribute("height", "438");
			    object140.setAttribute("alt", "Tank Object 140");
  		
  		var firstTankSignature = document.createElement('div');
			firstTankSignature.className = "firstTankSignature";
			firstTankSignature.setAttribute('id', 'firstTankSignature');
				var redFlag = document.createElement("IMG");
				    redFlag.setAttribute("src", "images/countries/ussr.png");
				    redFlag.setAttribute("width", "29");
				    redFlag.setAttribute("height", "18");
				    redFlag.setAttribute("alt", "red flag");
			    var firstTankName = document.createElement('p');
			        firstTankName.className = "firstTankName";
			    	firstTankName.innerHTML = "<span>10</span> Object 140";


		firstTankImg.appendChild(object140);
		firstTankName.appendChild(redFlag);
		firstTankSignature.appendChild(firstTankName);
		firstTank.appendChild(firstTankImg);
		firstTank.appendChild(firstTankSignature);



var secondTank = document.createElement('div');
		secondTank.className = "secondTank";
		secondTank.setAttribute('id', 'secondTank');
		divTanks.appendChild(secondTank);

		var secondTankImg = document.createElement('div');
			secondTankImg.className = "secondTankImg";
			secondTankImg.setAttribute('id', 'secondTankImg');
			var t62a = document.createElement("IMG");
			    t62a.setAttribute("src", "images/tanks/t62a.png");
			    t62a.setAttribute("width", "600");
			    t62a.setAttribute("height", "438");
			    t62a.setAttribute("alt", "Tank 62a");
  		
  		var secondTankSignature = document.createElement('div');
			secondTankSignature.className = "secondTankSignature";
			secondTankSignature.setAttribute('id', 'secondTankSignature');
				var redFlag = document.createElement("IMG");
				    redFlag.setAttribute("src", "images/countries/ussr.png");
				    redFlag.setAttribute("width", "29");
				    redFlag.setAttribute("height", "18");
				    redFlag.setAttribute("alt", "red flag");
			    var secondTankName = document.createElement('p');
			        secondTankName.className = "secondTankName";
			    	secondTankName.innerHTML = "<span>10</span> T-62A";


		secondTankImg.appendChild(t62a);
		secondTankName.appendChild(redFlag);
		secondTankSignature.appendChild(secondTankName);
		secondTank.appendChild(secondTankImg);
		secondTank.appendChild(secondTankSignature);
		

rootNode.appendChild(headline);
rootNode.appendChild(divTanks);