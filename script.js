var row=3;
function insert_Row() {
    //Write your code here
  var tr = document.createElement("tr");
	var td = document.createElement("td");
	td.innerText = `Row${row} cell1`;
		var td11 = document.createElement("td");
	td11.innerText = `Row${row} cell2`;
	tr.appendChild(td);
	tr.appendChild(td11);
	document.getElementById('sampleTable').appendChild(tr);

	//  var tr2 = document.createElement("tr");
	// var td2 = document.createElement("td");
	// td2.innerText = `Row${row} cell2`;
	// var td21 = document.createElement("td");
	// td21.innerText = `Row${row} cell2`;
	// tr2.appendChild(td2);
	// tr2.appendChild(td21);
	// document.getElementById('sampleTable').appendChild(tr2);
	row++;
  
}
