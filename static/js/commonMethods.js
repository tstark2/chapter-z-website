export function makeNavLink(linkObj) {
    const link = document.createElement('a');
    link.href = linkObj.href;
    link.textContent = linkObj.title;
    return link;
}

export function makePicture(path) {
    const pic = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');

    source.setAttribute('srcset', `${path}.webp`);
    source.setAttribute('type', 'image/webp');
    pic.appendChild(source);

    img.src = `${path}.png`;

    pic.appendChild(img);

    return pic;
}