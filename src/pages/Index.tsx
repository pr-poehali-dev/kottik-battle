import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Case {
  id: number;
  name: string;
  price: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  image: string;
  description: string;
}

const cases: Case[] = [
  {
    id: 1,
    name: 'Стартовый кейс',
    price: 99,
    rarity: 'common',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/e81e3797-dc41-4889-8196-f40e158910bc.jpg',
    description: 'Идеальный выбор для новичков'
  },
  {
    id: 2,
    name: 'Легендарный кейс',
    price: 499,
    rarity: 'legendary',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/9390f328-7669-463d-a1d3-f2482440f973.jpg',
    description: 'Максимальные шансы на эпик'
  },
  {
    id: 3,
    name: 'Премиум кейс',
    price: 299,
    rarity: 'epic',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/516fd7e3-1fe4-47de-ac5f-1fca937bb329.jpg',
    description: 'Редкие предметы гарантированы'
  },
  {
    id: 4,
    name: 'Боевой кейс',
    price: 199,
    rarity: 'rare',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/e81e3797-dc41-4889-8196-f40e158910bc.jpg',
    description: 'Скины для настоящих воинов'
  },
  {
    id: 5,
    name: 'Киберспорт кейс',
    price: 399,
    rarity: 'epic',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/516fd7e3-1fe4-47de-ac5f-1fca937bb329.jpg',
    description: 'Профессиональные скины'
  },
  {
    id: 6,
    name: 'Ночной кейс',
    price: 149,
    rarity: 'rare',
    image: 'https://cdn.poehali.dev/projects/9c9d1bba-30a2-40ab-9f99-d84dc68eb0fd/files/9390f328-7669-463d-a1d3-f2482440f973.jpg',
    description: 'Темные и стильные предметы'
  },
];

const rarityColors = {
  common: 'bg-muted text-muted-foreground',
  rare: 'bg-secondary text-secondary-foreground',
  epic: 'bg-neon-blue/20 text-neon-blue border border-neon-blue',
  legendary: 'bg-neon-purple/20 text-neon-purple border border-neon-purple neon-glow'
};

const Index = () => {
  const [selectedRarity, setSelectedRarity] = useState<string>('all');

  const filteredCases = selectedRarity === 'all' 
    ? cases 
    : cases.filter(c => c.rarity === selectedRarity);

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="cyber-grid fixed inset-0 opacity-10 pointer-events-none" />
      
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-heading font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              kottik Battle
            </h1>
            <nav className="flex gap-6">
              <a href="#catalog" className="text-foreground hover:text-neon-purple transition-colors">
                Каталог
              </a>
              <a href="#how-to-win" className="text-foreground hover:text-neon-purple transition-colors">
                Как выиграть
              </a>
              <a href="#faq" className="text-foreground hover:text-neon-purple transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-transparent to-neon-blue/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple bg-clip-text text-transparent animate-glow-pulse">
              Открывай. Побеждай. Доминируй.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйся к сообществу геймеров, где каждый кейс — это шанс на легендарные предметы
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="neon-glow bg-neon-purple hover:bg-neon-purple/80 text-primary-foreground font-semibold">
                <Icon name="Zap" className="mr-2" size={20} />
                Начать игру
              </Button>
              <Button size="lg" variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Как играть
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Каталог кейсов
            </h2>
            <p className="text-muted-foreground">Выбери свой путь к победе</p>
          </div>

          <Tabs value={selectedRarity} onValueChange={setSelectedRarity} className="mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 bg-card">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="common">Обычные</TabsTrigger>
              <TabsTrigger value="rare">Редкие</TabsTrigger>
              <TabsTrigger value="epic">Эпические</TabsTrigger>
              <TabsTrigger value="legendary">Легендарные</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseItem, index) => (
              <Card 
                key={caseItem.id} 
                className="bg-card border-border hover:border-neon-purple transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card opacity-60" />
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 right-4 ${rarityColors[caseItem.rarity]}`}>
                    {caseItem.rarity}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="text-xl mb-2 font-heading">{caseItem.name}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neon-purple">{caseItem.price} ₽</span>
                  <Button className="bg-neon-purple hover:bg-neon-purple/80 text-primary-foreground">
                    <Icon name="ShoppingCart" className="mr-2" size={18} />
                    Открыть
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-win" className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Как выиграть
            </h2>
            <p className="text-muted-foreground">Секреты успешного открытия кейсов</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-neon-blue transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-blue/20 flex items-center justify-center group-hover:neon-glow-blue transition-all">
                <Icon name="Target" size={32} className="text-neon-blue" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Выбирай правильно</h3>
              <p className="text-muted-foreground">
                Изучай характеристики кейсов и выбирай те, что подходят твоему стилю игры
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-neon-purple transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center group-hover:neon-glow transition-all">
                <Icon name="TrendingUp" size={32} className="text-neon-purple" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Повышай шансы</h3>
              <p className="text-muted-foreground">
                Используй бонусы и акции для увеличения вероятности выпадения редких предметов
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border hover:border-secondary transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-all">
                <Icon name="Trophy" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Собирай коллекцию</h3>
              <p className="text-muted-foreground">
                Обменивайся с другими игроками и создавай уникальные наборы предметов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground">Всё, что нужно знать о kottik Battle</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-neon-purple">
                Как работает открытие кейсов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Выбирайте кейс, нажимайте "Открыть" и получайте случайный предмет из списка возможных дропов. 
                Каждый кейс имеет свои шансы на выпадение редких предметов.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-neon-purple">
                Можно ли обменивать предметы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! В разделе "Форум" вы можете предлагать обмен другим игрокам. 
                Создавайте уникальные коллекции и торгуйтесь с сообществом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-neon-purple">
                Как добавить свой кейс?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Перейдите в раздел "Добавить кейс", загрузите изображение, укажите название, описание и настройте 
                дроп-лист с предметами. После модерации ваш кейс появится в каталоге.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-neon-purple">
                Какие есть редкости предметов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Предметы делятся на 4 уровня редкости: Обычные (серые), Редкие (синие), 
                Эпические (фиолетовые) и Легендарные (золотые). Чем выше редкость, тем ниже шанс выпадения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-neon-purple">
                Есть ли гарантии на выигрыш?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Каждый кейс имеет прозрачную систему дропов. В описании кейса указаны все возможные 
                предметы и их шансы. Некоторые премиум кейсы гарантируют минимальную редкость предмета.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                kottik Battle
              </h3>
              <p className="text-muted-foreground">
                Платформа для открытия и обмена кейсами с игровыми предметами
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#catalog" className="hover:text-neon-purple transition-colors">Каталог</a></li>
                <li><a href="#how-to-win" className="hover:text-neon-purple transition-colors">Как выиграть</a></li>
                <li><a href="#faq" className="hover:text-neon-purple transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-neon-blue hover:bg-neon-blue/10">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-neon-purple hover:bg-neon-purple/10">
                  <Icon name="Users" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-secondary hover:bg-secondary/10">
                  <Icon name="Share2" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>&copy; 2024 kottik Battle. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
