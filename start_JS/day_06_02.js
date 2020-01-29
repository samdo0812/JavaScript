var li = ['a','b','c','d'];
li.push('e');
alert(li);

var li = ['a','b','c','d'];
li = li.concat(['e','f']);
alert(li);

var li = ['a','b','c','d'];
li.unshift('z');
alert(li);

var li = ['a','b','c','d'];
li.splice(2,0,'B');
alert(li);
/*
array.splice(index, howmany, element);
index : 배열의 위치
howmany : index에서부터 제거 될 원소들의 수, 이 값이 0이면 어떠한 원소도 삭제되지 않는다.
element : index+homany사이에 추가될 값
*/