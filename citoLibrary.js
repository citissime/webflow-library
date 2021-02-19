import { firebase } from "./fbConfig";


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


function filterShops(areas, shops) {

    var filteredShops = [];

    for (var i = 0; i < shops.length; i++) {
        
        var shopAreas = shops[i].querySelector(QUERY_SELECTORS.SHOP_AREAS);
        var shops = shopAreas.split(',');

        for (var y = 0; y < shops.length; y++) {
            for (var x = 0; x < areas.length; x++) {
                if (areas[x].querySelector(QUERY_SELECTORS.AREA_NAME).innerHTML == shops[y]) {
                    filterShops.push(shops[i]);
                }
            }
        }
    }

    return filteredShops;
}

