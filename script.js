let open = document.getElementById('open');

open.addEventListener('click', () => {
    let links = document.getElementById('links')
    links.classList.toggle('links')
    links.classList.toggle('show')
})
