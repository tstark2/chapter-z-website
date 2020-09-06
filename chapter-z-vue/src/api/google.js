export default {
    async getCalendarEvents() {
        const response = await fetch('/api/calendar');

        if(response.ok) {
            return await response.json();
        }

        return new Error('Error fetching calendar');
    }
}