/**
 * DocuFlow Studio - Universal File Processing Engine (19+ Tools)
 * 100% Client-side processing with high privacy & zero server upload
 */

// Configure PDF.js Worker
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

/* ==========================================================================
   MULTI-LANGUAGE (i18n) DICTIONARY - DEFAULT: ENGLISH
   ========================================================================== */
const I18N = {
  en: {
    badge_privacy: "100% Private - No files leave your device",
    hero_pill: "Fast, Secure & Free Client-Side Processing",
    nav_all_tools: "All Tools",
    hub_title_1: "Every file tool you need,",
    hub_title_2: "100% in your browser.",
    hub_subtitle: "Convert, compress, edit and optimize PDFs, photos, Office documents and audio. Zero server uploads, completely private.",
    cat_all: "All Tools",
    cat_pdf_to: "Convert from PDF",
    cat_to_pdf: "Convert to PDF",
    cat_pdf_tools: "PDF Utilities",
    cat_image_tools: "Photo & Images",
    cat_media_tools: "Media & Audio",
    tool_pdf_word_title: "PDF to Word",
    tool_pdf_word_desc: "Convert PDF into editable Microsoft Word (.docx) files with layout preservation and OCR.",
    tool_pdf_excel_title: "PDF to Excel",
    tool_pdf_excel_desc: "Extract data and tables directly from PDF into editable Excel (.xlsx) spreadsheets.",
    tool_pdf_pptx_title: "PDF to PowerPoint",
    tool_pdf_pptx_desc: "Transform your PDF pages into presentation slides (.pptx) ready for Microsoft PowerPoint.",
    tool_pdf_jpg_title: "PDF to JPG / PNG",
    tool_pdf_jpg_desc: "Extract all PDF pages into crisp images or download the whole document as a ZIP file.",
    tool_pdf_text_title: "PDF to Text / HTML",
    tool_pdf_text_desc: "Extract clean plain text (.txt) or web HTML from any PDF file with 1 click.",
    tool_jpg_pdf_title: "JPG / PNG to PDF",
    tool_jpg_pdf_desc: "Merge multiple photos into PDF with margins, orientation, and custom KB/MB target limits.",
    tool_office_pdf_title: "Word / Excel / Text to PDF",
    tool_office_pdf_desc: "Convert Word documents (.docx), Excel sheets (.xlsx), or Text files into clean PDF documents.",
    tool_merge_title: "Merge PDF",
    tool_merge_desc: "Combine multiple PDF files into a single, perfectly unified document with reordering.",
    tool_split_title: "Split PDF",
    tool_split_desc: "Extract custom page ranges (e.g. 1-3, 5) or separate specific pages from your PDF file.",
    tool_compress_pdf_title: "Compress PDF",
    tool_compress_pdf_desc: "Reduce PDF file size up to 80% with extreme, recommended, or high-quality presets.",
    tool_organize_title: "Organize & Delete Pages",
    tool_organize_desc: "Visually reorder pages, delete unwanted pages, and build a re-arranged PDF document.",
    tool_rotate_title: "Rotate PDF",
    tool_rotate_desc: "Rotate individual pages or all pages 90°, 180° or 270° with instant visual preview.",
    tool_watermark_title: "Watermark & Numbers",
    tool_watermark_desc: "Add custom diagonal text stamps (CONFIDENTIAL, DRAFT) or page numbering.",
    tool_protect_title: "Password Protect PDF",
    tool_protect_desc: "Secure confidential PDF documents with custom encryption and password protection.",
    tool_img_conv_title: "Image Format Converter",
    tool_img_conv_desc: "Convert seamlessly between JPG, PNG, WebP, GIF, and BMP formats in seconds.",
    tool_compress_img_title: "Image Size (KB/MB)",
    tool_compress_img_desc: "Exact file size tuner for government exams, passport photos (20KB, 50KB, 100KB).",
    tool_resize_crop_title: "Resize & Crop Image",
    tool_resize_crop_desc: "Change dimensions in pixels or percentages (25%, 50%, 75%) and crop photos.",
    tool_remove_bg_title: "Remove Background",
    tool_remove_bg_desc: "Make white or solid backgrounds transparent (perfect for signatures and logos).",
    tool_video_audio_title: "Video to Audio",
    tool_video_audio_desc: "Extract high-quality audio tracks directly from MP4 and WebM video files.",
    btn_back_to_tools: "Back to All Tools",
    footer_tagline: "Universal Document & Image Processing Studio",
    footer_privacy: "Client-Side Architecture • 100% Private & Secure"
  },
  hi: {
    badge_privacy: "100% प्राइवेट - कोई भी फाइल आपके डिवाइस से बाहर नहीं जाती",
    hero_pill: "तेज़, सुरक्षित और मुफ्त ब्राउज़र प्रोसेसिंग",
    nav_all_tools: "सभी टूल्स",
    hub_title_1: "हर फाइल टूल जो आपको चाहिए,",
    hub_title_2: "100% आपके ब्राउज़र में।",
    hub_subtitle: "PDF, फोटो, ऑफिस फाइल्स और ऑडियो कन्वर्ट, कंप्रेस और एडिट करें। कोई सर्वर अपलोड नहीं, पूर्ण गोपनीयता।",
    cat_all: "सभी टूल्स",
    cat_pdf_to: "PDF से बदलें",
    cat_to_pdf: "PDF में बदलें",
    cat_pdf_tools: "PDF टूल्स",
    cat_image_tools: "फोटो व इमेज टूल्स",
    cat_media_tools: "मीडिया व ऑडियो",
    tool_pdf_word_title: "PDF to Word",
    tool_pdf_word_desc: "PDF को सीधे वर्ड डॉक्यूमेंट (.docx) में बदलें और आसानी से एडिट करें।",
    tool_pdf_excel_title: "PDF to Excel",
    tool_pdf_excel_desc: "PDF से टेबल और डेटा निकालकर एक्सेल (.xlsx) स्प्रेडशीट बनाएं।",
    tool_pdf_pptx_title: "PDF to PowerPoint",
    tool_pdf_pptx_desc: "PDF पेजों को सीधे माइक्रोसॉफ्ट पावरपॉइंट (.pptx) प्रेजेंटेशन स्लाइड्स में बदलें।",
    tool_pdf_jpg_title: "PDF to JPG / PNG",
    tool_pdf_jpg_desc: "PDF के सभी पेजों को उच्च रिज़ॉल्यूशन तस्वीरों में बदलें या ZIP फाइल पाएं।",
    tool_pdf_text_title: "PDF to Text / HTML",
    tool_pdf_text_desc: "किसी भी PDF से साफ प्लेन टेक्स्ट (.txt) या वेब HTML कोड निकालें।",
    tool_jpg_pdf_title: "JPG / PNG to PDF",
    tool_jpg_pdf_desc: "कई तस्वीरों को जोड़कर मनचाहे साइज (KB/MB) में एक सुंदर PDF बनाएं।",
    tool_office_pdf_title: "Word / Excel / Text to PDF",
    tool_office_pdf_desc: "Word (.docx), Excel (.xlsx) या Text फाइल को सीधे PDF में बदलें।",
    tool_merge_title: "Merge PDF",
    tool_merge_desc: "कई PDF फाइल्स को क्रम से एक साथ जोड़कर एक सिंगल डॉक्यूमेंट बनाएं।",
    tool_split_title: "Split PDF",
    tool_split_desc: "PDF फाइल से विशेष पेज या पेज रेंज निकालें और नई PDF बनाएं।",
    tool_compress_pdf_title: "Compress PDF",
    tool_compress_pdf_desc: "बड़ी PDF फाइल्स का साइज आसानी से 80% तक कम करें।",
    tool_organize_title: "पेज रीऑर्डर व डिलीट",
    tool_organize_desc: "पन्नों का क्रम आगे-पीछे करें, अनचाहे पन्ने हटाएं और नई PDF बनाएं।",
    tool_rotate_title: "Rotate PDF",
    tool_rotate_desc: "पेज को 90°, 180° या 270° अपनी इच्छानुसार घुमाएं और सेव करें।",
    tool_watermark_title: "वॉटरमार्क और पेज नंबर",
    tool_watermark_desc: "PDF में कस्टम टेक्स्ट वॉटरमार्क या नीचे पेज नंबरिंग जोड़ें।",
    tool_protect_title: "पासवर्ड से सुरक्षित करें",
    tool_protect_desc: "गोपनीय PDF को अपने पासवर्ड से लॉक व एन्क्रिप्ट करें।",
    tool_img_conv_title: "इमेज फॉर्मेट कनवर्टर",
    tool_img_conv_desc: "JPG, PNG, WebP, GIF और BMP के बीच आसानी से बदलें।",
    tool_compress_img_title: "इमेज साइज (KB/MB)",
    tool_compress_img_desc: "सरकारी फॉर्म्स (UPSC, SSC) के लिए 20KB, 50KB, 100KB में फोटो घटाएं।",
    tool_resize_crop_title: "इमेज रीसाइज़ व क्रॉप",
    tool_resize_crop_desc: "फोटो की चौड़ाई और ऊंचाई (Pixels) बदलें और क्रॉप करें।",
    tool_remove_bg_title: "बैकग्राउंड हटाएं",
    tool_remove_bg_desc: "सफेद या ठोस बैकग्राउंड हटाकर पारदर्शी (Transparent PNG) बनाएं।",
    tool_video_audio_title: "वीडियो से ऑडियो निकालें",
    tool_video_audio_desc: "MP4 या WebM वीडियो से सीधे हाई क्वालिटी ऑडियो (.wav) निकालें।",
    btn_back_to_tools: "← सभी टूल्स पर वापस जाएं",
    footer_tagline: "सार्वभौमिक डॉक्यूमेंट व इमेज प्रोसेसिंग स्टूडियो",
    footer_privacy: "क्लाइंट-साइड आर्किटेक्चर • 100% सुरक्षित और गोपनीय"
  }
};

/* ==========================================================================
   APP STATE
   ========================================================================== */
const AppState = {
  currentLang: 'en',
  activeTool: null,

  // Tool 1: PDF to Word
  wordPdfDoc: null,
  wordPdfFile: null,

  // Tool 2: PDF to Excel
  excelPdfDoc: null,
  excelPdfFile: null,

  // Tool 3: PDF to PPTX
  pptxPdfDoc: null,
  pptxPdfFile: null,

  // Tool 4: PDF to Text
  textPdfDoc: null,
  textPdfFile: null,

  // Tool 5: Office to PDF
  officeFile: null,

  // Tool 6: Organize PDF
  organizePdfDoc: null,
  organizePdfFile: null,
  organizePagesList: [], // array of page numbers

  // Tool 7: Protect PDF
  protectPdfFile: null,

  // Tool 8: Image Format Converter
  imgConvFile: null,
  imgConvTargetMime: 'image/jpeg',

  // Tool 9: Resize & Crop
  resizeFile: null,
  resizeImg: null,

  // Tool 10: Remove BG
  removeBgFile: null,

  // Tool 11: Video to Audio
  videoFile: null,

  // Tool 12: Merge PDF
  mergeFiles: [],

  // Tool 13: Split PDF
  splitPdfDoc: null,
  splitPdfFile: null,
  splitSelectedPages: new Set(),

  // Tool 14: Rotate PDF
  rotatePdfDoc: null,
  rotatePdfFile: null,
  rotatePageAngles: {},

  // Tool 15: Watermark
  watermarkPdfDoc: null,
  watermarkPdfFile: null,

  // Tool 16: JPG to PDF
  jpgFiles: [],
  jpgOrientation: 'auto',
  jpgPageSize: 'a4',

  // Tool 17: PDF to JPG
  pdfDoc: null,
  pdfFile: null,
  pdfPages: [],

  // Tool 18: Image Compressor
  compOriginalFile: null,
  compOriginalImg: null,
  compResultBlob: null,

  // Tool 19: PDF Compressor
  pdfCompDoc: null,
  pdfCompFile: null
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initAllToolWorkspaces();
});

// Theme
function initTheme() {
  const isDark = localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) document.documentElement.classList.add('dark');

  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  });
}

// Language
function initLanguage() {
  const saved = localStorage.getItem('docuflow_lang') || 'en';
  setLanguage(saved);
}

function toggleLangMenu() {
  document.getElementById('langDropdown').classList.toggle('hidden');
}

document.addEventListener('click', (e) => {
  const btn = document.getElementById('langMenuBtn');
  const menu = document.getElementById('langDropdown');
  if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add('hidden');
  }
});

function setLanguage(lang) {
  if (!I18N[lang]) lang = 'en';
  AppState.currentLang = lang;
  localStorage.setItem('docuflow_lang', lang);

  const langLabels = {
    en: '🇬🇧 English',
    hi: '🇮🇳 हिन्दी',
    es: '🇪🇸 Español',
    fr: '🇫🇷 Français',
    de: '🇩🇪 Deutsch',
    ar: '🇸🇦 العربية',
    ja: '🇯🇵 日本語',
    pt: '🇧🇷 Português'
  };

  const labelEl = document.getElementById('currentLangLabel');
  if (labelEl) labelEl.textContent = langLabels[lang] || 'English';

  const menu = document.getElementById('langDropdown');
  if (menu) menu.classList.add('hidden');

  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
    else if (I18N.en[key]) el.textContent = I18N.en[key];
  });
}

// Helpers
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  let bgClass = 'bg-slate-900/90 text-white border-slate-700';
  let icon = 'fa-info-circle text-blue-400';
  if (type === 'success') { bgClass = 'bg-emerald-950/90 text-emerald-100 border-emerald-700'; icon = 'fa-circle-check text-emerald-400'; }
  else if (type === 'error') { bgClass = 'bg-red-950/90 text-red-100 border-red-700'; icon = 'fa-circle-exclamation text-red-400'; }

  toast.className = `toast pointer-events-auto flex items-center space-x-3 px-4 py-3 rounded-2xl border shadow-2xl text-sm ${bgClass}`;
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 4000);
}

function formatBytes(bytes) {
  if (!bytes) return '0 KB';
  const k = 1024;
  if (bytes < 1024 * 1024) return (bytes / k).toFixed(1) + ' KB';
  return (bytes / (k * k)).toFixed(2) + ' MB';
}

/* ==========================================================================
   HUB & CATEGORY NAVIGATION
   ========================================================================== */
function filterCategory(cat) {
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`cat-btn-${cat}`);
  if (activeBtn) activeBtn.classList.add('active');

  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    if (cat === 'all' || card.getAttribute('data-category') === cat) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  showToolsGrid();
}

function filterToolsSearch() {
  const query = (document.getElementById('toolSearchInput').value || '').toLowerCase().trim();
  const cards = document.querySelectorAll('.tool-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (!query || text.includes(query)) card.classList.remove('hidden');
    else card.classList.add('hidden');
  });
}

function showToolsGrid() {
  document.getElementById('toolsHubView').classList.remove('hidden');
  document.getElementById('activeToolWorkspace').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openToolWorkspace(toolId) {
  AppState.activeTool = toolId;
  document.getElementById('toolsHubView').classList.add('hidden');
  document.getElementById('activeToolWorkspace').classList.remove('hidden');

  // Hide all panels
  document.querySelectorAll('.tool-panel').forEach(p => p.classList.add('hidden'));

  // Show selected panel
  const panel = document.getElementById(`panel-${toolId}`);
  if (panel) panel.classList.remove('hidden');

  // Update Header title and badge
  const titles = {
    'pdf-to-word': { t: 'PDF to Word (.docx)', b: 'PDF to Office' },
    'pdf-to-excel': { t: 'PDF to Excel (.xlsx)', b: 'PDF to Office' },
    'pdf-to-pptx': { t: 'PDF to PowerPoint (.pptx)', b: 'PDF to Office' },
    'pdf-to-text': { t: 'PDF to Text / HTML', b: 'PDF to Format' },
    'office-to-pdf': { t: 'Word / Excel / Text to PDF', b: 'To PDF' },
    'organize-pdf': { t: 'Organize & Delete Pages', b: 'PDF Utility' },
    'protect-pdf': { t: 'Password Protect PDF', b: 'Security' },
    'convert-image': { t: 'Image Format Converter', b: 'Image Studio' },
    'resize-image': { t: 'Resize & Crop Image', b: 'Image Studio' },
    'remove-bg': { t: 'Remove Background (Transparent PNG)', b: 'Image Studio' },
    'video-to-audio': { t: 'Video to Audio (MP4 to WAV)', b: 'Media Studio' },
    'merge-pdf': { t: 'Merge PDF Files', b: 'PDF Utility' },
    'split-pdf': { t: 'Split PDF Pages', b: 'PDF Utility' },
    'rotate-pdf': { t: 'Rotate PDF Pages', b: 'PDF Utility' },
    'watermark-pdf': { t: 'Watermark & Page Numbering', b: 'PDF Utility' },
    'jpg-to-pdf': { t: 'JPG / Photos to PDF', b: 'To PDF' },
    'pdf-to-jpg': { t: 'PDF to JPG / PNG', b: 'PDF to Image' },
    'compress-image': { t: 'Image Size Adjuster (KB / MB)', b: 'Image Studio' },
    'compress-pdf': { t: 'Compress PDF File', b: 'PDF Utility' }
  };

  const info = titles[toolId] || { t: toolId, b: 'Tool' };
  document.getElementById('workspaceTitle').textContent = info.t;
  document.getElementById('currentWorkspaceBadge').textContent = info.b;

  window.scrollTo({ top: 120, behavior: 'smooth' });
}

/* ==========================================================================
   MODULES INITIALIZER
   ========================================================================== */
function initAllToolWorkspaces() {
  initPdfToWordModule();
  initPdfToExcelModule();
  initPdfToPptxModule();
  initPdfToTextModule();
  initOfficeToPdfModule();
  initOrganizePdfModule();
  initProtectPdfModule();
  initConvertImageModule();
  initResizeImageModule();
  initRemoveBgModule();
  initVideoToAudioModule();
  initMergePdfModule();
  initSplitPdfModule();
  initRotatePdfModule();
  initWatermarkPdfModule();
  initJpgToPdfModule();
  initPdfToJpgModule();
  initImageCompressorModule();
  initPdfCompressorModule();
}

/* ==========================================================================
   TOOL 1: PDF TO WORD
   ========================================================================== */
function initPdfToWordModule() {
  const dropzone = document.getElementById('wordDropzone');
  const input = document.getElementById('wordFileInput');
  setupDropzone(dropzone, input, (file) => handleWordPdfSelected(file));
}

async function handleWordPdfSelected(file) {
  if (!file || file.type !== 'application/pdf') return;
  AppState.wordPdfFile = file;
  const typedArray = new Uint8Array(await file.arrayBuffer());
  AppState.wordPdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;

  document.getElementById('wordDocPreviewCard').classList.remove('hidden');
  document.getElementById('wordPdfName').textContent = file.name;
  document.getElementById('convertWordBtn').disabled = false;

  const page1 = await AppState.wordPdfDoc.getPage(1);
  const viewport = page1.getViewport({ scale: 0.5 });
  const canvas = document.getElementById('wordThumbCanvas');
  canvas.width = viewport.width; canvas.height = viewport.height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page1.render({ canvasContext: ctx, viewport: viewport }).promise;

  const textContent = await page1.getTextContent({ normalizeWhitespace: true });
  const words = textContent.items.map(i => i.str).join(' ').trim();
  document.getElementById('wordTextSnippet').textContent = words ? words.substring(0, 300) + '...' : 'No digital text found (Scanned Image).';
  document.getElementById('wordWordsCount').textContent = `${words.split(/\s+/).filter(Boolean).length} words detected`;
  showToast('PDF loaded', 'success');
}

function clearWordPdf() {
  AppState.wordPdfDoc = null; AppState.wordPdfFile = null;
  document.getElementById('wordDocPreviewCard').classList.add('hidden');
  document.getElementById('convertWordBtn').disabled = true;
}

async function processPdfToWord() {
  if (!AppState.wordPdfDoc) return;
  const btn = document.getElementById('convertWordBtn');
  btn.disabled = true;
  document.getElementById('wordProgressBox').classList.remove('hidden');
  document.getElementById('wordProgressBar').style.width = '20%';

  try {
    const pagesData = [];
    const numPages = AppState.wordPdfDoc.numPages;
    for (let p = 1; p <= numPages; p++) {
      const page = await AppState.wordPdfDoc.getPage(p);
      const textContent = await page.getTextContent({ normalizeWhitespace: true });
      const paras = textContent.items.map(i => ({ text: i.str, isHeading: false })).filter(i => i.text.trim());
      pagesData.push(paras);
      document.getElementById('wordProgressBar').style.width = `${Math.round((p / numPages) * 80)}%`;
    }

    const docxBlob = await buildOpenXmlDocxBlob(pagesData);
    const dlBtn = document.getElementById('wordDownloadBtn');
    dlBtn.href = URL.createObjectURL(docxBlob);
    dlBtn.download = `${AppState.wordPdfFile.name.replace(/\.[^/.]+$/, '')}.docx`;

    document.getElementById('wordProgressBar').style.width = '100%';
    setTimeout(() => {
      document.getElementById('wordProgressBox').classList.add('hidden');
      document.getElementById('wordSuccessBox').classList.remove('hidden');
      btn.disabled = false;
      confetti({ particleCount: 75, spread: 60, origin: { y: 0.8 } });
      showToast('Word document created!', 'success');
    }, 400);
  } catch (err) {
    showToast('Word conversion failed: ' + err.message, 'error');
    btn.disabled = false;
  }
}

async function buildOpenXmlDocxBlob(documentPages) {
  const zip = new JSZip();
  const escapeXml = (s) => (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  
  zip.file('[Content_Types].xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`);

  zip.file('_rels/.rels', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`);

  let body = '';
  documentPages.forEach((paras, idx) => {
    if (idx > 0) body += `<w:p><w:r><w:br w:type="page"/></w:r></w:p>`;
    paras.forEach(para => {
      body += `<w:p><w:pPr><w:spacing w:after="140" w:line="260" w:lineRule="auto"/></w:pPr><w:r><w:rPr><w:sz w:val="22"/></w:rPr><w:t xml:space="preserve">${escapeXml(para.text)}</w:t></w:r></w:p>`;
    });
  });

  zip.file('word/document.xml', `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}</w:body></w:document>`);

  return await zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}

/* ==========================================================================
   TOOL 2: PDF TO EXCEL (.xlsx)
   ========================================================================== */
function initPdfToExcelModule() {
  setupDropzone(document.getElementById('excelDropzone'), document.getElementById('excelFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.excelPdfFile = file;
    const typedArray = new Uint8Array(await file.arrayBuffer());
    AppState.excelPdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;

    document.getElementById('excelPreviewCard').classList.remove('hidden');
    document.getElementById('excelPdfName').textContent = file.name;
    document.getElementById('convertExcelBtn').disabled = false;
    document.getElementById('excelSuccessBox').classList.add('hidden');

    // Extract quick table lines preview
    const page1 = await AppState.excelPdfDoc.getPage(1);
    const textContent = await page1.getTextContent({ normalizeWhitespace: true });
    let previewHtml = '<table class="w-full border-collapse border border-slate-300"><tbody>';
    textContent.items.slice(0, 30).forEach((item, i) => {
      if (i % 4 === 0) previewHtml += '<tr>';
      previewHtml += `<td class="border border-slate-300 p-1.5">${item.str}</td>`;
      if (i % 4 === 3) previewHtml += '</tr>';
    });
    previewHtml += '</tbody></table>';
    document.getElementById('excelTablePreview').innerHTML = previewHtml;

    showToast('PDF loaded for Excel', 'success');
  });
}

function clearExcelPdf() {
  AppState.excelPdfDoc = null; AppState.excelPdfFile = null;
  document.getElementById('excelPreviewCard').classList.add('hidden');
  document.getElementById('convertExcelBtn').disabled = true;
}

async function processPdfToExcel() {
  if (!AppState.excelPdfDoc) return;
  const btn = document.getElementById('convertExcelBtn');
  btn.disabled = true;

  try {
    const rows = [];
    const numPages = AppState.excelPdfDoc.numPages;

    for (let p = 1; p <= numPages; p++) {
      const page = await AppState.excelPdfDoc.getPage(p);
      const textContent = await page.getTextContent({ normalizeWhitespace: true });
      
      // Group by Y coordinates
      const lineMap = {};
      textContent.items.forEach(item => {
        const y = Math.round(item.transform[5]);
        if (!lineMap[y]) lineMap[y] = [];
        lineMap[y].push(item);
      });

      const sortedY = Object.keys(lineMap).map(Number).sort((a, b) => b - a);
      sortedY.forEach(y => {
        const rowItems = lineMap[y].sort((a, b) => a.transform[4] - b.transform[4]);
        rows.push(rowItems.map(i => i.str));
      });
    }

    const ws = XLSX.utils.aoa_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Extracted Data");

    const format = document.getElementById('excelFormatSelect').value;
    const wbout = XLSX.write(wb, { bookType: format, type: 'array' });
    const blob = new Blob([wbout], { type: 'application/octet-stream' });

    const dlBtn = document.getElementById('excelDownloadBtn');
    dlBtn.href = URL.createObjectURL(blob);
    dlBtn.download = `${AppState.excelPdfFile.name.replace(/\.[^/.]+$/, '')}.${format}`;

    document.getElementById('excelSuccessBox').classList.remove('hidden');
    btn.disabled = false;
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
    showToast('Excel workbook created!', 'success');
  } catch (err) {
    showToast('Excel conversion failed: ' + err.message, 'error');
    btn.disabled = false;
  }
}

/* ==========================================================================
   TOOL 3: PDF TO POWERPOINT (.pptx)
   ========================================================================== */
function initPdfToPptxModule() {
  setupDropzone(document.getElementById('pptxDropzone'), document.getElementById('pptxFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.pptxPdfFile = file;
    const typedArray = new Uint8Array(await file.arrayBuffer());
    AppState.pptxPdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;

    document.getElementById('pptxPreviewCard').classList.remove('hidden');
    document.getElementById('pptxPdfName').textContent = file.name;
    document.getElementById('pptxSlideCount').textContent = `${AppState.pptxPdfDoc.numPages} slides`;
    document.getElementById('convertPptxBtn').disabled = false;
    document.getElementById('pptxSuccessBox').classList.add('hidden');
    showToast('PDF loaded for PowerPoint', 'success');
  });
}

async function processPdfToPptx() {
  if (!AppState.pptxPdfDoc || !window.PptxGenJS) return;
  const btn = document.getElementById('convertPptxBtn');
  btn.disabled = true;

  try {
    const pptx = new PptxGenJS();
    const layout = document.getElementById('pptxLayoutSelect').value;
    pptx.layout = layout === '16x9' ? 'LAYOUT_16x9' : 'LAYOUT_4x3';

    const numPages = AppState.pptxPdfDoc.numPages;
    for (let p = 1; p <= numPages; p++) {
      const page = await AppState.pptxPdfDoc.getPage(p);
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width; canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: ctx, viewport: viewport }).promise;

      const imgData = canvas.toDataURL('image/jpeg', 0.85);
      const slide = pptx.addSlide();
      slide.addImage({ data: imgData, x: 0, y: 0, w: '100%', h: '100%' });
    }

    const pptxBlob = await pptx.write({ outputType: 'blob' });
    const dlBtn = document.getElementById('pptxDownloadBtn');
    dlBtn.href = URL.createObjectURL(pptxBlob);
    dlBtn.download = `${AppState.pptxPdfFile.name.replace(/\.[^/.]+$/, '')}.pptx`;

    document.getElementById('pptxSuccessBox').classList.remove('hidden');
    btn.disabled = false;
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
    showToast('PowerPoint slides created!', 'success');
  } catch (err) {
    showToast('PowerPoint creation failed: ' + err.message, 'error');
    btn.disabled = false;
  }
}

/* ==========================================================================
   TOOL 4: PDF TO TEXT / HTML
   ========================================================================== */
function initPdfToTextModule() {
  setupDropzone(document.getElementById('textDropzone'), document.getElementById('textFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.textPdfFile = file;
    const typedArray = new Uint8Array(await file.arrayBuffer());
    AppState.textPdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;

    document.getElementById('textPreviewCard').classList.remove('hidden');
    document.getElementById('extractTextBtn').disabled = false;

    // Extract text
    let allText = '';
    for (let p = 1; p <= AppState.textPdfDoc.numPages; p++) {
      const page = await AppState.textPdfDoc.getPage(p);
      const textContent = await page.getTextContent({ normalizeWhitespace: true });
      allText += `\n--- Page ${p} ---\n` + textContent.items.map(i => i.str).join(' ');
    }
    document.getElementById('textResultArea').value = allText.trim();
    showToast('Text extracted', 'success');
  });
}

function processPdfToText() {
  const text = document.getElementById('textResultArea').value;
  const type = document.querySelector('input[name="textExtractType"]:checked').value;
  const base = AppState.textPdfFile ? AppState.textPdfFile.name.replace(/\.[^/.]+$/, '') : 'document';

  let blob, filename;
  if (type === 'html') {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${base}</title><style>body{font-family:sans-serif;line-height:1.6;padding:2rem;max-width:800px;margin:auto;}</style></head><body><pre>${text}</pre></body></html>`;
    blob = new Blob([html], { type: 'text/html' });
    filename = `${base}.html`;
  } else {
    blob = new Blob([text], { type: 'text/plain' });
    filename = `${base}.txt`;
  }

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  showToast('File downloaded', 'success');
}

/* ==========================================================================
   TOOL 5: WORD / EXCEL / TEXT TO PDF
   ========================================================================== */
function initOfficeToPdfModule() {
  setupDropzone(document.getElementById('officeDropzone'), document.getElementById('officeFileInput'), async (file) => {
    AppState.officeFile = file;
    document.getElementById('officePreviewCard').classList.remove('hidden');
    document.getElementById('officeFileName').textContent = file.name;
    document.getElementById('convertOfficeBtn').disabled = false;
    document.getElementById('officeSuccessBox').classList.add('hidden');

    const ext = file.name.split('.').pop().toLowerCase();
    const box = document.getElementById('officePreviewBox');

    if (ext === 'docx' && window.mammoth) {
      const buffer = await file.arrayBuffer();
      const res = await mammoth.extractRawText({ arrayBuffer: buffer });
      box.textContent = res.value.substring(0, 500) + '...';
    } else if (ext === 'xlsx' || ext === 'csv') {
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, { type: 'array' });
      const firstSheet = wb.Sheets[wb.SheetNames[0]];
      box.textContent = XLSX.utils.sheet_to_csv(firstSheet).substring(0, 500) + '...';
    } else {
      const text = await file.text();
      box.textContent = text.substring(0, 500) + '...';
    }

    showToast('File loaded for PDF conversion', 'success');
  });
}

async function processOfficeToPdf() {
  if (!AppState.officeFile) return;
  const btn = document.getElementById('convertOfficeBtn');
  btn.disabled = true;

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const file = AppState.officeFile;
    const ext = file.name.split('.').pop().toLowerCase();
    let textToRender = '';

    if (ext === 'docx' && window.mammoth) {
      const buffer = await file.arrayBuffer();
      const res = await mammoth.extractRawText({ arrayBuffer: buffer });
      textToRender = res.value;
    } else if (ext === 'xlsx' || ext === 'csv') {
      const buffer = await file.arrayBuffer();
      const wb = XLSX.read(buffer, { type: 'array' });
      const firstSheet = wb.Sheets[wb.SheetNames[0]];
      textToRender = XLSX.utils.sheet_to_txt(firstSheet);
    } else {
      textToRender = await file.text();
    }

    const lines = doc.splitTextToSize(textToRender, 180);
    let cursorY = 20;

    lines.forEach(line => {
      if (cursorY > 280) {
        doc.addPage();
        cursorY = 20;
      }
      doc.text(line, 15, cursorY);
      cursorY += 6;
    });

    const pdfBlob = doc.output('blob');
    const dlBtn = document.getElementById('officeDownloadBtn');
    dlBtn.href = URL.createObjectURL(pdfBlob);
    dlBtn.download = `${file.name.replace(/\.[^/.]+$/, '')}.pdf`;

    document.getElementById('officeSuccessBox').classList.remove('hidden');
    btn.disabled = false;
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
    showToast('PDF created successfully!', 'success');
  } catch (err) {
    showToast('PDF creation failed: ' + err.message, 'error');
    btn.disabled = false;
  }
}

/* ==========================================================================
   TOOL 6: ORGANIZE & DELETE PAGES
   ========================================================================== */
function initOrganizePdfModule() {
  setupDropzone(document.getElementById('organizeDropzone'), document.getElementById('organizeFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.organizePdfFile = file;
    const typedArray = new Uint8Array(await file.arrayBuffer());
    AppState.organizePdfDoc = await pdfjsLib.getDocument({ data: typedArray }).promise;

    document.getElementById('organizePreviewCard').classList.remove('hidden');
    document.getElementById('organizeDocName').textContent = file.name;
    
    const count = AppState.organizePdfDoc.numPages;
    AppState.organizePagesList = Array.from({ length: count }, (_, i) => i + 1);
    renderOrganizeGrid();
    showToast('PDF loaded for organization', 'success');
  });
}

function renderOrganizeGrid() {
  const grid = document.getElementById('organizePagesGrid');
  grid.innerHTML = '';

  AppState.organizePagesList.forEach((pageNum, index) => {
    const card = document.createElement('div');
    card.className = 'p-2 rounded-2xl bg-slate-50 dark:bg-slate-800 border flex flex-col items-center space-y-2';
    card.innerHTML = `
      <div class="h-24 w-full bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center font-bold text-xs border">
        Page ${pageNum}
      </div>
      <div class="flex justify-between items-center w-full px-1 text-xs">
        <button onclick="moveOrganizePage(${index}, -1)" ${index === 0 ? 'disabled' : ''} class="disabled:opacity-30 hover:text-brand-600">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <button onclick="deleteOrganizePage(${index})" class="text-red-500 hover:text-red-700">
          <i class="fa-solid fa-trash"></i>
        </button>
        <button onclick="moveOrganizePage(${index}, 1)" ${index === AppState.organizePagesList.length - 1 ? 'disabled' : ''} class="disabled:opacity-30 hover:text-brand-600">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function moveOrganizePage(index, offset) {
  const target = index + offset;
  if (target < 0 || target >= AppState.organizePagesList.length) return;
  const temp = AppState.organizePagesList[index];
  AppState.organizePagesList[index] = AppState.organizePagesList[target];
  AppState.organizePagesList[target] = temp;
  renderOrganizeGrid();
}

function deleteOrganizePage(index) {
  if (AppState.organizePagesList.length <= 1) {
    showToast('PDF must have at least 1 page', 'warning');
    return;
  }
  AppState.organizePagesList.splice(index, 1);
  renderOrganizeGrid();
}

async function processOrganizePdf() {
  if (!AppState.organizePdfFile || AppState.organizePagesList.length === 0) return;
  try {
    const { PDFDocument } = window.PDFLib;
    const arrayBuffer = await AppState.organizePdfFile.arrayBuffer();
    const origPdf = await PDFDocument.load(arrayBuffer);
    const newPdf = await PDFDocument.create();

    const indices = AppState.organizePagesList.map(p => p - 1);
    const copiedPages = await newPdf.copyPages(origPdf, indices);
    copiedPages.forEach(p => newPdf.addPage(p));

    const bytes = await newPdf.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${AppState.organizePdfFile.name.replace(/\.[^/.]+$/, '')}_organized.pdf`;
    a.click();
    showToast('Organized PDF downloaded!', 'success');
  } catch (err) {
    showToast('Organization failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 7: PASSWORD PROTECT PDF
   ========================================================================== */
function initProtectPdfModule() {
  setupDropzone(document.getElementById('protectDropzone'), document.getElementById('protectFileInput'), (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.protectPdfFile = file;
    document.getElementById('protectSettingsCard').classList.remove('hidden');
    document.getElementById('protectDocName').textContent = file.name;
    showToast('PDF loaded for protection', 'success');
  });
}

async function processProtectPdf() {
  const pass = document.getElementById('protectPasswordInput').value;
  if (!pass) {
    showToast('Please enter a password', 'warning');
    return;
  }
  try {
    const { PDFDocument } = window.PDFLib;
    const arrayBuffer = await AppState.protectPdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);

    // Encrypt with password
    if (pdfDoc.encrypt) {
      pdfDoc.encrypt({ userPassword: pass, ownerPassword: pass });
    }
    const bytes = await pdfDoc.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${AppState.protectPdfFile.name.replace(/\.[^/.]+$/, '')}_protected.pdf`;
    a.click();
    showToast('Password protected PDF downloaded!', 'success');
  } catch (err) {
    showToast('Protection failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 8: IMAGE FORMAT CONVERTER
   ========================================================================== */
function initConvertImageModule() {
  setupDropzone(document.getElementById('imgConvDropzone'), document.getElementById('imgConvFileInput'), (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    AppState.imgConvFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      document.getElementById('imgConvPreviewCard').classList.remove('hidden');
      document.getElementById('imgConvPreviewImg').src = e.target.result;
      document.getElementById('convertImgBtn').disabled = false;
    };
    reader.readAsDataURL(file);
    showToast('Image loaded', 'success');
  });
}

function setImgConvTarget(mime) {
  AppState.imgConvTargetMime = mime;
  document.querySelectorAll('.ic-fmt-btn').forEach(b => b.classList.remove('active', 'border-cyan-500', 'bg-cyan-50', 'text-cyan-700'));
  event.target.classList.add('active', 'border-cyan-500', 'bg-cyan-50', 'text-cyan-700');
}

function processImageFormatConversion() {
  if (!AppState.imgConvFile) return;
  const img = document.getElementById('imgConvPreviewImg');
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth; canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  canvas.toBlob((blob) => {
    const extMap = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/bmp': 'bmp' };
    const ext = extMap[AppState.imgConvTargetMime] || 'jpg';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${AppState.imgConvFile.name.replace(/\.[^/.]+$/, '')}_converted.${ext}`;
    a.click();
    showToast(`Converted to ${ext.toUpperCase()}!`, 'success');
  }, AppState.imgConvTargetMime, 0.95);
}

/* ==========================================================================
   TOOL 9: RESIZE & CROP IMAGE
   ========================================================================== */
function initResizeImageModule() {
  setupDropzone(document.getElementById('resizeDropzone'), document.getElementById('resizeFileInput'), (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    AppState.resizeFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        AppState.resizeImg = img;
        document.getElementById('resizePreviewCard').classList.remove('hidden');
        document.getElementById('resizePreviewImg').src = e.target.result;
        document.getElementById('resizeDimTag').textContent = `${img.width} × ${img.height} px`;
        document.getElementById('resizeWidthInput').value = img.width;
        document.getElementById('resizeHeightInput').value = img.height;
        document.getElementById('runResizeBtn').disabled = false;
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
    showToast('Image loaded for resizing', 'success');
  });

  const wInput = document.getElementById('resizeWidthInput');
  const hInput = document.getElementById('resizeHeightInput');
  wInput.addEventListener('input', () => {
    if (document.getElementById('resizeKeepRatio').checked && AppState.resizeImg) {
      const ratio = AppState.resizeImg.height / AppState.resizeImg.width;
      hInput.value = Math.round(wInput.value * ratio);
    }
  });
}

function processImageResize() {
  if (!AppState.resizeImg) return;
  const w = parseInt(document.getElementById('resizeWidthInput').value, 10) || AppState.resizeImg.width;
  const h = parseInt(document.getElementById('resizeHeightInput').value, 10) || AppState.resizeImg.height;

  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(AppState.resizeImg, 0, 0, w, h);

  canvas.toBlob((blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `resized_${w}x${h}.png`;
    a.click();
    showToast('Resized image downloaded!', 'success');
  }, 'image/png');
}

/* ==========================================================================
   TOOL 10: REMOVE BACKGROUND (Make Transparent PNG)
   ========================================================================== */
function initRemoveBgModule() {
  setupDropzone(document.getElementById('removeBgDropzone'), document.getElementById('removeBgFileInput'), (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    AppState.removeBgFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.getElementById('removeBgCanvas');
        canvas.width = img.width; canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Remove white/light background algorithm
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          // If pixel is near white/light gray
          if (r > 220 && g > 220 && b > 220) {
            d[i + 3] = 0; // Transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
        document.getElementById('removeBgPreviewCard').classList.remove('hidden');
        showToast('Background removed!', 'success');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function downloadTransparentPng() {
  const canvas = document.getElementById('removeBgCanvas');
  canvas.toBlob((blob) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transparent.png';
    a.click();
    showToast('Transparent PNG downloaded!', 'success');
  }, 'image/png');
}

/* ==========================================================================
   TOOL 11: VIDEO TO AUDIO (MP4 to WAV via Web Audio API)
   ========================================================================== */
function initVideoToAudioModule() {
  setupDropzone(document.getElementById('videoDropzone'), document.getElementById('videoFileInput'), (file) => {
    if (!file) return;
    AppState.videoFile = file;
    document.getElementById('videoPreviewCard').classList.remove('hidden');
    document.getElementById('videoFileName').textContent = file.name;
    showToast('Video loaded', 'success');
  });
}

async function processVideoToAudio() {
  if (!AppState.videoFile) return;
  const btn = document.getElementById('extractAudioBtn');
  btn.disabled = true;
  btn.textContent = 'Extracting audio...';

  try {
    const arrayBuffer = await AppState.videoFile.arrayBuffer();
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Convert AudioBuffer to WAV blob
    const wavBlob = audioBufferToWavBlob(audioBuffer);
    const a = document.createElement('a');
    a.href = URL.createObjectURL(wavBlob);
    a.download = `${AppState.videoFile.name.replace(/\.[^/.]+$/, '')}.wav`;
    a.click();

    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-headphones mr-1"></i> Extract & Download Audio (.wav)';
    showToast('Audio extracted successfully!', 'success');
  } catch (err) {
    showToast('Audio extraction error: ' + err.message, 'error');
    btn.disabled = false;
  }
}

function audioBufferToWavBlob(buffer) {
  const numChannels = buffer.numberOfChannels;
  const sampleRate = buffer.sampleRate;
  const length = buffer.length * numChannels * 2 + 44;
  const out = new DataView(new ArrayBuffer(length));

  const writeString = (view, offset, string) => {
    for (let i = 0; i < string.length; i++) view.setUint8(offset + i, string.charCodeAt(i));
  };

  writeString(out, 0, 'RIFF');
  out.setUint32(4, length - 8, true);
  writeString(out, 8, 'WAVE');
  writeString(out, 12, 'fmt ');
  out.setUint32(16, 16, true);
  out.setUint16(20, 1, true); // PCM
  out.setUint16(22, numChannels, true);
  out.setUint32(24, sampleRate, true);
  out.setUint32(28, sampleRate * numChannels * 2, true);
  out.setUint16(32, numChannels * 2, true);
  out.setUint16(34, 16, true);
  writeString(out, 36, 'data');
  out.setUint32(40, length - 44, true);

  let offset = 44;
  for (let i = 0; i < buffer.length; i++) {
    for (let channel = 0; channel < numChannels; channel++) {
      let sample = buffer.getChannelData(channel)[i];
      sample = Math.max(-1, Math.min(1, sample));
      out.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }
  return new Blob([out], { type: 'audio/wav' });
}

/* ==========================================================================
   TOOL 12: MERGE PDF
   ========================================================================== */
function initMergePdfModule() {
  setupDropzone(document.getElementById('mergeDropzone'), document.getElementById('mergeFileInput'), (files) => {
    const valid = Array.from(files).filter(f => f.type === 'application/pdf');
    valid.forEach(f => AppState.mergeFiles.push({ id: Math.random().toString(), file: f, name: f.name, size: f.size }));
    renderMergeList();
  });
}

function renderMergeList() {
  const listEl = document.getElementById('mergePdfList');
  const countEl = document.getElementById('mergeCount');
  if (AppState.mergeFiles.length === 0) {
    document.getElementById('mergeListContainer').classList.add('hidden');
    document.getElementById('runMergeBtn').disabled = true;
    return;
  }
  document.getElementById('mergeListContainer').classList.remove('hidden');
  document.getElementById('runMergeBtn').disabled = AppState.mergeFiles.length < 2;
  countEl.textContent = AppState.mergeFiles.length;

  listEl.innerHTML = '';
  AppState.mergeFiles.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs border';
    row.innerHTML = `<span class="truncate max-w-xs font-bold">${index + 1}. ${item.name}</span>
      <div class="flex space-x-1">
        <button onclick="moveMergeFile(${index}, -1)" ${index === 0 ? 'disabled' : ''} class="px-2 py-1 border rounded disabled:opacity-30">↑</button>
        <button onclick="moveMergeFile(${index}, 1)" ${index === AppState.mergeFiles.length - 1 ? 'disabled' : ''} class="px-2 py-1 border rounded disabled:opacity-30">↓</button>
        <button onclick="removeMergeFile('${item.id}')" class="px-2 py-1 border border-red-200 text-red-600 rounded">✕</button>
      </div>`;
    listEl.appendChild(row);
  });
}

function moveMergeFile(i, off) {
  const t = i + off;
  if (t < 0 || t >= AppState.mergeFiles.length) return;
  const temp = AppState.mergeFiles[i];
  AppState.mergeFiles[i] = AppState.mergeFiles[t];
  AppState.mergeFiles[t] = temp;
  renderMergeList();
}
function removeMergeFile(id) {
  AppState.mergeFiles = AppState.mergeFiles.filter(f => f.id !== id);
  renderMergeList();
}
function clearMergeList() {
  AppState.mergeFiles = [];
  renderMergeList();
}

async function processPdfMerge() {
  if (AppState.mergeFiles.length < 2) return;
  try {
    const { PDFDocument } = window.PDFLib;
    const merged = await PDFDocument.create();
    for (const f of AppState.mergeFiles) {
      const pdf = await PDFDocument.load(await f.file.arrayBuffer());
      const pages = await merged.copyPages(pdf, pdf.getPageIndices());
      pages.forEach(p => merged.addPage(p));
    }
    const bytes = await merged.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const a = document.getElementById('mergeDownloadBtn');
    a.href = URL.createObjectURL(blob);
    a.download = (document.getElementById('mergeOutputName').value.trim() || 'merged') + '.pdf';
    document.getElementById('mergeSuccessBox').classList.remove('hidden');
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
  } catch (err) {
    showToast('Merge error: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 13: SPLIT PDF
   ========================================================================== */
function initSplitPdfModule() {
  setupDropzone(document.getElementById('splitDropzone'), document.getElementById('splitFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.splitPdfFile = file;
    AppState.splitSelectedPages.clear();
    const typed = new Uint8Array(await file.arrayBuffer());
    AppState.splitPdfDoc = await pdfjsLib.getDocument({ data: typed }).promise;

    document.getElementById('splitPreviewCard').classList.remove('hidden');
    document.getElementById('splitDocName').textContent = file.name;
    document.getElementById('runSplitBtn').disabled = false;

    const grid = document.getElementById('splitThumbnailsGrid');
    grid.innerHTML = '';
    for (let p = 1; p <= AppState.splitPdfDoc.numPages; p++) {
      const item = document.createElement('div');
      item.className = 'cursor-pointer p-1 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center text-xs font-bold';
      item.id = `split-page-${p}`;
      item.innerHTML = `<div class="h-12 flex items-center justify-center">Page ${p}</div>`;
      item.onclick = () => {
        if (AppState.splitSelectedPages.has(p)) {
          AppState.splitSelectedPages.delete(p);
          item.classList.remove('border-amber-500', 'bg-amber-50');
        } else {
          AppState.splitSelectedPages.add(p);
          item.classList.add('border-amber-500', 'bg-amber-50');
        }
        document.getElementById('splitPageRangeInput').value = Array.from(AppState.splitSelectedPages).sort((a,b)=>a-b).join(', ');
      };
      grid.appendChild(item);
    }
    showToast('PDF loaded for splitting', 'success');
  });
}

function clearSplitDoc() {
  AppState.splitPdfDoc = null; AppState.splitPdfFile = null;
  document.getElementById('splitPreviewCard').classList.add('hidden');
}

async function processPdfSplit() {
  if (!AppState.splitPdfFile) return;
  const range = document.getElementById('splitPageRangeInput').value;
  if (!range) { showToast('Select at least one page', 'warning'); return; }

  try {
    const { PDFDocument } = window.PDFLib;
    const orig = await PDFDocument.load(await AppState.splitPdfFile.arrayBuffer());
    const newPdf = await PDFDocument.create();

    const pages = new Set();
    range.split(',').forEach(part => {
      const p = part.trim();
      if (p.includes('-')) {
        const [s, e] = p.split('-').map(Number);
        for (let i = s; i <= e; i++) if (i >= 1 && i <= orig.getPageCount()) pages.add(i - 1);
      } else {
        const num = Number(p);
        if (num >= 1 && num <= orig.getPageCount()) pages.add(num - 1);
      }
    });

    const copied = await newPdf.copyPages(orig, Array.from(pages).sort((a,b)=>a-b));
    copied.forEach(p => newPdf.addPage(p));
    const bytes = await newPdf.save();
    const a = document.getElementById('splitDownloadBtn');
    a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    a.download = `split_${AppState.splitPdfFile.name}`;
    document.getElementById('splitSuccessBox').classList.remove('hidden');
    showToast('Pages split successfully!', 'success');
  } catch (err) {
    showToast('Split failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 14: ROTATE PDF
   ========================================================================== */
function initRotatePdfModule() {
  setupDropzone(document.getElementById('rotateDropzone'), document.getElementById('rotateFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.rotatePdfFile = file;
    AppState.rotatePageAngles = {};
    const typed = new Uint8Array(await file.arrayBuffer());
    AppState.rotatePdfDoc = await pdfjsLib.getDocument({ data: typed }).promise;

    document.getElementById('rotatePreviewCard').classList.remove('hidden');
    document.getElementById('rotateDocName').textContent = file.name;
    document.getElementById('runRotateBtn').disabled = false;

    const grid = document.getElementById('rotatePagesGrid');
    grid.innerHTML = '';
    for (let p = 1; p <= AppState.rotatePdfDoc.numPages; p++) {
      AppState.rotatePageAngles[p] = 0;
      const card = document.createElement('div');
      card.className = 'p-2 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center space-y-1';
      card.innerHTML = `<div id="rotate-box-${p}" class="h-20 flex items-center justify-center font-bold text-xs border rounded bg-white dark:bg-slate-900 transition-transform">Page ${p}</div>
        <button onclick="rotatePage(${p}, 90)" class="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">+90°</button>`;
      grid.appendChild(card);
    }
  });
}

function rotatePage(p, deg) {
  AppState.rotatePageAngles[p] = ((AppState.rotatePageAngles[p] || 0) + deg) % 360;
  const box = document.getElementById(`rotate-box-${p}`);
  if (box) box.style.transform = `rotate(${AppState.rotatePageAngles[p]}deg)`;
}

function rotateAllPages(deg) {
  if (!AppState.rotatePdfDoc) return;
  for (let p = 1; p <= AppState.rotatePdfDoc.numPages; p++) rotatePage(p, deg);
}

async function processPdfRotation() {
  if (!AppState.rotatePdfFile) return;
  try {
    const { PDFDocument, degrees } = window.PDFLib;
    const doc = await PDFDocument.load(await AppState.rotatePdfFile.arrayBuffer());
    doc.getPages().forEach((page, i) => {
      const add = AppState.rotatePageAngles[i + 1] || 0;
      if (add) page.setRotation(degrees((page.getRotation().angle + add) % 360));
    });
    const bytes = await doc.save();
    const a = document.getElementById('rotateDownloadBtn');
    a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    a.download = `rotated_${AppState.rotatePdfFile.name}`;
    document.getElementById('rotateSuccessBox').classList.remove('hidden');
    showToast('Rotated PDF ready!', 'success');
  } catch (err) {
    showToast('Rotation failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 15: WATERMARK PDF
   ========================================================================== */
function initWatermarkPdfModule() {
  setupDropzone(document.getElementById('watermarkDropzone'), document.getElementById('watermarkFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.watermarkPdfFile = file;
    document.getElementById('watermarkPreviewCard').classList.remove('hidden');
    document.getElementById('runWatermarkBtn').disabled = false;
    showToast('PDF loaded for watermark', 'success');
  });
}

async function processPdfWatermark() {
  if (!AppState.watermarkPdfFile) return;
  try {
    const { PDFDocument, rgb, degrees, StandardFonts } = window.PDFLib;
    const doc = await PDFDocument.load(await AppState.watermarkPdfFile.arrayBuffer());
    const font = await doc.embedFont(StandardFonts.HelveticaBold);
    const text = document.getElementById('watermarkTextInput').value || 'CONFIDENTIAL';
    const addNums = document.getElementById('addPageNumbersCheckbox').checked;

    doc.getPages().forEach((page, idx) => {
      const { width, height } = page.getSize();
      if (text) {
        page.drawText(text, { x: width / 3, y: height / 2, size: 40, font, color: rgb(0.8, 0.2, 0.2), opacity: 0.2, rotate: degrees(45) });
      }
      if (addNums) {
        page.drawText(`Page ${idx + 1} of ${doc.getPageCount()}`, { x: width / 2 - 30, y: 15, size: 10, font, color: rgb(0.3, 0.3, 0.3) });
      }
    });

    const bytes = await doc.save();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
    a.download = `watermarked_${AppState.watermarkPdfFile.name}`;
    a.click();
    showToast('Watermarked PDF downloaded!', 'success');
  } catch (err) {
    showToast('Watermarking failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 16: JPG TO PDF
   ========================================================================== */
function initJpgToPdfModule() {
  setupDropzone(document.getElementById('jpgDropzone'), document.getElementById('jpgFileInput'), (files) => {
    Array.from(files).filter(f => f.type.startsWith('image/')).forEach(f => {
      const reader = new FileReader();
      reader.onload = (e) => {
        AppState.jpgFiles.push({ file: f, name: f.name, dataUrl: e.target.result, size: f.size });
        renderJpgGrid();
      };
      reader.readAsDataURL(f);
    });
  });
}

function renderJpgGrid() {
  const grid = document.getElementById('jpgGrid');
  const count = document.getElementById('jpgCount');
  if (AppState.jpgFiles.length === 0) {
    document.getElementById('jpgPreviewContainer').classList.add('hidden');
    document.getElementById('convertJpgBtn').disabled = true;
    return;
  }
  document.getElementById('jpgPreviewContainer').classList.remove('hidden');
  document.getElementById('convertJpgBtn').disabled = false;
  count.textContent = AppState.jpgFiles.length;

  grid.innerHTML = '';
  AppState.jpgFiles.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'relative p-1 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center';
    card.innerHTML = `<img src="${item.dataUrl}" class="h-20 w-full object-contain rounded">
      <span class="text-[10px] truncate block">${item.name}</span>
      <button onclick="AppState.jpgFiles.splice(${idx},1); renderJpgGrid();" class="absolute top-1 right-1 bg-red-600 text-white rounded-full w-4 h-4 text-[10px]">✕</button>`;
    grid.appendChild(card);
  });
}

function clearJpgFiles() {
  AppState.jpgFiles = [];
  renderJpgGrid();
}

async function processJpgToPdf() {
  if (AppState.jpgFiles.length === 0) return;
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    AppState.jpgFiles.forEach((item, idx) => {
      if (idx > 0) doc.addPage('a4', 'p');
      doc.addImage(item.dataUrl, 'JPEG', 15, 15, 180, 240, undefined, 'FAST');
    });
    const blob = doc.output('blob');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'document.pdf';
    a.click();
    showToast('PDF downloaded successfully!', 'success');
  } catch (err) {
    showToast('PDF generation failed: ' + err.message, 'error');
  }
}

/* ==========================================================================
   TOOL 17: PDF TO JPG
   ========================================================================== */
function initPdfToJpgModule() {
  setupDropzone(document.getElementById('pdfDropzone'), document.getElementById('pdfFileInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.pdfFile = file;
    AppState.pdfDoc = await pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    document.getElementById('pdfPagesContainer').classList.remove('hidden');
    document.getElementById('pdfFileName').textContent = file.name;
    document.getElementById('extractPdfBtn').disabled = false;
    showToast(`PDF loaded (${AppState.pdfDoc.numPages} pages)`, 'success');
  });
}

async function processPdfToJpg() {
  if (!AppState.pdfDoc) return;
  const grid = document.getElementById('pdfPagesGrid');
  grid.innerHTML = '';
  const scale = parseFloat(document.getElementById('pdfRenderScale').value) || 1.5;

  for (let p = 1; p <= AppState.pdfDoc.numPages; p++) {
    const page = await AppState.pdfDoc.getPage(p);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width; canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport }).promise;

    const imgUrl = canvas.toDataURL('image/jpeg', 0.85);
    const card = document.createElement('div');
    card.className = 'p-1 rounded-xl border bg-slate-50 dark:bg-slate-800 text-center space-y-1';
    card.innerHTML = `<img src="${imgUrl}" class="h-28 w-full object-contain rounded">
      <a href="${imgUrl}" download="page_${p}.jpg" class="text-xs font-bold text-emerald-600 block">Download #${p}</a>`;
    grid.appendChild(card);
  }
  showToast('Pages extracted!', 'success');
}

/* ==========================================================================
   TOOL 18: IMAGE COMPRESSOR (KB / MB)
   ========================================================================== */
function initImageCompressorModule() {
  setupDropzone(document.getElementById('imgCompressDropzone'), document.getElementById('imgCompressInput'), (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    AppState.compOriginalFile = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        AppState.compOriginalImg = img;
        document.getElementById('imgCompareContainer').classList.remove('hidden');
        document.getElementById('origImgPreview').src = e.target.result;
        document.getElementById('origImgSizeTag').textContent = formatBytes(file.size);
        applyCompressTarget();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function setExactTarget(val, unit) {
  document.getElementById('exactTargetNumber').value = val;
  document.getElementById('exactTargetUnit').value = unit;
  applyCompressTarget();
}

async function applyCompressTarget() {
  if (!AppState.compOriginalImg) return;
  const targetVal = parseFloat(document.getElementById('exactTargetNumber').value) || 100;
  const targetUnit = document.getElementById('exactTargetUnit').value;
  const targetBytes = targetUnit === 'MB' ? targetVal * 1024 * 1024 : targetVal * 1024;

  const img = AppState.compOriginalImg;
  const canvas = document.createElement('canvas');
  canvas.width = img.width; canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  let q = 0.8;
  let blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', q));
  if (blob.size > targetBytes) {
    q = 0.4;
    blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', q));
  }
  if (blob.size > targetBytes) {
    canvas.width = Math.round(img.width * 0.7);
    canvas.height = Math.round(img.height * 0.7);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.5));
  }

  const url = URL.createObjectURL(blob);
  document.getElementById('compImgPreview').src = url;
  document.getElementById('compImgSizeTag').textContent = formatBytes(blob.size);
  document.getElementById('compDownloadBtn').href = url;
  showToast(`Optimized to ${formatBytes(blob.size)}`, 'success');
}

/* ==========================================================================
   TOOL 19: PDF COMPRESSOR
   ========================================================================== */
function initPdfCompressorModule() {
  setupDropzone(document.getElementById('pdfCompressDropzone'), document.getElementById('pdfCompressInput'), async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    AppState.pdfCompFile = file;
    AppState.pdfCompDoc = await pdfjsLib.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    document.getElementById('pdfCompressSettings').classList.remove('hidden');
    document.getElementById('compPdfName').textContent = file.name;
    showToast('PDF loaded for compression', 'success');
  });
}

async function processPdfCompression() {
  if (!AppState.pdfCompDoc) return;
  const btn = document.getElementById('runPdfCompressBtn');
  btn.disabled = true;
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const numPages = AppState.pdfCompDoc.numPages;

    for (let p = 1; p <= numPages; p++) {
      if (p > 1) doc.addPage('a4', 'p');
      const page = await AppState.pdfCompDoc.getPage(p);
      const viewport = page.getViewport({ scale: 1.0 });
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width; canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      await page.render({ canvasContext: ctx, viewport }).promise;

      const imgData = canvas.toDataURL('image/jpeg', 0.55);
      doc.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    }

    const blob = doc.output('blob');
    const a = document.getElementById('pdfCompDownloadLink');
    a.href = URL.createObjectURL(blob);
    a.download = `compressed_${AppState.pdfCompFile.name}`;
    document.getElementById('pdfCompAfterSize').textContent = `New size: ${formatBytes(blob.size)}`;
    document.getElementById('pdfCompSuccessBox').classList.remove('hidden');
    btn.disabled = false;
    showToast('PDF compressed!', 'success');
  } catch (err) {
    showToast('Compression failed: ' + err.message, 'error');
    btn.disabled = false;
  }
}

/* ==========================================================================
   GENERIC DROPZONE ATTACHER
   ========================================================================== */
function setupDropzone(dropzone, input, callback) {
  if (!dropzone || !input) return;
  ['dragenter', 'dragover'].forEach(e => dropzone.addEventListener(e, (ev) => { ev.preventDefault(); dropzone.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(e => dropzone.addEventListener(e, (ev) => { ev.preventDefault(); dropzone.classList.remove('dragover'); }));

  dropzone.addEventListener('drop', (e) => {
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (input.multiple) callback(e.dataTransfer.files);
      else callback(e.dataTransfer.files[0]);
    }
  });

  input.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (input.multiple) callback(e.target.files);
      else callback(e.target.files[0]);
    }
  });
}
