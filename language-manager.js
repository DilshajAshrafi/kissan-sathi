(() => {
  const languages = [
    ['en', 'English', 'English'],
    ['as', 'অসমীয়া', 'Assamese'],
    ['bn', 'বাংলা', 'Bengali'],
    ['brx', 'बड़ो', 'Bodo'],
    ['doi', 'डोगरी', 'Dogri'],
    ['gu', 'ગુજરાતી', 'Gujarati'],
    ['hi', 'हिन्दी', 'Hindi'],
    ['kn', 'ಕನ್ನಡ', 'Kannada'],
    ['ks', 'कॉशुर', 'Kashmiri'],
    ['kok', 'कोंकणी', 'Konkani'],
    ['mai', 'मैथिली', 'Maithili'],
    ['ml', 'മലയാളം', 'Malayalam'],
    ['mni', 'ꯃꯩꯇꯩꯂꯣꯟ', 'Manipuri (Meitei)'],
    ['mr', 'मराठी', 'Marathi'],
    ['ne', 'नेपाली', 'Nepali'],
    ['or', 'ଓଡ଼ିଆ', 'Odia'],
    ['pa', 'ਪੰਜਾਬੀ', 'Punjabi'],
    ['sa', 'संस्कृतम्', 'Sanskrit'],
    ['sat', 'ᱥᱟᱱᱛᱟᱲᱤ', 'Santali'],
    ['sd', 'سنڌي', 'Sindhi'],
    ['ta', 'தமிழ்', 'Tamil'],
    ['te', 'తెలుగు', 'Telugu'],
    ['ur', 'اُردُو', 'Urdu'],
  ];
  const languageCodes = new Set(languages.map(([code]) => code));
  const englishTitleByPath = {
    'index.html': 'Kisaan Sathi | Smart Farming Support',
    'crop-consultation.html': 'Kisaan Sathi | Crop Consultation',
    'irrigation-support.html': 'Kisaan Sathi | Irrigation Support',
    'soil-pest-care.html': 'Kisaan Sathi | Soil & Pest Care',
    'scheme-guidance.html': 'Kisaan Sathi | Scheme Guidance',
    'request-sent.html': 'Kisaan Sathi | Request Sent',
  };
  const settingsLabels = {
    en: ['Settings', 'Language and appearance settings', 'Website language'],
    as: ['ছেটিংছ', 'ভাষা আৰু ৰূপৰ ছেটিংছ', 'ৱেবছাইটৰ ভাষা'],
    bn: ['সেটিংস', 'ভাষা ও প্রদর্শন সেটিংস', 'ওয়েবসাইটের ভাষা'],
    brx: ['सेटिं', 'राव आरो नुजाथाय सेटिं', 'वेबसाइटनि राव'],
    doi: ['सेटिंगां', 'भाशा ते रूप-रंग दी सेटिंगां', 'वेबसाइट दी भाशा'],
    gu: ['સેટિંગ્સ', 'ભાષા અને દેખાવ સેટિંગ્સ', 'વેબસાઇટની ભાષા'],
    hi: ['सेटिंग्स', 'भाषा और दिखावट सेटिंग्स', 'वेबसाइट की भाषा'],
    kn: ['ಸೆಟ್ಟಿಂಗ್‌ಗಳು', 'ಭಾಷೆ ಮತ್ತು ನೋಟದ ಸೆಟ್ಟಿಂಗ್‌ಗಳು', 'ವೆಬ್‌ಸೈಟ್ ಭಾಷೆ'],
    ks: ['سیٹنگ', 'زبان تہٕ ظٲہری سیٹنگ', 'ویب سایٹ ہُند زبان'],
    kok: ['सेटिंग्स', 'भास आनी दिसपी रूपाची सेटिंग्स', 'वेबसायटाची भास'],
    mai: ['सेटिंग्स', 'भाषा आ रूप-रंगक सेटिंग', 'वेबसाइटक भाषा'],
    ml: ['ക്രമീകരണങ്ങൾ', 'ഭാഷയും രൂപഭാവവും ക്രമീകരിക്കുക', 'വെബ്‌സൈറ്റിന്റെ ഭാഷ'],
    mni: ['ꯁꯦꯇꯤꯡꯁ', 'ꯂꯣꯟ ꯑꯃꯁꯨꯡ ꯃꯑꯣꯡꯒꯤ ꯁꯦꯇꯤꯡꯁ', 'ꯋꯦꯕꯁꯥꯏꯇꯀꯤ ꯂꯣꯟ'],
    mr: ['सेटिंग्ज', 'भाषा आणि स्वरूप सेटिंग्ज', 'वेबसाइटची भाषा'],
    ne: ['सेटिङहरू', 'भाषा र रूपसम्बन्धी सेटिङहरू', 'वेबसाइटको भाषा'],
    or: ['ସେଟିଂସ୍', 'ଭାଷା ଓ ଦୃଶ୍ୟ ସେଟିଂସ୍', 'ୱେବସାଇଟ୍‌ର ଭାଷା'],
    pa: ['ਸੈਟਿੰਗਾਂ', 'ਭਾਸ਼ਾ ਅਤੇ ਦਿੱਖ ਸੈਟਿੰਗਾਂ', 'ਵੈੱਬਸਾਈਟ ਦੀ ਭਾਸ਼ਾ'],
    sa: ['विन्यासाः', 'भाषायाः रूपस्य च विन्यासाः', 'जालपुटस्य भाषा'],
    sat: ['ᱥᱮᱴᱤᱝᱥ', 'ᱯᱟᱹᱨᱥᱤ ᱟᱨ ᱧᱮᱞ ᱥᱮᱴᱤᱝᱥ', 'ᱣᱮᱵᱽᱥᱟᱭᱤᱴ ᱯᱟᱹᱨᱥᱤ'],
    sd: ['سيٽنگون', 'ٻولي ۽ ظاهر جون سيٽنگون', 'ويب سائيٽ جي ٻولي'],
    ta: ['அமைப்புகள்', 'மொழி மற்றும் தோற்ற அமைப்புகள்', 'இணையதள மொழி'],
    te: ['సెట్టింగ్‌లు', 'భాష మరియు రూప సెట్టింగ్‌లు', 'వెబ్‌సైట్ భాష'],
    ur: ['ترتیبات', 'زبان اور ظاہری شکل کی ترتیبات', 'ویب سائٹ کی زبان'],
  };

  const menu = document.querySelector('.settings-menu');
  const panel = menu?.querySelector('.settings-menu-panel');
  const summary = menu?.querySelector('summary');
  const oldLanguageToggle = panel?.querySelector('#language-toggle');
  if (!menu || !panel || !summary || !oldLanguageToggle) {
    return;
  }

  oldLanguageToggle.hidden = true;
  const languageLabel = document.createElement('label');
  languageLabel.className = 'settings-menu-language-label';
  languageLabel.htmlFor = 'site-language';
  const selector = document.createElement('select');
  selector.className = 'settings-menu-language-select';
  selector.id = 'site-language';
  selector.setAttribute('aria-label', 'Website language');
  languages.forEach(([code, nativeName, englishName]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = code === 'en' ? englishName : `${nativeName} — ${englishName}`;
    selector.append(option);
  });
  panel.prepend(selector);
  panel.prepend(languageLabel);

  const status = document.createElement('p');
  status.className = 'settings-menu-status';
  status.setAttribute('role', 'status');
  status.hidden = true;
  panel.append(status);

  let activeLanguage = document.documentElement.lang === 'hi' ? 'hi' : 'en';
  let translationCache = new Map();
  let translationRecords = [];

  function setSettingsLabels(language) {
    const labels = settingsLabels[language] || settingsLabels.en;
    const label = menu.querySelector('.settings-menu-label');
    if (label) {
      label.textContent = labels[0];
    }
    summary.setAttribute('aria-label', labels[1]);
    languageLabel.textContent = labels[2];
    selector.setAttribute('aria-label', labels[2]);
  }

  function setStatus(message) {
    status.textContent = message;
    status.hidden = !message;
  }

  function collectRecords() {
    const records = [];
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = textWalker.nextNode())) {
      const parent = textNode.parentElement;
      if (
        !parent ||
        !textNode.nodeValue.trim() ||
        parent.closest('script, style, noscript, svg, [aria-hidden="true"], .agri-assistant-message, .settings-menu > summary, .settings-menu-language-label, #site-language, #language-toggle, .settings-menu-status')
      ) {
        continue;
      }
      const currentNode = textNode;
      const existing = translationRecords.find((record) => record.node === currentNode);
      const englishSource = currentNode.__englishText || parent.dataset.en;
      const original = englishSource || existing?.original || currentNode.nodeValue;
      records.push({
        node: currentNode,
        original,
        write: (value) => {
          const leading = original.match(/^\s*/)[0];
          const trailing = original.match(/\s*$/)[0];
          currentNode.nodeValue = `${leading}${value}${trailing}`;
        },
      });
    }

    document.querySelectorAll('body *').forEach((element) => {
      if (
        element.closest('.agri-assistant-message, .settings-menu > summary, .settings-menu-language-label, #site-language, #language-toggle, .settings-menu-status') ||
        element.matches('script, style, noscript, svg, [aria-hidden="true"]')
      ) {
        return;
      }
      ['aria-label', 'alt', 'placeholder', 'title'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) {
          return;
        }
        const key = `data-i18n-original-${attribute}`;
        if (!element.hasAttribute(key)) {
          element.setAttribute(key, element.getAttribute(attribute));
        }
        const original = element.getAttribute(key);
        records.push({
          original,
          write: (value) => element.setAttribute(attribute, value),
        });
      });
    });

    const title = document.querySelector('title');
    if (title) {
      records.push({
        original: englishTitleByPath[location.pathname.split('/').pop()] || title.textContent,
        write: (value) => { title.textContent = value; },
      });
    }
    translationRecords = records;
    return records;
  }

  async function translateTexts(texts, language) {
    const uniqueTexts = [...new Set(texts.filter((text) => /[A-Za-z]/.test(text)))];
    const missing = uniqueTexts.filter((text) => !translationCache.has(`${language}\u0000${text}`));
    const chunks = [];
    let chunk = [];
    let chunkLength = 0;
    missing.forEach((text) => {
      if (chunk.length >= 35 || chunkLength + text.length > 5000) {
        chunks.push(chunk);
        chunk = [];
        chunkLength = 0;
      }
      chunk.push(text);
      chunkLength += text.length;
    });
    if (chunk.length) {
      chunks.push(chunk);
    }

    let nextChunk = 0;
    async function translateWorker() {
      while (nextChunk < chunks.length) {
        const current = chunks[nextChunk];
        nextChunk += 1;
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ language, texts: current }),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(result.error || 'Translation service is unavailable.');
        }
        if (!Array.isArray(result.translations) || result.translations.length !== current.length) {
          throw new Error('The translation service returned an incomplete result.');
        }
        current.forEach((source, index) => {
          if (typeof result.translations[index] !== 'string') {
            throw new Error('The translation service returned invalid text.');
          }
          translationCache.set(`${language}\u0000${source}`, result.translations[index]);
        });
      }
    }
    await Promise.all(Array.from({ length: Math.min(3, chunks.length) }, translateWorker));
  }

  function applyCachedTranslations(records, language) {
    records.forEach((record) => {
      const translated = translationCache.get(`${language}\u0000${record.original}`);
      if (translated) {
        record.write(translated);
      }
    });
  }

  async function retranslateCurrentContent() {
    if (activeLanguage === 'en' || activeLanguage === 'hi') {
      return;
    }
    const records = collectRecords();
    await translateTexts(records.map((record) => record.original), activeLanguage);
    applyCachedTranslations(records, activeLanguage);
  }

  function restoreEnglish(records) {
    records.forEach((record) => record.write(record.original));
    document.documentElement.lang = 'en';
    document.title = englishTitleByPath[location.pathname.split('/').pop()] || document.title;
    if (window.kisaanSathiRefreshThemeLabel) {
      window.kisaanSathiRefreshThemeLabel();
    }
  }

  async function waitForLegacyLanguageToggle() {
    oldLanguageToggle.click();
    await new Promise((resolve) => window.setTimeout(resolve, 850));
  }

  async function prepareEnglish() {
    if (activeLanguage === 'hi') {
      await waitForLegacyLanguageToggle();
    } else if (activeLanguage !== 'en') {
      restoreEnglish(collectRecords());
    }

    activeLanguage = 'en';
    selector.value = 'en';
    setSettingsLabels('en');
    restoreEnglish(collectRecords());
  }

  async function selectLanguage(language) {
    setStatus('');
    selector.disabled = true;
    try {
      await prepareEnglish();
      if (language === 'hi') {
        await waitForLegacyLanguageToggle();
        activeLanguage = 'hi';
        selector.value = 'hi';
        localStorage.setItem('kisaanSathiLanguage', 'hi');
        setSettingsLabels('hi');
        return;
      }
      if (language === 'en') {
        activeLanguage = 'en';
        localStorage.setItem('kisaanSathiLanguage', 'en');
        return;
      }

      let records = collectRecords();
      const texts = records.map((record) => record.original);
      await translateTexts(texts, language);
      document.documentElement.lang = language;
      setSettingsLabels(language);
      if (window.kisaanSathiRefreshThemeLabel) {
        window.kisaanSathiRefreshThemeLabel();
      }
      records = collectRecords();
      await translateTexts(records.map((record) => record.original), language);
      applyCachedTranslations(records, language);
      activeLanguage = language;
      selector.value = language;
      localStorage.setItem('kisaanSathiLanguage', language);
      document.documentElement.dispatchEvent(new Event('languagechange'));
      window.setTimeout(() => {
        retranslateCurrentContent()
          .catch((error) => setStatus(error.message));
      }, 0);
    } catch (error) {
      selector.value = activeLanguage;
      setSettingsLabels(activeLanguage);
      setStatus(`Could not load this language. ${error.message}`);
    } finally {
      selector.disabled = false;
      menu.open = false;
    }
  }

  const storedLanguage = localStorage.getItem('kisaanSathiLanguage');
  const queryLanguage = new URLSearchParams(location.search).get('lang');
  const initialLanguage = languageCodes.has(queryLanguage)
    ? queryLanguage
    : languageCodes.has(storedLanguage)
      ? storedLanguage
      : activeLanguage;
  selector.value = activeLanguage;
  setSettingsLabels(activeLanguage);

  selector.addEventListener('change', () => {
    selectLanguage(selector.value);
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('#language-toggle')) {
      window.setTimeout(() => {
        activeLanguage = document.documentElement.lang === 'hi' ? 'hi' : 'en';
        selector.value = activeLanguage;
        localStorage.setItem('kisaanSathiLanguage', activeLanguage);
        setSettingsLabels(activeLanguage);
      }, 850);
    }
    if (event.target.closest('.theme-toggle') && activeLanguage !== 'en' && activeLanguage !== 'hi') {
      window.setTimeout(() => {
        const records = collectRecords();
        applyCachedTranslations(records, activeLanguage);
      }, 50);
    }
  });

  selector.addEventListener('change', () => {
    window.setTimeout(() => { menu.open = false; }, 0);
  });

  document.addEventListener('pointerdown', (event) => {
    if (
      menu.open &&
      !menu.contains(event.target) &&
      document.activeElement !== selector
    ) {
      menu.open = false;
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      summary.focus();
    }
  });

  if (initialLanguage !== activeLanguage) {
    selector.value = initialLanguage;
    if (initialLanguage === 'hi' || initialLanguage === 'en') {
      (async () => {
        await prepareEnglish();
        if (initialLanguage === 'hi') {
          await waitForLegacyLanguageToggle();
        }
        activeLanguage = initialLanguage;
        selector.value = initialLanguage;
        localStorage.setItem('kisaanSathiLanguage', initialLanguage);
        setSettingsLabels(initialLanguage);
      })();
    } else {
      selectLanguage(initialLanguage);
    }
  } else {
    localStorage.setItem('kisaanSathiLanguage', activeLanguage);
  }

  window.kisaanSathiCurrentLanguage = () => activeLanguage;
  window.kisaanSathiRetranslateCurrentContent = retranslateCurrentContent;
})();
