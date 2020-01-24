

for(var i = 0; i < 10; i++){
    if(i === 5) {
        break;
    }
    document.write('break '+i+'<br />');
}

for(var i = 0; i < 10; i++){
    if(i === 5) {
        continue;
    }
    document.write('continue '+i+'<br />');
}

for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){    
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        document.write(String(i)+String(j)+'<br />');
    }
}