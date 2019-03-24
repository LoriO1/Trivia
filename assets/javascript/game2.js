// breaking bad trivia game

// question/answers objects 

    var questions = {
        q1: ["What song plays in Saul Goodman’s waiting room?"],
        q2: ["What ailment does Walter White battle?"],
        q3: ["What is Walt's most-used alias?"],
        q4: ["Who wrote the poem that got Walt busted by his brother-in-law?"],
        q5: ["Where is the White family home located?"],
        q6: ["Actor RJ Mitte, who plays Walt Jr, has cerebral palsy in real life"],
        q7: ["What nickname does Walt Jr like to be called?"],
        q8: ["What company did Walter White co-found with Elliot Schwartz?"],
        q9: ["How do Walt and Jesse know each other?"],
        q10: ["What color is Walt's meth?"],
        q11: ["What restaurant franchise does Mr Fring own?"],
        q12: ["In the episode Salud, what gift does Mr Fring give Don Eladio?"],
        q13: ["Mike Ehrmantraut develops and unlikely fondness for whom?"],
        q14: ["Whose throat does Mr Fring cut in front of Walt, Jesse, and Mike?"],
        q15: ["Who was not a member of Jesse's crew?"],
        q16: ["What is Mr Fring's first name?"],
        q17: ["What is the name of Walt's wife?"],
        q18: ["Which of the following words is not in Jesse's daily vocabulary?"],
        q19: ["Who shot Gale Boetticher?"],
        q20: ["Which location was not one of Walt's cook sites?"],
    }

    var answers = {
        answers1: [{a: "America the Beautiful", //correct answer
                    b: "This Land is Your Land", 
                    c: "Livin On a Prayer", 
                    d: "MMMbop"
        }],
        answers2: [{a: "Huntington's disease", 
                    b: "lung cancer", //correct answer
                    c: "multiple personality disorder", 
                    d: "meth addiction"
        }],
        answers3: [{a: "Heisenberg", //correct answer
                    b: "Hitchcock", 
                    c: "Kennedy", 
                    d: "Escobar"
        }],
        answers4: [{a: "Robert Frost", 
                    b: "Emily Dickinson", 
                    c: "TS Eliot",
                    d: "Walt Whitman" //correct answer
        }],
        answers5: [{a: "Santa Fe", 
                    b: "Albuquerque", //correct answer
                    c: "Phoenix", 
                    d: "Los Cruces"
        }],
        answers6: [{a: "False",
                    b: "True" //correct answer
        }],
        answers7: [{a: "Slick", 
                    b: "Axle", 
                    c: "Flynn", //correct answer
                    d: "Combo"
        }],
        answers8: [{a: "Beneke Fabricators",  
                    b: "Brain Matter", 
                    c: "Badman Pharma",
                    d: "Grey Matter" //correct answer
        }],
        answers9: [{a: "Walt was Jesse's high school chem teacher", //correct answer
                    b: "Jesse is Walt's nephew", 
                    c: "Walt is Jesse's boss at the carwash", 
                    d: "Jesse was Walt's pizza delivery guy"
        }],
        answers10: [{a:"blue", //correct answer
                    b: "green", 
                    c: "white", 
                    d: "pink"
        }],
        answers1: [{a: "Popeye's",  
                    b: "El Pollo Loco",
                    c: "Quiero Campana de Tacos",
                    d: "Los Pollos Hermanos"//correct answer
        }],
        answers1: [{a: "Entrepierna de Fuego", 
                    b: "Rolex", 
                    c: "Zafiro Anejo", //correct answer
                    d: "a kiss"
        }],
        answers1: [{a: "Jesse Pinkman", //correct answer
                    b: "Walter White", 
                    c: "Tuco Salamanco", 
                    d: "Lydia Rodarte-Quayle"
        }],
        answers1: [{a: "Nacho Varga",  
                    b: "Gale Boetticher", 
                    c: "Hector Salamanca",
                    d: "Victor" //correct answer
        }],
        answers1: [{a: "Beaver", 
                    b: "Skinny Pete",  
                    c: "Combo",
                    d: "Tortuga" //correct answer
        }],
        answers1: [{a: "Victor", 
                    b: "Gustavo", //correct answer
                    c: "Raymond", 
                    d: "Gonzo"
        }],
        answers1: [{a: "Holly", 
                    b: "Flynn", 
                    c: "Marie",
                    d: "Skyler" //correct answer 
        }],
        answers1: [{a: "Salud", //correct answer
                    b: "Yo", 
                    c: "Bitch", 
                    d: "Like"
        }],
        answers1: [{a: "Walter White", 
                    b: "Mr Fring", 
                    c: "Jesse Pinkman", //correct answer
                    d: "Hank Schrader"
        }],
        answers1: [{a: "the chicken factory farm", //correct answer
                    b: "other people's houses", 
                    c: "Jesse's basement", 
                    d: "an RV"
        }],
    }

    var gifs = {
        g1: ["<img src='./assets/images/1_saulGoodman.gif'/>"],
        g2: ["<img src='./assets/images/2_waltChemo.gif'/>"],
        g3: ["<img src='./assets/images/3_heisenberg.gif'/>"],
        g4: ["<img src='./assets/images/4_waltWhitman.gif'/>"],
        g5: ["<img src='./assets/images/5_whitesHouse.gif'/>"],
        g6: ["<img src='./assets/images/6_RJmitte.gif'/>"],
        g7: ["<img src='./assets/images/7_flynn.gif'/>"],
        g8: ["<img src='./assets/images/8_greyMatter.gif'/>"],
        g9: ["<img src='./assets/images/9_teacher.gif'/>"],
        g10: ["<img src='./assets/images/10_blueIce.gif'/>"],
        g11: ["<img src='./assets/images/11_losPollos.gif'/>"],
        g12: ["<img src='./assets/images/12_tequila.gif'/>"],
        g13: ["<img src='./assets/images/13_mikeJesse.gif'/>"],
        g14: ["<img src='./assets/images/14_victorDeath.gif'/>"],
        g15: ["<img src='./assets/images/15_tortuga.gif'/>"],
        g16: ["<img src='./assets/images/16_gus.gif'/>"],
        g17: ["<img src='./assets/images/17_skyler.gif'/>"],
        g18: ["<img src='./assets/images/18_yoBitch.gif'/>"],
        g19: ["<img src='./assets/images/19_galeDeath.gif'/>"],
        g20: ["<img src='./assets/images/20_chickenFarm.gif'/>"],

    }

    var audio = {
        audGameIntro: ["assets/audio/breaking-bad-intro.mp3"],
        audRightAns: ["assets/audio/youre-god-damn-right.mp3"],
        audWrongAns: ["assets/audio/whatever-man.mp3"],
        audSkipQuest: ["assets/audio/whatup-biatch.mp3"]
    }

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
