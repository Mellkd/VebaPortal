export enum GuideCategory {
  HEROES = 'Kahramanlar',
  BASE = 'Üs Gelişimi',
  EVENTS = 'Etkinlikler',
  WAR = 'Savaş Taktikleri',
  BEGINNER = 'Başlangıç'
}

export interface Guide {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Supports basic Markdown-like structure or HTML strings
  author: string;
  date: string;
  category: GuideCategory;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}