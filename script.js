/**
 * Other Experiences - Interactive Landing Page
 * Main JavaScript functionality
 */

// Data Model
const APP_DATA = {
    primaryItems: [
        // Blue side (Technology)
        {
            id: 'webs',
            side: 'blue',
            label: 'Webs',
            description: 'Desarrollo web moderno y responsive',
            thumbnail: 'images/webs-icon.png'
        },
        {
            id: 'automatizacion',
            side: 'blue',
            label: 'Automatización',
            description: 'Automatización de procesos empresariales',
            thumbnail: 'images/automation-icon.png'
        },
        {
            id: 'pymes',
            side: 'blue',
            label: 'PYMES',
            description: 'Actualizamos el software de tu empresa de manera personalizada',
            thumbnail: 'images/pyme-icon.png'
        },
        
        // Red side (Gaming/VR)
        {
            id: 'vr',
            side: 'red',
            label: 'VR',
            description: 'Hacemos cualquier experiencia en VR',
            thumbnail: 'images/vr-icon.png'
        },
        {
            id: 'consola',
            side: 'red',
            label: 'Consola',
            description: 'Desarrollo de juegos para consolas',
            thumbnail: 'images/console-icon.png'
        },
        {
            id: 'movil',
            side: 'red',
            label: 'Móvil',
            description: 'Aplicaciones móviles nativas y multiplataforma',
            thumbnail: 'images/mobile-icon.png'
        }
    ],
    
    subItems: {
        // VR sub-items
        vr: [
            {
                id: 'unplugged-air-guitar',
                title: 'Unplugged: Air Guitar',
                mediaUrl: 'media/unplugged-air-guitar.mp4',
                mediaType: 'video',
                text: 'Experiencia VR inmersiva de guitarra virtual que te permite tocar sin instrumento físico. Vive la música de una manera completamente nueva y revolucionaria.'
            },
            {
                id: 'unplugged-moonscraper',
                title: 'Unplugged VR: Moonscraper Integration',
                mediaUrl: 'media/unplugged-moonscraper.mp4',
                mediaType: 'video',
                text: 'Integración avanzada de VR con Moonscraper para crear experiencias musicales únicas. Combina lo mejor de ambos mundos para una experiencia inmersiva completa.'
            },
            {
                id: 'unplugged-song-editor',
                title: 'Unplugged VR Song Editor',
                mediaUrl: 'media/unplugged-song-editor.mp4',
                mediaType: 'video',
                text: 'Editor de canciones en realidad virtual que permite crear y modificar música de forma intuitiva y visual. Una herramienta revolucionaria para compositores.'
            }
        ],
        
        // PYMES sub-items
        pymes: [
            {
                id: 'cross-platform-unity',
                title: 'Streamlining Cross-Platform Development in Unity',
                mediaUrl: 'media/cross-platform-unity.mp4',
                mediaType: 'video',
                text: 'Optimización y automatización del desarrollo multiplataforma en Unity. Soluciones empresariales para agilizar el proceso de desarrollo de software.'
            },
            {
                id: 'telemedicine-server',
                title: 'Custom Telemedicine Server Solution',
                mediaUrl: 'media/telemedicine-server.mp4',
                mediaType: 'video',
                text: 'Solución de servidor de telemedicina personalizada para empresas del sector salud. Plataforma completa para consultas médicas virtuales.'
            },
            {
                id: 'medicine-classes',
                title: 'PROJECT MEDICINE CLASSES',
                mediaUrl: 'media/medicine-classes.mp4',
                mediaType: 'video',
                text: 'Plataforma educativa para clases de medicina. Sistema integral para instituciones educativas del sector médico.'
            }
        ],
        
        // Webs sub-items
        webs: [
            {
                id: 'telemedicine-web',
                title: 'Custom Telemedicine Server Solution',
                mediaUrl: 'media/telemedicine-web.mp4',
                mediaType: 'video',
                text: 'Solución web completa de telemedicina. Plataforma online para consultas médicas virtuales con todas las funcionalidades necesarias.'
            },
            {
                id: 'medicine-classes-web',
                title: 'PROJECT MEDICINE CLASSES',
                mediaUrl: 'media/medicine-classes-web.mp4',
                mediaType: 'video',
                text: 'Plataforma web educativa para clases de medicina. Sistema de aprendizaje online completo para instituciones médicas.'
            },
            {
                id: 'space-scumm-web',
                title: 'Space Scumm',
                mediaUrl: 'media/space-scumm-web.mp4',
                mediaType: 'video',
                text: 'Juego web interactivo con temática espacial. Experiencia de juego completa accesible desde cualquier navegador.'
            }
        ],
        
        // Automatización sub-items
        automatizacion: [
            {
                id: 'cross-platform-automation',
                title: 'Streamlining Cross-Platform Development in Unity',
                mediaUrl: 'media/cross-platform-automation.mp4',
                mediaType: 'video',
                text: 'Automatización del desarrollo multiplataforma en Unity. Optimización de procesos de desarrollo para mayor eficiencia.'
            },
            {
                id: 'physiotherapy-cervical',
                title: 'PHYSIOTHERAPY VR (CERVICAL WORK)',
                mediaUrl: 'media/physiotherapy-cervical.mp4',
                mediaType: 'video',
                text: 'Sistema automatizado de fisioterapia VR para trabajo cervical. Procesos automatizados de rehabilitación y seguimiento.'
            },
            {
                id: 'repair-smartphone-xr',
                title: 'REPAIR SMARTPHONE WITH XR',
                mediaUrl: 'media/repair-smartphone-xr.mp4',
                mediaType: 'video',
                text: 'Sistema automatizado de reparación de smartphones con XR. Guías interactivas y procesos automatizados de diagnóstico.'
            }
        ],
        
        // Consola sub-items
        consola: [
            {
                id: 'space-scumm',
                title: 'Space Scumm',
                mediaUrl: 'media/space-scumm.mp4',
                mediaType: 'video',
                text: 'Juego de aventura espacial para consolas. Experiencia gaming completa con gráficos optimizados para plataformas de consola.'
            },
            {
                id: 'destroy-star-death',
                title: 'Destroy Star Death',
                mediaUrl: 'media/destroy-star-death.mp4',
                mediaType: 'video',
                text: 'Juego de acción y destrucción para consolas. Mecánicas de juego avanzadas y efectos visuales de última generación.'
            },
            {
                id: 'tikismikis',
                title: 'TIKISMIKIS',
                mediaUrl: 'media/tikismikis.mp4',
                mediaType: 'video',
                text: 'Juego de puzzle y estrategia para consolas. Experiencia única de juego con mecánicas innovadoras.'
            }
        ],
        
        // Móvil sub-items
        movil: [
            {
                id: 'tikismikis-mobile',
                title: 'TIKISMIKIS',
                mediaUrl: 'media/tikismikis-mobile.mp4',
                mediaType: 'video',
                text: 'Aplicación móvil de puzzle y estrategia. Experiencia optimizada para dispositivos móviles con controles táctiles intuitivos.'
            },
            {
                id: 'destroy-star-death-mobile',
                title: 'Destroy Star Death',
                mediaUrl: 'media/destroy-star-death-mobile.mp4',
                mediaType: 'video',
                text: 'Juego móvil de acción y destrucción. Adaptado específicamente para pantallas táctiles y dispositivos móviles.'
            },
            {
                id: 'physiotherapy-ictus-mobile',
                title: 'Physiotherapy VR (Ictus Rehabilitation)',
                mediaUrl: 'media/physiotherapy-ictus-mobile.mp4',
                mediaType: 'video',
                text: 'Aplicación móvil de rehabilitación de ictus. Sistema de fisioterapia adaptado para dispositivos móviles con seguimiento personalizado.'
            }
        ]
    }
};

// App State
let appState = {
    isFocusMode: false,
    activeSide: null,
    activePrimaryItem: null,
    activeSubItem: null,
    isPanelOpen: false
};

// DOM Elements
const elements = {
    splitContainer: null,
    blueSide: null,
    redSide: null,
    blueSpheres: null,
    redSpheres: null,
    centerBubble: null,
    subMenu: null,
    chipList: null,
    mediaPanel: null,
    mediaVideo: null,
    mediaImage: null,
    panelTitle: null,
    panelDescription: null,
    closeBtn: null,
    backBtn: null
};

/**
 * Initialize the application
 */
function init() {
    // Add particles to both sides
    document.querySelectorAll('.side').forEach(side => {
        const p = document.createElement('div');
        p.className = 'particles';
        side.appendChild(p);
    });
    
    // Initialize app state
    appState.currentPrimary = null;
    appState.currentSub = null;
    appState.isInFocusMode = false;
    appState.activeSide = null;
    
    // Get DOM elements
    elements.splitContainer = document.querySelector('.split-container');
    elements.blueSide = document.getElementById('blue-side');
    elements.redSide = document.getElementById('red-side');
    elements.blueSpheres = document.getElementById('blue-spheres');
    elements.redSpheres = document.getElementById('red-spheres');
    elements.centerBubble = document.getElementById('center-bubble');
    elements.subMenu = document.getElementById('sub-menu');
    elements.chipList = document.getElementById('chip-list');
    elements.mediaPanel = document.getElementById('media-panel');
    elements.mediaVideo = document.getElementById('media-video');
    elements.mediaImage = document.getElementById('media-image');
    elements.panelTitle = document.getElementById('panel-title');
    elements.panelDescription = document.getElementById('panel-description');
    elements.closeBtn = document.getElementById('close-btn');
    elements.backBtn = document.getElementById('back-btn');

    // Render primary spheres
    renderPrimarySpheres();
    
    // Add event listeners
    addEventListeners();
    
    // Preload media for better performance
    preloadAllMedia();
    
    // Announce to screen reader
    announceToScreenReader('Other Experiences landing page loaded. Use Tab to navigate between interactive elements.');
}

/**
 * Render primary spheres based on data
 */
function renderPrimarySpheres() {
    const blueItems = APP_DATA.primaryItems.filter(item => item.side === 'blue');
    const redItems = APP_DATA.primaryItems.filter(item => item.side === 'red');
    
    // Render blue spheres
    elements.blueSpheres.innerHTML = blueItems.map(item => createSphereHTML(item)).join('');
    
    // Render red spheres
    elements.redSpheres.innerHTML = redItems.map(item => createSphereHTML(item)).join('');
    
    // Apply organic positioning
    applyOrganicPositioning();
    
    // Trigger bubble birth animation after a small delay to ensure DOM is ready
    setTimeout(() => {
        birthFromCenter('#blue-spheres');
        birthFromCenter('#red-spheres');
    }, 100);
}

/**
 * Create HTML for a sphere
 */
function createSphereHTML(item) {
    return `
        <li class="sphere-item" data-id="${item.id}" data-side="${item.side}">
            <div class="sphere" tabindex="0" role="button" aria-label="${item.label}">
                <span class="sphere-text">${item.label}</span>
                <div class="sphere-thumbnail" style="background-image: url('${item.thumbnail}')"></div>
            </div>
            <div class="sphere-description">${item.description}</div>
        </li>
    `;
}

/**
 * Add event listeners
 */
function addEventListeners() {
    // Primary sphere clicks
    document.addEventListener('click', handleSphereClick);
    document.addEventListener('keydown', handleKeyDown);
    
    // Sphere hover events - remove capture phase to fix closest() errors
    document.addEventListener('mouseenter', handleSphereHover);
    document.addEventListener('mouseleave', handleSphereLeave);
    
    // Center bubble click
    elements.centerBubble.addEventListener('click', exitFocusMode);
    elements.centerBubble.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            exitFocusMode();
        }
    });
    
    // Back button
    elements.backBtn.addEventListener('click', exitFocusMode);
    
    // Close button
    elements.closeBtn.addEventListener('click', closePanel);
    
    // Panel backdrop click
    elements.mediaPanel.addEventListener('click', (e) => {
        if (e.target === elements.mediaPanel) {
            closePanel();
        }
    });
}

/**
 * Handle sphere hover
 */
function handleSphereHover(e) {
    // Add comprehensive null check for e.target and ensure it's a DOM element
    if (!e || !e.target || typeof e.target.closest !== 'function' || !(e.target instanceof Element)) {
        return;
    }
    
    const sphere = e.target.closest('.sphere');
    if (!sphere) return;
    
    const sphereItem = sphere.closest('.sphere-item');
    if (!sphereItem) return;
    
    const sphereId = sphereItem.dataset.id;
    const primaryItem = APP_DATA.primaryItems.find(item => item.id === sphereId);
    
    if (primaryItem && primaryItem.thumbnail) {
        const thumbnail = sphere.querySelector('.sphere-thumbnail');
        if (thumbnail) {
            thumbnail.style.backgroundImage = `url('${primaryItem.thumbnail}')`;
        }
    }
}

/**
 * Handle sphere leave
 */
function handleSphereLeave(e) {
    // Add comprehensive null check for e.target and ensure it's a DOM element
    if (!e || !e.target || typeof e.target.closest !== 'function' || !(e.target instanceof Element)) {
        return;
    }
    
    const sphere = e.target.closest('.sphere');
    if (!sphere) return;
    
    // Reset thumbnail when leaving (optional - you might want to keep it visible)
    // const thumbnail = sphere.querySelector('.sphere-thumbnail');
    // if (thumbnail) {
    //     thumbnail.style.backgroundImage = '';
    // }
}

/**
 * Handle sphere clicks
 */
function handleSphereClick(e) {
    // Add comprehensive null check for e.target and ensure it's a DOM element
    if (!e || !e.target || typeof e.target.closest !== 'function' || !(e.target instanceof Element)) {
        return;
    }
    
    const sphereItem = e.target.closest('.sphere-item');
    if (!sphereItem) return;
    
    const sphereId = sphereItem.dataset.id;
    const sphereSide = sphereItem.dataset.side;
    
    enterFocusMode(sphereId, sphereSide);
}

/**
 * Handle keyboard navigation
 */
function handleKeyDown(e) {
    if (e.key === 'Escape') {
        if (appState.isPanelOpen) {
            closePanel();
        } else if (appState.isFocusMode) {
            exitFocusMode();
        }
    }
}

/**
 * Enter focus mode
 */
function enterFocusMode(primaryId, side) {
    appState.isFocusMode = true;
    appState.activeSide = side;
    appState.activePrimaryItem = primaryId;
    
    // Update WebGL state
    if (window.updateWebGLState) {
        window.updateWebGLState(true, side);
    }
    
    // Update UI classes
    elements.splitContainer.classList.add('focus-mode');
    if (side === 'blue') {
        elements.blueSide.classList.add('expanded');
        elements.backBtn.classList.add('blue-active');
        elements.splitContainer.classList.add('blue-active');
        console.log('Applied blue-active class to split-container');
        console.log('Split container classes:', elements.splitContainer.className);
        console.log('Blue side classes:', elements.blueSide.className);
    } else {
        elements.redSide.classList.add('expanded');
        elements.backBtn.classList.add('red-active');
        elements.splitContainer.classList.add('red-active');
        console.log('Applied red-active class to split-container');
        console.log('Split container classes:', elements.splitContainer.className);
        console.log('Red side classes:', elements.redSide.className);
    }
    
    // Show center bubble
    const primaryItem = APP_DATA.primaryItems.find(item => item.id === primaryId);
    showCenterBubble(primaryItem);
    
    // Show sub menu
    showSubMenu(primaryId);
    
    // Show back button
    elements.backBtn.classList.add('active');
    
    // Announce to screen readers
    announceToScreenReader(`Entered ${primaryItem.label} focus mode`);
}

/**
 * Show center bubble
 */
function showCenterBubble(primaryItem) {
    elements.centerBubble.classList.add('active');
    elements.centerBubble.setAttribute('aria-hidden', 'false');
    
    const thumbnail = elements.centerBubble.querySelector('.bubble-thumbnail');
    const title = elements.centerBubble.querySelector('.bubble-title');
    
    thumbnail.style.backgroundImage = `url('${primaryItem.thumbnail}')`;
    title.textContent = primaryItem.label;
    
    // Check if we're on mobile (screen width <= 768px)
    const isMobile = window.innerWidth <= 768;
    
    // Apply positioning based on device type
    if (isMobile) {
        if (appState.activeSide === 'blue') {
            elements.centerBubble.style.top = '68%';
            elements.centerBubble.style.left = '50%';
            console.log('Applied top: 68% to center bubble (mobile blue side)');
        } else if (appState.activeSide === 'red') {
            elements.centerBubble.style.top = '17%';
            elements.centerBubble.style.left = '50%';
            console.log('Applied top: 17% to center bubble (mobile red side)');
        }
    } else {
        if (appState.activeSide === 'blue') {
            elements.centerBubble.style.left = '70%';
            elements.centerBubble.style.top = '50%';
            console.log('Applied left: 70% to center bubble (desktop blue side)');
        } else if (appState.activeSide === 'red') {
            elements.centerBubble.style.left = '30%';
            elements.centerBubble.style.top = '50%';
            console.log('Applied left: 30% to center bubble (desktop red side)');
        }
    }
    
    // Debug: Check if classes are applied
    console.log('Center bubble classes:', elements.centerBubble.className);
    console.log('Split container classes:', elements.splitContainer.className);
}

/**
 * Show sub menu
 */
function showSubMenu(primaryId) {
    const subItems = APP_DATA.subItems[primaryId] || [];
    
    elements.chipList.innerHTML = subItems.map(item => createChipHTML(item)).join('');
    elements.subMenu.classList.add('active');
    elements.subMenu.setAttribute('aria-hidden', 'false');
    
    // Check if we're on mobile (screen width <= 768px)
    const isMobile = window.innerWidth <= 768;
    
    // Apply positioning based on device type
    if (isMobile) {
        if (appState.activeSide === 'blue') {
            elements.subMenu.style.top = '77%';
            elements.subMenu.style.left = '50%';
            console.log('Applied top: 77% to sub menu (mobile blue side)');
        } else if (appState.activeSide === 'red') {
            elements.subMenu.style.top = '28%';
            elements.subMenu.style.left = '50%';
            console.log('Applied top: 28% to sub menu (mobile red side)');
        }
    } else {
        if (appState.activeSide === 'blue') {
            elements.subMenu.style.left = '70%';
            elements.subMenu.style.top = 'auto';
            console.log('Applied left: 70% to sub menu (desktop blue side)');
        } else if (appState.activeSide === 'red') {
            elements.subMenu.style.left = '30%';
            elements.subMenu.style.top = 'auto';
            console.log('Applied left: 30% to sub menu (desktop red side)');
        }
    }
    
    // Debug: Check if classes are applied
    console.log('Sub menu classes:', elements.subMenu.className);
    
    // Add click listeners to chips
    elements.chipList.addEventListener('click', handleChipClick);
}

/**
 * Create HTML for a chip
 */
function createChipHTML(item) {
    return `
        <li>
            <button class="chip ${appState.activeSide}" data-id="${item.id}" tabindex="0">
                ${item.title}
            </button>
        </li>
    `;
}

/**
 * Handle chip clicks
 */
function handleChipClick(e) {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    
    const chipId = chip.dataset.id;
    const subItems = APP_DATA.subItems[appState.activePrimaryItem];
    const subItem = subItems.find(item => item.id === chipId);
    
    if (subItem) {
        openPanel(subItem);
    }
}

/**
 * Open media panel
 */
function openPanel(subItem) {
    appState.isPanelOpen = true;
    appState.activeSubItem = subItem;
    
    // Set panel position based on active side
    const panelSide = appState.activeSide === 'blue' ? 'left' : 'right';
    elements.mediaPanel.className = `media-panel ${panelSide} active`;
    elements.mediaPanel.setAttribute('aria-hidden', 'false');
    
    // Set media content
    if (subItem.mediaType === 'video') {
        elements.mediaVideo.src = subItem.mediaUrl;
        elements.mediaVideo.style.display = 'block';
        elements.mediaImage.style.display = 'none';
        
        // Add error handling for video loading
        elements.mediaVideo.onerror = () => {
            console.warn(`Failed to load video: ${subItem.mediaUrl}`);
            // Show a fallback message or placeholder
            elements.mediaVideo.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'media-error';
            errorDiv.innerHTML = `<p>Video no disponible: ${subItem.title}</p>`;
            errorDiv.style.cssText = 'display: flex; align-items: center; justify-content: center; height: 200px; background: #f0f0f0; color: #666; text-align: center;';
            elements.mediaPanel.appendChild(errorDiv);
        };
        
        elements.mediaVideo.play().catch(() => {
            // Handle autoplay restrictions
            console.log('Video autoplay blocked');
        });
    } else {
        elements.mediaImage.src = subItem.mediaUrl;
        elements.mediaImage.alt = subItem.title;
        elements.mediaImage.style.display = 'block';
        elements.mediaVideo.style.display = 'none';
        
        // Add error handling for image loading
        elements.mediaImage.onerror = () => {
            console.warn(`Failed to load image: ${subItem.mediaUrl}`);
            // Show a fallback message or placeholder
            elements.mediaImage.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'media-error';
            errorDiv.innerHTML = `<p>Imagen no disponible: ${subItem.title}</p>`;
            errorDiv.style.cssText = 'display: flex; align-items: center; justify-content: center; height: 200px; background: #f0f0f0; color: #666; text-align: center;';
            elements.mediaPanel.appendChild(errorDiv);
        };
    }
    
    // Check if we're on mobile and apply specific positioning
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        if (appState.activeSide === 'blue') {
            elements.mediaPanel.style.top = '34%';
            elements.mediaPanel.style.left = '2.5vw';
            elements.mediaPanel.style.right = '2.5vw';
            elements.mediaPanel.style.width = '95vw';
            elements.mediaPanel.style.transform = 'translateY(-50%)';
            console.log('Applied top: 34% to media panel (mobile blue side)');
        } else if (appState.activeSide === 'red') {
            elements.mediaPanel.style.top = '75%';
            elements.mediaPanel.style.left = '2.5vw';
            elements.mediaPanel.style.right = '2.5vw';
            elements.mediaPanel.style.width = '95vw';
            elements.mediaPanel.style.transform = 'translateY(-50%)';
            console.log('Applied top: 75% to media panel (mobile red side)');
        }
    }
    
    // Set text content
    elements.panelTitle.textContent = subItem.title;
    elements.panelDescription.textContent = subItem.text;
    
    // Announce to screen readers
    announceToScreenReader(`Opened ${subItem.title} panel`);
}

/**
 * Close media panel
 */
function closePanel() {
    appState.isPanelOpen = false;
    appState.activeSubItem = null;
    
    elements.mediaPanel.classList.remove('active');
    elements.mediaPanel.setAttribute('aria-hidden', 'true');
    
    // Reset panel positioning
    elements.mediaPanel.style.top = '';
    elements.mediaPanel.style.left = '';
    elements.mediaPanel.style.right = '';
    elements.mediaPanel.style.width = '';
    elements.mediaPanel.style.transform = '';
    
    // Stop video if playing
    if (elements.mediaVideo.src) {
        elements.mediaVideo.pause();
        elements.mediaVideo.src = '';
    }
    
    // Remove any error messages
    const errorDivs = elements.mediaPanel.querySelectorAll('.media-error');
    errorDivs.forEach(div => div.remove());
    
    // Announce to screen readers
    announceToScreenReader('Panel closed');
}

/**
 * Exit focus mode
 */
function exitFocusMode() {
    appState.isFocusMode = false;
    appState.activeSide = null;
    appState.activePrimaryItem = null;
    
    // Reset WebGL state
    if (window.resetWebGLState) {
        window.resetWebGLState();
    }
    
    // Update UI classes
    elements.splitContainer.classList.remove('focus-mode', 'blue-active', 'red-active');
    elements.blueSide.classList.remove('expanded');
    elements.redSide.classList.remove('expanded');
    
    // Hide center bubble
    elements.centerBubble.classList.remove('active');
    elements.centerBubble.setAttribute('aria-hidden', 'true');
    
    // Reset position based on device type
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        elements.centerBubble.style.top = '50%';
        elements.centerBubble.style.left = '50%';
    } else {
        elements.centerBubble.style.left = '50%';
        elements.centerBubble.style.top = '50%';
    }
    
    // Hide sub menu
    elements.subMenu.classList.remove('active');
    elements.subMenu.setAttribute('aria-hidden', 'true');
    
    // Reset sub menu position based on device type
    if (isMobile) {
        elements.subMenu.style.top = '50%';
        elements.subMenu.style.left = '50%';
    } else {
        elements.subMenu.style.left = '50%';
        elements.subMenu.style.top = 'auto';
    }
    
    // Hide back button and remove side-specific classes
    elements.backBtn.classList.remove('active', 'blue-active', 'red-active');
    
    // Close panel if open
    if (appState.isPanelOpen) {
        closePanel();
    }
    
    // Announce to screen readers
    announceToScreenReader('Returned to main menu');
}

/**
 * Announce to screen readers
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Utility function to check if media exists
 */
function checkMediaExists(url) {
    return new Promise((resolve) => {
        // Check if it's a video file
        if (url.match(/\.(mp4|webm|ogg)$/i)) {
            // For video files, we'll just resolve as true since we can't easily check existence
            // The video element will handle loading errors when actually used
            resolve(true);
        } else {
            // For images, we can check if they exist
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => {
                console.warn(`Failed to load image: ${url}`);
                resolve(false);
            };
            img.src = url;
        }
    });
}

/**
 * Preload critical media
 */
async function preloadMedia(url) {
    try {
        const exists = await checkMediaExists(url);
        if (exists) {
            console.log(`Preloaded: ${url}`);
        } else {
            console.warn(`Media file not found: ${url}`);
        }
    } catch (error) {
        console.warn(`Failed to preload: ${url}`, error);
    }
}

/**
 * Preload all media content for better performance
 */
function preloadAllMedia() {
    const allMedia = [];
    
    // Collect all media paths from APP_DATA
    APP_DATA.primaryItems.forEach(primaryItem => {
        if (primaryItem.thumbnail) {
            allMedia.push(primaryItem.thumbnail);
        }
        
        // Get sub-items for this primary item
        const subItems = APP_DATA.subItems[primaryItem.id] || [];
        subItems.forEach(subItem => {
            if (subItem.mediaUrl) {
                allMedia.push(subItem.mediaUrl);
            }
        });
    });
    
    // Preload each media item
    allMedia.forEach(mediaPath => {
        preloadMedia(mediaPath);
    });
    
    console.log('Preloading images:', allMedia);
}

/**
 * Apply organic positioning to spheres
 */
function applyOrganicPositioning() {
    // Posiciones predefinidas con variación aleatoria
    const bluePositions = [
        { x: -25, y: -40, margin: 'var(--spacing-lg)' },      // Primera: más cerca del centro
        { x: 35, y: 15, margin: 'var(--spacing-xl)' },        // Segunda: más alejada
        { x: -10, y: 25, margin: '0' }                        // Tercera: término medio
    ];
    
    const redPositions = [
        { x: 20, y: -35, margin: 'var(--spacing-lg)' },       // Primera: más cerca del centro
        { x: -30, y: 10, margin: 'var(--spacing-xl)' },       // Segunda: más alejada  
        { x: 15, y: 30, margin: '0' }                         // Tercera: término medio
    ];
    
    // Aplicar posicionamiento a esferas azules
    const blueSpheres = document.querySelectorAll('#blue-spheres li');
    blueSpheres.forEach((sphere, index) => {
        if (bluePositions[index]) {
            const pos = bluePositions[index];
            // Añadir variación aleatoria pequeña
            const randomX = pos.x + (Math.random() - 0.5) * 10;
            const randomY = pos.y + (Math.random() - 0.5) * 10;
            
            sphere.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
            sphere.style.marginBottom = pos.margin;
        }
    });
    
    // Aplicar posicionamiento a esferas rojas
    const redSpheres = document.querySelectorAll('#red-spheres li');
    redSpheres.forEach((sphere, index) => {
        if (redPositions[index]) {
            const pos = redPositions[index];
            // Añadir variación aleatoria pequeña
            const randomX = pos.x + (Math.random() - 0.5) * 10;
            const randomY = pos.y + (Math.random() - 0.5) * 10;
            
            sphere.style.transform = `translateX(${randomX}px) translateY(${randomY}px)`;
            sphere.style.marginBottom = pos.margin;
        }
    });
}

/**
 * Animate spheres appearing from center (bubble birth effect)
 */
function birthFromCenter(listSelector) {
    const spheres = document.querySelectorAll(`${listSelector} .sphere`);
    if (!spheres.length) return;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    spheres.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const ex = r.left + r.width / 2;  // centro de la esfera en layout final
        const ey = r.top + r.height / 2;

        // vector desde el centro de la pantalla hasta su posición final
        const dx = cx - ex;
        const dy = cy - ey;

        el.style.setProperty('--dx', `${dx}px`);
        el.style.setProperty('--dy', `${dy}px`);
        el.style.setProperty('--delay', `${i * 110}ms`); // stagger
        // dispara animación
        el.classList.add('pop-in');
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Handle orientation change on mobile devices
window.addEventListener('orientationchange', () => {
    // Give time for orientation change to complete
    setTimeout(() => {
        if (appState.isFocusMode && appState.activePrimaryItem) {
            const primaryItem = APP_DATA.primaryItems.find(item => item.id === appState.activePrimaryItem);
            showCenterBubble(primaryItem);
            showSubMenu(appState.activePrimaryItem);
        }
    }, 500);
});

// Handle window resize for bubble birth animation and responsive positioning
window.addEventListener('resize', () => {
    document.querySelectorAll('.sphere').forEach(el => el.classList.remove('pop-in'));
    // pequeña espera para que el layout se asiente antes de medir
    setTimeout(() => {
        applyOrganicPositioning(); // Reaplica el posicionamiento orgánico
        birthFromCenter('#blue-spheres');
        birthFromCenter('#red-spheres');
        
        // Update positioning if in focus mode
        if (appState.isFocusMode && appState.activePrimaryItem) {
            const primaryItem = APP_DATA.primaryItems.find(item => item.id === appState.activePrimaryItem);
            showCenterBubble(primaryItem);
            showSubMenu(appState.activePrimaryItem);
        }
    }, 60);
});

// Export for potential external use
window.TheOthersExperience = {
    APP_DATA,
    appState,
    enterFocusMode,
    exitFocusMode,
    openPanel,
    closePanel
};
