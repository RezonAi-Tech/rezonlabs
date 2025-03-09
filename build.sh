
#!/bin/bash
# Build script for Render

# Exit on error
set -e

# Print environment info for debugging
echo "Current directory: $(pwd)"
echo "Directory contents: $(ls -la)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Install dependencies with verbose logging
npm install --verbose

# Check if vite is installed
echo "Checking for vite:"
npm list vite
npm list @vitejs/plugin-react-swc

# Build the application using npx with full path
echo "Building with Vite..."
./node_modules/.bin/vite build

# Log success
echo "Build completed successfully!"
