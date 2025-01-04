const qualityChecks = [
  {
    section: "1. Проверка верстки (7)",
    checks: [
      {
        name: "верстка страницы валидная",
        points: 4,
        earned: 4,
      },
      {
        name: "логотип в хедере состоит из текстовых элементов",
        points: 1,
        earned: 0,
      },
      {
        name: "страница содержит ровно один элемент <h1>",
        points: 1,
        earned: 1,
      },
      { name: "добавлен favicon", points: 1, earned: 0 },
    ],
  },
  {
    section: "2. Вёрстка соответствует макету (60)",
    checks: [
      { name: "блок <header>", points: 5, earned: 5 },
      { name: "блок banner", points: 5, earned: 5 },
      { name: "блок offter banner", points: 5, earned: 5 },
      { name: "блок about", points: 5, earned: 5 },
      { name: "блок shop", points: 5, earned: 5 },
      { name: "блок Testimonial \\ Counter", points: 5, earned: 5 },
      { name: "блок offer", points: 5, earned: 5 },
      { name: "блок Who We Are", points: 5, earned: 5 },
      { name: "блок gallery", points: 5, earned: 5 },
      { name: "блок blog", points: 5, earned: 5 },
      { name: "блок newslatter", points: 5, earned: 0 },
      { name: "блок <footer>", points: 5, earned: 0 },
    ],
  },
  {
    section: "3. Требования к css (6)",
    checks: [
      {
        name: "для позиционирования элементов блоков использована сеточная верстка (flexbox или grid)",
        points: 2,
        earned: 2,
      },
      {
        name: "при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине",
        points: 2,
        earned: 2,
      },
      {
        name: "фоновый цвет тянется на всю ширину страницы",
        points: 2,
        earned: 2,
      },
    ],
  },
  {
    section: "4. Интерактивность элементов (12)",
    checks: [
      {
        name: "элемент Home навигации подсвечен и неинтерактивен, остальные элементы навигации интерактивны",
        points: 2,
        earned: 2,
      },
      {
        name: "каждая карточка интерактивна при наведении на любую область этой карточки",
        points: 2,
        earned: 2,
      },
      { name: "плавная прокрутка по якорям", points: 2, earned: 0 },
      {
        name: "выполнена интерактивность ссылок и кнопок. Интерактивность заключается не только в изменении внешнего вида курсора, например, при помощи свойства cursor: pointer, но и в использовании и других визуальных эффектов, например, изменение цвета фона или цвета шрифта, согласно стайлгайду в макете",
        points: 2,
        earned: 2,
      },
      {
        name: "обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике, не влияющее на соседние элементы",
        points: 2,
        earned: 2,
      },
    ],
  },
];

function displayResults() {
  // Display section summaries
  console.group("Code Quality Check Results");
  qualityChecks.forEach((section) => {
    const totalPoints = section.checks.reduce(
      (sum, check) => sum + check.points,
      0
    );
    const earnedPoints = section.checks.reduce(
      (sum, check) => sum + check.earned,
      0
    );
    console.log(`${section.section}: ${earnedPoints}/${totalPoints}`);

    // Display detailed checks
    console.group("Detailed checks");
    console.table(section.checks);
    console.groupEnd();
  });

  // Display total score
  const totalPossible = qualityChecks.reduce(
    (sum, section) =>
      sum + section.checks.reduce((sum, check) => sum + check.points, 0),
    0
  );
  const totalEarned = qualityChecks.reduce(
    (sum, section) =>
      sum + section.checks.reduce((sum, check) => sum + check.earned, 0),
    0
  );
  console.log(`Total Score: ${totalEarned}/${totalPossible}`);
  console.groupEnd();
}

// To update scores, modify the 'earned' values in the qualityChecks array
// Then call displayResults() to show the current status
displayResults();
