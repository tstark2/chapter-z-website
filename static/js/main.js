document.addEventListener("DOMContentLoaded", () => {
  getCalendar().then(events => {
      const eventList = document.querySelector('main aside');
      for(const event of events.items) {
          eventList.appendChild(makeEvent(event));
      }
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

function makeEvent(event) {
    console.log(event);
    const div = document.createElement('div');
    const dateTimeDiv = document.createElement('div');
    const title = document.createElement('p');
    const location = document.createElement('a');
    const time = document.createElement('p');
    const day = document.createElement('p');

    div.className = 'event';
    title.className = 'title';
    dateTimeDiv.className = 'dateTime';
    location.className = 'location';
    time.className = 'time';
    day.className = 'date';

    title.appendChild(document.createTextNode(event.summary));
    
    if(event.location !== undefined) {
        const mapPin = document.createElement('i');
        mapPin.className = 'fas fa-map-marker-alt';
        location.setAttribute('href', makeMapLink(event.location));
        location.appendChild(mapPin);
        location.appendChild(document.createTextNode(event.location));
    }

    if(event.start.dateTime !== undefined) {
        const calendarIcon = document.createElement('i');
        const clockIcon = document.createElement('i');
        const startDate = getDateAndTime(event.start.dateTime);
        calendarIcon.className = 'fas fa-calendar-alt';
        clockIcon.className = 'fas fa-clock';

        day.appendChild(calendarIcon);
        day.appendChild(document.createTextNode(startDate.date));

        time.appendChild(clockIcon);
        time.appendChild(document.createTextNode(startDate.time));

        dateTimeDiv.appendChild(day);
        dateTimeDiv.appendChild(time);
    }

    div.appendChild(title);
    div.appendChild(location);
    div.appendChild(dateTimeDiv);
    return div;
}

function getDateAndTime(dateTime) {
    const date = new Date(dateTime);
    return {
        date: `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
        time: date.toLocaleTimeString('en-US')
    }
}

function makeMapLink(location) {
    return encodeURI(`https://www.google.com/maps/search/?api=1&query=${location}`);
}