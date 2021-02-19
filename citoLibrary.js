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

    for (var i = 0; i < areas.length; i++) {
        if (areas[i].querySelector(QUERY_SELECTORS.AREA_CITY).innerHTML != city) {
            areas[i].style.display = 'hidden';
        }
    }

    return areas;
}


