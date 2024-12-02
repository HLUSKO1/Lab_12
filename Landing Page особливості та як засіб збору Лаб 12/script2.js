$('#registrationForm').submit(function(event) {
  event.preventDefault();
  const username = $('#username').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const errorMessages = $('#errorMessages');
  const successMessage = $('#successMessage');
  // Очищення попередніх повідомлень
  errorMessages.empty();
  successMessage.empty();
  // Перевірка коректності введених даних
  let errors = [];
  // Перевірка на порожні поля
  if (!username || !email || !password) {
    errors.push("Усі поля повинні бути заповнені.");
  }
  // Перевірка формату email
  if (!validateEmail(email)) {
    errors.push("Невірний формат email.");
  }
  // Перевірка на спеціальні символи в імені користувача
  if (/[^a-zA-Z0-9]/.test(username)) {
    errors.push("Ім'я користувача повинно містити лише літери та цифри.");
  }

  if (errors.length > 0) {
    errorMessages.html(errors.join('<br>'));
  } else {
    successMessage.html("Реєстрація успішна!");
    // Виведення в консоль
    console.log(`Ім'я користувача: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Пароль: ${password}`);
  }
});
// Функція для перевірки email
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

  