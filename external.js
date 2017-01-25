var ValArrObj = function(){
    var valArr = [];
    
    this.enterVal = function(val){
        
        if(!isNaN(parseInt(val)) && valArr.length === 0){
            valArr.push(val);
        }//first input
        else if(!isNaN(parseInt(val)) && valArr.length > 0 && !isNaN(parseInt(valArr[valArr.length-1]))){
            valArr[valArr.length - 1] = valArr[valArr.length - 1] + val;
        }//addition to numbered input
        else if(val === "." && !isNaN(parseInt(valArr[valArr.length-1]))){
            valArr[valArr.length - 1] = valArr[valArr.length - 1] + val;
        }//adding a decimal to input
        else if(!isNaN(parseInt(val)) && valArr.length > 0 && isNaN(parseInt(valArr[valArr.length-1]))){
            valArr.push(val);
        }//adding new number
        else if(val === "="){
            valArr.push(val);
            this.execute();
        }
        else if(val === "CE"){
            valArr.splice(valArr.length-1,valArr.length);
            $(".inputs").text(valArr.join(""));
        }
        else if(val === "AC"){
            this.clearArr();
            $(".inputs").text("");
        }
        else if(isNaN(parseInt(val)) && valArr.length > 0 && !isNaN(parseInt(valArr[valArr.length-1]))){
            valArr.push(val);
        }//adding operation
        else{
            $(".inputs").text(valArr.join(""));
        }
        
        console.log(valArr);
    }//end enterVal fns
    
    this.clearArr = function(){
        valArr = [];
    }//end clearArr
    
    this.execute = function(){
        var temp  = valArr.slice(0,valArr.length-1);
        var temp  = temp.join("");
        var total = eval(temp);
        total     = total.toString();
        valArr.push(total);
        var current = $(".inputs").text();
        $(".calFeed .jumbotron").append("<p>"+current+total+"</p>");
        $(".inputs").text(total);
        this.clearArr();
        valArr.push(total);
        console.log(total);
    }//end execute
}//end class

var valArrObj = new ValArrObj();