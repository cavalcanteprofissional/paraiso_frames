# Projeto Paraíso Frames - Registro de Implementações

## ✅ Concluído
| Data | Tarefa | Status |
|------|--------|--------|
| 2026-03-15 | Incorporar link do Instagram (https://www.instagram.com/paraisoframes/) | ✅ Concluído |
| 2026-03-15 | Incorporar link do LinkedIn (https://www.linkedin.com/in/matheus-barros-015008251/) | ✅ Concluído |
| 2026-03-15 | Incorporar logo paraisoframes.svg no header e footer | ✅ Concluído |

---

## 📋 Tarefas Pendentes

### Instagram Feed Dinâmico

#### 1.1 Pré-requisitos do Usuário (A FAZER)
- [ ] Criar conta no [Meta Developer Portal](https://developers.facebook.com/)
- [ ] Criar app tipo "Outro" no Meta Developers
- [ ] Adicionar produto "Instagram Basic Display" ao app
- [ ] Configurar OAuth (URL de redirect, callback)
- [ ] Tornar conta @paraisoframes pública (se for privada)
- [ ] Gerar access token através do fluxo OAuth (fazer login em @paraisoframes)

#### 1.2 Implementação Técnica
- [x] Template hook `useInstagramFeed.ts` | **Status:** ✅ Concluído
- [x] Componente `InstagramFeed.tsx` (carousel) | **Status:** ✅ Concluído
- [x] Seção `InstagramSection.tsx` com fallback | **Status:** ✅ Concluído
- [ ] Configurar variáveis de ambiente | **Pendente** (aguardando access token)
- [ ] Integrar à LandingPage | **Pendente**
- [ ] Testar e verificar funcionamento | **Pendente**

---

## 📝 Especificação Técnica

### Configuração Meta Developer Portal (Passos):
1. Acesse developers.facebook.com e crie conta
2. Vá em "Meus Apps" → "Criar App" → selecionar "Outro" → "Consumer"
3. No app criado, vá em Products → Add Product → Instagram Basic Display
4. Configure "User Token Generator" com conta @paraisoframes
5. Gere o long-lived access token (60 dias validade)

### Variáveis de Ambiente (`.env`):
```env
VITE_INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
VITE_INSTAGRAM_USER_ID=seu_user_id_aqui
```

### Endpoints da API:
- `GET /me` - informações do usuário
- `GET /me/media` - lista de posts
- `GET /{media-id}` - detalhes de um post específico
- `GET /{media-id}/children` - mídia crianças (para albums)

### Componentes:
| Componente | Descrição |
|-----------|-----------|
| `useInstagramFeed.ts` | Hook para consumir API e gerenciar cache |
| `InstagramFeed.tsx` | Carousel com posts (Swiper) |
| `InstagramSection.tsx` | Seção wrapper com fallback |

### Layout:
- Carousel responsivo (Swiper)
- Fallback: Card com link para perfil + mensagem

---

## 📋 Tarefas de Teste

### Testes a executar:
- [ ] Verificar se a API retorna dados corretamente
- [ ] Testar responsividade em diferentes tamanhos de tela
- [ ] Verificar fallback quando API não configurada
- [ ] Testar performance (lazy loading das imagens)
- [ ] Verificar acessibilidade (keyboard navigation)

---

*Última atualização: 2026-04-15*