var quesArray = [
    {
        question: "HTML stand for",
        option: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },

    {
        question: "Which type of JavaScript Languages is",
        option: {
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },

    {
        question: "Which CSS property allows you to set multiple list properties at once?",
        option: {
            a: "List-Style-Type",
            b: "List-Style",
            c: "List-Style-Position",
            d: "List-Style-Image",

        },
        answer: "List-Style"
    },

    {
        question: "Which CSS property determines how much the text should be emblazoned?",
        option: {
            a: "Font-Weight",
            b: "Font-Size",
            c: "Font-Family",
            d: "Font-Style",

        },
        answer: "Font-Weight"
    },

    {
        question: "How Can you write into HTML output using Java Script?",
        option: {
            a: "Using InnerHTML",
            b: "Using Console.log()",
            c: "Using document.write()",
            d: "Using window.alert()",

        },
        answer: "Using document.write()"
    },

    {
        question: "Which of the following is INCORRECT about XML?",
        option: {
            a: "XML is designed to carry data",
            b: "XML uses predefined tags",
            c: "XML stores data in plain text format",
            d: "XML is extensible",

        },
        answer: "XML uses predefined tags"
    },

    {
        question: "The 'function' and  'var' are known as:",
        option: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    },

    {
        question: "The correct sequence of HTML tags for starting a webpage is",
        option: {
            a: "Head, Title, HTML, body",
            b: "HTML, Body, Title, Head",
            c: "HTML, Head, Title, Body",
            d: "HTML, Title , Head,  Body",

        },
        answer: "HTML, Head, Title, Body"
    },

    {
        question: "Elements between and tags of HTML tables are ___________ by default.",
        option: {
            a: "justified",
            b: "left aligned",
            c: "center aligned",
            d: "right aligned",

        },
        answer: "left aligned"
    },

    {
        question: "The stylesheet file will not be loaded by the browser if you omit__________",
        option: {
            a: "REL",
            b: "STYLE",
            c: "BODY",
            d: "HTML",

        },
        answer: "REL"
    },

]



var btn1 = document.querySelector(".btn1")
var questions = document.querySelector(".questions")
var result = document.querySelector(".result")
var question = document.getElementById("question")
var quizOptions = document.getElementById("quizOptions").children
var nextBtn = document.getElementById("nextQues")

var totalQuesElement = document.getElementById("totalQuesElement")
var correctAnsElement = document.getElementById("correctAnsElement")
var wrongAnsElement = document.getElementById("wrongAnsElement")
var totalScoreElement = document.getElementById("totalScoreElement")
var percent = document.getElementById("percent")

var counter = 0
var correctAnsCounter = 0
var wrongAnsCounter = 0
var totalScore = 0



for (var li of quizOptions) {
    li.setAttribute("onclick", "selectOption(this)")
}
function forQuiz() {
    var form = document.querySelector(".form")
    var inputFields = document.querySelectorAll("input")

    for (var input of inputFields) {
        if (!input.value) {
            alert("Enter required fields")
            return
        }
    }
    form.style.display = "none"
    btn1.style.display = "flex"

}

function quizStart() {
    btn1.style.display = "none"
    questions.style.display = "block"
    nextBtn.style.display = "none"
    question.innerHTML = quesArray[counter].question
    quizOptions[0].innerHTML = quesArray[counter].option.a
    quizOptions[1].innerHTML = quesArray[counter].option.b
    quizOptions[2].innerHTML = quesArray[counter].option.c
    quizOptions[3].innerHTML = quesArray[counter].option.d

}

function nextQues() {
    if (counter < quesArray.length - 1) {
        counter++
        question.innerHTML = quesArray[counter].question
        quizOptions[0].innerHTML = quesArray[counter].option.a
        quizOptions[1].innerHTML = quesArray[counter].option.b
        quizOptions[2].innerHTML = quesArray[counter].option.c
        quizOptions[3].innerHTML = quesArray[counter].option.d
    } else {
        questions.style.display = "none"
        result.style.display = "block"

        percent.innerHTML = (totalScore * 100) / (quesArray.length * 5) + "%"
        totalQuesElement.innerHTML = quesArray.length
        correctAnsElement.innerHTML = correctAnsCounter
        wrongAnsElement.innerHTML = wrongAnsCounter
        totalScoreElement.innerHTML = totalScore
    }
    for (var li of quizOptions) {
        li.classList.remove("disableLi")
        li.classList.remove("wrongAns")
        li.classList.remove("correctAns")
    }
    nextBtn.style.display = "none"
}


function selectOption(element) {
    if (element.innerHTML === quesArray[counter].answer) {
        correctAnsCounter++
        totalScore += 5
        element.className = "correctAns"
    } else {
        wrongAnsCounter++
        element.className = "wrongAns"

        for (var li of quizOptions) {
            if (li.innerHTML === quesArray[counter].answer)
                li.classList.add("correctAns")
            break
        }
    }

    for (var li of quizOptions) {
        li.classList.add("disableLi")
    }
    nextBtn.style.display = "block"
}
