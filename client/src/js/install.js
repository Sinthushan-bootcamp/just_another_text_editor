const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // deffer event from happening until button is clicked
    
    // I have modified the style of the install button to display = "none"
    // only if the beforeinstallprompt event is triggered will the button display
    // this ensures that when istalled it will no longer be displayed
    butInstall.style.display = "block"; 
});

// trigger when the install button is clicked
// will display the prompt asking the user to install the PWA
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt(); // prompt user
    window.deferredPrompt = null;
    butInstall.style.display = "none"; // hide the install button
});

// event listener when app is already installed
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
