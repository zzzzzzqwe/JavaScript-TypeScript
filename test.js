function div(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Divide by Zero");
        } else {
            resolve(a / b);
        }
    });
}

async function calculateDiv(a, b) {
    try {
        return await div(a, b);
    } catch (error) {
        throw error;
    }
}

async function calculateResult(a, b) {
    try {
        const result = await calculateDiv(a, b);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

calculateResult(10, 2);
calculateResult(10, 0);