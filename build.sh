
#!/bin/bash
# Build script for Render

# Exit on error and print executed commands
set -ex

# Print environment info for debugging
echo "Current directory: $(pwd)"
echo "Directory contents: $(ls -la)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Clear node_modules if it exists to ensure a clean install
if [ -d "node_modules" ]; then
  echo "Cleaning existing node_modules..."
  rm -rf node_modules
fi

# Install dependencies with verbose logging
npm install --verbose

# Check if vite is installed and its location
echo "Checking for vite installation:"
npm list vite
which npx || echo "npx command not found in PATH"
echo "NODE_PATH: $NODE_PATH"
echo "PATH: $PATH"

# Try to locate vite executable
find ./node_modules -name vite -type f | grep -v "node_modules/.bin" || echo "Vite executable not found in node_modules"

# Build the application explicitly using npx
echo "Building with Vite..."
npx vite build

# Verify build output
echo "Build output directory contents:"
ls -la dist || echo "dist directory not found"

# Log success
echo "Build completed successfully!"
