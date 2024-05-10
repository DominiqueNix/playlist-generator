// Generates the environment.ts file from a .env file 
// source: https://pazel.dev/how-to-keep-your-secrets-from-your-source-code-in-an-angular-project

const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
    const targetPath = './src/environments/environment.ts';
  // Prod target path 'environment.prod.us'
    const prodTargetPath = './src/environments/environment.prod.ts'
  // Load node modules
    const appVersion = require('../../package.json').version;
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  // `environment.ts` file structure
    const envConfigFile = `export const environment = {
    clientId: '${process.env.CLIENT_ID}',
    clientSecret: '${process.env.CLIENT_SECRET}',
    appVersion: '${appVersion}',
    production: true,
  };
  `;
    console.log('The file `environment.ts` will be written with the following content: \n');
    writeFile(targetPath, envConfigFile, (err:any) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
      }
    });

    writeFile(prodTargetPath, envConfigFile, (err:any) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(`Angular environment.ts file generated correctly at ${prodTargetPath} \n`);
      }
    });
  };
  
  setEnv();