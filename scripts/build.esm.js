/**
 * This is a custom build script that will copy the package.json file into each folder of the
 * ESM version of the dist folder
 * See NPM scripts for the command
 */

const fs = require('fs-extra');
const path = require('path');
const klaw = require('klaw');

const packageJSONContent = fs.readFileSync(path.resolve(__dirname, '../file-temlates/esm-package.json'), 'utf-8');
const esmDistPath = path.resolve(__dirname, '../dist', 'esm');
// console.log(esmDistPath);

klaw(esmDistPath).on('data', (item) => {
    // check if the path is a folder and not the base folder
    const filePath = item.path;
    const isFile = filePath.includes('.js');
    if(isFile && filePath !== esmDistPath) {
        // get the folder path from the file
        const pathArr = filePath.split('/');
        const folderPath = pathArr.slice(0, pathArr.length - 1).join('/');
        // console.log(folderPath);
        fs.writeFileSync(path.resolve(folderPath, 'package.json'), packageJSONContent, {
            encoding: 'utf8'
        })
    }
}).on('error', () => {

}).on('end', () => {
    console.log('** end copying package.json **');
});