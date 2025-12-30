# [VEBA] ATAMBİR - İttifak Portalı

Bu proje, Last War Survival oyunundaki [VEBA] ATAMBİR ittifakı için hazırlanmış bilgilendirme ve rehber sitesidir.

## 🚀 Başlangıç

Bu projeyi kendi bilgisayarınızda çalıştırmak için:

1.  Projeyi indirin.
2.  Terminali açın ve proje klasörüne gidin.
3.  Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```
4.  Projeyi başlatın:
    ```bash
    npm run dev
    # veya
    npm start
    ```

## 📝 İçerik Nasıl Düzenlenir?

Sitenin içeriğini değiştirmek için kod bilmenize gerek yoktur. Tüm içerik **`constants.ts`** dosyasında toplanmıştır.

### 1. Rehber Ekleme / Düzenleme
`constants.ts` dosyasını açın ve `MOCK_GUIDES` listesini bulun. Yeni bir rehber eklemek için şu formatı kullanın:

```typescript
{
  id: 'yeni-rehber-id', // Benzersiz bir sayı veya isim
  title: 'Rehber Başlığı',
  excerpt: 'Ana sayfada görünecek kısa özet.',
  content: `
    <p>Buraya rehberin detaylı içeriği gelecek.</p>
    <h3>Alt Başlık</h3>
    <p>Daha fazla detay...</p>
  `,
  author: '[VEBA] Rumuzunuz',
  date: '25 Ekim 2023',
  category: GuideCategory.WAR, // Kategori (WAR, HEROES, BASE, EVENTS)
  imageUrl: 'https://resim-linki.com/resim.jpg'
}
```

### 2. Logo ve İsimler
İttifak logosunu değiştirmek için `constants.ts` içindeki `ALLIANCE_LOGO_URL` satırındaki linki değiştirmeniz yeterlidir.

## 🌐 GitHub'da Yayınlama (Hosting)

Bu siteyi ücretsiz olarak GitHub Pages üzerinde barındırabilirsiniz.

1.  `package.json` dosyanızı açın ve en üste şu satırı ekleyin (kendi github kullanıcı adınızı ve repo adınızı yazın):
    ```json
    "homepage": "https://GITHUB_KULLANICI_ADINIZ.github.io/REPO_ADINIZ",
    ```

2.  `gh-pages` paketini yükleyin:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  `package.json` içindeki `scripts` bölümüne şu satırı ekleyin:
    ```json
    "deploy": "gh-pages -d dist"
    ```
    *(Not: Eğer Vite kullanıyorsanız `dist`, Create React App kullanıyorsanız `build` klasörünü hedefleyin)*

4.  Sitenizi yayınlayın:
    ```bash
    npm run build
    npm run deploy
    ```

Artık siteniz `homepage` kısmında belirttiğiniz adreste yayında!
