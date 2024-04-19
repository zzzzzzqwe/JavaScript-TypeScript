async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}

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
