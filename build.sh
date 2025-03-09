
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

# Check if vite is installed and its location
echo "Checking for vite installation:"
npm list vite
which vite || echo "vite command not found in PATH"
echo "NODE_PATH: $NODE_PATH"
echo "PATH: $PATH"

# Build the application explicitly using the vite binary in node_modules
echo "Building with Vite..."
npx vite build

# Log success
echo "Build completed successfully!"
