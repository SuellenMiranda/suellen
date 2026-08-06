# SuellenDev — Landing Page

Site institucional da **Suellen Miranda Amorim** (PJ) — desenvolvimento de software sob medida.

**Site publicado:** https://suellenmiranda.github.io/suellen/

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- Publicação estática via pasta `docs/` no GitHub Pages

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

# Build para GitHub Pages (base /suellen/)
pnpm run build:pages
```

## Publicar no GitHub Pages

O site publicado fica na pasta `docs/` (fonte: branch `main` → `/docs`).

Depois de alterar o código:

```bash
pnpm run build:pages
rm -rf docs && mkdir docs && cp -R dist/public/. docs/ && cp docs/index.html docs/404.html && touch docs/.nojekyll
```

Commit a pasta `docs/` e faça push. Em **Settings → Pages**: Source = **Deploy from a branch** → `main` / `/docs`.

URL: `https://suellenmiranda.github.io/suellen/`

## Pré-orçamento (e-mail direto)

O formulário envia o pedido para `suellen.dsredev@gmail.com` via [FormSubmit](https://formsubmit.co) (gratuito), sem abrir o app de e-mail do visitante.

**Na primeira vez** que alguém enviar, o FormSubmit manda um e-mail de ativação para você — abra e confirme o link. Depois disso, os pedidos chegam normais na caixa de entrada.

## Dados de contato (editar em um lugar)

Arquivo: [`client/src/lib/site.ts`](client/src/lib/site.ts)

- Nome legal, CNPJ, WhatsApp, e-mail, redes e assets

## Contato

- WhatsApp: (27) 98847-9887
- E-mail: suellen.dsredev@gmail.com
- LinkedIn: [suellenmiranda](https://linkedin.com/in/suellenmiranda)
- Instagram: [@devnosbastidores](https://instagram.com/devnosbastidores)
- GitHub: [SuellenMiranda](https://github.com/SuellenMiranda)
