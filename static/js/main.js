import * as Sponsors from './sponsors.js';
import * as Common from './commonMethods.js';

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
  let adStart;
  const sponsorLength = sponsors.length - 1;
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

  let sponsorIds = [];

  for(const index in sponsors) {
      sponsorIds.push(index);
  }

  // shuffle the array of ad id's
  for(let i = sponsorIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = sponsorIds[i];
      sponsorIds[i] = sponsorIds[j];
      sponsorIds[j] = temp;
  }

  for(let i = 0; i < adCount; i++) {
    adStart = i;
    const ad = document.createElement('sponsor-slider');
    const first = ad.shadowRoot.querySelector('.first');
    const next = ad.shadowRoot.querySelector('.next');
    const firstSponsor = sponsors[sponsorIds[i]];
    const nextSponsor = sponsors[sponsorIds[i + adCount]];

    first.href = firstSponsor.website;
    first.replaceChild(Common.makeSponsorPicture(firstSponsor), first.querySelector('picture'));

    next.href = nextSponsor.website;
    next.replaceChild(Common.makeSponsorPicture(nextSponsor), next.querySelector('picture'));

    sponsorSection.appendChild(ad);
  }

  setInterval(() => {
      for(let i = 0; i < adCount; i++) {
          
          adStart++;

          if(adStart > sponsorLength) {
              adStart = 0;
          }

          let newIndex = sponsorIds[adStart];
          if(newIndex > sponsorLength) {
              newIndex = 0;
          }

          const next = sponsorSection.getElementsByTagName('sponsor-slider')[i].shadowRoot.querySelector('.next');
          const first = sponsorSection.getElementsByTagName('sponsor-slider')[i].shadowRoot.querySelector('.first');
          const newSponsor = sponsors[newIndex];
          const newPicture = Common.makeSponsorPicture(newSponsor);
          const nextPicture = next.querySelector('picture');
          const firstPicture = first.querySelector('picture');

          next.href = newSponsor.website;
          next.replaceChild(newPicture, nextPicture);
          next.classList.add('down');

          setTimeout(() => {
              first.href = newSponsor.website;
              first.replaceChild(newPicture.cloneNode(true), firstPicture);
              next.classList.add('hide');
              next.classList.remove('down');

            //   setTimeout(() => {
            //       next.classList.remove('hide');
            //   }, 1500);
          }, 1500);
      }
  }, 5000);
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
        location.setAttribute('href', Common.makeMapLink(event.location));
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