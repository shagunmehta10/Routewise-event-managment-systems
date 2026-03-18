# 🚀 How to Run RouteWise in VS Code

## ✅ All Files Are Ready!

All files have been created as regular files in your project folder - **nothing is zipped**. You can run this project in VS Code right now!

---

## 📂 Step 1: Open Project in VS Code

### Option A: Using Terminal
```bash
# Navigate to your project folder
cd /path/to/your/routewise/folder

# Open in VS Code
code .
```

### Option B: Using VS Code
1. Open VS Code
2. Click **File** → **Open Folder**
3. Select your RouteWise project folder
4. Click **Open**

---

## 📦 Step 2: Open Terminal in VS Code

1. In VS Code, press `` Ctrl+` `` (or `Cmd+`` on Mac)
2. Or click: **Terminal** → **New Terminal** from the menu
3. Terminal will open at the bottom of VS Code

---

## ⬇️ Step 3: Install Dependencies

In the VS Code terminal, type:

```bash
npm install
```

Press **Enter** and wait 2-5 minutes for installation to complete.

You'll see output like:
```
added 1234 packages in 3m
```

---

## ▶️ Step 4: Start Development Server

In the same terminal, type:

```bash
npm run dev
```

Press **Enter**. You'll see:
```
  VITE v6.3.5  ready in 1234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🌐 Step 5: Open in Browser

### Option A: Click the Link
Hold `Ctrl` (or `Cmd` on Mac) and click the URL in terminal: **http://localhost:5173/**

### Option B: Manual
Open your browser and go to: **http://localhost:5173**

---

## 🎉 Success!

You should now see the **RouteWise dashboard** with:
- Dark background
- Gold navigation bar
- "Create Event" section on left
- "Live Tracking" map on right
- "Upcoming Events" at bottom

---

## 🔧 Working in VS Code

### File Explorer (Left Sidebar)
- Click files to edit them
- `/src/app/` - Main application code
- `/src/app/pages/` - Page components
- `/src/app/components/` - React components

### Editing Files
1. Click any file to open it
2. Make changes
3. Press `Ctrl+S` (or `Cmd+S`) to save
4. Browser automatically updates! ⚡

### Stop the Server
Press `Ctrl+C` in the terminal

---

## 📁 Your Project Structure

```
RouteWise/                          ← Your project folder
│
├── node_modules/                   ← Created after npm install
├── src/
│   ├── main.tsx                    ← Entry point
│   ├── app/
│   │   ├── App.tsx                 ← Main component
│   │   ├── components/             ← Edit these files
│   │   └── pages/                  ← Edit these files
│   └── styles/
│
├── index.html                      ← HTML template
├── package.json                    ← Dependencies
├── vite.config.ts                  ← Build config
│
└── [Documentation files]
```

---

## ✅ Verify Everything Works

### Check 1: Files Exist
In VS Code File Explorer (left sidebar), you should see:
- ✅ `index.html`
- ✅ `package.json`
- ✅ `src/main.tsx`
- ✅ `src/app/App.tsx`
- ✅ Many documentation files

### Check 2: Terminal Commands Work
```bash
npm run dev
# Should start the server
```

### Check 3: Browser Works
- Open http://localhost:5173
- Should show RouteWise dashboard
- No errors in console (press F12)

---

## 🎨 VS Code Extensions (Optional but Recommended)

When you open the project, VS Code may ask to install recommended extensions:

1. **Tailwind CSS IntelliSense** - Autocomplete for CSS classes
2. **Prettier - Code Formatter** - Auto-format code
3. **ESLint** - Code quality

Click **"Install All"** or install them individually from Extensions (Ctrl+Shift+X)

---

## 🔥 Hot Reload Feature

The app has **hot reload** enabled:

1. Open any file (e.g., `src/app/pages/Dashboard.tsx`)
2. Make a change (change some text)
3. Save the file (`Ctrl+S`)
4. Browser updates automatically - no refresh needed! ⚡

**Try it now!**

---

## 🐛 Troubleshooting

### Problem: "command not found: npm"
**Solution:** Install Node.js from https://nodejs.org/ (version 18+)

### Problem: "Port 5173 is already in use"
**Solution:** 
```bash
npx kill-port 5173
npm run dev
```

### Problem: "Cannot find module"
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: TypeScript errors in VS Code
**Solution:**
1. Press `Ctrl+Shift+P`
2. Type: "TypeScript: Restart TS Server"
3. Press Enter

---

## 💡 Pro Tips

### Multiple Terminals
- Open multiple terminals: `Ctrl+Shift+` `
- One for dev server, one for commands

### Quick File Open
- Press `Ctrl+P` (Cmd+P on Mac)
- Type filename to quickly open it

### Search in Files
- Press `Ctrl+Shift+F` (Cmd+Shift+F on Mac)
- Search across all files

### Format Code
- Press `Shift+Alt+F` (Shift+Option+F on Mac)
- Auto-formats the current file

---

## 📋 Daily Workflow

### Starting Your Day
```bash
# 1. Open VS Code
code .

# 2. Open terminal (Ctrl+`)
# 3. Start dev server
npm run dev

# 4. Open browser
http://localhost:5173
```

### During Development
- Edit files in VS Code
- Save files (Ctrl+S)
- See changes automatically in browser
- Check console for errors (F12)

### Ending Your Day
- Press `Ctrl+C` in terminal to stop server
- Close VS Code

---

## 🎯 What to Edit

### Change Page Content
- Edit files in `/src/app/pages/`
- `Dashboard.tsx` - Main page
- `Events.tsx` - Events page
- `LiveMap.tsx` - Live map page
- `AuthorityDashboard.tsx` - Admin page

### Change Components
- Edit files in `/src/app/components/`
- `Navbar.tsx` - Navigation bar
- `CreateEvent.tsx` - Event form
- `EventCard.tsx` - Event cards
- `LiveTracking.tsx` - Map component

### Change Styles
- Edit files in `/src/app/styles/`
- `premium-theme.css` - Design system colors
- Individual component CSS files

### Change Routes
- Edit `/src/app/routes.ts`
- Add or modify page routes

---

## 📚 Next Steps

1. ✅ **Run the app** (follow steps above)
2. 📖 **Read** [00_READ_ME_FIRST.md](00_READ_ME_FIRST.md)
3. 🎨 **Explore** [DESIGN_SYSTEM_SUMMARY.md](DESIGN_SYSTEM_SUMMARY.md)
4. 💻 **Try editing** a file and see hot reload
5. 🚀 **Build something cool!**

---

## ✅ Success Checklist

- [ ] Opened folder in VS Code
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` successfully
- [ ] Browser shows RouteWise at http://localhost:5173
- [ ] Can navigate between pages
- [ ] No errors in browser console (F12)
- [ ] Can edit files and see changes
- [ ] Hot reload is working

---

## 🎊 You're Ready!

Your project is running in VS Code with:
- ✅ All files as regular files (not zipped)
- ✅ VS Code opened
- ✅ Dev server running
- ✅ Browser showing app
- ✅ Hot reload working

**Happy coding!** 🚀

---

## 📞 Need Help?

- **Quick start**: [START_HERE.md](START_HERE.md)
- **Complete guide**: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- **All commands**: [COMMANDS.md](COMMANDS.md)
- **Find docs**: [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)
