import * as fs from 'fs';
import * as path from 'path';

const loadGQLFile = (type) => {
  const filePath = path.join(__dirname, '../api', type);
  return fs.readFileSync(filePath, 'utf-8');
};

module.exports = loadGQLFile;
