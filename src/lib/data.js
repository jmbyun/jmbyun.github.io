import { camelize } from 'humps';
import sheets from './sheets';
import { googleApiKey, googleSheetDocId } from '../../config';

sheets.setKey(googleApiKey);

async function getSheetContent(sheet, range) {
  return await sheets.getContent(googleSheetDocId, sheet, range);
}

async function convertDictValue(type, value) {
  switch ((type || '').trim().toLowerCase()) {
    case 'json':
      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('JSON Parse Failed: ', err, value);
        return 'JSON Parse Failed';
      }
    case 'sheet':
      return await getSheet(value);
    default:
      return value;
  }
}

function convertDictContent(content) {
  return Promise.all(
    content.values
      .map(row => convertDictValue(row[1], row[2]))
  ).then(values => (
    values.reduce((acc, curr, i) => ({
      ...acc,
      [content.values[i][0]]: curr,
    }), {})
  ));
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

async function getSheetInfo(sheet) {
  const content = await getSheetContent(sheet, 'A1:B1');
  const sanitize = text => (text || '').trim().toLowerCase();
  return {
    type: sanitize(content.values[0][0]),
    range: sanitize(content.values[0][1]),
  };
}

export async function getSheet(sheet) {
  const info = await getSheetInfo(sheet);
  const content = await getSheetContent(sheet, info.range);
  switch (info.type) {
    case 'dictionary':
      return await convertDictContent(content);
    case 'table':
      return convertTableContent(content);
    default:
      return await convertDictContent(content);
  }
}

export async function getIndexSheet() {
  return await getSheet('Index');
}