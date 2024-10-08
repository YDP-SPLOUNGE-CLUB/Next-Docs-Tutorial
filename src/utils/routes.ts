import fs from 'fs'
import path from 'path'

export function getRoutes(dir: string, baseUrl = '') {
  const files: string[] = fs.readdirSync(dir);
  const routes: string[] = [];

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes.push(file);
    } else {
      if (/page.(ts|tsx)/g.test(file)) {
        routes.push(baseUrl);
      }
    }
  });

  return routes;
}
