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

            source.setAttribute('srcset', `../img/staffPhotos/${member.photo}.webp`);
            img.setAttribute('src', `../img/staffPhotos/${member.photo}.png`);
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
        email: "cd+il.chapter.z@gmail.com",
        photo: "kingd_cropped"
    },
    {
        title: "Assistant Chapter Director",
        name: "Gail Onken",
        email: "acd+il.chapter.z@gmail.com",
        photo: "onkeng_cropped"
    },
    {
        title: "Ride Coordinator",
        name: "Brian King",
        email: "rc+il.chapter.z@gmail.com",
        photo: "kingb_cropped"
    },
    {
        title: "Treasurer",
        name: "Rhonda Morris",
        email: "treasurer+il.chapter.z@gmail.com",
        photo: "morrisr_cropped"
    }
];