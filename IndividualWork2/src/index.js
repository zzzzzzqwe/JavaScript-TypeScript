import { getRandomActivity } from './activity.js'

function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    if (activity !== null) {
        activityElement.textContent = activity;
    } else {
        activityElement.textContent = "К сожалению, произошла ошибка";
    }
}


async function updateData() {
    const activity = await getRandomActivity();
    updateActivity(activity);

    setTimeout(updateData, 60000);
}

updateData();
