//ex 1)

if(true){
    alert(1);
} else {
    alert(2);
}

//ex 2)

if(false){
    alert(1);
} else {
    alert(2);
}

//ex 1)
if(false){
    alert(1);
} else if(true){
    alert(2);
} else if(true){
    alert(3);
} else {
    alert(4);
}
// 결과 : 2

//ex 2)
if(false){
    alert(1);
} else if(false){
    alert(2);
} else if(true){
    alert(3);
} else {
    alert(4);
}
//결과 3

//ex 3
if(false){
    alert(1);
} else if(false){
    alert(2);
} else if(false){
    alert(3);
} else {
    alert(4);
}
//결과 4