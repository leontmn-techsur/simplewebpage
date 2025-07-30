async function fetchAtomicTime() {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/UTC');
        const data = await response.json();
        const time = new Date(data.datetime).toLocaleTimeString();
        document.getElementById('atomic-time').textContent = time;
    } catch (error) {
        console.error('Error fetching time:', error);
        document.getElementById('atomic-time').textContent = 'Failed to load time';
    }
}

fetchAtomicTime();
setInterval(fetchAtomicTime, 1000);