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
    const month = newsletter.name.substring(0, 3);
    const year = newsletter.name.substring(3, 7);

    link.className = 'newsletter';
    link.href = newsletter.webViewLink;
    link.setAttribute('target', '_blank');

    p.textContent = `${monthName(month)} ${year} Newsletter: `;

    icon.className = 'fas fa-file-pdf';

    div.appendChild(p);
    div.appendChild(icon);
    link.appendChild(div);
    return link;
}

function monthName(abbr) {
    const names = {
        jan: "January",
        feb: "February",
        mar: "March",
        apr: "April",
        may: "May",
        jun: "June",
        jul: "July",
        aug: "August",
        sep: "September",
        oct: "October",
        nov: "November",
        dec: "December"
    }

    return names[abbr];
}