var vscope = 'global';

function fscope(){
	 var vscope = 'local';	//로컬변수 생성
	 vscope = 'local';	//함수의 안의 로컬변수의 값 변경 
}

fscope();
alert(vscope);