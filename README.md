[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Xmeme</h3>

  <p align="center">
    A place where you can share and edit memes.
    <br />
    <a href="https://github.com/Adrenalinerush07/Xmeme/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kartik-xmeme-app.herokuapp.com/">View Demo</a>
    .
    <a href="mailto:kartikmnc@gmail.com">Report Bug</a>
    ·
    <a href="mailto:kartikmnc@gmail.com">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#Installation and starting the server">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://kartik-xmeme-app.herokuapp.com/)

Users can post and edit funny memes on this website which is build with node.js for backend and MongoDB for the database.
EJS is used for rendering pages dynamically.

The basic idea for making this project is to build a rest API which includes get, post, patch.
This project also includes scripts in Shell for testing the server so the testing part is all automated from installation
to starting the server. Besides, there is also a docker image of the whole software to make testing even easier.

Error handle is also handled with great care and code is properly commented.
Status code is attached to every response.

### Built With

- [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://docs.docker.com/)

## I have used same URL for backend and frontend part

<!-- GETTING STARTED -->

## Getting Started

### Installation and starting the server

1. Clone the repo
   ```sh
   git clone https://github.com/Adrenalinerush07/Xmeme.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   node app.js
   ```
4. Visit localhost on port 8081
<!-- USAGE EXAMPLES -->

## Usage

For posting a meme, user need to provide 3 things

1. Name
2. URL for the meme image
3. Caption

After providing these 3 parameters click on submit button to post your meme.

After this user will be redirected to the page containing all the memes, from there, user can visit a meme separately by clicking read more or can edit the meme by clicking the edit button.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Email - kartikmnc@gmail.com

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kartik-jaiswal-76623a16b/
[product-screenshot]: images/screenshot.png
