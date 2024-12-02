document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessages = document.getElementById('errorMessages');
  const successMessage = document.getElementById('successMessage');
  
  // Очищення попередніх повідомлень
  errorMessages.innerHTML = '';
  successMessage.innerHTML = '';
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
    errorMessages.innerHTML = errors.join('<br>');
  } else {
    successMessage.innerHTML = "Реєстрація успішна!";
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
