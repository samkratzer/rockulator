function startTime() {
    	var today = new Date();
    	var month = today.getMonth();
	var date = today.getDate();
	var dst = checkDST();
	var h = today.getUTCHours();
 	var hAz = today.getUTCHours()-7;
 	var hCt = today.getUTCHours()-6+dst;
 	var m = today.getUTCMinutes();
 	var s = today.getUTCSeconds();
 	var twelvehourAz = checkTwelve(hAz);
 	var twelvehourCt = checkTwelve(hCt);
	var twelvehourUTC = checkTwelve(h);
 	hAz = modifyHours(hAz);
 	hCt = modifyHours(hCt);
	h = modifyHours(h);
 	m = checkTime(m);
 	s = checkTime(s);
	document.getElementById('Arizona').innerHTML = "Arizona: " + hAz + ":" + m + ":" + s + " "  + twelvehourAz;
	document.getElementById('Central').innerHTML = "Central: " + hCt + ":" + m + ":" + s + " "  + twelvehourCt;
	document.getElementById('UTC').innerHTML = "UTC: " + h + ":" + m + ":" + s + " " + twelvehourUTC; 
    	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    	return i;
}

function checkTwelve(i) {
	if (i > 12 || i < 0) return "PM";
    	else return "AM";
}

function modifyHours(i) {
	if (i > 12) {i = i-12};
	if (i < 0) {i = i+12};
    	return i;
}

function checkDST() {
	var today = new Date();
	var nov3 = new Date("2018-11-03 0:00:00");
    	var mar10 = new Date("2019-03-10 0:00:00");
	if(today > nov3 && today < mar10) return 0;
	else return 1;
}
