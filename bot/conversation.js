const chat = {
    1: {
        text: 'Hi! I\'m Emma, a technical writer.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'I specialize in cyber security, blockchain, and data analytics.',
        options: [
            {
                text: "That's nice, could I see your portfolio?",
                next: 3
            },
            {
                text: "How can I contact you?",
                next: 4
            }
        ]
    },
    3: {
        text: 'Of course. I have a portfolio website built with GitBook: <a target="_blank" href="https://emmaos.gitbook.io/portfolio/">Portfolio</a>',
    },
    4: {
        text: 'Just send me a message at <a href="mailto:me@emmatechwriter.com">me@emmatechwriter.com</a>.',
    },
};
