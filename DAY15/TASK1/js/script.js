const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const recipesContainer = document.getElementById('recipesContainer');
const loading = document.getElementById('loading');
const searchBadge = document.getElementById('searchBadge');
const badgeText = document.getElementById('badgeText');
const favoritesCount = document.getElementById('favoritesCount');
const favoritesBtn = document.getElementById('favoritesBtn');
const homeBtn = document.getElementById('homeBtn');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentRecipes = [];
searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const query = searchInput.value.trim();
    if (query) {
        getRecipes(query);
    }
});
favoritesBtn.addEventListener('click', function () {
    showFavorites();
})
homeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loadLastSearch();
})
document.addEventListener('DOMContentLoaded', function () {
    updateFavoritesCount();
    loadLastSearch();
});
async function getRecipes(query) {
    showLoading(true);
    recipesContainer.innerHTML = '';
    showSearchBadge(query);
    try {
        const response = await fetch(`${API_URL}?search=${query}`);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const recipes = data.data.recipes;
        currentRecipes = recipes;
        localStorage.setItem('lastSearch', query);
        if (recipes.length === 0) {
            showMessage('No recipes found.', 'fa-face-sad-tear');
        } else {
            displayRecipes(recipes);
        }
    } catch (error) {
        console.log(error);
        showMessage('Something went wrong. Try again.', 'fa-circle-exclamation');
    }
    showLoading(false);
}
function displayRecipes(recipes) {
    let box = '';

    recipes.forEach(recipe => {
        const isFavorite = favorites.some(item => item.id === recipe.id);
        box += `
            <div class="col-sm-6 col-lg-4 col-xl-3">
                <div class="card h-100 bg-dark border-secondary shadow">
                    <img
                        src="${recipe.image_url}"
                        class="card-img-top"
                        alt="${recipe.title}"
                        style="height: 200px; object-fit: cover;"
                    >
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-warning text-dark align-self-start mb-2">
                            ${recipe.publisher}
                        </span>
                        <h5 class="card-title text-light">
                            ${recipe.title}
                        </h5>
                        <div class="mt-auto pt-3 d-flex justify-content-between align-items-center">
                            <button
                                class="btn btn-outline-danger rounded-circle"
                                onclick="toggleFavorite(
                                    '${recipe.id}',
                                    '${escapeText(recipe.title)}',
                                    '${recipe.image_url}',
                                    '${escapeText(recipe.publisher)}'
                                )"
                            >
                                <i class="fa-solid fa-heart ${isFavorite ? 'text-danger' : 'text-secondary'}"></i>
                            </button>
                            <a
                                href="https://forkify-api.herokuapp.com/v2/recipes/${recipe.id}"
                                target="_blank"
                                class="btn btn-outline-warning rounded-pill"
                            >
                                Details
                                <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
                            </a>
                            </div>
                    </div>
                </div>
            </div>`
        ;
    });

    recipesContainer.innerHTML = box;
}
function toggleFavorite(id, title, image, publisher) {
    const index = favorites.findIndex(item => item.id === id);

    if (index === -1) {
        favorites.push({
            id: id,
            title: title,
            image_url: image,
            publisher: publisher
        });
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount()
    if (searchBadge.classList.contains('d-none')) {
        showFavorites();
    } else {
        displayRecipes(currentRecipes);
    }
}

function showFavorites() {
    searchBadge.classList.add('d-none');

    if (favorites.length === 0) {
        showMessage('You have no favorite recipes yet.', 'fa-heart-crack');
        return;
    }

    displayRecipes(favorites);
}

function updateFavoritesCount() {
    favoritesCount.textContent = favorites.length;
}

function loadLastSearch() {
    const lastSearch = localStorage.getItem('lastSearch') || 'pizza';

    searchInput.value = lastSearch;
    getRecipes(lastSearch);
}

function showLoading(show) {
    loading.classList.toggle('d-none', !show);
}

function showSearchBadge(query) {
    badgeText.textContent = query;
    searchBadge.classList.remove('d-none');
}

function showMessage(message, icon) {
    recipesContainer.innerHTML =` 
        <div class="col-12 text-center py-5">
            <i class="fa-solid ${icon} text-warning fs-1 mb-3"></i>
            <h4>${message}</h4>
        </div>`
    ;
}

function escapeText(text) {
    return text.replace(/'/g, "\\'");
}