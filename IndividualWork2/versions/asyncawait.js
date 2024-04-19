/**
 * Получает случайную активность с внешнего API и отображает её на странице.
 * Если произошла ошибка при получении данных, выводит сообщение об ошибке.
 * Обновляет данные каждую минуту.
 * @async
 * @returns {Promise<void>} Промис без возвращаемого значения
 */

async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        
        const activityElement = document.getElementById('activity');
        activityElement.textContent = data.activity;
    } catch (error) {
        const activityElement = document.getElementById('activity');
        activityElement.textContent = "К сожалению, произошла ошибка";
        console.error('Произошла ошибка:', error);
    }
    setTimeout(getRandomActivity, 60000);
}
getRandomActivity()