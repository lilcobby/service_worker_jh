const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', (event) => {
    console.log (event);
    event.preventDefault();
    window.deferredPrompt = event;

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async (event) => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
console.log(`successfull installation of  ${event}`)
});
