var numbering = function () {
	i = 0;
	while(i<10){
		document.write(i);
		i += 1;
	}
}
numbering();

//익명함수, 1회성
(function () {
	i = 0;
	while(i<10){
		document.write(i);
		i += 1;
	}
});