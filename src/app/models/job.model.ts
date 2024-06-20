export interface Job {
  id?: string;
  title: string;
  description: string;
  category: 'front-end' | 'back-end' | 'full-stack' | 'all';
  type: 'hybrid' | 'remote' | 'onsite';
  company: string;
  location: string;
}
