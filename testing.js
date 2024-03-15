kspCraftReader = require('./index.js')

kspCraftReader.readCraft('testing.craft').then((craft) => {
    console.log(craft);
}).catch((error) => {
    console.error('Error occured while reading file:', error);
});