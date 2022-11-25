# Nyan Profile

![Dark Theme](demo.png)

## About

Nyan Profile is a simple and extensible scaffold for building personal profile website.

## Features

- Static Generation with Next.js
- Styling with Tailwind CSS
- Configurable Layout
- Dark Mode
- Google Fonts
- Google Analytics
- Deploying to GitHub Pages with GitHub Actions

## Getting Started

Clone the project.

```bash
git clone https://github.com/memochou1993/nyan-profile
```

Install dependencies.

```bash
npm ci
```

Compile for development.

```bash
npm run dev
```

Generate static project for production.

```bash
npm run build
```

## Profiles

- [King Nyan II](https://memochou1993.github.io/nyan-profile/)
- [Memo Chou](https://profile.epoch.tw)

## Configuration

### Base URL

```json
{
  "basePath": "/<repository_name>"
}
```

### Theme

```json
{
  "theme": {
    "mode": "<light|dark>",
    "light": {
      "background": "<light_color>"
    },
    "dark": {
      "background": "<dark_color>"
    }
  }
}
```

### Meta

```json
{
  "meta": {
    "author": "<website_author>",
    "title": "<website_title>",
    "description": "<website_description>",
    "image": "<website_image_path>"
  }
}
```

### Components

#### Profile

```json
{
  "components": {
    "profile": {
      "enabled": true,
      "avatar": "<your_avatar_image_path>",
      "name": "<your_name>",
      "organization": "<your_organization>",
      "location": "<your_location>",
      "email": "<your_email>",
      "url": "<your_website_url>",
      "socialLinks": [
        {
          "type": "github",
          "id": "<id>"
        },
        {
          "type": "facebook",
          "id": "<id>"
        },
        {
          "type": "linkedin",
          "id": "<id>"
        },
        {
          "type": "instagram",
          "id": "<id>"
        },
        {
          "type": "telegram",
          "id": "<id>"
        },
        {
          "type": "twitter",
          "id": "<id>"
        }
      ]
    }
  }
}
```

#### Header

```json
{
  "components": {
    "header": {
      "enabled": true,
      "components": {
        "themeSwitch": {
          "enabled": true
        }
      }
    }
  }
}
```

#### Sidebar

```json
{
  "components": {
    "sidebar": {
      "enabled": true
    }
  }
}
```

#### Footer

```json
{
  "components": {
    "footer": {
      "enabled": true
    }
  }
}
```

#### About

```json
{
  "components": {
    "about": {
      "enabled": true,
      "title": "About"
    }
  }
}
```

#### ProjectList

```json
{
  "components": {
    "projectList": {
      "enabled": true,
      "title": "Projects",
      "limit": 3,
      "items": [
        {
          "name": "<project_name>",
          "link": "<project_link>",
          "image": "<project_image>",
          "tags": [
            "<project_tag>"
          ],
          "button": {
            "text": "<button_text>"
          }
        }
      ]
    }
  }
}
```

#### ArticleList

```json
{
  "components": {
    "articleList": {
      "enabled": false,
      "title": "Articles",
      "limit": 10,
      "source": "<rss_xml_path>",
      "entrySpec": {
        "key": "<entry_key>",
        "fields": {
          "title": "<title_key>",
          "link": "<link_key>",
          "published": "<published_date_key>"
        }
      }
    }
  }
}
```

#### GoogleFonts

```json
{
  "components": {
    "googleFonts": {
      "enabled": true,
      "family": "<font_family>"
    }
  }
}
```

#### GoogleAnalytics

```json
{
  "components": {
    "googleAnalytics": {
      "enabled": true,
      "id": "<ga4_measurement_id>"
    }
  }
}
```

## Deployment

### GitHub Pages

Update `nyan.config.json` file.

```json
{
  "basePath": "/<repository_name>"
}
```

Push to GitHub.

```bash
git add .
git commit -m "Update next.config.js"
git push
```

### Docker Compose

Update `nyan.config.json` file.

```json
{
  "basePath": ""
}
```

Build and run app.

```bash
docker compose up -d
```

## Contributors

<a href="https://github.com/memochou1993/nyan-profile/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=memochou1993/nyan-profile" width="50" />
</a>

## License

[MIT](LICENSE)
