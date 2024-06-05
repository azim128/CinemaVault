# Use a specific Node.js version (adjust if needed)
FROM node:21-alpine3.18 AS Build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if using)
COPY package*.json ./

# Install dependencies
RUN yarn install --production

# Copy your application code
COPY . .

# Expose port (modify if your app uses a different port)
EXPOSE 3000

# Start the server (replace "start" script if different)
CMD [ "yarn", "start" ]
