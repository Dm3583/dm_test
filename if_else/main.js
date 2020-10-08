let userName = prompt('Кто там?', '');

if (userName === '' || userName === null) {
    alert("Отменено");
} else if (userName === 'Админ') {
    let pass = prompt('Пароль?', '');
    if (pass === '' || pass === null) {
        alert("Отменено");
    } else if (pass !== 'Я главный') {
        alert('Неверный пароль');
    } else {
        alert('Здравсвуйте');
    }

} else {
    alert('Я вас не знаю');
}

