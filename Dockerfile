FROM node:20-alpine

WORKDIR /app

#Copy the package.json and package-lock.json files
COPY package*.json ./

#Install the dependencies 
RUN npm install

#Copy the rest of the application files
COPY . .

#Expose the port your app will run on
EXPOSE 5173

#start application
CMD [ "npm" , "run" , "dev"]

