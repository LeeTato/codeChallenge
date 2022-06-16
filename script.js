// let answerButton = document.querySelector("#getAnswer")
// let magicPic = document.querySelector("#magic-pic")


// //answer arrar
// let answer=["yes","no","maybe"]



// answerButton.addEventListener("click",()=>{
//     //wiggle the magic 8 ball 
//     magicPic.classList.toggle("wiggle")
//     setTimeout(() => {
//         magicPic.classList.toggle("wiggle")
//     }, 2000);
// })

let answers=["yes","no","maybe"]

let eight = document.getElementById("eight")
let answer = document.getElementById("answer")
let eightball = document.getElementById("eight-ball");
let question = document.getElementById("question");
eightball.addEventListener("click", function(){
    if (question.value.length<1){
        alert('Enter a question');

    }else{
        eight.innerText=""
        let num = Math.floor(Math.random()*Math.floor(answers.length));
        answer.innerText = answers[num]
    }
})
