export function makeNavLink(linkObj) {
    const link = document.createElement('a');
    link.href = linkObj.href;
    link.textContent = linkObj.title;

    if(linkObj.options !== undefined) {
       for(const option in linkObj.options) {
           link.setAttribute(option, linkObj.options[option]);
       }
    }

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

export function makeResponsivePicture(name) {
    const pic = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');
    let pngString = `img/${name}@2x.png 2x, img/${name}@3x.png 3x`;
    let webpString = `img/${name}@1x.webp 1x, img/${name}@2x.webp 2x, img/${name}@3x.webp 3x`;
    
    source.setAttribute('srcset', webpString);
    source.setAttribute('type', 'image/webp');
    
    img.setAttribute('src', `img/${name}@1x.png`);
    img.setAttribute('srcset', pngString);

    pic.appendChild(source);
    pic.appendChild(img);
    return pic;
}

export function makeSponsorPicture(sponsor) {
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');
    let pngString = '';
    let webpString = '';
    let oneXModifier = '';

    if(sponsor.resolutions.length > 1) {
        for(const resolution of sponsor.resolutions) {
            oneXModifier = '@1x';
            if(resolution > 1) {
                pngString += `../img/sponsors/${sponsor.logo}@${resolution}x.png ${resolution}x, `;
            }
            webpString += `../img/sponsors/${sponsor.logo}@${resolution}x.webp ${resolution}x, `
        }
    } else {
        pngString = `../img/sponsors/${sponsor.logo}.png`;
        webpString = `../img/sponsors/${sponsor.logo}.webp`;
    }
    source.setAttribute('srcset', webpString);
    source.setAttribute('type', 'image/webp');

    img.setAttribute('src', `../img/sponsors/${sponsor.logo}${oneXModifier}.png`);
    img.setAttribute('alt', sponsor.name);
    img.setAttribute('srcset', pngString);

    picture.appendChild(source);
    picture.appendChild(img);
    return picture;
}

export function makeSponsorAd(sponsor) {
    const link = document.createElement('a');
    const picture = document.createElement('picture');
    const source = document.createElement('source');
    const img = document.createElement('img');
    let pngString = '';
    let webpString = '';
    let oneXModifier = '';

    if(sponsor.website !== null) {
        link.href = sponsor.website;
        link.setAttribute('target', '_blank');
    }
    
    if(sponsor.resolutions.length > 1) {
        for(const resolution of sponsor.resolutions) {
            oneXModifier = '@1x';
            if(resolution > 1) {
                pngString += `../img/sponsors/${sponsor.logo}@${resolution}x.png ${resolution}x, `;
            }
            webpString += `../img/sponsors/${sponsor.logo}@${resolution}x.webp ${resolution}x, `
        }
    } else {
        pngString = `../img/sponsors/${sponsor.logo}.png`;
        webpString = `../img/sponsors/${sponsor.logo}.webp`;
    }
    source.setAttribute('srcset', webpString);
    source.setAttribute('type', 'image/webp');

    img.setAttribute('src', `../img/sponsors/${sponsor.logo}${oneXModifier}.png`);
    img.setAttribute('alt', sponsor.name);
    img.setAttribute('srcset', pngString);

    picture.appendChild(source);
    picture.appendChild(img);
    link.appendChild(picture);
    return link;
}

export function makeMapLink(location) {
    return encodeURI(`https://www.google.com/maps/search/?api=1&query=${location}`);
}