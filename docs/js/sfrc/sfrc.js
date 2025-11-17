var links = ['../home.html'];
const buttons = document.getElementsByClassName('nav-button');
const functions = document.getElementsByClassName('function');
const namespaces = document.getElementsByClassName('namespace');
const classes = document.getElementsByClassName('class');
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', function() {
        window.location.href = links[index];
    });
});
Array.from(functions).forEach((functionn, _) => {
    functionn.setAttribute('href', '../whatis/afunction.html');
});
Array.from(namespaces).forEach((namespace, _) => {
    namespace.setAttribute('href', '../whatis/anamespace.html');
});
Array.from(classes).forEach((classs, _) => {
    classs.setAttribute('href', '../whatis/aclass.html');
});