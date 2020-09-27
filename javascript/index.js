function initialize() {
	const deg = 6;
	const hr = document.querySelector('#hr');
	const mn = document.querySelector('#mn');
	const sc = document.querySelector('#sc');

	setInterval(() => {
		let day = new Date();
		let hh = day.getHours() * 30;
		let mm = day.getMinutes() * deg;
		let ss = day.getSeconds() * deg;

		hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;
	});
}

function showTime(){
	var date = new Date();
	var h = date.getHours(); // 0 - 23
	var m = date.getMinutes(); // 0 - 59
	var s = date.getSeconds(); // 0 - 59
	var backcolornum = (h / 60) + m
	var backcolor = backcolornum/5.64705882353
	var session = "AM";
	
	if(h == 0){
		h = 12;
	}
	
	if(h > 12){
		h = h - 12;
		session = "PM";
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	
	var time = h + ":" + m + ":" + s + " " + session;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	console.log(time)
	document.getElementById("body").style.background-color = "backcolor";
	setTimeout(showTime, 1000);
}
