var links = []; //list the path's of the buttons in order
const buttons = document.getElementsByClassName('nav-button'); //get's all the buttons with nav-button class
const functions = document.getElementsByClassName('function'); //get all things want to be functions
const namespaces = document.getElementsByClassName('namespace'); //get all things want to be namespaces
const classes = document.getElementsByClassName('class'); //get all things want to be classes
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', function() {
        window.location.href = links[index];  //iteratings over all buttons and adds the functionallity
    });
});
Array.from(functions).forEach((functionn, _) => {
    functionn.setAttribute('href', './whatis/afunction.html'); //replace the dot with the nessary path to get to the html folder
});
Array.from(namespaces).forEach((namespace, _) => {
    namespace.setAttribute('href', './whatis/anamespace.html'); //replace the dot with the nessary path to get to the html folder
});
Array.from(classes).forEach((classs, _) => {
    classs.setAttribute('href', './whatis/class.html'); //replace the dot with the nessary path to get to the html folder
});