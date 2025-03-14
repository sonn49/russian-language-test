document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultsScreen = document.getElementById('results-screen');
    
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress');
    
    const levelText = document.getElementById('level-text');
    const levelIcon = document.getElementById('level-icon');
    const levelDescription = document.getElementById('level-description');
    
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let userAnswersWithDetails = [];
    
    // Перемешиваем вопросы
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    
    startBtn.addEventListener('click', startTest);
    nextBtn.addEventListener('click', handleNextButton);
    restartBtn.addEventListener('click', restartTest);
    
    function startTest() {
        welcomeScreen.style.display = 'none';
        questionScreen.style.display = 'block';
        
        currentQuestionIndex = 0;
        userAnswers = [];
        userAnswersWithDetails = [];
        
        setNextQuestion();
    }
    
    function handleNextButton() {
        const selectedBtn = document.querySelector('.answer-btn.selected');
        if (!selectedBtn) return;
        
        const isCorrect = selectedBtn.dataset.correct === 'true';
        userAnswers.push(isCorrect);
        
        // Сохраняем детали ответа
        userAnswersWithDetails.push({
            question: shuffledQuestions[currentQuestionIndex].question,
            options: shuffledQuestions[currentQuestionIndex].answers,
            selectedAnswer: selectedBtn.innerText,
            isCorrect: isCorrect
        });
        
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            setNextQuestion();
        } else {
            showResults();
        }
    }
    
    function setNextQuestion() {
        resetState();
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        updateProgress();
    }
    
    function showQuestion(question) {
        questionText.innerText = question.question;
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('answer-btn');
            button.dataset.correct = answer.correct;
            
            button.addEventListener('click', selectAnswer);
            
            answerButtons.appendChild(button);
        });
    }
    
    function resetState() {
        nextBtn.disabled = true;
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedBtn = e.target;
        
        document.querySelectorAll('.answer-btn').forEach(button => {
            button.classList.remove('selected');
        });
        
        selectedBtn.classList.add('selected');
        nextBtn.disabled = false;
        
        // Добавим визуальную анимацию выбора
        selectedBtn.style.transition = 'all 0.2s ease';
    }
    
    function updateProgress() {
        questionCounter.innerText = `Вопрос ${currentQuestionIndex + 1} из ${shuffledQuestions.length}`;
        const progressPercent = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }
    
    function showResults() {
        questionScreen.style.display = 'none';
        resultsScreen.style.display = 'block';
        
        const level = determineLevel(userAnswers);
        
        // Подсчитаем количество правильных ответов
        const correctCount = userAnswers.filter(answer => answer === true).length;
        const totalQuestions = userAnswers.length;
        const correctPercentage = Math.round((correctCount / totalQuestions) * 100);
        
        // Отображаем информацию о результате
        levelText.innerText = levelDescriptions[level].name;
        levelIcon.innerText = level;
        levelDescription.innerText = levelDescriptions[level].description;
        
        // Отображаем количество правильных ответов
        const correctAnswersCount = document.getElementById('correct-answers-count');
        correctAnswersCount.innerHTML = `<strong>Ваш результат:</strong> ${correctCount} из ${totalQuestions} правильных ответов (${correctPercentage}%)`;
        
        // Выделяем текущий уровень в шкале и все предыдущие уровни
        const levelItems = document.querySelectorAll('.level-item');
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const currentLevelIndex = levels.indexOf(level);
        
        levelItems.forEach((item, index) => {
            if (index < currentLevelIndex) {
                item.classList.add('completed');
            } else if (index === currentLevelIndex) {
                item.classList.add('active');
            }
        });
        
        // Показываем неправильные ответы
        const wrongAnswersList = document.getElementById('wrong-answers-list');
        wrongAnswersList.innerHTML = '';
        
        const wrongAnswers = userAnswersWithDetails.filter(answer => !answer.isCorrect);
        
        if (wrongAnswers.length === 0) {
            wrongAnswersList.innerHTML = '<p>Отлично! У вас нет неправильных ответов.</p>';
        } else {
            wrongAnswers.forEach(wrongAnswer => {
                const wrongAnswerItem = document.createElement('div');
                wrongAnswerItem.classList.add('wrong-answer-item');
                
                const questionText = document.createElement('h4');
                questionText.innerText = wrongAnswer.question;
                wrongAnswerItem.appendChild(questionText);
                
                // Добавляем варианты ответов
                wrongAnswer.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.classList.add('wrong-answer-option');
                    
                    if (option.text === wrongAnswer.selectedAnswer) {
                        optionElement.classList.add('selected');
                        optionElement.innerText = `✗ ${option.text} (ваш ответ)`;
                    } else if (option.correct) {
                        optionElement.classList.add('correct');
                        optionElement.innerText = `✓ ${option.text} (правильный ответ)`;
                    } else {
                        optionElement.innerText = option.text;
                    }
                    
                    wrongAnswerItem.appendChild(optionElement);
                });
                
                wrongAnswersList.appendChild(wrongAnswerItem);
            });
        }
        
        // Добавим анимацию появления результата
        resultsScreen.style.opacity = 0;
        setTimeout(() => {
            resultsScreen.style.transition = 'opacity 0.5s ease';
            resultsScreen.style.opacity = 1;
        }, 50);
    }
    
    function restartTest() {
        resultsScreen.style.display = 'none';
        
        // Сбрасываем стили шкалы уровней
        document.querySelectorAll('.level-item').forEach(item => {
            item.classList.remove('active', 'completed');
        });
        
        // Сбрасываем массивы ответов
        userAnswers = [];
        userAnswersWithDetails = [];
        
        // Перемешиваем вопросы заново
        shuffledQuestions.sort(() => Math.random() - 0.5);
        
        startTest();
    }
}); 