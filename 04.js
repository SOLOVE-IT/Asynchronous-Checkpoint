async function concurrentRequests() {
    try {
        // Simulating two concurrent API calls using Promise.all
        const [response1, response2] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/2')
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        console.log('Response 1:', data1);
        console.log('Response 2:', data2);
    } catch (error) {
        console.error('Error in fetching concurrent requests:', error);
    }
}

concurrentRequests();
