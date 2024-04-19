function getRandomActivity() {
    fetch('https://www.boredapi.com/api/activity/')
     .then(response => response.json())
     .then(data => {
         const activityElement = document.getElementById('activity');
         activityElement.textContent = data.activity;
     })
     .catch(error => {
        const activityElement = document.getElementById('activity');
        activityElement.textContent = "К сожалению, произошла ошибка";
        console.error('Произошла ошибка:', error);
     });
}

getRandomActivity();