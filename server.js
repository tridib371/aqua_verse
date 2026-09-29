const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const memoryCache = new Map();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.ico': 'image/x-icon'
};

// Pre-cache all frames and audio into RAM
console.log('Pre-caching full scenario and audio into RAM...');
const startTime = Date.now();

// 1. Cache audio
const audioPath = path.join(ROOT_DIR, 'audio.mp3');
if (fs.existsSync(audioPath)) {
  memoryCache.set('/audio.mp3', {
    buffer: fs.readFileSync(audioPath),
    ext: '.mp3'
  });
  console.log('Pre-cached audio.mp3 into RAM.');
}

// 2. Cache frames
const framesFolder = path.join(ROOT_DIR, 'all-frames');
if (fs.existsSync(framesFolder)) {
  const files = fs.readdirSync(framesFolder);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const fullPath = path.join(framesFolder, file);
      const urlPath = `/all-frames/${file}`;
      memoryCache.set(urlPath, {
        buffer: fs.readFileSync(fullPath),
        ext: path.extname(file).toLowerCase()
      });
    }
  }
}
console.log(`Pre-cached ${memoryCache.size} items in ${Date.now() - startTime}ms.`);

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  // Fast path: serve from RAM memory cache
  if (memoryCache.has(reqPath)) {
    const item = memoryCache.get(reqPath);
    res.writeHead(200, {
      'Content-Type': MIME_TYPES[item.ext] || 'application/octet-stream',
      'Content-Length': item.buffer.length,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=31536000, immutable'
    });
    return res.end(item.buffer);
  }

  const safePath = path.normalize(path.join(ROOT_DIR, reqPath));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Accept-Ranges': 'bytes'
    };

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.mp3') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      headers['Pragma'] = 'no-cache';
      headers['Expires'] = '0';
    }

    res.writeHead(200, headers);
    fs.createReadStream(safePath).pipe(res);
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error(err);
    }
  });
}

startServer(3000);
