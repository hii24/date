import React, { useState } from 'react';
import { Heart, Users, MessageCircleHeart, CheckCircle, Star, X, Calendar, Shield, Clock, Phone, Mail, MapPin, Target, Sparkles, Gift, Coffee } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Дякуємо за заявку! Ми звяжемося з вами найближчим часом.');
    setIsModalOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredTime: '',
      message: ''
    });
  };

  const services = [
    {
      id: 'vip',
      title: 'VIP Пакет',
      price: '15',
      features: [
        'Індивідуальний менеджер',
        'Необмежена кількість зустрічей',
        'Психологічна підтримка',
        'Стиліст та фотосесія',
        'Організація побачень',
        'Преміум-доступ до бази'
      ]
    },
    {
      id: 'standard',
      title: 'Стандарт',
      price: '8',
      features: [
        'Персональний підбір пар',
        '5 організованих зустрічей',
        'Базова консультація психолога',
        'Доступ до бази анкет',
        'Підтримка спеціаліста'
      ]
    },
    {
      id: 'basic',
      title: 'Базовий',
      price: '4',
      features: [
        '3 організовані зустрічі',
        'Консультація психолога',
        'Базовий доступ до анкет',
        'Підтримка спеціаліста'
      ]
    }
  ];

  const successStories = [
    {
      category: 'wedding',
      image: 'https://i.postimg.cc/HWN1R5m8/2025-02-12-21-26-10.jpg',
      title: 'Янка та Ілля',
      description: 'Одружилися через 3 дні після знайомства'
    },
    {
      category: 'street',
      image: 'https://i.postimg.cc/cLj40jfZ/4.jpg',
      title: 'Просто щасливі люди',
      description: 'Побачивши раз, вони не відводили погляд до цих пір'
    },
    {
      category: 'wedding',
      image: 'https://i.postimg.cc/V6BBMXFG/1.jpg',
      title: 'Селена та Ален',
      description: 'Одружилися після 2 днів відносин'
    },
    {
      category: 'engagement',
      image: 'https://i.postimg.cc/fbMbyXJT/2.jpg',
      title: 'Юлія та Максим',
      description: 'Максим втік від дівчини заради неї'
    },
    
    {
      category: 'petting',
      image: 'https://i.postimg.cc/tTtwTZny/3.jpg',
      title: 'Раналдо та Вероніка',
      description: 'Натерли джина після місяця спілкування'
    },
    // {
    //   category: 'engagement',
    //   image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   title: 'Марія та Андрій',
    //   description: 'Заручилися після року стосунків'
    // },
    // {
    //   category: 'dating',
    //   image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   title: 'Наталія та Олександр',
    //   description: 'Разом вже 6 місяців'
    // },
    // {
    //   category: 'wedding',
    //   image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    //   title: 'Ірина та Василь',
    //   description: 'Щаслива сімя вже 2 роки'
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[700px]">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/rsJZNBqr/6.jpg"
            alt="Romantic couple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">Ваше щастя починається з нами</h1>
            <p className="text-xl mb-8 leading-relaxed">Професійне бюро знайомств з 21-річним досвідом та командою експертів-психологів. Ми допомогли створити понад 5 щасливих сімей.</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Записатись на консультацію
              </button>
              <button 
                onClick={() => window.open("https://t.me/lyrinisnotlarin", "_blank")}

              className="border-2 border-white hover:bg-white hover:text-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
                Дізнатись більше
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-rose-600 mb-2">21+</p>
              <p className="text-gray-600">Років досвіду</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-rose-600 mb-2">5+</p>
              <p className="text-gray-600">Щасливих пар</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-rose-600 mb-2">2+</p>
              <p className="text-gray-600">Професійних психологів</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-rose-600 mb-2">100%</p>
              <p className="text-gray-600">Задоволених клієнтів</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наші послуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Оберіть пакет послуг, який найкраще відповідає вашим потребам</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-4xl font-bold text-rose-600 text-center mb-8">{service.price} Сирків</p>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-rose-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full mt-8 bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
                >
                  Обрати пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Історії успіху</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Реальні історії наших клієнтів</p>
          </div>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'all' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Всі історії
            </button>
            <button
              onClick={() => setActiveTab('wedding')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'wedding' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Весілля
            </button>
            <button
              onClick={() => setActiveTab('street')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'street' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Вуличне кохання
            </button>
            <button
              onClick={() => setActiveTab('engagement')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'engagement' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Заручини
            </button>
            <button
              onClick={() => setActiveTab('petting')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'petting' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              Пєттінг
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories
              .filter((story) => activeTab === 'all' || story.category === activeTab)
              .map((story, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                      <p>{story.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Чому обирають нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ми пропонуємо індивідуальний підхід та професійну підтримку на кожному етапі пошуку вашої другої половинки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-100 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Безпека та конфіденційність</h3>
              <p className="text-gray-600 text-center">Ми ретельно перевіряємо всі анкети та гарантуємо повну конфіденційність ваших даних</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-100 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Індивідуальний підхід</h3>
              <p className="text-gray-600 text-center">Наші психологи створюють унікальний план пошуку партнера, враховуючи ваші побажання та цінності</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Реальні результати</h3>
              <p className="text-gray-600 text-center">Тисячі успішних історій кохання та щасливих сімей, створених за нашою допомогою</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Як ми працюємо</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Простий та ефективний процес, який приведе вас до щасливих стосунків</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4">Консультація</h3>
              <p className="text-gray-600">Безкоштовна консультація з нашим експертом</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4">Аналіз</h3>
              <p className="text-gray-600">Визначення ваших цілей та очікувань</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4">Підбір пари</h3>
              <p className="text-gray-600">Пошук сумісних кандидатів</p>
            </div>
            <div className="text-center relative">
              <div className="w-16 h-16 mx-auto mb-6 bg-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-4">Зустріч</h3>
              <p className="text-gray-600">Організація першого побачення</p>
            </div>
          </div>
        </div>
      </div>

      {/* First Date Tips */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Поради для першого побачення</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Корисні рекомендації від наших експертів</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Оберіть правильне місце</h3>
              <p className="text-gray-600">Затишна кав'ярня або ресторан з помірною гучністю музики - ідеальне місце для першої зустрічі</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <MessageCircleHeart className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Будьте щирими</h3>
              <p className="text-gray-600">Відверта розмова та природня поведінка допоможуть створити справжній зв'язок</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Невеликий сюрприз</h3>
              <p className="text-gray-600">Маленький подарунок або комплімент можуть створити особливу атмосферу</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готові знайти своє кохання?</h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">Зробіть перший крок до щасливого майбутнього. Запишіться на безкоштовну консультацію з нашим експертом.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <Calendar className="w-5 h-5" />
            Записатись на консультацію
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Про нас</h3>
              <p className="text-gray-400">Професійне бюро знайомств з 21-річним досвідом. Ми допомагаємо людям знайти справжнє кохання та створити щасливі стосунки.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контакти</h3>
              <div className="space-y-4">
                <p className="text-gray-400 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +380730629538
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  lyrinisnotlarin@dating-agency.ua
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  вул. невідома 1, Одеса
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Години роботи</h3>
              <div className="space-y-4">
                <p className="text-gray-400 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Пн-Пт: 9:00 - 20:00
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Сб: 10:00 - 18:00
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Нд: Вихідний
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Сертифікати</h3>
              <div className="space-y-4">
                <p className="text-gray-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ISO 9001:2015
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Ліцензія МВС України
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Сертифікат якості послуг
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Бюро Знайомств. Всі права захищені.</p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-6">Записатись на консультацію</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше ім'я
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Бажаний час консультації
                </label>
                <select
                  id="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  required
                >
                  <option value="">Оберіть час</option>
                  <option value="morning">9:00 - 12:00</option>
                  <option value="afternoon">12:00 - 16:00</option>
                  <option value="evening">16:00 - 20:00</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Повідомлення (необов'язково)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition-colors"
              >
                Відправити
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;