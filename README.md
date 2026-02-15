# kaiying.me

Kaiying Wu's academic personal website.

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `kaiying-wu.github.io` or any name)
2. Push the contents of this `site/` folder to the repository's `main` branch
3. Go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
4. Configure custom domain `kaiying.me` (see below)

## Custom Domain Setup

### In GitHub (already done)
The `CNAME` file is included, pointing to `kaiying.me`.

### In your DNS provider
Add these DNS records for `kaiying.me`:

**A Records** (point apex domain to GitHub Pages):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (if using `www`):
```
www  →  <your-username>.github.io
```

### Enable HTTPS
In **Settings → Pages**, check **Enforce HTTPS** after DNS propagation (may take up to 24h).

## Local Preview
```bash
python -m http.server 8080 --directory .
```
Then open http://localhost:8080
