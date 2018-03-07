# WRLC primo devenv

This is a Dockerized version of the ExLibris [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) 

It's based on work done first by Nick Budak at the Orbis Cascade Alliance: [oca-central-package](https://github.com/alliance-pcsg/oca-central-package)

## Setup

1. Install the latest version of [Docker Community Edition](https://www.docker.com/community-edition#/download), and [Docker Compose](https://docs.docker.com/compose/install/#install-compose) (Docker Compose is bundled with the Docker installers for Mac and most Windows systems).
2. Download your view package or template and place it in the views folder. Your directory structure would look something like this if your view code is LIBRARY:MYVIEW. Note that the central package is distributed with this repository.

    ```bash
    wrlc-docker-devenv
    ├── Dockerfile
    ├── README.md
    ├── docker-compose.yml
    ├── setup.yml
    └── views
        ├── LIBRARY:MYVIEW
        │   ├── README.md
        │   ├── css
        │   ├── html
        │   ├── img
        │   ├── js
        │   └── showDirectives.txt
        └── CENTRAL_PACKAGE
            ├── README.md
            ├── css
            ├── html
            ├── img
            ├── js
            └── showDirectives.txt
    ```
3. Edit the setup.yml file to reflect the environment and view you're trying to test. The view variable should match the name of the directory you placed in views. In this example, it would be LIBRARY:MYVIEW.

## Run
From the wrlc-docker-devenv directory run 
```bash
docker-compose up
```
