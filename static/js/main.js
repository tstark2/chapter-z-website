import * as Sponsors from './sponsors.js';

document.addEventListener("DOMContentLoaded", () => {
  getCalendar().then(events => {
      const eventList = document.querySelector('main aside');
      for(const event of events.items) {
          eventList.appendChild(makeEvent(event));
      }
  }).catch(err => {
      console.log(err);
  });

  const sponsorWidth = getSponsorWidth();
  const adWidth = 280;
  let adCount = Math.floor(sponsorWidth / adWidth);
  const sponsors = Sponsors.default;
  const sponsorSection = document.getElementsByTagName('sub-header')[0].shadowRoot.querySelector('#sponsors');
  let adStart = getRandomInt(sponsors.length - 1);
  document.documentElement.style.setProperty('--adCount', adCount);

  if(adCount < 2) {
      sponsorSection.style.alignItems = 'center';
      sponsorSection.style.justifyContent = 'center';
  }

  if(sponsorWidth % adWidth < 30) {
      adCount--;
  }

  if(adCount > sponsors.length) {
      adCount = sponsors.length;
  }

  for(var i = 0; i < adCount; i++) {
      sponsorSection.appendChild(makeSponsorAd(sponsors[i]));
  }

    setInterval(() => {
      adStart += adCount;
      if(adStart > sponsors.length -1) {
          adStart = 0;
      }

      for(var i = 0; i < adCount; i++) {
          let newIndex = adStart + i;
          if(newIndex > sponsors.length - 1) {
              newIndex = 0;
          }
          const adToReplace = sponsorSection.querySelectorAll('a')[i];
          sponsorSection.replaceChild(makeSponsorAd(sponsors[newIndex]), adToReplace);
        }
    }, 10000);
});

async function getCalendar() {
    const response = await fetch('/api/calendar');

    if(response.ok) {
        return await response.json();
    }

    return new Error('Error fetching calendar');
}

function makeEvent(event) {
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
        location.setAttribute('target', '_blank');
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
        time: date.toLocaleTimeString('en-US').replace(':00 ', ' ')
    }
}

function makeMapLink(location) {
    return encodeURI(`https://www.google.com/maps/search/?api=1&query=${location}`);
}

// determines the width of the sponsor section since we can't get it directly from the shadow dom.
function getSponsorWidth() {
    const windowWidth = window.innerWidth;
    let multiplier;
    let logoWidth;

    switch(true) {
        case windowWidth > 768:
            multiplier = 0.75;
            logoWidth = 300;
            break;
        case windowWidth <= 768 && windowWidth > 576: 
            multiplier = 0.9;
            logoWidth = 240;
            break;
        case windowWidth <= 576:
            multiplier = 0.9;
            logoWidth = -5;
    }

    return Math.round((windowWidth * multiplier) - (logoWidth + 5));
}

function makeSponsorAd(sponsor) {
    const link = document.createElement('a');
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');

    link.href = sponsor.website;
    link.setAttribute('target', '_blank');

    source.setAttribute('srcset', `../img/sponsors/${sponsor.logo}.webp`);
    source.setAttribute('type', 'image/webp');

    img.setAttribute('src', `../img/sponsors/${sponsor.logo}.png`);
    img.setAttribute('alt', sponsor.name);

    picture.appendChild(source);
    picture.appendChild(img);
    link.appendChild(picture);
    return link;
}

function getRandomInt(max) {
    const min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}