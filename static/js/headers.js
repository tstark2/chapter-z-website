import * as Common from './commonMethods.js';

class MainHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const header = document.createElement('header');
        const div = document.createElement('div');
        const style = document.createElement('style');

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

        // create nav
        const nav = document.createElement('nav');
        const links = [
            {href: "index.html", title: "Home"},
            {href: "#officers", title: "Officers"},
            {href: "#photos", title:"Photos"},
            {href: "#newsletter", title: "Newsletter"},
            {href: "#history", title: "History"},
            {href: "https://calendar.google.com/calendar/embed?src=il.chapter.z%40gmail.com&ctz=America%2FChicago", title: "Calendar"},
            {href: "#contact", title: "Contact Us"}
        ];

        for(const link of links) {
            nav.appendChild(Common.makeNavLink(link));
        }

        div.appendChild(nav);
        header.appendChild(div);

        // add styling
        style.textContent = `
            header {
                background-color:var(--purple);
            }
            
            header div {
                width:75vw;
                margin:0 auto;
                display:grid;
                grid-template-columns:150px 1fr;
                gap:0 20px;
            }
            
            nav {
                grid-column-start: 2;
                display:flex;
                justify-content:flex-start;
                align-items:baseline;
            }
            
            nav a {
                color:var(--white);
                text-decoration:none;
                margin-right:20px;
            }
            
            nav a:hover {
                color:var(--yellow);
            }
            
            header div img {
                height:150px;
                width:auto;
                transform:translateY(10px);
            }
            
            h1 {
                font-family:var(--displayFont);
                color:var(--white);
                margin:0;
                display:flex;
                flex-direction:column;
                justify-content:center;
                font-size:3em;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(header);
    }
}

class SubHeader extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({mode: 'open'});
        const style = document.createElement('style');
        const header = document.createElement('header');
        const gwrraLogo = document.createElement('a');
        const sponsor = document.createElement('div');
        const sponsorText = document.createElement('p');
        const ilDistrictLogo = document.createElement('a');

        gwrraLogo.href = 'http://gwrra.org/';
        gwrraLogo.setAttribute('target', '_blank');
        gwrraLogo.appendChild(Common.makePicture('img/gwrraLogo'));
        header.appendChild(gwrraLogo);

        sponsorText.textContent = 'Sponsor Ad Here';
        sponsor.appendChild(sponsorText);
        header.appendChild(sponsor);
        

        ilDistrictLogo.href = 'http://gwrra-ildistrict.com/index.html';
        ilDistrictLogo.setAttribute('target', '_blank');
        ilDistrictLogo.appendChild(Common.makePicture('img/illinoisSeal'));
        header.appendChild(ilDistrictLogo);

        style.textContent = `
            header {
                width:75vw;
                margin: 0 auto;
                display:grid;
                grid-template-columns:150px 1fr 150px;
                gap:5px;
                padding:6px 12px;
            }
            
            header img {
                height:150px;
                width:auto;
            }
            
            div {
                display:flex;
                align-items:center;
                justify-content:center;
                width:100%;
                height:100%;
                background-color:#ccc;
                border:2px dashed #000;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(header);
    }
}

class MainFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        const style = document.createElement('style');
        const footer = document.createElement('footer');
        const div = document.createElement('div');
        const copy = document.createElement('p');
        const fbLink = document.createElement('a');
        const fbLogo = document.createElement('svg');

        copy.textContent = `\u00A9 ${new Date().getFullYear()} GWRRA Illinois Chapter Z`;

        fbLink.href = 'https://www.facebook.com/ILChapterZ';
        fbLogo.className = 'fab fa-facebook-square';

        fbLink.appendChild(fbLogo);
        fbLink.setAttribute('target', '_blank');

        div.appendChild(copy);
        div.appendChild(fbLink);

        footer.appendChild(div);

        style.textContent = `
            footer {
                background-color:var(--purple);
                height:50px;
                width:100vw;
            }
            
            footer div {
                width:75vw;
                height:100%;
                margin:0 auto;
                display:flex;
                justify-content:space-between;
                align-items:center;
                color:var(--white);
            }
            
            footer a {
                color:var(--white);
                font-size:2em;
            }
            
            footer a:hover {
                color:var(--yellow);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(footer);
    }

    
    
}



customElements.define('main-header', MainHeader);
customElements.define('sub-header', SubHeader);
customElements.define('main-footer', MainFooter);