(() => {
  const crops = {
    rice: { name: 'Rice', days: 3, water: 7 },
    wheat: { name: 'Wheat', days: 5, water: 5 },
    tomato: { name: 'Tomato', days: 2, water: 4 },
    cotton: { name: 'Cotton', days: 6, water: 6 },
    vegetables: { name: 'Vegetables', days: 2, water: 4 },
  };
  const toolCopy = {
    en: {
      title: 'Useful tools for your farm', intro: 'Simple planning tools to help you make better everyday field decisions.',
      cropGuide: 'Crop care guide', cropIntro: 'Choose a crop to see a practical starting checklist.', selectCrop: 'Select your crop',
      planner: 'Soil & crop planner', plannerIntro: 'Get a simple field checklist based on your soil type and crop.', soilType: 'Soil type', crop: 'Crop', makePlan: 'Make plan',
      irrigation: 'Irrigation calculator', irrigationIntro: 'Estimate a starting schedule. Adjust it for local weather and expert advice.', fieldSize: 'Field size (acres)', calculate: 'Calculate',
      weather: 'Local weather', retry: 'Refresh weather', loadingWeather: 'Updating weather…', locationUnavailable: 'Location is not available in this browser.', locationDenied: 'Location permission is needed. Choose a city or allow location access and try again.', weatherUnavailable: 'Weather could not be updated. Check your connection and retry.', noPlaces: 'No matching places found. Try another spelling or a nearby town.', local: 'Local weather', yourLocation: 'Your location', humidity: 'Humidity', rain: 'Rain', wind: 'Wind', updatedAt: 'Updated at', timezone: 'Time zone', temperature: 'Temperature', rainfall: 'Rainfall', findPlace: 'Find a city or town', placePlaceholder: 'Enter a city or town', searchPlace: 'Search', choosePlace: 'Choose a matching place', usePlace: 'Use this place', useDeviceLocation: 'Use device location', locationPrivacy: 'City search does not need GPS; your selected place and preferences stay in this browser.', units: 'Units', tempUnit: 'Temperature', windUnit: 'Wind speed', dataSaver: 'Save data & battery (manual refresh)', forecast: '7-day forecast', sun: 'Sunrise', sunset: 'Sunset', rainChance: 'Rain chance', alertTitle: 'Farm weather alerts', noAlerts: 'No high-risk weather alerts for this forecast.', heatAlert: 'Very hot conditions: reduce strenuous outdoor work and check crop and worker water needs.', frostAlert: 'Frost risk: protect sensitive crops and check local forecasts.', rainAlert: 'Heavy rain possible: check field drainage and delay fertilizer or pesticide application if rain is expected.', windAlert: 'Strong winds: secure loose equipment and avoid spraying until conditions improve.', alertDisclaimer: 'General guidance only; follow local weather and agricultural advisories.', selectOption: 'Select', conditions: { clear: 'Clear skies', cloudy: 'Cloudy', fog: 'Foggy', rain: 'Rain', storm: 'Thunderstorm', snow: 'Snow' },
    },
    hi: {
      title: 'आपके खेत के लिए उपयोगी उपकरण', intro: 'रोज़मर्रा के खेत संबंधी बेहतर निर्णय लेने में मदद करने वाले सरल उपकरण।',
      cropGuide: 'फसल देखभाल गाइड', cropIntro: 'व्यावहारिक शुरुआती चेकलिस्ट देखने के लिए फसल चुनें।', selectCrop: 'अपनी फसल चुनें',
      planner: 'मिट्टी और फसल योजनाकार', plannerIntro: 'अपनी मिट्टी और फसल के आधार पर खेत की सरल चेकलिस्ट पाएं।', soilType: 'मिट्टी का प्रकार', crop: 'फसल', makePlan: 'योजना बनाएं',
      irrigation: 'सिंचाई कैलकुलेटर', irrigationIntro: 'शुरुआती सिंचाई समय-सारणी का अनुमान लगाएं। स्थानीय मौसम और विशेषज्ञ सलाह के अनुसार इसे बदलें।', fieldSize: 'खेत का आकार (एकड़)', calculate: 'गणना करें',
      weather: 'स्थानीय मौसम', retry: 'मौसम फिर से जांचें', loadingWeather: 'मौसम अपडेट हो रहा है…', locationUnavailable: 'इस ब्राउज़र में स्थान की सुविधा उपलब्ध नहीं है।', locationDenied: 'शहर चुनें या स्थान की अनुमति दें, फिर दोबारा कोशिश करें।', weatherUnavailable: 'मौसम अपडेट नहीं हो सका। इंटरनेट जांचें और फिर कोशिश करें।', noPlaces: 'मिलता-जुलता स्थान नहीं मिला। नाम की वर्तनी जांचें या पास का कस्बा आज़माएं।', local: 'स्थानीय मौसम', yourLocation: 'आपका स्थान', humidity: 'नमी', rain: 'बारिश', wind: 'हवा', updatedAt: 'अपडेट समय', timezone: 'समय क्षेत्र', temperature: 'तापमान', rainfall: 'वर्षा', findPlace: 'शहर या कस्बा खोजें', placePlaceholder: 'शहर या कस्बे का नाम', searchPlace: 'खोजें', choosePlace: 'मिलते-जुलते स्थान में से चुनें', usePlace: 'यह स्थान चुनें', useDeviceLocation: 'डिवाइस का स्थान उपयोग करें', locationPrivacy: 'शहर खोजने के लिए GPS की ज़रूरत नहीं; चुना स्थान और पसंद इसी ब्राउज़र में सुरक्षित रहते हैं।', units: 'इकाइयां', tempUnit: 'तापमान', windUnit: 'हवा की गति', dataSaver: 'डेटा और बैटरी बचाएं (मैन्युअल अपडेट)', forecast: '7-दिन का पूर्वानुमान', sun: 'सूर्योदय', sunset: 'सूर्यास्त', rainChance: 'बारिश की संभावना', alertTitle: 'खेती के लिए मौसम चेतावनी', noAlerts: 'इस पूर्वानुमान में कोई बड़ी मौसम चेतावनी नहीं।', heatAlert: 'बहुत गर्मी: कठिन बाहरी काम कम करें और फसल व श्रमिकों के लिए पानी की व्यवस्था जांचें।', frostAlert: 'पाले का खतरा: संवेदनशील फसलों की सुरक्षा करें और स्थानीय पूर्वानुमान देखें।', rainAlert: 'भारी बारिश संभव: खेत की जल निकासी जांचें और बारिश की आशंका में खाद या कीटनाशक डालना टालें।', windAlert: 'तेज़ हवा: ढीले उपकरण सुरक्षित करें और हवा कम होने तक छिड़काव न करें।', alertDisclaimer: 'यह सामान्य जानकारी है; स्थानीय मौसम और कृषि सलाह का पालन करें।', selectOption: 'चुनें', conditions: { clear: 'साफ़ आसमान', cloudy: 'बादल', fog: 'कोहरा', rain: 'बारिश', storm: 'आंधी-तूफ़ान', snow: 'बर्फ़बारी' },
    },
  };
  const additionalToolCopy = {
    as: { title: 'আপোনাৰ খেতিৰ বাবে উপযোগী সঁজুলি', intro: 'দৈনন্দিন খেতিৰ সিদ্ধান্তৰ বাবে সহজ সঁজুলি।', cropGuide: 'শস্য যত্ন গাইড', cropIntro: 'শস্য বাছি লৈ আৰম্ভণিৰ তালিকা চাওক।', selectCrop: 'শস্য বাছক', planner: 'মাটি আৰু শস্য পৰিকল্পক', plannerIntro: 'মাটি আৰু শস্যৰ ভিত্তিত সহজ পৰিকল্পনা লাভ কৰক।', soilType: 'মাটিৰ ধৰণ', crop: 'শস্য', makePlan: 'পৰিকল্পনা কৰক', irrigation: 'জলসিঞ্চন কেলকুলেটৰ', irrigationIntro: 'জলসিঞ্চনৰ আৰম্ভণিৰ সময়সূচী অনুমান কৰক।', fieldSize: 'খেতিৰ আকাৰ (একৰ)', calculate: 'হিচাপ কৰক', weather: 'স্থানীয় বতৰ', retry: 'স্থান পুনৰ চেষ্টা', local: 'স্থানীয় বতৰ', humidity: 'আৰ্দ্ৰতা', rain: 'বৰষুণ', wind: 'বতাহ', updated: 'প্ৰতি ১৫ মিনিটত আপডেট হয়।', temperature: 'উষ্ণতা', rainfall: 'বৰষুণ' },
    bn: { title: 'আপনার খেতির জন্য উপকারী সরঞ্জাম', intro: 'প্রতিদিনের কৃষি সিদ্ধান্তের জন্য সহজ সরঞ্জাম।', cropGuide: 'ফসল পরিচর্যা গাইড', selectCrop: 'ফসল বেছে নিন', planner: 'মাটি ও ফসল পরিকল্পনাকারী', soilType: 'মাটির ধরন', crop: 'ফসল', makePlan: 'পরিকল্পনা তৈরি করুন', irrigation: 'সেচ ক্যালকুলেটর', fieldSize: 'জমির আকার (একর)', calculate: 'হিসাব করুন', weather: 'স্থানীয় আবহাওয়া', retry: 'অবস্থান আবার চেষ্টা করুন', local: 'স্থানীয় আবহাওয়া', humidity: 'আর্দ্রতা', rain: 'বৃষ্টি', wind: 'বাতাস', updated: 'প্রতি ১৫ মিনিটে আপডেট হয়।', temperature: 'তাপমাত্রা', rainfall: 'বৃষ্টিপাত' },
    brx: { title: 'नोंनि हाबानि थाखाय हेफाजाबारि सामोन', cropGuide: 'फसल जतन गाइड', selectCrop: 'फसल सायख', planner: 'हाम आर फसल प्लानार', soilType: 'हामनि रोखोम', crop: 'फसल', makePlan: 'प्लान खालाम', irrigation: 'सिंचाइ क्यालकुलेटर', fieldSize: 'जमिननि आकार (एकर)', calculate: 'हिसाब खालाम', weather: 'स्थानिय मौसम', retry: 'स्थान नाजिर', local: 'स्थानिय मौसम', humidity: 'आर्द्रता', rain: 'बर्खा', wind: 'हावा', updated: '१५ मिनिटआव अपडेट जाय।', temperature: 'तापमान', rainfall: 'बर्खा' },
    doi: { title: 'तुंआढ़े खेतै आस्तै फायदेमंद औजार', cropGuide: 'फसल संभाल गाइड', selectCrop: 'फसल चुनो', planner: 'मिट्टी ते फसल योजनाकार', soilType: 'मिट्टी दा प्रकार', crop: 'फसल', makePlan: 'योजना बनाओ', irrigation: 'सिंचाई कैलकुलेटर', fieldSize: 'खेत दा आकार (एकड़)', calculate: 'गणना करो', weather: 'स्थानीय मौसम', retry: 'थां फिर आजमाओ', local: 'स्थानीय मौसम', humidity: 'नमी', rain: 'बरखा', wind: 'हवा', updated: 'हर १५ मिनट बाद अपडेट।', temperature: 'तापमान', rainfall: 'बरखा' },
    gu: { title: 'તમારા ખેતર માટે ઉપયોગી સાધનો', cropGuide: 'પાક સંભાળ માર્ગદર્શિકા', selectCrop: 'પાક પસંદ કરો', planner: 'માટી અને પાક આયોજન', soilType: 'માટીનો પ્રકાર', crop: 'પાક', makePlan: 'આયોજન બનાવો', irrigation: 'સિંચાઈ કેલ્ક્યુલેટર', fieldSize: 'ખેતરનું કદ (એકર)', calculate: 'ગણતરી કરો', weather: 'સ્થાનિક હવામાન', retry: 'સ્થાન ફરી અજમાવો', local: 'સ્થાનિક હવામાન', humidity: 'ભેજ', rain: 'વરસાદ', wind: 'પવન', updated: 'દર ૧૫ મિનિટે આપમેળે અપડેટ થાય છે.', temperature: 'તાપમાન', rainfall: 'વરસાદ' },
    kn: { title: 'ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಉಪಯುಕ್ತ ಸಾಧನಗಳು', cropGuide: 'ಬೆಳೆ ಆರೈಕೆ ಮಾರ್ಗದರ್ಶಿ', selectCrop: 'ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ', planner: 'ಮಣ್ಣು ಮತ್ತು ಬೆಳೆ ಯೋಜಕ', soilType: 'ಮಣ್ಣಿನ ವಿಧ', crop: 'ಬೆಳೆ', makePlan: 'ಯೋಜನೆ ಮಾಡಿ', irrigation: 'ನೀರಾವರಿ ಗಣಕ', fieldSize: 'ಹೊಲದ ಗಾತ್ರ (ಎಕರೆ)', calculate: 'ಲೆಕ್ಕ ಹಾಕಿ', weather: 'ಸ್ಥಳೀಯ ಹವಾಮಾನ', retry: 'ಸ್ಥಳವನ್ನು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ', local: 'ಸ್ಥಳೀಯ ಹವಾಮಾನ', humidity: 'ತೇವಾಂಶ', rain: 'ಮಳೆ', wind: 'ಗಾಳಿ', updated: 'ಪ್ರತಿ ೧೫ ನಿಮಿಷಕ್ಕೆ ನವೀಕರಿಸಲಾಗುತ್ತದೆ.', temperature: 'ತಾಪಮಾನ', rainfall: 'ಮಳೆ' },
    ks: { title: 'تُہندِ کھیتس منز فائدٕ مند اوزار', cropGuide: 'فصل سنبھال گائیڈ', selectCrop: 'فصل چُنو', planner: 'مٹی تہٕ فصل منصوبہ ساز', soilType: 'مٹی ہٕنٛد قسم', crop: 'فصل', makePlan: 'منصوبہ بناو', irrigation: 'آبپاشی حساب', fieldSize: 'کھیت سائز (ایکڑ)', calculate: 'حساب کرو', weather: 'مقامی موسم', retry: 'جگہ دوبارہ آزماو', local: 'مقامی موسم', humidity: 'نمی', rain: 'بارش', wind: 'ہوا', updated: 'ہر ۱۵ منٹہٕ اپڈیٹ۔', temperature: 'درجہ حرارت', rainfall: 'بارش' },
    kok: { title: 'तुमच्या शेतासाठी उपेगी साधनां', cropGuide: 'पीक संगोपन मार्गदर्शक', selectCrop: 'पीक निवडात', planner: 'माती आनी पीक नियोजक', soilType: 'मातीचो प्रकार', crop: 'पीक', makePlan: 'योजना करात', irrigation: 'सिंचन गणक', fieldSize: 'शेताचें आकार (एकर)', calculate: 'हिशोब करात', weather: 'स्थानिक हवामान', retry: 'स्थान परत प्रयत्न करात', local: 'स्थानिक हवामान', humidity: 'आर्द्रता', rain: 'पावस', wind: 'वाऱो', updated: 'दर १५ मिनिटांनी अपडेट जाता.', temperature: 'तापमान', rainfall: 'पावस' },
    mai: { title: 'अहाँक खेत लेल उपयोगी औजार', cropGuide: 'फसल देखभाल गाइड', selectCrop: 'फसल चुनू', planner: 'माटि आ फसल योजनाकार', soilType: 'माटिक प्रकार', crop: 'फसल', makePlan: 'योजना बनाउ', irrigation: 'सिंचाई कैलकुलेटर', fieldSize: 'खेतक आकार (एकड़)', calculate: 'गणना करू', weather: 'स्थानीय मौसम', retry: 'स्थान फेर कोशिश करू', local: 'स्थानीय मौसम', humidity: 'नमी', rain: 'वर्षा', wind: 'हवा', updated: 'हर १५ मिनट पर अपडेट होइत अछि।', temperature: 'तापमान', rainfall: 'वर्षा' },
    ml: { title: 'നിങ്ങളുടെ കൃഷിയിടത്തിനുള്ള ഉപകരണങ്ങൾ', cropGuide: 'വിള പരിപാലന ഗൈഡ്', selectCrop: 'വിള തിരഞ്ഞെടുക്കുക', planner: 'മണ്ണും വിളയും ആസൂത്രണം', soilType: 'മണ്ണിന്റെ തരം', crop: 'വിള', makePlan: 'പദ്ധതി തയ്യാറാക്കുക', irrigation: 'ജലസേചന കാൽക്കുലേറ്റർ', fieldSize: 'കൃഷിയിട വലുപ്പം (ഏക്കർ)', calculate: 'കണക്കാക്കുക', weather: 'പ്രാദേശിക കാലാവസ്ഥ', retry: 'സ്ഥാനം വീണ്ടും ശ്രമിക്കുക', local: 'പ്രാദേശിക കാലാവസ്ഥ', humidity: 'ഈർപ്പം', rain: 'മഴ', wind: 'കാറ്റ്', updated: 'ഓരോ 15 മിനിറ്റിലും പുതുക്കുന്നു.', temperature: 'താപനില', rainfall: 'മഴ' },
    mni: { title: 'নখোয়গী ফুরা ফংদা শিজিন্নবা টুলশিং', cropGuide: 'ফসল যত্ন গাইড', selectCrop: 'ফসল খল্লো', planner: 'মাটি অমসুং ফসল পরিকল্পনা', soilType: 'মাটিগী খুদম', crop: 'ফসল', makePlan: 'পরিকল্পনা তৌরো', irrigation: 'সিঞ্চাই কেলকুলেটর', fieldSize: 'ফুরাগী মশিং (একর)', calculate: 'হিসাব তৌরো', weather: 'স্থানীয় আবহাওয়া', retry: 'লোকেশন অমুক হন্না', local: 'স্থানীয় আবহাওয়া', humidity: 'নমী', rain: 'নুংশি', wind: 'হাওয়া', updated: 'মিনিট ১৫দা আপডেট তৌই।', temperature: 'তাপমান', rainfall: 'নুংশি' },
    mr: { title: 'तुमच्या शेतासाठी उपयुक्त साधने', cropGuide: 'पीक निगा मार्गदर्शक', selectCrop: 'पीक निवडा', planner: 'माती आणि पीक नियोजक', soilType: 'मातीचा प्रकार', crop: 'पीक', makePlan: 'योजना तयार करा', irrigation: 'सिंचन कॅल्क्युलेटर', fieldSize: 'शेताचा आकार (एकर)', calculate: 'गणना करा', weather: 'स्थानिक हवामान', retry: 'स्थान पुन्हा तपासा', local: 'स्थानिक हवामान', humidity: 'आर्द्रता', rain: 'पाऊस', wind: 'वारा', updated: 'दर १५ मिनिटांनी आपोआप अपडेट होते.', temperature: 'तापमान', rainfall: 'पाऊस' },
    ne: { title: 'तपाईंको खेतका लागि उपयोगी उपकरण', cropGuide: 'बाली हेरचाह गाइड', selectCrop: 'बाली छान्नुहोस्', planner: 'माटो र बाली योजनाकार', soilType: 'माटोको प्रकार', crop: 'बाली', makePlan: 'योजना बनाउनुहोस्', irrigation: 'सिँचाइ क्याल्कुलेटर', fieldSize: 'खेतको आकार (एकड)', calculate: 'हिसाब गर्नुहोस्', weather: 'स्थानीय मौसम', retry: 'स्थान फेरि प्रयास गर्नुहोस्', local: 'स्थानीय मौसम', humidity: 'आर्द्रता', rain: 'वर्षा', wind: 'हावा', updated: 'हरेक १५ मिनेटमा अपडेट हुन्छ।', temperature: 'तापक्रम', rainfall: 'वर्षा' },
    or: { title: 'ଆପଣଙ୍କ ଚାଷ ପାଇଁ ଉପଯୋଗୀ ଉପକରଣ', cropGuide: 'ଫସଲ ଯତ୍ନ ଗାଇଡ୍', selectCrop: 'ଫସଲ ବାଛନ୍ତୁ', planner: 'ମାଟି ଓ ଫସଲ ଯୋଜନାକାରୀ', soilType: 'ମାଟିର ପ୍ରକାର', crop: 'ଫସଲ', makePlan: 'ଯୋଜନା କରନ୍ତୁ', irrigation: 'ଜଳସେଚନ କ୍ୟାଲକୁଲେଟର', fieldSize: 'ଜମିର ଆକାର (ଏକର)', calculate: 'ହିସାବ କରନ୍ତୁ', weather: 'ସ୍ଥାନୀୟ ପାଗ', retry: 'ସ୍ଥାନ ପୁଣି ଚେଷ୍ଟା', local: 'ସ୍ଥାନୀୟ ପାଗ', humidity: 'ଆର୍ଦ୍ରତା', rain: 'ବର୍ଷା', wind: 'ପବନ', updated: 'ପ୍ରତି ୧୫ ମିନିଟରେ ଅପଡେଟ୍ ହୁଏ।', temperature: 'ତାପମାତ୍ରା', rainfall: 'ବର୍ଷା' },
    pa: { title: 'ਤੁਹਾਡੇ ਖੇਤ ਲਈ ਲਾਭਦਾਇਕ ਸਾਧਨ', cropGuide: 'ਫਸਲ ਸੰਭਾਲ ਗਾਈਡ', selectCrop: 'ਫਸਲ ਚੁਣੋ', planner: 'ਮਿੱਟੀ ਅਤੇ ਫਸਲ ਯੋਜਨਾਕਾਰ', soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ', crop: 'ਫਸਲ', makePlan: 'ਯੋਜਨਾ ਬਣਾਓ', irrigation: 'ਸਿੰਚਾਈ ਕੈਲਕੁਲੇਟਰ', fieldSize: 'ਖੇਤ ਦਾ ਆਕਾਰ (ਏਕੜ)', calculate: 'ਹਿਸਾਬ ਕਰੋ', weather: 'ਸਥਾਨਕ ਮੌਸਮ', retry: 'ਟਿਕਾਣਾ ਦੁਬਾਰਾ ਅਜ਼ਮਾਓ', local: 'ਸਥਾਨਕ ਮੌਸਮ', humidity: 'ਨਮੀ', rain: 'ਮੀਂਹ', wind: 'ਹਵਾ', updated: 'ਹਰ ੧੫ ਮਿੰਟ ਵਿੱਚ ਅਪਡੇਟ ਹੁੰਦਾ ਹੈ।', temperature: 'ਤਾਪਮਾਨ', rainfall: 'ਮੀਂਹ' },
    sa: { title: 'भवतः क्षेत्राय उपयोगिनः उपकरणानि', cropGuide: 'सस्यपरिचर्या मार्गदर्शिका', selectCrop: 'सस्यं वृणुत', planner: 'मृदा-सस्य योजनाकारः', soilType: 'मृत्तिकायाः प्रकारः', crop: 'सस्यम्', makePlan: 'योजनां कुरुत', irrigation: 'सिञ्चन गणकः', fieldSize: 'क्षेत्रस्य परिमाणम् (एकर)', calculate: 'गणयतु', weather: 'स्थानीय वातावरणम्', retry: 'स्थानं पुनः प्रयतताम्', local: 'स्थानीय वातावरणम्', humidity: 'आर्द्रता', rain: 'वृष्टिः', wind: 'वायुः', updated: 'प्रति १५ निमेषे अद्यतनम्।', temperature: 'तापमानम्', rainfall: 'वृष्टिः' },
    sat: { title: 'आमाक् खेत रे काजेया साधन', cropGuide: 'फसल जतन गाइड', selectCrop: 'फसल बाछाव', planner: 'माटी आर फसल योजना', soilType: 'माटी रे प्रकार', crop: 'फसल', makePlan: 'योजना बनाव', irrigation: 'सिंचाइ हिसाब', fieldSize: 'खेत रे आकार (एकड़)', calculate: 'हिसाब कना', weather: 'जायगा रे मौसम', retry: 'जायगा दोबारा देखाव', local: 'जायगा रे मौसम', humidity: 'नमी', rain: 'गाज', wind: 'हावा', updated: '१५ मिनिट रे अपडेट होवाक्।', temperature: 'तापमान', rainfall: 'गाज' },
    sd: { title: 'توهان جي کيت لاءِ فائديمند اوزار', cropGuide: 'فصل سنڀال گائيڊ', selectCrop: 'فصل چونڊيو', planner: 'مٽي ۽ فصل منصوبه ساز', soilType: 'مٽي جو قسم', crop: 'فصل', makePlan: 'منصوبو ٺاهيو', irrigation: 'آبپاشي حساب', fieldSize: 'کيت جو ماپ (ايڪڙ)', calculate: 'حساب ڪريو', weather: 'مقامي موسم', retry: 'جڳهه ٻيهر آزمايو', local: 'مقامي موسم', humidity: 'نمي', rain: 'مينهن', wind: 'هوا', updated: 'هر ۱۵ منٽن تي اپڊيٽ ٿئي ٿو.', temperature: 'گرمي پد', rainfall: 'مينهن' },
    ta: { title: 'உங்கள் வயலுக்கான பயனுள்ள கருவிகள்', cropGuide: 'பயிர் பராமரிப்பு வழிகாட்டி', selectCrop: 'பயிரைத் தேர்ந்தெடுக்கவும்', planner: 'மண் மற்றும் பயிர் திட்டமிடுபவர்', soilType: 'மண் வகை', crop: 'பயிர்', makePlan: 'திட்டம் உருவாக்கவும்', irrigation: 'நீர்ப்பாசன கணிப்பான்', fieldSize: 'வயல் அளவு (ஏக்கர்)', calculate: 'கணக்கிடுக', weather: 'உள்ளூர் வானிலை', retry: 'இருப்பிடத்தை மீண்டும் முயற்சிக்கவும்', local: 'உள்ளூர் வானிலை', humidity: 'ஈரப்பதம்', rain: 'மழை', wind: 'காற்று', updated: 'ஒவ்வொரு 15 நிமிடத்திற்கும் புதுப்பிக்கப்படும்.', temperature: 'வெப்பநிலை', rainfall: 'மழைப்பொழிவு' },
    te: { title: 'మీ పొలానికి ఉపయోగకరమైన సాధనాలు', cropGuide: 'పంట సంరక్షణ మార్గదర్శి', selectCrop: 'పంటను ఎంచుకోండి', planner: 'మట్టి మరియు పంట ప్రణాళిక', soilType: 'మట్టి రకం', crop: 'పంట', makePlan: 'ప్రణాళిక చేయండి', irrigation: 'నీటిపారుదల కాలిక్యులేటర్', fieldSize: 'పొలం పరిమాణం (ఎకరాలు)', calculate: 'లెక్కించండి', weather: 'స్థానిక వాతావరణం', retry: 'స్థానాన్ని మళ్లీ ప్రయత్నించండి', local: 'స్థానిక వాతావరణం', humidity: 'తేమ', rain: 'వర్షం', wind: 'గాలి', updated: 'ప్రతి 15 నిమిషాలకు నవీకరించబడుతుంది.', temperature: 'ఉష్ణోగ్రత', rainfall: 'వర్షపాతం' },
    ur: { title: 'آپ کے کھیت کے لیے مفید اوزار', cropGuide: 'فصل کی دیکھ بھال گائیڈ', selectCrop: 'فصل منتخب کریں', planner: 'مٹی اور فصل منصوبہ ساز', soilType: 'مٹی کی قسم', crop: 'فصل', makePlan: 'منصوبہ بنائیں', irrigation: 'آبپاشی کیلکولیٹر', fieldSize: 'کھیت کا سائز (ایکڑ)', calculate: 'حساب کریں', weather: 'مقامی موسم', retry: 'مقام دوبارہ آزمائیں', local: 'مقامی موسم', humidity: 'نمی', rain: 'بارش', wind: 'ہوا', updated: 'ہر ۱۵ منٹ میں خودکار اپ ڈیٹ ہوتا ہے۔', temperature: 'درجہ حرارت', rainfall: 'بارش' },
  };
  Object.entries(additionalToolCopy).forEach(([language, labels]) => { toolCopy[language] = { ...toolCopy.en, ...labels }; });
  const cropNames = { hi: { rice: 'धान', wheat: 'गेहूं', tomato: 'टमाटर', cotton: 'कपास', vegetables: 'सब्ज़ियां' } };
  const soilNames = { hi: { loam: 'दोमट', clay: 'चिकनी मिट्टी', sandy: 'रेतीली मिट्टी' } };

  const toolsSection = document.createElement('section');
  toolsSection.className = 'section enhancements-section';
  toolsSection.id = 'farmer-tools';
  toolsSection.innerHTML = `<div class="container"><div class="section-head"><h2>Useful tools for your farm</h2><p>Simple planning tools to help you make better everyday field decisions.</p></div><div class="enhancement-grid">
    <article class="enhancement-card"><h3>Crop care guide</h3><p>Choose a crop to see a practical starting checklist.</p><label for="crop-choice">Select your crop</label><select id="crop-choice"><option value="rice">Rice</option><option value="wheat">Wheat</option><option value="tomato">Tomato</option><option value="cotton">Cotton</option><option value="vegetables">Vegetables</option></select><div class="enhancement-result" id="crop-result" aria-live="polite"></div></article>
    <article class="enhancement-card"><h3>Soil &amp; crop planner</h3><p>Get a simple field checklist based on your soil type and crop.</p><label for="soil-type">Soil type</label><select id="soil-type"><option value="loam">Loam</option><option value="clay">Clay</option><option value="sandy">Sandy</option></select><label for="soil-crop">Crop</label><select id="soil-crop"><option value="rice">Rice</option><option value="wheat">Wheat</option><option value="tomato">Tomato</option><option value="cotton">Cotton</option><option value="vegetables">Vegetables</option></select><button class="btn btn-primary enhancement-button" id="plan-field" type="button">Make plan</button><div class="enhancement-result" id="field-plan-result" aria-live="polite"></div></article>
    <article class="enhancement-card"><h3>Irrigation calculator</h3><p>Estimate a starting schedule. Adjust it for local weather and expert advice.</p><label for="field-size">Field size (acres)</label><input id="field-size" type="number" min="0.1" step="0.1" value="1" inputmode="decimal"><label for="irrigation-crop">Crop</label><select id="irrigation-crop"><option value="rice">Rice</option><option value="wheat">Wheat</option><option value="tomato">Tomato</option><option value="cotton">Cotton</option><option value="vegetables">Vegetables</option></select><button class="btn btn-primary enhancement-button" id="calculate-water" type="button">Calculate</button><div class="enhancement-result" id="water-result" aria-live="polite"></div></article>
    <article class="enhancement-card weather-card"><h3>Local weather</h3><div class="weather-location-tools"><form id="weather-place-form"><label for="weather-place-input" id="weather-place-label">Find a city or town</label><div class="weather-place-search"><input id="weather-place-input" type="search" maxlength="80" autocomplete="off" placeholder="Enter a city or town"><button class="enhancement-button" id="weather-place-search" type="submit">Search</button></div></form><div class="weather-place-choice" id="weather-place-choice" hidden><label for="weather-place-results" id="weather-place-choice-label">Choose a matching place</label><div class="weather-place-search"><select id="weather-place-results"></select><button class="enhancement-button" id="weather-use-place" type="button">Use this place</button></div></div><button class="weather-location-button" id="weather-device-location" type="button">Use device location</button><p class="weather-location-status" id="weather-location-status" role="status" hidden></p><p class="weather-place-privacy" id="weather-place-privacy">City search does not need GPS; your selected place and preferences stay in this browser.</p></div><div class="weather-preferences" id="weather-preferences"><label for="weather-temperature-unit"><span id="weather-temp-label">Temperature</span><select id="weather-temperature-unit"><option value="celsius">°C</option><option value="fahrenheit">°F</option></select></label><label for="weather-wind-unit"><span id="weather-wind-label">Wind speed</span><select id="weather-wind-unit"><option value="kmh">km/h</option><option value="mph">mph</option></select></label><label class="weather-data-saver" for="weather-data-saver"><input id="weather-data-saver" type="checkbox"><span id="weather-data-saver-label">Save data &amp; battery (manual refresh)</span></label></div><div class="weather-alerts" id="weather-alerts" aria-live="polite"><h4 id="weather-alert-title">Farm weather alerts</h4><ul id="weather-alert-list"></ul><small id="weather-alert-disclaimer">General guidance only; follow local weather and agricultural advisories.</small></div><div class="weather-bar"><div class="weather-summary" id="weather-result" aria-live="polite">Detecting your location...</div><div class="weather-chart" id="weather-chart" aria-label="Combined temperature and rainfall graph"></div></div><div class="weather-sun-times" id="weather-sun-times"></div><section class="weather-forecast-section" aria-labelledby="weather-forecast-title"><h4 id="weather-forecast-title">7-day forecast</h4><div class="weather-forecast" id="weather-forecast"></div></section><div class="weather-controls"><button class="btn btn-primary enhancement-button" id="weather-button" type="button">Refresh weather</button></div><p class="weather-fetch-status" id="weather-fetch-status" role="status" hidden></p></article>
  </div></div>`;
  document.querySelector('#field-guide')?.after(toolsSection);

  const updateToolLanguage = () => {
    const copy = toolCopy[document.documentElement.lang] || toolCopy.en;
    const cards = document.querySelectorAll('.enhancement-card');
    const cropCard = cards[0]; const plannerCard = cards[1]; const irrigationCard = cards[2]; const weatherCard = cards[3];
    document.querySelector('#farmer-tools h2').textContent = copy.title;
    document.querySelector('#farmer-tools .section-head p').textContent = copy.intro;
    cropCard.querySelector('h3').textContent = copy.cropGuide; cropCard.querySelector('p').textContent = copy.cropIntro; cropCard.querySelector('label').textContent = copy.selectCrop;
    plannerCard.querySelector('h3').textContent = copy.planner; plannerCard.querySelector('p').textContent = copy.plannerIntro; plannerCard.querySelectorAll('label')[0].textContent = copy.soilType; plannerCard.querySelectorAll('label')[1].textContent = copy.crop; plannerCard.querySelector('button').textContent = copy.makePlan;
    irrigationCard.querySelector('h3').textContent = copy.irrigation; irrigationCard.querySelector('p').textContent = copy.irrigationIntro; irrigationCard.querySelectorAll('label')[0].textContent = copy.fieldSize; irrigationCard.querySelectorAll('label')[1].textContent = copy.crop; irrigationCard.querySelector('button').textContent = copy.calculate;
    weatherCard.querySelector('h3').textContent = copy.weather; weatherButton.textContent = weatherButton.disabled ? copy.loadingWeather : copy.retry;
    document.querySelector('#weather-place-label').textContent = copy.findPlace;
    document.querySelector('#weather-place-privacy').textContent = copy.locationPrivacy;
    document.querySelector('#weather-place-input').placeholder = copy.placePlaceholder;
    document.querySelector('#weather-place-search').textContent = copy.searchPlace;
    document.querySelector('#weather-place-choice-label').textContent = copy.choosePlace;
    document.querySelector('#weather-use-place').textContent = copy.usePlace;
    document.querySelector('#weather-device-location').textContent = copy.useDeviceLocation;
    document.querySelector('#weather-preferences').setAttribute('aria-label', copy.units);
    document.querySelector('#weather-temp-label').textContent = copy.tempUnit;
    document.querySelector('#weather-wind-label').textContent = copy.windUnit;
    document.querySelector('#weather-data-saver-label').textContent = copy.dataSaver;
    document.querySelector('#weather-alert-title').textContent = copy.alertTitle;
    document.querySelector('#weather-alert-disclaimer').textContent = copy.alertDisclaimer;
    document.querySelector('#weather-forecast-title').textContent = copy.forecast;
    if (weatherLocationStatus.dataset.messageKey) weatherLocationStatus.textContent = copy[weatherLocationStatus.dataset.messageKey];
    document.querySelectorAll('#crop-choice option, #soil-crop option, #irrigation-crop option').forEach((option) => { option.textContent = cropNames.hi?.[option.value] && document.documentElement.lang === 'hi' ? cropNames.hi[option.value] : crops[option.value].name; });
    document.querySelectorAll('#soil-type option').forEach((option) => { option.textContent = document.documentElement.lang === 'hi' ? soilNames.hi[option.value] : ({ loam: 'Loam', clay: 'Clay', sandy: 'Sandy' }[option.value]); });
    updateCrop(); updateFieldPlan();
  };
  document.documentElement.addEventListener('languagechange', () => {
    updateToolLanguage();
    window.setTimeout(updateToolLanguage, 900);
  });
  const navigation = document.querySelector('.nav-links');
  if (navigation) {
    [['farmer-tools', 'Farm Tools'], ['knowledge', 'Guides']].forEach(([id, label]) => {
      const link = document.createElement('a'); link.href = `#${id}`; link.textContent = label; navigation.append(link);
    });
  }

  const knowledge = document.createElement('section');
  knowledge.className = 'section';
  knowledge.id = 'knowledge';
  knowledge.innerHTML = `<div class="container"><div class="section-head"><h2>Farming knowledge center</h2><p>Quick, searchable reminders for common field tasks.</p></div><div class="knowledge-toolbar"><label class="sr-only" for="knowledge-search">Search farming guides</label><input id="knowledge-search" type="search" placeholder="Search soil, water, pests, or crops..."></div><div class="knowledge-grid">
    <article class="knowledge-card" data-search="soil test nutrients fertility"><h3>Soil testing</h3><p>Test soil before adding nutrients, then follow the recommended dose.</p></article><article class="knowledge-card" data-search="drip sprinkler water irrigation"><h3>Water efficiency</h3><p>Check leaks and use drip or sprinkler systems where they suit your crop.</p></article><article class="knowledge-card" data-search="pest disease leaves crop protection"><h3>Early pest checks</h3><p>Inspect leaves and stems regularly so problems can be handled early.</p></article><article class="knowledge-card" data-search="mulch moisture heat soil"><h3>Moisture retention</h3><p>Mulching can reduce evaporation and protect soil during hot periods.</p></article><article class="knowledge-card" data-search="seed sowing crop planning farm"><h3>Season planning</h3><p>Plan seed, labour, water, and harvest timing before sowing.</p></article><article class="knowledge-card" data-search="government subsidy scheme loan support"><h3>Scheme support</h3><p>Review eligibility and official application instructions before applying.</p></article>
  </div></div>`;
  document.querySelector('#solutions')?.after(knowledge);

  const cropResult = document.querySelector('#crop-result');
  const cropChoice = document.querySelector('#crop-choice');
  const updateCrop = () => { const crop = crops[cropChoice.value]; const name = document.documentElement.lang === 'hi' ? cropNames.hi[cropChoice.value] : crop.name; cropResult.textContent = document.documentElement.lang === 'hi' ? `${name}: मिट्टी की नमी रोज़ जांचें, पत्तियों को सप्ताह में दो बार देखें और मौसम व फसल की अवस्था के अनुसार सिंचाई बदलें।` : `${name}: check soil moisture every day, inspect leaves twice a week, and adjust watering to weather and growth stage.`; };
  cropChoice?.addEventListener('change', updateCrop); updateCrop();

  const soilPlans = {
    loam: 'Water when the top 3–5 cm feels dry, control weeds, and add compost after a soil test.',
    clay: 'Use slower, shorter watering cycles, improve drainage, and avoid watering while the surface is still wet.',
    sandy: 'Use smaller, more frequent watering cycles and add organic matter to hold moisture.',
  };
  const updateFieldPlan = () => {
    const soil = document.querySelector('#soil-type').value;
    const crop = crops[document.querySelector('#soil-crop').value];
    const name = document.documentElement.lang === 'hi' ? cropNames.hi[document.querySelector('#soil-crop').value] : crop.name;
    document.querySelector('#field-plan-result').textContent = document.documentElement.lang === 'hi' ? `${name} के लिए ${soilNames.hi[soil]}: ${soil === 'loam' ? 'ऊपरी 3–5 सेमी मिट्टी सूखी लगे तो पानी दें, खरपतवार नियंत्रित करें और मिट्टी जांच के बाद कंपोस्ट डालें।' : soil === 'clay' ? 'धीमी और कम अवधि की सिंचाई करें, जल निकासी सुधारें और सतह गीली होने पर पानी न दें।' : 'कम मात्रा में लेकिन अधिक बार पानी दें और नमी बनाए रखने के लिए जैविक पदार्थ मिलाएं।'}` : `${name} on ${soil} soil: ${soilPlans[soil]}`;
  };
  document.querySelector('#plan-field')?.addEventListener('click', updateFieldPlan);
  updateFieldPlan();

  document.querySelector('#calculate-water')?.addEventListener('click', () => {
    const acres = Number(document.querySelector('#field-size').value); const crop = crops[document.querySelector('#irrigation-crop').value]; const result = document.querySelector('#water-result');
    if (!Number.isFinite(acres) || acres <= 0) { result.textContent = 'Enter a field size greater than 0.'; return; }
    const name = document.documentElement.lang === 'hi' ? cropNames.hi[document.querySelector('#irrigation-crop').value] : crop.name;
    result.textContent = document.documentElement.lang === 'hi' ? `शुरुआती अनुमान: हर सिंचाई में लगभग ${Math.round(acres * crop.water * 1000).toLocaleString()} लीटर पानी, हर ${crop.days}–${crop.days + 1} दिन में। पानी देने से पहले मिट्टी की नमी जांचें।` : `Starting estimate: about ${Math.round(acres * crop.water * 1000).toLocaleString()} litres per irrigation, every ${crop.days}-${crop.days + 1} days. Check soil moisture before watering.`;
  });

  const weatherResult = document.querySelector('#weather-result');
  const weatherFetchStatus = document.querySelector('#weather-fetch-status');
  const weatherButton = document.querySelector('#weather-button');
  const weatherNumber = (value) => typeof value === 'number' && Number.isFinite(value);
  let weatherRequestId = 0;
  let weatherController;
  const weatherPlaceForm = document.querySelector('#weather-place-form');
  const weatherPlaceInput = document.querySelector('#weather-place-input');
  const weatherPlaceChoice = document.querySelector('#weather-place-choice');
  const weatherPlaceResults = document.querySelector('#weather-place-results');
  const weatherLocationStatus = document.querySelector('#weather-location-status');
  const weatherTemperatureUnit = document.querySelector('#weather-temperature-unit');
  const weatherWindUnit = document.querySelector('#weather-wind-unit');
  const weatherDataSaver = document.querySelector('#weather-data-saver');
  const weatherForecast = document.querySelector('#weather-forecast');
  const weatherSunTimes = document.querySelector('#weather-sun-times');
  const weatherAlertList = document.querySelector('#weather-alert-list');
  const weatherGeocodeController = { current: undefined };
  let geocodeResults = [];
  let currentWeatherData;
  let activeWeatherLocation = '';
  const weatherPreferences = { temperature: 'celsius', wind: 'kmh', dataSaver: false };
  let savedWeatherPlace;
  try {
    const savedPreferences = JSON.parse(localStorage.getItem('kisaanSathiWeatherPreferences') || '{}');
    if (savedPreferences.temperature === 'fahrenheit') weatherPreferences.temperature = 'fahrenheit';
    if (savedPreferences.wind === 'mph') weatherPreferences.wind = 'mph';
    weatherPreferences.dataSaver = savedPreferences.dataSaver === true;
    const savedPlace = JSON.parse(localStorage.getItem('kisaanSathiWeatherPlace') || 'null');
    if (savedPlace && weatherNumber(savedPlace.latitude) && Math.abs(savedPlace.latitude) <= 90
      && weatherNumber(savedPlace.longitude) && Math.abs(savedPlace.longitude) <= 180 && typeof savedPlace.name === 'string') {
      savedWeatherPlace = savedPlace;
    }
  } catch (error) {
    console.warn('Could not load saved weather preferences:', error.message);
  }
  weatherTemperatureUnit.value = weatherPreferences.temperature;
  weatherWindUnit.value = weatherPreferences.wind;
  weatherDataSaver.checked = weatherPreferences.dataSaver;
  const saveWeatherPreferences = () => {
    try {
      localStorage.setItem('kisaanSathiWeatherPreferences', JSON.stringify(weatherPreferences));
    } catch (error) {
      console.warn('Could not save weather preferences:', error.message);
    }
  };
  const formatTemperature = (celsius) => {
    const value = weatherPreferences.temperature === 'fahrenheit' ? (celsius * 9) / 5 + 32 : celsius;
    const unit = weatherPreferences.temperature === 'fahrenheit' ? '°F' : '°C';
    return `${Math.round(value)}${unit}`;
  };
  const formatWindSpeed = (kilometresPerHour) => {
    const value = weatherPreferences.wind === 'mph' ? kilometresPerHour * 0.621371 : kilometresPerHour;
    return `${new Intl.NumberFormat(document.documentElement.lang, { maximumFractionDigits: 1 }).format(value)} ${weatherPreferences.wind === 'mph' ? 'mph' : 'km/h'}`;
  };
  const weatherPlaceLabel = (place) => [place.name, place.admin1, place.country].filter(Boolean).join(', ');
  const weatherConditionFor = (code, rain) => {
    if (code >= 95) return 'storm';
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || rain > 0) return 'rain';
    if (code >= 45 && code <= 48) return 'fog';
    if (code >= 1 && code <= 3) return 'cloudy';
    return 'clear';
  };
  const formatWeatherTime = (value, locale, options) => new Date(`${value}Z`).toLocaleTimeString(locale, { ...options, timeZone: 'UTC' });
  const setWeatherFetchStatus = (message, state) => {
    weatherFetchStatus.textContent = message;
    weatherFetchStatus.dataset.state = state;
    weatherFetchStatus.hidden = !message;
  };
  const renderWeather = (data, locationName) => {
    const copy = toolCopy[document.documentElement.lang] || toolCopy.en;
    const current = data.current;
    const daily = data.daily;
    const conditionType = weatherConditionFor(current.weather_code, current.rain);
    const conditionIcons = { clear: '☀', cloudy: '☁', fog: '≋', rain: '☂', storm: '⚡', snow: '❄' };
    const updatedAt = formatWeatherTime(current.time, document.documentElement.lang, { hour: 'numeric', minute: '2-digit' });
    weatherResult.replaceChildren();
    const temperature = document.createElement('strong');
    temperature.textContent = formatTemperature(current.temperature_2m);
    weatherResult.append(temperature);
    const condition = document.createElement('span');
    condition.className = 'weather-condition';
    condition.textContent = `${conditionIcons[conditionType]} ${copy.conditions[conditionType]}`;
    weatherResult.append(condition);
    const place = document.createElement('span');
    place.className = 'weather-place-name';
    place.textContent = locationName || copy.yourLocation;
    weatherResult.append(place);
    const details = document.createElement('span');
    details.textContent = `${copy.humidity}: ${current.relative_humidity_2m}% / ${copy.rain}: ${current.rain} mm`;
    weatherResult.append(details);
    const wind = document.createElement('span');
    wind.textContent = `${copy.wind}: ${formatWindSpeed(current.wind_speed_10m)}`;
    weatherResult.append(wind);
    const updated = document.createElement('small');
    updated.textContent = `${copy.updatedAt} ${updatedAt} · ${copy.timezone}: ${data.timezone}`;
    weatherResult.append(updated);

    const startIndex = data.hourly.time.findIndex((time) => time >= current.time);
    const temperatures = data.hourly.temperature_2m.slice(startIndex, startIndex + 8);
    const rainfall = data.hourly.precipitation.slice(startIndex, startIndex + 8);
    const min = Math.min(...temperatures);
    const max = Math.max(...temperatures);
    const spread = Math.max(max - min, 1);
    const points = temperatures.map((value, index) => `${index * 86 + 43},${145 - ((value - min) / spread) * 105}`).join(' ');
    const labels = temperatures.map((value, index) => {
      const hour = formatWeatherTime(data.hourly.time[startIndex + index], document.documentElement.lang, { hour: 'numeric' });
      return `<text x="${index * 86 + 43}" y="174" text-anchor="middle">${hour}</text>`;
    }).join('');
    const bars = rainfall.map((rain, index) => {
      const height = Math.min(rain * 18, 100);
      return `<rect class="rain-bar" x="${index * 86 + 28}" y="${145 - height}" width="30" height="${height}" rx="5"><title>${rain} mm ${copy.rain.toLowerCase()}</title></rect>`;
    }).join('');
    const chart = document.querySelector('#weather-chart');
    chart.innerHTML = `<svg viewBox="0 0 728 185" role="img" aria-label="${copy.temperature} line and ${copy.rainfall.toLowerCase()} bar graph"><line class="chart-axis" x1="18" y1="145" x2="710" y2="145"></line>${bars}<polyline class="temp-line" points="${points}"></polyline>${temperatures.map((value, index) => `<circle class="temp-point" cx="${index * 86 + 43}" cy="${145 - ((value - min) / spread) * 105}" r="4"><title>${formatTemperature(value)}</title></circle>`).join('')}${labels}</svg><div class="weather-legend"><span><i class="legend-temperature"></i>${copy.temperature}</span><span><i class="legend-rain"></i>${copy.rainfall}</span></div>`;

    const days = daily.time.map((date, index) => {
      const day = document.createElement('article');
      day.className = 'weather-day';
      const dayDate = new Date(`${date}T12:00:00Z`);
      const label = document.createElement('strong');
      label.textContent = new Intl.DateTimeFormat(document.documentElement.lang, { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(dayDate);
      const dayConditionType = weatherConditionFor(daily.weather_code[index], 0);
      const dayCondition = document.createElement('span');
      dayCondition.className = 'weather-day-condition';
      dayCondition.textContent = `${conditionIcons[dayConditionType]} ${copy.conditions[dayConditionType]}`;
      const extremes = document.createElement('span');
      extremes.textContent = `${formatTemperature(daily.temperature_2m_max[index])} / ${formatTemperature(daily.temperature_2m_min[index])}`;
      const chance = document.createElement('span');
      const chanceValue = daily.precipitation_probability_max[index];
      chance.textContent = `${copy.rainChance}: ${weatherNumber(chanceValue) ? `${chanceValue}%` : '—'}`;
      day.append(label, dayCondition, extremes, chance);
      return day;
    });
    weatherForecast.replaceChildren(...days);

    const sunrise = formatWeatherTime(daily.sunrise[0], document.documentElement.lang, { hour: 'numeric', minute: '2-digit' });
    const sunset = formatWeatherTime(daily.sunset[0], document.documentElement.lang, { hour: 'numeric', minute: '2-digit' });
    weatherSunTimes.textContent = `${copy.sun}: ${sunrise} · ${copy.sunset}: ${sunset}`;

    const alerts = [];
    const alertDate = (index) => new Intl.DateTimeFormat(document.documentElement.lang, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${daily.time[index]}T12:00:00Z`));
    const firstIndex = (values, predicate) => values.findIndex(predicate);
    const heatDay = firstIndex(daily.temperature_2m_max, (value) => value >= 38);
    const frostDay = firstIndex(daily.temperature_2m_min, (value) => value <= 2);
    const rainDay = firstIndex(daily.precipitation_probability_max, (value) => weatherNumber(value) && value >= 70);
    const heavyRainDay = rainDay >= 0 ? rainDay : firstIndex(daily.precipitation_sum, (value) => value >= 50);
    const stormDay = firstIndex(daily.weather_code, (code) => code >= 95);
    const windDay = firstIndex(daily.wind_speed_10m_max, (value) => value >= 40);
    if (heatDay >= 0) alerts.push(`${copy.heatAlert} (${alertDate(heatDay)})`);
    if (frostDay >= 0) alerts.push(`${copy.frostAlert} (${alertDate(frostDay)})`);
    if (heavyRainDay >= 0 || stormDay >= 0) alerts.push(`${copy.rainAlert} (${alertDate(heavyRainDay >= 0 ? heavyRainDay : stormDay)})`);
    if (windDay >= 0) alerts.push(`${copy.windAlert} (${alertDate(windDay)})`);
    if (!alerts.length) alerts.push(copy.noAlerts);
    weatherAlertList.replaceChildren(...alerts.map((message) => {
      const item = document.createElement('li');
      item.textContent = message;
      return item;
    }));
  };
  document.documentElement.addEventListener('languagechange', () => {
    if (currentWeatherData) renderWeather(currentWeatherData, activeWeatherLocation);
  });
  const fetchWeatherAt = async (coords, locationName, requestId) => {
    if (requestId !== weatherRequestId) return;
    const controller = new AbortController();
    weatherController = controller;
    let requestTimedOut = false;
    const requestTimeout = window.setTimeout(() => {
      requestTimedOut = true;
      controller.abort();
    }, 15_000);
    try {
      const params = new URLSearchParams({
        latitude: String(coords.latitude),
        longitude: String(coords.longitude),
        current: 'temperature_2m,relative_humidity_2m,precipitation,rain,wind_speed_10m,weather_code',
        hourly: 'temperature_2m,precipitation',
        daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,sunrise,sunset,wind_speed_10m_max',
        forecast_days: '7',
        timezone: 'auto',
      });
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: controller.signal });
      if (!response.ok) throw new Error('Weather request failed');
      const data = await response.json();
      const current = data.current;
      const daily = data.daily;
      const dailyFields = ['time', 'weather_code', 'temperature_2m_max', 'temperature_2m_min', 'precipitation_probability_max', 'precipitation_sum', 'sunrise', 'sunset', 'wind_speed_10m_max'];
      if (!current || !Array.isArray(data.hourly?.time) || !data.hourly.time.every((time) => typeof time === 'string')
        || !Array.isArray(data.hourly?.temperature_2m) || !Array.isArray(data.hourly?.precipitation)
        || !dailyFields.every((field) => Array.isArray(daily?.[field]) && daily[field].length === 7)
        || !weatherNumber(current.temperature_2m) || !weatherNumber(current.relative_humidity_2m) || !weatherNumber(current.rain)
        || !weatherNumber(current.wind_speed_10m) || !weatherNumber(current.weather_code) || current.relative_humidity_2m < 0 || current.relative_humidity_2m > 100
        || current.rain < 0 || current.wind_speed_10m < 0 || typeof current.time !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(current.time)
        || !daily.temperature_2m_max.every(weatherNumber) || !daily.temperature_2m_min.every(weatherNumber)
        || !daily.weather_code.every(weatherNumber) || !daily.precipitation_sum.every((value) => weatherNumber(value) && value >= 0)
        || !daily.wind_speed_10m_max.every((value) => weatherNumber(value) && value >= 0)
        || !daily.sunrise.every((time) => typeof time === 'string') || !daily.sunset.every((time) => typeof time === 'string')
        || !daily.precipitation_probability_max.every((value) => value === null || (weatherNumber(value) && value >= 0 && value <= 100))
        || typeof data.timezone !== 'string') {
        throw new Error('Weather response is missing required current, hourly, or daily data');
      }
      const startIndex = data.hourly.time.findIndex((time) => time >= current.time);
      if (startIndex < 0) throw new Error('Current hour is missing from the hourly forecast');
      const temperatures = data.hourly.temperature_2m.slice(startIndex, startIndex + 8);
      const rainfall = data.hourly.precipitation.slice(startIndex, startIndex + 8);
      if (temperatures.length !== 8 || rainfall.length !== 8
        || !temperatures.every(weatherNumber) || !rainfall.every((value) => weatherNumber(value) && value >= 0)) {
        throw new Error('Hourly forecast does not contain eight valid hours');
      }
      if (requestId !== weatherRequestId) return;
      currentWeatherData = data;
      activeWeatherLocation = locationName;
      renderWeather(data, locationName);
      setWeatherFetchStatus('', '');
    } catch (error) {
      if (requestId !== weatherRequestId) return;
      if (requestTimedOut) console.warn('Weather request timed out.');
      else if (!controller.signal.aborted) console.error('Could not load local weather:', error);
      setWeatherFetchStatus((toolCopy[document.documentElement.lang] || toolCopy.en).weatherUnavailable, 'error');
    } finally {
      window.clearTimeout(requestTimeout);
      if (requestId === weatherRequestId) {
        weatherController = undefined;
        weatherButton.disabled = false;
        weatherButton.textContent = (toolCopy[document.documentElement.lang] || toolCopy.en).retry;
      }
    }
  };
  const loadLocalWeather = (forceDeviceLocation = false) => {
    const requestId = ++weatherRequestId;
    weatherController?.abort();
    weatherController = undefined;
    const copy = toolCopy[document.documentElement.lang] || toolCopy.en;
    setWeatherFetchStatus(copy.loadingWeather, 'loading');
    weatherButton.disabled = true;
    weatherButton.textContent = copy.loadingWeather;
    if (!forceDeviceLocation && savedWeatherPlace) {
      fetchWeatherAt(savedWeatherPlace, weatherPlaceLabel(savedWeatherPlace), requestId);
      return;
    }
    if (!navigator.geolocation) {
      setWeatherFetchStatus(copy.locationUnavailable, 'error');
      weatherButton.disabled = false;
      weatherButton.textContent = copy.retry;
      return;
    }
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      fetchWeatherAt(coords, '', requestId);
    }, (error) => {
      if (requestId !== weatherRequestId) return;
      console.warn('Could not get location for local weather:', error.message);
      setWeatherFetchStatus(copy.locationDenied, 'error');
      weatherButton.disabled = false;
      weatherButton.textContent = copy.retry;
    }, { enableHighAccuracy: false, timeout: 10_000, maximumAge: 15 * 60 * 1000 });
  };
  weatherPlaceForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = weatherPlaceInput.value.trim();
    const copy = toolCopy[document.documentElement.lang] || toolCopy.en;
    if (query.length < 2) {
      weatherLocationStatus.textContent = copy.placePlaceholder;
      weatherLocationStatus.hidden = false;
      return;
    }
    weatherGeocodeController.current?.abort();
    const controller = new AbortController();
    weatherGeocodeController.current = controller;
    weatherLocationStatus.textContent = copy.loadingWeather;
    weatherLocationStatus.hidden = false;
    weatherPlaceChoice.hidden = true;
    let searchTimedOut = false;
    const searchTimeout = window.setTimeout(() => {
      searchTimedOut = true;
      controller.abort();
    }, 12_000);
    try {
      const params = new URLSearchParams({ name: query, count: '8', language: document.documentElement.lang, format: 'json' });
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${params}`, { signal: controller.signal });
      if (!response.ok) throw new Error('Place search failed');
      const data = await response.json();
      geocodeResults = Array.isArray(data.results) ? data.results.filter((place) => weatherNumber(place.latitude)
        && Math.abs(place.latitude) <= 90 && weatherNumber(place.longitude) && Math.abs(place.longitude) <= 180 && typeof place.name === 'string') : [];
      if (!geocodeResults.length) {
        weatherLocationStatus.textContent = copy.noPlaces;
        weatherLocationStatus.hidden = false;
        return;
      }
      weatherPlaceResults.replaceChildren(...geocodeResults.map((place, index) => {
        const option = document.createElement('option');
        option.value = String(index);
        option.textContent = weatherPlaceLabel(place);
        return option;
      }));
      weatherPlaceChoice.hidden = false;
      weatherLocationStatus.textContent = '';
      weatherLocationStatus.hidden = true;
    } catch (error) {
      if (!controller.signal.aborted || searchTimedOut) {
        if (searchTimedOut) console.warn('Weather location search timed out.');
        else console.error('Could not search for a weather location:', error);
        weatherLocationStatus.textContent = copy.weatherUnavailable;
        weatherLocationStatus.hidden = false;
      }
    } finally {
      window.clearTimeout(searchTimeout);
    }
  });
  document.querySelector('#weather-use-place').addEventListener('click', () => {
    const place = geocodeResults[Number(weatherPlaceResults.value)];
    if (!place) return;
    savedWeatherPlace = { name: place.name, admin1: place.admin1 || '', country: place.country || '', latitude: place.latitude, longitude: place.longitude };
    try {
      localStorage.setItem('kisaanSathiWeatherPlace', JSON.stringify(savedWeatherPlace));
    } catch (error) {
      console.warn('Could not save selected weather location:', error.message);
    }
    document.querySelector('#weather-device-location').hidden = false;
    weatherPlaceChoice.hidden = true;
    weatherLocationStatus.textContent = '';
    weatherLocationStatus.hidden = true;
    loadLocalWeather();
  });
  document.querySelector('#weather-device-location').addEventListener('click', () => {
    savedWeatherPlace = undefined;
    document.querySelector('#weather-device-location').hidden = true;
    try {
      localStorage.removeItem('kisaanSathiWeatherPlace');
    } catch (error) {
      console.warn('Could not clear saved weather location:', error.message);
    }
    loadLocalWeather(true);
  });
  const updateWeatherPreferences = () => {
    weatherPreferences.temperature = weatherTemperatureUnit.value;
    weatherPreferences.wind = weatherWindUnit.value;
    saveWeatherPreferences();
    if (currentWeatherData) renderWeather(currentWeatherData, activeWeatherLocation);
  };
  weatherTemperatureUnit.addEventListener('change', updateWeatherPreferences);
  weatherWindUnit.addEventListener('change', updateWeatherPreferences);
  weatherDataSaver.addEventListener('change', () => {
    weatherPreferences.dataSaver = weatherDataSaver.checked;
    saveWeatherPreferences();
  });
  weatherButton?.addEventListener('click', () => loadLocalWeather());
  document.querySelector('#weather-device-location').hidden = !savedWeatherPlace;
  loadLocalWeather();
  window.setInterval(() => {
    if (!weatherPreferences.dataSaver) loadLocalWeather();
  }, 15 * 60 * 1000);
  updateToolLanguage();
  document.querySelector('#knowledge-search')?.addEventListener('input', (event) => { const term = event.target.value.toLowerCase().trim(); document.querySelectorAll('.knowledge-card').forEach((card) => { card.hidden = Boolean(term) && !`${card.dataset.search} ${card.textContent}`.toLowerCase().includes(term); }); });

  const cta = document.querySelector('.cta-band');
  if (cta && !cta.querySelector('.whatsapp-link')) { const link = document.createElement('a'); link.className = 'whatsapp-link'; link.href = `https://wa.me/918081392456?text=${encodeURIComponent('Hello Kisaan Sathi, I need farming support.')}`; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Message us on WhatsApp'; cta.querySelector('div')?.append(link); }

  const offlineStatus = document.createElement('div'); offlineStatus.className = 'offline-status'; offlineStatus.hidden = true; offlineStatus.setAttribute('role', 'status'); document.body.append(offlineStatus);
  const updateConnection = () => { offlineStatus.textContent = navigator.onLine ? 'Back online' : 'You are offline - saved pages remain available'; offlineStatus.hidden = navigator.onLine; }; window.addEventListener('online', updateConnection); window.addEventListener('offline', updateConnection); updateConnection();
  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') navigator.serviceWorker.register('service-worker.js').catch(() => {});
})();
