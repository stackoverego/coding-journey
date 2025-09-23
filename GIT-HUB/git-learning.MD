# 🌟 LEARNING GITHUB BASICS

![Repo Size](https://img.shields.io/github/repo-size/stackoverego/coding-journey)
![Last Commit](https://img.shields.io/github/last-commit/stackoverego/coding-journey)
![Stars](https://img.shields.io/github/stars/stackoverego/coding-journey)

---

## 🚀 How to Upload a Project to GitHub

✅ **1. INITIALIZE GIT (only once per project)**

```bash
git init
```

- 🛠️ this command is used to make the local repo as the git global repo.
- ⚠️ if reinitialized existing git repository then the repo is already a git repo.

---

✅ **2. STAGE ALL FILES**

```bash
git add .
```

- 📂 `.` means stage all files.
- 📌 staging means the files are ready to save on the git hub.

---

✅ **3. COMMIT WITH MESSAGE**

```bash
git commit -m "Initial commit"
```

- 📝 `-m` stands for message.
- 💬 "message" for the commit.

---

✅ **4. CONNECT LOCAL REPO TO GITHUB**

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

- 🔗 YOUR_USERNAME and YOUR_REPO are replaced with your information.
- ⚡ if you already connected remotely to a file and repeating the same process that will give you error,if you want to change the repo so you must have to remove it first.

```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

---

✅ **5. CHANGE REPO**
-  whenever you have to change the repo you have to use 
```bash
git remote set-url origin <NEW_URL>
```
- then again start from `git add .` commands

---

✅ **6. CHECK CONNECTED REPO**
-  whenever you are forgot or confused and want to know in which repo you are currently working in. 
```bash
git remote -v
```
- this will give you the link of repo you are working in.

---


✅ **7. PUSH INTO GITHUB**

```bash
git push -u origin main
```

- 🌿 if branch is master then use master in place of main.
- 🔐 if you are doing the first push , so browser may ask for authentication.
- 🌍 open browser -> login -> authorize.

---


✅ **7. REMOVE FILES FROM STAGGING**

```bash
git reset ( for all files )
git reset <filename>
```

- 🌿 if you want to unstage the files after the add command .

---

✅ **8. ADD GITIGNORE FILE**

```bash
touch .gitignore
```

- 🔒 this file ensures that sensitive information is not added while uploading the projects.
- Add these lines in `.gitignore` to ignore sensitive files:

```
node_modules/
.env
.DS_Store
```

- ⚠️ this process should be done before staging the project.

---




## 🧠 Notes:

- 🗂️ after writing the filename inside the .gitignore file , to untrack the specific file we will use

```bash
git rm --cached <file>
```

- 🔄 in every new project you have to use git init,remote link, commit and push process.
- 👀 `git status` command is used to check the state of project.
- 📜 `git log` command shows the commits records.

---

## 🔄 If you have to save the changes in the existing repo use the below 3 commands :

```bash
git add .
git commit -m "your message"
git push
```
