const time = 2000; // 2 seconds
let No = 1;
let score = 0;

const onSelect = (choice) => {
    if (No === 1 && choice === "choice1") {
        correctDisplay()
    } else if (No === 1 && choice !== "choice1") {
        incorrectDisplay()
    } else if (No === 2 && choice === "choice4") {
        correctDisplay()
    } else if (No === 2 && choice !== "choice4") {
        incorrectDisplay()
    }
    No = No + 1;
    choiceOnChange(No);
    buttonDisable(true);
};

const choiceOnChange = (No) => {
    if (No === 2) {
        setTimeout(() => {
            document.getElementById("No").innerHTML = "ข้อที่ " + No;
            document.getElementById("question").innerHTML = "โรงเรียนปทุมราชวงศาอยู่จังหวัดอะไร?";
            document.getElementById("choice1").innerHTML = "1) กรุงเทพ";
            document.getElementById("choice2").innerHTML = "2) เชียงใหม่";
            document.getElementById("choice3").innerHTML = "3) อุบลราชธานี";
            document.getElementById("choice4").innerHTML = "4) อำนาจเจริญ";
            document.getElementById("answer-alert").innerHTML = "";
            buttonDisable(false);
            onFinish()
        }, time)
    }
}

const onFinish = () => {
    setTimeout(() => {
        document.getElementById("No").innerHTML = "คะแนนที่ได้";
        document.getElementById("question").innerHTML = score;
        document.getElementById("choice1").style.display = "none";
        document.getElementById("choice2").style.display = "none";
        document.getElementById("choice3").style.display = "none";
        document.getElementById("choice4").style.display = "none";
        document.getElementById("answer-alert").innerHTML = "";
    }, time)
}

const buttonDisable = (isDisable) => {
    document.getElementById("choice1").disabled = isDisable;
    document.getElementById("choice2").disabled = isDisable;
    document.getElementById("choice3").disabled = isDisable;
    document.getElementById("choice4").disabled = isDisable;
};

const correctDisplay = () => {
    score = score + 1;
    document.getElementById("answer-alert").innerHTML = "Answer is correct";
    document.getElementById("answer-alert").style.color = "green";
};

const incorrectDisplay = () => {
    document.getElementById("answer-alert").innerHTML = "Answer is incorrect";
    document.getElementById("answer-alert").style.color = "red";
};
