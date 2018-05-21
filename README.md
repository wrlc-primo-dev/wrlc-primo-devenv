# WRLC primo devenv

This is a Dockerized version of the ExLibris [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) 

It's based on work done first by Nick Budak at the Orbis Cascade Alliance: [oca-central-package](https://github.com/alliance-pcsg/oca-central-package)

## Setup

1. Install the latest version of [Docker Community Edition](https://www.docker.com/community-edition#/download), and [Docker Compose](https://docs.docker.com/compose/install/#install-compose) (Docker Compose is bundled with the Docker installers for Mac and most Windows systems).
2. Clone this repository. Be sure to use the --recursive option as shown below. Using --recursive pulls in the central package.
```
git clone https://github.com/wrlc-primo-dev/wrlc-primo-devenv.git --recursive
```
3. Download your view package or template and place it in the views folder. Your directory structure would look something like this if your view folder is `LIBRARY-MYVIEW`. Note that the central package is distributed with this repository.

    ```bash
    wrlc-docker-devenv
    ├── Dockerfile
    ├── README.md
    ├── docker-compose.yml
    ├── vars.env
    └── views
        ├── LIBRARY-MYVIEW
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
4. Rename the `vars.env.template` file to `vars.env` and change it to reflect the environment and view you're trying to test. The view variable should match the name of the directory you placed in views. In this example, it would be `LIBRARY-MYVIEW`.
`
## Run
From the wrlc-docker-devenv directory run 
```bash
docker-compose up
```
Now visit your local development environment at `http://localhost:8003/discovery/search?vid=LIBRARY:MYVIEW`. Substitute your view code name for `LIBARY:MYVIEW`.
## Customize
You can make changes to the view you're developing in the views folder and they will be reflected in the local development environment.
## Build packages
When you're happy with your changes you can have primo-explore-devenv bundle your changes into a zip for publishing:
```bash
docker-compose exec devenv gulp create-package
```
You'll be asked which package you want to build. The final product will be placed in the `./packages` directory. Note that the container must be running to build the package, so run this command from a different shell than the contiainer is running in.
## Troubleshooting

### Naming conventions and the spinning diamond graphic
If you're seeing the diamonds loading graphic, but your page never loads, double check that the name of your view folder matches the name configured in vars.env. Note that the url you use to access the devenv in your browser must use an actual view code on your primo instance. The folder name and view name in vars.env does not have to be the same as this view code.

### Colons
View codes for Primo VE have colons, but those colon must be replaced with hypens when you upload your package. So a view with the code LIBRARY:VIEW must be uploaded as LIBRARY-VIEW. This has the potential to cause some confusion when setting up this environment. 
