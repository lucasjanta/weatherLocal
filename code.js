function escolhecidade() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=riodejaneiro&appid=e05086ca167a11fd93910b420da9f73f')
    .then(response => response.json())
    .then(clima => {
        console.log(clima);
        console.log(clima[0].lat);
        console.log(clima[0].lon);
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+clima[0].lat+'&lon='+clima[0].lon+'&appid=e05086ca167a11fd93910b420da9f73f')
        .then(response => response.json())
        .then(climacidade => {
            console.log(climacidade);
        
            
        });
    });
}

escolhecidade();