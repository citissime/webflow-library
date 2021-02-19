const QUERY_SELECTOR = {

    AREA_CITY = '#area-city',

}

function Cito(selector) {
    
    const self = {
        element: document.querySelector(selector),
        html: () => self.element,
        on: (event, callback) => {
            document.addEventListener(event, callback)
        },
        sortAreas: (city, areas) => {
            var filteredAreas = [];

            for (var i = 0; i < areas.length; i++) {
                if (areas[i].querySelector(QUERY_SELECTOR.AREA_CITY).innerHTML != city) {
                    areas[i].style.display = 'none';
                }
                else {
                    filteredAreas.push(areas[i]);
                }
            }


    
            
            return filteredAreas;
        }
    }
}