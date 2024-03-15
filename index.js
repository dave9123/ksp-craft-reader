const fs = require('fs');

async function readCraft(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        let ship = data.split('\n')[0].replace('ship = ', '');
        let version = data.split('\n')[1].replace('version = ', '');
        let description = data.split('\n')[2].replace('description = ', '');
        let type = data.split('\n')[3].replace('type = ', '');
        let size = data.split('\n')[4].replace('size = ', '');
        return { ship, version, description, type, size };
    } catch (error) {
        console.error('Error occured while reading file:', error);
    }
}

module.exports = { readCraft };