
// Hero Title이 rotate되도록 함수 생성
let greeting = ["Hello.", "Ei.", "Ola.", "Ello", "Aye.", "안녕.", "Buenos."];
let heroTitle = document.getElementById('hero_title');
let greetingNum = 0;

heroTitle.addEventListener('load', rotate)

function rotate() {
   
   if (greetingNum > greeting.length) {
      greetingNum = 0;
   }
   heroTitle.innerText = greeting[greetingNum];
   greetingNum++;
   
}

setInterval(rotate, 1000);


// function init() {
//    heroTitle.addEventListener('load', rotate)
// }

// init();


//talk form 
// 1-1. input에 focus되면 placeholder가 사라지고 위에 설명글이 뜨고 설명글과 밑줄은 파란색 (완)
//1-2. input blur시 reset. (완)
// 2. name과 company, let us는 한글자면 this is required가 아래에 뜨고 빨간색으로 변함
// 3. email은 email형식을 쓰지 않으면 this is not a valid email이라고 뜨고 빨간색으로 변함
// 4. sendmessage
// - 빈칸이 있거나 형식을 지켜서 작성하지 않으면, 경고문 뜸
// - 작성 기준 충족 시 버튼 누르면 안내문 뜸

let talkInput = document.querySelectorAll('.talk_input');
let talkInputLength = talkInput.length;

let talkEyebrow = document.querySelectorAll('.talk_eyebrow');


for (let i = 0; i < talkInputLength; i++) {

   
   //input에 focus!
   talkInput[i].addEventListener('focus', () => {
      talkInputFocus(i); 
   });


   //input에 blur!
   talkInput[i].addEventListener('blur', () => {
      talkBlur(i); 
   });

   talkInput[i].addEventListener('input', () => {
      talkOnInput(i); 
   });

}

function talkInputFocus(target) {
   
   if (target == 0) {
      talkInput[0].placeholder = "";
      talkEyebrow[0].style.display = "block";
   } else if (target == 1) {
      talkInput[1].placeholder = "";
      talkEyebrow[1].style.display = "block";
   } else if (target == 2) {
      talkInput[2].placeholder = "";
      talkEyebrow[2].style.display = "block";
   } else if (target == 3) {
      talkInput[3].placeholder = "";
      talkEyebrow[3].style.display = "block";
   }
}



let talkInputValue = ["name", "email", "company", "Let us know what you're looking for and how we can help."]; //blur 시 placeholder 적용 번거로워서 배열로 만들어서 변수에 담음

function talkBlur(target) {
   
   if (target == 0) {

      if ( talkInput[0].value == "" ) {

      talkInput[0].placeholder = `| Your ${talkInputValue[0]}`;
      talkEyebrow[0].style.display = "none";

      } else if (talkInput[0].value.length < 2) {

         talkRequire[0].style.display = "block";
         talkInput[0].style.borderBottomColor = "#e7185d";
         talkEyebrow[0].style = "display: block; color: #e7185d";

      } else {
         talkEyebrow[0].style.color = "rgb(0,0,0)";
      }

   } 

   if (target == 1) {

      if ( talkInput[1].value == "" ) {

      talkInput[1].placeholder = `| Your ${talkInputValue[1]}`;
      talkEyebrow[1].style.display = "none";

      } else if (talkInput[1].value.length < 2) {

         talkRequire[1].style.display = "block";
         talkInput[1].style.borderBottomColor = "#e7185d";
         talkEyebrow[1].style = "display: block; color: #e7185d";

      } else {
         talkEyebrow[1].style.color = "rgb(0,0,0)";
      }

   } 

   if (target == 2) {

      if ( talkInput[2].value == "" ) {

      talkInput[2].placeholder = `| Your ${talkInputValue[2]}`;
      talkEyebrow[2].style.display = "none";

      } else if (talkInput[2].value.length < 2) {

         talkRequire[2].style.display = "block";
         talkInput[2].style.borderBottomColor = "#e7185d";
         talkEyebrow[2].style = "display: block; color: #e7185d";

      } else {
         talkEyebrow[2].style.color = "rgb(0,0,0)";
      }

   } 

   if (target == 3) {

      if ( talkInput[3].value == "" ) {

      talkInput[3].placeholder = talkInputValue[3];
      talkEyebrow[3].style.display = "none";

      } else if (talkInput[3].value.length < 2) {

         talkRequire[3].style.display = "block";
         talkInput[3].style.borderBottomColor = "#e7185d";
         talkEyebrow[3].style = "display: block; color: #e7185d";

      } else {
         talkEyebrow[3].style.color = "rgb(0,0,0)";
      }

   } 

}

//input에 onchange? oninput?
// 2. name과 company, let us는 한글자면 this is required가 아래에 뜨고 빨간색으로 변함
// 3. email은 email형식을 쓰지 않으면 this is not a valid email이라고 뜨고 빨간색으로 변함
// 4. sendmessage
// - 빈칸이 있거나 형식을 지켜서 작성하지 않으면, 알림글 표시
// - 작성 기준 충족 시 버튼 누르면 안내문 뜸


//send 버튼을 클릭했을 때 talk_input에 null이 있거나, name/company/let us가 한 글자이거나, email형식이 아니면 알림글 표시
//모두 충족하면 안내문 뜸
const sendBtn = document.querySelector('#talk_send_btn');
let sendTitle = document.querySelector('.talk_right_title');
const talkForm = document.querySelector('#talk_form');
let talkRequire = document.querySelectorAll('.talk_require');


sendBtn.addEventListener('click', () => {
   talkSend();
   ValidateEmail(talkInput[1]);
})


function talkSend() {

   let ischeck = true; //조건 체크를 위한 변수 생성

   //false인 경우 확인
   for (let i=0; i<talkInputLength; i++) {

      //공백인 경우 해당 요소 스타일 변화 & false
      if (talkInput[i].value == "") {
         talkInput[i].style.borderBottomColor = "#e7185d";
         talkRequire[i].style.display = "block";
         ischeck = false;
      } 
      
      //공백이 아닌경우 해당 요소 스타일 변화 & true
      else {
         talkInput[i].style.borderBottomColor = "rgb(0,0,0,0.6)";
         talkRequire[i].style.display = "none";
         talkEyebrow[i].style = "display: block; color: rgb(0,0,0)";
         ischeck = true;
      }
   }
   
   //모든 요소가 true인 경우 
   if (ischeck) {
   sendTitle.innerText = "Thanks for reaching out! We'll get back to you as soon as possible.";
   talkForm.style.display ="none";
   }

}


//<개념>
//inchange event: 체크된 상태가 변경되었을 때. 내용이 변경된 후 요소가 포커스를 잃을 때 발생
//oninput event: 요소의 값이 변경된 직후 발생



function talkOnInput(target) {

   
      if (target == 0 && talkInput[0].value.length > 1) {

         talkRequire[0].style.display = "none";
         talkInput[0].style.borderBottomColor = "rgb(0,0,0,0.6)";

      } else if (target == 1 && talkInput[1].value.length > 1) {

         talkRequire[1].style.display = "none";
         talkInput[1].style.borderBottomColor = "rgb(0,0,0,0.6)";

      } else if (target == 2 && talkInput[2].value.length > 1) {

         talkRequire[2].style.display = "none";
         talkInput[2].style.borderBottomColor = "rgb(0,0,0,0.6)";

      } else if (target == 3 && talkInput[3].value.length > 1) {

         talkRequire[3].style.display = "none";
         talkInput[3].style.borderBottomColor = "rgb(0,0,0,0.6)";

      }

   }


//이메일 유효성 검사
function ValidateEmail(inputText) {
   var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(inputText.value.match(mailformat)) {
   alert("Valid email address!");

   return true;
   } else {
   alert("You have entered an invalid email address!");
   
   return false;
   }
}
