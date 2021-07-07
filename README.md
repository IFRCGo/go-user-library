IFRC DESIGN SYSTEM 

## Introduction 
This React app contains the latest UI elements and design of the IFRC Go Platform. 

## WIKI: IFRC Go UI Library - Brief
https://brcdigital.atlassian.net/wiki/spaces/IGUL/pages/1459486721/IFRC+Go+UI+Library+-+Brief

## GO-UI-Library
https://ifrcgo.org/GO-UI-Library (Master Branch)

## Design Guidelines
https://www.figma.com/file/n2D5xvtXBZ9XCejRXeDeUq/IFRC-GO_UI-Library-%5Bshared%5D?node-id=752%3A6558

## Front-end build 
The front-end build has been produced by BRC 

The code for this sits within the src folder
  
## Local development environment setup 
Clone this repository 

Check out the Master branch. 

All NPM is defined in the package.json for Run, Build & Deployment. 

## Before you install npm
GO-UI-Library version using: v14.17.0

Switch your node version to v14.17.0 e.g: 
``` 
nvm use v14.17.0
``` 
## Set up the FED by running the install and then run the development server  
``` 

    npm install 

``` 

  

## Run development server from the root folder 
``` 

    npm start 

``` 
  

## Build development server 
``` 

    npm run build 

``` 
This creates the Build folder 


## Deployment to Github pages 
``` 

    npm run deploy 

```   
The deployment will deploy to Github pages here: 

https://ifrcgo.org/GO-UI-Library/ 
For Production deployments a release should be created inside release/ folder and then that release (ex 4.0.1) should have a PR against the Master branch.  

## Important Deployment note!!! 
The homepage route in package.json needs to be “/GO-UI-Library” when we deploy to Github pages.    

## All dependencies defined in package.json  
The SCSS is compiled into a main CSS file in the Public folder. 
  
## Redirects 
At the moment there is a script in the index.html on the Public folder to redirect everyone to the homepage. This is for Github Pages. 

## Folder Structure 
All the files that are used by the App are in the src folder. 


**The Public folder** 
This contains the index.html, which is the page that is used by React to render the app. The meta data, title, external CSS linking are also located here. 


**The Assets folder** 
Here are the go-platform graphics and icons. 

The ui-library folder contains styles for the DS Go UI Library 


**The Components folder** 
This contains all the React components that are being used by the Design System. 
 

**The HOC folder** 
This contains all the different templates that the app is using. 

Here are the different pages layout files, the header, the footer, the left nav (desktop & mobile) and the source-code for the Code tab.  


**The Styles folder** 

This contains all the styles from the go-platform repository. 
 

**The views folder** 

This contains all the pages of the Go UI Library. Each page imports the components (from the components folder). 

   
**The app.js** 
This is the most important file for the React app. It contains all the routes (paths to pages), and templates to be used by different components. All the components of the Go UI Library are imported into this file. 


**The index.js** 
This is the file containing the div which React is using to render the app.  

   
**The build folder** 
This contains all the files that are compiled and ready to be deployed. The folder is generated every time by running “npm run build” command, so a fresh updated build version is generated. For deployment to github pages a separate npm command executes the deployment very easily, “npm run deploy”. 
  

## Steps to create a new component 
1- Create a new folder inside components using the components name 

2- Add inside the new folder an index.js file 

3- On app.js add a new line to include the component. If the component will be display on a page template you need to import it here and also add the AppRoute. 

4- Add the page path into the navigation files on the hoc folder. 

5- Import the components into the page.  

## Code example tab 
The source-code is implemented on the page, not on the components files. 

## Homepage
the homepage is inside the get started fplder: src/views/get-started

## TODO
Node version:
Npm version: 