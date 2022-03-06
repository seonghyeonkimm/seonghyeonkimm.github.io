# Clean cache and build dir
npm run clean

# Build gatsby
npm run build

# Update Docs folder
rm -rf docs
mv public docs

# Clean again
npm run clean

## push to github
git add . && git push origin main
