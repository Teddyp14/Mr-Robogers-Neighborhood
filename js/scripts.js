function roboger(input) {
    const num = parseInt(input)
    const numCheck = ["1", "2", "3"]

    let messageArray = [];
    for (let i = 0; i <= num; i++) {
        messageArray.push(i.toString());
    }

    messageArray.forEach(function (element, i) {
        if (numCheck[0].includes(element)) {
            messageArray[i] = "Beep!";
        }
    })
    console.log(messageArray);

}

