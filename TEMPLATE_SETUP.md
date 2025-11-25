# Template Setup Complete ✅

This template is ready to be pushed to GitHub as `taskmaster-template`.

## What's Included

### Structure
```
taskmaster-template/
├── .github/workflows/ci.yml    ✅ Automated testing & review
├── .gitignore                  ✅ Ignores node_modules, .env, etc.
├── README.md                   ✅ Student-facing instructions
├── package.json                ✅ Root package for common tests
├── backend/                    ✅ Express.js starter
│   ├── package.json
│   └── src/
│       ├── index.js           (Basic Express server)
│       └── db.js              (Database connection)
├── frontend/                   ✅ React/Vite starter
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx            (Basic React component)
│       ├── main.jsx
│       └── index.css
└── tests/                      ✅ EMPTY (tests injected dynamically)
    └── .gitkeep
```

## Key Features

### ✅ No Test Files
The `tests/` folder is intentionally empty. Tests are injected progressively as students unlock tasks.

**Why?**
- AI-resistant: Students can't copy all tests into ChatGPT on day 1
- Progressive learning: Only see tests for current task

### ✅ Clean Starter Code
- Backend: Basic Express server with health check
- Frontend: Basic React app that connects to backend
- No solutions or hints in the code
- Ready for students to build on

### ✅ CI/CD Ready
- `.github/workflows/ci.yml` configured
- Runs tests for backend, frontend, and common
- Auto-reviews PRs
- Sends webhooks to BuildFlow server

### ✅ Test Scripts
All package.json files have test scripts that exit 0 (pass) until real tests are injected:
- Root: `npm test` → passes
- Backend: `cd backend && npm test` → passes
- Frontend: `cd frontend && npm test` → passes

This ensures CI doesn't fail before tests are added.

## Next Steps

### 1. Push to GitHub

```bash
cd /Users/abhishekmawai/Projects/BuildFlow/templates/task-master

# Initialize git if not already
git init
git add .
git commit -m "Initial TaskMaster template"

# Create GitHub repo
gh repo create BuildFlow-Labs/taskmaster-template --public --source=. --push

# OR push to existing repo
git remote add origin git@github.com:BuildFlow-Labs/taskmaster-template.git
git branch -M main
git push -u origin main
```

### 2. Mark as Template

1. Go to: `https://github.com/BuildFlow-Labs/taskmaster-template/settings`
2. Scroll to "Template repository"
3. Check: ✅ **Template repository**
4. Save

### 3. Test Provisioning

```bash
# Start worker locally
cd /Users/abhishekmawai/Projects/BuildFlow/workers/webhook-handler
npm run dev

# In another terminal, test provision
curl -X POST http://localhost:8787/provision \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test-user-id",
    "userGithubLogin": "testuser",
    "projectId": "PROJECT_ID_FROM_SUPABASE"
  }'
```

Should create: `BuildFlow-Labs/taskmaster-testuser`

### 4. Verify Created Repo

Check the created repo has:
- ✅ All template files
- ✅ First task's tests in `/tests/` folder
- ✅ GitHub Issue #1 created
- ✅ User added as collaborator

## Important Notes

⚠️ **Never commit**:
- Test files with solutions
- `.env` files with secrets
- `node_modules/`

⚠️ **Always keep**:
- `tests/` folder empty in template
- Test scripts returning exit 0
- Clean, minimal starter code

## Maintenance

When updating the template:
1. Edit files in this folder
2. Push changes to GitHub template repo
3. New students automatically get updated version
4. Existing student repos are NOT affected

## Template Versioning

Consider tagging versions:
```bash
git tag -a v1.0.0 -m "Initial stable template"
git push origin v1.0.0
```

Then in code, you can provision from specific versions if needed.
