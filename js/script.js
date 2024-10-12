// 1. 页面加载时显示欢迎消息
document.addEventListener("DOMContentLoaded", displayWelcomeMessage);

function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to the English learning website!";
    document.getElementById("welcome").innerText = welcomeMessage;
}

// 2. 点击按钮切换文本内容
function changeText() {
    const demoElement = document.getElementById("demo");
    demoElement.innerText = (demoElement.innerText === "Click the button to change this text.")
        ? "The text has been changed!"
        : "Click the button to change this text.";
}

// 3. 计算输入框中的字符数
function updateCharacterCount() {
    const textInput = document.getElementById("text-input").value.length;
    document.getElementById("char-count").innerText = `Character count: ${textInput}`;
}

// 4. 倒计时功能
let countdownInterval;
function startCountdown() {
    let timeLeft = 10;
    const countdownDisplay = document.getElementById("countdown");

    countdownInterval = setInterval(() => {
        countdownDisplay.innerText = (timeLeft <= 0)
            ? "Time's up!"
            : `Time left: ${timeLeft} seconds`;

        if (timeLeft <= 0) clearInterval(countdownInterval);
        timeLeft--;
    }, 1000);
}

// 5. 停止倒计时
function stopCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Countdown stopped.";
}