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
  let adStart;
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

  for(var i = 0; i < adCount; i++) {
      adStart = i;
      sponsorSection.appendChild(makeSponsorAd(sponsors[sponsorIds[i]]));
  }

    setInterval(() => {
      for(var i = 0; i < adCount; i++) {
            adStart++;
            if(adStart > sponsors.length -1) {
                adStart = 0;
            }
            let newIndex = sponsorIds[adStart];
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
    let pngString = '';
    let webpString = '';

    link.href = sponsor.website;
    link.setAttribute('target', '_blank');

    if(sponsor.resolutions.length > 1) {
        for(const resolution of sponsor.resolutions) {
            
            pngString += `../img/sponsors/${sponsor.logo}@${resolution}x.png ${resolution}x, `;
            webpString += `../img/sponsors/${sponsor.logo}@${resolution}x.webp ${resolution}x, `
        }
    } else {
        pngString = `../img/sponsors/${sponsor.logo}.png`;
        webpString = `../img/sponsors/${sponsor.logo}.webp`;
    }
    source.setAttribute('srcset', webpString);
    source.setAttribute('type', 'image/webp');

    img.setAttribute('src', pngString);
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