# The Others Experience - Interactive Landing Page

A modern, interactive landing page featuring a split-screen design with floating spheres, focus mode interactions, and immersive media panels.

## 🎨 Featuress

### Split-Screen Layout
- **Left Side (Blue)**: Technology services with circuit board patterns
- **Right Side (Red)**: Gaming/VR services with energy patterns
- **Center Divider**: Glowing vertical line separating the two sides

### Interactive Spheres
- **Primary Menu**: 6 floating spheres (3 per side)
- **Hover Effects**: Scale up to 4x, show thumbnails and descriptions
- **Click Interaction**: Enter focus mode with smooth animations

### Focus Mode
- **Side Expansion**: Selected side expands to 70%, opposite shrinks to 30%
- **Center Bubble**: Selected sphere moves to center as large bubble
- **Sub-Menu**: 3 chips appear below center bubble
- **Media Panel**: Click chips to open detailed panels with videos/images

### Services

#### Blue Side (Technology)
- **Webs**: Desarrollo web moderno y responsive
- **Automatización**: Automatización de procesos empresariales  
- **PYMES**: Actualizamos el software de tu empresa de manera personalizada

#### Red Side (Gaming/VR)
- **VR**: Hacemos cualquier experiencia en VR
- **Consola**: Desarrollo de juegos para consolas
- **Móvil**: Aplicaciones móviles nativas y multiplataforma

## 🚀 Quick Start

1. **Download Files**: Ensure you have all three files in the same directory:
   - `index.html`
   - `style.css`
   - `script.js`

2. **Open in Browser**: Simply open `index.html` in any modern web browser

3. **No Build Required**: The page works immediately without any build process

## 📁 File Structure

```
the-others-experience/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── media/              # Optional: Add your media files here
    ├── unplugged.mp4
    ├── medicina.gif
    ├── erp-ligero.mp4
    └── ... (other media files)
```

## 🎯 How to Use

### Basic Interaction
1. **Hover** over any sphere to see it scale up with thumbnail and description
2. **Click** any sphere to enter focus mode
3. **Click** chips in focus mode to open detailed panels
4. **Press Esc** or click outside to close panels
5. **Click** center bubble or "Volver" button to exit focus mode

### Keyboard Navigation
- **Tab**: Navigate between interactive elements
- **Enter/Space**: Activate buttons and spheres
- **Escape**: Close panels or exit focus mode

## 🎨 Customization

### Adding Media Files
1. Create a `media/` folder in your project directory
2. Add your video/image files with these names:
   - `unplugged.mp4`
   - `medicina.gif`
   - `erp-ligero.mp4`
   - `other-experiences.mp4`
   - `integraciones.gif`
   - `soporte-360.mp4`
   - And more as defined in `script.js`

### Modifying Content
Edit the `APP_DATA` object in `script.js` to:
- Change service names and descriptions
- Add new services
- Update media file paths
- Modify sub-menu items

### Styling
- Colors are defined as CSS variables in `style.css`
- Modify `:root` section to change the color scheme
- Animation timing can be adjusted in the variables section

## 🎭 Animations & Effects

### Hover Effects
- Spheres scale up smoothly with cubic-bezier easing
- Thumbnails fade in with opacity transitions
- Descriptions slide up from below

### Focus Mode
- Split-screen animation with 0.5s duration
- Center bubble scales in from center
- Sub-menu slides up from bottom

### Background Patterns
- **Blue Side**: Animated circuit board patterns
- **Red Side**: Dynamic energy/lightning effects
- Both patterns have subtle floating animations

## 📱 Responsive Design

### Desktop (Default)
- Full split-screen layout
- Large spheres with 4x hover scaling
- Side-by-side media panels

### Tablet (768px and below)
- Stacked layout (top/bottom instead of left/right)
- Reduced sphere sizes
- Centered media panels

### Mobile (480px and below)
- Compact layout with smaller elements
- Single-column chip layout
- Full-width media panels

## ♿ Accessibility Features

### Screen Reader Support
- Proper ARIA labels and roles
- Live announcements for state changes
- Semantic HTML structure

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus indicators for all clickable elements
- Escape key support for closing modals

### Reduced Motion
- Respects `prefers-reduced-motion` media query
- Disables animations for users who prefer it
- Maintains functionality without motion

## 🎨 Design System

### Typography
- **Headings**: Orbitron (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Responsive**: Font sizes scale with viewport

### Color Palette
- **Blue Side**: Deep blues with glowing accents
- **Red Side**: Dark reds with energy effects
- **Neutral**: White text on dark backgrounds
- **Accessibility**: AA contrast ratios maintained

### Spacing
- Consistent spacing using CSS custom properties
- Responsive spacing that adapts to screen size
- Proper visual hierarchy

## 🔧 Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox
- CSS custom properties

### Performance
- Optimized animations using CSS transforms
- Efficient event handling
- Minimal DOM manipulation
- Lazy loading for media files

### Code Quality
- Clean, commented code
- Modular JavaScript functions
- Semantic HTML structure
- Maintainable CSS architecture

## 🐛 Troubleshooting

### Media Not Loading
- Ensure media files are in the correct `media/` folder
- Check file names match those in `script.js`
- Verify file formats are supported (MP4, GIF, JPG, PNG)

### Animations Not Working
- Check if `prefers-reduced-motion` is enabled in your OS
- Ensure JavaScript is enabled in your browser
- Verify all CSS files are loading properly

### Layout Issues
- Clear browser cache and reload
- Check for CSS conflicts with other stylesheets
- Verify viewport meta tag is present

## 📄 License

This project is created for "The Others Experience" and is ready for production use.

## 🤝 Support

For questions or customization requests, refer to the code comments in each file for detailed explanations of functionality.
