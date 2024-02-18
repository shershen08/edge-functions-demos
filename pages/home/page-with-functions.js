export default {
  title: "Geolocation",
  metaDescription:
    "Use Netlify Edge Functions to get information about a user's location to serve location-specific content.",
  page: function ({ geo, time, env }) {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page can has logic</title>
  </head>

  <body>
    <h2>Geolocation</h2>
    geo: {{geo}}<br>
    time: {{time}}<br>
    env: {{env}}<br>
  </body>
</html>`
  }
}
