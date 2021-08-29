// Dilaog Box Quiz
function checkHere(){
    var n=document.getElementById("name").value ; 
    var x=document.getElementById("infoBox").style.display;
      if(n !=='' && x== 'block')
      {
        document.getElementById("infoBox").style.display='none'
      }
      else{
          document.getElementById("infoBox").style.display='block'
      }
  }
  //Exit Button
  function exitBack(){
    var V=document.getElementById("infoBox").style.display;
    if(V==='none'){
        document.getElementById("infoBox").style.display='block';
    }else{
        document.getElementById("infoBox").style.display='none';
    }
  }
//  Quiz Question Wala part
var quizQuestions=[
    {
        question: "Q1: Full Form of HTML is?",
        a:  "Hyper Text Markup language",
        b: "Hyper Text Makeup language",
        c:  "Hey Texas Mark language",
        d: "Hello To My Love",
        correct: "ans1",
    },
    {
        question: "Q2: Full Form of CSS is ?",
        a: "Create Style Sheet",
        b: "Cascading Style Sheet",
        c: "Cascade Style Sheet",
        d: "Copy Style State",
        correct: "ans2",
    },
    {
        question: "Q3: Without Js you can't make your website  " ,
        a: "publish",
        b: "Design",
        c: "Functional",
        d: "Structure",
        correct: "ans3",        
    },
    {
        question: "Q4: Js using in which inside Html file?",
        a: "Script",
        b: "link",
        c: "href",
        d: "a tag",
        correct: "ans1",
    },
    {
        question: "Q5:Correct format of script Tag which link js file to html file is ?",
        a: "<Script></Script>",
        b: "<script></script>",
        c: "<Sxript href=''> ",
        d: "<script src=''></script>",
        correct: "ans4",
    },
];

var questions= document.querySelector('.question');
var option1= document.getElementById('option1');
option2=document.getElementById('option2') ;
option3=document.getElementById('option3');
option4=document.getElementById('option4');
submit=document.getElementById('submit');
var answers=document.querySelectorAll('.answer');
var showScore=document.querySelector('#showScore');
 var qCount=0;
 var count=0;

function load(){
    questionList= quizQuestions[qCount];
    questions.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
load();


function getCheckAnswer(){
   var ans;
   answers.forEach(function (curAnsElem){
    if(curAnsElem.checked){
    ans=curAnsElem.id;}
    });

    return ans;

};


function deselectAll(){
    answers.forEach(function(curAnsElem){curAnsElem.checked=false });
}
function submitH(){
    var checkedAns=getCheckAnswer();
    console.log(checkedAns);
    if(checkedAns===quizQuestions[qCount].correct){
        count++
        console.log(count);
    };
    qCount++;
    deselectAll();
    if(qCount<quizQuestions.length){
    load();
    }
    else{
        showScore.innerHTML=`<h1 align="center">Result</h1>
        <h3>You scored ${count*10}/${quizQuestions.length*10} </h3>
        <button class="btn"><a href="./index.html">PlayAgain </a></button>`;
        showScore.classList.remove('ScoreArea');     
        
    }
}

