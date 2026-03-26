'use strict';

/* ============================================================
   DATA
   ============================================================ */

const GOOGLE_FONTS = [
  // Monospace — most relevant for legibility testing
  { name: 'Anonymous Pro',     category: 'Monospace',   styles: 4  },
  { name: 'Courier Prime',     category: 'Serif',        styles: 4  },
  { name: 'Fira Code',         category: 'Monospace',   styles: 5  },
  { name: 'IBM Plex Mono',     category: 'Monospace',   styles: 10 },
  { name: 'Inconsolata',       category: 'Monospace',   styles: 8  },
  { name: 'JetBrains Mono',    category: 'Monospace',   styles: 18 },
  { name: 'Nanum Gothic Coding', category: 'Monospace', styles: 2  },
  { name: 'Overpass Mono',     category: 'Monospace',   styles: 5  },
  { name: 'Oxygen Mono',       category: 'Monospace',   styles: 1  },
  { name: 'PT Mono',           category: 'Monospace',   styles: 1  },
  { name: 'Roboto Mono',       category: 'Monospace',   styles: 10 },
  { name: 'Share Tech Mono',   category: 'Monospace',   styles: 1  },
  { name: 'Source Code Pro',   category: 'Monospace',   styles: 16 },
  { name: 'Space Mono',        category: 'Monospace',   styles: 4  },
  { name: 'Ubuntu Mono',       category: 'Monospace',   styles: 4  },
  // Sans-Serif
  { name: 'Barlow',            category: 'Sans-Serif',  styles: 18 },
  { name: 'Cabin',             category: 'Sans-Serif',  styles: 8  },
  { name: 'DM Sans',           category: 'Sans-Serif',  styles: 18 },
  { name: 'Exo 2',             category: 'Sans-Serif',  styles: 18 },
  { name: 'Figtree',           category: 'Sans-Serif',  styles: 7  },
  { name: 'Fira Sans',         category: 'Sans-Serif',  styles: 18 },
  { name: 'IBM Plex Sans',     category: 'Sans-Serif',  styles: 10 },
  { name: 'Inter',             category: 'Sans-Serif',  styles: 9  },
  { name: 'Josefin Sans',      category: 'Sans-Serif',  styles: 14 },
  { name: 'Karla',             category: 'Sans-Serif',  styles: 8  },
  { name: 'Lato',              category: 'Sans-Serif',  styles: 8  },
  { name: 'Montserrat',        category: 'Sans-Serif',  styles: 18 },
  { name: 'Mulish',            category: 'Sans-Serif',  styles: 14 },
  { name: 'Nunito',            category: 'Sans-Serif',  styles: 14 },
  { name: 'Open Sans',         category: 'Sans-Serif',  styles: 15 },
  { name: 'Outfit',            category: 'Sans-Serif',  styles: 9  },
  { name: 'Plus Jakarta Sans', category: 'Sans-Serif',  styles: 14 },
  { name: 'Poppins',           category: 'Sans-Serif',  styles: 18 },
  { name: 'PT Sans',           category: 'Sans-Serif',  styles: 4  },
  { name: 'Quicksand',         category: 'Sans-Serif',  styles: 5  },
  { name: 'Raleway',           category: 'Sans-Serif',  styles: 18 },
  { name: 'Roboto',            category: 'Sans-Serif',  styles: 12 },
  { name: 'Rubik',             category: 'Sans-Serif',  styles: 14 },
  { name: 'Source Sans 3',     category: 'Sans-Serif',  styles: 16 },
  { name: 'Titillium Web',     category: 'Sans-Serif',  styles: 9  },
  { name: 'Ubuntu',            category: 'Sans-Serif',  styles: 8  },
  { name: 'Work Sans',         category: 'Sans-Serif',  styles: 18 },
  // Serif
  { name: 'Arvo',              category: 'Serif',        styles: 4  },
  { name: 'Bitter',            category: 'Serif',        styles: 14 },
  { name: 'Cormorant Garamond',category: 'Serif',        styles: 10 },
  { name: 'Crimson Text',      category: 'Serif',        styles: 6  },
  { name: 'EB Garamond',       category: 'Serif',        styles: 8  },
  { name: 'IBM Plex Serif',    category: 'Serif',        styles: 10 },
  { name: 'Libre Baskerville', category: 'Serif',        styles: 3  },
  { name: 'Lora',              category: 'Serif',        styles: 8  },
  { name: 'Merriweather',      category: 'Serif',        styles: 8  },
  { name: 'Noto Serif',        category: 'Serif',        styles: 36 },
  { name: 'Playfair Display',  category: 'Serif',        styles: 12 },
  { name: 'PT Serif',          category: 'Serif',        styles: 4  },
  { name: 'Source Serif 4',    category: 'Serif',        styles: 24 },
  { name: 'Spectral',          category: 'Serif',        styles: 14 },
  { name: 'Zilla Slab',        category: 'Serif',        styles: 10 },
  // Display
  { name: 'Anton',             category: 'Display',      styles: 1  },
  { name: 'Bebas Neue',        category: 'Display',      styles: 1  },
  { name: 'Exo',               category: 'Display',      styles: 18 },
  { name: 'Oswald',            category: 'Display',      styles: 6  },
  { name: 'Righteous',         category: 'Display',      styles: 1  },
  { name: 'Russo One',         category: 'Display',      styles: 1  },
  { name: 'Teko',              category: 'Display',      styles: 5  },
  // Handwriting
  { name: 'Caveat',            category: 'Handwriting',  styles: 4  },
  { name: 'Dancing Script',    category: 'Handwriting',  styles: 4  },
  { name: 'Indie Flower',      category: 'Handwriting',  styles: 1  },
  { name: 'Pacifico',          category: 'Handwriting',  styles: 1  },
  { name: 'Permanent Marker',  category: 'Handwriting',  styles: 1  },
].sort((a, b) => a.name.localeCompare(b.name));

const COMPARE_COLS = [
  { key: 'o0O',  label: 'o0O',   sample: 'o0O'  },
  { key: 'Il1',  label: 'Il1|',  sample: 'Il1|' },
  { key: 'rnm',  label: 'rn m',  sample: 'rn m' },
  { key: 'cld',  label: 'cld',   sample: 'cld'  },
  { key: 'S5',   label: 'S5$',   sample: 'S5$'  },
  { key: 'g9q',  label: 'g9q',   sample: 'g9q'  },
  { key: 'B8',   label: 'B8',    sample: 'B8'   },
];

const SENTENCE = 'The delivery arrived at 1100 Illinois Ave on October 10th.';

const PAIRINGS = [
  {
    id: 'p1',
    displayFont: 'Playfair Display',
    bodyFont: 'Inter',
    displayLabel: 'DISPLAY',
    bodyLabel: 'SANS',
    title: 'The Art of Typography',
    titleCSS: { fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: '700', fontSize: '30px' },
    body: 'Good typography goes unnoticed. Visual hierarchy becomes effortless. This pairing creates harmony between content structure and readability.',
  },
  {
    id: 'p2',
    displayFont: 'Space Mono',
    bodyFont: 'JetBrains Mono',
    displayLabel: 'MONO',
    bodyLabel: 'MONO',
    title: 'Code Meets Design',
    titleCSS: { fontFamily: "'Space Mono', monospace", fontWeight: '700', fontSize: '26px' },
    body: 'Where engineering meets creative expression. A perfect fit for developer tools, technical documentation, and modern dev interfaces.',
  },
  {
    id: 'p3',
    displayFont: 'Merriweather',
    bodyFont: 'Roboto',
    displayLabel: 'SERIF',
    bodyLabel: 'SANS',
    title: 'Timeless Readability',
    titleCSS: { fontFamily: "'Merriweather', serif", fontWeight: '700', fontSize: '28px' },
    body: 'A proven editorial pairing optimized for long-form text — tested in publications, knowledge platforms, and modern editorial interfaces.',
  },
  {
    id: 'p4',
    displayFont: 'Oswald',
    bodyFont: 'Lato',
    displayLabel: 'DISPLAY',
    bodyLabel: 'SANS',
    title: 'Bold Statements',
    titleCSS: { fontFamily: "'Oswald', sans-serif", fontWeight: '700', fontSize: '32px', letterSpacing: '-0.01em' },
    body: 'High-impact display type meets a neutral, multi-use sans. Flexibility and forward energy make this perfect for brand-forward projects.',
  },
];

const COLLECTIONS = [
  {
    id: 'c1',
    name: 'Code Editor Fonts',
    desc: 'Monospace typefaces optimized for code legibility — strong contrast between 0/O, l/1/I, and punctuation contexts.',
    fonts: [
      { name: 'Fira Code',       style: { fontFamily: "'Fira Code', monospace" } },
      { name: 'JetBrains Mono',  style: { fontFamily: "'JetBrains Mono', monospace" } },
      { name: 'Source Code Pro', style: { fontFamily: "'Source Code Pro', monospace" } },
      { name: 'IBM Plex Mono',   style: { fontFamily: "'IBM Plex Mono', monospace" } },
    ],
    time: '2 days ago',
  },
  {
    id: 'c2',
    name: 'Brand Identity Set',
    desc: 'Display and body pairings selected for editorial branding — balancing authority with approachability.',
    fonts: [
      { name: 'Playfair Display', style: { fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: '700', fontSize: '17px' } },
      { name: 'Inter',            style: { fontFamily: "'Inter', sans-serif" } },
      { name: 'Source Serif 4',   style: { fontFamily: "'Source Serif 4', serif" } },
    ],
    time: '1 week ago',
  },
  {
    id: 'c3',
    name: 'UI Sans Serifs',
    desc: 'Sans-serif fonts evaluated for interface design — excelling in tightly-set text and glyph distinction.',
    fonts: [
      { name: 'Inter',    style: { fontFamily: "'Inter', sans-serif" } },
      { name: 'Roboto',   style: { fontFamily: "'Roboto', sans-serif" } },
      { name: 'Poppins',  style: { fontFamily: "'Poppins', sans-serif" } },
      { name: 'IBM Plex Sans', style: { fontFamily: "'IBM Plex Sans', sans-serif" } },
      { name: 'Lato',     style: { fontFamily: "'Lato', sans-serif" } },
    ],
    time: '3 days ago',
  },
];

const DOT_COLORS = ['#d95f5f', '#4f7fd9', '#52b07a', '#d99b3a', '#9952d9', '#3ac4d9'];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  page: 'compare',
  compare: {
    fonts: [
      { name: 'Inter',         category: 'Sans-Serif' },
      { name: 'Roboto',        category: 'Sans-Serif' },
      { name: 'Fira Code',     category: 'Monospace'  },
      { name: 'Source Serif 4',category: 'Serif'      },
    ],
    size: 26,
    bg: 'light',
  },
  specimen: {
    font: 'Inter',
    size: 36,
  },
  fonts: {
    search: '',
    category: 'All',
    sort: 'A–Z',
  },
  loaded: new Set(),
};

/* ============================================================
   FONT LOADING
   ============================================================ */
function loadFont(name) {
  if (!name || state.loaded.has(name)) return;
  state.loaded.add(name);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  const encoded = encodeURIComponent(name).replace(/%20/g, '+');
  link.href = `https://fonts.googleapis.com/css2?family=${encoded}:ital,wght@0,400;0,700;1,400;1,700&display=swap`;
  document.head.appendChild(link);
}

function preloadFonts(names) { names.forEach(loadFont); }

/* ============================================================
   UTILITIES
   ============================================================ */
function h(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cssObj(obj) {
  return Object.entries(obj)
    .map(([k, v]) => `${k.replace(/([A-Z])/g, '-$1').toLowerCase()}:${v}`)
    .join(';');
}

function fontFamily(name) {
  return `'${h(name)}', system-ui, sans-serif`;
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function navigate(page) {
  state.page = page;
  document.querySelectorAll('.nav-link, .nav-logo').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ============================================================
   RENDER DISPATCHER
   ============================================================ */
function render() {
  const app = document.getElementById('app');
  const pages = {
    compare:     [renderCompare,     bindCompare],
    specimens:   [renderSpecimens,   bindSpecimens],
    pairings:    [renderPairings,    bindPairings],
    collections: [renderCollections, bindCollections],
    fonts:       [renderFontsPage,   bindFontsPage],
  };
  const [renderFn, bindFn] = pages[state.page] || pages.compare;
  app.innerHTML = renderFn();
  bindFn();
}

/* ============================================================
   COMPARE PAGE
   ============================================================ */
function renderCompare() {
  const { fonts, size, bg } = state.compare;
  preloadFonts(fonts.map(f => f.name));

  const darkWrap  = bg === 'dark' ? 'dark-bg' : '';
  const colHeaders = COMPARE_COLS.map(c => `<th>${h(c.label)}</th>`).join('');

  const rows = fonts.length
    ? fonts.map((font, i) => {
        const color = DOT_COLORS[i % DOT_COLORS.length];
        const cells = COMPARE_COLS.map(c =>
          `<td><span class="glyph" style="font-family:${fontFamily(font.name)};font-size:${size}px">${h(c.sample)}</span></td>`
        ).join('');
        return `<tr>
          <td>
            <div class="font-cell">
              <span class="font-dot" style="background:${color}"></span>
              <div class="font-cell-info">
                <div class="font-cell-name">${h(font.name)}</div>
                <div class="font-cell-cat">${h(font.category)}</div>
              </div>
              <button class="remove-row-btn" data-font="${h(font.name)}" title="Remove">×</button>
            </div>
          </td>
          ${cells}
        </tr>`;
      }).join('')
    : `<tr><td colspan="${COMPARE_COLS.length + 1}">
        <div class="compare-empty">
          <p>No fonts loaded. Click <strong>+ Add Font</strong> to begin.</p>
        </div>
      </td></tr>`;

  const sentences = fonts.map((font, i) => {
    const color = DOT_COLORS[i % DOT_COLORS.length];
    return `<div class="sentence-row">
      <span class="sentence-dot" style="background:${color}"></span>
      <span class="sentence-text" style="font-family:${fontFamily(font.name)}">${h(SENTENCE)}</span>
    </div>`;
  }).join('');

  return `
    <h1 class="page-title">Legibility Compare</h1>
    <p class="page-subtitle">Test ambiguous characters across loaded typefaces</p>

    <div class="compare-controls">
      <div class="control-group">
        <span class="control-label">Size</span>
        <div class="size-wrap">
          <input type="range" class="slider" id="sizeSlider" min="14" max="64" step="2" value="${size}">
          <span class="size-val" id="sizeVal">${size}px</span>
        </div>
      </div>
      <div class="control-group">
        <span class="control-label">Background</span>
        <div class="toggle-group">
          <button class="toggle-btn ${bg === 'light' ? 'active' : ''}" data-bg="light">Light</button>
          <button class="toggle-btn ${bg === 'dark'  ? 'active' : ''}" data-bg="dark">Dark</button>
        </div>
      </div>
      <button class="compare-add-btn" id="compareAddBtn">+ Add Font</button>
    </div>

    <div class="compare-wrap ${darkWrap}">
      <table class="compare-table">
        <thead><tr><th>Font</th>${colHeaders}</tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    <div class="sentence-section ${darkWrap}">
      <div class="section-heading">Sentence Context</div>
      ${sentences || `<div class="sentence-row"><span class="sentence-text" style="color:var(--text-light)">Add fonts above to see sentence comparisons.</span></div>`}
    </div>`;
}

function bindCompare() {
  const slider = document.getElementById('sizeSlider');
  const sizeVal = document.getElementById('sizeVal');

  slider?.addEventListener('input', () => {
    state.compare.size = +slider.value;
    sizeVal.textContent = slider.value + 'px';
    document.querySelectorAll('.glyph').forEach(el => el.style.fontSize = slider.value + 'px');
  });

  document.querySelectorAll('[data-bg]').forEach(btn => {
    btn.addEventListener('click', () => { state.compare.bg = btn.dataset.bg; render(); });
  });

  document.querySelectorAll('.remove-row-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.compare.fonts = state.compare.fonts.filter(f => f.name !== btn.dataset.font);
      render();
    });
  });

  document.getElementById('compareAddBtn')?.addEventListener('click', openAddModal);
}

/* ============================================================
   SPECIMENS PAGE
   ============================================================ */
function renderSpecimens() {
  const { font, size } = state.specimen;
  loadFont(font);

  const fontMeta = GOOGLE_FONTS.find(f => f.name === font) || { styles: 1, category: 'Sans-Serif' };
  const ff = fontFamily(font);

  const fontOptions = GOOGLE_FONTS
    .map(f => `<option value="${h(f.name)}" ${f.name === font ? 'selected' : ''}>${h(f.name)}</option>`)
    .join('');

  const pangramSizes = [12, 16, 20, 28, 40, 60, 80];
  const pangramLines = pangramSizes.map(s =>
    `<div class="pramp" style="font-family:${ff};font-size:${s}px;line-height:1.25;color:var(--text)">The quick brown fox jumps over the lazy dog.</div>`
  ).join('');

  const ambigRows = [
    ['o 0 O',     'oh · zero · capital O'],
    ['i I l 1 |', 'lowercase i · capital I · lowercase l · one · pipe'],
    ['Il1|0O',    'Combined ambiguous characters'],
    ['rn m',      'rn can look like m'],
    ['vv w',      'double-v vs w'],
    ['S 5 $',     'S · five · dollar sign'],
    ['B 8',       'B vs eight'],
    ['g q 9',     'g · q · nine'],
  ].map(([chars, desc]) =>
    `<div class="spec-line">
      <span style="font-family:${ff};font-size:${size}px">${h(chars)}</span>
      <span style="font-size:12px;color:var(--text-muted);margin-left:16px">${h(desc)}</span>
    </div>`
  ).join('');

  return `
    <h1 class="page-title">Specimen Sheet</h1>

    <div class="specimen-header-row">
      <div class="specimen-left">
        <select class="styled" id="specimenFontSel">${fontOptions}</select>
        <span class="specimen-meta">${h(fontMeta.category)} — ${fontMeta.styles} ${fontMeta.styles === 1 ? 'style' : 'styles'} available</span>
      </div>
      <select class="styled" id="specimenSizeSel">
        ${[12,14,16,18,24,32,48,64,96].map(s => `<option value="${s}" ${s === size ? 'selected' : ''}>${s}px</option>`).join('')}
      </select>
    </div>

    <div class="specimen-block">
      <div class="block-label">Full Alphabet</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">abcdefghijklmnopqrstuvwxyz</div>
    </div>

    <div class="specimen-block">
      <div class="block-label">Numbers &amp; Symbols</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">0 1 2 3 4 5 6 7 8 9</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">! @ # $ % ^ &amp; * ( ) - + = [ ] { } | \ ; : ' " &lt; &gt; , . ? /</div>
    </div>

    <div class="specimen-block">
      <div class="block-label">Ambiguous Characters</div>
      ${ambigRows}
    </div>

    <div class="specimen-block">
      <div class="block-label">Password &amp; Code</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">P@ssw0rd1lO!</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">if (n1l == 0) { return l1O; }</div>
      <div class="spec-line" style="font-family:${ff};font-size:${size}px">SELECT * FROM users WHERE id = 1llO;</div>
    </div>

    <div class="specimen-block pangram-ramp">
      <div class="block-label">Pangram Ramp</div>
      ${pangramLines}
    </div>`;
}

function bindSpecimens() {
  document.getElementById('specimenFontSel')?.addEventListener('change', e => {
    state.specimen.font = e.target.value;
    loadFont(e.target.value);
    render();
  });
  document.getElementById('specimenSizeSel')?.addEventListener('change', e => {
    state.specimen.size = +e.target.value;
    render();
  });
}

/* ============================================================
   PAIRINGS PAGE
   ============================================================ */
function renderPairings() {
  preloadFonts(['Playfair Display', 'Inter', 'Merriweather', 'Roboto', 'Oswald', 'Lato', 'Space Mono', 'JetBrains Mono']);

  const cards = PAIRINGS.map(p => `
    <div class="pairing-card">
      <div class="pairing-tags">
        <span class="tag">${h(p.displayFont)}</span>
        <span style="color:var(--text-light);font-size:12px">×</span>
        <span class="tag">${h(p.bodyFont)}</span>
        <span class="tag">${h(p.displayLabel)} + ${h(p.bodyLabel)}</span>
      </div>
      <div class="pairing-preview-title" style="${cssObj(p.titleCSS)}">${h(p.title)}</div>
      <div class="pairing-preview-body" style="font-family:${fontFamily(p.bodyFont)}">${h(p.body)}</div>
      <div class="pairing-footer">
        <div class="pairing-names">
          <span class="pairing-name-bold">${h(p.displayFont)}</span>
          <span style="color:var(--text-light)"> × </span>
          <span class="pairing-name-bold">${h(p.bodyFont)}</span>
        </div>
        <button class="btn-primary try-btn"
          data-display="${h(p.displayFont)}"
          data-body="${h(p.bodyFont)}"
          data-dcategory="${h(GOOGLE_FONTS.find(f => f.name === p.displayFont)?.category || 'Display')}"
          data-bcategory="${h(GOOGLE_FONTS.find(f => f.name === p.bodyFont)?.category || 'Sans-Serif')}">
          TRY IN COMPARE
        </button>
      </div>
    </div>`).join('');

  return `
    <h1 class="page-title">Font Pairings</h1>
    <p class="page-subtitle">Discover harmonious typeface combinations</p>

    <div class="filter-tabs" id="pairingTabs">
      <button class="filter-tab active">All</button>
      <button class="filter-tab">Serif + Sans</button>
      <button class="filter-tab">Body + Text</button>
      <button class="filter-tab">Mono + Body</button>
      <button class="filter-tab">Display + Body</button>
    </div>

    <div class="pairings-grid">${cards}</div>`;
}

function bindPairings() {
  document.querySelectorAll('#pairingTabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#pairingTabs .filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  document.querySelectorAll('.try-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const addIfMissing = (name, category) => {
        if (!state.compare.fonts.find(f => f.name === name)) {
          state.compare.fonts.push({ name, category });
          loadFont(name);
        }
      };
      addIfMissing(btn.dataset.display, btn.dataset.dcategory);
      addIfMissing(btn.dataset.body, btn.dataset.bcategory);
      navigate('compare');
    });
  });
}

/* ============================================================
   COLLECTIONS PAGE
   ============================================================ */
function renderCollections() {
  preloadFonts(['Playfair Display', 'Inter', 'Fira Code', 'JetBrains Mono',
    'Source Code Pro', 'IBM Plex Mono', 'Source Serif 4', 'Roboto', 'Poppins', 'Lato', 'IBM Plex Sans']);

  const cards = COLLECTIONS.map(c => `
    <div class="collection-card">
      <div class="collection-info">
        <div class="collection-name">${h(c.name)}</div>
        <div class="collection-desc">${h(c.desc)}</div>
        <div class="collection-footer">
          <span class="collection-count-tag">${c.fonts.length} fonts</span>
          <span class="collection-time">Updated ${h(c.time)}</span>
          <button class="collection-opts-btn">Options ▾</button>
        </div>
      </div>
      <div class="collection-fonts">
        ${c.fonts.map(f =>
          `<div class="coll-font" style="${cssObj(f.style)}">${h(f.name)}</div>`
        ).join('')}
      </div>
    </div>`).join('');

  return `
    <div class="collections-top">
      <h1 class="page-title">Collections</h1>
      <button class="btn-primary" id="newCollBtn" style="align-self:flex-end;margin-bottom:8px">+ New Collection</button>
    </div>
    <p class="page-subtitle">Organize and manage your curated font groups</p>
    <div class="collections-count">Saved Collections · ${COLLECTIONS.length} collections</div>
    <div class="collections-list">${cards}</div>`;
}

function bindCollections() {
  document.getElementById('newCollBtn')?.addEventListener('click', () => {
    const name = prompt('Collection name:');
    if (name?.trim()) alert(`"${name}" collection created! (This is a demo — persistence coming soon.)`);
  });
}

/* ============================================================
   GOOGLE FONTS PAGE
   ============================================================ */
function renderFontsPage() {
  const { search, category, sort } = state.fonts;
  const cats = ['All', 'Serif', 'Sans-Serif', 'Display', 'Monospace', 'Handwriting'];

  let list = [...GOOGLE_FONTS];
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(f => f.name.toLowerCase().includes(q));
  }
  if (category !== 'All') list = list.filter(f => f.category === category);
  if (sort === 'A–Z') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'Z–A') list.sort((a, b) => b.name.localeCompare(a.name));

  const tabs = cats.map(c =>
    `<button class="filter-tab ${c === category ? 'active' : ''}" data-cat="${h(c)}">${h(c)}</button>`
  ).join('');

  const cards = list.map(f => {
    loadFont(f.name);
    const isLoaded = !!state.compare.fonts.find(cf => cf.name === f.name);
    return `
      <div class="font-card" data-font="${h(f.name)}" data-category="${h(f.category)}">
        <div class="font-card-preview" style="font-family:${fontFamily(f.name)}">Aa Bb Cc</div>
        <div class="font-card-footer">
          <div>
            <div class="font-card-name">${h(f.name)}</div>
            <div class="font-card-meta">${h(f.category)} · ${f.styles} ${f.styles === 1 ? 'style' : 'styles'}</div>
          </div>
          <button class="font-card-add ${isLoaded ? 'is-loaded' : ''}"
            data-font="${h(f.name)}" data-category="${h(f.category)}">
            ${isLoaded ? 'LOADED' : '+ ADD'}
          </button>
        </div>
      </div>`;
  }).join('') || `<p style="grid-column:1/-1;color:var(--text-muted);padding:48px 0">No fonts match "${h(search)}".</p>`;

  return `
    <div class="gfonts-top">
      <div>
        <h1 class="page-title">Google Fonts</h1>
        <div class="gfonts-count">${list.length} of ${GOOGLE_FONTS.length} fonts</div>
      </div>
      <select class="styled" id="sortSel">
        <option ${sort === 'A–Z' ? 'selected' : ''}>A–Z</option>
        <option ${sort === 'Z–A' ? 'selected' : ''}>Z–A</option>
      </select>
    </div>

    <div class="search-field">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5" stroke="#bbb" stroke-width="1.5"/>
        <path d="M11 11l3 3" stroke="#bbb" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <input type="text" id="fontsSearch" placeholder="Search fonts..." value="${h(search)}">
    </div>

    <div class="filter-tabs" id="catTabs">${tabs}</div>

    <div class="fonts-grid">${cards}</div>`;
}

function bindFontsPage() {
  const searchEl = document.getElementById('fontsSearch');
  searchEl?.addEventListener('input', () => {
    clearTimeout(searchEl._t);
    searchEl._t = setTimeout(() => {
      state.fonts.search = searchEl.value;
      render();
    }, 180);
  });

  document.getElementById('sortSel')?.addEventListener('change', e => {
    state.fonts.sort = e.target.value;
    render();
  });

  document.querySelectorAll('#catTabs .filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.fonts.category = btn.dataset.cat;
      render();
    });
  });

  document.querySelectorAll('.font-card-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      if (btn.classList.contains('is-loaded')) return;
      const name = btn.dataset.font;
      const category = btn.dataset.category;
      state.compare.fonts.push({ name, category });
      loadFont(name);
      btn.textContent = 'LOADED';
      btn.classList.add('is-loaded');
    });
  });

  // Click card → go to specimen
  document.querySelectorAll('.font-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.classList.contains('font-card-add')) return;
      state.specimen.font = card.dataset.font;
      loadFont(card.dataset.font);
      navigate('specimens');
    });
  });
}

/* ============================================================
   ADD FONT MODAL
   ============================================================ */
function openAddModal() {
  const modal = document.getElementById('addFontModal');
  modal.classList.add('open');
  const input = document.getElementById('modalSearchInput');
  input.value = '';
  input.focus();
  renderModalList('');
}

function closeAddModal() {
  document.getElementById('addFontModal').classList.remove('open');
}

function renderModalList(query) {
  const q = query.toLowerCase().trim();
  const list = q
    ? GOOGLE_FONTS.filter(f => f.name.toLowerCase().includes(q))
    : GOOGLE_FONTS;

  const container = document.getElementById('modalFontList');
  container.innerHTML = list.slice(0, 80).map(f => {
    loadFont(f.name);
    const added = !!state.compare.fonts.find(cf => cf.name === f.name);
    return `<div class="modal-font-item ${added ? 'is-added' : ''}"
      data-font="${h(f.name)}" data-category="${h(f.category)}">
      <span class="modal-font-item-name">${h(f.name)}</span>
      <span class="modal-font-item-preview" style="font-family:${fontFamily(f.name)}">Aa Il1 0O</span>
    </div>`;
  }).join('');

  container.querySelectorAll('.modal-font-item:not(.is-added)').forEach(item => {
    item.addEventListener('click', () => {
      state.compare.fonts.push({ name: item.dataset.font, category: item.dataset.category });
      loadFont(item.dataset.font);
      closeAddModal();
      render();
    });
  });
}

/* ============================================================
   QUICK SEARCH OVERLAY
   ============================================================ */
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.add('open');
  const input = document.getElementById('quickSearchInput');
  input.value = '';
  input.focus();
  renderSearchResults('');
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
}

function renderSearchResults(query) {
  const q = query.toLowerCase().trim();
  const container = document.getElementById('searchResults');
  if (!q) { container.innerHTML = ''; return; }

  const results = GOOGLE_FONTS.filter(f => f.name.toLowerCase().includes(q)).slice(0, 12);
  container.innerHTML = results.map(f => {
    loadFont(f.name);
    return `<div class="search-result-item" data-font="${h(f.name)}">
      <span class="sri-name">${h(f.name)}</span>
      <span class="sri-preview" style="font-family:${fontFamily(f.name)}">Aa Bb 0O</span>
    </div>`;
  }).join('') || `<div style="padding:20px 18px;color:var(--text-muted)">No fonts found for "${h(query)}"</div>`;

  container.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      state.specimen.font = item.dataset.font;
      loadFont(item.dataset.font);
      closeSearch();
      navigate('specimens');
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Preload default fonts
  preloadFonts(['Inter', 'Roboto', 'Fira Code', 'Source Serif 4',
    'Playfair Display', 'JetBrains Mono', 'Merriweather', 'Lato', 'Oswald', 'Space Mono']);

  // Nav links
  document.querySelectorAll('.nav-link, .nav-logo').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      if (el.dataset.page) navigate(el.dataset.page);
    });
  });

  // Search button
  document.getElementById('navSearchBtn')?.addEventListener('click', openSearch);

  // Search overlay
  document.getElementById('searchOverlay')?.addEventListener('click', e => {
    if (e.target.id === 'searchOverlay') closeSearch();
  });
  document.getElementById('quickSearchInput')?.addEventListener('input', e => {
    renderSearchResults(e.target.value);
  });

  // Modal
  document.getElementById('modalClose')?.addEventListener('click', closeAddModal);
  document.getElementById('addFontModal')?.addEventListener('click', e => {
    if (e.target.id === 'addFontModal') closeAddModal();
  });
  document.getElementById('modalSearchInput')?.addEventListener('input', e => {
    renderModalList(e.target.value);
  });

  // Global keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeAddModal(); closeSearch(); }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  // Initial render
  navigate('compare');
});
