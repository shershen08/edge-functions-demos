export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="description" content="${data.metaDescription}">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${data.title}</title>
</head>
  <body>

  <main class="main">
    <h1>${data.title}</h1>

    data.time: ${data.time}

    data.url: ${data.url}

    <section class="home__section">
     data: ${data}

    <hr/>


  </main>
  </body>
</html>
`;
}
