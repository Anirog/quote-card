
# Git Cheat Sheet – For My Blog Project

## ✅ Everyday Commands

| Action                          | Command                                                             |
|---------------------------------|---------------------------------------------------------------------|
| Check current branch            | `git branch`                                                        |
| Switch to an existing branch    | `git switch branch-name`                                            |
| Create & switch to a new branch | `git switch -c feature/my-change`                                   | 
| See changes                     | `git status`                                                        |
| Add changes                     | `git add .`                                                         |
| Commit changes                  | `git commit -m "Describe your changes"`                             |
| Push changes (first time)       | `git push -u origin feature/my-change`                              |
| Push changes (after first time) | `git push`                                                          |
| Pull latest from GitHub         | `git pull`                                                          |

---

## 🚀 Feature Branch Workflow

1. Create and switch to a new branch:
   ```bash
   git switch -c feature/add-mobile-nav
   ```

2. Work on your changes (HTML, CSS, Python, etc.)

3. Check your changes:
   ```bash
   git status
   ```

4. Commit:
   ```bash
   git add .
   git commit -m "Add mobile nav toggle functionality"
   ```

5. Push the new branch:
   ```bash
   git push -u origin feature/add-mobile-nav
   ```

---

## 🔀 Merge a Feature Branch into `main`

1. Switch to `main`:
   ```bash
   git switch main
   ```

2. Pull the latest updates:
   ```bash
   git pull
   ```

3. Merge your feature branch:
   ```bash
   git merge feature/add-mobile-nav
   ```

4. Push `main` to GitHub:
   ```bash
   git push
   ```

---

## 🧹 Clean Up Feature Branches

Delete locally:
```bash
git branch -d feature/add-mobile-nav
```

Delete on GitHub:
```bash
git push origin --delete feature/add-mobile-nav
```