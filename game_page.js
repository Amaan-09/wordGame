player1_name= localStorage.getItem("p1");
player2_name= localStorage.getItem("p2");

player1_score= 0;
player2_score= 0;

document.getElementById("Player1_name").innerHTML= player1_name+ " score:";
document.getElementById("Player2_name").innerHTML= player2_name+" score:";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;

 function send() {
    get_word=document.getElementById("word").value;
    word= get_word.toLowerCase();
    
    charAt1= word.charAt(1);
    charAt2= word.charAt(Math.floor(word.length/2));
    charAt3= word.charAt(word.length-1);
    
    r1= word.replace(charAt1,"_");
    r2= r1.replace(charAt2,"_");
    r3= r2.replace(charAt3,"_");

    question_word= "<h4 id='word_display'>Question:"+ r3 +"</h4>";
    input_box= "<br> Answer:<input type='text' id='input_box'>";
    check_button= "<br> <br> <button class='btn btn-info' onclick='check()'>CHECK</button>";
    row= question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";


}

question_turn= "p1"
answer_turn= "p2"

function check() {
    get_answer= document.getElementById("input_box").value;
    answer= get_answer.toLowerCase();
        console.log(answer);
    if(answer== word) {
        if(answer_turn== "p1"){
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;  
        }
    }

     
        if(question_turn== "p1"){
           question_turn = "p2";
           document.getElementById("player_question").innerHTML="Question turn: "+player1_name;
        }
        else{
            question_turn= "p1";
            document.getElementById("player_question").innerHTML="Question turn: "+player2_name;
        }

        if(answer_turn== "p1"){
            answer_turn = "p2";
            document.getElementById("player_answer").innerHTML="Answer turn: "+player1_name;
         }
         else{
             answer_turn= "p2";
             document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;
         }
         document.getElementById("output").innerHTML="";
    } 
