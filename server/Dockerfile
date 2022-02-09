FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]



#FROM: Defines the image we will use as the basis for our container. In this context, we use Node Version 12.18.3.

#WORKDIR: Sets the working directory for the application. If the working directory does not already exist, it is created by Docker.

#COPY: Copy a file or files into the Docker container. On line 9, we list several files to copy and then specify where to copy them. The final path specified is the location the files are copied to (in this case, the working directory).

#RUN: Specifies a command that should be run by Docker. I typically use this command to install dependencies, debug, and execute commands in the container. In this context, we run npm install --production to only install production dependencies.

#EXPOSE: Tells Docker which ports the container should listen on during runtime. In this context, we expose port 3000 since that is the port that React is running on.

#CMD: Specifies the command that should be executed when the docker container starts. In this context, we run npm start since that is the command that starts the frontend.