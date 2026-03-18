# 🚀 RouteWise - Complete Setup Guide for VS Code

Follow these steps to get RouteWise running in VS Code.

---

## ✅ Prerequisites Check

Before starting, ensure you have:

- [ ] **Node.js** version 18 or higher
  - Check: `node --version`
  - Download: https://nodejs.org/

- [ ] **npm** (comes with Node.js) or **pnpm** (recommended)
  - Check: `npm --version`
  - Install pnpm: `npm install -g pnpm`

- [ ] **VS Code** installed
  - Download: https://code.visualstudio.com/

- [ ] **Git** (optional, for version control)
  - Check: `git --version`
  - Download: https://git-scm.com/

---

## 📥 Step 1: Get the Project

### Option A: If you have the project folder
```bash
# Navigate to the project folder
cd path/to/routewise
```

### Option B: If cloning from Git
```bash
git clone <repository-url>
cd routewise
```

---

## 📦 Step 2: Install Dependencies

Choose your preferred package manager:

### Using npm (default)
```bash
npm install
```

### Using pnpm (recommended - faster)
```bash
pnpm install
```

### Using yarn
```bash
yarn install
```

**⏱️ This may take 2-5 minutes depending on your internet speed.**

---

## 🎨 Step 3: Open in VS Code

```bash
# Open the project in VS Code
code .
```

Or manually:
1. Open VS Code
2. File → Open Folder
3. Select the RouteWise project folder

---

## 🔌 Step 4: Install Recommended Extensions

When you open the project, VS Code will prompt you to install recommended extensions:

1. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
2. **Prettier - Code formatter** - Auto-formatting
3. **ESLint** - Code linting

Click **"Install All"** when prompted, or install manually:

1. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
2. Search for each extension
3. Click Install

---

## ▶️ Step 5: Start Development Server

### Using VS Code Terminal

1. Open integrated terminal: `` Ctrl+` `` (or `Cmd+`` on Mac)
2. Run the dev command:

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

You should see output like:
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## 🌐 Step 6: Open in Browser

1. Hold `Ctrl` (or `Cmd` on Mac) and click the URL in terminal
2. Or manually open: `http://localhost:5173`

You should see the RouteWise dashboard! 🎉

---

## 🎯 Verify Everything Works

### ✅ Checklist:

- [ ] Page loads without errors
- [ ] You see the RouteWise navigation bar (dark with gold logo)
- [ ] You see "Create Event" card on the left
- [ ] You see "Live Tracking" map on the right
- [ ] You see "Upcoming Events" section at the bottom
- [ ] Clicking navigation links changes the page
- [ ] No errors in browser console (F12 → Console)

---

## 🛠️ Common Issues & Solutions

### ❌ Issue: "Port 5173 is already in use"

**Solution:**
```bash
# Kill the process using port 5173
npx kill-port 5173

# Then restart
npm run dev
```

Or use a different port:
```bash
npm run dev -- --port 3000
```

---

### ❌ Issue: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

On Windows:
```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

### ❌ Issue: TypeScript errors in VS Code

**Solution:**
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P`)
2. Type: "TypeScript: Restart TS Server"
3. Press Enter

---

### ❌ Issue: Tailwind classes not working

**Solution:**
1. Make sure Tailwind CSS IntelliSense extension is installed
2. Restart VS Code
3. Check that `/src/styles/tailwind.css` exists

---

### ❌ Issue: Styles not loading

**Solution:**
1. Check browser console (F12) for CSS errors
2. Make sure all CSS files are imported in `/src/main.tsx`
3. Clear browser cache (Ctrl+Shift+Delete)
4. Hard reload (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎨 VS Code Tips

### Keyboard Shortcuts

- **Open file**: `Ctrl+P` (Cmd+P)
- **Search in files**: `Ctrl+Shift+F` (Cmd+Shift+F)
- **Terminal**: `` Ctrl+` `` (Cmd+`)
- **Command palette**: `Ctrl+Shift+P` (Cmd+Shift+P)
- **Format document**: `Shift+Alt+F` (Shift+Option+F)
- **Multi-cursor**: `Alt+Click` (Option+Click)

### Useful Commands

```bash
# Format all files
npm run format   # (if configured)

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure Overview

```
RouteWise/
├── src/
│   ├── app/
│   │   ├── components/    ← React components
│   │   ├── pages/         ← Page components
│   │   ├── styles/        ← Component styles
│   │   ├── App.tsx        ← Main app
│   │   └── routes.ts      ← Routes config
│   ├── styles/            ← Global styles
│   ├── utils/             ← Mock API/Socket
│   └── main.tsx           ← Entry point
├── guidelines/            ← Design system docs
├── index.html             ← HTML template
├── package.json           ← Dependencies
├── tsconfig.json          ← TypeScript config
└── vite.config.ts         ← Vite config
```

---

## 🎨 Making Your First Edit

### Test the Hot Reload:

1. Open `/src/app/pages/Dashboard.tsx`
2. Find the heading text
3. Change it to something else
4. Save the file (`Ctrl+S`)
5. Watch the browser update automatically! ⚡

---

## 📚 Next Steps

### Learn the Design System
- Read `/guidelines/README.md`
- Check `/guidelines/Guidelines.md` for quick reference
- Browse `/DESIGN_SYSTEM_SUMMARY.md`

### Explore Pages
- `/` - Main Dashboard
- `/events` - Events page
- `/live-map` - Full-screen map
- `/dashboard` - Authority dashboard

### Customize
- Modify colors in `/src/app/styles/premium-theme.css`
- Add components in `/src/app/components/`
- Update routes in `/src/app/routes.ts`

---

## 🔥 Development Workflow

### Recommended Flow:

1. **Start dev server**: `npm run dev`
2. **Open in browser**: `http://localhost:5173`
3. **Edit code** in VS Code
4. **See changes** automatically in browser
5. **Check console** for errors (F12)
6. **Commit changes** with Git (optional)

---

## 🚀 Building for Production

When ready to deploy:

```bash
# Build optimized production bundle
npm run build

# Output will be in /dist folder
# Preview production build locally
npm run preview
```

The `dist/` folder contains all files ready to deploy to any static hosting service.

---

## 📊 Performance Tips

### For Development:
- Close unused applications to free RAM
- Use `pnpm` instead of `npm` (faster)
- Enable VS Code auto-save: File → Auto Save

### For Better DX:
- Use Chrome DevTools (F12)
- Install React Developer Tools extension
- Use Redux DevTools if using Redux

---

## 🆘 Getting Help

### Resources:
- **React Docs**: https://react.dev/
- **Vite Docs**: https://vitejs.dev/
- **Tailwind Docs**: https://tailwindcss.com/
- **React Router**: https://reactrouter.com/

### Check These First:
1. Browser console (F12 → Console)
2. VS Code terminal output
3. `/README.md` for project overview
4. `/guidelines/` for design system

---

## ✅ Setup Complete Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] VS Code extensions installed
- [ ] Dev server running (`npm run dev`)
- [ ] Browser shows RouteWise dashboard
- [ ] No errors in console
- [ ] Hot reload working (tested)
- [ ] Navigation working (tested all routes)

---

## 🎉 You're Ready!

Your RouteWise development environment is fully set up!

**Happy coding!** 🚀

---

### Quick Reference Commands:

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
code .           # Open in VS Code
```

---

**Need more help?** Check `/README.md` or the `/guidelines/` folder for detailed documentation.
