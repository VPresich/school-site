
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


Для sanity -
npx sanity login
npx sanity deploy
"thuiyckp5gxone95ddtskzds"

site: https://school-site-admin.sanity.studio/

2. Добавить пользователя в проект Sanity

Открой Sanity Manage и войди в свой аккаунт.
Выбери проект school-site-content.
Перейди в Project settings → Users.
Нажми Invite user.
Введи email человека, которого хочешь пригласить.

Выбери роль:
Editor — может редактировать контент, но не трогать настройки проекта.
Теперь этот человек получит приглашение на email, зарегистрируется или войдёт через Google/GitHub, и сможет открывать Studio по URL.