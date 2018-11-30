

function renderMarkdown(url, elementId) {
  axios.get(url)
    .then(function (response) {
      document.getElementById(elementId).innerHTML = marked(response.data);
    })
    .catch(function (error) {
      document.getElementById(elementId).innerHTML = 'Failed to load the content.';
      console.error(error);
    });
}

function init() {
  renderMarkdown('./docs/about.md', 'about');
  renderMarkdown('./docs/body.md', 'body');
}

init();
