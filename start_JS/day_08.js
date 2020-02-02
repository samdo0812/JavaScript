var vscope = 'global';

function fscope(){
    alert(vscope);
}

function fscope2(){
    alert(vscope);
}

function fscope3(){
	var vscope = 'local';
	var lv = 'local variables';
	alert(vscope)
}


fscope2();
fscope3();
alert(lv);	//undefined

