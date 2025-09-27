# 🔄 TwitterReplace – Plugin para Vencord

Um plugin inteligente para o [Vencord](https://github.com/Vencord/Vencord) que substitui automaticamente links do **Twitter/X** por alternativas otimizadas como **fxtwitter.com** e **vxtwitter.com**.

Transforme links quebrados em embeds funcionais e melhore a experiência de visualização de tweets no Discord! ✨

---

## 🚀 Por que usar?

- 🔧 **Corrige embeds quebrados** do Twitter/X no Discord
- ⚡ **Carregamento mais rápido** das prévias de tweets
- 🎯 **Substituição automática** e transparente
- 🧹 **Remove parâmetros desnecessários** das URLs
- 📱 **Funciona com todos os tipos** de links do Twitter/X

---

## ✨ Recursos

| Recurso | Descrição |
|---------|-----------|
| 🔁 **Substituição automática** | Converte links do Twitter/X para domínios alternativos |
| ⚙️ **Configuração flexível** | Escolha o domínio de sua preferência |
| 🧹 **Limpeza de URLs** | Remove parâmetros desnecessários (ex: \`?s=20&t=abc\`) |
| 🔔 **Notificações opcionais** | Toast discreto quando a substituição ocorre |
| 🎯 **Detecção inteligente** | Funciona com twitter.com, x.com e mobile.twitter.com |

---

## 📦 Instalação

### Pré-requisitos
- [Vencord](https://vencord.dev/) instalado e funcionando
- Discord Desktop ou Discord Web

### Passos de instalação

1. **Baixe o plugin**
   \```
   Baixe o arquivo TwitterReplace.ts
   \```

2. **Localize a pasta do Vencord**
   \```
   Vencord/src/userplugins/
   \```
   > 💡 **Dica:** Se a pasta \`userplugins\` não existir, crie-a manualmente

3. **Cole o arquivo baixado** na pasta \`userplugins\`

4. **Recompile o Vencord**
   \```bash
   pnpm build
   \```

5. **Ative o plugin**
   - Abra as configurações do Vencord no Discord
   - Vá para "Plugins" → "TwitterReplace"
   - Clique em "Ativar"

---

## ⚙️ Configurações

| Opção | Descrição | Padrão |
|-------|-----------|---------|
| **enabled** | Ativa/desativa o plugin | \`true\` |
| **replaceWith** | Domínio de substituição | \`fxtwitter.com\` |
| **removeQuery** | Remove parâmetros extras da URL | \`true\` |
| **showToast** | Mostra notificação quando substitui | \`false\` |

### Domínios suportados:
- \`fxtwitter.com\` (recomendado)
- \`vxtwitter.com\`
- \`fixupx.com\`

---

## 💡 Exemplos de uso

### Antes ❌
\```
https://twitter.com/elonmusk/status/1234567890?s=20&t=abcdef
\```
*Embed quebrado ou não carrega*

### Depois ✅
\```
https://fxtwitter.com/elonmusk/status/1234567890
\```
*Embed perfeito com prévia completa*

### Outros exemplos:
- \`https://x.com/username/status/123\` → \`https://fxtwitter.com/username/status/123\`
- \`https://mobile.twitter.com/user/status/456\` → \`https://fxtwitter.com/user/status/456\`

---

## 🔧 Solução de problemas

### Plugin não aparece nas configurações
- Verifique se o arquivo está na pasta correta: \`Vencord/src/userplugins/\`
- Recompile o Vencord: \`pnpm build\`
- Reinicie o Discord

### Links não são substituídos
- Confirme se o plugin está ativado
- Verifique se a opção \`enabled\` está marcada
- Teste com um link diferente do Twitter

### Embeds ainda não funcionam
- Experimente outro domínio de substituição (vxtwitter.com)
- Aguarde alguns segundos para o Discord processar o embed

---

## 🤝 Contribuindo

Encontrou um bug ou tem uma sugestão? 

1. Abra uma [issue](../../issues)
2. Fork o projeto
3. Crie sua feature branch
4. Commit suas mudanças
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo \`LICENSE\` para mais detalhes.

---

## ⭐ Gostou?

Se este plugin foi útil para você, considere dar uma ⭐ no repositório!
