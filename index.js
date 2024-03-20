const fs = require('fs-extra');

async function readCraftFromFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        let ship = data.split('\n')[0].replace('ship = ', '').replace('\r', '');
        let version = data.split('\n')[1].replace('version = ', '').replace('\r', '');
        let description = data.split('\n')[2].replace('description = ', '').replace('\r', '');
        let type = data.split('\n')[3].replace('type = ', '').replace('\r', '');
        let size = data.split('\n')[4].replace('size = ', '').replace('\r', '');
        return { ship, version, description, type, size };
    } catch (error) {
        console.error('Error occured while reading file:', error);
    }
}

async function readCraft(data) {
    try {
        let ship = data.split('\n')[0].replace('ship = ', '').replace('\r', '');
        let version = data.split('\n')[1].replace('version = ', '').replace('\r', '');
        let description = data.split('\n')[2].replace('description = ', '').replace('\r', '');
        let type = data.split('\n')[3].replace('type = ', '').replace('\r', '');
        let size = data.split('\n')[4].replace('size = ', '').replace('\r', '');
        return { ship, version, description, type, size };
    } catch (error) {
        console.error('Error occurred while processing data:', error);
    }
}

module.exports = { readCraftFromFile, readCraft };