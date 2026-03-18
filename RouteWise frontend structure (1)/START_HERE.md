# 🎯 START HERE - Quick Launch Guide

**New to RouteWise?** Follow these 3 simple steps to get started!

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies ⬇️

Open terminal in this folder and run:

```bash
npm install
```

**Wait for installation to complete** (2-5 minutes)

---

### Step 2: Start the App ▶️

```bash
npm run dev
```

**Wait for "ready" message** (a few seconds)

---

### Step 3: Open in Browser 🌐

Click this link or copy to browser:

👉 **http://localhost:5173**

---

## ✅ That's It!

You should now see the RouteWise dashboard with:
- Dark premium interface with gold accents
- Navigation bar at the top
- "Create Event" form on the left
- "Live Tracking" map on the right
- "Upcoming Events" at the bottom

---

## 📱 Quick Navigation

- **Dashboard**: http://localhost:5173/
- **Events**: http://localhost:5173/events
- **Live Map**: http://localhost:5173/live-map
- **Authority Dashboard**: http://localhost:5173/dashboard

---

## 🛠️ Troubleshooting

### Problem: Command not found
**Solution:** Install Node.js from https://nodejs.org/ (version 18+)

### Problem: Port already in use
**Solution:** Run this first, then try again:
```bash
npx kill-port 5173
```

### Problem: Module errors
**Solution:** Delete node_modules and try again:
```bash
# Mac/Linux:
rm -rf node_modules
npm install

# Windows:
rmdir /s /q node_modules
npm install
```

---

## 📚 Learn More

- **Complete Setup Guide**: Read `/SETUP_GUIDE.md`
- **Project Overview**: Read `/README.md`
- **Design System**: Browse `/guidelines/` folder
- **Code Structure**: Check `/PROJECT_STRUCTURE.md` (if exists)

---

## 🎨 What's Included?

✅ React 18 + TypeScript  
✅ Vite (super fast!)  
✅ Tailwind CSS  
✅ Premium dark theme with animations  
✅ Mock data (no backend needed)  
✅ Real-time tracking simulation  
✅ Event management system  
✅ Responsive design (mobile, tablet, desktop)  

---

## 🔥 Hot Reload Enabled

Make any code change and watch it update automatically in your browser - no refresh needed!

**Try it:**
1. Open `src/app/pages/Dashboard.tsx`
2. Change any text
3. Save the file
4. See it update instantly! ⚡

---

## 💡 Pro Tips

### Use pnpm (faster):
```bash
npm install -g pnpm
pnpm install
pnpm dev
```

### Open in VS Code:
```bash
code .
```

### View in multiple browsers:
- Chrome: http://localhost:5173
- Firefox: http://localhost:5173
- Safari: http://localhost:5173

---

## 🎯 Next Steps

1. ✅ Got it running? Great!
2. 📖 Read `/README.md` for full documentation
3. 🎨 Check `/guidelines/` to understand the design system
4. 💻 Start editing files in `/src/app/`
5. 🚀 Build something awesome!

---

## 📞 Need Help?

1. Check browser console (F12 → Console tab)
2. Check terminal output for errors
3. Read `/SETUP_GUIDE.md` for detailed help
4. Restart: Stop server (Ctrl+C) and run `npm run dev` again

---

## 🎉 Happy Coding!

You're all set to start building with RouteWise!

**Remember:** The app runs in MOCK MODE - no backend server required. All data is simulated for development.

---

### Quick Commands Reference:

| Command | What it does |
|---------|--------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `code .` | Open in VS Code |

---

**Still stuck?** Read the full guide in `/SETUP_GUIDE.md`
