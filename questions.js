const questions = [
    {
        question: "Выберите правильный ответ: '_____ name is John.'",
        answers: [
            { text: "My", correct: true },
            { text: "Me", correct: false },
            { text: "I", correct: false },
            { text: "Mine", correct: false }
        ],
        level: "A1"
    },
    {
        question: "Выберите правильное предложение:",
        answers: [
            { text: "She don't like coffee.", correct: false },
            { text: "She doesn't likes coffee.", correct: false },
            { text: "She doesn't like coffee.", correct: true },
            { text: "She not like coffee.", correct: false }
        ],
        level: "A1"
    },
    {
        question: "Выберите правильный вариант множественного числа: 'child'",
        answers: [
            { text: "childs", correct: false },
            { text: "childes", correct: false },
            { text: "children", correct: true },
            { text: "childrens", correct: false }
        ],
        level: "A2"
    },
    {
        question: "Выберите правильный вариант: 'He _____ TV when I called.'",
        answers: [
            { text: "watched", correct: false },
            { text: "was watching", correct: true },
            { text: "is watching", correct: false },
            { text: "were watching", correct: false }
        ],
        level: "B1"
    },
    {
        question: "Выберите правильный вариант: 'If it _____ tomorrow, we will go to the park.'",
        answers: [
            { text: "rains", correct: true },
            { text: "will rain", correct: false },
            { text: "is raining", correct: false },
            { text: "would rain", correct: false }
        ],
        level: "B1"
    },
    {
        question: "Закончите предложение: 'She has been living in London _____.'",
        answers: [
            { text: "since three years", correct: false },
            { text: "for three years", correct: true },
            { text: "three years ago", correct: false },
            { text: "during three years", correct: false }
        ],
        level: "B1"
    },
    {
        question: "Выберите правильный вариант: 'It's _____ to rain later today.'",
        answers: [
            { text: "likely", correct: true },
            { text: "probably", correct: false },
            { text: "possibly", correct: false },
            { text: "mostly", correct: false }
        ],
        level: "B2"
    },
    {
        question: "Выберите правильный предлог: 'I'm interested _____ learning English.'",
        answers: [
            { text: "in", correct: true },
            { text: "on", correct: false },
            { text: "at", correct: false },
            { text: "for", correct: false }
        ],
        level: "A2"
    },
    {
        question: "Выберите правильный модальный глагол: 'You _____ smoke in the hospital.'",
        answers: [
            { text: "don't have to", correct: false },
            { text: "mustn't", correct: true },
            { text: "shouldn't", correct: false },
            { text: "can't to", correct: false }
        ],
        level: "B1"
    },
    {
        question: "Выберите правильное условное предложение (third conditional):",
        answers: [
            { text: "If I had studied harder, I will pass the exam.", correct: false },
            { text: "If I would study harder, I would have passed the exam.", correct: false },
            { text: "If I had studied harder, I would have passed the exam.", correct: true },
            { text: "If I studied harder, I would have passed the exam.", correct: false }
        ],
        level: "C1"
    },
    {
        question: "Выберите правильный вариант для завершения предложения: 'She denied _____.'",
        answers: [
            { text: "to steal the money", correct: false },
            { text: "stealing the money", correct: true },
            { text: "steal the money", correct: false },
            { text: "that she steal the money", correct: false }
        ],
        level: "B2"
    },
    {
        question: "Что означает идиома 'to be over the moon'?",
        answers: [
            { text: "to be very sad", correct: false },
            { text: "to be extremely happy", correct: true },
            { text: "to be confused", correct: false },
            { text: "to be angry", correct: false }
        ],
        level: "C1"
    },
    {
        question: "Выберите правильный фразовый глагол: 'I need to _____ this report by tomorrow.'",
        answers: [
            { text: "hand in", correct: true },
            { text: "hand out", correct: false },
            { text: "hand over", correct: false },
            { text: "hand off", correct: false }
        ],
        level: "B2"
    },
    {
        question: "Выберите слово с правильным ударением:",
        answers: [
            { text: "PHOtograph", correct: false },
            { text: "phoTOgraph", correct: false },
            { text: "photoGRAPH", correct: false },
            { text: "phoTOGraph", correct: true }
        ],
        level: "C1"
    },
    {
        question: "Выберите правильное относительное местоимение: 'The book _____ I told you about is excellent.'",
        answers: [
            { text: "who", correct: false },
            { text: "whose", correct: false },
            { text: "which", correct: true },
            { text: "what", correct: false }
        ],
        level: "B2"
    },
    {
        question: "Выберите правильное слово для формального стиля:",
        answers: [
            { text: "get", correct: false },
            { text: "obtain", correct: true },
            { text: "grab", correct: false },
            { text: "snatch", correct: false }
        ],
        level: "C1"
    },
    {
        question: "Дополните предложение с правильным артиклем: 'She plays _____ piano very well.'",
        answers: [
            { text: "a", correct: false },
            { text: "an", correct: false },
            { text: "the", correct: true },
            { text: "-", correct: false }
        ],
        level: "A2"
    },
    {
        question: "Выберите правильное предложение с использованием инверсии:",
        answers: [
            { text: "Never I have seen such a beautiful sunset.", correct: false },
            { text: "Never have I seen such a beautiful sunset.", correct: true },
            { text: "I have never seen such a beautiful sunset.", correct: false },
            { text: "I never have seen such a beautiful sunset.", correct: false }
        ],
        level: "C2"
    },
    {
        question: "Выберите наиболее точный синоним к слову 'meticulous':",
        answers: [
            { text: "careful", correct: false },
            { text: "precise", correct: false },
            { text: "fastidious", correct: true },
            { text: "cautious", correct: false }
        ],
        level: "C2"
    },
    {
        question: "Выберите правильную форму для согласования времен: 'She said she _____ to Paris the following week.'",
        answers: [
            { text: "will go", correct: false },
            { text: "goes", correct: false },
            { text: "would go", correct: true },
            { text: "had gone", correct: false }
        ],
        level: "C1"
    }
];

const levelDescriptions = {
    "A1": {
        name: "Уровень A1 (Элементарный)",
        description: "Вы только начинаете изучать английский язык. Вы можете понимать и использовать знакомые повседневные выражения и очень простые фразы для удовлетворения конкретных потребностей. Можете представиться, задать простые вопросы и ответить на них. Можете участвовать в несложной беседе, если собеседник говорит медленно и отчетливо и готов помочь."
    },
    "A2": {
        name: "Уровень A2 (Базовый)",
        description: "Вы понимаете предложения и часто используемые выражения, связанные с основными сферами жизни (например, основные сведения о себе и членах семьи, покупках, работе). Можете выполнять простые и прямые задачи, требующие обмена информацией на знакомые темы. Можете рассказать о своем прошлом, описать окружение и затронуть вопросы, связанные с насущными потребностями."
    },
    "B1": {
        name: "Уровень B1 (Средний)",
        description: "Вы можете понимать основные идеи четких сообщений, сделанных на литературном английском языке на разные темы, типично возникающие на работе, учебе, досуге и т.д. Умеете общаться в большинстве ситуаций, которые могут возникнуть во время путешествия по англоязычной стране. Можете составить связное сообщение на знакомые или интересующие вас темы, описать впечатления, события, надежды, стремления, изложить и обосновать свое мнение."
    },
    "B2": {
        name: "Уровень B2 (Выше среднего)",
        description: "Вы понимаете основные идеи сложных текстов на абстрактные и конкретные темы на английском языке, в том числе узкоспециальные тексты. Говорите достаточно бегло и спонтанно, чтобы общаться с носителями языка без особых затруднений. Умеете составить четкий, подробный текст на различные темы и изложить свой взгляд на основную проблему, показать преимущества и недостатки разных мнений."
    },
    "C1": {
        name: "Уровень C1 (Продвинутый)",
        description: "Вы понимаете объемные сложные тексты на английском языке на различную тематику, распознаете их скрытое значение. Говорите спонтанно, бегло, не испытывая затруднений с подбором слов и выражений. Гибко и эффективно используете язык для общения в научной и профессиональной деятельности. Можете создать точный, хорошо выстроенный, подробный текст на сложные темы, демонстрируя владение моделями организации текста, средствами связи и объединением его элементов."
    },
    "C2": {
        name: "Уровень C2 (Свободное владение)",
        description: "Вы понимаете практически любое устное или письменное сообщение на английском языке, можете составить связный текст, выразить свои мысли, опираясь на несколько устных и письменных источников. Говорите спонтанно с высоким темпом и высокой степенью точности, подчеркивая оттенки значений даже в самых сложных случаях. Ваш уровень владения английским языком близок к уровню носителя языка."
    }
};

function determineLevel(results) {
    // Считаем количество правильных ответов по уровням
    const levelScores = {
        "A1": 0, "A2": 0, "B1": 0, "B2": 0, "C1": 0, "C2": 0
    };
    
    let totalCorrect = 0;
    
    results.forEach((result, index) => {
        if (result) {
            totalCorrect++;
            levelScores[questions[index].level]++;
        }
    });
    
    // Процент правильных ответов
    const percentCorrect = (totalCorrect / results.length) * 100;
    
    // Определяем уровень
    if (percentCorrect < 30) return "A1";
    if (percentCorrect < 50) return "A2";
    if (percentCorrect < 65) return "B1";
    if (percentCorrect < 80) return "B2";
    if (percentCorrect < 95) return "C1";
    return "C2";
} 