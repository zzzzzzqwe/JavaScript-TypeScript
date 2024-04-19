import { getRandomActivity } from './activity.js'


/**
 * Обновляет текст активности на странице.
 * @param {string|null} activity Текст активности для отображения или null в случае ошибки.
 */
function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    if (activity !== null) {
        activityElement.textContent = activity;
    } else {
        activityElement.textContent = "К сожалению, произошла ошибка";
    }
}

/**
 * Обновляет данные активности каждую минуту.
 * @async
 */
async function updateData() {
    const activity = await getRandomActivity();
    updateActivity(activity);

    setTimeout(updateData, 60000);
}

updateData();
