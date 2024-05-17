# PlaylistGenerator

## Description

This is a playlist genereator web app that utilizes the Spotify Web Api to let users browse top albums, popular playlists, and generate custom playlists based on personalized criteria.

## Table of Contents
- [Live Website](#live-website)
- [User Story](#user-story)
- [Installation](#installation)
- [Website Screenshots](#website-screenshots)
- [Development](#development)
- [Testing](#testing)
- [Technology Used](#technology-used)
- [Acknowledgements](#acknowledgements)

##  Live Website
[CANDENCE Website Link](https://main--dreamy-chimera-7a2ae3.netlify.app/)

## User Story
#### As a User, I want to 
      1. View popular playlists and top albums
      2. Generate a playlist based on my prefernces
      3. Be able to navigate seamlessly between pages
      4. Have a user friendly and intuitive UI that works on mulitple screen sizes

## Installation
1. Go to the [spotify developer site](https://developer.spotify.com/) and follow the instructions for getting Web API credentials.
2. Create a .env file in the /environments directory and create a client id and a client secret variable using your own spotify credentails.
3. Run the following scripts to get this project up and running locally:

 ``` javascript
     // install necesarry dependencies
     npm install

     // generate the environment.ts file containing secrects
     npm run config

     // run the angular program
     ng serve
```
* NOTE: These commands assume you already have the angular cli, npm, and node installed on you computer. See [Angular Docs](https://angular.io/guide/setup-local) on local set up for more information.
## Website Screenshots
<img width="1508" alt="Screenshot 2024-05-17 at 1 41 08 PM" src="https://github.com/DominiqueNix/playlist-generator/assets/117382111/bf8ea698-379d-4850-a174-4035983aa7a3">
<img width="1510" alt="Screenshot 2024-05-17 at 1 41 33 PM" src="https://github.com/DominiqueNix/playlist-generator/assets/117382111/cdefbaad-7731-4949-886c-a52f621cb9f4">
<img width="1508" alt="Screenshot 2024-05-17 at 1 42 23 PM" src="https://github.com/DominiqueNix/playlist-generator/assets/117382111/595bc8ac-99e2-4fad-b60f-1b07113a1949">

## Development
Figma Mocks:
<img width="913" alt="Screenshot 2024-05-17 at 1 44 31 PM" src="https://github.com/DominiqueNix/playlist-generator/assets/117382111/c29ec1b2-615c-43be-9125-75790302fd8e">

## Testing
Run the following scripts to get this project up and running locally:

 ``` javascript
     // install necesarry dependencies (if not previously done)
     npm install

     // generate the environment.ts file containing secrects (if not previously done)
     npm run config

     // run the tests
     npm run test
```

## Technology Used
<div align="center">
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" alt="Angular" title="Angular"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" alt="HTML" title="HTML"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" alt="CSS" title="CSS"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/187955005-f4ca6f1a-e727-497b-b81b-93fb9726268e.png" alt="Jest" title="Jest"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="Node.js" title="Node.js"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png" alt="npm" title="npm"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png" alt="Visual Studio Code" title="Visual Studio Code"/></code>
	<code><img width="50" src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png" alt="Figma" title="Figma"/></code>
</div>

## Acknowledgements
  ![Spotify](https://img.shields.io/badge/Spotify-%1DB954.svg?style=for-the-badge&logo=spotify&logoColor=green)
  <br>[Spotify](https://developer.spotify.com/)</br>
  <br></br>
  ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
  <br>[Material UI](https://mui.com/material-ui/)</br>
  <br></br>
  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
  <br>[Bootstrap](https://getbootstrap.com/)</br>
  <br></br>
  ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
  <br>[Figma](https://www.figma.com/)</br>
  <br></br>
  ![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)
  <br>[Stack Overflow](https://stackoverflow.com/)</br>
  <br></br>
  ![GeeksForGeeks](https://img.shields.io/badge/GeeksforGeeks-gray?style=for-the-badge&logo=geeksforgeeks&logoColor=35914c)
  <br>[GeeksforGeeks](https://www.geeksforgeeks.org/)</br>
  <br></br>
  ![Youtube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
  <br>[Coders Campus](https://www.youtube.com/watch?v=4ugChIR9sS8&list=RDCMUCFUX7XzHuW6aTDx8P-sCKfw&index=8)</br>
