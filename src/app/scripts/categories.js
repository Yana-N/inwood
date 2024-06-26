// categories menu
const btn = document.querySelector('.categories__menu-btn');
const menuList = document.querySelector('.categories__menu-list');

btn.addEventListener('click', function () {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
})

// render categories
async function fetchData(url) {
    let response = await fetch(url);
    return await response.json();
}

const categories = await fetchData('categories.json');

const categoryNav = document.querySelector('.categories__menu-list nav ul');

const renderMenuItems = () => {
    categories.forEach(({name}) => {
        categoryNav.insertAdjacentHTML('beforeend', `<li><a href="#">${name}</a></li>`)
    })
}

const getCategoryBlockTemplate = (imageURL, link, name) => {
    return `
        <div class="category-card">
        <div class="category-card__img">
          <img src="${imageURL}" alt="${name}">
        </div>
        <div class="category-card__overlay">
          <p>${name}</p>
          <a href="${link}" class="btn btn--secondary btn--xs">Explore</a>
        </div>
        </div>
    `
}

const renderCategoryBlocks = ({ name, elements }) => {
    const categoriesWrapper = document.querySelector('.categories__items');

    categoriesWrapper.innerHTML = ''
    elements.forEach(({ imageURL, link }) => {
        const block = getCategoryBlockTemplate(imageURL, link, name)
        categoriesWrapper.insertAdjacentHTML('beforeend', block)
    });

    setActiveClassForItem(name)
}

const setActiveClassForItem = (name) => {
    categoryNav.querySelectorAll('a')
        .forEach(({ textContent,classList  }) => {
            textContent === name
                ? classList.add('active')
                : classList.remove('active')
        })
}

const getSelectedCategory = () => {
    categoryNav.addEventListener('click', e => {
        e.preventDefault()
        const clickedCategory = e.target.closest('a')
        if (!clickedCategory) return

        const clickedItemText = clickedCategory.textContent
        const selectedElement = categories.filter(({name}) => name === clickedItemText)

        setActiveClassForItem(selectedElement[0].name)
        renderCategoryBlocks(selectedElement[0])
    })
}

renderMenuItems()
renderCategoryBlocks(categories[0])
getSelectedCategory()

// category search
const searchInput = document.querySelector('.categories__search input');
const menuItems = categoryNav.querySelectorAll('li');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();

    [...menuItems]
        .filter(item => {
            item.classList.remove('is-hidden')
            return item.textContent.toLocaleLowerCase().indexOf(value) === -1
        })
        .forEach(item => item.classList.add('is-hidden'))
})
