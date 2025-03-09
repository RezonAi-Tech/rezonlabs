
#!/bin/bash
# Build script for Render

# Exit on error
set -e

# Install dependencies
npm install

# Build the application
npm run build
