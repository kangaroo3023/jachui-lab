import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const root = '/sessions/nice-blissful-wright/mnt/웹사이트/자취연구소';
const slug = 'youth-jeonse-loan-comparison-2026';
const templateSlug = 'youth-rent-subsidy-2026-guide';

const mdPath = path.join(root, 'content/posts', `${slug}.md`);
const tmplPath = path.join(root, 'out/posts', templateSlug, 'index.html');
const tmplMdPath = path.join(root, 'content/posts', `${templateSlug}.md`);

const newRaw = fs.readFileSync(mdPath, 'utf8');
const newParsed = matter(newRaw);
const newMeta = newParsed.data;

const tmplMd = matter(fs.readFileSync(tmplMdPath, 'utf8'));
const tmplMeta = tmplMd.data;

const processor = remark().use(remarkGfm).use(remarkHtml, { sanitize: false });
const newHtml = String(await processor.process(newParsed.content));

let tmpl = fs.readFileSync(tmplPath, 'utf8');

// Find <article ...> ... </article> and replace inner contents
const articleOpenRe = /<article([^>]*)>/;
const m = articleOpenRe.exec(tmpl);
const articleClose = '</article>';
const startIdx = m.index;
const innerStart = startIdx + m[0].length;
const innerEnd = tmpl.indexOf(articleClose, innerStart);

let out = tmpl.slice(0, innerStart) + newHtml + tmpl.slice(innerEnd);

// Now substitute metadata - title, description, etc.
out = out.split(tmplMeta.title).join(newMeta.title);
out = out.split(tmplMeta.description).join(newMeta.description);
out = out.split(`/posts/${templateSlug}`).join(`/posts/${slug}`);
out = out.split(tmplMeta.thumbnail).join(newMeta.thumbnail);
out = out.split(`>${tmplMeta.category}<`).join(`>${newMeta.category}<`);
out = out.split(tmplMeta.date).join(newMeta.date);
out = out.split(tmplMeta.keywords.join(',')).join(newMeta.keywords.join(','));
out = out.split(tmplMeta.keywords.join(', ')).join(newMeta.keywords.join(', '));

// Korean date for displayed format like "2026년 4월 30일"
const tDate = new Date(tmplMeta.date);
const nDate = new Date(newMeta.date);
const koDate = (d) => `${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일`;
out = out.split(koDate(tDate)).join(koDate(nDate));

// reading minutes
const words = (s) => s.replace(/\s+/g, ' ').length;
const tMin = Math.max(1, Math.ceil(words(tmplMd.content)/600));
const nMin = Math.max(1, Math.ceil(words(newParsed.content)/600));
// match patterns like ">15<!-- -->분 읽기" etc; use spaced version
out = out.replace(new RegExp(`>${tMin}<!-- -->분`, 'g'), `>${nMin}<!-- -->분`);

const outDir = path.join(root, 'out/posts', slug);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), out);

// Write the .txt version (markdown-like)
const txt = `${newMeta.title}\n\n${newMeta.description}\n\n${newParsed.content}`;
fs.writeFileSync(path.join(outDir, 'index.txt'), txt);

console.log('innerStart:', innerStart, 'innerEnd:', innerEnd);
console.log('Wrote:', outDir);
console.log('html bytes:', fs.statSync(path.join(outDir, 'index.html')).size);
