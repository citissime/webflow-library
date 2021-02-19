const QUERY_SELECTORS = {

    AREA_CITY: '#area-city'


}


function hello() { 
    var msg = {
        hello: 'hello world'
    }
    return msg;
};


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


