var size = 8;
var curr_state = 1;
var prev_state = 0;
var next_state = 2;
var file_path = "media/image/";
var file_type = ".png";

var file_name = [
    "Snake Game",
    "TicTacToe",
    "India states' game",
    "Morse Code Converter",
    "Gelato Timer",
    "Flash Card",
    "Turtle Race",
    "Random Walk",
];
var dec = [
    "Developed a classic Snake game in Python, featuring smooth controls, real-time scoring, and increasing difficulty, providing an engaging and nostalgic gaming experience",
    "It is a GUI based version of the famous traditional brain tease. The player competes with the computer and aims to win the game",
    "Developed an interactive Python game that displays India's map, prompting users to identify states by name, with correct entries highlighted on the map at specified coordinates",
    "Created a Python-based Morse code converter that translates text to Morse code offering a user-friendly interface for encoding messages",
    "Built a Python-based gelato timer app, featuring an intuitive interface to ensure perfect gelato consistency every time.",
    "Created a Python flash card game for learning French words, featuring randomized cards to enhance vocabulary acquisition.",
    "Developed a Python turtle race game using the Turtle module, featuring a turtle with randomized movements and engaging visual animations.",
    "Developed a Python program using the Turtle module creating unique and intricate patterns with each run, showcasing dynamic visual art.",
];

var pic = document.getElementsByClassName("pic");
var desc = document.getElementsByClassName("desc");
var head = document.getElementsByClassName("heading");
var prev_button = document.getElementById("prev");
var next_button = document.getElementById("next");
prev_button.addEventListener("click", prev_slider, false);
next_button.addEventListener("click", next_slider, false);

function initialize() {
    update(0, prev_state);
    update(1, curr_state);
    update(2, next_state);
    for (let i = 3; i < pic.length; i++) {
        update(i, (next_state + i - 2) % size);
    }
}

function next_slider() {
    prev_state = curr_state;
    curr_state = next_state;
    next_state = (next_state + 1) % size;
    initialize();
}

function prev_slider() {
    next_state = curr_state;
    curr_state = prev_state;
    prev_state = (prev_state - 1 + size) % size;
    initialize();
}

function update(x, y) {
    pic[x].src = file_path + file_name[y] + file_type;
    pic[x].alt = file_name[y];
    desc[x].innerHTML = dec[y];
    head[x].innerHTML = file_name[y];
    console.log(pic[x].src);
}
initialize();

var about = document.getElementById("about");
var popup = document.getElementById("popup");
var resume = document.getElementById("resume");
about.addEventListener("click", function (event) {
    event.preventDefault();
    popup.style.display = "block";
});

resume.addEventListener("click", open_resume);
function open_resume() {
    popup.style.display = "none";
    url = "media/resume/GungunGuptaResume.pdf";
    window.open(url, "_blank");
}
