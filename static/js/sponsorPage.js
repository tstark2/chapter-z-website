import * as Sponsor from './sponsors.js';
import * as Common from './commonMethods.js';

document.addEventListener("DOMContentLoaded", () => {
    const sponsorGrid = document.getElementById('sponsorGrid');
    const sponsors = Sponsor.default;

    for(const sponsor of sponsors) {
        const div = document.createElement('div');
        div.className = 'sponsor';
        div.appendChild(Common.makeSponsorAd(sponsor));

        const name = document.createElement('p');
        name.className = 'name';
        name.textContent = sponsor.name;
        div.appendChild(name);

        const address = document.createElement('a');
        address.className = 'address';
        address.href = Common.makeMapLink(`${sponsor.name} ${sponsor.address.street} ${sponsor.address.city}, ${sponsor.address.state} ${sponsor.address.zip}`);
        address.setAttribute('target', '_blank');
        const street = document.createElement('p');
        const csz = document.createElement('p');
        street.textContent = sponsor.address.street; 
        csz.textContent = `${sponsor.address.city}, ${sponsor.address.state} ${sponsor.address.zip}`;
        address.appendChild(street);
        address.appendChild(csz);
        div.appendChild(address);

        const phone = document.createElement('a');
        phone.className = 'phone';
        phone.href = `tel:${sponsor.phone}`;
        phone.textContent = sponsor.phone;
        div.appendChild(phone);

        if(sponsor.website !== undefined) {
            const url = document.createElement('a');
            url.className = 'website';
            url.setAttribute('target', '_blank');
            url.href = sponsor.website;
            url.textContent = sponsor.website;
            div.appendChild(url);
        }

        sponsorGrid.appendChild(div);
    }
});