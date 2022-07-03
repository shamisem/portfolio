const chat = {
    1: {
        text: 'Hello! I\'m Emma, a technical writer.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'I specialize in cyber security, blockchain, and data analytics. I have experience with both developer and end-user documentation, and I love the Docs as Code approach.',
        options: [
            {
                text: "That's nice, could I see your CV and portfolio?",
                next: 3
            },
            {
                text: "How can I contact you?",
                next: 4
            }
        ]
    },
    3: {
        text: 'Of course. I have a portfolio website built with GitBook: <a target="_blank" href="https://emmaos.gitbook.io/portfolio/">Portfolio</a>. <br> My CV is available in PDF format (<a href="#">Download</a>). You can also browse my work history on LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/emmatechwriter">Emma Arakelyan</a>.',
        options: [
            {
                text: 'I like these. How do I contact you?',
                next: 4
            }
        ]
    },
    4: {
        text: 'Just send me a message at <a href="mailto:me@emmatechwriter.com">me@emmatechwriter.com</a> or send a connection request on <a target="_blank" href="https://www.linkedin.com/in/emmatechwriter">LinkedIn</a>.',
    },
};
