const template = (html, css) => (`<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Page Title</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
    <meta name="Description" content="Test page">
    <style id="jss-server-side">${css}</style>
  </head>
  <body>
    <div id="reactContainer">${html}</div>
    <script src="./client.js"></script>
  </body>
  </html>`);

export default template;
