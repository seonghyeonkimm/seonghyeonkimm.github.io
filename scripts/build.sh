# Clean cache and build dir
npm run clean

# Build gatsby
npm run build

# Update Docs folder
mv public docs

# Clean again
npm run clean

# git add and commit
git add . && git commit && git push