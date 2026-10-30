const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const file = path.join(dataDir, 'opportunities.json');
const savedFile = path.join(dataDir, 'saved.json');

function load(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return [];
  }
}

function save(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  add(opp) {
    const list = load(file);
    const id = uuidv4();
    list.unshift({ id, ...opp, ts: Date.now() });
    // keep last 200
    save(file, list.slice(0, 200));
    return id;
  },

  getById(id) {
    return load(file).find(o => o.id === id);
  },

  save(opp) {
    const saved = load(savedFile);
    if (!saved.find(s => s.url === opp.url)) {
      saved.unshift(opp);
      save(savedFile, saved.slice(0, 100));
    }
  },

  getSaved() {
    return load(savedFile);
  },

  setLastScan(iso) {
    fs.writeFileSync(path.join(dataDir, 'last_scan.txt'), iso);
  },

  getLastScan() {
    try {
      return fs.readFileSync(path.join(dataDir, 'last_scan.txt'), 'utf8');
    } catch {
      return null;
    }
  }
};
