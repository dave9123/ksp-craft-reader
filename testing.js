kspCraftReader = require('./index.js')
fs = require('fs-extra');

(async () => {
    kspCraftReader.readCraft(await fs.readFile('filename.craft', 'utf8')).then((craft) => {
        console.log(craft.ship);
        console.log(craft.version);
        console.log(craft.description);
        console.log(craft.type);
        console.log(craft.size);
    }).catch((error) => {
        console.error(error);
    })
})();

kspCraftReader.readCraftFromFile('filename.craft').then((craft) => {
    console.log(craft.ship);
    console.log(craft.version);
    console.log(craft.description);
    console.log(craft.type);
    console.log(craft.size);
}).catch((error) => {
    console.error('Error occured while reading file: ', error);
});