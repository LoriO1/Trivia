// breaking bad trivia game

// audio files object
var audio = {
    audGameIntro: "assets/audio/breaking-bad-intro.mp3",
    audRightAns: "assets/audio/youre-god-damn-right.mp3",
    audWrongAns: "assets/audio/whatever-man.mp3",
    audSkipQuest: "assets/audio/whatup-biatch.mp3"
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
    var timer; //30-second countdown timer for each question


    var game = {
        
    }



    // game start not triggered until start button is clicked.



start()

    // when website is loaded, the aboutGame jumbotron is visible until the start button is clicked. then the aboutGame jumbotron is replaced with the mainGame jumbotron.
    document.getElementById("submitBtn").addEventListener ("click", function (event) {
        event.preventDefault();    
        
        document.getElementByClass("jumbotron").append("mainGame")     
        document.getElementById("aboutGame").style.display = "none";   

    });

// game start triggered by on click of start button. 
    function start() {
        
    }







$(document).ready(function() {
    // Create a function that creates the start button and initial screen
    
    function gameRules() {
        gameContent = "<h1 class='display-4'>About the Game</h1><p class='lead'><hr class='my-4'/><a class='btn btn-primary btn-lg' href='#' role='button'>Start</a></p>";
        $(".gameOn").append(gameContent);
    }
    
    gameRules();
    
    //on-click event for start button to begin name
    
    $(".gameOn").on("click", ".start-button", function(event){
        event.preventDefault();  // added line to test issue on GitHub Viewer
        clickSound.play();
        $('.jumbotron').hide();
            
        generateQuestions();
    
        timerWrapper();
    
    }); // Closes start-button click
    
    $("body").on("click", ".answer", function(event){
        
        clickSound.play();
        selectedAnswer = $(this).text();
        //ternary operator, if/else replacement
        selectedAnswer === correctAnswers[questionCounter] ? (
            //alert("correct");
            clearInterval(theClock),
            generateWin()) :
            //else
            (//alert("wrong answer!");
            clearInterval(theClock),
            generateLoss()
        )
    }); // Close .answer click
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        resetGame();
    }); // Closes reset-button click
    
    });  //  Closes jQuery wrapper
    
    function timeoutLoss() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='/assets/images/x.gif'>";
        $(".gameOn").html(gameHTML);
        setTimeout(wait, 3000);  //  change to 4000 or other amount
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".gameOn").html(gameHTML);
        
        setTimeout(wait, 3000);  //end generatewin
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='/assets/images/x.gif'>";
        $(".gameOn").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    //end generate loss

    function generateQuestions() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".gameOn").html(gameHTML);
    }; //end generate question
    
    function wait() {
        //ternary operator replacing if/else for generate more questions
    questionCounter < 7 ? 
        (questionCounter++,
        generateQuestions(),
        counter = 30,
        timerWrapper() ):
        
       (finalScreen())
    }; //end function
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                timeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-md btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".gameOn").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateQuestions();
        timerWrapper();
    }
    
    
    var gameHTML;
    var counter = 30;
    var questionArray = 
    [ "This beer used croaking frogs in their advertisement. What beer is it?", 
    "This beer, though often thought to be German, is actually Dutch. What beer is it?", 
    "What beer has the slogan 'It can't get any better than this.'?", 
    "What beer uses the 'communist star' on their label?", 
    "What beer incorporated their often won award as the central graphic of their label?", 
    "'Probably the best beer in the world,' or so the slogan says. Who is it?", 
    "During the Middle Ages, which country did most of the Trappist beer come from?", 
    "What American brew is known as 'The Champagne of Bottled Beers'?" ];

    var answerArray = [
        ["Busch", "PBR", "Budweiser", "Corona"], 
        ["Stella Artois","Corona","Heineken","Dos Equis"], 
        ["Budweiser", "Old Milwaukee", "Corona", "Pabst Blue Ribbon"], 
        ["Budweiser", "Heineken", "Corona", "Bud Light"], 
        ["Corona", "Pabst Blue Ribbon", "Budweiser", "Busch"], 
        ["Budweiser","Corona","Carlsburg","Busch"], 
        ["Spain", "Amsterdam", "Belgium", "Germany"], 
        ["Miller High Life","Bud Light","Budweiser","Busch"], ];

    var imageArray = new Array(); 
    imageArray[0] = "<img class='center-block' src='/assets/images/budweiser.jpg'>";
    imageArray[1] = "<img class='center-block' src='/assets/images/heineken.jpeg'>"; 
    imageArray[2] = "<img class='center-block' src='/assets/images/milwaukee.jpg'>"; 
    imageArray[3] = "<img class='center-block' src='/assets/images/heineken.jpeg'>";  
    imageArray[4] = "<img class='center-block' src='/assets/images/pbr.gif'>"; 
    imageArray[5] = "<img class='center-block' src='/assets/images/carlsburg.jpg'>"; 
    imageArray[6] = "<img class='center-block' src='/assets/images/trappist.jpeg'>"; 
    imageArray[7] = "<img class='center-block' src='/assets/images/miller.jpg'>"; 

    var correctAnswers = 
    [ "C. Budweiser", 
    "C. Heineken", 
    "B. Old Milwaukee", 
    "B. Heineken", 
    "B. Pabst Blue Ribbon", 
    "C. Carlsburg", 
    "C. Belgium", 
    "A. Miller High Life"];

    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("assets/sounds/click-sound.mp3");

    // breaking bad intro sound "assets/audio/breaking-bad-intro.mp3"
    // right answers "assets/audio/youre-god-damn-right.mp3"
    // wrong answers "assets/audio/whatever-man.mp3"
    // skipped questions "assets/audio/whatup-biatch.mp3"