var path;
{let fullpath = document.currentScript.getAttribute('src');
const index = fullpath.indexOf('j');
if (index !== -1) {
    path = fullpath.slice(0, index);
}
let fragment = document.createDocumentFragment();
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
    let nelement = document.createElement('link');
    nelement.setAttribute('rel', 'stylesheet');
    nelement.setAttribute('href', `${path}css/${val}`); 
    fragment.appendChild(nelement);
});
let viewport = document.createElement('meta');
let favicon = document.createElement('link');
let font = document.createElement('link');
viewport.setAttribute('name', 'viewport');
viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
fragment.appendChild(viewport);
font.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
font.setAttribute('rel', 'stylesheet');
fragment.appendChild(font);
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('href', `${path}img/SUPERIOR FRC.png`);
favicon.setAttribute('type', 'image/png');
document.head.appendChild(fragment);
document.head.setAttribute('lang', 'en');
if (document.getElementById('no-home-button') == null) {
    let button = document.createElement('button');
    button.setAttribute('class', 'tight');
    button.setAttribute('style', 'margin-left: 5px');
    button.textContent = 'Home';
    document.body.appendChild(button);
    button.addEventListener('click', function() {
        window.location.href = path + 'html/home.html';
    });
}
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById("no-items") != null) {return;} //exclude pages that 
    // don't contain anything and/or don't want to be included
    let list = document.getElementsByTagName('ul').item(0);
    let elements = Array.from(document.getElementsByTagName('li'));
    let frag = document.createElement('ul');
    elements.forEach((node, _) => {
        let classtype = node.getAttribute('class');
        let listitem = document.createElement('li');
        let type = document.createElement('a');
        let space = document.createTextNode(' ');
        let name = document.createElement('a');
        type.setAttribute('href', `${path}html/whatis/a${classtype}.html`);
        type.setAttribute('class', classtype);
        type.textContent = classtype;
        name.setAttribute('class', 'signiture');
        name.setAttribute('href', node.getAttribute('href'));
        name.textContent = node.textContent;
        listitem.appendChild(type);
        listitem.appendChild(space);
        listitem.appendChild(name);
        frag.appendChild(listitem);
    });
    list.replaceWith(frag);
});}