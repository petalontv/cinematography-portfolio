# Cinematography Portfolio Site - Project Rules

## Project Overview
- **Type**: Cinematography portfolio website for PTV (petalontv)
- **Repository**: https://github.com/petalontv/cinematography-portfolio
- **Live Site**: https://petalontv.github.io/cinematography-portfolio/
- **Local Path**: /Users/petalon/Workspace/cinematography_portfolio_site

## Deployment & Git Workflow
- **Automatic Deployment**: Changes pushed to `main` branch auto-deploy to GitHub Pages (1-2 min build time)
- **Git Credentials**: Stored locally in `.git-credentials` (protected by `.gitignore`)
- **Workflow**: Make changes → `git add -A` → `git commit -m "message"` → `git push origin main`
- **Important**: Never commit credentials or tokens to GitHub

## Site Structure & URLs
- **Clean URLs**: No `.html` extensions (e.g., `/contact`, `/midnight-city`)
- **Structure**:
  - Root: `index.html` → `/`
  - Contact: `contact/index.html` → `/contact`
  - Films: `[film-name]/index.html` → `/[film-name]`
- **Paths**: Use relative paths (`../`, `./`) for navigation and assets to work with GitHub Pages subdirectory

## Branding & Typography

### Header Branding
- **Format**: "Directed by PTV"
- **"Directed by"**: Bangla MN, regular weight (400), normal style
- **"PTV"**: Bangla MN, bold weight, with styling:
  - **P**: Not italic (wrapped in `<span class="p-letter">`)
  - **TV**: Italic
- **HTML Structure**:
```html
<span class="directed-by">Directed by</span> 
<span class="ptv"><span class="p-letter">P</span>TV</span>
```

### Fonts
- **Branding**: Bangla MN (for "Directed by PTV")
- **Film Titles**: Satoshi/Gordita, bold (700)
- **Body/Navigation**: Oswald, light (200-300)
- **Contact Name**: Same as branding ("PTV" with P non-italic, TV italic)

## Design Guidelines
- **Style**: Clean, minimalist, inspired by Apple design guidelines
- **Pre-minimalism aesthetic**: User prefers glossy, polished looks (not flat/cartoonish)
- **Primary Color**: Blue (#0000ff)
- **Animations**: 
  - Scroll reveal for film items (fade in + slide up, staggered)
  - Hover effects on images (scale 1.05 within container, overflow hidden)
- **Favicon**: Glossy blue P logo (`favicon.png`)

## Film Pages Structure
Each film page includes:
1. **Header**: Standard navigation with "Directed by PTV"
2. **Film Info Section**:
   - Title (Satoshi/Gordita bold, blue, 2.5rem)
   - "Produced by PTV" (Satoshi/Gordita regular, black, 1rem)
3. **Video Section**: Vimeo embed (16:9 aspect ratio)
4. **Photo Gallery**: 6 photos in 2x2x2 grid layout

## Social Media Links
- **Instagram**: https://www.instagram.com/petalontv/
- **Vimeo**: https://vimeo.com/user249630656
- **YouTube**: https://www.youtube.com/@petalontv

## Active Page Indicators
- Navigation links show underline for current page using `.active` class
- Home page: "HOME" is active
- Contact page: "CONTACT" is active
- Film pages: "FILMS" dropdown button is active

## Film Grid (Homepage)
- **Layout**: 3 columns (responsive: 2 cols on tablet, 1 col on mobile)
- **Images**: Hover scale effect within fixed container
- **Animation**: Scroll reveal on first load with staggered timing (100ms delay between items)
- **Max Width**: 1800px centered

## Navigation
- **Dropdown Style**: Clean white box, blue text, no dividing lines, simple opacity hover effect
- **Links**: Use relative paths for GitHub Pages compatibility

## CSS Organization
- Global styles with consistent letter-spacing for brand cohesion
- Responsive breakpoints: 1400px, 1024px, 768px
- Transitions: 0.3-0.6s ease for smooth interactions

## File Management
- Shared assets (CSS, JS, favicon) at root level
- Subdirectories for each page with clean URLs
- Keep `.git-credentials` local only (in `.gitignore`)

## Testing Workflow
- Test locally at http://localhost:8000 using Python server
- Verify changes on GitHub Pages after push
- Hard refresh (Cmd+Shift+R) for favicon/CSS updates