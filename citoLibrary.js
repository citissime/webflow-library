const QUERY_SELECTORS = {

    AREA_CITY: '#area-city',
    AREA_NAME: '#area-name',
    SHOP_AREAS: '#shop-areas',

}

function filterAreas(city, areas) {

    var filteredAreas = [];

    for (var i = 0; i < areas.length; i++) {
        if (areas[i].querySelector(QUERY_SELECTORS.AREA_CITY).innerHTML != city) {
            areas[i].style.display = 'hidden';
        }
        else {
            filteredAreas.push(areas[i]);
        }
    }

    return filteredAreas;
}


function filterShops(areaName, shopAreas, filteredShopContainer) {

    var areaNameList = document.getElementsByClassName(areaName);
    var shopAreas = document.getElementsByClassName(shopAreas);
    var filteredShopContainer = document.getElementById(filteredShopContainer);
    var filteredShops = [];

    for (var i = 0; i < shopAreas.length; i++) {

        var areaString = shopAreas[i].innerHTML;
        var areaArray = areaString.split(',');

        for (var y = 0; y < areaArray.length; y++) {
            for (var x = 0; x < areaNameList.length; x++) {
                if (areaNameList[x].innerHTML == areaArray[y]) {
                    filteredShops.push(shopAreas[i].parentNode);
                }
            }
        }
    } 

    for (var i = 0; i < filteredShops.length; i++) {
        filteredShopContainer.appendChild(filteredShops[i]);
    }
}

