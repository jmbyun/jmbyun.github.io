const URL_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';

class Sheets {
  constructor() {
    this.key = null;
  }

  validateKey() {
    if (this.key === null) {
      throw Error('Use setKey(key) method to set API key for using Google API first.');
    }
  }

  setKey(key) {
    this.key = key;
  }

  async getContent(docId, sheet, range) {
    this.validateKey();

    const url = `${URL_BASE}/${docId}/values/${sheet}!${range}?key=${this.key}`;
    const response = await fetch(url);
    return response.json();
  }
}

export default new Sheets();
