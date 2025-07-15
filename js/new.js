// === Элементы формы ===
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const cardNumberInput = document.getElementById("cardNumber");
const addressInput = document.getElementById("address");
const contactForm = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successMsg = document.getElementById("success-msg");
const submitBtn = document.getElementById("submit");

// === Форма отправки ===
function validate(e) {
  e.preventDefault();
  errorElement.innerHTML = "";
  successMsg.style.display = "none"; // прячем старое сообщение, если есть

  let isValid = true;

  if (!nameInput.value || nameInput.value.length < 3) {
    errorElement.innerHTML = "Введите корректное имя";
    isValid = false;
  }

  if (!phoneInput.value.startsWith("+")) {
    errorElement.innerHTML = "Номер должен начинаться с +";
    isValid = false;
  }

  if (!cardNumberInput.value || cardNumberInput.value.replace(/\s+/g, '').length !== 16) {
    errorElement.innerHTML = "Номер карты должен быть из 16 цифр";
    isValid = false;
  }

  if (!emailIsValid(emailInput.value)) {
    errorElement.innerHTML = "Введите корректный email";
    isValid = false;
  }

  if (isValid) {
    const modal = document.getElementById("success-modal");

    modal.style.display = "block";

    setTimeout(() => {
      window.location.href = "face_page.html"; // или "products.html", как тебе нужно
    }, 4000); // через 5 секунды
  }
}

// === Валидация email ===
function emailIsValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Простая проверка email
  return emailRegex.test(email);
}

// === Обработчик события ===
submitBtn.addEventListener("click", validate);
