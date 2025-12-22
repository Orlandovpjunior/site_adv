# Instruções para Adicionar Imagens e Logo

## 📸 Onde Adicionar as Imagens

### 1. Logo do Escritório

**Arquivo:** `components/Header.tsx`

**Localização:** Linha ~15-20

**Como substituir:**
```tsx
// Substitua este bloco:
<Link href="#home" className="flex items-center space-x-2">
  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-xl">L</span>
  </div>
  <span className="text-xl font-bold text-gray-900">
    Escritório Jurídico
  </span>
</Link>

// Por algo como:
<Link href="#home" className="flex items-center space-x-2">
  <Image 
    src="/logo.png" 
    alt="Logo" 
    width={40} 
    height={40}
    className="object-contain"
  />
  <span className="text-xl font-bold text-gray-900">
    Escritório Jurídico
  </span>
</Link>
```

**Import necessário:**
```tsx
import Image from "next/image";
```

### 2. Imagem da Advogada - Seção Hero

**Arquivo:** `components/Hero.tsx`

**Localização:** Linha ~70-80

**Como substituir:**
```tsx
// Substitua este bloco:
<div className="relative w-full h-[500px] bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
  <div className="w-64 h-64 bg-white/50 rounded-full flex items-center justify-center">
    <Scale className="w-32 h-32 text-primary-400" />
  </div>
</div>

// Por:
<div className="relative w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden">
  <Image
    src="/advogada-hero.jpg"
    alt="Advogada"
    fill
    className="object-cover"
    priority
  />
</div>
```

**Import necessário:**
```tsx
import Image from "next/image";
```

### 3. Imagem da Advogada - Seção Sobre

**Arquivo:** `components/About.tsx`

**Localização:** Linha ~40-50

**Como substituir:**
```tsx
// Substitua este bloco:
<div className="w-full h-64 sm:h-96 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center">
  <div className="text-center">
    <Users className="w-24 h-24 text-primary-400 mx-auto mb-4" />
    <p className="text-gray-500">Espaço para foto da advogada</p>
  </div>
</div>

// Por:
<div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden">
  <Image
    src="/advogada-sobre.jpg"
    alt="Advogada"
    fill
    className="object-cover"
  />
</div>
```

**Import necessário:**
```tsx
import Image from "next/image";
```

## 📁 Estrutura de Pastas para Imagens

Crie uma pasta `public` na raiz do projeto e coloque as imagens lá:

```
site_adv/
  ├── public/
  │   ├── logo.png
  │   ├── advogada-hero.jpg
  │   └── advogada-sobre.jpg
  └── ...
```

## 💡 Dicas

1. **Formatos recomendados:**
   - Logo: PNG com fundo transparente
   - Fotos: JPG ou WebP para melhor performance

2. **Tamanhos sugeridos:**
   - Logo: 200x200px (será redimensionado automaticamente)
   - Hero: 1200x800px (ou proporção similar)
   - Sobre: 1000x600px (ou proporção similar)

3. **Otimização:**
   - Use o componente `Image` do Next.js (já configurado)
   - Ele otimiza automaticamente as imagens
   - Considere usar WebP para melhor compressão

4. **Acessibilidade:**
   - Sempre adicione textos alternativos descritivos no atributo `alt`

