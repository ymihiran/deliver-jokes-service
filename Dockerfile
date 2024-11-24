# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --production

# Copy app source
COPY . .

# Build the Nest.js app
RUN npm run build

# Expose the port
EXPOSE 3002

# Define the command to run the app
CMD ["node", "dist/main"]
