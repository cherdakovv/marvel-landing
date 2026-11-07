// Служебный канал Щ.И.Т.
console.log("[Щ.И.Т.] Допуск 67. Пасхалка найдена: +100 к ауре.");
const button = document.getElementById("main-button");
button?.addEventListener("click", () => { button.textContent = "Команда готова к миссии!"; });

const heroProfiles = [
  {
    "name": "Железный человек",
    "description": "Ты находишь нестандартные решения и любишь создавать что-то своё. Твоя суперсила — изобретательность."
  },
  {
    "name": "Человек-паук",
    "description": "Ты отзывчивый и смелый. Помогаешь людям даже тогда, когда самому непросто."
  },
  {
    "name": "Тор",
    "description": "Ты решительный и отважный. Готов встретить трудности лицом к лицу и поддержать друзей."
  },
  {
    "name": "Капитан Америка",
    "description": "Ты ценишь справедливость и умеешь объединять людей. На тебя можно положиться."
  },
  {
    "name": "Халк",
    "description": "В тебе сочетаются энергия и вдумчивость. Ты можешь быть спокойным, но за близких стоишь горой."
  },
  {
    "name": "Чёрная вдова",
    "description": "Ты наблюдательный и собранный. Замечаешь детали и умеешь действовать, когда другим трудно решиться."
  },
  {
    "name": "Доктор Стрэндж",
    "description": "Ты любознательный и настойчивый. Готов учиться сложному и смотреть на задачу с необычной стороны."
  },
  {
    "name": "Чёрная пантера",
    "description": "Ты ответственный и рассудительный. Уважаешь свои корни и думаешь о тех, за кого отвечаешь."
  },
  {
    "name": "Алая Ведьма",
    "description": "Ты эмоциональный и творческий. Глубоко переживаешь за близких и обладаешь богатым воображением."
  },
  {
    "name": "Соколиный глаз",
    "description": "Ты терпеливый и внимательный. Умеешь сосредоточиться и довести дело до точного результата."
  },
  {
    "name": "Человек-муравей",
    "description": "Ты находчивый и дружелюбный. Умеешь видеть возможности там, где остальные замечают только ограничения."
  },
  {
    "name": "Капитан Марвел",
    "description": "Ты независимый и уверенный в себе. Любишь свободу и готов пробовать то, что кажется невозможным."
  },
  {
    "name": "Локи",
    "description": "Ты остроумный и гибкий в мышлении. Любишь нестандартные ходы и умеешь удивить окружающих."
  },
  {
    "name": "Дэдпул",
    "description": "Ты не теряешь чувство юмора и умеешь поднять настроение. После неудачи быстро находишь силы попробовать снова."
  },
  {
    "name": "Росомаха",
    "description": "Ты стойкий и прямолинейный. Не сдаёшься после трудностей и защищаешь тех, кто тебе дорог."
  },
  {
    "name": "Сокол",
    "description": "Ты умеешь поддерживать и вдохновлять людей. Ценишь работу в команде и помогаешь другим поверить в себя."
  }
];
const questions = [
  {
    "question": "Что для тебя важнее всего?",
    "answers": [
      {
        "text": "Ум и технологии",
        "hero": 0
      },
      {
        "text": "Помощь тем, кто рядом",
        "hero": 1
      },
      {
        "text": "Смелость и верность друзьям",
        "hero": 2
      },
      {
        "text": "Честь и справедливость",
        "hero": 3
      },
      {
        "text": "Внутренняя сила и самообладание",
        "hero": 4
      },
      {
        "text": "Доверие и верность делу",
        "hero": 5
      },
      {
        "text": "Знания и понимание мира",
        "hero": 6
      },
      {
        "text": "Ответственность перед близкими",
        "hero": 7
      },
      {
        "text": "Чувства и близкие люди",
        "hero": 8
      },
      {
        "text": "Точность и спокойствие",
        "hero": 9
      },
      {
        "text": "Семья и второй шанс",
        "hero": 10
      },
      {
        "text": "Свобода и независимость",
        "hero": 11
      },
      {
        "text": "Возможность самому выбирать свой путь",
        "hero": 12
      },
      {
        "text": "Юмор и умение не сдаваться",
        "hero": 13
      },
      {
        "text": "Верность своим принципам",
        "hero": 14
      },
      {
        "text": "Взаимовыручка и поддержка команды",
        "hero": 15
      }
    ]
  },
  {
    "question": "Какую способность или снаряжение ты выберешь?",
    "answers": [
      {
        "text": "Высокотехнологичный костюм",
        "hero": 0
      },
      {
        "text": "Лазать по стенам и чувствовать опасность",
        "hero": 1
      },
      {
        "text": "Управлять молниями",
        "hero": 2
      },
      {
        "text": "Сила и выносливость суперсолдата",
        "hero": 3
      },
      {
        "text": "Невероятная физическая сила",
        "hero": 4
      },
      {
        "text": "Идеальная ловкость и реакция",
        "hero": 5
      },
      {
        "text": "Магия и создание порталов",
        "hero": 6
      },
      {
        "text": "Ловкость пантеры и костюм из вибраниума",
        "hero": 7
      },
      {
        "text": "Телекинез и магия хаоса",
        "hero": 8
      },
      {
        "text": "Безупречная меткость",
        "hero": 9
      },
      {
        "text": "Уменьшаться и становиться гигантом",
        "hero": 10
      },
      {
        "text": "Полёт и управление энергией",
        "hero": 11
      },
      {
        "text": "Иллюзии и изменение облика",
        "hero": 12
      },
      {
        "text": "Быстрая регенерация",
        "hero": 13
      },
      {
        "text": "Регенерация, когти и острые чувства",
        "hero": 14
      },
      {
        "text": "Полёт на механических крыльях",
        "hero": 15
      }
    ]
  },
  {
    "question": "Как ты поступишь в опасной ситуации?",
    "answers": [
      {
        "text": "Разработаю хитрый план",
        "hero": 0
      },
      {
        "text": "Сначала спасу людей",
        "hero": 1
      },
      {
        "text": "Смело встречу угрозу",
        "hero": 2
      },
      {
        "text": "Организую защиту команды",
        "hero": 3
      },
      {
        "text": "Уберу препятствия с пути друзей",
        "hero": 4
      },
      {
        "text": "Незаметно выясню слабое место врага",
        "hero": 5
      },
      {
        "text": "Найду неожиданный выход с помощью знаний",
        "hero": 6
      },
      {
        "text": "Оценю риски и защищу тех, за кого отвечаю",
        "hero": 7
      },
      {
        "text": "Постараюсь остановить угрозу силой воли",
        "hero": 8
      },
      {
        "text": "Выберу точный момент для действия",
        "hero": 9
      },
      {
        "text": "Зайду с неожиданной стороны",
        "hero": 10
      },
      {
        "text": "Возьму инициативу на себя",
        "hero": 11
      },
      {
        "text": "Отвлеку противника неожиданной уловкой",
        "hero": 12
      },
      {
        "text": "Сымпровизирую и поддержу друзей шуткой",
        "hero": 13
      },
      {
        "text": "Прикрою товарищей и выдержу удар",
        "hero": 14
      },
      {
        "text": "Скоординирую действия и помогу с воздуха",
        "hero": 15
      }
    ]
  },
  {
    "question": "Какое занятие тебе ближе?",
    "answers": [
      {
        "text": "Изобретения и техника",
        "hero": 0
      },
      {
        "text": "Наука и городские приключения",
        "hero": 1
      },
      {
        "text": "Мифы и легенды",
        "hero": 2
      },
      {
        "text": "История и командные игры",
        "hero": 3
      },
      {
        "text": "Эксперименты и устройство природы",
        "hero": 4
      },
      {
        "text": "Загадки, языки и разведка",
        "hero": 5
      },
      {
        "text": "Космос и тайны мироздания",
        "hero": 6
      },
      {
        "text": "Технологии будущего и традиции",
        "hero": 7
      },
      {
        "text": "Творчество и психология",
        "hero": 8
      },
      {
        "text": "Спорт на меткость и тренировка внимания",
        "hero": 9
      },
      {
        "text": "Головоломки и необычные механизмы",
        "hero": 10
      },
      {
        "text": "Полёты и исследование новых мест",
        "hero": 11
      },
      {
        "text": "Театр, стратегии и искусство убеждать",
        "hero": 12
      },
      {
        "text": "Комедии и свободная импровизация",
        "hero": 13
      },
      {
        "text": "Походы и испытания на выносливость",
        "hero": 14
      },
      {
        "text": "Командные задания и авиация",
        "hero": 15
      }
    ]
  },
  {
    "question": "Каким тебя считают друзья?",
    "answers": [
      {
        "text": "Изобретательным",
        "hero": 0
      },
      {
        "text": "Отзывчивым",
        "hero": 1
      },
      {
        "text": "Отважным",
        "hero": 2
      },
      {
        "text": "Надёжным",
        "hero": 3
      },
      {
        "text": "Сильным духом",
        "hero": 4
      },
      {
        "text": "Наблюдательным",
        "hero": 5
      },
      {
        "text": "Мудрым",
        "hero": 6
      },
      {
        "text": "Ответственным",
        "hero": 7
      },
      {
        "text": "Чутким",
        "hero": 8
      },
      {
        "text": "Сосредоточенным",
        "hero": 9
      },
      {
        "text": "Находчивым",
        "hero": 10
      },
      {
        "text": "Уверенным",
        "hero": 11
      },
      {
        "text": "Остроумным",
        "hero": 12
      },
      {
        "text": "Весёлым",
        "hero": 13
      },
      {
        "text": "Несгибаемым",
        "hero": 14
      },
      {
        "text": "Вдохновляющим",
        "hero": 15
      }
    ]
  }
];

const heroCards = heroProfiles.map((hero, index) => {
  const card = Array.from(document.querySelectorAll("#heroes .hero-card"))
    .find(card => card.querySelector(".hero-name")?.textContent.trim() === hero.name);
  if (card) {
    card.id = `hero-${index}`;
    card.style.scrollMarginTop = "125px";
    card.tabIndex = -1;
  }
  return card;
});

let currentQuestion = 0;
let scores = Array(heroProfiles.length).fill(0);
let selectedHeroes = [];
const startButton = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container");

// Перемешиваем варианты, сохраняя связь каждого ответа с персонажем.
function shuffleAnswers(answers) {
  const shuffled = [...answers];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function focusQuizHeading() {
  const heading = quizContainer.querySelector("[data-quiz-heading]");
  heading.tabIndex = -1;
  heading.focus({ preventScroll: true });
  heading.scrollIntoView({ block: "center" });
}

function showQuestion() {
  const question = questions[currentQuestion];
  const progress = Math.round(currentQuestion / questions.length * 100);
  let answered = false;
  quizContainer.innerHTML = `
    <div class="progress-info"><span>Вопрос ${currentQuestion + 1} из ${questions.length}</span><span>${progress}%</span></div>
    <div class="progress-bar" role="progressbar" aria-label="Пройдено вопросов теста" aria-valuemin="0" aria-valuemax="5" aria-valuenow="${currentQuestion}"><div class="progress-fill" style="width:${progress}%"></div></div>
    <h3 data-quiz-heading>${question.question}</h3>
    <p style="font-size:14px">Выбери один из ${question.answers.length} вариантов.</p>
    <div class="answers">${shuffleAnswers(question.answers).map(answer => `
      <button type="button" class="answer-button" data-answer="${answer.hero}">${answer.text}</button>
    `).join("")}</div>`;

  // Выбираем только кнопки теста характера, чтобы не затронуть викторину.
  quizContainer.querySelectorAll("[data-answer]").forEach(option => {
    option.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const hero = Number(option.dataset.answer);
      scores[hero]++;
      selectedHeroes.push(hero);
      currentQuestion++;
      if (currentQuestion < questions.length) showQuestion();
      else showResult();
    });
  });
  focusQuizHeading();
}

function chooseHero(scores, choices) {
  const highest = Math.max(...scores);
  // При равенстве учитываем последний выбор среди лидирующих персонажей.
  return [...choices].reverse().find(hero => scores[hero] === highest);
}

function showResult() {
  const heroIndex = chooseHero(scores, selectedHeroes);
  const hero = heroProfiles[heroIndex];
  const tied = scores.filter(score => score === scores[heroIndex]).length > 1;
  quizContainer.innerHTML = `
    <div class="result-card">
      <div id="result-portrait"></div>
      <p class="result-label">МИССИЯ ЗАВЕРШЕНА — 100%</p>
      <h2 data-quiz-heading>${hero.name}</h2>
      <p>${hero.description}</p>
      ${tied ? '<p style="font-size:14px;color:#bdbdcd">У тебя есть черты нескольких персонажей. При равенстве баллов мы учли твой последний выбор среди лидеров.</p>' : ''}
      <div class="landing-actions" style="justify-content:center;margin-top:24px">
        ${heroCards[heroIndex] ? `<a class="hero-cta" id="view-hero" href="#hero-${heroIndex}">Открыть досье героя</a>` : ""}
        <button id="restart-quiz" type="button">Пройти ещё раз</button>
      </div>
    </div>`;
  const card = heroCards[heroIndex];
  const source = card?.querySelector(".hero-portrait");
  if (source) {
    const portrait = source.cloneNode(true);
    portrait.style.cssText = "width:100%;max-width:240px;margin:24px auto;border-radius:16px;";
    portrait.querySelector("img").loading = "eager";
    document.getElementById("result-portrait").append(portrait);
  }
  document.getElementById("view-hero")?.addEventListener("click", () => {
    const details = card.querySelector("details");
    if (details) details.open = true;
    card.focus({ preventScroll: true });
  });
  document.getElementById("restart-quiz").addEventListener("click", startQuiz);
  focusQuizHeading();
}

function startQuiz() {
  currentQuestion = 0;
  scores = Array(heroProfiles.length).fill(0);
  selectedHeroes = [];
  startButton.style.display = "none";
  showQuestion();
}
startButton.addEventListener("click", startQuiz);
