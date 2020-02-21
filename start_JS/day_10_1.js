function outter(){
    var title = 'coding';  
    return function(){        
        alert(title);
    }
}
inner = outter();
inner();