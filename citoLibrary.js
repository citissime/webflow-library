
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
}