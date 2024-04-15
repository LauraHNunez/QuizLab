const questions = [
    {
        question: "¿Si Ona Batlle no fuese futbolista a que deporte se dedicaria?",
        options: ["Atletismo", "Natación", "Futbol Sala", "Bailarina"],
        answer: "Atletismo"
    },
    {
        question: "¿Cuál es la jugadora con más goles en la historia del Barça femenino?",
        options: ["Jenni Hermoso", "Lieke Martens", "Alexia Putellas", "Caroline Graham Hansen"],
        answer: "Alexia Putellas"
    },
    {
        question: "¿Quién fue la 1ª capitana del barça el año que ganaron la Champions de Gotemburgo?",
        options: ["Vicky Losada", "Alexia Putellas", "Laura Ràfols", "Marta Torrejón"],
        answer: "Vicky Losada"
    },
    {
        question: "¿Que dorsal lleva Aitana Bonmatí?",
        options: ["6", "8", "11", "14"],
        answer: "14"
    },
    {
        question: "¿Donde nació Ona Batlle?",
        options: ["Barcelona", "Martorell", "Terrassa", "Vilassar de Mar"],
        answer: "Vilassar de Mar"
    },
    {
        question: "¿Que marca de coches patrocina al Barça?",
        options: ["Audi", "Mercedes Benz", "Cupra", "Porsche"],
        answer: "Cupra"
    },
    {
        question: "¿Donde se jugarà la final de la champions femenina de 2025?",
        options: ["Londres", "Lisboa", "París", "Malmö"],
        answer: "Lisboa"
    },
    {
        question: "¿En que equipo juega el hermano de Jana Fernández?",
        options: ["Terrassa", "Sabadell", "Europa", "Mercantil"],
        answer: "Sabadell"
    },
    {
        question: "¿Contra qué equipo logro el Barça el máximo récord de asistencia?",
        options: ["Real Madrid", "Olympique Lyon", "PSH", "Wolfsburg"],
        answer: "Wolfsburg"
    },
    {
        question: "¿Donde nació Esmee Brugts?",
        options: ["Ámsterdam", "Heinenoord", "Valkenswaard", "Hoogeveen"],
        answer: "Heinenoord"
    },
    {
        question: "¿Quién és el director deportivo del barça femenino?",
        options: ["Markel Zubizarreta", "Xavi Puig", "Deco", "Joan Laporta"],
        answer: "Xavi Puig"
    },
    {
        question: "¿Contra qué equipo el Barça perdió en Turín?",
        options: ["Real Madrid", "Olympique Lyon", "PSG", "Wolfsburg"],
        answer: "Olympique Lyon"
    },
    {
        question: "¿Que otro deporte hizo Sandra Paños antes de jugar a Fútbol?",
        options: ["Pádel", "Taekwondo", "Karate", "Judo"],
        answer: "Karate"
    },
    {
        question: "¿Cuando és el Cummpleaños de Ingrid Engen?",
        options: ["29 Abril", "19 Abril", "19 Marzo", "30 Abril"],
        answer: "29 Abril"
    },
    {
        question: "¿Que 2 jugadoras de la plantilla actual cumplen años el mismo día?",
        options: ["Alexia y Aitana", "Marta y Esmee", "Patri y Pina", "Jana y Hansen"],
        answer: "Jana y Hansen"
    },
    {
        question: "¿A que edad Debutó Vicky Lopez en la Champions?",
        options: ["15 años y 148 días", "16 años y 148 días", "16 años y 138 días", "16 años y 248 días"],
        answer: "16 años y 148 días"
    },
    {
        question: "¿Quien és la referente de Julia Bartel?",
        options: ["Aitana Bonmatí", "Alexia Putellas", "Vicky Losada", "Patri Guijarro"],
        answer: "Aitana Bonmatí"
    },
    {
        question: "¿Donde nació Fridolina Rolfö?",
        options: ["Uppsala", "Gotemburgo", "Kungsbacka", "Malmö"],
        answer: "Kungsbacka"
    },
    {
        question: "¿Contra que equipo ganó el Barça la 1ª Champions?",
        options: ["Olympique Lyon", "Arsenal", "Wolfsburg", "Chelsea"],
        answer: "Chelsea"
    },
    {
        question: "¿En que año se fundó el Barça femenino dentro del organigrama del club?",
        options: ["2010", "2005", "2002", "1988"],
        answer: "2002"
    },
    {
        question: "¿En que año se reincoporó Alexia después de jugar en el Levante?",
        options: ["2010", "2015", "2012", "2014"],
        answer: "2012"
    },
    {
        question: "¿Cuantas temporadas estuvo Melanie Serrano en el Barça?",
        options: ["16", "15", "19", "18"],
        answer: "19"
    },
    {
        question: "¿Salma Paralluelo y Maria Pilar León nacieron en la misma ciudad?",
        options: ["Verdadero", "Falso"],
        answer: "Verdadero"
    },
    {
        question: "¿Quien marcó el gol que eliminó al Barça en las semifinales de la Champions 2019-2020?",
        options: ["Ingrid Engen", "Pernille Harder", "Fridolina Rolfö", "Alexandra Popp"],
        answer: "Fridolina Rolfö"
    }
];

// Función para reorganizar el orden de las preguntas de manera aleatoria y limitar el número de preguntas
function shuffleQuestions(array, maxQuestions) {
    const shuffledArray = array.sort(() => Math.random() - 0.5).slice(0, maxQuestions);
    return shuffledArray;
}

// Definimos el máximo número de preguntas a mostrar
const maxQuestionsToShow = 20;

// Reorganizamos el orden de las preguntas y limitamos el número de preguntas a mostrar
const shuffledQuestions = shuffleQuestions(questions, maxQuestionsToShow);

// Variables para llevar el control del progreso y resultados
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

// Función para mostrar la pregunta actual en pantalla
function displayQuestion(questionIndex) {
    const currentQuestion = shuffledQuestions[questionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionDiv = document.createElement('div'); // Cambiamos de <button> a <div>
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(option, currentQuestion.answer);
        optionsContainer.appendChild(optionDiv);
    });

    // Establecer un temporizador para pasar a la siguiente pregunta después de 30 segundos
    setTimeout(() => {
        nextQuestion();
    }, 30000); // 30 segundos en milisegundos
}

// Función para verificar la respuesta seleccionada por el usuario
function checkAnswer(selectedOption, correctAnswer) {
    const optionsContainer = document.getElementById('options');
    const buttons = optionsContainer.getElementsByTagName('button');

    // Disable all buttons to prevent further selection
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    // Highlight the selected option and display if it is correct or not
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === selectedOption) {
            if (selectedOption === correctAnswer) {
                buttons[i].style.backgroundColor = '#7FFF7F'; // Green for correct answer
                document.getElementById('result-message').textContent = '¡Respuesta correcta!';
                correctCount++;
            } else {
                buttons[i].style.backgroundColor = '#FF7F7F'; // Red for incorrect answer
                document.getElementById('result-message').textContent = 'Respuesta incorrecta';
                incorrectCount++;
            }
        }
    }

    // Wait for a short duration before moving to the next question
    setTimeout(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = ''; // Reset button color
        }
        nextQuestion();
    }, 500); // Adjust the duration as needed
}

// Función para pasar a la siguiente pregunta
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        showResults(); // Llamamos a showResults() cuando se hayan respondido todas las preguntas
    }
}

// Función para mostrar los resultados al finalizar todas las preguntas
function showResults() {
    const totalQuestions = shuffledQuestions.length;
    const percentageCorrect = (correctCount / totalQuestions) * 100;
    document.getElementById('juego').style.display = 'none';
    document.getElementById('resultados').style.display = 'block';
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Porcentaje de respuestas correctas: ${percentageCorrect.toFixed(2)}%</p>
        <p>Respuestas correctas: ${correctCount} de ${totalQuestions}</p>
    `;
}


// Funciones para controlar el inicio y fin del juego, y mostrar los créditos
function startGame() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('juego').style.display = 'block';
    displayQuestion(currentQuestionIndex);
}

function showCredits() {
    document.getElementById('resultados').style.display = 'none';
    document.getElementById('creditos').style.display = 'block';
}

function restartGame() {
    document.getElementById('creditos').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
}
