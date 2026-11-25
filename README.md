# Client website mockups

A reusable home for client website concepts published with GitHub Pages. Each project lives in its own folder under `site/previews/`; every folder gets a stable shareable URL.

## Live previews

- Family Therapy Podcast: https://izomanuel.github.io/client-website-mockups/previews/family-therapy-podcast/

## Add a mockup

1. Create a URL-friendly folder under `site/previews/`, for example `site/previews/example-client/`.
2. Put that mockup's `index.html` and any local assets inside its folder. Use relative asset paths such as `assets/css/site.css` so the preview works from its nested URL.
3. Add a link to the preview in `site/index.html` under **Current previews**.
4. Commit and push to `main`. GitHub Actions publishes the entire `site/` directory automatically.
5. Share `https://izomanuel.github.io/client-website-mockups/previews/example-client/` with the client.

Remove the preview's row from `site/index.html` when retiring it. The repository and all Pages content are public, so do not put private client information, unpublished credentials, or confidential assets here. Use clearly marked draft content for review mockups.

## Local preview

Open `site/index.html` in a browser, or run a local static server from `site/` (for example, `python3 -m http.server 8000 --directory site`).
