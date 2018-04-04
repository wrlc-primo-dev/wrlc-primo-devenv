FROM node:boron

# Install primo-explore-devenv
WORKDIR /home/node
RUN npm install -g gulp
RUN git clone --progress --verbose https://github.com/ExLibrisGroup/primo-explore-devenv
WORKDIR /home/node/primo-explore-devenv
RUN npm install

# expose ports
EXPOSE 8003
EXPOSE 3001


# run
CMD [ "/bin/bash", "-c", "node_modules/.bin/gulp run --view $VIEW --proxy $PROXY --ve" ]
