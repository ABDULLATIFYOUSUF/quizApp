function forQuiz(){
    var form = document.querySelector(".form")
    var inputFields = document.querySelectorAll("input")
    for (var input of inputFields){
        if (!input.value){
            alert("Emter required fields")
            return
        }
    }
    form.style.display = "none"
    btn1.style.display = "flex"

}

function quizStart(){
        // btn1.style.display = "none"
}