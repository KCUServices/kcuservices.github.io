# kcuservices.github.io

Código-fonte do site da **KCU Services**: <https://kcuservices.github.io>

É um site estático simples, servido pelo GitHub Pages a partir do ramo principal:

| Ficheiro | O que é |
|---|---|
| `index.html` | A página principal |
| `estilo.css` | O estilo (sem fontes externas nem CDNs) |
| `404.html` | A página de "não encontrado" |
| `favicon.svg` | O ícone do site |
| `img/` | Imagens dos produtos e prints do KCU Estúdio |
| `.nojekyll` | Diz ao GitHub Pages para servir os ficheiros tal como estão |

**Privacidade:** o site não usa cookies, rastreadores, estatísticas, fontes externas nem scripts de terceiros.

Para ver em casa, sem instalar nada além do Python:

```
python -m http.server 8000 --bind 127.0.0.1
```

e abre `http://127.0.0.1:8000`.

## Licença e marca

O código deste site está sob a licença [PolyForm Noncommercial 1.0.0](LICENSE). O nome KCU, os logótipos e as imagens dos produtos são da KCU Services, com todos os direitos reservados: ver [MARCA.md](MARCA.md).
