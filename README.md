
school-site/
├─ public/           # Статические файлы (favicon, картинки)
├─ src/
│  ├─ assets/        # Картинки, иконки, шрифты
│  ├─ components/    # Переиспользуемые компоненты (кнопки, формы, карточки)
│  ├─ pages/         # Страницы (Главная, Контакты, О школе)
│  ├─ routes/        # Настройка маршрутизации
│  ├─ App.tsx
│  └─ main.tsx       # Входной файл
├─ package.json
└─ tsconfig.json


# import { createClient } from '@sanity/client'

# const client = createClient({
#   projectId: 'your_project_id',
#   dataset: 'private',
#   apiVersion: '2025-12-07',
#   useCdn: false, // false для приватного dataset
#   token: process.env.SANITY_API_TOKEN, // секретный токен для сайта
# })
