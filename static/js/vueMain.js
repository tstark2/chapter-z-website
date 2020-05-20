Vue.component('main-header', {
    template: `
    <header id="mainHeader">
        <div>
            <a id="logo" href="index.html">
                <picture>
                    <source srcset="img/logoTransparent.webp" type="image/webp">
                    <img src="img/logoTransparent.png" alt="Chapter Z Logo" />
                </picture>
            </a>
            <h1>GWRRA Illinois Chapter Z</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#officers">Officers</a>
                <a href="#photos">Photos</a>
                <a href="#newsletter">Newsletter</a>
                <a href="#history">History</a>
                <a href="https://calendar.google.com/calendar/embed?src=il.chapter.z%40gmail.com&ctz=America%2FChicago" target="_blank">Calendar</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </div>
    </header>`
});

Vue.component('sub-header', {
    template: `
    <div id="subHeader">
        <a href="http://gwrra.org/" target="_blank">
            <picture>
                <source srcset="img/gwrraLogo.webp" type="image/webp">
                <img src="img/gwrraLogo.png" alt="GWRRA Logo" />
            </picture>
        </a>
        <div id="sponsor">
            <p>Sponsor ad here</p>
        </div>
        <a href="http://gwrra-ildistrict.com/index.html" target="_blank">
            <picture>
                <source srcset="img/illinoisSeal.webp" type="image/webp">
                <img src="img/illinoisSeal.png" alt="Illinois State GWRAA Logo">
            </picture>  
        </a>
    </div>`
});

Vue.component('calendar-event', {
    props: [
        "title",
        "locationHref",
        "location",
        "date",
        "time"
    ],
    template: `
        <div class="event">
            <p class="title">{{ title }}</p>
            <a v-ifclass="location" href="{{ locationHref }}" target="_blank">
                <i class="fas fa-map-marker-alt"></i>
                {{ location }}
            </a>
            <div class="dateTime">
                <p class="date">
                    <i class="fas fa-calendar-alt"></i>
                    {{ date }}
                </p>
                <p class="time">
                    <i class="fas fa-clock"></i>
                    {{ time }}
                </p>
            </div>
        </div>
    `,
});

Vue.component('social-footer', {
    template: `
    <footer>
        <div>
            <p>&copy; <span></span> GWRAA Illinois Chapter Z</p>
            <a id="facebookLink" href="https://www.facebook.com/ILChapterZ"><i class="fab fa-facebook-square"></i></a>
        </div>
    </footer>`
});

const app = new Vue({
    el: '#app',
    data: {
        events: []
    },
    created: async function() {
        const vm = this;
        const response = await fetch('/api/calendar');
        vm.events = response.json();

    }
});

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