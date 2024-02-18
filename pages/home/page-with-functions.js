export default {
  title: "Geolocation",
  metaDescription:
    "Use Netlify Edge Functions to get information about a user's location to serve location-specific content.",
  page: function ({ time }) {
    return `

    <h2>Geolocation</h2>
    geo: {{geo}}<br>
<!--    time: {{time}}<br>
    env: {{env}}<br>-->
  `
  }
}
