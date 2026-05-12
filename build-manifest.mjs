import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const outDir = '/sessions/nice-blissful-wright/mnt/웹사이트/자취연구소/out';
const files = [];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    // Skip .vercel, .env files, .gitignore
    if (e.name.startsWith('.env')) continue;
    if (e.name === '.gitignore') continue;
    if (e.name === '.vercel') continue;
    if (e.isDirectory()) walk(p);
    else if (e.isFile()) files.push(p);
  }
}
walk(outDir);

const manifest = files.map(f => {
  const data = fs.readFileSync(f);
  const sha = crypto.createHash('sha1').update(data).digest('hex');
  const relative = path.relative(outDir, f).split(path.sep).join('/');
  return { file: relative, sha, size: data.length };
});

fs.writeFileSync('/tmp/manifest.json', JSON.stringify(manifest));
console.log('files:', manifest.length, 'totalSize:', manifest.reduce((s,x)=>s+x.size,0));
