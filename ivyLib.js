
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

var drawerContainers = document.getElementsByClassName('filter-drawer-container');
var filterButtons = document.getElementsByClassName('filter-button-container');

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

function toggleActive(button, indicator) {
	if (indicator.getAttribute('active')) {
  	    indicator.style.backgroundColor = 'transparent';
   	    indicator.removeAttribute('active');
    }
    else {
  	    indicator.style.backgroundColor = 'red';
        indicator.setAttribute('active', 'active');
    }
};

for(var i=0; i < filterButtons.length; i++) {
	filterButtons[i].querySelector('#filter-button')
    .addEventListener("click", toggleActive
    .bind(this, filterButtons[i].querySelector('#filter-button'), 
    filterButtons[i].querySelector('#active-indicator')), false);
};