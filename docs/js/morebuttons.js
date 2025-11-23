(() => {
    const anchor = document.currentScript.getAttribute('data-anchor').split(';');
    const buttons = Array.from(document.getElementsByTagName('button'));
    if (document.getElementById('no-home-button') === null) {buttons.shift();}
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            window.location.href = anchor[index];
        });
    });
})();