// categories menu
const btn = document.querySelector('.categories__menu-btn');
const menuList = document.querySelector('.categories__menu-list');

btn.addEventListener('click', function () {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
})

// render categories
const categoryNav = document.querySelector('.categories__menu-list nav ul');

const renderMenuItems = (categories) => {
    categories.forEach(({name}) => {
        categoryNav.insertAdjacentHTML('beforeend', `<li><a href="#">${name}</a></li>`)
    })
}

const setActiveClassForItem = (name) => {
    categoryNav.querySelectorAll('a')
        .forEach(({ textContent,classList  }) => {
            textContent === name
                ? classList.add('active')
                : classList.remove('active')
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

const getSelectedCategory = (categories) => {
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

const initCategoriesDisplay = (categories) => {
    renderMenuItems(categories)
    renderCategoryBlocks(categories[0])
    getSelectedCategory(categories)
}

// category search
const initSearch = (categories) => {
    const searchInput = document.querySelector('.categories__search input');
    const menuItems = categoryNav.querySelectorAll('li');
    const message= categoryNav.nextElementSibling;

    searchInput.addEventListener('input', e => {
        const value = e.target.value.toLowerCase();

        const selectedItems = [...menuItems]
            .filter(item => {
                item.classList.remove('is-hidden')
                return item.textContent.toLocaleLowerCase().indexOf(value) === -1
            })
            .map(item => {
                item.classList.add('is-hidden')
                return item
            })

        selectedItems.length === categories.length
            ? message.classList.remove('d-none')
            : message.classList.add('d-none')
    })
}

const initCategories = (categories) => {
    initCategoriesDisplay(categories)
    initSearch(categories)
}

async function initApp() {
    const response = await fetch('categories.json');
    const categories = await response.json();

    initCategories(categories);
}

initApp().catch(console.log)
