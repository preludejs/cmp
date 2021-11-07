
# cjs
npx tsc -m commonjs
for ts in *.ts test/*.ts; do
  mv -- "${ts%.ts}.js" "${ts%.ts}.cjs"
done

# mjs
npx tsc

# test
npm test
