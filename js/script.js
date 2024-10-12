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
// 单词库模拟
const wordData = {
    primary: [
        { word: "apple", image: "images/apple.jpg", audio: "audio/apple.mp3", example: "I like to eat an apple.", translation: "我喜欢吃苹果。" },
        { word: "banana", image: "images/banana.jpg", audio: "audio/banana.mp3", example: "She has a banana.", translation: "她有一根香蕉。" }
    ],
    middle: [
        { word: "computer", image: "images/computer.jpg", audio: "audio/computer.mp3", example: "The computer is new.", translation: "这台电脑是新的。" }
    ]
    // 其他难度单词...
};

// 页面加载时随机显示单词
document.addEventListener("DOMContentLoaded", function() {
    showRandomWord();
});

function showRandomWord() {
    const wordList = wordData.primary; // 这里可以随机选择难度
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    
    document.getElementById("word-display").innerText = randomWord.word;
    document.getElementById("word-image").src = randomWord.image;
    document.getElementById("word-audio").src = randomWord.audio;
}

function playPronunciation() {
    const audio = document.getElementById("word-audio");
    audio.play();
}

// 选择词汇难度
function loadWordList() {
    const level = document.getElementById("level").value;
    const words = wordData[level];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    
    document.getElementById("study-word").innerText = randomWord.word;
    document.getElementById("study-image").src = randomWord.image;
    document.getElementById("study-example").innerText = `${randomWord.example} - ${randomWord.translation}`;
    document.getElementById("study-audio").src = randomWord.audio;
}

function playStudyAudio() {
    const audio = document.getElementById("study-audio");
    audio.play();
}