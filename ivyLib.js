
var drawerContainers = document.getElementsByClassName('filter-drawer-container');
var filterButtons = document.getElementsByClassName('filter-button-container');
var productList = document.getElementsByClassName("product-item");

function confirmAge() {
    
    document.getElementById('age-yes-box').addEventListener('click', function(){ confirmAge() })
    document.getElementById('continue-button').addEventListener('click', function(){ closeAgeContainer() })

    function confirmAge() {
	    if (document.getElementById('age-yes-box').getAttribute('confirmed')) {
  	        document.getElementById('age-yes-box').removeAttribute('confirmed');
            document.getElementById('yes-inner').style.display = 'none';
            document.getElementById('continue-button').style.backgroundColor = 'gray';
        }
        else {
            document.getElementById('age-yes-box').setAttribute('confirmed', 'confirmed');
            document.getElementById('yes-inner').style.display = 'flex';
  	        document.getElementById('continue-button').style.backgroundColor = 'black';
        }
	    document.getElementById('age-error-box').style.display = 'none';
    }

    function closeAgeContainer() {
	    if (document.getElementById('age-yes-box').getAttribute('confirmed')) {
   	        localStorage.setItem('age', 'confirmed');
		    document.getElementById('age-confirmation-container').style.display = 'none';
        }
        else {
  	        document.getElementById('age-error-box').style.display = 'flex';
        }
    } 

    if (!localStorage.getItem('age')) {
	    document.getElementById('age-confirmation-container').style.display = 'block';
    }
};

function changeDrawerWidth(drawerContainer, drawerButton, filterContainer) {
  var r = $.Deferred();
  setTimeout(function () {
  	if (drawerButton.getAttribute('open')) { filterContainer.style.width = '100%' }
  	else {
  		filterContainer.style.width = '0%';
    	drawerContainer.insertBefore(drawerButton, filterContainer);
  	}
 		r.resolve();
 	}, 600);
	return r;
};

function rotateButton(drawerButton) {
    var r = $.Deferred();
    setTimeout(function () {
  	if (drawerButton.getAttribute('open')) { drawerButton.style.transform = 'rotate(180deg)' }  
  	else { drawerButton.style.transform = 'rotate(360deg)' };
  	r.resolve();
  }, 200);
};

function toggleOpen(drawerContainer, drawerButton, filterContainer) {
	if (drawerButton.getAttribute('open')) { 
  	    drawerButton.animate([
  	    { opacity: '0%' },
        { transform: 'rotate(360deg)' }
		    ], {
  	    duration: 200,
  	    iterations: 1,
		    }); 
   	    filterContainer.animate([
  	    { width: '0%' },
		    ], {
  	    duration: 600,
  	    iterations: 1,
		    });
  	    drawerButton.removeAttribute('open');
	    }
        else {
  	    drawerButton.animate([
  	    { opacity: '0%' },
        { transform: 'rotate(180deg)' }
		    ], {
  	    duration: 200,
  	    iterations: 1,
		    }); 
        filterContainer.animate([
  	    { width: '100%' },
		    ], {
  	    duration: 600,
  	    iterations: 1,
		    });
        drawerButton.setAttribute('open', 'open');
        drawerContainer.insertBefore(filterContainer, drawerButton);
	}
	changeDrawerWidth(drawerContainer, drawerButton, filterContainer);
	rotateButton(drawerButton);
};

for (var i = 0; i < drawerContainers.length; i++) {
	drawerContainers[i].querySelector('#open-drawer-button')
    .addEventListener('click', toggleOpen
    .bind(this, 
    drawerContainers[i], 
    drawerContainers[i].querySelector('#open-drawer-button'),
    drawerContainers[i].querySelector('#filter-buttons-container')), false); 
};

for (var i = 0; i < productList.length; i++) {
    var product = {
        primaryImage: productList[i].querySelector('.open-button').style.backgroundImage,
        secondaryImage: productList[i].querySelector('.second-product-image').style.backgroundImage,
        effectIcon: productList[i].querySelector('.effect-icon-container').style.backgroundImage,
        name: productList[i].querySelector('#product-name').textContent,
        brand: productList[i].querySelector('#brand-name').textContent,
        storeNames: productList[i].querySelector('#store-names').textContent,
        price: productList[i].querySelector('#product-price').textContent,
        description: productList[i].querySelector('#product-description').textContent,
        quantity: productList[i].querySelector('#product-quantity').textContent,
        moodNames: productList[i].querySelector('#mood-names').textContent,
        currentProductButton: productList[i].querySelector('#current-product-button').cloneNode(true),
        addToCartButton: productList[i].querySelector('#add-to-cart-button').cloneNode(true)
    }
    productList[i].querySelector('.open-button').addEventListener('click', openModal.bind(this, product));
};

function openModal(product) {
    var modal = document.getElementById('buy-modal');
    modal.querySelector('#modal-slide-one').style.backgroundImage = product.primaryImage;
    modal.querySelector('#modal-slide-two').style.backgroundImage = product.secondaryImage;
    modal.querySelector('#modal-product-brand').textContent = product.brand;
    modal.querySelector('#modal-product-name').textContent = product.name;
    modal.querySelector('#modal-product-price').textContent = product.price;
    modal.querySelector('#modal-product-description').textContent = product.description;
    modal.querySelector('#modal-product-quantity').textContent = product.quantity;
    modal.querySelector('#modal-product-effect-icon').style.backgroundImage = product.effectIcon;
    modal.querySelector('#product-page-button').replaceChild(product.currentProductButton, modal.querySelector('#product-page-button').childNodes[0]);
    filterMoods(modal.querySelector('#modal-mood-icons-list').children, product.moodNames);
    modal.querySelector('#add-to-cart-container').replaceChild(product.addToCartButton, modal.querySelector('#add-to-cart-container').childNodes[0]);
    document.getElementById("modal-wrapper").style.display = "flex";
    document.getElementById("buy-modal").style.display = "flex";
};

function filterMoods(list, filters) {
    for (var i = 0; i < list.length; i++) {
        list[i].style.display = 'flex';
        if (!filters.includes(list[i].querySelector('#name').textContent)) {
            list[i].style.display = 'none';
        }
    }
}