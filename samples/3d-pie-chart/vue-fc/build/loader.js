(function () {
  loadData('../../data.json')
    .then((data) => {
      window.loadApp(data);
    })
    .catch((err) => {
      document.body.innerHTML = `<p><span style='color: red; font-weight: bold;'>Error:</span> ${err.message}</p>`;
    });

  function loadData(url) {
    return window.fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Sample data could not be loaded');
        }
        return response;
      })
      .then(response => response.json());
  }
}());
