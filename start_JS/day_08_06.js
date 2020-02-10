//정적 유효범위
//사용될 때가 아니라 정의될 때의 변수가 사용됨
var i = 5;	//전역변수

function a() {
	var i = 10;	//지역변수
	b();
}

function b(){
	document.write(i); 
	//이 i는 누구인가, 확인할 것
	//전역변수가 사용됨, 5
}

a();