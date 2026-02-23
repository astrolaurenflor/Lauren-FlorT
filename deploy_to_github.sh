#!/bin/bash

# Configuration
GITHUB_USER="astrolaurenflor"
REPO_NAME="portfolio"
PROJECT_DIR="/Users/laurenflor/.gemini/antigravity/scratch/lauren_flor_portfolio"

echo "🚀 Iniciando despliegue a GitHub..."

# Navigate to project directory
cd "$PROJECT_DIR" || exit

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    git add .
    git commit -m "Initial commit"
fi

# Add remote if not exists
if ! git remote | grep -q "origin"; then
    echo "🔗 Conectando con GitHub..."
    git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
else
    echo "ℹ️ El remoto 'origin' ya existe."
fi

# Push
echo "⬆️ Subiendo archivos..."
echo "Nota: Si se te solicita, ingresa tu usuario y contraseña (o Personal Access Token)."
git branch -M main
git push -u origin main

echo "✅ ¡Listo! Si no hubo errores, tu sitio debería estar en: https://github.com/$GITHUB_USER/$REPO_NAME"
