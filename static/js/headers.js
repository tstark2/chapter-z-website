import * as Common from './commonMethods.js';

class MainHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const header = document.createElement('header');
        const div = document.createElement('div');
        const menuButton = document.createElement('button');
        const menuIcon = document.createElement('object');
        const styles = document.createElement('link');

        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', "../css/mainHeader.css");

        div.appendChild(styles);

        // create logo link
        const logoLink = document.createElement('a');
        logoLink.id = 'logo';
        logoLink.href = 'index.html';

        logoLink.appendChild(Common.makePicture('img/logoTransparent'));

        div.appendChild(logoLink);

        // create h1
        const h1 = document.createElement('h1');
        h1.textContent = 'GWRRA Illinois Chapter Z';

        div.appendChild(h1);

        menuIcon.setAttribute('type', 'image/svg+xml');
        menuIcon.setAttribute('data', '../img/menu.svg');

        menuButton.id = 'menuButton';
        menuButton.appendChild(menuIcon);

        menuButton.addEventListener('click', e => {
            e.preventDefault();
            nav.classList.add('open');
        });

        div.appendChild(menuButton);

        // create nav
        const nav = document.createElement('nav');
        const links = [
            {href: "index.html", title: "Home"},
            {href: "about.html", title: "About Us"},
            {href: "staff.html", title: "Staff"},
            {href: "https://www.facebook.com/ILChapterZ/photos/", title:"Photos", options: {target: "_blank"}},
            {href: "newsletter.html", title: "Newsletters"},
            {href: "https://calendar.google.com/calendar/embed?src=il.chapter.z%40gmail.com&ctz=America%2FChicago", title: "Calendar", options: {target: "_blank"}},
            {href: "sponsors.html", title: "Sponsors"},
            {href: "links.html", title: "Links"},
            {href: "mailto:cd@il-chapter-z.org", title: "Contact Us"},
            {href: "#close", title: "Close Menu"}

        ];

        for(const link of links) {
            nav.appendChild(Common.makeNavLink(link));
        }

        const closeLink = nav.querySelector('a[href="#close"]');
        closeLink.addEventListener('click', e => {
            e.preventDefault();
            nav.classList.remove('open');
        });

        div.appendChild(nav);
        header.appendChild(div);

        shadow.appendChild(header);
    }
}

class SubHeader extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: 'open'});
        const styles = document.createElement('link');
        const header = document.createElement('header');
        const gwrraLogo = document.createElement('a');
        const sponsor = document.createElement('div');
        const ilDistrictLogo = document.createElement('a');

        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', "../css/subHeader.css");

        header.appendChild(styles);


        gwrraLogo.href = 'http://gwrra.org/';
        gwrraLogo.setAttribute('target', '_blank');
        gwrraLogo.appendChild(Common.makeResponsivePicture('gwrraSeal'));
        header.appendChild(gwrraLogo);

        sponsor.id = "sponsors"

        header.appendChild(sponsor);
        

        ilDistrictLogo.href = 'http://gwrra-ildistrict.com/index.html';
        ilDistrictLogo.setAttribute('target', '_blank');
        ilDistrictLogo.appendChild(Common.makeResponsivePicture('ilSeal'));
        header.appendChild(ilDistrictLogo);

        shadow.appendChild(header);
    }
}

class MainFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        const styles = document.createElement('link');
        const footer = document.createElement('footer');
        const div = document.createElement('div');
        const iconDiv = document.createElement('div');
        const textDiv = document.createElement('div');
        const copy = document.createElement('p');
        const dev = document.createElement('p');
        const devLink = document.createElement('a');
        const fbLink = document.createElement('a');
        const fbLogo = document.createElement('object');
        const emailLink = document.createElement('a');
        const emailLogo = document.createElement('object');

        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', "../css/mainFooter.css");

        copy.textContent = `\u00A9 ${new Date().getFullYear()} GWRRA Illinois Chapter Z`;
        dev.textContent = 'Web Development by ';
        devLink.href = 'https://tstark2.us';
        devLink.textContent = "Todd Stark II";

        textDiv.appendChild(copy);
        dev.appendChild(devLink);
        textDiv.appendChild(dev);
        textDiv.className = 'footerText';

        emailLink.href = 'mailto:il.chapter.z@gmail.com';
        emailLogo.setAttribute('type', 'image/svg+xml');
        emailLogo.setAttribute('data', '../img/email-outline.svg');

        emailLink.appendChild(emailLogo);

        fbLink.href = 'https://www.facebook.com/ILChapterZ';
        
        fbLogo.setAttribute('type', 'image/svg+xml');
        fbLogo.setAttribute('data', '../img/facebook.svg');

        fbLink.appendChild(fbLogo);
        fbLink.setAttribute('target', '_blank');

        iconDiv.appendChild(emailLink);
        iconDiv.appendChild(fbLink);
        iconDiv.className = 'socialIcons';

        div.appendChild(textDiv);
        div.appendChild(iconDiv);

        footer.appendChild(div);

        shadow.appendChild(styles);
        shadow.appendChild(footer);
    }    
}

class SponsorSlider extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        const styles = document.createElement('link');
        const div = document.createElement('div');
        const next = document.createElement('a');
        const first = document.createElement('a');
        const firstPicture = document.createElement('picture');
        const nextPicture = document.createElement('picture');

        styles.setAttribute('rel', 'stylesheet');
        styles.setAttribute('href', "../css/sponsorSlider.css");

        next.appendChild(nextPicture);
        next.className = 'next';

        first.appendChild(firstPicture);
        first.className = 'first';

        div.appendChild(styles);
        div.appendChild(next);
        div.appendChild(first);
        shadow.appendChild(div);
    }
}

customElements.define('main-header', MainHeader);
customElements.define('sub-header', SubHeader);
customElements.define('main-footer', MainFooter);
customElements.define('sponsor-slider', SponsorSlider);