async function awaitCall() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data); // Simulating the API response data logging
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

awaitCall();
