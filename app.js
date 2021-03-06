var tic;
var player1;
var plater2;
var cpu;
var currentPlayer;

function player(XorO){

}

function CPU(XorO){
  this.pos = XorO;
  this.neg = (XorO ? 'X' : 'O');
}

function ticTacBoard(){
  this.cell1_1 = "-";
  this.cell1_2 = "-";
  this.cell1_3 = "-";
  this.cell2_1 = "-";
  this.cell2_2 = "-";
  this.cell2_3 = "-";
  this.cell3_1 = "-";
  this.cell3_2 = "-";
  this.cell3_3 = "-";
  //rows
  this.row1=[this.cell1_1,this.cell1_2,this.cell1_3];
  this.row2=[this.cell2_1,this.cell2_2,this.cell2_3];
  this.row3=[this.cell3_1,this.cell3_2,this.cell3_3];
  //columns
  this.col1=[this.cell1_1,this.cell2_1,this.cell3_1];
  this.col2=[this.cell1_2,this.cell2_2,this.cell3_2];
  this.col3=[this.cell1_3,this.cell2_3,this.cell3_3];
  //diagnol
  this.diag1=[this.cell1_1,this.cell2_2,this.cell3_3];
  this.diag2=[this.cell1_3,this.cell2_2,this.cell3_1];

  this.winner = function(){
    if(this.row1.join("") === "XXX" || this.row1.join("") === "OOO"){
      return this.row1[0];
    }
    else if(this.row2.join("") === "XXX" || this.row2.join("") === "OOO"){
      return this.row2[0];
    }
    else if(this.row3.join("") === "XXX" || this.row3.join("") === "OOO"){
      return this.row3[0];
    }
    else if(this.col1.join("") === "XXX" || this.col1.join("") === "OOO"){
      return this.col1[0];
    }
    else if(this.col2.join("") === "XXX" || this.col2.join("") === "OOO"){
      return this.col2[0];
    }
    else if(this.col3.join("") === "XXX" || this.col3.join("") === "OOO"){
      return this.col3[0];
    }
    else if(this.diag1.join("") === "XXX" || this.diag1.join("") === "OOO"){
      return this.diag1[0];
    }
    else if(this.diag1.join("") === "XXX" || this.diag1.join("") === "OOO"){
      return this.diag1[0];
    }
    else{
      return false;
    }
  }//end of winner fns

  this.boardFilled = function(){
    if(!this.row1.includes("-") && !this.row2.includes("-") && !this.row3.includes("-")){
      return true;
    }
    else{
      return false;
    }
  }//end of boardFilled fns

  this.changeCell = function(targetId,XorO){
    switch(targetId){
      case 'cell1_1':
        this.cell1_1 = XorO;
        break;
      case 'cell1_2':
        this.cell1_2 = XorO;
        break;
      case 'cell1_3':
        this.cell1_3 = XorO;
        break;
      case 'cell2_1':
        this.cell2_1 = XorO;
        break;
      case 'cell2_2':
        this.cell2_2 = XorO;
        break;
      case 'cell2_3':
        this.cell2_3 = XorO;
        break;
      case 'cell3_1':
        this.cell3_1 = XorO;
        break;
      case 'cell3_2':
        this.cell3_2 = XorO;
        break;
      case 'cell3_3':
        this.cell3_3 = XorO;
        break;
    }
  }//end of changeCell fns


  this.reset = function(){
    this.cell1_1 = "-";
    this.cell1_2 = "-";
    this.cell1_3 = "-";
    this.cell2_1 = "-";
    this.cell2_2 = "-";
    this.cell2_3 = "-";
    this.cell3_1 = "-";
    this.cell3_2 = "-";
    this.cell3_3 = "-";
  }//end of reset fns

  this.updateFns = function(){
    //rows
    this.row1=[this.cell1_1,this.cell1_2,this.cell1_3];
    this.row2=[this.cell2_1,this.cell2_2,this.cell2_3];
    this.row3=[this.cell3_1,this.cell3_2,this.cell3_3];
    //columns
    this.col1=[this.cell1_1,this.cell2_1,this.cell3_1];
    this.col2=[this.cell1_2,this.cell2_2,this.cell3_2];
    this.col3=[this.cell1_3,this.cell2_3,this.cell3_3];
    //diagnol
    this.diag1=[this.cell1_1,this.cell2_2,this.cell3_3];
    this.diag2=[this.cell1_3,this.cell2_2,this.cell3_1];
  }//end of updateFns

  this.makeBoard = function(){
    $('#cell1_1').text(this.cell1_1);
    $('#cell1_2').text(this.cell1_2);
    $('#cell1_3').text(this.cell1_3);
    $('#cell2_1').text(this.cell2_1);
    $('#cell2_2').text(this.cell2_2);
    $('#cell2_3').text(this.cell2_3);
    $('#cell3_1').text(this.cell3_1);
    $('#cell3_2').text(this.cell3_2);
    $('#cell3_3').text(this.cell3_3);
  }//end of makeBoard fns
}//end of ticTacBoard class

$('#singlePlayerBtn').click(function(){
  tic1 = new ticTacBoard();
  tic1.makeBoard();
  while(tic1.winner() === false && !tic1.boardFilled()){

  }
});

$('.ticCell').click(function(event){
  var targetId = event.target.id;

});
