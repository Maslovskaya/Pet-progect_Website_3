document.addEventListener("DOMContentLoaded", function () {
  // === Бургер меню ===
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("active"); // Переключает класс active
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }


  // Поиск по карточкам
  document.getElementById("searchInput").addEventListener("input", function () {
    const filter = this.value.toLowerCase();

    document.querySelectorAll(".product-card-link").forEach(link => {
      const productCard = link.querySelector(".product-card");
      const title = productCard.querySelector("h3").textContent.toLowerCase();

      if (title.includes(filter)) {
        link.style.display = "block"; // или grid / inline-block
      } else {
        link.style.display = "none";
      }
    });
  });

  // === Форма заказа ===
  const form = document.getElementById("orderForm");
  const successMessage = document.getElementById("successMessage");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Отключаем стандартную отправку формы

    // Проверяем валидность формы
    if (form.checkValidity()) {
      form.style.display = "none"; // Скрываем форму
      if (successMessage) {
        successMessage.style.display = "block"; // Показываем сообщение об успехе
      }
    } else {
      alert("Пожалуйста, заполните все поля корректно.");
    }
  });
});
