
# cjs
rm -Rf cjs
npx tsc -m commonjs -d --sourceMap --outDir cjs
echo '{"type":"commonjs"}' > cjs/package.json

# mjs
rm -Rf mjs
npx tsc -d --sourceMap --outDir mjs

# mjs test
npx tsc -m commonjs -p test/tsconfig.json

# test
npm test
