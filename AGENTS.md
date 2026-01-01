# Repository Guidelines

## Project Structure & Module Organization
Site content lives in `content/` (Markdown pages plus front matter), with publishable posts grouped under `content/work/<slug>/`. Global configuration and navigation live in `config/_default/` (`hugo.yaml`, `params.yaml`, `menus.yaml`, `module.yaml`). Shared media sits in `assets/` (store per-post media inside `assets/post-name/`), while `workshop/` holds notebooks, scripts, and research artifacts that should not be published without review. The minimal `main.py` and `pyproject.toml` exist for Python-based experiments; keep them decoupled from Hugo output.

## Build, Test & Development Commands
`hugo server -D` – start a live-reload preview (serve drafts and check for broken links at http://localhost:1313).  
`hugo --gc --minify` – produce a production-ready build and clean unused assets.  
`hugo mod get github.com/Chrede88/qubt@vX.Y.Z` – upgrade the theme when needed.  
`uv run python main.py` – smoke-test any Python helper scripts defined in `pyproject.toml`.

## Coding Style & Naming Conventions
Use two-space indentation in YAML (see `params.yaml`) and keep keys in lowercase-with-dashes. Markdown files require TOML or YAML front matter with `title`, `date`, `draft`, and `summary` fields; slug folders and image names should be lowercase with hyphens (e.g., `content/work/gp-priors/`, `assets/gp-priors/plot.png`). Prefer American spelling for UI copy and wrap prose at ~100 characters. Python snippets should follow PEP 8 and stay type-hinted when practical.

## Testing Guidelines
Treat `hugo --gc --minify` as the regression test; builds must finish without warnings. For visual QA, run `hugo server -D`, check responsive layouts, and verify that menu items defined in `menus.yaml` resolve to actual routes. When editing configs, run `hugo mod tidy` if module hashes drift, and confirm `public/` diffs only include intended pages. There is no automated unit test suite yet—document manual test notes in the PR description.

## Commit & Pull Request Guidelines
Commits follow the short, imperative style already in history (`shorten title`, `update content`). Keep them scoped, referencing issues or TODOs when relevant. PRs should describe the change, list any new content directories touched, note manual test commands, and include screenshots/GIFs for visual tweaks. Link the deployment preview or `hugo --gc --minify` output when asking for review.

## Security & Configuration Tips
Do not commit secrets; reference them via environment variables consumed by Hugo. Before merging, diff `config/_default/*.yaml` to make sure only intended params changed, and verify new links in `params.yaml` or `menus.yaml` use HTTPS.
