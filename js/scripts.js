function robotRoger(input, userName) {
    const num = parseInt(input)
    const numCheck = ["1", "2", "3"]
    let messageArray = [];

    if (num < 0) {
        return "Error! No negative numbers, please!"
    }

    for (let i = 0; i <= num; i++) {
        messageArray.push(i.toString());
    }

    messageArray.forEach(function (element, i) {
        for (const digit of element) {
            if (digit === numCheck[2]) {
                messageArray[i] = '"Won' + "'t you be my neighbor, " + userName + '?"';
            }
        }
    });

    messageArray.forEach(function (element, i) {
        for (const digit of element) {
            if (digit === numCheck[1]) {
                messageArray[i] = '"Bop!"';
                break;
            } else if (digit === numCheck[0]) {
                messageArray[i] = '"Beep!"'
            }
        }
    });

    const messageString = messageArray.join(", ");
    return messageString;
}

function handleForm(event) {
    event.preventDefault();
    const resultContainer = document.getElementById("result-container");
    const result = document.querySelector("h2#result");
    const userInput = document.querySelector("input#number").value;
    const userName = document.querySelector("input#name").value;

    resultContainer.classList.add("hidden");

    const newResult = robotRoger(userInput, userName);
    result.innerText = newResult;

    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("visible");
}

window.addEventListener("load", function () {
    document.querySelector("form#robo-rogers").addEventListener("submit", handleForm);
})