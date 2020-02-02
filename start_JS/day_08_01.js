var vscope = 'global';
function fscope(){
	 //vscope = 'local';	//글로벌 변수 의미, 글로벌 변수의 값을 변경하게 된 것
	 var vscope = 'local'; //별도의 변수를 생성 해준 것
}

fscope();
alert(vscope);