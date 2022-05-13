const API_URL = 'https://tree-commerce-api.herokuapp.com';

const fs = require('fs');

const createDatabase = async () => {
    const tempTrees = await fetch(`${API_URL}/trees/random/64`).catch((e) => {throw e});
    const tempTreesJson = await tempTrees.json();
    const continent = ['Africa', 'Asia', 'Oceania', 'Europe', 'North America', 'South America', 'Ocean'];
    const color = ['green', 'yellow', 'red', 'orange', 'purple', 'brown', 'black'];
    const season = ['All season', 'Spring', 'Summer', 'Autumn', 'Winter'];
    const colorCnt = [0, 0, 0, 0, 0, 0, 0];
    const lifeExpectancy = ['short', 'medium', 'long'];
    const collection = ['', 'Kenya', 'Tea Party', 'Post-Apocalypse', 'Summer by the sea', 'Cozy winter'];
    const images = {};
    for (let i = 0; i < color.length; i++) {
        // https://api.unsplash.com/search/photos?query=tree&per_page=64&color=white
        const temp = await fetch(`https://api.unsplash.com/search/photos?query=tree&per_page=64&color=${color[i]}`).catch((e) => {throw e});
        const tempJson = await temp.json();
        images[color[i]] = tempJson.results;
    }
    for (let i = 0; i < tempTreesJson.length; i++){
        tempTreesJson[i].continent = continent[Math.floor(Math.random() * continent.length)];
        tempTreesJson[i].life = lifeExpectancy[Math.floor(Math.random() * lifeExpectancy.length)];
        tempTreesJson[i].collection = collection[Math.floor(Math.random() * collection.length)];
        tempTreesJson[i].season = season[Math.floor(Math.random() * season.length)];
        tempTreesJson[i].description = 'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        tempTreesJson[i].price = Math.floor(Math.random() * (10000)) + 99 + Math.round(Math.random()*100)/100;
        const colorIndex = Math.floor(Math.random() * color.length);
        tempTreesJson[i].color = color[colorIndex];
        tempTreesJson[i].image = images[color[colorIndex]][colorCnt[colorIndex]];
        colorCnt[colorIndex]++;
    }

    let jsonData = JSON.stringify(tempTreesJson);
    fs.writeFile("test.txt", jsonData, function(err) {
        if (err) {
            console.log(err);
        }
    });

}

createDatabase();