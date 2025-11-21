let path = document.currentScript.getAttribute('data-path'); 
const ammendto = document.getElementsByTagName('head')[0];
const bodyammendto = document.getElementsByTagName('body')[0];
path = path.endsWith('/') ? path : path + '/';
const includes = [
    'anchor.css',
    'body.css',
    'button.css',
    'codeblocks.css',
    'header.css',
    'list.css',
    'paragragh.css',
];
let include = [
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">',
    `<link rel="icon" href="${path}img/SUPERIOR FRC.png" type="image/png">`
]; 

includes.forEach(function(item) {
    include.push('<link rel="stylesheet" href="' + path + 'css/' + item + '">');
});
ammendto.innerHTML += include.join('\n');
bodyammendto.innerHTML += '<button class="tight" style="margin-left: 5px;">Home</button>';