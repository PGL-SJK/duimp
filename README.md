# 🚀 Site Evento DUIMP - PGL Agente de Cargas

Site profissional para inscrição e pesquisa de data do evento sobre DUIMP (Declaração Única de Importação) em São José dos Campos.

## 📋 Sobre o Projeto

Landing page moderna e responsiva para:
- Divulgar evento sobre DUIMP
- Capturar preferência de data dos participantes
- Coletar informações de inscrição
- Armazenar dados automaticamente no Google Sheets

## 🎯 Funcionalidades

✅ Design moderno e profissional focado em Comércio Exterior  
✅ Totalmente responsivo (mobile, tablet, desktop)  
✅ Formulário completo de inscrição  
✅ Integração automática com Google Sheets  
✅ Validação de dados  
✅ Máscara de telefone brasileira  
✅ Animações suaves  
✅ SEO otimizado  

## 📁 Estrutura do Projeto

```
duimp-evento/
├── index.html                    # Página principal
├── style.css                     # Estilos e design
├── script.js                     # JavaScript do formulário
├── google-sheets-script.js       # Código para Google Apps Script
├── assets/
│   └── logo.png                 # Logo da PGL (VOCÊ PRECISA ADICIONAR)
└── README.md                     # Este arquivo
```

## 🔧 Configuração - Passo a Passo

### 1️⃣ Adicionar a Logo

1. Crie uma pasta chamada `assets` na raiz do projeto
2. Coloque sua logo com o nome `logo.png` dentro da pasta `assets/`
3. Formato recomendado: PNG com fundo transparente
4. Tamanho recomendado: 200x60px (proporção 10:3)

### 2️⃣ Configurar Google Sheets

#### A) Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Dê um nome: "Inscrições Evento DUIMP"

#### B) Configurar o Google Apps Script

1. Na planilha, vá em: **Extensões** → **Apps Script**
2. Apague todo o código padrão
3. Abra o arquivo `google-sheets-script.js` deste projeto
4. **Copie TODO o conteúdo** e cole no editor do Apps Script
5. Clique no ícone de **disquete** para salvar
6. Dê um nome ao projeto: "API Inscrições DUIMP"

#### C) Implantar como Web App

1. No Apps Script, clique em **Implantar** → **Nova implantação**
2. Clique no ícone de **engrenagem** ⚙️ e selecione **Aplicativo da web**
3. Configure:
   - **Descrição**: "API de Inscrições Evento DUIMP"
   - **Executar como**: **Eu** (sua conta)
   - **Quem tem acesso**: **Qualquer pessoa**
4. Clique em **Implantar**
5. **Autorize o acesso** (pode aparecer aviso de segurança, clique em "Avançado" → "Ir para projeto")
6. **COPIE A URL** gerada (algo como: `https://script.google.com/macros/s/AKfycbz.../exec`)

#### D) Conectar o Site ao Google Sheets

1. Abra o arquivo `script.js` do projeto
2. Na linha 8, substitua `'SUA_URL_AQUI'` pela URL que você copiou:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz.../exec';
```

3. Salve o arquivo

### 3️⃣ Testar Localmente (2 min)

1. Abra o arquivo `index.html` no navegador
2. Navegue pelo site e veja o design
3. Role até o formulário Microsoft Forms
4. Teste o formulário (dados vão para seu Microsoft Forms)
5. Verifique a responsividade redimensionando a janela

### 4️⃣ Publicar no GitHub Pages

#### A) Criar Repositório

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em **New repository** (ou ícone +)
3. Configure:
   - **Nome**: `evento-duimp` (ou outro nome)
   - **Público** ou **Privado** (recomendo Público para GitHub Pages gratuito)
   - **NÃO** marque "Initialize with README" (já temos um)
4. Clique em **Create repository**

#### B) Fazer Upload dos Arquivos

**Opção 1 - Interface Web (Mais Fácil):**

1. No repositório criado, clique em **Add file** → **Upload files**
2. Arraste todos os arquivos do projeto:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - Pasta `assets/` com a logo
3. Escreva uma mensagem: "Primeira versão do site"
4. Clique em **Commit changes**

**Opção 2 - Git (Para quem conhece):**

```bash
cd duimp-evento
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/evento-duimp.git
git push -u origin main
```

#### C) Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: **main**
   - Pasta: **/ (root)**
4. Clique em **Save**
5. Aguarde 2-3 minutos
6. Seu site estará disponível em: `https://SEU-USUARIO.github.io/evento-duimp/`

### 5️⃣ Compartilhar o Link

Seu site estará no ar em:
```
https://SEU-USUARIO.github.io/evento-duimp/
```

Compartilhe este link via:
- WhatsApp
- Email
- Redes sociais
- QR Code

## 📊 Visualizar Inscrições

1. Acesse sua planilha no Google Sheets
2. Todas as inscrições aparecerão automaticamente na aba "Inscrições"
3. Os dados incluem:
   - Timestamp
   - Data/Hora da Inscrição
   - Nome da Empresa
   - E-mail
   - Telefone
   - Quantidade de Participantes
   - Data Preferida
   - Observações

## 🔔 Receber Notificações por Email (Opcional)

Para receber um email cada vez que alguém se inscrever:

1. No Google Apps Script, abra o arquivo
2. Localize a função `enviarNotificacao`
3. Altere a linha:
```javascript
const emailDestino = 'seu-email@exemplo.com'; // Coloque seu email aqui
```
4. Na função `doPost`, descomente (remova o //) a última linha:
```javascript
enviarNotificacao(data);
```
5. Salve e faça uma nova implantação

## 📱 QR Code para Compartilhamento

Gere um QR Code do seu site em:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)

Use o QR Code em:
- Materiais impressos
- Apresentações
- Email signature

## 🎨 Personalização

### Cores

Para alterar as cores do site, edite o arquivo `style.css` nas variáveis:

```css
:root {
    --primary-color: #2d5a2d;      /* Verde principal */
    --accent-color: #f39c12;       /* Cor de destaque */
    /* ... outras cores ... */
}
```

### Textos

Todos os textos estão no arquivo `index.html` e podem ser editados diretamente.

### Imagens

Substitua o arquivo `assets/logo.png` pela sua logo.

## 🐛 Solução de Problemas

### Formulário não envia

1. ✅ Verifique se a URL do Google Script está correta no `script.js`
2. ✅ Confirme que o Apps Script está implantado como "Qualquer pessoa"
3. ✅ Teste se a URL do script abre no navegador (deve mostrar uma mensagem)

### Logo não aparece

1. ✅ Verifique se o arquivo está em `assets/logo.png`
2. ✅ Confirme se o nome está correto (case-sensitive)
3. ✅ Verifique se a pasta `assets` foi enviada para o GitHub

### Site não abre no GitHub Pages

1. ✅ Aguarde 3-5 minutos após ativar
2. ✅ Verifique se o repositório é público
3. ✅ Confirme se a configuração está em branch "main" e pasta "/ (root)"

## 📈 Analytics (Opcional)

Para adicionar Google Analytics:

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Copie o código de tracking
3. Cole antes do `</head>` no `index.html`

## 🔒 Segurança

- ✅ Não expõe dados sensíveis
- ✅ Validação de formulário
- ✅ Proteção contra spam (pode adicionar reCAPTCHA se necessário)
- ✅ Dados armazenados apenas no seu Google Sheets privado

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@pgl.com.br
- WhatsApp: (11) 97221-3753

## 📝 Licença

Este projeto é proprietário da PGL Agente de Cargas.

---

**Desenvolvido com ❤️ para PGL Agente de Cargas**

Última atualização: Novembro 2025