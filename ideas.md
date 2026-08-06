# Brainstorm de Design — Suellen Miranda Dev

## Referência do projeto
Landing page para empresa de desenvolvimento de software (LTDA), fundadora Suellen Miranda. Foto real da fundadora disponível (fundo roxo, laptop, estilo tech/casual). Público: empresários e empreendedores que precisam de software — linguagem simples, sem jargões. Foco em conversão: orçamento e WhatsApp.

---

## Três Abordagens Estilísticas

### 1. "Executive Minimalism"
- **Muito breve:** Estética clean de alto nível com muito whitespace, tipografia serifada para headings e sans-serif para corpo. Tons de azul-ardósia e cinza neutro. Inspiração em marcas como Stripe e Linear.
- **Probabilidade:** 0.08

### 2. "Warm Tech"
- **Muito breve:** Combina a frieza profissional da tecnologia com calor humano — cores azul petróleo e creme, formas orgânicas suaves, micro-interações que convidam. Inspiração em marcas como Nubank e Notion.
- **Probabilidade:** 0.04

### 3. "Swiss Precision"
- **Muito breve:** Grid assimétrico rigoroso, tipografia grotesca bold, paleta monocromática com accent azul royal. Inspiração em design suíço clássico — ordem, clareza, autoridade.
- **Probabilidade:** 0.03

---

## Abordagem Selecionada: "Executive Minimalism"

### Design Movement
Minimalismo executivo contemporâneo — inspirado em sites de empresas SaaS premium (Stripe, Linear, Vercel). A combinação de muito espaço em branco, tipografia refinada e elementos sutis de profundidade transmite maturidade e confiança.

### Core Principles
1. **Clareza absoluta** — cada elemento tem um propósito. Nada de decoração sem função.
2. **Hierarquia tipográfica forte** — o texto guia o olhar antes de qualquer gráfico.
3. **Profundidade sutil** — sombras suaves, bordas finas e transições de cor criam camadas sem poluição.
4. **Respiração visual** — espaçamento generoso entre seções e elementos.

### Color Philosophy
A paleta em tons de azul, branco e cinza não é aleatória. O azul-ardósia (slate blue) transmite confiança e tecnologia sem ser frio demais. O branco puro dá clareza e profissionalismo. Os cinzas neutros criam hierarquia visual sem competir. O accent em azul royal (#2563EB) é a cor de ação — usada apenas em CTAs e destaques.

- **Background principal:** #FFFFFF (branco puro)
- **Background alternado:** #F8FAFC (slate-50)
- **Texto principal:** #1E293B (slate-800)
- **Texto secundário:** #64748B (slate-500)
- **Accent/CTA:** #2563EB (blue-600)
- **Accent hover:** #1D4ED8 (blue-700)
- **Bordas:** #E2E8F0 (slate-200)

### Layout Paradigm
Grid assimétrico com seções alternadas. Hero em tela cheia com layout 2 colunas (texto + imagem). Seções de conteúdo com alternância de fundo branco/cinza. Cards em grid 3 colunas com espaçamento generoso. Formulário de contato centralizado com campo generoso.

### Signature Elements
1. **Linhas finas de separação** — em vez de sombras pesadas, linhas de 1px criam divisão entre seções.
2. **Ícones de traço fino** — Lucide icons em peso fino, tamanho consistente, com tint azul suave.
3. **Botões com micro-anel de glow** — CTA principal com sutil glow azul no hover.

### Interaction Philosophy
- Hover suaves em cards (leve elevação com shadow).
- Botões com transition de 150ms e scale(0.97) no active.
- Fade-in com stagger nas seções ao scrollar (IntersectionObserver).
- Formulário com feedback visual imediato nos campos.

### Animation
- **Entrada de seções:** fade-in + translateY(20px) → 0, duration 500ms, ease-out.
- **Stagger entre cards:** 80ms entre cada item.
- **Hover em botões:** scale(0.97) em 100ms + slight brightness.
- **Smooth scroll** entre seções do nav.
- Respeitar `prefers-reduced-motion`.

### Typography System
- **Headings:** "Plus Jakarta Sans" — moderna, geométrica, com peso bold/extra-bold.
- **Corpo:** "Inter" — legível, neutra, excelente para texto longo.
- **Hierarchy:**
  - H1: 3rem (48px), bold 800, tracking-tight
  - H2: 2.25rem (36px), bold 700, tracking-tight
  - H3: 1.5rem (24px), semibold 600
  - Body: 1rem (16px), regular 400, leading-relaxed
  - Small: 0.875rem (14px), regular 400

### Brand Essence
**"Tecnologia que conversa com seu negócio."** — Para empresários e empreendedores que precisam de soluções digitais sem complicação. Diferente porque entrega atendimento direto, sem intermediários.

**3 adjetivos:** Confiável. Acessível. Profissional.

### Brand Voice
- Headlines: Diretas, orientadas a resultado. Sem jargão.
- CTAs: Ação clara e amigável.
- Microcopy: Simples, explicativa.

Exemplos:
- "Seu problema, nossa solução."
- "Fale direto com quem vai desenvolver seu projeto."

### Wordmark & Logo
Logo icônico: um símbolo geométrico abstrato em azul royal — combinação de um "S" estilizado com formas de código/circuito, representando software e a inicial da fundadora. Monograma em SVG, fundo transparente.

### Signature Brand Color
**Azul Royal #2563EB** — A cor que aparece em CTAs, ícones ativos e destaques. É a "marca registrada" visual que o visitante associa à ação e confiança.
