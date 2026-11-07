// Служебный канал Щ.И.Т. Сообщение появится в консоли браузера.
console.log("[Щ.И.Т.] Допуск 67. Пасхалка найдена: +100 к ауре.");

const button = document.querySelector("#main-button");

function handleClick() {
  button.textContent = "Команда готова к миссии!";
}

button.addEventListener("click", handleClick);