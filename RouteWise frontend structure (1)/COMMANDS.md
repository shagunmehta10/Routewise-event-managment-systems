# 📝 RouteWise - All Commands Reference

Complete list of all commands you'll need to work with RouteWise.

---

## 📦 Installation Commands

### Install Dependencies
```bash
# Using npm (default)
npm install

# Using pnpm (faster, recommended)
npm install -g pnpm  # Install pnpm globally first
pnpm install

# Using yarn
yarn install
```

---

## ▶️ Development Commands

### Start Development Server
```bash
# Default (runs on http://localhost:5173)
npm run dev

# Or with pnpm
pnpm dev

# Or with yarn
yarn dev

# With custom port
npm run dev -- --port 3000

# With network access (accessible from other devices)
npm run dev -- --host
```

### Stop Development Server
```
Press Ctrl + C in terminal
```

---

## 🏗️ Build Commands

### Build for Production
```bash
npm run build
```

This creates optimized files in the `/dist` folder.

### Preview Production Build
```bash
npm run preview
```

This serves the production build locally for testing.

---

## 🧹 Cleanup Commands

### Clear Node Modules
```bash
# Mac/Linux
rm -rf node_modules
rm package-lock.json

# Windows (Command Prompt)
rmdir /s /q node_modules
del package-lock.json

# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
```

### Clear Vite Cache
```bash
# Mac/Linux
rm -rf node_modules/.vite

# Windows
rmdir /s /q node_modules\.vite
```

### Complete Clean Install
```bash
# Mac/Linux
rm -rf node_modules package-lock.json node_modules/.vite
npm install

# Windows
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## 🔌 Port Management

### Kill Process on Port 5173
```bash
npx kill-port 5173
```

### Kill Multiple Ports
```bash
npx kill-port 5173 3000 8080
```

### Find What's Using a Port
```bash
# Mac/Linux
lsof -i :5173

# Windows
netstat -ano | findstr :5173
```

---

## 📂 VS Code Commands

### Open Project in VS Code
```bash
# From project folder
code .

# Open specific file
code src/app/App.tsx

# Open and install recommended extensions
code . --install-extension bradlc.vscode-tailwindcss
```

### VS Code Shortcuts (once opened)
```
Ctrl+P (Cmd+P)         - Quick file open
Ctrl+Shift+P (Cmd+Shift+P) - Command palette
Ctrl+` (Cmd+`)         - Toggle terminal
Ctrl+B (Cmd+B)         - Toggle sidebar
Ctrl+Shift+F (Cmd+Shift+F) - Search in files
Alt+Click              - Multi-cursor
Shift+Alt+F            - Format document
Ctrl+/ (Cmd+/)         - Toggle comment
```

---

## 🔍 Debugging Commands

### Check Node Version
```bash
node --version
# Should be 18+ or higher
```

### Check npm Version
```bash
npm --version
```

### Check Installed Packages
```bash
npm list --depth=0
```

### Check for Outdated Packages
```bash
npm outdated
```

### Verify Project Structure
```bash
# Mac/Linux
ls -la

# Windows
dir

# Tree view (if tree is installed)
tree -L 2
```

---

## 🧪 Testing & Linting (if configured)

### Run TypeScript Check
```bash
npx tsc --noEmit
```

### Format Code (if Prettier is configured)
```bash
npx prettier --write .
```

### Check Formatting
```bash
npx prettier --check .
```

---

## 📦 Package Management

### Add a Package
```bash
npm install package-name

# Add as dev dependency
npm install -D package-name

# Add specific version
npm install package-name@1.2.3
```

### Remove a Package
```bash
npm uninstall package-name
```

### Update a Package
```bash
npm update package-name

# Update all packages
npm update
```

### Audit Security
```bash
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## 🌐 Browser Commands

### Open Default Browser
```bash
# Mac
open http://localhost:5173

# Windows
start http://localhost:5173

# Linux
xdg-open http://localhost:5173
```

### Clear Browser Cache
```
Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)
```

### Hard Reload Browser
```
Ctrl+Shift+R (Cmd+Shift+R on Mac)
```

---

## 📊 Git Commands (if using version control)

### Initialize Git
```bash
git init
```

### Check Status
```bash
git status
```

### Stage Changes
```bash
# Stage all changes
git add .

# Stage specific file
git add src/app/App.tsx
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### Push to Remote
```bash
git push origin main
```

### Pull from Remote
```bash
git pull origin main
```

### Create Branch
```bash
git checkout -b feature-name
```

### View Branches
```bash
git branch
```

---

## 🚀 Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### Build and Preview Locally
```bash
npm run build
npm run preview
```

---

## 🔧 Utility Commands

### Create Environment File
```bash
# Mac/Linux
cp .env.example .env

# Windows
copy .env.example .env
```

### Check Disk Space
```bash
# Mac/Linux
df -h

# Windows
wmic logicaldisk get size,freespace,caption
```

### View Package.json Scripts
```bash
# Mac/Linux
cat package.json | grep scripts -A 10

# Windows
type package.json | find "scripts"

# Or just open the file
code package.json
```

---

## 🆘 Emergency Commands

### Force Stop Everything
```bash
# Mac/Linux
pkill -9 node

# Windows (PowerShell)
Get-Process node | Stop-Process -Force
```

### Completely Reset Project
```bash
# Mac/Linux
rm -rf node_modules package-lock.json dist .vite
npm install

# Windows
rmdir /s /q node_modules dist
del package-lock.json
npm install
```

### Fix Permissions (Mac/Linux only)
```bash
sudo chown -R $USER:$USER .
```

---

## 📝 Quick Reference Table

| Task | Command |
|------|---------|
| Install | `npm install` |
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Preview | `npm run preview` |
| Stop server | `Ctrl+C` |
| Kill port | `npx kill-port 5173` |
| Clean install | `rm -rf node_modules && npm install` |
| Open VS Code | `code .` |
| TypeScript check | `npx tsc --noEmit` |

---

## 💡 Pro Tips

### Faster Installs with pnpm
```bash
npm install -g pnpm
pnpm install  # Much faster than npm!
pnpm dev
```

### Watch for Changes
Development server already watches for changes - no need for additional commands!

### Multiple Terminals
Open multiple terminals in VS Code:
- Terminal → New Terminal (`Ctrl+Shift+` `)
- Or click the + icon in terminal panel

---

## 🔗 Useful One-Liners

### Complete Clean Restart
```bash
rm -rf node_modules package-lock.json && npm install && npm run dev
```

### Build and Preview
```bash
npm run build && npm run preview
```

### Check Everything
```bash
node --version && npm --version && npm list --depth=0
```

### Quick Git Commit
```bash
git add . && git commit -m "Update" && git push
```

---

## 📱 Platform-Specific Commands

### Mac/Linux Only
```bash
# Find large files
find . -type f -size +10M

# Count lines of code
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l
```

### Windows Only
```bash
# Find large files (PowerShell)
Get-ChildItem -Recurse | Where-Object {$_.Length -gt 10MB}

# Count files
(Get-ChildItem -Recurse -File).Count
```

---

## 🎯 Common Workflows

### Daily Development
```bash
1. code .                    # Open project
2. npm run dev               # Start server
3. # Make changes in VS Code
4. # Browser auto-updates
5. Ctrl+C                    # Stop when done
```

### After Pulling Updates
```bash
git pull
npm install                  # Install any new dependencies
npm run dev
```

### Before Committing
```bash
npm run build                # Make sure it builds
git add .
git commit -m "Description"
git push
```

---

## 📚 Learn More

- **Vite Commands**: https://vitejs.dev/guide/cli.html
- **npm Commands**: https://docs.npmjs.com/cli/
- **Git Commands**: https://git-scm.com/docs

---

**Bookmark this page for quick reference!** 📖
