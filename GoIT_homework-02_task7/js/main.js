const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    // твой код
    if (login.length >= 4 && login.length <= 16) {
        return true;
    }
    return false;
};

const isLoginUnique = function (allLogins, login) {
    // твой код
    if (allLogins.indexOf(login) === -1) {
        return true;
    }
    return false;
};

const addLogin = function (allLogins, login) {
    // твой код
    if (!isLoginValid(login)) {
        return 'Ошибка! Логин должен быть от 4 до 16 символов';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такой логин уже используется!';
    }
    allLogins.push(login);
    return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'