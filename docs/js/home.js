const links = ['rules.html', './sfrc/sfrc.html', './howto/home.html'];
const buttons = document.getElementsByClassName('nav-button');
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', function() {
        window.location.href = links[index];
    });
});