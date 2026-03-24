# Atharva Mhaske - Portfolio Website

A modern, magazine-style portfolio website showcasing film production, post-production, documentaries, short films, and sound design work.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Layout**: Magazine-style design inspired by professional photography portfolios
- **Multiple Pages**: Dedicated pages for each service category
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Clean Navigation**: Sticky header with clear navigation structure

## Pages

1. **Home** (`index.html`) - Main landing page with hero section and preview of all categories
2. **Production** (`production.html`) - Video production services and projects
3. **Post Production** (`post-production.html`) - Editing, color grading, and VFX work
4. **Documentaries** (`documentaries.html`) - Documentary filmmaking projects
5. **Short Films** (`short-films.html`) - Narrative short film work
6. **Sound** (`sound.html`) - Sound design and audio post-production

## Structure

```
AtharvaSite/
├── index.html
├── production.html
├── post-production.html
├── documentaries.html
├── short-films.html
├── sound.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── (add your project images here)
├── References/
│   └── Single page Home.png
└── README.md
```

## Getting Started

1. **Add Your Images**: Place your project images in the `assets/images/` folder
2. **Update Content**: Edit the HTML files to add your specific project details
3. **Customize**: Modify colors and styles in `assets/css/style.css` as needed
4. **Open**: Simply open `index.html` in a web browser to view the site

## Image Guidelines

For best results, add images with the following naming convention:

### Home Page:
- `hero-bg.jpg` - Main hero background (landscape, 1920x1080px recommended)
- `work1.jpg` to `work5.jpg` - Recent work thumbnails (portrait, 800x1000px)
- `production1.jpg`, `production2.jpg` - Production preview images
- `behind-scenes1.jpg`, `behind-scenes2.jpg` - Behind the scenes images
- `gallery1.jpg` to `gallery3.jpg` - Black gallery images
- `post-prod1.jpg` - Post production preview
- `doc1.jpg` to `doc5.jpg` - Documentary preview images
- `short-film1.jpg`, `short-film2.jpg` - Short film previews
- `sound-main.jpg`, `sound1.jpg`, `sound2.jpg` - Sound design previews
- `cat1.jpg` to `cat4.jpg` - Category visual images

### Category Pages:
- `[category]-feature.jpg` - Featured project image (16:9 ratio)
- `[category]-proj1.jpg` to `[category]-proj6.jpg` - Project gallery images (4:5 ratio)

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- Responsive Design
- CSS Animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-bg: #ffffff;
    --secondary-bg: #f8f8f8;
    --dark-bg: #000000;
    --text-primary: #000000;
    --text-secondary: #666666;
    --accent-beige: #d4c5b0;
}
```

### Typography
Change the font family in the CSS:
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

## License

Personal portfolio website for Atharva Mhaske.

## Contact

Add your contact information and social media links in the footer section.
