import { camelize } from 'humps';
import sheets from './sheets';

const {
  googleApiKey,
  googleSheetDocId,
 } = window.__PAW_CONFIG__;

sheets.setKey(googleApiKey);

async function getSheetContent(sheet, range) {
  return await sheets.getContent(googleSheetDocId, sheet, range);
}

function convertDictValue(type, value) {
  switch ((type || '').trim().toLowerCase()) {
    case 'json':
      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('JSON Parse Failed: ', err, value);
        return 'JSON Parse Failed';
      }
    case 'sheet':
      return getSheet(value);
    default:
      return value;
  }
}

function convertDictContent(content) {
  return content.values
    .map(row => convertDictValue(row[1], row[2]))
    .reduce((acc, curr, i) => ({
      ...acc,
      [content.values[i][0]]: curr,
    }), {});
}

function convertTableContent(content) {
  const keys = content.values[0].map(k => camelize(k));
  return content.values.slice(1).reduce((acc, curr) => [
    ...acc,
    curr.reduce((rowAcc, rowCurr, i) => ({
      ...rowAcc,
      [keys[i]]: rowCurr,
    }), {}),
  ], []);
}

export async function getData() {
  const contents = await Promise.all([
    getSheetContent('Index', 'A3:C'), 
    getSheetContent('Publications', 'A2:E'),
  ]);
  return {
    index: convertDictContent(contents[0]),
    publications: convertTableContent(contents[1]),
  };
}