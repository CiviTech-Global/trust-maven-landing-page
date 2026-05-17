#!/bin/bash
# Simple script to test the landing page locally

echo "Starting local server for TrustMaven Landing Page..."
echo "=========================================="
echo ""
echo "Choose your server:"
echo "1. Python 3 (http.server)"
echo "2. Node.js (http-server)"
echo "3. Just open index.html in browser"
echo ""

read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo "Starting Python server on http://localhost:8000"
        python -m http.server 8000
        ;;
    2)
        echo "Starting Node server on http://localhost:8080"
        npx http-server -p 8080
        ;;
    3)
        echo "Opening index.html in default browser..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open index.html
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            xdg-open index.html
        elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
            start index.html
        else
            echo "Please open index.html manually in your browser"
        fi
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac
