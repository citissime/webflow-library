
function filterAreas(city, areaContainers, filteredAreasContainer, areaCity) {

    var filteredAreas = [];
    var areas = document.getElementsByClassName(areaContainers);
    var filteredAreasContainer = document.getElementById(filteredAreasContainer);
    var city = document.getElementById(city);

    for (var i = 0; i < areas.length; i++) {
        if (areas[i].querySelector(areaCity).innerHTML != city) {
            areas[i].style.display = 'hidden';
        }
        else {
            filteredAreas.push(areas[i]);
        }
    }

    for (var i = 0; i < filteredAreas.length; i++) {
        filteredAreasContainer.appendChild(filteredAreas[i]);
    }
}


function filterShops(filteredAreasContainer, shopsContainer, filteredShopsContainer, shopAreas, areaName) {

    var areaNameList = document.getElementById(filteredAreasContainer).children;   
    var shops = document.getElementsByClassName(shopsContainer);
    var filteredShopContainer = document.getElementById(filteredShopsContainer);
    var filteredShops = [];

    for (var i = 0; i < shops.length; i++) {

        var areaString = shops[i].querySelector(shopAreas).innerHTML;
        var areaArray = areaString.split(',');
        for (var y = 0; y < areaArray.length; y++) {
      	    for (var x = 0; x < areaNameList.length; x++) {
        	    if (areaNameList[x].querySelector(areaName).innerHTML == areaArray[y]) {
                filteredShops.push(shops[i]);
                }
      	    }
    	}
  	} 
    
    for (var i = 0; i < filteredShops.length; i++) {
    	filteredShopContainer.appendChild(filteredShops[i])
    }
}

