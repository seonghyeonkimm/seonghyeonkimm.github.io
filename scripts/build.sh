# Clean cache and build dir
npm run clean

# Build gatsby
npm run build

# Update Docs folder
rm -rf dist
mv public dist

# Clean again
npm run clean

# git add and commit
git add . && git commit && git push origin dev