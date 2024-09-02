<!-- Template source: See: https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/arthur-testard/)


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/art-test-stack/tokenizer">
    <img src="rsc/logo.jpg" alt="Logo" height="350">
  </a>

<h3 align="center">Tokenizer</h3>

  <p align="center">
    This project does not have as purpose to be used to develop tokenizers. I just aim to develop this framework by myself to get a better understanding of how tokenizers work, by implementing in different ways, and comparing to performing ones, such as [Tiktoken](https://github.com/openai/tiktoken).
    <br />
    <a href="https://github.com/art-test-stack/tokenizer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/art-test-stack/tokenizer/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <!-- <li><a href="#the-implementation">The implementation</a></li> -->
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <!-- <li><a href="#create-a-dataset">Create a dataset</a></li>
        <li><a href="#create-a-model">Create a model</a></li>
        <li><a href="#train-the-model">Train the model</a></li> -->
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- ### The implementation-->

### Built With

* [![Numpy][Numpy]][Numpy-url]
* [![React][Matplotlib]][Matplotlib-url]
* [![Sklearn][Sklearn]][Sklearn-url]
* [![Tqdm][Tqdm]][Tqdm-url]


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:art-test-stack/tokenizer.git
   ```
2. Run the Python server

  - Create a virtual environment
    
    For example I use [virtualenv](https://virtualenv.pypa.io/en/latest/):
   ```sh
   virtualenv -p python 3.10 venv
   ```
  
  - Install pip packages
   ```sh
   pip install -r requirements.txt
   ```
  
  - Run the server
  <!-- ```sh
  python main.py
  ``` -->
  ```sh
  uvicorn main:app --reload --host 0.0.0.0 --port 8000
  ```
3. Run the web app in another shell

  - Install npm, for some doc look at [npm getting started](https://docs.npmjs.com/)

  - Run the app
  ```sh
  npm run start
  ```


## Usage

This framework permits to easily create a neural network without coding, and to train it on any data. So, anyone who want to create a neural network but don't know how to code can use it as a first step to see how neural nets work !

However, I don't recommand it it's better to code lol.



<!-- ROADMAP -->
## Roadmap

- [ ] 

<!-- See the [open issues](https://github.com/art-test-stack/tokenizer/issues) for a full list of proposed features (and known issues). -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTACT -->
## Contact

Arthur Testard - testardarthur@gmail.com

Project Link: [https://github.com/art-test-stack/tokenizer](https://github.com/art-test-stack/tokenizer)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/art-test-stack/tokenizer.svg?style=for-the-badge
[contributors-url]: https://github.com/art-test-stack/tokenizer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/art-test-stack/tokenizer.svg?style=for-the-badge
[forks-url]: https://github.com/art-test-stack/tokenizer/network/members
[stars-shield]: https://img.shields.io/github/stars/art-test-stack/tokenizer.svg?style=for-the-badge
[stars-url]: https://github.com/art-test-stack/tokenizer/stargazers
[issues-shield]: https://img.shields.io/github/issues/art-test-stack/tokenizer.svg?style=for-the-badge
[issues-url]: https://github.com/art-test-stack/tokenizer/issues
[license-shield]: https://img.shields.io/github/license/art-test-stack/tokenizer.svg?style=for-the-badge
[license-url]: https://github.com/art-test-stack/tokenizer/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/arthur-testard
[product-screenshot]: images/screenshot.png
[Numpy]: https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white
[Numpy-url]: https://numpy.org/
[Sklearn]: https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white
[Sklearn-url]: https://scikit-learn.org/stable/
[Matplotlib]: https://img.shields.io/badge/Matplotlib-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Matplotlib-url]: https://matplotlib.org/
[Tqdm]: https://img.shields.io/badge/tqdm-35495E?style=for-the-badge
[Tqdm-url]: https://tqdm.github.io/
