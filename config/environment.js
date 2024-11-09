/**
 * Read configuration information from JSON file
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { readFile } from 'fs/promises';

const config = JSON.parse(
  await readFile(new URL('../envconfig.json', import.meta.url))
);

export default config;
