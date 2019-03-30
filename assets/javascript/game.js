// breaking bad trivia game

// audio files object
var audio = {
    audGameIntro: "./assets/audio/breaking-bad-intro.mp3",
    audRightAns: "./assets/audio/youre-god-damn-right.mp3",
    audWrongAns: "./assets/audio/whatever-man.mp3",
    audSkipQuest: "./assets/audio/whatup-biatch.mp3"
}

// question/answers object
var QAobject = [
    {
        question: "What song plays in Saul Goodman’s waiting room?",
        correctAnswer: "America the Beautiful",
        answers: ["America the Beautiful", "This Land is Your Land", "Livin On a Prayer", "MMMbop"],
        gif: "<img src='./assets/images/1_saulGoodman.gif'/>",
    },
    {
        question: "What ailment does Walter White battle?",
        correctAnswer: "lung cancer",
        answers: ["lung cancer", "Huntington's disease", "multiple personality disorder", "meth addiction"],
        gif: "<img src='./assets/images/2_waltChemo.gif'/>",
    },
    {
        question: "What is Walt's most-used alias?",
        correctAnswer: "Heisenberg",
        answers: ["Heisenberg", "Hitchcock", "Kennedy", "Escobar"],
        gif: "<img src='./assets/images/3_heisenberg.gif'/>",
    },
    // "questD": {
    //     question: "Who wrote the poem that got Walt busted by his brother-in-law?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Walt Whitman", "Robert Frost", "Emily Dickinson", "TS Eliot"],
    //     gif: "<img src='./assets/images/4_waltWhitman.gif'/>",   
    // },
    // "questE": {
    //     question: "Where is the White family home located?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Albuquerque", "Santa Fe", "Phoenix", "Los Cruces"],
    //     gif: "<img src='./assets/images/5_whitesHouse.gif'/>",   
    // },
    // "questF": {
    //     question: "Actor RJ Mitte, who plays Walt Jr, has cerebral palsy in real life",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["True", "False"],
    //     gif: "<img src='./assets/images/6_RJmitte.gif'/>",   
    // },
    // "questG": {
    //     question: "What nickname does Walt Jr like to be called?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Flynn", "Slick", "Axle", "Combo"],
    //     gif: "<img src='./assets/images/7_flynn.gif'/>",   
    // },
    // "questH": {
    //     question: "What company did Walter White co-found with Elliot Schwartz?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Grey Matter", "Beneke Fabricators", "Brain Matter", "Badman Pharma"],
    //     gif: "<img src='./assets/images/8_greyMatter.gif'/>",   
    // },
    // "questI": {
    //     question: "How do Walt and Jesse know each other?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Walt was Jesse's high school chem teacher", "Jesse is Walt's nephew", "Walt is Jesse's boss at the carwash", "Jesse was Walt's pizza delivery guy"],
    //     gif: "<img src='./assets/images/9_teacher.gif'/>",   
    // },
    // "questJ": {
    //     question: "What color is Walt's meth?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["blue", "green", "white", "pink"],
    //     gif: "<img src='./assets/images/10_blueIce.gif'/>",   
    // },
    // "questK": {
    //     question: "What restaurant franchise does Mr Fring own?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Los Pollos Hermanos", "Popeye's", "El Pollo Loco", "Quiero Campana de Tacos"],
    //     gif: "<img src='./assets/images/11_losPollos.gif'/>",   
    // },
    // "questL": {
    //     question: "In the episode Salud, what gift does Mr Fring give Don Eladio?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Zafiro Anejo", "Entrepierna de Fuego", "Rolex", "a kiss"],
    //     gif: "<img src='./assets/images/12_tequila.gif'/>",   
    // },
    // "questM": {
    //     "q": "Mike Ehrmantraut develops and unlikely fondness for whom?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Jesse Pinkman", "Walter White", "Tuco Salamanco", "Lydia Rodarte-Quayle"],
    //     gif: "<img src='./assets/images/13_mikeJesse.gif'/>",   
    // },
    // "questN": {
    //     question: "Whose throat does Mr Fring cut in front of Walt, Jesse, and Mike?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Victor", "Nacho Varga", "Gale Boetticher", "Hector Salamanca"],
    //     gif: "<img src='./assets/images/14_victorDeath.gif'/>",   
    // },
    // "questO": {
    //     question: "Who was not a member of Jesse's crew?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Tortuga", "Beaver", "Skinny Pete", "Combo"],
    //     gif: "<img src='./assets/images/15_tortuga.gif'/>",   
    // },
    // "questP": {
    //     question: "What is Mr Fring's first name?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Gustavo", "Victor", "Raymond", "Gonzo"],
    //     gif: "<img src='./assets/images/16_gus.gif'/>",   
    // },
    // "questQ": {
    //     question: "What is the name of Walt's wife?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Skyler", "Holly", "Flynn", "Marie"],
    //     gif: "<img src='./assets/images/17_skyler.gif'/>",   
    // },
    // "questR": {
    //     question: "Which of the following words is not in Jesse's daily vocabulary?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["Salud", "Yo", "Bitch", "Like"],
    //     gif: "<img src='./assets/images/18_yoBitch.gif'/>",   
    // },
    // "questS": {
    //     question: "Who shot Gale Boetticher?",   
    //     correctAnswer: "ansAll[0]", 
    //     answers: ["Jesse Pinkman", "Walter White", "Mr Fring", "Hank Schrader"],
    //     gif: "<img src='./assets/images/19_galeDeath.gif'/>",   
    // },
    // "questT": {
    //     question: "Which location was not one of Walt's cook sites?",   
    //     correctAnswer: "ansAll[0]",
    //     answers: ["the chicken factory farm", "other people's houses", "Jesse's basement", "an RV"],
    //     gif: "<img src='./assets/images/20_chickenFarm.gif'/>",   
    // },
];

// global variables
    var gameContent; //for Q&A jumbotron to appear after aboutGame disappears on click
    var currentQuestion = ""; //current question on screen
    var randoSortedAnswers = ""; //to randomly sort answer selection being displayed for the current question on screen
    var rightAnswer = ""; //so the computer knows which answer is the correct one for the current question on screen
    var wrongAnswers = ""; //so the computer knows which answers are incorrect for the current question on screen
    var scoreWins = 0; //store points for player's right answers
    var scoreLosses = 0; //store points for player's wrong answers
    var scoreMissed = 0; //store points for player's missed answers   
    var timer = 30; //30-second countdown timer for each question

    //     var container = document.getElementById("quizContainer"); //don't think i need this
    // var container = document.getElementById("gameContainer");
    // var questionEl = document.getElementById("question");
    //     var opt1 = document.getElementById("opt1"); //don't think i need this
    // var answers = document.getElementById("answers");
    // var QAobject = QAobject.length;
    // var nextButton = document.getElementById("nextButton")
    // var resultCont = document.getElementById("result")

    var qCounter = 0;    //for which question is being displayed currently
    var jumbotron = $("#gameContainer");
    var timerStart = 30;


// start function
function start() {
    //initial load settings
    timerStart = 30;
    scoreWins = 0;
    scoreLosses = 0;
    scoreMissed = 0;

    currentQuestion = "",
    timer = timerStart,
    // timer();

    // intro audio
    console.log("audio", audio.audGameIntro);
    var sound = new Audio("./assets/audio/breaking-bad-intro.mp3");
    sound.play();

    // hide aboutGame div after on click
    $(".aboutGame").hide()

    // call function loadQuestion
    loadQuestion();
};

//decrease timer and display it on screen in the timer div

function decrement() {
    timer--;
    $("#domTimer").html(timer);
    // if the timer reaches 0, call noTime()
    if (timer === 0) {
    // noTime();
    console.log("out of time")
    }
}


//load first question and next question function
function loadQuestion() {
    intervalId = setInterval(decrement, 1000);
    $('.domQuestion').text(QAobject[qCounter].question);
    $('.domAnswer1').text(QAobject[qCounter].answers[0]);
    $('.domAnswer2').text(QAobject[qCounter].answers[1]);
    $('.domAnswer3').text(QAobject[qCounter].answers[2]);
    $('.domAnswer4').text(QAobject[qCounter].answers[3]);
};


    // matches player's selection w correct answer function, gifs   
    // what happens when they have an incorrect answer?

// if the player's answer is correct
function playerCorrect() {
    //hide QAcontent to make room for showing gif and feedback
    $(".QAcontent").hide();
    $(".answerFeedback").show();
    clearInterval(intervalId);
    //update scoreboard
    scoreWins++
    $("#wins").text(scoreWins);
    
    //notify player of correct answer
    $(".answerFeedback").append("<h3>Nice job, biatch!</h3>")
    //add gif
    $(".answerFeedback").append(QAobject[qCounter].gif)
    //add sound bite
    var sound = new Audio("./assets/audio/youre-god-damn-right.mp3");
    sound.play();    

    if (qCounter < QAobject.length) {
        //delay set timeout
        setTimeout(function () {
            $(".answerFeedback").empty();
            $(".answerFeedback").hide();
            $(".QAcontent").show();            
            qCounter++
            loadQuestion();
        } , 3000) 
    }
    else {
        end ();
    }
};




    // next question button in case they don't want to wait for timer
    // next question, resets timer for next question
    // push questions/answers

    // increment qCounter and load next question????
    // check to see if there are any more questions left, else...           
    // if qcounter is < qaobject.length
    // end game function
    // hide qa content div
    // display summary


    // scoreboard function 


    function end() {
        // reset 
        console.log("game")   
    }




    // click event listeners
    $("#startBtn").on('click', function () {
        console.log("clicked");
        start();
        $(".QAcontent").show();
    });

    $(document).on('click', ".answer", function () {
        
        var playerSelection = $(this).text();
        console.log("player selection", playerSelection);
        if (playerSelection === QAobject[qCounter].correctAnswer) {
            console.log("correct answer");
            playerCorrect();

        } else {
            console.log("wrong answer")
        }
    });

    $(".QAcontent").hide();
