async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second
    }
}

const values = ['Apple', 'Banana', 'Cherry'];
iterateWithAsyncAwait(values);
