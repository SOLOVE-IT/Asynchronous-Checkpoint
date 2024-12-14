async function parallelCalls(urls) {
    try {
        // Fetching data from multiple URLs concurrently using Promise.all
        const responses = await Promise.all(urls.map(url => fetch(url)));

        // Parsing each response to JSON
        const data = await Promise.all(responses.map(response => response.json()));

        console.log('All responses:', data);
    } catch (error) {
        console.error('Error in parallel calls:', error);
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

parallelCalls(urls);
