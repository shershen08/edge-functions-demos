import head from "./head.js";
import header from "./header.js";
import footer from "./footer.js";
import deployButton from "./deploy-button.js";

const explainer = `
<section>
  <h2>What are Edge Functions?</h2>
  <p>Using JavaScript and TypeScript, <a href="https://www.netlify.com/products/?utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Edge%20Functions%20Product%20Page#netlify-edge-functions" target="_blank" rel="noopener">Netlify Edge Functions</a> give you the power to modify network requests to localize content, serve relevant ads, authenticate visitors, A/B test content, and much more! And this all happens at the <strong>Edge</strong> — directly from the worldwide location closest to each user.</p>
  <p>To use Edge Functions on Netlify, add JavaScript or TypeScript files to an edge-functions directory in your project.</p>
  <p><a href="https://docs.netlify.com/edge-functions/overview/?utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Edge%20Functions%20Docs" target="_blank" rel="noopener">Learn more in the docs</a>.</p>
</section>
`;

export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${head({
    title: data.title,
    metaDescription: data.metaDescription,
    url: data.url,
    openGraphImageName: data.openGraphImageName,
  })}
  <body>
  ${header({ title: data.title })}
  <main class="main">



    ${
      data.url.pathname !== "/"
        ? ""
        : `<h1>Edge Functions on Netlify</h1><p>Explore a library of reference examples for learning about Edge Functions on Netlify.</p>`
    }
    ${data.url.pathname !== "/" ? "" : explainer}

    <section class="home__section">
    ${data.content}
    </section>
    <p>
      ${
        data.url.pathname !== "/" ? `<a href="/">Explore more examples</a>` : ""
      }
    </p>

    ${data.url.pathname !== "/" ? explainer : ""}
    <hr/>
    <section>
      <h3>Deploy this site to Netlify</h3>
      <p>Try out Edge Functions on Netlify today! Click the button below to deploy this site with all of its demos to your Netlify account.</p>
      ${deployButton()}
    </section>

  </main>
  ${footer()}
  </body>
</html>
`;
}
