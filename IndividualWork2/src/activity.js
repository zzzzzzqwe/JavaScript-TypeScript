/**
 * Получает случайную активность с внешнего API.
 * @async
 * @returns {Promise<string|null>} Промис, который разрешается строкой с текстом активности или null в случае ошибки.
 */

export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}
