document.addEventListener('DOMContentLoaded', () => {
    getNewsletters().then(newsletters => {
        for(const newsletter of newsletters.files) {
            document.getElementById('newsletters').appendChild(makeNewsletterLink(newsletter));
        }
    });
});

async function getNewsletters() {
    const response = await fetch('/api/newsletters');

    if(response.ok) {
        return await response.json();
    }

    throw new Error('Error fetching newsletters');
}

function makeNewsletterLink(newsletter) {
    const link = document.createElement('a');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const icon = document.createElement('i');
    const month = newsletter.name.substring(5, 7);
    const year = newsletter.name.substring(0,4);

    link.className = 'newsletter';
    link.href = newsletter.webViewLink;
    link.setAttribute('target', '_blank');

    p.textContent = `${monthName(month)} ${year}`;

    icon.className = 'fas fa-file-pdf';

    div.appendChild(p);
    div.appendChild(icon);
    link.appendChild(div);
    return link;
}

function monthName(abbr) {
    const names = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }

    return names[abbr];
}