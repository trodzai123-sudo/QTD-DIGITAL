import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');

const concatParts = (dir) =>
  fs.readdirSync(path.join(root, dir))
    .filter((name) => name.endsWith('.part'))
    .sort()
    .map((name) => fs.readFileSync(path.join(root, dir, name), 'utf8'))
    .join('');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

fs.writeFileSync(path.join(dist, 'index.html'), concatParts('src/index'), 'utf8');
fs.writeFileSync(path.join(dist, 'styles.css'), concatParts('src/styles'), 'utf8');

for (const file of ['app.js', 'favicon.svg', '_headers']) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}

console.log('QTD Digital build complete.');
