function a (){
    var i = 0; //결과 01234
    // i=0; // 결과 무한반복
}
for(var i = 0; i < 5; i++){
    a();
    document.write(i);
}

