# libooks.ae

Сайт Live Informatics Publishing FZE. Astro, статика, две локали, контент в git.

Документы проекта: `docs/tz-libooks.md` — техзадание, `docs/glossary.md` — словари.

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
```

## Где что лежит

```
src/content/         контент (правится через CMS или руками)
  series/{lang}/     серии: manara, isharat, qalam
  strands/{lang}/    линейки: manara-web-lab, isharat-little-tamers
  books/{lang}/      издания
  articles/{lang}/   статьи четырёх разделов
  news/{lang}/       новости
  pages/{lang}/      «О нас», обзорная страница серий
  singletons/        реквизиты организации
src/components/      компоненты со своими стилями
src/lib/             доступ к контенту, карта разделов
src/i18n/ui.ts       строки интерфейса на двух языках
src/styles/global.css  токены и общие стили
public/assets/       логотипы, обложки, изображения, PDF
public/admin/        Sveltia CMS
```

## Адреса

```
/en/  /ar/                                     главная
/{lang}/about/  /news/  /contact/
/{lang}/series/                                обзор серий
/{lang}/series/{series}/                       серия
/{lang}/series/{series}/{strand}/{n}/          издание
/{lang}/parents/{tips|materials}/{slug}/
/{lang}/schools/{teaching|methodology}/{slug}/
```

## Что нужно положить в `public/assets/`

- `logo.svg` — логотип издательства
- `series/manara.png`, `series/isharat.png`, `series/qalam.png` — логотипы серий
- `series/series-intro.jpg` — изображение обзорной страницы
- `about/about-01.jpg`, `about/about-02.jpg`
- `covers/` — сканы обложек, иначе собираются автоматически
- `articles/mouse-tamer-01…03.png`
- `docs/` — три уставных PDF

Пока файла нет, на его месте встаёт фирменная заставка, вёрстка не ломается.

## Публикация

Коммит в `main` → GitHub Actions собирает → статика уезжает на хостинг.
Способ доставки выбирается в `.github/workflows/deploy.yml`, доступы — в секретах репозитория.

## Открытые вопросы

См. §15 техзадания. Ближайшие: `line`/`strand`, шкала этапов, статусы двух изданий,
вычитка арабского носителем.
