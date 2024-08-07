const questions = [
    {
        question: "A crise de identidade é mais frequente durante o:",
        optionA: "Estágio 2",
        optionB: "Estágio 4",
        optionC: "Estágio 5",
        optionD: "Estágio 8",
        correctOption: "optionC"
    },
    
    {
        question: "Em qual período termina o estágio psicossocial de confiança vs desconfiança?",
        optionA: "10 meses - 3 anos",
        optionB: "0 - 18 meses",
        optionC: "2 - 4 anos",
        optionD: "0 - 6 meses",
        correctOption: "optionB"
    },

    {
        question: "Qual é a teoria desenvolvida por Erik Erikson?",
        optionA: "Teoria da Inteligência Emocional",
        optionB: "Teoria do Desenvolvimento Psicossocial",
        optionC: "Teoria da Personalidade",
        optionD: "Teoria do Aprendizado Social",
        correctOption: "optionB"
    },

    {
        question: "De acordo com a Teoria do Desenvolvimento Psicossocial, qual é o desafio principal durante a fase da adolescência?",
        optionA: "Desenvolver habilidades sociais",
        optionB: "Alcançar a estabilidade social",
        optionC: "Estabelecer uma identidade pessoal",
        optionD: "Estabilidade emocional",
        correctOption: "optionC"
    },

    {
        question: "Qual a abordagem de Erik Erikson?",
        optionA: "TCC",
        optionB: "Psicanálise",
        optionC: "Behaviorismo",
        optionD: "Gestalt",
        correctOption: "optionB"
    },

    {
        question: `Conforme a cena do filme "As Vantagens de Ser Invisível" mostrada anteriormente, em qual fase os personagens se encontram (considerando que tem 16 anos)?`,
        optionA: "Iniciativa vs culpa",
        optionB: "Diligência vs inferioridade",
        optionC: "Identidade vs confusão de identidade",
        optionD: "Intimidade vs isolamento",
        correctOption: "optionC" 
    },

    {
        question: "De acordo com Erikson, a moratória psicossocial se vê cercada de:",
        optionA: "Confusão de papéis",
        optionB: "Polarização sexual ",
        optionC: "Produção e cuidados",
        optionD: "Infidelidade",
        correctOption: "optionA"
    },

    {
        question: "Segundo Erik Erikson, o que é moratória social?",
        optionA: "Estágio adulto de evolução na carreira",
        optionB: "Fase da infância focada no desenvolvimento acadêmico",
        optionC: "Período adolescente de exploração de identidades",
        optionD: "Estágio adolescente de adoção de papel social fixo",
        correctOption: "optionC"
    },

    {
        question: "Qual fator pode levar à confusão de papéis durante a adolescência?",
        optionA: "Falta de iniciativa",
        optionB: "Exploração insuficiente de identidades",
        optionC: "Ausência de intimidade",
        optionD: "Falta de competência",
        correctOption: "optionB"
    },

    {
        question: "Qual das abaixo é uma característica de uma identidade bem formada na adolescência?",
        optionA: "Isolamento social",
        optionB: "Confusão de papéis",
        optionC: "Forte senso de quem é",
        optionD: "Dependência excessiva dos pais",
        correctOption: "optionC"
    },

    {
        question: `A resolução bem-sucedida do estágio de "Identidade vs. Confusão de Papéis" resulta em que virtude?`,
        optionA: "Sabedoria",
        optionB: "Competência",
        optionC: "Fidelidade",
        optionD: "Esperança",
        correctOption: "optionC"
    },

    {
        question: "O sexto estágio do desenvolvimento psicossocial de Erikson é:",
        optionA: "Intimidade vs isolamento",
        optionB: "Generatividade vs estagnação",
        optionC: "Iniciativa vs culpa",
        optionD: "Confiança vs desconfiança",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
	}

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#8BC34A"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#F44336"
            document.getElementById(correctOption).style.backgroundColor = "#8BC34A"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Poxa, continue praticando!"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Você consegue fazer melhor do que isso!"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excelente, continue assim!"
        remarkColor = "green"
    }
    const playerGrade = ((playerScore / 10) * 100)

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}