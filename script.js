function switchCategory(categoryName) {
    const categories = document.querySelectorAll('.category-content');
    categories.forEach(category => {
        category.style.display = category.id === `${categoryName.toLowerCase()}-content` ? 'block' : 'none';
    });
}

