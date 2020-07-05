import * as Common from './commonMethods.js';

class MainHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const header = document.createElement('header');
        const div = document.createElement('div');
        const menuButton = document.createElement('button');
        const menuIcon = document.createElement('object');
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
            {href: "mailto:il.chapter.z@gmail.com", title: "Contact Us"},
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
                position:relative;
            }

            #menuButton {
                display:none;
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

            nav a[href="#close"] {
                display:none;
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

            @media (max-width: 768px) {
                header div {
                    grid-template-columns: 120px 1fr 40px;
                    width:90vw;
                }
                
                header div img {
                    height:120px;
                    transform:translateY(0);
                }
                
                #menuButton {
                    display:flex;
                    background-color:transparent;
                    border:0;
                    flex-direction:column;
                    justify-content:center;
                }

                #menuButton object {
                    pointer-events:none;
                }

                nav {
                    position:fixed;
                    right:0;
                    top:0;
                    background-color:var(--purple);
                    width:0;
                    flex-direction:column;
                    padding:0;
                    height:100vh;
                    overflow:hidden;
                    transition: width 1s padding 1s;
                }

                nav a[href="#close"] {
                    display:block;
                    color:var(--yellow);
                }

                nav.open {
                    width:33vw;
                    padding:6px 12px;
                    border-left:5px solid var(--yellow);
                }

                nav a {
                    margin-bottom:20px;
                    font-size:1.5em;
                }

                h1 {
                    font-size:2em;
                    white-space:nowrap;
                    text-align:center;
                }
            }

            @media (max-width: 576px) {
                header div {
                    grid-template-columns: 75px 1fr 40px;
                }

                header div img {
                    height:75px;
                }

                h1 {
                    font-size:1em;
                }

                nav.open {
                    width:50vw;
                }
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

        sponsor.id = "sponsors"
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

            @media (max-width: 768px) {
                header {
                    grid-template-columns: 120px 1fr 120px;
                    width:90vw;
                }

                header img {
                    height:120px;
                }
            }

            @media (max-width: 576px) {
                header {
                    grid-template-columns: 75px 1fr 75px;
                }

                header img {
                    height:75px;
                }
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
        const iconDiv = document.createElement('div');
        const copy = document.createElement('p');
        const fbLink = document.createElement('a');
        const fbLogo = document.createElement('object');
        const emailLink = document.createElement('a');
        const emailLogo = document.createElement('object');

        copy.textContent = `\u00A9 ${new Date().getFullYear()} GWRRA Illinois Chapter Z`;

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

        div.appendChild(copy);
        div.appendChild(iconDiv);

        footer.appendChild(div);

        style.textContent = `
            footer {
                background-color:var(--purple);
                height:50px;
                width:100vw;
            }
            
            footer > div {
                width:75vw;
                height:100%;
                margin:0 auto;
                display:flex;
                justify-content:space-between;
                align-items:center;
                color:var(--white);
            }
            
            footer object {
                pointer-events:none;
                height:2em;
            }

            footer .socialIcons {
                display:flex;
                align-items:center;
                justify-content:space-between;
                width:80px;
            }

            @media (max-width: 768px) {
                footer div {
                    width:90vw;
                }
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(footer);
    }

    
    
}



customElements.define('main-header', MainHeader);
customElements.define('sub-header', SubHeader);
customElements.define('main-footer', MainFooter);