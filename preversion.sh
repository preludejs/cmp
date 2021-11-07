
# cjs
rm -Rf cjs
npx tsc -m commonjs --outDir cjs
echo '{"type":"commonjs"}' > cjs/package.json

# mjs
npx tsc

# test
npm test
