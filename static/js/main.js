document.addEventListener("DOMContentLoaded", () => {
  getCalendar().then(events => {
      console.log(events);
  }).catch(err => {
      console.log(err);
  });
});

async function getCalendar() {
    const response = await fetch('/api/calendar');

    if(response.ok) {
        return await response.json();
    }

    return new Error('Error fetching calendar');
}