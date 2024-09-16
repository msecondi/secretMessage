let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push("to", "Program");

for(var i = 0; i < secretMessage.length; i++) {
    if((secretMessage[i]) === "easily") {
        secretMessage[i] = "right";
    }
}

secretMessage.shift();


secretMessage.splice(0, 0, "Programming");

for(var i = 0; i < secretMessage.length; i++) {
    if((secretMessage[i]) === "get") {
        secretMessage.splice(i, 5, "know,");
    }
}

console.log(secretMessage.join(' '));
