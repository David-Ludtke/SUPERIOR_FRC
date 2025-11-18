Array.from(document.getElementsByTagName('button'))[0].addEventListener('click', function() {
    window.location.href = path + 'html/home.html';
});
const functions = document.getElementsByClassName('function');
const namespaces = document.getElementsByClassName('namespace');
const classes = document.getElementsByClassName('class');
Array.from(functions).forEach((functionn, _) => {
    functionn.setAttribute('href', path + 'html/whatis/afunction.html');
});
Array.from(namespaces).forEach((namespace, _) => {
    namespace.setAttribute('href', path + 'html/whatis/anamespace.html');
});
Array.from(classes).forEach((classs, _) => {
    classs.setAttribute('href',  path + 'html/whatis/aclass.html');
});