import { Guide, GuideCategory, NavItem } from './types';

// Use the URL provided or a local path. Since we are in a web container, we use the remote URL for now.
// When hosting on GitHub, it is recommended to put the image in an /assets/ folder.
export const ALLIANCE_LOGO_URL = "https://files.oaiusercontent.com/file-2uN6FWvG4XQ256t5g8qZ5u?se=2025-02-21T06%3A50%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D4220b22a-cf3d-4c3e-8360-120025f8260b.webp&sig=m5H5K7%2BC7%2B8zSg5F/01e4iTjJ8d8O66rZk4bBqNf84I%3D";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Rehberler', path: '/guides' },
  { label: 'Hakkımızda', path: '/about' },
];

export const MOCK_GUIDES: Guide[] = [
  {
    id: '1',
    title: 'Kimberly vs Murphy: Hangisine Yatırım Yapmalı?',
    excerpt: 'Oyunun başlarında enerji kahramanlarına yatırım yaparken kime öncelik vermeniz gerektiğini analiz ediyoruz.',
    content: `
      <p class="mb-4">Last War Survival'da kaynaklar sınırlıdır, bu yüzden UR parçalarınızı doğru kahramana harcamak hayati önem taşır. İşte Kimberly ve Murphy karşılaştırması.</p>
      
      <h3 class="text-xl font-bold text-veba-accent mb-2">1. Kimberly: Hasar Makinesi</h3>
      <p class="mb-4">Kimberly, alan hasarı (AOE) konusunda uzmanlaşmış bir Tank kahramanıdır. Özellikle zombi dalgalarını temizlemek ve düşman arka saflarına hasar vermek için mükemmeldir. Eğer PVE odaklıysanız ve kampanya bölümlerini hızlı geçmek istiyorsanız Kimberly ilk tercihiniz olmalı.</p>
      
      <h3 class="text-xl font-bold text-veba-accent mb-2">2. Murphy: Savunma Duvarı</h3>
      <p class="mb-4">Murphy, takımınıza inanılmaz bir dayanıklılık sağlar. Kalkan yetenekleri sayesinde ön hattınızın hayatta kalma süresini uzatır. PVP savaşlarında ve İttifak Düellolarında Murphy'nin sağladığı defansif bonuslar, Kimberly'nin hasarından daha değerli olabilir.</p>
      
      <h3 class="text-xl font-bold text-veba-accent mb-2">Sonuç</h3>
      <p>Erken oyunda **Kimberly** ile ilerleyip harita temizliği yapın. Orta ve geç oyunda ise **Murphy**'yi 4 yıldıza ulaştırarak sağlam bir ön hat kurun.</p>
    `,
    author: '[VEBA] Komutan',
    date: '20 Ekim 2023',
    category: GuideCategory.HEROES,
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Sunucu Savaşı (VS) Hazırlık Rehberi',
    excerpt: 'Cuma ve Cumartesi günleri gerçekleşen sunucu savaşlarında puanınızı maksimize etmenin yolları.',
    content: `
      <p class="mb-4">Sunucu Savaşları (VS), ittifakımızın en çok sandık kazanabileceği dönemdir. İşte gün gün yapmanız gerekenler.</p>
      
      <h3 class="text-xl font-bold text-veba-accent mb-2">Pazartesi: Radar ve Kaynak Toplama</h3>
      <p class="mb-4">Haftaya iyi başlamak için radar görevlerinizi biriktirmeyin. Stamina (Dayanıklılık) puanlarınızı zombiler yerine kamyonlara saklamaya çalışın.</p>
      
      <h3 class="text-xl font-bold text-veba-accent mb-2">Cuma: Teknoloji ve İnşaat</h3>
      <p class="mb-4">En çok puan veren gündür. Hızlandırmalarınızı (Speed-up) kesinlikle bugüne saklayın. Büyük bir HQ yükseltmesi veya uzun süreli bir Teknoloji araştırmasını Cuma günü tamamlanacak şekilde ayarlayın.</p>
      
      <ul class="list-disc pl-5 space-y-2 mb-4">
        <li>İnşaat bitişlerini Cuma gününe denk getirin.</li>
        <li>İttifak marketinden hızlandırma stoklayın.</li>
        <li>Kalkanınızı kontrol etmeyi unutmayın!</li>
      </ul>
    `,
    author: '[VEBA] Stratejist',
    date: '22 Ekim 2023',
    category: GuideCategory.EVENTS,
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'Üs Düzeni ve Savunma Stratejileri',
    excerpt: 'Düşman saldırılarına karşı kaynaklarınızı korumak için en iyi üs yerleşim taktikleri.',
    content: `
      <p>Üssünüzü tasarlarken sadece estetiğe değil, savunma verimliliğine de önem vermelisiniz. Duvarlarınızı yükseltmek tek başına yeterli değildir.</p>
      <p class="mt-4">Detaylar çok yakında eklenecektir...</p>
    `,
    author: '[VEBA] Mimar',
    date: '25 Ekim 2023',
    category: GuideCategory.BASE,
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: '4',
    title: 'İttifak Düellosu: Takım Kurulumu',
    excerpt: '3 takımlı düellolarda kahraman sinerjileri nasıl olmalı?',
    content: `
      <p>3 takımlı savaşlarda ana takımınız (Main Squad) kadar 2. ve 3. takımlarınızın hayatta kalması da önemlidir.</p>
      <p class="mt-4">Tank, Füze ve Uçak kahramanları arasındaki %20 hasar bonusu/dezavantajı mekaniğini asla unutmayın.</p>
    `,
    author: '[VEBA] Savaş Lordu',
    date: '28 Ekim 2023',
    category: GuideCategory.WAR,
    imageUrl: 'https://picsum.photos/800/600?random=4'
  }
];