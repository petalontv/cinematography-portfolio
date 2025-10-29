# Cinematography Portfolio Site

A minimalist, cinematic portfolio site for GitHub Pages.

## Features

- Pure black (#000000) background
- Blue (#4A90E2) accent color for links and highlights
- Clean, all-caps typography using Oswald Light
- Smooth hover effects on film images
- Responsive dropdown navigation
- Mobile-friendly design

## Customization

### 1. Update Personal Information

In both `index.html` and `contact.html`:
- Replace "ALEX JOHNSON DIRECTED BY PTV" with your name
- Replace "hello@example.com" with your email

### 2. Add Film Projects

In `index.html`:
- Update the film titles in the dropdown menu
- Update each film item with:
  - Film title
  - Replace placeholder divs with actual images: `<img src="images/film1.jpg" alt="Film Title" loading="lazy">`

### 3. Add Your Profile Photo

In `contact.html`:
- Replace the placeholder div with: `<img src="images/profile.jpg" alt="Your Name">`

### 4. Update Bio

In `contact.html`:
- Edit the bio text in the `.contact-bio` paragraph

### 5. Change Accent Color

If you want to use a different blue:
- In `styles.css`, find all instances of `#4A90E2` and replace with your color

## Folder Structure

```
cinematography_portfolio_site/
├── index.html          # Homepage with film grid
├── contact.html        # Contact page
├── styles.css          # All styles
├── script.js           # Dropdown functionality
├── images/             # Create this folder for your images
│   ├── film1.jpg
│   ├── film2.jpg
│   └── profile.jpg
└── README.md
```

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Push these files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Save and wait for deployment

Your site will be live at: `https://yourusername.github.io/repository-name/`

## Browser Compatibility

- Works on all modern browsers
- Fully responsive (desktop, tablet, mobile)
- Smooth scrolling for film navigation
