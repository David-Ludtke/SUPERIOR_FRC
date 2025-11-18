let path = document.currentScript.getAttribute('data-path'); 
const ammendto = document.getElementsByTagName('head')[0];
path = path.endsWith('/') ? path : path + '/';

const includes = [
    'anchor.css',
    'body.css',
    'button.css',
    'header.css',
    'list.css',
    'paragraph.css',
    'whatis.css',
];
let include = ['<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"></link>']; 

includes.forEach(function(item) {
    include.push('<link rel="stylesheet" href="' + path + 'css/' + item + '">');
});
ammendto.innerHTML += include.join('\n');