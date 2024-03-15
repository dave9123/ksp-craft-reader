# KSP Craft Reader
A simple craft reader for the game [Kerbal Space Program](https://www.kerbalspaceprogram.com/)
# Usage
```js
const kspCraftReader = require('ksp-craft-reader');
kspCraftReader.readCraft('testing.craft').then((craft) => {
    console.log(craft.ship);
    console.log(craft.version);
    console.log(craft.description);
    console.log(craft.type);
    console.log(craft.size);
}).catch((error) => {
    console.error('Error occured while reading file:', error);
});
```
# Credits
Sympathy Fuel Pill.craft from [KerbalX](https://kerbalx.com/CoyoteFoxtrot/Sympathy-Fuel-Pill) by [CoyoteFoxtrot](https://kerbalx.com/CoyoteFoxtrot)
<br />
Idea from G9 Aerospace, his [Discord](https://discord.com/users/928267278540242964), his [GitHub](https://github.com/g9militantsYT/), and his [YouTube](https://www.youtube.com/@G9AEROSPACEYT)