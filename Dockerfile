# Base image
FROM mongo

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json file to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port
EXPOSE 27017

# Start the server
CMD [ "npm", "start" ]