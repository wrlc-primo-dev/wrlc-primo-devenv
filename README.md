# WRLC primo devenv

This is a Dockerized version of the ExLibris [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv) 

It's based on work done first by Nick Budak at the Orbis Cascade Alliance: [oca-central-package](https://github.com/alliance-pcsg/oca-central-package)

## Setup
Install the latest version of [Docker Community Edition](https://www.docker.com/community-edition#/download)

## Run
```bash
docker pull wrlc/wrlc-primo-devenv
docker run -t -p 8003:8003 wrlc/wrlc-primo-devenv
```
