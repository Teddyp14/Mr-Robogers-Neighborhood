function roboger(input) {
    const num = parseInt(input)
    const numCheck = ["1", "2", "3"]

    let messageArray = [];
    for (let i = 0; i <= num; i++) {
        messageArray.push(i.toString());
    }

    messageArray.forEach(function (element, i) {
        for (const digit of element) {
            if (digit === numCheck[0]) {
                messageArray[i] = "Beep!"
            }
        }
    })
    console.log(messageArray);

}

