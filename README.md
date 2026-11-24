# kcuservices.github.io

Código-fonte do site da **KCU Services**: <https://kcuservices.github.io>

É um site estático, servido pelo GitHub Pages a partir do ramo principal, sem passo de compilação:

| Ficheiro | O que é |
|---|---|
| `index.html` | A página principal |
| `estilo.css` | Todo o estilo (um só ficheiro) |
| `app.js` | Script pequeno e opcional: revela as secções ao descer e marca a navegação. Sem ele, a página funciona igual |
| `404.html` | A página de "não encontrado" |
| `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`, `img/logo-kcu.webp` | O logótipo da KCU Services (todos os direitos reservados, ver MARCA.md) |
| `fontes/` | A fonte Inter (subconjunto em WOFF2) e a sua licença ([OFL](fontes/OFL.txt)) |
| `img/` | Prints do KCU Estúdio e do homelab, imagens dos produtos e a imagem de partilha (`og.jpg`) |
| `robots.txt` | Deixa os motores de busca ler o site |
| `.nojekyll` | Diz ao GitHub Pages para servir os ficheiros tal como estão |

**Privacidade:** o site não usa cookies, rastreadores, estatísticas, fontes externas nem scripts de terceiros. Não faz nenhum pedido fora deste domínio.

Para ver em casa, sem instalar nada além do Python:

```
python -m http.server 8000 --bind 127.0.0.1
```

e abre `http://127.0.0.1:8000`.

## Licença e marca

O código deste site está sob a licença [PolyForm Noncommercial 1.0.0](LICENSE). A fonte Inter tem a sua própria licença, a [SIL Open Font License 1.1](fontes/OFL.txt). O nome KCU, os logótipos e as imagens dos produtos são da KCU Services, com todos os direitos reservados: ver [MARCA.md](MARCA.md).
