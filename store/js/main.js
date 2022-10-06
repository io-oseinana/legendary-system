const btn = document.querySelector('#btn'),
    sidebar = document.querySelector('.sidebar'),
    addItemBtn = document.querySelector('#addItemBtn'),
    cartGry = document.querySelector('.item-container'),
    form = document.querySelector('.form'),
    form2 = document.querySelector('.form2'),
    proAdd = document.querySelector('#btnAdd'),
    openForm = document.querySelector('.cart-item');

btn.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        cartGry.classList.remove('active');
        form.classList.remove('active');
    } else {
        sidebar.classList.toggle('active');
    }
});

addItemBtn.addEventListener('click', () => {
    if (cartGry.classList.contains('active')) {
        addItemBtn.classList.remove('active');
        cartGry.classList.remove('active');
        form.classList.remove('active');
    } else {
        addItemBtn.classList.toggle('active');
        cartGry.classList.add('active');
    }
});


proAdd.addEventListener('click', () => {
    if (openForm.classList.contains('active')) {
        openForm.classList.remove('active');
        form.classList.remove('active');
    } else {
        openForm.classList.add('active');
        form.classList.add('active');
    }
});

