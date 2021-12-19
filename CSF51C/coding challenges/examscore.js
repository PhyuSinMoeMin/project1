
const user = prompt("What is you name?");
const subject = prompt("Which subject mark do you want to know?");

const examScore = Math.floor(Math.random()* 100)+ 1 ;

if(examScore >= 80){
    alert(`Congrats, ${user} !! Your exam score in${subject} is ${examScore}. Wish you would get such hight mark in real.`);
}else if(examScore >= 60){
    alert(`Not bad, ${user} !! Your exam score in${subject} is ${examScore}. Wish you would get such hight mark in real.`);
}else if(examScore >= 40){
    alert(`At least you passed, ${user} !! Your exam score in${subject} is ${examScore}. Wish you would get such hight mark in real.`);
}else{
    alert(`Cheer up, ${user} !! Your exam score in${subject} is ${examScore}. Wish you would pass the exam in real.`);
}