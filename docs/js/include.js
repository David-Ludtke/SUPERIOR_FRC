(() => {
    const fullpath = document.currentScript.getAttribute('src');
    let path = fullpath.slice(0, fullpath.indexOf('j') - 1);
    const fragment = document.createDocumentFragment();
    const includeHref = [
        'anchor.css',
        'body.css',
        'button.css',
        'codeblocks.css',
        'header.css',
        'list.css',
        'paragraph.css',
    ];
    includeHref.forEach((val, _) => {
        const nelement = document.createElement('link');
        nelement.rel = 'stylesheet';
        nelement.href = `${path}/css/${val}`;
        fragment.appendChild(nelement);
    });
    const viewport = document.createElement('meta');
    const favicon = document.createElement('link');
    const font = document.createElement('link');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    fragment.appendChild(viewport);
    font.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap';
    font.rel = 'stylesheet';
    fragment.appendChild(font);
    favicon.rel = 'icon';
    favicon.href = `${path}/img/SUPERIOR FRC.png`;
    favicon.type = 'image/icon';
    document.head.appendChild(fragment);
    document.documentElement.lang = 'en';
    if (document.getElementById('no-home-button') === null) {
        const button = document.createElement('button');
        button.style.marginLeft = '5px';
        button.textContent = 'Home';
        document.body.appendChild(button);
        button.addEventListener('click', function() {
            window.location.href = path + '/html/home.html';
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById("no-items") !== null) {
            document.body.classList.add('display');
            return;
        } //exclude pages that don't contain anything and/or don't want to be included
        const list = document.querySelector('ul');
        const elements = Array.from(document.getElementsByTagName('li'));
        const frag = document.createElement('ul');
        elements.forEach((node, _) => {
            const classtype = node.getAttribute('class');
            const listitem = document.createElement('li');
            const type = document.createElement('a');
            const space = document.createTextNode(' ');
            const name = document.createElement('a');
            type.href = `${path}/html/whatis/a${classtype}.html`;
            type.className = classtype;
            type.textContent = classtype;
            name.className = 'signiture';
            if (classtype === 'function') {
                const replace = node.textContent.replaceAll('*', '(ptr)');
                name.href = `./${replace}.html`;
            }
            else {
                name.href = `./${node.textContent}/${node.textContent}.html`;
            }
            name.textContent = node.textContent;
            listitem.appendChild(type);
            listitem.appendChild(space);
            listitem.appendChild(name);
            frag.appendChild(listitem);
        });
        list.replaceWith(frag);
        document.body.classList.add('display');
    });
})()