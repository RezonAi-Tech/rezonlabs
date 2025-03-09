
#!/bin/bash
# Build script for Render

# Exit on error
set -e

# Install dependencies
npm install

# Print node and npm versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Build the application using npx to ensure the local vite is used
npx vite build

# Log success
echo "Build completed successfully!"
