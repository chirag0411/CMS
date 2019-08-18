export function notification(message, type) {
    let div;
    if (type === 'success') {
        div = document.getElementById('notification-holder');
        div.innerHTML = `<div class=" wcl-alert-popup-error alert alert-success"><strong>Success!</strong> Indicates a successful or positive action.</div>`;
    } else if (type === 'error') {
        div = document.getElementById('notification-holder');
        div.innerHTML = `<div class="wcl-alert-popup-error"><span>${message}</span><span class="closeBtn"><i class="material-icons md-18 icon-typical">clear</i></span></div>`;
    }

    setTimeout(() => {
        div.innerHTML = '';
    }, 5000);
};