(() => {
  const translations = {
    en: {
      launcher: 'Ask Agri AI',
      help: 'Get Help',
      open: 'Open agriculture assistant',
      close: 'Close agriculture assistant',
      callNow: 'Call Now',
      title: 'Kisaan Sathi AI',
      subtitle: 'Agriculture questions, answered',
      welcome: 'Ask about crops, soil, irrigation, pests, or farm practices. For advice that depends on your location and crop, share those details.',
      suggestions: ['How can I improve soil health?', 'How do I plan irrigation?', 'What details help identify a crop problem?'],
      placeholder: 'Type your agriculture question…',
      send: 'Send',
      sending: 'Thinking…',
      error429: 'Too many messages in a short time. Please wait a minute and try again.',
      error400: 'The message could not be processed. Please shorten it and try again.',
      error403: 'The chat server blocked this request. Open the site from the same local server address, not as a file.',
      error404: 'The chat service was not found. Restart the latest Kisaan Sathi server and try again.',
      error413: 'Your message is too large. Please shorten it and try again.',
      error415: 'The chat service received an unsupported request. Restart the Kisaan Sathi server and try again.',
      error502: 'The AI service could not be reached. Check your internet connection and try again.',
      error503: 'The agriculture assistant is not configured or is temporarily unavailable. Please contact the site administrator.',
      errorMissingKey: 'Gemini is not connected yet. Add GEMINI_API_KEY in your hosting settings, then redeploy the site.',
      errorQuota: 'Gemini usage is unavailable right now. Check the Google AI Studio quota and billing for your API key.',
      errorInvalidConfig: 'Gemini setup needs attention. Check the API key and model name in your hosting settings.',
      errorOther: 'The agriculture assistant is temporarily unavailable. Please try again shortly.',
      disclaimer: 'AI advice can be inaccurate. Confirm treatment and time-sensitive advice with a qualified local agriculture expert.',
      requestError: 'The assistant could not answer just now. Please try again shortly.',
      networkError: 'The AI chat cannot connect while this page is opened as a file. Configure the server, run npm start, and open http://localhost:3000.',
    },
    hi: {
      launcher: 'कृषि AI से पूछें',
      open: 'कृषि सहायक खोलें',
      close: 'कृषि सहायक बंद करें',
      callNow: 'अभी कॉल करें',
      title: 'किसान साथी AI',
      subtitle: 'कृषि के सवालों के जवाब',
      welcome: 'फसल, मिट्टी, सिंचाई, कीट या खेती के तरीकों के बारे में पूछें। स्थान और फसल के अनुसार सलाह के लिए ये विवरण भी साझा करें।',
      suggestions: ['मिट्टी का स्वास्थ्य कैसे सुधारें?', 'सिंचाई की योजना कैसे बनाएं?', 'फसल की समस्या पहचानने के लिए क्या जानकारी दें?'],
      placeholder: 'अपना कृषि प्रश्न लिखें…',
      send: 'भेजें',
      sending: 'सोच रहा है…',
      error429: 'कम समय में बहुत सारे संदेश भेजे गए। कृपया एक मिनट बाद फिर प्रयास करें।',
      error400: 'आपका संदेश संसाधित नहीं हो सका। कृपया उसे छोटा करके फिर प्रयास करें।',
      error403: 'चैट सर्वर ने इस अनुरोध को रोक दिया। पेज को फाइल के रूप में खोलने के बजाय उसी स्थानीय सर्वर पते से खोलें।',
      error404: 'चैट सेवा नहीं मिली। किसान साथी का नवीनतम सर्वर फिर शुरू करके प्रयास करें।',
      error413: 'आपका संदेश बहुत बड़ा है। कृपया उसे छोटा करके फिर प्रयास करें।',
      error415: 'चैट सेवा को अनुरोध स्वीकार नहीं हुआ। किसान साथी सर्वर फिर शुरू करके प्रयास करें।',
      error502: 'AI सेवा से संपर्क नहीं हो सका। इंटरनेट जांचकर फिर प्रयास करें।',
      error503: 'कृषि सहायक अभी उपलब्ध नहीं है। कृपया साइट व्यवस्थापक से संपर्क करें।',
      errorMissingKey: 'Gemini अभी जुड़ा नहीं है। होस्टिंग सेटिंग में GEMINI_API_KEY जोड़ें और साइट फिर से डिप्लॉय करें।',
      errorQuota: 'Gemini उपयोग अभी उपलब्ध नहीं है। Google AI Studio में API कुंजी की सीमा और बिलिंग जांचें।',
      errorInvalidConfig: 'Gemini सेटअप जांचें। होस्टिंग सेटिंग में API कुंजी और मॉडल का नाम सही करें।',
      errorOther: 'कृषि सहायक अभी उपलब्ध नहीं है। कृपया थोड़ी देर बाद फिर प्रयास करें।',
      disclaimer: 'AI की सलाह गलत हो सकती है। उपचार और समय-संवेदनशील सलाह की पुष्टि स्थानीय कृषि विशेषज्ञ से करें।',
      requestError: 'सहायक अभी जवाब नहीं दे पाया। कृपया थोड़ी देर बाद फिर प्रयास करें।',
      networkError: 'पेज को फाइल के रूप में खोलने पर AI चैट काम नहीं करेगी। सर्वर कॉन्फ़िगर करके npm start चलाएं और http://localhost:3000 खोलें।',
    },
  };

  const language = () => document.documentElement.lang || 'en';
  const text = (key) => translations[language()]?.[key] || translations.en[key];
  const element = (tag, className, content) => {
    const node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (content !== undefined) {
      node.textContent = content;
    }
    return node;
  };

  const launcher = element('button', 'agri-assistant-launcher');
  launcher.type = 'button';
  launcher.setAttribute('aria-expanded', 'false');
  const launcherIcon = element('span', 'agri-assistant-launcher-icon', '🌾');
  launcherIcon.setAttribute('aria-hidden', 'true');
  const launcherLabel = element('span', '', text('launcher'));
  launcher.append(launcherIcon, launcherLabel);

  const panel = element('section', 'agri-assistant-panel');
  panel.hidden = true;
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', text('title'));

  const header = element('header', 'agri-assistant-header');
  const heading = element('div', 'agri-assistant-heading');
  const avatar = element('span', 'agri-assistant-avatar', '🌾');
  avatar.setAttribute('aria-hidden', 'true');
  const headingCopy = element('div');
  const title = element('h2', '', text('title'));
  const subtitle = element('p', '', text('subtitle'));
  headingCopy.append(title, subtitle);
  heading.append(avatar, headingCopy);

  const closeButton = element('button', 'agri-assistant-close', '×');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', text('close'));
  header.append(heading, closeButton);

  const messagesContainer = element('div', 'agri-assistant-messages');
  messagesContainer.setAttribute('role', 'log');
  messagesContainer.setAttribute('aria-live', 'polite');
  messagesContainer.setAttribute('aria-relevant', 'additions text');

  const welcome = element('p', 'agri-assistant-welcome', text('welcome'));
  const suggestions = element('div', 'agri-assistant-suggestions');
  const conversation = [];

  const form = element('form', 'agri-assistant-form');
  const input = element('input');
  input.type = 'text';
  input.name = 'question';
  input.maxLength = 1000;
  input.autocomplete = 'off';
  input.required = true;
  input.placeholder = text('placeholder');
  input.setAttribute('aria-label', text('placeholder'));

  const sendButton = element('button', '', text('send'));
  sendButton.type = 'submit';
  form.append(input, sendButton);
  const disclaimer = element('p', 'agri-assistant-disclaimer', text('disclaimer'));

  panel.append(header, messagesContainer, form, disclaimer);
  const toolbar = document.querySelector('.site-header .nav, .guide-toolbar, .toolbar, .success-toolbar');
  const actions = element('div', 'agri-assistant-actions');
  const toolbarControls = toolbar?.querySelectorAll('.settings-menu') || [];
  toolbarControls.forEach((control) => actions.append(control));
  toolbar?.querySelector('.nav-action')?.remove();
  const helpMenu = document.createElement('details');
  helpMenu.className = 'agri-help-menu';
  const helpSummary = document.createElement('summary');
  helpSummary.className = 'agri-help-summary';
  helpSummary.textContent = text('help');
  const helpPanel = element('div', 'agri-help-panel');
  const callLink = element('a', 'agri-assistant-call', text('callNow'));
  callLink.href = 'tel:+918081392456';
  callLink.dataset.assistantCall = 'true';
  helpPanel.append(callLink, launcher);
  helpMenu.append(helpSummary, helpPanel);
  actions.append(helpMenu);
  if (toolbar) {
    toolbar.append(actions);
  } else {
    document.body.append(launcher);
  }
  document.body.append(panel);

  function addMessage(role, content, isError = false) {
    const message = element('div', 'agri-assistant-message', content);
    message.dataset.role = role;
    if (isError) {
      message.dataset.error = 'true';
    }
    messagesContainer.append(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return message;
  }

  function renderWelcome() {
    messagesContainer.replaceChildren(welcome, suggestions);
    suggestions.replaceChildren();
    text('suggestions').forEach((suggestionText) => {
      const suggestion = element('button', '', suggestionText);
      suggestion.type = 'button';
      suggestion.addEventListener('click', () => sendQuestion(suggestionText));
      suggestions.append(suggestion);
    });
  }

  function updateLabels() {
    launcherLabel.textContent = text('launcher');
    callLink.textContent = text('callNow');
    helpSummary.textContent = text('help');
    launcher.setAttribute('aria-label', text('open'));
    closeButton.setAttribute('aria-label', text('close'));
    panel.setAttribute('aria-label', text('title'));
    title.textContent = text('title');
    subtitle.textContent = text('subtitle');
    welcome.textContent = text('welcome');
    input.placeholder = text('placeholder');
    input.setAttribute('aria-label', text('placeholder'));
    disclaimer.textContent = text('disclaimer');
    if (!conversation.length) {
      renderWelcome();
    }
    if (window.kisaanSathiRetranslateCurrentContent) {
      window.kisaanSathiRetranslateCurrentContent().catch((error) => {
        console.error('Could not refresh translated assistant labels:', error.message);
      });
    }
  }

  function setOpen(isOpen) {
    panel.hidden = !isOpen;
    launcher.setAttribute('aria-expanded', String(isOpen));
    launcher.setAttribute('aria-label', text(isOpen ? 'close' : 'open'));
    if (isOpen) {
      updateLabels();
      input.focus();
    }
  }

  async function sendQuestion(question) {
    const content = question.trim();
    if (!content || sendButton.disabled) {
      return;
    }

    welcome.remove();
    suggestions.remove();
    input.value = '';
    conversation.push({ role: 'user', content });
    addMessage('user', content);
    const pendingMessage = addMessage('assistant', text('sending'));
    sendButton.disabled = true;
    input.disabled = true;
    sendButton.textContent = text('sending');

    try {
      if (window.location.protocol === 'file:') {
        throw new Error(text('networkError'));
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ language: language(), messages: conversation.slice(-10) }),
        signal: AbortSignal.timeout(45_000),
      });
      let result;
      try {
        result = await response.json();
      } catch (error) {
        throw new Error(text('requestError'));
      }
      if (!response.ok) {
        const serviceErrorKey = {
          missing_api_key: 'errorMissingKey',
          quota_exceeded: 'errorQuota',
          invalid_configuration: 'errorInvalidConfig',
        }[result?.code];
        const errorKey = {
          400: 'error400',
          403: 'error403',
          404: 'error404',
          413: 'error413',
          415: 'error415',
          429: 'error429',
          502: 'error502',
          503: 'error503',
        }[response.status] || 'errorOther';
        throw new Error(text(serviceErrorKey || errorKey));
      }
      if (typeof result?.answer !== 'string' || !result.answer.trim()) {
        throw new Error(text('requestError'));
      }

      pendingMessage.textContent = result.answer;
      conversation.push({ role: 'assistant', content: result.answer });
      if (conversation.length > 10) {
        conversation.splice(0, conversation.length - 10);
      }
    } catch (error) {
      pendingMessage.textContent = error.name === 'TypeError' || error.name === 'TimeoutError'
        ? text('networkError')
        : error.message;
      pendingMessage.dataset.error = 'true';
      conversation.pop();
    } finally {
      sendButton.disabled = false;
      input.disabled = false;
      sendButton.textContent = text('send');
      input.focus();
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  launcher.addEventListener('click', () => setOpen(panel.hidden));
  closeButton.addEventListener('click', () => {
    setOpen(false);
    launcher.focus();
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendQuestion(input.value);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      launcher.focus();
    }
  });
  document.documentElement.addEventListener('languagechange', updateLabels);
  document.addEventListener('click', (event) => {
    if (event.target.closest('#language-toggle')) {
      window.setTimeout(updateLabels, 300);
    }
  });

  renderWelcome();
})();
