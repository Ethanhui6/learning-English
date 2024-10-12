// 脚本文件: js/script.js

// 1. 页面加载时显示欢迎消息
document.addEventListener("DOMContentLoaded", function() {
    displayWelcomeMessage();
});

// 欢迎消息函数
function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to the English learning website!";
    document.getElementById("welcome").innerText = welcomeMessage;
}

// 2. 点击按钮切换文本内容
function changeText() {
    const demoElement = document.getElementById("demo");
    if (demoElement.innerText === "Click the button to change this text.") {
        demoElement.innerText = "The text has been changed!";
    } else {
        demoElement.innerText = "Click the button to change this text.";
    }
}

// 3. 计算输入框中的字符数
function updateCharacterCount() {
    const textInput = document.getElementById("text-input").value;
    const charCount = textInput.length;
    document.getElementById("char-count").innerText = `Character count: ${charCount}`;
}

// 4. 简单的倒计时功能
let countdownInterval;
function startCountdown() {
    let timeLeft = 10; // 设置倒计时为10秒
    const countdownDisplay = document.getElementById("countdown");
    
    countdownInterval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownDisplay.innerText = "Time's up!";
        } else {
            countdownDisplay.innerText = `Time left: ${timeLeft} seconds`;
        }
        timeLeft--;
    }, 1000);
}

// 5. 停止倒计时
function stopCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "Countdown stopped.";
}
