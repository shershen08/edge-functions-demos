// LAYOUT
import layout from "../../components/layout.js";

// PAGES
import pageHome from "../../pages/home/index.js";
import pageWithFunctions from "../../pages/home/page-with-functions.js";

// ROUTER
const pages = {
    home: pageHome,
    functions: pageWithFunctions
}

// TEMPLATE
export default (request, context) => {
    const url = new URL(request.url);
    const path = context.params?.page || "home";

    console.log(`serve page for ${url} `);

    // render the appropriate page with the global layout
    const html = layout({
      url: url,
      title: pages[path].title,
      content: pages[path].page({ geo: context.geo, env: context.env, time: context.time}),
      metaDescription: pages[path].metaDescription,
    });

    // send our response
    return new Response(html, {
      headers: { "content-type": "text/html" },
    });
  };

export const config = {
    path: ["/", "/example/:page"],
  };
