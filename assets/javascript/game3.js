// breaking bad trivia game

// audio files object
    var audio = {
        audGameIntro: ["assets/audio/breaking-bad-intro.mp3"],
        audRightAns: ["assets/audio/youre-god-damn-right.mp3"],
        audWrongAns: ["assets/audio/whatever-man.mp3"],
        audSkipQuest: ["assets/audio/whatup-biatch.mp3"]
    }

// question/answers objects 
var QAobject = [
    {   "question": "What song plays in Saul Goodman’s waiting room?",  
        "option1": "America the Beautiful",
        "option2": "This Land is Your Land",
        "option3": "Livin On a Prayer",
        "option4": "MMMbop",
        "answer": "1",       
        "gif": "<img src='./assets/images/1_saulGoodman.gif'/>"
    },  
    {   "question": "What ailment does Walter White battle?",
        "option1": "Huntington's disease", 
        "option2": "multiple personality disorder", 
        "option3": "lung cancer",
        "option4": "meth addiction",
        "answer": "3",       
        "gif": "<img src='./assets/images/2_waltChemo.gif'/>"
    },  
    {   "question": "What is Walt's most-used alias?", 
        "option1": "Heisenberg",
        "option2": "Hitchcock", 
        "option3": "Kennedy", 
        "option4": "Escobar",
        "answer": "1",       
        "gif": "<img src='./assets/images/3_heisenberg.gif'/>"
    },  
    {   "question": "Who wrote the poem that got Walt busted by his brother-in-law?", 
        "option1": "Robert Frost", 
        "option2": "Emily Dickinson", 
        "option3": "TS Eliot",
        "option4": "Walt Whitman", 
        "answer": "4",  
        "gif": "<img src='./assets/images/4_waltWhitman.gif'/>"
    },  
    {   "question": "Where is the White family home located?", 
        "option1": "Santa Fe", 
        "option2": "Phoenix", 
        "option3": "Albuquerque", 
        "option4": "Los Cruces",
        "answer": "3",       
        "gif": "<img src='./assets/images/5_whitesHouse.gif'/>"
    },  
    {   "question": "Actor RJ Mitte, who plays Walt Jr, has cerebral palsy in real life",  
        "option1": "False", 
        "option2": "True",
        "answer": "2",       
        "gif": "<img src='./assets/images/6_RJmitte.gif'/>"
    },  
    {   "question": "What nickname does Walt Jr like to be called?", 
        "option1": "Slick", 
        "option2": "Flynn", 
        "option3": "Axle", 
        "option4": "Combo",
        "answer": "2",       
        "gif": "<img src='./assets/images/7_flynn.gif'/>"
    },  
    {   "question": "What company did Walter White co-found with Elliot Schwartz?", 
        "option1": "Beneke Fabricators", 
        "option2": "Brain Matter", 
        "option3": "Badman Pharma",
        "option4": "Grey Matter", 
        "answer": "4",        
        "gif": "<img src='./assets/images/8_greyMatter.gif'/>"
    }, 
    {   "question": "How do Walt and Jesse know each other?", 
        "option1": "Jesse is Walt's nephew", 
        "option2": "Walt is Jesse's boss at the carwash", 
        "option3": "Walt was Jesse's high school chem teacher", 
        "option4": "Jesse was Walt's pizza delivery guy",
        "answer": "3",        
        "gif": "<img src='./assets/images/9_teacher.gif'/>"
    }, 
    {   "question": "What color is Walt's meth?", 
        "option1": "green",  
        "option2": "white",  
        "option3": "blue", 
        "option4": "pink",
        "answer": "3",       
        "gif": "<img src='./assets/images/10_blueIce.gif'/>"
    }, 
    {   "question": "What restaurant franchise does Mr Fring own?", 
        "option1": "Los Pollos Hermanos",  
        "option2": "Popeye's",   
        "option3": "Quiero Campana de Tacos",
        "option4": "El Pollo Loco",
        "answer": "1",       
        "gif": "<img src='./assets/images/11_losPollos.gif'/>"
    }, 
    {   "question": "In the episode Salud, what gift does Mr Fring give Don Eladio?", 
        "option1": "Entrepierna de Fuego",  
        "option2": "Rolex", 
        "option3": "a kiss",
        "option4": "Zafiro Anejo", 
        "answer": "4",       
        "gif": "<img src='./assets/images/12_tequila.gif'/>"
    }, 
    {   "question": "Mike Ehrmantraut develops and unlikely fondness for whom?", 
        "option1": "Walter White",   
        "option2": "Jesse Pinkman",  
        "option3": "Tuco Salamanco", 
        "option4": "Lydia Rodarte-Quayle",
        "answer": "2",       
        "gif": "<img src='./assets/images/13_mikeJesse.gif'/>"
    }, 
    {   "question": "Whose throat does Mr Fring cut in front of Walt, Jesse, and Mike?", 
        "option1": "Victor",  
        "option2": "Gale Boetticher",  
        "option3": "Nacho Varga", 
        "option4": "Hector Salamanca",
        "answer": "1",       
        "gif": "<img src='./assets/images/14_victorDeath.gif'/>"
    },
    {   "question": "Who was not a member of Jesse's crew?", 
        "option1": "Beaver", 
        "option2": "Skinny Pete",  
        "option3": "Tortuga", 
        "option4": "Combo",
        "answer": "3",       
        "gif": "<img src='./assets/images/15_tortuga.gif'/>"
    },
    {   "question": "What is Mr Fring's first name?",  
        "option1": "Gonzo", 
        "option2": "Victor",  
        "option3": "Raymond", 
        "option4": "Gustavo", 
        "answer": "4",       
        "gif": "<img src='./assets/images/16_gus.gif'/>"
    },
    {   "question": "What is the name of Walt's wife?", 
        "option1": "Skyler",  
        "option2": "Holly",   
        "option3": "Flynn", 
        "option4": "Marie",
        "answer": "1",       
        "gif": "<img src='./assets/images/17_skyler.gif'/>"
    },
    {   "question": "Which of the following words is not in Jesse's daily vocabulary?",  
        "option1": "Salud",  
        "option2": "Like", 
        "option3": "Bitch",
        "option4": "Yo",  
        "answer": "1",       
        "gif": "<img src='./assets/images/18_yoBitch.gif'/>"
    },
    {   "question": "Who shot Gale Boetticher?", 
        "option1": "Mr Fring",  
        "option2": "Hank Schrader", 
        "option3": "Jesse Pinkman", 
        "option4": "Walter White", 
        "answer": "3",       
        "gif": "<img src='./assets/images/19_galeDeath.gif'/>"
    },
    {   "question": "Which location was not one of Walt's cook sites?",  
        "option1": "other people's houses", 
        "option2": "the chicken factory farm",  
        "option3": "Jesse's basement", 
        "option4": "an RV",
        "answer": "2",       
        "gif": "<img src='./assets/images/20_chickenFarm.gif'/>" 
    },
];

var gameQandAs = Object.keys(QAobject)

// global variables

    var qCount = 0;
    var ansCount = 0;
    var rightAns = 0;
    var wrongAns = 0;
    var rightCount = 0;
    var wrongCount = 0;
    var missedCount = 0;
    var isCorrect = false;
    var time = 0;
    var interval;

    // global variables
    var gameContent; //for Q&A jumbotron to appear after aboutGame disappears on click
    var currentQuestion = ""; //current question on screen
    var randoSortedAnswers = ""; //to randomly sort answer selection being displayed for the current question on screen
    var rightAnswer = ""; //so the computer knows which answer is the correct one for the current question on screen
    var wrongAnswers = ""; //so the computer knows which answers are incorrect for the current question on screen
    var scoreWins = 0; //store points for player's right answers
    var scoreLosses = 0; //store points for player's wrong answers
    var scoreMissed = 0; //store points for player's missed answers
    var timer; //30-second countdown timer for each question

function gameOn () {
    $('.startBtn').on('click', function () {
        //hides start button on click
        $('.startBtn').hide();
        //other functions below
        timeCount();
        quest1();
        chooseCheckAnswer();  
    });    
}

function timeCount () {
    //sets timer to 30 seconds
    time = 30;
    interval = setInterval(timeRemaining, 1000);
    //new div to btn container with the text 'Time Remaining'
    $('.btnContainer').append('<div class="timeRem">'
                                + 'Time Remaining: ' +
                                '<div class="timerCountDown"></div>' +
                                '</div>');
}
//print time remaining to the Dom and once it =0 timer stops
function timeRemaining() {
    //decrements time by 1
    time--;
    //prints time remaining
    $('.timerCountDown')
    //test
    console.log(time);
    //once time reaches 0...
    if (time === 0) {
        //test
        console.log("time = " + time);
        //stops time at 0
        clearInterval(interval);
        //removes button answers
        $('button').remove();
        //removes question
        $('.questionInput').remove();
        //displays "time's up" if time ran out
        $('.btnContainer').append('<div class="timesUp">Times up!</div>');
        // NEED TO WRITE METHOD FOR SOUND BITE
        dispAns();
    }
}

function dispAns() {
    //first question
    if (qCount === 1 && isCorrect === false) {
        
        wrongCount++;
        var newDiv = $('<div class="rightAns">');
        correctAnswer = newDiv.text('sorry - the correct answer was ' + answers.answers1[0][0]);
        $('.btnContainer').append(correctAnswer);
        //NEED TO WRITE METHODS FOR SOUD BITE AND GIF
        //removes the correct answer after 5 seconds
        //removes the time remaining then calls the time remaining function to start the timer again
        setTimeout(function() {
            $('div').remove('.rightAns');
            $('div').remove('.timeRem');
            $('div').remove('.timesUp');

            timeCount();
            quest2();
            chooseCheckAnswer();
        }, 5000);
    }
    //if answer selected for question #1 was correct
    else if (qCount === 1 && isCorrect === true) {
        //add point to right answer count
        ansCount++;
        //display that it is correct, with soundbite and gif
        var newDiv = $('<div class="rightAns">');
        correctAnswer = newDiv.text('you are correct!! ' + answers.answers1[0][0]);
        $('.btnContainer').append(correctAnswer);
        //NEED TO WRITE METHOD FOR SOUND BITE AND GIF
        //removes the correct answer after 5 seconds
        //removes the time remaining then calls the time remaining function to start the timer again
        setTimeout(function() {

            isCorrect = false;
            $('div').remove('.rightAns');
            $('div').remove('.timeRem');
            $('div').remove('.timesUp');

            timeCount();
            quest2();
            chooseCheckAnswer();
        }, 5000);
    }
    //second question
    else if (qCount === 2 && isCorrect === false) {
        
        wrongCount++;
        var newDiv = $('<div class="rightAns">');
        correctAnswer = newDiv.text('sorry - the correct answer was ' + answers.answers1[0][1]);
        $('.btnContainer').append(correctAnswer);
        //NEED TO WRITE METHOD FOR SOUND BITE AND GIF
        //removes the correct answer after 5 seconds
        //removes the time remaining then calls the time remaining function to start the timer again
        setTimeout(function() {

            isCorrect = false;
            $('div').remove('.rightAns');
            $('div').remove('.timeRem');
            $('div').remove('.timesUp');

            timeCount();
            quest3();
            chooseCheckAnswer();
        }, 5000);
    }    
    
    else if (qCount === 2 && isCorrect === true) {
        
        ansCount++;
        var newDiv = $('<div class="rightAns">');
        correctAnswer = newDiv.text('you are correct! ' + answers.answers1[0][1]);
        $('.btnContainer').append(correctAnswer);
        //NEED TO WRITE METHOD FOR SOUND BITE AND GIF
        //removes the correct answer after 5 seconds
        //removes the time remaining then calls the time remaining function to start the timer again
        setTimeout(function() {

            isCorrect = false;
            $('div').remove('.rightAns');
            $('div').remove('.timeRem');
            $('div').remove('.timesUp');

            timeCount();
            quest3();
            chooseCheckAnswer();
        }, 5000);
    }
    //test
    console.log("question counter = " + qCount);
}

function quest1 () {
    
    qCount++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>' +
                                '<button class="answerVal" value=0>' + answers.answers1[0][1] + '</button>' +
                                '<button class="answerVal" value=0>' + answers.answers1[0][2] + '</button>' +
                                '<button class="answerVal" value=1>' + answers.answers1[0][3] + '</button>');
}

function quest2 () {
    
    qCount++;
    $('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>' +
                                '<button class="answerVal" value=0>' + answers.answers2[0][1] + '</button>' +
                                '<button class="answerVal" value=0>' + answers.answers2[0][2] + '</button>' +
                                '<button class="answerVal" value=1>' + answers.answers2[0][3] + '</button>');
}

function endGame() {
    $('.btnContainer').append('<div class="gameOver">great job. heres how you did</div>' +
                                '<div class="gameOver">Right answers: ' + ansCount + '</div>' +
                                '<div class="gameOver">Wrong answers: ' + wrongCount + '</div>');
    resetGame();
}

function resetGame() {
    $('.btnContainer').append('<button class="reset">reset</button>');
    $('.reset').on('click', function () {
        $('div').remove('.gameOver');
        $('.button').remove('.reset');

        qCount = 0;
        ansCount = 0;
        wrongCount= 0;
        isCorrect = false;

    })
}
