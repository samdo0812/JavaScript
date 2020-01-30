var grades = {
    'list': {'kim': 10, 'zhang': 9, 'lee': 80},
    'show' : function(){
        for(var name in this.list){
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
};
grades.show();