
# cjs
rm -Rf cjs
npx tsc -m commonjs -d --outDir cjs
echo '{"type":"commonjs"}' > cjs/package.json

# mjs
npx tsc

# test
npm test
