# Site Advocacia

Site profissional para escritório de advocacia desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones modernos

## 📋 Funcionalidades

- ✅ Landing page responsiva
- ✅ Seção Hero com call-to-action
- ✅ Sobre o escritório
- ✅ Serviços prestados (8 áreas do direito)
- ✅ Formulário de contato
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Animações e transições suaves
- ✅ Design moderno e profissional

## 🛠️ Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Personalização

### Logo
Substitua o placeholder no componente `Header.tsx` (linha ~15) pela logo real.

### Imagens
- **Hero**: Substitua o placeholder no componente `Hero.tsx` (linha ~70)
- **Sobre**: Substitua o placeholder no componente `About.tsx` (linha ~40)

### Informações de Contato
Atualize as informações de contato em:
- `components/Footer.tsx` - Rodapé
- `components/Contact.tsx` - Seção de contato

### Cores
Personalize as cores no arquivo `tailwind.config.ts` na seção `theme.extend.colors`.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 📄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.
