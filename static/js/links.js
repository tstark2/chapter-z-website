document.addEventListener('DOMContentLoaded', () => {

    if ('content' in document.createElement('template')) {
        const template = document.getElementById('linkTemplate');
        const container = document.getElementById('links');

        for(const link of links) {
            const el = template.content.cloneNode(true);
            const a = el.querySelector('a');
            const picture = el.querySelector('picture');
            const img = picture.querySelector('img');
            const p = el.querySelector('p');
            a.href = link.href;

            picture.querySelector('source').setAttribute('srcset', makeSourceString(link, 'webp'));
            img.setAttribute('src', `img/${link.picture}@1x.png`);
            img.setAttribute('alt', link.title);
            img.setAttribute('srcset', makeSourceString(link, 'png'));

            p.textContent = link.title;

            container.appendChild(el);
        }

    }
});

function makeSourceString(item, type) {
    let string = '';
    for(const res of item.resolutions) {
        string += `img/${item.picture}@${res}x.${type} ${res}x, `;
    }
    return string;
}

const links = [
    {
        title: "Motorist Awareness Program",
        href: "https://map-gwrra.org",
        picture: "map",
        resolutions: [1,2]
    },
    {
        title: "Membership Enhancement Program",
        href: "https://gwrramep.org",
        picture: "mep",
        resolutions: [1,2,3]
    },
    {
        title: "Groupworks",
        href: "https://app.groupworks.com",
        picture: "groupworks",
        resolutions: [1,2,3]
    },
    {
        title: "Wing Ding",
        href: "https://wing-ding.org",
        picture: "wingDing",
        resolutions: [1,2]
    },
    {
        title: "GWRRA National Site",
        href: "https://gwrra.org",
        picture: "gwrraSeal",
        resolutions: [1,2,3]
    },
    {
        title: "GWRRA Illinois District",
        href: "https://gwrra-ildistrict.com",
        picture: "ilSeal",
        resolutions: [1,2,3]
    },
    {
        title: "GWRRA Store",
        href: "https://store.gwrra.org",
        picture: 'store',
        resolutions: [1,2,3]
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/ILChapterZ",
        picture: "fb",
        resolutions: [1,2,3]
    },
    {
        title: "GWRRA University",
        href: "https://gwrradot.com",
        picture: "gwrraUniversity",
        resolutions: [1,2,3]
    }
]