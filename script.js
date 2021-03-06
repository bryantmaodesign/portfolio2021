const toggleButton = document.getElementsByClassName ('toggle-button')[0]
const navMainLinks = document.getElementsByClassName ('nav-main__links')[0]

toggleButton.addEventListener('click', () => {
    navMainLinks.classList.toggle('active')
})