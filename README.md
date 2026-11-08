# ZEKA — Masaüstü Sesli Yapay Zekâ Asistanı Tanıtım ve İndirme Portalı

**ZEKA**, Windows masaüstü ortamı için geliştirilmiş sesli ve sistem entegrasyonlu kişisel yapay zekâ asistanının resmi ürün tanıtım ve kurulum indirme (landing page) web uygulamasıdır. **React 19**, **TypeScript**, **Vite**, **Tailwind CSS** ve **Framer Motion** kullanılarak geliştirilmiştir.

---

## Öne Çıkan Özellikler

- **Etkileşimli Ürün Vitrini (`HeroSection.tsx` & `AiSection.tsx`):** ZEKA masaüstü asistanının sesli komut, doğal dil işleme ve sistem otomasyonu yeteneklerini tanıtan animasyonlu arayüz.
- **Yetenek & Özellik Kartları (`FeaturesSection.tsx`):** Asistanın modüllerini ve kullanım senaryolarını sunan duyarlı (responsive) bento düzeni.
- **Doğrudan Kurulum İndirme (`DownloadButton.tsx`):** Windows kurulum paketini (`public/downloads/ZEKA-Setup.exe` & `ZEKA-Setup.bat`) tek tıkla sunan indirme akışı.
- **Modern Görsel Efektler (`BackgroundEffects.tsx`):** Framer Motion ve özel CSS efektleriyle güçlendirilmiş akıcı karanlık tema tasarımı.

---

## Teknoloji Yığını (Tech Stack)

- **Framework:** React 19 + TypeScript (~6.0)
- **Build Aracı:** Vite 8
- **Stil & Tasarım:** Tailwind CSS 3.4, `clsx`, `tailwind-merge`
- **Animasyon & İkonlar:** Framer Motion, Lucide React
- **Kod Kalitesi (Linter):** Oxlint (`.oxlintrc.json`)

---

## Proje Yapısı

```text
Zeka/
├── public/
│   ├── downloads/          # ZEKA Windows kurulum dosyaları (ZEKA-Setup.exe & .bat)
│   └── zeka-logo.png       # Uygulama ikonu ve marka logosu
├── src/
│   ├── components/         # Navbar, Footer, DownloadButton, BackgroundEffects
│   ├── sections/           # HeroSection, FeaturesSection, AiSection, FinalCTA
│   ├── App.tsx             # Ana sayfa bileşeni
│   └── main.tsx            # Uygulama giriş noktası
├── index.html              # HTML şablonu
├── tailwind.config.js      # Tailwind CSS yapılandırması
└── vite.config.ts          # Vite yapılandırması
```

---

## Kurulum ve Yerel Çalıştırma

1. **Depoyu klonlayın ve bağımlılıkları yükleyin:**
   ```bash
   git clone https://github.com/mert-carli/Zeka.git
   cd Zeka
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Kod kontrolü (Lint) ve üretim derlemesi (Build):**
   ```bash
   npm run lint
   npm run build
   ```

---

## Geliştirici

**Mevlana Mert Çarlı**  
- GitHub: [@mert-carli](https://github.com/mert-carli)  
- Portföy: [mert-carli-cvu9.vercel.app](https://mert-carli-cvu9.vercel.app)
