function outter() {
	var title = 'coding'
	function inner(){
		/*
		내부 함수의 ttile이라는 지역변수가 존재하지 않는다면
		inner함수를 포함하고 있는 바깥함수에서 title이라는 변수를 찾게 됨
		*/
		alert(title);
	}
	inner();
}
outter();