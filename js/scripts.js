function roboger(input, userName) {
    const num = parseInt(input)
    const numCheck = ["1", "2", "3"]
    let messageArray = [];

    for (let i = 0; i <= num; i++) {
        messageArray.push(i.toString());
    }

    messageArray.forEach(function (element, i) {
        for (const digit of element) {
            if (digit === numCheck[2]) {
                messageArray[i] = "Won't you be my neighbor, " + userName + "?";
            }
        }
    });

    messageArray.forEach(function (element, i) {
        for (const digit of element) {
            if (digit === numCheck[1]) {
                messageArray[i] = "Bop!";
                break;
            } else if (digit === numCheck[0]) {
                messageArray[i] = "Beep!"
            }
        }
    });

    messageString = messageArray.join(", ");
    return messageString;
}

function handleForm(event) {
    event.preventDefault();
    const result = document.querySelector("h2#result");
    const userInput = document.querySelector("input#number").value;
    const userName = document.querySelector("input#name").value;

    result.innerText = "";

    result.append(roboger(userInput, userName));
}

window.addEventListener("load", function () {
    document.querySelector("form#robo-rogers").addEventListener("submit", handleForm);
})