const { Layout } = require("es6views");

class DashboardLayout extends Layout {
  parse() {
    const {
      _data: { title },
    } = this;

    const { _markup: markup } = this;

    let htmlMarkup = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <title>${title}</title>
                <script type="module" crossorigin src="/index.js"></script>
                <link rel="stylesheet" href="/index.css">
            </head>
            <body>`;

    htmlMarkup += [this.content()].join("");

    htmlMarkup += `</body>
        </html>`;

    this._markup = htmlMarkup;

    return markup;
  }

  content() {
    return `<div id="root"></div>`;
  }

  script() {
    const {
      data: { urls },
    } = this;

    const data = Object.keys(urls).map((i) => {
      const key = i.split("_").join("-").toLowerCase();

      const version = "admin";

      return { [`data-${key}`]: urls[i] + version };
    });

    return `<script>
        window.urls =${JSON.stringify(data)};
    </script>
    <script>

    window.urls.forEach(url => {
        for(let [key, value] of Object.entries(url)) {
            window['urls'][key] = value;
        }
    })
        </script>`;
  }
}

module.exports = DashboardLayout;
