# KSP Craft Reader
A simple craft reader for the game [Kerbal Space Program](https://www.kerbalspaceprogram.com/)
# Usage
## Read craft from file
```js
const kspCraftReader = require('ksp-craft-reader');
kspCraftReader.readCraftFromFile('testing.craft').then((craft) => {
    console.log(craft.ship);
    console.log(craft.version);
    console.log(craft.description);
    console.log(craft.type);
    console.log(craft.size);
}).catch((error) => {
    console.error('Error occured while reading file: ', error);
});
```
## Read craft directly
```js
const kspCraftReader = require('ksp-craft-reader');
const fs = require('fs-extra');
(async () => {
    kspCraftReader.readCraft(await fs.readFile('C:/Users/hp/Downloads/STS-7 Space Shuttle.craft', 'utf8')).then((craft) => {
        console.log(craft.ship);
        console.log(craft.version);
        console.log(craft.description);
        console.log(craft.type);
        console.log(craft.size);
    }).catch((error) => {
        console.error(error);
    })
})();
```
# Credits
Idea from G9 Aerospace, his [Discord](https://discord.com/users/928267278540242964), his [GitHub](https://github.com/g9militantsYT/), and his [YouTube](https://www.youtube.com/@G9AEROSPACEYT)