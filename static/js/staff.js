document.addEventListener("DOMContentLoaded", () => {
    if ('content' in document.createElement('template')) {
        const template = document.getElementById('staffTemplate');
        const container = document.getElementById('staffContainer');

        for(const member of staff) {
            const div = template.content.cloneNode(true);
            const name = div.querySelector('.name');
            const picture = div.querySelector('picture');
            const img = picture.querySelector('img');
            const source = picture.querySelector('source');
            let pngString = `img/staffPhotos/${member.photo}@2x.png 2x, img/staffPhotos/${member.photo}@3x.png 3x`;
            let webpString = `img/staffPhotos/${member.photo}@1x.webp 1x, img/staffPhotos/${member.photo}@2x.webp 2x, img/staffPhotos/${member.photo}@3x.webp 3x`;

            source.setAttribute('srcset', webpString);
            img.setAttribute('src', `img/staffPhotos/${member.photo}@1x.png`);
            img.setAttribute('srcset', pngString);
            img.setAttribute('alt', member.name);
            div.querySelector('.title').textContent = member.title;
            div.querySelector('.name').textContent = member.name;
            name.href = `mailto:${member.email}`;
            name.textContent = member.name;
            container.appendChild(div);
            
        }

    }
});

const staff = [
    {
        title: "Chapter Director",
        name: "Debbie King",
        email: "cd@il-chapter-z.org",
        photo: "Deb-Head-on-Seal"
    },
    {
        title: "Assistant Chapter Director",
        name: "Gail Onken",
        email: "acd@il-chapter-z.org",
        photo: "Gail-Head-on-Seal"
    },
    {
        title: "Treasurer",
        name: "Rhonda Morris",
        email: "treasurer@il-chapter-z.org",
        photo: "Rhonda-Head-on-Seal"
    },
    {
        title: "Ride Coordinator",
        name: "Brian King",
        email: "ridered@il-chapter-z.org",
        photo: "Brian-Head-on-Seal"
    },
    {
        title: "M.A.P. Coordinator",
        name: "Rich Sledgister",
        email: "map@gwrra-ildistrict.org",
        photo: "Rich_S-Head-on-MAP_Seal"
    },
    {
        title: "M.E.P. Coordinator",
        name: "John & Julie Nixon",
        email: "mec@il-chapter-z.org",
        photo: "John_Julie-on-MEC_Seal"
    },
    {
        title: "Assistant Ride Coordinator",
        name: "Rich Morris",
        email: "arc@il-chapter-z.org",
        photo: "Rich_M-Head-on-Seal"
    },
    {
        title: "Newsletter Editor",
        name: "Randy House",
        email: "newsletter@il-chapter-z.org",
        photo: "Randy-Head-on-Seal"
    },
    {
        title: "Sunshine",
        name: "Melody Sledgister",
        email: "sunshine@il-chapter-z.org",
        photo: "Melody_S-Head-on-Seal"
    },
    {
        title: "Couple of the Year",
        name: "John & Julie Nixon",
        email: "coy@il-chapter-z.org",
        photo: "John_Julie-on-Seal"
    }
];