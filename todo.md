# Projeto Paraíso Frames - Registro de Implementações

## ✅ Concluído
| Data | Tarefa | Status |
|------|--------|--------|
| 2026-03-15 | Incorporar link do Instagram (https://www.instagram.com/paraisoframes/) | ✅ Concluído |
| 2026-03-15 | Incorporar link do LinkedIn (https://www.linkedin.com/in/matheus-barros-015008251/) | ✅ Concluído |
| 2026-03-15 | Incorporar logo paraisoframes.svg no header e footer | ✅ Concluído |

---

## 📋 Tarefas Pendentes

### 1. Implementar API Oficial do Instagram (@paraisoframes)
**Status:** ⏳ Aguardando acesso à conta  
**Método:** API oficial do Meta (Instagram Basic Display API)

#### 1.1 Pré-requisitos do Usuário (A FAZER)
- [ ] Criar conta no [Meta Developer Portal](https://developers.facebook.com/)
- [ ] Criar app tipo "Outro" no Meta Developers
- [ ] Adicionar produto "Instagram Basic Display" ao app
- [ ] Configurar OAuth (URL de redirect, callback)
- [ ] Tornar conta @paraisoframes pública (se for privada)
- [ ] Gerar access token através do fluxo OAuth (fazer login em @paraisoframes)

#### 1.2 Implementação Técnica (APÓS TER ACESSO)
- [ ] Criar serviço/hook para consumir API do Instagram
- [ ] Criar componente InstagramFeed.tsx
- [ ] Integrar ao site (seção dedicada ou no Footer)
- [ ] Estilizar conforme identidade visual
- [ ] Testar e verificar funcionamento

---

## 📝 Notas

### Configuração Meta Developer Portal (Passos):
1. Acesse developers.facebook.com e crie conta
2. Vá em "Meus Apps" → "Criar App" → selecionar "Outro" → "Consumer"
3. No app criado, vá em Products → Add Product → Instagram Basic Display
4. Configure "User Token Generator" com conta @paraisoframes
5. Gere o long-lived access token (60 dias validade)

### Endpoints úteis:
- `GET /me` - informações do usuário
- `GET /me/media` - lista de posts
- `GET /{media-id}` - detalhes de um post específico

### Alternativa futura:
- Instagram Graph API (para funcionalidades mais avançadas)
- Verificação Business (necessária para app em produção)

---

*Última atualização: 2026-03-15*
