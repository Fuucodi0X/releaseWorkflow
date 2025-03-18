// Fetch version from public URL
fetch('/VERSION')
  .then(response => response.text())
  .then(version => {
    document.getElementById('app-title').textContent = `MyApp - v${version.trim()}`;
  });