/**
 * This is a custom build script that will copy the package.json file into each folder of the
 * commonJS version of the dist folder. This package JSON will point to the corresponding ESM
 * version of the module
 * See NPM scripts for the command
 */

const fs = require('fs-extra');
const path = require('path');
const klaw = require('klaw');

const packageJSONContent = fs.readFileSync(
  path.resolve(__dirname, '../file-temlates/commonjs-package.json'),
  'utf-8'
);
const distPath = path.resolve(__dirname, '../dist');
const distIndexPath = path.resolve(__dirname, '../dist', 'index.js');

klaw(distPath)
  .on('data', (item) => {
    // check if the path is a file and not the base folder
    // and not the esm folder
    // and we want to do only for js files and not package.json
    const filePath = item.path;
    const isFile = filePath.includes('.js');
    const fileExt = path.extname(filePath);

    if (
      isFile &&
      filePath !== distPath &&
      filePath !== distIndexPath && 
      !filePath.includes('/esm/') &&
      fileExt !== '.json'
    ) {
      // get the folder path from the file
      const pathArr = filePath.split('/');
      const folderPath = pathArr.slice(0, pathArr.length - 1).join('/');
      const relPath = path.relative(folderPath, distPath);
      const actualFilePath = filePath.replace(distPath, '');
      const esmModulePath = `${relPath}/esm${actualFilePath}`;
      const updatedPackageJSON = packageJSONContent.replace(
        '{path}',
        esmModulePath
      );
      // console.log(folderPath, esmModulePath);
      fs.writeFileSync(
        path.resolve(folderPath, 'package.json'),
        updatedPackageJSON,
        {
          encoding: 'utf8',
        }
      );
    }
  })
  .on('error', () => {})
  .on('end', () => {
    console.log('** end copying commonjs package.json **');
  });
