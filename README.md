# SuellenDev — Landing Page

Site institucional da **Suellen Miranda Amorim** (PJ) — desenvolvimento de software sob medida.

**Site publicado:** https://suellenmiranda.github.io/suellen-dev-landing/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- Deploy automático via GitHub Actions → GitHub Pages

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

Abre em `http://localhost:3000`.

## Build

```bash
# Build local (base /)
pnpm build

# Build para GitHub Pages (base /suellen-dev-landing/)
pnpm run build:pages
```

## Publicar no GitHub Pages

1. Faça push na branch `main` — o workflow `.github/workflows/deploy-pages.yml` roda sozinho.
2. No repositório: **Settings → Pages → Source: GitHub Actions**.
3. URL: `https://suellenmiranda.github.io/suellen-dev-landing/`

## Dados de contato (editar em um lugar)

Arquivo: [`client/src/lib/site.ts`](client/src/lib/site.ts)

- Nome legal, CNPJ, WhatsApp, e-mail, redes e assets

## Contato

- WhatsApp: (27) 98847-9887
- E-mail: suellen.org@gmail.com
- LinkedIn: [suellenmiranda](https://linkedin.com/in/suellenmiranda)
- GitHub: [SuellenMiranda](https://github.com/SuellenMiranda)
