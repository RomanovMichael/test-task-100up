const pagesMap = {
    home: 'page-home',
    favourites: 'page-favourites'
};

let currentPage;

function openPage(name) {
    const selector = pagesMap[name];
    const element = document.querySelector(`.${selector}`);

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('d-none'));

    currentPage = element;
    currentPage.classList.remove('d-none');
}

const locationResolver = (location) => {
    switch (location) {
        case "#/favourites":
            openPage('favourites')
            break
        case "#/":
            openPage('home')
            break
    }
}

window.addEventListener('load', () => {
    let hash = window.location.hash
    locationResolver(hash)
})
