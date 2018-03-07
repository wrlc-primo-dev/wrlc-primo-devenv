FROM node:boron

# set default proxy and view options
#ENV PROXY "https://wrlc-scf.alma.exlibrisgroup.com:443"
#ENV VIEW 01WRLC_SCF:SCF_DEV

# Install primo-explore-devenv
WORKDIR /home/node
RUN npm install -g gulp
RUN git clone --progress --verbose https://github.com/ExLibrisGroup/primo-explore-devenv
WORKDIR /home/node/primo-explore-devenv
RUN npm install

# Add the view package
#RUN mkdir -p primo-explore/custom/$VIEW

# Add the central package
#RUN mkdir -p primo-explore/custom/CENTRAL_PACKAGE

# expose ports
EXPOSE 8003
EXPOSE 3001


# run
CMD [ "/bin/bash", "-c", "node_modules/.bin/gulp run --view $VIEW --proxy $PROXY --ve" ]
