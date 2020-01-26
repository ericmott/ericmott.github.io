/* ****** Commented out for Chapter 4
// Week 02 - Chapter 3
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

let score = 0; // initialize score

// Week 01 - Chapter 1
alert('Welcome to Quiz Ninja!');

// Week 02 - Chapter 2
const question = "What is Superman's real name?";
const answer = prompt(question);
alert(`You answered ${answer}`);

// Week 02 - Chapter 3
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
****** Commented out for Chapter 4 */

// Week 02 - Chapter 4
/*const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

function start(quiz){
    let score = 0;

    // main game loop
    for (const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop

    gameOver();

    // function declaratoins
    function ask(question){
        return prompt(question);
    }

    function check(response,answer){
        if(response === answer){
            alert('Correct!');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' :''}`);
    }
}
start(quiz);*/

// Week 03 - Chapter 5
/*const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];

const game ={
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

    // main game loop
    for (const question of this.questions){
        this.question = question;
        this.ask();
    }
    // end of main game loop
    this.gameOver();
},
ask(){
    const question = `What is ${this.question.name}'s real name?`;
    const response = prompt(question);
    this.check(response);
},
check(response){
    const answer = this.question.realName;
    if(response === answer){
        alert('Correct');
        this.score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1? 's' : ''}`);
    }
}

game.start(quiz);*/

// Week 03 - Chapter 6
/*const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];

// View Object
const view = {
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribut(key, attributes[key]);
        }
        target.innerHTML = content;
    }
};

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        // main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', {
                'class': 'correct'
            });
            alert('Correct');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {
                'class': 'wrong'
            });
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        alert(`Game Over, you scored ${this.score} point${this.score !== 1? 's' : ''}`);
    }
}

game.start(quiz);*/

// Week 03 - Chapter 7
const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];

// View Object
const view = {
    start: document.getElementById('start'),
    score: document.querySelector('#score strong'),
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target, content, attributes) {
        for (const key in attributes) {
            target.setAttribut(key, attributes[key]);
        }
        target.innerHTML = content;
    },
    show(element){
        element.style.display = 'block';
    },
    hide(element){
        element.style.display = 'none'; // this line has an error. I don't know why.  Need to ask *****
    }
};

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        view.hide(view.start);

        // main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            view.render(view.result, 'Correct!', {
                'class': 'correct'
            });
            alert('Correct');
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {
                'class': 'wrong'
            });
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        alert(`Game Over, you scored ${this.score} point${this.score !== 1? 's' : ''}`);

        view.show(view.start);
    }
}

game.start(quiz);

view.start.addEventListener('click', () => game.start(quiz), false);