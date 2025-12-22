# 📱 Configuração do Formulário de Contato

## ✅ Integração com WhatsApp (Já Implementada)

O formulário de contato está configurado para abrir o WhatsApp automaticamente quando o usuário clicar em "Enviar Mensagem".

### Como Configurar:

1. Abra o arquivo `components/Contact.tsx`
2. Localize a linha com `const WHATSAPP_NUMBER = "5511999999999";`
3. Substitua pelo seu número real no formato:
   - **Código do país** + **DDD** + **Número** (sem espaços, sem +, sem parênteses)
   
### Exemplos:

- **São Paulo (11) 98765-4321**: `5511987654321`
- **Rio de Janeiro (21) 91234-5678**: `5521912345678`
- **Belo Horizonte (31) 99876-5432**: `5531998765432`

### Como Funciona:

1. Usuário preenche o formulário
2. Clica em "Enviar Mensagem"
3. O WhatsApp abre automaticamente (Web ou App)
4. A mensagem já vem formatada com todos os dados do formulário
5. O usuário só precisa clicar em "Enviar" no WhatsApp

---

## 🔄 Outras Opções de Integração (Opcional)

Se preferir outras formas de receber os contatos, aqui estão algumas alternativas:

### Opção 1: Email (usando EmailJS)

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um template de email
3. Instale: `npm install @emailjs/browser`
4. Substitua a função `handleSubmit` no `Contact.tsx`

### Opção 2: Backend Próprio

1. Crie uma API route no Next.js (`app/api/contact/route.ts`)
2. Configure envio de email usando Nodemailer ou Resend
3. Atualize o `handleSubmit` para fazer POST para a API

### Opção 3: Google Forms / Typeform

1. Crie um formulário no Google Forms ou Typeform
2. Use um iframe ou redirecione para o formulário externo

---

## 📝 Formato da Mensagem no WhatsApp

A mensagem enviada terá este formato:

```
Olá! Recebi uma mensagem através do site:

*Nome:* João Silva
*Email:* joao@email.com
*Telefone:* (11) 98765-4321
*Assunto:* Consulta Jurídica

*Mensagem:*
Preciso de ajuda com um contrato de locação.
```

---

## ⚠️ Importante

- Certifique-se de que o número está no formato correto (código do país + DDD + número)
- O WhatsApp precisa estar instalado no dispositivo do usuário ou ele precisa usar o WhatsApp Web
- Teste sempre após configurar o número

