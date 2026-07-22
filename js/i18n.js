/* NoorAsk - Internationalization (i18n) | v1.0
 * Default language: Bengali (bn)
 * Toggle language: English (en)
 * Persisted via localStorage
 */

(function() {
  'use strict';

  var translations = {
    /* ============ BENGALI (DEFAULT) ============ */
    bn: {
      /* --- Language Switcher --- */
      'lang.bn': 'বাংলা',
      'lang.en': 'English',

      /* --- Navigation --- */
      'nav.home': 'হোম',
      'nav.about': 'পরিচিতি',
      'nav.partnership': 'অংশীদারিত্ব',
      'nav.representatives': 'প্রতিনিধি',
      'nav.transparency': 'স্বচ্ছতা',
      'nav.faq': 'সাধারণ প্রশ্ন',
      'nav.contact': 'যোগাযোগ',

      /* --- Common Buttons --- */
      'btn.partner': 'মসজিদের সাথে অংশীদারি করুন',
      'btn.learnMore': 'আরও জানুন',
      'btn.becomeRep': 'প্রতিনিধি হোন',
      'btn.apply': 'আবেদন করুন',
      'btn.hideForm': 'ফর্ম লুকান',
      'btn.comingSoon': 'শীঘ্রই আসছে',

      /* --- Free Badge --- */
      'badge.free': '১০০% ফ্রি',

      /* --- Footer --- */
      'footer.tagline': 'নূরআস্ক — যেকোনো সময়, যেকোনো জায়গায় ইমামের কাছে নির্ভয়ে প্রশ্ন করুন। সত্যের আলো পৌঁছে যাক প্রতিটি লুকানো সংগ্রামে।',
      'footer.sitemap': 'সাইটম্যাপ',
      'footer.legal': 'আইনি',
      'footer.privacy': 'গোপনীয়তা নীতি',
      'footer.terms': 'ব্যবহারের শর্তাবলী',
      'footer.copyright': '© ২০২৬ নূরআস্ক। সর্বস্বত্ব সংরক্ষিত।',

      /* ============ HOME PAGE ============ */
      'home.metaDesc': 'নূরআস্ক — একটি মোবাইল অ্যাপ যা মসজিদ ও মুসল্লিদের মাঝে সেতুবন্ধন তৈরি করে। আপনার মসজিদের সাথে অংশীদারি করে মুসল্লিদের নির্ভয়ে প্রশ্ন জিজ্ঞাসার সুযোগ দিন।',
      'home.title': 'নূরআস্ক — মসজিদ ও মুসল্লিদের মাঝে সেতুবন্ধন',
      'home.hero.title': 'নূরআস্ক',
      'home.hero.tagline': 'যে প্রশ্নগুলো মুখে বলা কঠিন — এখন নির্ভয়ে জিজ্ঞাসা করুন',
      'home.hero.sub': 'নামে বা নাম ছাড়া — আপনার মসজিদের ইমাম সরাসরি উত্তর দেন। মসজিদ ও মুসল্লিদের মাঝে এক নতুন সেতুবন্ধন, যা আল্লাহর সাহায্যে গভীর থেকে গভীরতর পথনির্দেশনা এনে দেয়।',
      'home.hero.desc': 'জীবনের গভীরতম প্রশ্নগুলো প্রায়ই সবচেয়ে কঠিন হয়ে দাঁড়ায় মুখে বলার মতো। নূরআস্ক এমন এক নিরাপদ স্থান তৈরি করে — আপনার নাম বলুন বা নাম গোপন রাখুন, আপনার ইমামের পথনির্দেশনা আপনার কাছে পৌঁছে যাবে। আমরা মসজিদের সাথে একত্রে এই ঈমান ও সেবার নেটওয়ার্ক গড়ে তুলছি।',

      'home.howitworks.title': 'নূরআস্ক অ্যাপ কীভাবে কাজ করে',
      'home.howitworks.subtitle': 'ইমামগণ পথনির্দেশনা দেন, অ্যাপটি সেই পথনির্দেশনা পৌঁছে দেয়। অংশীদারি মসজিদগুলোই এর কেন্দ্রে।',
      'home.howitworks.step1.title': '১. ব্যবহারকারী প্রশ্ন করেন',
      'home.howitworks.step1.desc': 'একজন মুসল্লি অ্যাপ খুলে যেকোনো প্রশ্ন করেন — ঈমান, বিবাহ, দৈনন্দিন জীবনের সংগ্রাম। পছন্দ তাঁর: নামে বা নাম ছাড়া। কোনো লজ্জা নেই, কোনো বাধা নেই।',
      'home.howitworks.step2.title': '২. স্মার্ট মিলিয়ে দেখা',
      'home.howitworks.step2.desc': 'অ্যাপটি তার উত্তর-ভাণ্ডার খুঁজে দেখে — শুরুতে থাকে ইমামদের লেখা ৪০০+ পূর্বপ্রস্তুত প্রশ্নোত্তর, যা প্রতিটি নতুন উত্তরে বাড়তে থাকে। মিল পেলেই উত্তর সরাসরি পৌঁছে যায়।',
      'home.howitworks.step3.title': '৩. ইমাম উত্তর দেন',
      'home.howitworks.step3.desc': 'পূর্বপ্রস্তুত উত্তর না থাকলে প্রশ্নটি অংশীদারি মসজিদের ইমামের কাছে যায়। ব্যবহারকারী চাইলে তাঁর বিশ্বস্ত কোনো নির্দিষ্ট ইমামকেও বেছে নিতে পারেন।',
      'home.howitworks.step4.title': '৪. জীবন বদলায় এমন পথনির্দেশনা',
      'home.howitworks.step4.desc': 'যেসব প্রশ্ন সরাসরি করা কঠিন, সেগুলোর উত্তর এখন পাওয়া যায়। আপনার ইমামের পথনির্দেশনা আরও দূর পর্যন্ত পৌঁছায় — সম্প্রদায় আরও সমর্থিত অনুভব করে।',

      'home.why.title': 'কেন এটি গুরুত্বপূর্ণ',
      'home.why.subtitle': 'জীবনে এমন অনেক প্রশ্ন আছে যা মুখে বলা কঠিন।',
      'home.why.p1': 'বৈবাহিক সমস্যা, আর্থিক সংশয়, রূহানি বিভ্রান্তি — এমন অনেক ব্যক্তিগত সংগ্রাম যা শেয়ার করতে লজ্জা লাগে। অনেক মুসলিম নীরবে কষ্ট ভোগ করেন — ঈমানের অভাবে নয়, বরং বিচারের ভয়ে কাউকে জিজ্ঞাসা করার মতো কেউ নেই বলে।',
      'home.why.p2': 'একজন তরুণী মা প্রসবোত্তর উদ্বেগে ভুগছেন, ভাবছেন এমনটা অনুভব করা পাপ কি না। ঋণের বোঝায় ক্লান্ত একজন পিতা বুঝতে পারছেন না নির্দিষ্ট একটি ঋণ হালাল কি না। একজন কিশোর তাঁর ঈমান নিয়ে প্রশ্ন তুলছে কিন্তু মসজিদে কারও সাথে কথা বলতে ভয় পাচ্ছে।',
      'home.why.p3': 'নূরআস্ক সেই বাধা ভেঙে দেয়।',
      'home.why.p4': 'এক ট্যাপে তাঁরা নির্ভয়ে প্রশ্ন করেন (নামে বা নাম ছাড়া)। আপনার ইমাম জ্ঞান ও সহানুভূতির সাথে উত্তর দেন। কোনো অস্বস্তি নেই, কোনো লজ্জা নেই — কেবল প্রয়োজনের সময় পথনির্দেশনা। এটিই একটি সম্প্রদায়কে সত্যিকারের গভীরে সমৃদ্ধ করে তোলে।',

      'home.vision.title': 'আমাদের স্বপ্ন',
      'home.vision.subtitle': 'আমরা বাংলাদেশ জুড়ে ঈমান ও জ্ঞানের এক নেটওয়ার্ক গড়ছি',
      'home.vision.stat1n': '১০০+',
      'home.vision.stat1l': 'টার্গেট অংশীদারি মসজিদ',
      'home.vision.stat2n': '৫০,০০০+',
      'home.vision.stat2l': 'সেবার জন্য সম্প্রদায়',
      'home.vision.stat3n': '১৫',
      'home.vision.stat3l': 'শহর',
      'home.vision.stat4n': '∞',
      'home.vision.stat4l': 'উত্তর দেওয়ার মতো প্রশ্ন',

      'home.cta.title': 'আপনার মসজিদকে সাথে নিতে প্রস্তুত?',
      'home.cta.subtitle': 'নূরআস্ক মসজিদের সাথে একত্রে গড়ে ওঠে। যোগ দিন এবং আপনার সম্প্রদায়কে অ্যাপের মাধ্যমে সেবা দিন। অংশীদারিত্ব সম্পূর্ণ ফ্রি।',

      /* ============ ABOUT PAGE ============ */
      'about.metaDesc': 'নূরআস্ক সম্পর্কে — মসজিদ ও মুসল্লিদের মাঝে সেতুবন্ধন তৈরি করে এমন একটি মোবাইল অ্যাপ। আপনার মসজিদের সাথে অংশীদারি করে জীবন বদলানো পথনির্দেশনা দিন।',
      'about.title': 'নূরআস্ক সম্পর্কে',
      'about.hero.tagline': 'যে প্রশ্নগুলো মুখে বলা কঠিন — এখন নির্ভয়ে জিজ্ঞাসা করুন',
      'about.hero.sub': 'সত্যের আলো পৌঁছে যাক প্রতিটি লুকানো সংগ্রামে — আপনার ইমামের পথনির্দেশনা, সর্বদা আপনার কাছে।',

      'about.mission.title': 'আমাদের মিশন',
      'about.mission.p1': 'নূরআস্ক একটি মোবাইল অ্যাপ — মসজিদ ও মুসল্লিদের মাঝে এক সেতুবন্ধন। এটি গড়ে তুলেছে Jovi & Josh Waresoft Studio। আমরা বিশ্বাস করি, প্রতিটি মুসলিমের এমন এক নিরাপদ স্থান পাওয়ার অধিকার আছে যেখানে তিনি নির্ভয়ে (নামে বা নাম ছাড়া) জীবনের কঠিন প্রশ্নগুলো জিজ্ঞাসা করতে পারেন — এবং বিশ্বস্ত ইমামের কাছ থেকে উত্তর পেতে পারেন।',
      'about.mission.p2': 'অনেক সংগ্রাম অপ্রকাশিত থেকে যায়। বৈবাহিক সমস্যা, আর্থিক সংশয়, রূহানি বিভ্রান্তি — মানুষ নীরবে কষ্ট ভোগ করে, কারণ বিচারের ভয় ছাড়া কাউকে জিজ্ঞাসা করার মতো জানে না। নূরআস্ক সেই বাধা ভেঙে দেয়। এক ট্যাপে যে কেউ নির্ভয়ে প্রশ্ন করতে পারেন এবং সহানুভূতিশীল, জ্ঞানভিত্তিক পথনির্দেশনা পেতে পারেন।',
      'about.mission.p3': 'আমরা প্রথমে বাংলাদেশে চালু করছি, মসজিদের সাথে অংশীদারি করে এমন এক নেটওয়ার্ক গড়ছি যেখানে ইমামগণ তাঁদের সম্প্রদায়ের সেবায় প্রস্তুত। অ্যাপটি মসজিদের সাথে একত্রে গড়ে ওঠে — শুরুতে ইমামদের সাথে মিলে ৪০০+ পূর্বপ্রস্তুত প্রশ্নোত্তর তৈরি করা হয়, যা প্রতিটি নতুন উত্তরে বাড়তে থাকে। মিল পাওয়া গেলে উত্তর সরাসরি পৌঁছায়, না হলে নিকটস্থ অংশীদারি মসজিদের ইমামের কাছে যায়। ব্যবহারকারী চাইলে নির্দিষ্ট ইমামকেও বেছে নিতে পারেন।',
      'about.mission.p4': 'আমাদের প্ল্যাটফর্ম গড়ে ওঠে সহজলভ্যতা, গোপনীয়তা ও সম্প্রদায়ের নীতিতে। প্রতিটি প্রশ্ন নাম ছাড়াও করা যায় (নামে বা নাম ছাড়া)। প্রতিটি উত্তর প্রামাণিক ইসলামিক জ্ঞানের ওপর প্রতিষ্ঠিত। প্রতিটি অংশীদারি মসজিদ তাঁদের পৌঁছানোর পরিধি দেয়ালের বাইরে পর্যন্ত বিস্তার করে।',

      'about.features.title': 'অংশীদারি মসজিদ যা পায়',
      'about.features.subtitle': 'আপনার সম্প্রদায়ের সাথে সংযোগ বাড়াতে ফ্রি টুল',
      'about.features.f1': 'ডিজিটাল মসজিদ প্রোফাইল: আপনার মসজিদের জন্য একটি বিশেষ পৃষ্ঠা — নামাজের সময়, ইভেন্ট, ঘোষণা ও ইমাম পরিচিতি সহ। নিকটস্থ প্রতিটি অ্যাপ ব্যবহারকারীর কাছে দৃশ্যমান।',
      'about.features.f2': 'ইমাম প্রশ্নোত্তর চ্যানেল: আপনার ইমাম প্ল্যাটফর্মের মাধ্যমে সরাসরি সম্প্রদায়ের প্রশ্নের উত্তর দিতে পারেন — যেকোনো সময়, যেকোনো জায়গা থেকে।',
      'about.features.f3': 'সম্প্রদায় ড্যাশবোর্ড: দেখুন কতজন আপনার মসজিদের সাথে যুক্ত, কী প্রশ্ন করছেন, এবং আপনার সম্প্রদায় কীভাবে বাড়ছে।',
      'about.features.f4': 'খুতবা ও ঘোষণা সম্প্রচার: জুমার খুতবা, ইভেন্ট বিজ্ঞপ্তি ও ধর্মীয় অনুস্মারক সরাসরি আপনার সম্প্রদায়ের কাছে পৌঁছে দিন।',
      'about.features.f5': 'স্বচ্ছ তহবিল সংগ্রহ (ঐচ্ছিক): সমর্থকদের কাছ থেকে স্বেচ্ছায় দান গ্রহণ করুন — সম্পূর্ণ স্বচ্ছতায়, প্রতিটি টাকা হিসাবভুক্ত।',

      'about.team.title': 'আমাদের টিম',
      'about.team.subtitle': 'উম্মাহর সেবায় নিয়োজিত একনিষ্ঠ পেশাদার',
      'about.team.jovi.role': 'প্রোডাক্ট ম্যানেজার',
      'about.team.jovi.bio': 'সাবেক সিনিয়র প্রোডাক্ট ম্যানেজার; লক্ষাধিক ব্যবহারকারীর শিক্ষা প্রোডাক্ট পরিচালনার অভিজ্ঞতা।',
      'about.team.josh.role': 'ব্যাকএন্ড ডেভেলপার',
      'about.team.josh.bio': 'API ডিজাইন ও AI ইন্টিগ্রেশনে বিশেষজ্ঞ; RAG সিস্টেমে দক্ষ।',
      'about.team.ciki.role': 'ফ্রন্টএন্ড ডেভেলপার',
      'about.team.ciki.bio': 'Flutter ও ওয়েব ডেভেলপমেন্টে অভিজ্ঞ; সুন্দর ব্যবহারকারী অভিজ্ঞতা তৈরিতে দক্ষ।',
      'about.team.samu.role': 'বাংলাদেশ সংযোগ প্রতিনিধি',
      'about.team.samu.bio': 'আমাদের প্রথম স্থানীয় প্রতিনিধি; বাংলাদেশের বিভিন্ন মসজিদের সাথে সেতুবন্ধন গড়ছেন।',

      /* ============ PARTNERSHIP PAGE ============ */
      'partner.metaDesc': 'আপনার মসজিদকে নূরআস্কের সাথে যুক্ত করুন। ফ্রি ডিজিটাল উপস্থিতি, ইমাম প্রশ্নোত্তর প্ল্যাটফর্ম, এবং আপনার মসজিদের জন্য সম্প্রদায় সংযোগ টুল।',
      'partner.title': 'মসজিদ অংশীদারিত্ব',
      'partner.hero.tagline': 'আপনার সম্প্রদায়কে এক নিরাপদ স্থান দিন — নির্ভয়ে প্রশ্ন করার, এবং আপনার ইমামের পথনির্দেশনা পাওয়ার',

      'partner.value.title': 'কেন আমাদের সাথে অংশীদারি করবেন?',
      'partner.value.subtitle': 'প্রথমে মুসল্লিদের জন্য মূল্য তৈরি হয় — তারপর মসজিদও লাভবান হয়। মুসল্লি যদি অ্যাপ পছন্দ করেন, তবেই মসজিদের সাথে তাঁদের সংযোগ গভীর হয়।',
      'partner.value.userFirst': 'ব্যবহারকারীর মূল্য আগে',
      'partner.value.userFirstDesc': 'মুসল্লিরা যা পান: নির্ভয়ে প্রশ্ন করার সুযোগ, নামে বা নাম ছাড়া। অনেক প্রশ্ন সরাসরি করা কঠিন — নূরআস্ক সেই লজ্জা দূর করে। যখন ব্যবহারকারী অ্যাপকে ভালোবাসেন, তখনই তাঁরা আপনার মসজিদের সাথে আরও গভীরভাবে যুক্ত হন।',
      'partner.value.cocreate.title': 'অ্যাপ মসজিদের সাথে একত্রে গড়ে ওঠে',
      'partner.value.cocreateDesc': 'আপনার ইমামগণই প্রকৃত বিশেষজ্ঞ। অ্যাপ চালু হওয়ার আগে আমরা আপনার ইমামদের সাথে মিলে ৪০০+ মৌলিক প্রশ্নোত্তর তৈরি করি। চালু হওয়ার পরে ইমামগণ কেবল নিজ মসজিদের আশপাশের মুসল্লিদের প্রশ্নের উত্তর দেন।',
      'partner.value.bridge.title': 'মসজিদ-মুসল্লি সেতুবন্ধন',
      'partner.value.bridgeDesc': 'অ্যাপটি হলো মসজিদ ও মুসল্লিদের মাঝে এক নতুন সেতু। মুসল্লিরা আসলে আপনার সম্প্রদায়েরই অংশ — কিছু প্রশ্ন তাঁরা সরাসরি করতে পারেন, আর কিছু প্রশ্ন যা মুখে বলা কঠিন, সেগুলো অ্যাপে করেন। নামে হোক বা নাম ছাড়া — ইমামের পথনির্দেশনা পৌঁছে যায়।',
      'partner.value.depth.title': 'গভীরতর পৌঁছানোর পরিধি',
      'partner.value.depthDesc': 'মসজিদের সাথে মুসল্লিদের সংযোগ আরও গভীর হয়। যাঁরা মসজিদে আসেন, তাঁরা আরও সমর্থিত অনুভব করেন; যাঁরা আসতে পারেন না, তাঁরাও ইমামের পথনির্দেশনা থেকে উপকৃত হন। আল্লাহর সাহায্যে গভীরতর পথনির্দেশনা পৌঁছে যায়।',
      'partner.value.free.title': '১০০% ফ্রি',
      'partner.value.freeDesc': 'যোগ দেওয়া, অ্যাপ ব্যবহার, ইমামের উত্তর — সবকিছুই সম্পূর্ণ ফ্রি। আমরা জনকল্যাণমূলক মডেলে পরিচালিত; মসজিদ থেকে কোনো ফি নেওয়া হয় না। দান সম্পূর্ণ ঐচ্ছিক — কোনো চাপ নেই।',

      'partner.process.title': 'অংশীদারিত্বের প্রক্রিয়া',
      'partner.process.subtitle': 'নূরআস্ক নেটওয়ার্কে যোগ দেওয়ার সহজ ধাপসমূহ',
      'partner.process.step1': 'আবেদন পূরণ',
      'partner.process.step2': 'পর্যালোচনা ও অনুমোদন',
      'partner.process.step3': 'অনলাইন চুক্তি স্বাক্ষর',
      'partner.process.step4': 'বিষয়বস্তু প্রস্তুতি',
      'partner.process.step5': 'চালু ও প্রচার',

      'partner.apply.title': 'অংশীদারি করতে প্রস্তুত?',
      'partner.apply.subtitle': 'অংশীদারিত্বের আবেদন ফর্ম শীঘ্রই এখানে আসবে। এখন আমাদের সাথে সরাসরি যোগাযোগ করুন।',
      'partner.apply.contactInstead': 'যোগাযোগ পৃষ্ঠায় যান',
      'partner.sign.title': 'অনলাইন অংশীদারি চুক্তি',
      'partner.sign.subtitle': 'অনুমোদিত হলে আপনার অংশীদারি চুক্তি নিরাপদে অনলাইনে স্বাক্ষর করুন',
      'partner.sign.placeholder': 'অনলাইন অংশীদারি চুক্তি স্বাক্ষর শীঘ্রই এখানে উপলব্ধ হবে',

      /* ============ REPRESENTATIVES PAGE ============ */
      'rep.metaDesc': 'নূরআস্ক প্রতিনিধি হোন। আপনার এলাকার মসজিদগুলোকে প্ল্যাটফর্মে যুক্ত করতে সাহায্য করুন এবং সম্প্রদায়ের সেবা করুন।',
      'rep.title': 'নূরআস্ক অফিসিয়াল প্রতিনিধি',
      'rep.hero.tagline': 'নূরআস্ক অফিসিয়াল প্রতিনিধি হোন — অ্যাপের মাধ্যমে মসজিদকে তাদের সম্প্রদায়ের সেবায় সহায়তা করুন',

      'rep.role.title': 'আপনার দায়িত্ব',
      'rep.role.subtitle': 'নূরআস্ক নেটওয়ার্ক বাড়াতে চারটি মূল ভূমিকা',
      'rep.role.r1.title': 'স্থানীয় প্রচার',
      'rep.role.r1.desc': 'সম্প্রদায়ের ইভেন্ট, সোশ্যাল মিডিয়া ও মুখে মুখে আপনার শহর বা জেলায় নূরআস্ক সম্পর্কে সচেতনতা ছড়িয়ে দিন।',
      'rep.role.r2.title': 'মসজিদ সংযোগ',
      'rep.role.r2.desc': 'এমন মসজিদগুলো খুঁজে বের করুন যারা নূরআস্কের সাথে অংশীদারি করে উপকৃত হবে। তাদের কাছে প্ল্যাটফর্ম ও এর মূল্য তুলে ধরুন।',
      'rep.role.r3.title': 'স্বাক্ষর সহায়তা',
      'rep.role.r3.desc': 'মসজিদগুলোকে অংশীদারি আবেদন পূরণে সাহায্য করুন এবং অনলাইন চুক্তি স্বাক্ষর প্রক্রিয়ায় পথ দেখান।',
      'rep.role.r4.title': 'প্রশ্নোত্তর সহায়তা',
      'rep.role.r4.desc': 'আপনার এলাকার অংশীদারি মসজিদের প্রথম যোগাযোগ বিন্দু হোন — সাধারণ প্রশ্নের উত্তর দিন এবং প্রয়োজনে প্রধান দলের কাছে পাঠান।',

      'rep.comp.title': 'ক্ষতিপূরণ',
      'rep.comp.subtitle': 'নূরআস্ক একটি জনকল্যাণমূলক প্রকল্প — আপনার প্রচেষ্টায় দান এলে আপনি একটি অংশ পান',
      'rep.comp.rate': '২০%',
      'rep.comp.rateDesc': 'আপনার অংশীদারি মসজিদের মাধ্যমে সংগৃহীত দানের কমিশন',
      'rep.comp.detail': 'নূরআস্ক একটি জনকল্যাণমূলক প্রকল্প। আপনার আনা অংশীদারি মসজিদগুলো যদি দান সংগ্রহে সাহায্য করে, তবে আপনার প্রচেষ্টার জন্য দানের ২০% আপনাকে কমিশন হিসেবে প্রদান করা হবে। দান না এলে কমিশন নেই — কোনো চাপ নেই, কেবল সম্প্রদায়ের প্রতি সৎ সেবা।',

      'rep.cta.title': 'প্রতিনিধি হোন',
      'rep.cta.subtitle': 'মসজিদগুলোকে নূরআস্কের সাথে যুক্ত করতে সাহায্য করুন। এটি একটি জনকল্যাণমূলক প্রকল্প — দান এলে আপনি ২০% পান।',
      'rep.cta.placeholder': 'প্রতিনিধি আবেদন ফর্ম শীঘ্রই এখানে আসবে। এখন যোগাযোগ পৃষ্ঠায় যান।',

      /* ============ TRANSPARENCY PAGE ============ */
      'trans.metaDesc': 'নূরআস্ক স্বচ্ছতা — অংশীদারি মসজিদের দান কীভাবে সংগৃহীত, ট্র্যাক ও ব্যবহৃত হয় তা সম্পূর্ণ জবাবদিহিতায় দেখুন।',
      'trans.title': 'স্বচ্ছতা',
      'trans.hero.tagline': 'নূরআস্ক সকল তহবিল সংগ্রহ ও ব্যয়ে সম্পূর্ণ স্বচ্ছতার অঙ্গীকার করে',

      'trans.commit.title': 'আমাদের অঙ্গীকার',
      'trans.commit.p1': 'নূরআস্ক একটি জনকল্যাণমূলক প্ল্যাটফর্ম। আমরা বিশ্বাস করি, বিশ্বাস গড়ে ওঠে স্বচ্ছতা থেকে। আমরা অংশীদারি মসজিদগুলোকে অ্যাপের জন্য দান সংগ্রহে উৎসাহিত করি — আপনার সম্প্রদায়ের প্রতিটি অবদান সম্পূর্ণ স্বচ্ছতায় ট্র্যাক ও প্রতিবেদন করা হয়।',
      'trans.commit.p2': 'যেসব মসজিদ অংশ নিতে চান তারা তাদের মুসল্লিদের নূরআস্কে দান করতে উৎসাহিত করতে পারেন। প্রতিটি টাকা হিসাবভুক্ত থাকে, এবং তহবিল সরাসরি আপনার সম্প্রদায়ের সেবাকারী প্ল্যাটফর্ম গড়তে ও রক্ষণাবেক্ষণে ব্যয় হয়। কোনো প্রশ্ন থাকলে যোগাযোগ করুন।',
      'trans.commit.optional': 'দান সম্পূর্ণ ঐচ্ছিক — কোনো চাপ নেই।',

      'trans.plan.title': 'অংশীদারি মসজিদ কীভাবে সাহায্য করতে পারে',
      'trans.plan.subtitle': 'আপনার মসজিদ সম্প্রদায়কে দানে উৎসাহিত করতে পারে — প্রতিটি অবদান সম্পূর্ণ স্বচ্ছ',
      'trans.plan.target': 'পর্যায় ১ লক্ষ্য:',
      'trans.plan.targetDesc': 'নূরআস্ক অ্যান্ড্রয়েড অ্যাপ গড়ে তোলা ও প্রথম অংশীদারি মসজিদের সাথে চালু করা',

      'trans.alloc.title': 'তহবিল কীভাবে ব্যবহৃত হয়',
      'trans.alloc.subtitle': 'প্রতিটি দান চারটি মূল ক্ষেত্রে দায়িত্বশীলভাবে বণ্টিত হয়',
      'trans.alloc.dev.title': 'প্রোডাক্ট ডেভেলপমেন্ট',
      'trans.alloc.dev.desc': 'নূরআস্ক প্ল্যাটফর্ম গড়া ও রক্ষণাবেক্ষণ — মোবাইল অ্যাপ, ওয়েব অবকাঠামো, AI সিস্টেম।',
      'trans.alloc.content.title': 'বিষয়বস্তু প্রস্তুতি',
      'trans.alloc.content.desc': 'ইসলামিক শিক্ষামূলক বিষয়বস্তু তৈরি, অনুবাদ ও মাল্টিমিডিয়া সম্পদ উৎপাদন — ইমামদের সাথে একত্রে।',
      'trans.alloc.marketing.title': 'প্রচার',
      'trans.alloc.marketing.desc': 'সম্প্রদায় সংযোগ, প্রতিনিধি সহায়তা, মসজিদ অনবোর্ডিং ও সচেতনতা ক্যাম্পেইন।',
      'trans.alloc.ops.title': 'পরিচালনা',
      'trans.alloc.ops.desc': 'প্রশাসনিক ব্যয়, আইনি সম্মতি, হিসাব রক্ষণ ও প্ল্যাটফর্ম নিরাপত্তা।',

      /* ============ FAQ PAGE ============ */
      'faq.metaDesc': 'সাধারণ প্রশ্ন — নূরআস্ক মসজিদ অংশীদারিত্ব সম্পর্কে। যোগ দেওয়া, বিষয়বস্তু, প্রযুক্তি, তহবিল ও প্রতিনিধি সম্পর্কিত প্রশ্নোত্তর।',
      'faq.title': 'সাধারণ প্রশ্ন',
      'faq.hero.tagline': 'নির্ভয়ে ইমামের কাছে প্রশ্ন ও মসজিদ অংশীদারিত্ব সম্পর্কে যা জানা দরকার',

      'faq.cat.partnership': 'অংশীদারিত্ব',
      'faq.cat.content': 'বিষয়বস্তু',
      'faq.cat.technology': 'প্রযুক্তি',
      'faq.cat.finance': 'অর্থ',
      'faq.cat.rep': 'প্রতিনিধি',

      'faq.p1.q': 'একটি মসজিদ কীভাবে নূরআস্কের সাথে অংশীদারি করে?',
      'faq.p1.a': 'মসজিদ আমাদের সাথে যোগাযোগ করে অংশীদারি শুরু করতে পারে। আমাদের দল মসজিদের সাথে কথা বলে প্ল্যাটফর্ম ও অংশীদারিত্বের সুযোগ তুলে ধরে। আবেদন ফর্ম শীঘ্রই উপলব্ধ হবে — এখন যোগাযোগ পৃষ্ঠা ব্যবহার করুন।',
      'faq.p2.q': 'মসজিদের যোগ দেওয়ার কোনো খরচ আছে কি?',
      'faq.p2.a': 'না। নূরআস্কে অংশীদারি মসজিদ হিসেবে যোগ দেওয়া সম্পূর্ণ ফ্রি। আমরা জনকল্যাণমূলক মডেলে পরিচালিত; মসজিদ থেকে কোনো ফি নেওয়া হয় না।',
      'faq.p3.q': 'মসজিদের কী তথ্য দিতে হয়?',
      'faq.p3.a': 'মসজিদের সাধারণ তথ্য (নাম, ঠিকানা, যোগাযোগ), ইমাম পরিচিতি, নামাজের সময় এবং আপনার সেবার সম্প্রদায় সম্পর্কে সংক্ষিপ্ত বিবরণ।',
      'faq.p4.q': 'মসজিদ কি যেকোনো সময় প্ল্যাটফর্ম ছাড়তে পারে?',
      'faq.p4.a': 'হ্যাঁ। অংশীদারিত্ব সম্পূর্ণ স্বেচ্ছাসেবী। ৩০ দিনের লিখিত নোটিশ দিলে মসজিদ যেকোনো সময় প্ল্যাটফর্ম ছাড়তে পারে।',

      'faq.c1.q': 'নূরআস্কের উত্তরগুলো কে দেন?',
      'faq.c1.a': 'নূরআস্কের সকল উত্তর আসে অংশীদারি মসজিদের যোগ্যতাসম্পন্ন ইমামদের কাছ থেকে। অ্যাপ চালুর সময় এতে থাকবে ইমামদের সাথে একত্রে তৈরি ৪০০+ পূর্বপ্রস্তুত প্রশ্নোত্তর — ঈমান, বিবাহ, দৈনন্দিন জীবন ইত্যাদি বিষয়ে — যাতে প্রথম দিন থেকেই ব্যবহারকারী তাৎক্ষণিক উত্তর পান। ইমামগণ নতুন প্রশ্নের উত্তর দিতে থাকলে উত্তর-ভাণ্ডার স্বাভাবিকভাবে বাড়তে থাকে — যত বেশি ইমাম উত্তর দেন, তত বেশি প্রশ্নের স্বয়ংক্রিয় মিল পাওয়া যায়। ব্যবহারকারী প্রশ্ন করলে অ্যাপ প্রথমে দেখে মিল আছে কি না। না থাকলে নিকটস্থ অংশীদারি মসজিদের ইমামের কাছে যায়। ব্যবহারকারী নির্দিষ্ট ইমামও বেছে নিতে পারেন। প্রতিটি উত্তর প্রামাণিক, কারণ তা সরাসরি যোগ্যতাসম্পন্ন ইমামের থেকে আসে।',
      'faq.c2.q': 'বিষয়বস্তু কি নির্ভুলতার জন্য যাচাই করা হয়?',
      'faq.c2.a': 'হ্যাঁ। প্রারম্ভিক ৪০০+ উত্তর যোগ্যতাসম্পন্ন ইমামগণ প্রস্তুত করেন এবং আমাদের বিষয়বস্তু দল পর্যালোচনা করে। অংশীদারি মসজিদের ইমামগণ নতুন প্রশ্নের উত্তর দিলে প্রতিটি উত্তর সেই আলেমের প্রামাণ্য বহন করে যিনি তা লিখেছেন। সকল বিষয়বস্তু কুরআন, সহীহ হাদিস ও প্রতিষ্ঠিত ইসলামিক জ্ঞানের ওপর প্রতিষ্ঠিত।',
      'faq.c3.q': 'কোন ভাষাগুলো সমর্থিত?',
      'faq.c3.a': 'বর্তমানে আমরা বাংলা ও ইংরেজি সমর্থন করি। আরবি বিষয়বস্তু (কুরআন, হাদিস) অনুবাদসহ প্রদর্শিত হয়। চাহিদার ভিত্তিতে ভাষা সমর্থন বাড়ানোর পরিকল্পনা রয়েছে।',

      'faq.t1.q': 'নূরআস্ক কি মোবাইল অ্যাপ হিসেবে উপলব্ধ?',
      'faq.t1.a': 'আমরা নূরআস্ক অ্যান্ড্রয়েড অ্যাপ গড়ছি। অ্যাপটি ব্যবহারকারীকে নামে বা নাম ছাড়া প্রশ্ন করার সুযোগ দেবে, ৪০০+ প্রশ্নোত্তর ভাণ্ডার থেকে স্বয়ংক্রিয় মিলিত উত্তর পাওয়ার সুবিধা দেবে, অথবা নিকটস্থ অংশীদারি মসজিদের ইমামের কাছে প্রশ্ন পাঠানোর সুবিধা দেবে। ব্যবহারকারী নির্দিষ্ট ইমামকেও বেছে নিতে পারবেন — যেকোনো সময়, তাঁদের ফোন থেকে।',
      'faq.t2.q': 'ব্যবহারকারীর তথ্য কীভাবে সুরক্ষিত হয়?',
      'faq.t2.a': 'আমরা শিল্পমানের এনক্রিপশন ব্যবহার করি এবং ব্যবহারকারীর তথ্য কখনো বিক্রি করি না। নাম ছাড়া প্রশ্ন কোনো ব্যক্তিগত শনাক্তকারীর সাথে যুক্ত হয় না। বিস্তারিত জানতে গোপনীয়তা নীতি দেখুন।',
      'faq.t3.q': 'প্ল্যাটফর্ম অফলাইন হলে কী হবে?',
      'faq.t3.a': 'আমরা Cloudflare ও রিডান্ড্যান্ট হোস্টিং ব্যবহার করে উচ্চ প্রাপ্যতা নিশ্চিত করি। বিরল ক্ষেত্রে ডাউনটাইম হলেও সকল তথ্য নিরাপদে ব্যাকআপ থাকে এবং পুনরুদ্ধার করা হবে।',

      'faq.f1.q': 'নূরআস্ক কীভাবে অর্থায়িত হয়?',
      'faq.f1.a': 'নূরআস্ক সম্প্রদায়ের স্বেচ্ছায় দান, ইসলামিক সংস্থার অনুদান ও কৌশলগত অংশীদারিত্বের মাধ্যমে অর্থায়িত। আমরা কোনো বিজ্ঞাপন প্রদর্শন করি না। তহবিল বণ্টনের বিস্তারিত স্বচ্ছতা পৃষ্ঠায় দেখুন।',
      'faq.f2.q': 'আমি কি নির্দিষ্ট মসজিদে দান করতে পারি?',
      'faq.f2.a': 'হ্যাঁ। দানের সময় আপনি নির্দিষ্ট অংশীদারি মসজিদ বেছে নিতে পারেন, অথবা সাধারণ প্ল্যাটফর্ম তহবিলে অবদান রাখতে পারেন।',
      'faq.f3.q': 'দান কি কর-ছাড়যোগ্য?',
      'faq.f3.a': 'কর-ছাড়যোগ্যতা আপনার এখতিয়ারের ওপর নির্ভর করে। আমরা মূল অঞ্চলে দাতব্য স্ট্যাটাস পেতে কাজ করছি। নির্দিষ্ট কাগজপত্রের জন্য যোগাযোগ করুন।',

      'faq.r1.q': 'কে নূরআস্ক অফিসিয়াল প্রতিনিধি হতে পারেন?',
      'faq.r1.a': 'সম্প্রদায়ে ভালো অবস্থান, নির্ভরযোগ্য ইন্টারনেট সংযোগ ও স্থানীয় মসজিদের সেবায় আগ্রহ আছে এমন যেকোনো একনিষ্ঠ মুসলিম আবেদন করতে পারেন। পূর্ববর্তী সম্প্রদায় অভিজ্ঞতা সহায়ক, কিন্তু আবশ্যক নয়।',
      'faq.r2.q': 'প্রতিনিধিদের কীভাবে ক্ষতিপূরণ দেওয়া হয়?',
      'faq.r2.a': 'নূরআস্ক একটি জনকল্যাণমূলক প্রকল্প। আপনার আনা অংশীদারি মসজিদগুলো যদি দান সংগ্রহে সাহায্য করে, তবে আপনার প্রচেষ্টার জন্য দানের ২০% কমিশন হিসেবে প্রদান করা হবে। দান না এলে কমিশন নেই — কেবল সম্প্রদায়ের প্রতি সৎ সেবা।',
      'faq.r3.q': 'প্রতিনিধিদের কীভাবে প্রশিক্ষণ দেওয়া হয়?',
      'faq.r3.a': 'অনুমোদিত প্রতিনিধিরা একটি ডিজিটাল অনবোর্ডিং কিট, ভিডিও প্রশিক্ষণ সেশন এবং একটি বিশেষ সহায়তা চ্যানেলে প্রবেশাধিকার পান। আমরা মাসিক ভার্চুয়াল মিটআপও আয়োজন করি।',
      'faq.r4.q': 'একজন প্রতিনিধি কি একাধিক শহরে সেবা দিতে পারেন?',
      'faq.r4.a': 'প্রাথমিকভাবে প্রতিনিধিরা মান নিশ্চিত করতে একটি শহর বা জেলায় মনোনিবেশ করেন। উচ্চ-পারফর্মিং প্রতিনিধিকে আঞ্চলিক ভূমিকায় পদোন্নতি দেওয়া হতে পারে।',

      /* ============ CONTACT PAGE ============ */
      'contact.metaDesc': 'নূরআস্কের সাথে যোগাযোগ — মসজিদ অংশীদারিত্ব অনুসন্ধান। আপনার মসজিদ যুক্ত করুন বা প্রতিনিধি হোন।',
      'contact.title': 'যোগাযোগ',
      'contact.hero.tagline': 'মসজিদকে সহানুভূতিশীল, নির্ভয় ইমামি পথনির্দেশনা পৌঁছে দিতে সাহায্য করুন',

      'contact.info.title': 'যোগাযোগ করুন',
      'contact.info.subtitle': 'নিচের যেকোনো মাধ্যমে যোগাযোগ করুন',
      'contact.info.lead.title': 'প্রজেক্ট লিড',
      'contact.info.lead.name': 'Jovi',
      'contact.info.lead.role': 'প্রোডাক্ট ম্যানেজার ও সহ-প্রতিষ্ঠাতা',
      'contact.info.email.title': 'ইমেইল',
      'contact.info.email.value': 'contact@noorask.online',
      'contact.info.email.note': '২ কর্মদিবসের মধ্যে উত্তর দেওয়া হয়',
      'contact.info.tg.title': 'টেলিগ্রাম',
      'contact.info.tg.value': 't.me/nooraskbangladesh',
      'contact.info.tg.note': 'জরুরি বিষয়ে দ্রুততম উত্তর',
      'contact.info.fb.title': 'ফেসবুক',
      'contact.info.fb.value': 'facebook.com/nooraskbangladesh',
      'contact.info.fb.note': 'আপডেট ও ইভেন্টের জন্য ফলো করুন',
      'contact.connect': 'আমাদের সাথে যুক্ত হোন'
    },

    /* ============ ENGLISH ============ */
    en: {
      /* --- Language Switcher --- */
      'lang.bn': 'বাংলা',
      'lang.en': 'English',

      /* --- Navigation --- */
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.partnership': 'Partnership',
      'nav.representatives': 'Representatives',
      'nav.transparency': 'Transparency',
      'nav.faq': 'FAQ',
      'nav.contact': 'Contact',

      /* --- Common Buttons --- */
      'btn.partner': 'Partner Your Mosque',
      'btn.learnMore': 'Learn More',
      'btn.becomeRep': 'Become a Representative',
      'btn.apply': 'Apply Now',
      'btn.hideForm': 'Hide Form',
      'btn.comingSoon': 'Coming Soon',

      /* --- Free Badge --- */
      'badge.free': '100% Free',

      /* --- Footer --- */
      'footer.tagline': 'NoorAsk — ask your imam fearlessly, anytime, anywhere. Let the light of truth reach every hidden struggle.',
      'footer.sitemap': 'Sitemap',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.copyright': '© 2026 NoorAsk. All rights reserved.',

      /* ============ HOME PAGE ============ */
      'home.metaDesc': 'NoorAsk — a mobile app that bridges mosques and worshippers. Partner your mosque to let worshippers ask fearlessly.',
      'home.title': 'NoorAsk — A Bridge Between Mosques and Worshippers',
      'home.hero.title': 'NoorAsk',
      'home.hero.tagline': 'The questions hardest to say aloud — now ask them fearlessly',
      'home.hero.sub': 'By name or anonymously — your mosque\'s imam answers directly. A new bridge between mosque and worshippers, bringing deeper guidance with Allah\'s help.',
      'home.hero.desc': 'Life\'s deepest questions are often the hardest to speak aloud. NoorAsk creates a safe space — share your name or remain unseen, and your imam\'s guidance will find you. We are building this network of faith and care together with mosques.',

      'home.howitworks.title': 'How the NoorAsk App Works',
      'home.howitworks.subtitle': 'Imams provide guidance. The app makes it seamless. Partner mosques are at the heart of it.',
      'home.howitworks.step1.title': '1. User Asks a Question',
      'home.howitworks.step1.desc': 'A worshipper opens the app and asks anything — faith, marriage, daily struggles. Their choice: by name or anonymously. No awkwardness, no barrier.',
      'home.howitworks.step2.title': '2. Smart Auto-Matching',
      'home.howitworks.step2.desc': 'The app checks its answer database — starting with 400+ pre-written Q&A from imams, growing with every answer. If a match is found, the answer is delivered instantly.',
      'home.howitworks.step3.title': '3. Imam Answers',
      'home.howitworks.step3.desc': 'No existing answer? The question goes to imams at partner mosques. Users can also choose a specific imam they trust to answer.',
      'home.howitworks.step4.title': '4. Guidance That Changes Lives',
      'home.howitworks.step4.desc': 'Questions hard to ask in person finally get answered. Your imam\'s guidance reaches further — the community feels supported anytime, anywhere.',

      'home.why.title': 'Why This Matters',
      'home.why.subtitle': 'Life is full of questions that are hard to ask out loud.',
      'home.why.p1': 'Marriage problems. Financial doubts. Spiritual confusion. Personal struggles that feel shameful to share. Many Muslims suffer in silence — not because they lack faith, but because they have no one to ask without fear of judgment.',
      'home.why.p2': 'A young mother struggling with postpartum anxiety wonders if it\'s sinful to feel this way. A father burdened by debt doesn\'t know if a certain loan is halal. A teenager questions their faith but is too afraid to talk to anyone at the mosque.',
      'home.why.p3': 'NoorAsk breaks down that barrier.',
      'home.why.p4': 'With one tap, they ask fearlessly (by name or anonymously). Your imam answers with wisdom and compassion. No awkwardness, no shame — just guidance when it\'s needed most. That\'s what makes a community truly thrive.',

      'home.vision.title': 'Our Vision',
      'home.vision.subtitle': 'We are building a network of faith and knowledge across Bangladesh',
      'home.vision.stat1n': '100+',
      'home.vision.stat1l': 'Target Partner Mosques',
      'home.vision.stat2n': '50,000+',
      'home.vision.stat2l': 'Community to Serve',
      'home.vision.stat3n': '15',
      'home.vision.stat3l': 'Cities',
      'home.vision.stat4n': '∞',
      'home.vision.stat4l': 'Questions to Answer',

      'home.cta.title': 'Ready to Partner Your Mosque?',
      'home.cta.subtitle': 'NoorAsk is co-created with mosques. Join and serve your community through the app. Partnership is completely free.',

      /* ============ ABOUT PAGE ============ */
      'about.metaDesc': 'About NoorAsk — a mobile app that bridges mosques and worshippers. Partner your mosque to provide guidance that changes lives.',
      'about.title': 'About NoorAsk',
      'about.hero.tagline': 'The questions hardest to say aloud — now ask them fearlessly',
      'about.hero.sub': 'Let the light of truth reach every hidden struggle — your imam\'s guidance, always within reach.',

      'about.mission.title': 'Our Mission',
      'about.mission.p1': 'NoorAsk is a mobile app — a bridge between mosques and worshippers. It is initiated by Jovi & Josh Waresoft Studio. We believe every Muslim deserves a safe space to ask life\'s hardest questions fearlessly (by name or anonymously) — and get answers from a trusted imam.',
      'about.mission.p2': 'Many struggles go unspoken. Marriage problems, financial doubts, spiritual confusion — people suffer in silence because they don\'t know who to ask without fear of judgment. NoorAsk breaks down that barrier. With one tap, anyone can ask fearlessly and receive compassionate, informed guidance.',
      'about.mission.p3': 'We are launching first in Bangladesh, partnering with mosques to build a network of imams ready to serve their communities. The app is co-created with mosques — starting with 400+ pre-written Q&A built together with imams, growing with every question answered. If a match is found, the answer is delivered instantly. If not, the question reaches the imam at the nearest partner mosque. Users can also choose a specific imam they trust.',
      'about.mission.p4': 'Our platform is built on accessibility, privacy, and community. Every question can be anonymous (by name or anonymously). Every answer is grounded in authentic Islamic knowledge. Every partner mosque extends its reach beyond its walls.',

      'about.features.title': 'What Partner Mosques Get',
      'about.features.subtitle': 'Free tools to deepen your community connection',
      'about.features.f1': 'Digital Mosque Profile: A dedicated page for your mosque — prayer times, events, announcements, and imam profiles. Visible to every nearby app user.',
      'about.features.f2': 'Imam Q&A Channel: Your imam can answer community questions directly through the platform — anytime, anywhere.',
      'about.features.f3': 'Community Dashboard: See how many people engage with your mosque, what they ask, and how your community is growing.',
      'about.features.f4': 'Sermon & Announcement Broadcast: Share Friday sermons, event notices, and religious reminders directly with your community.',
      'about.features.f5': 'Transparent Fundraising (Optional): Accept voluntary donations from supporters — with full transparency, every taka accounted for.',

      'about.team.title': 'Our Team',
      'about.team.subtitle': 'Dedicated professionals serving the ummah',
      'about.team.jovi.role': 'Product Manager',
      'about.team.jovi.bio': 'Former senior product manager with experience leading million-user education products.',
      'about.team.josh.role': 'Backend Developer',
      'about.team.josh.bio': 'Expert in API design and AI integration, specializing in RAG systems.',
      'about.team.ciki.role': 'Frontend Developer',
      'about.team.ciki.bio': 'Proficient in Flutter and web development, crafting beautiful user experiences.',
      'about.team.samu.role': 'Bangladesh Liaison Representative',
      'about.team.samu.bio': 'Our first local representative, building bridges with mosques across Bangladesh.',

      /* ============ PARTNERSHIP PAGE ============ */
      'partner.metaDesc': 'Partner your mosque with NoorAsk. Free digital presence, imam Q&A platform, and community engagement tools for your mosque.',
      'partner.title': 'Mosque Partnership',
      'partner.hero.tagline': 'Give your community a safe space to ask — fearlessly, and receive your imam\'s guidance',

      'partner.value.title': 'Why Partner With Us?',
      'partner.value.subtitle': 'User value comes first — then the mosque benefits. When worshippers love the app, their bond with your mosque deepens.',
      'partner.value.userFirst': 'User Value First',
      'partner.value.userFirstDesc': 'What worshippers get: a way to ask fearlessly, by name or anonymously. Many questions are hard to ask in person — NoorAsk removes that shame. When users love the app, they connect more deeply with your mosque.',
      'partner.value.cocreate.title': 'App Co-Created With Mosques',
      'partner.value.cocreateDesc': 'Your imams are the real experts. Before launch, we build 400+ base Q&A together with your imams. After launch, imams only answer questions from worshippers around their own mosque.',
      'partner.value.bridge.title': 'Mosque-Worshipper Bridge',
      'partner.value.bridgeDesc': 'The app is a new bridge between mosque and worshippers. Worshippers are actually part of your community — some questions they ask in person, others hard to say aloud they ask in the app. By name or anonymously — imam\'s guidance reaches them.',
      'partner.value.depth.title': 'Deeper Reach',
      'partner.value.depthDesc': 'The mosque\'s connection with worshippers deepens. Those who come to the mosque feel more supported; those who can\'t come also benefit from the imam\'s guidance. With Allah\'s help, deeper guidance reaches further.',
      'partner.value.free.title': '100% Free',
      'partner.value.freeDesc': 'Joining, app usage, imam\'s answers — everything is completely free. We operate on a public-interest model; no fees from mosques. Donations are entirely optional — no pressure.',

      'partner.process.title': 'Partnership Process',
      'partner.process.subtitle': 'Simple steps to join the NoorAsk network',
      'partner.process.step1': 'Fill Application',
      'partner.process.step2': 'Review & Approved',
      'partner.process.step3': 'Online Signing',
      'partner.process.step4': 'Content Prep',
      'partner.process.step5': 'Launch & Promote',

      'partner.apply.title': 'Ready to Partner?',
      'partner.apply.subtitle': 'The partnership application form will be available here soon. For now, reach out to us directly.',
      'partner.apply.contactInstead': 'Go to Contact Page',
      'partner.sign.title': 'Online Partnership Agreement',
      'partner.sign.subtitle': 'Once approved, sign your partnership agreement securely online',
      'partner.sign.placeholder': 'Online partnership agreement signing will be available here soon',

      /* ============ REPRESENTATIVES PAGE ============ */
      'rep.metaDesc': 'Become a NoorAsk representative. Help mosques in your area join the platform and serve their community better.',
      'rep.title': 'NoorAsk Official Representative',
      'rep.hero.tagline': 'Become a NoorAsk Official Representative — help mosques serve their community through the app',

      'rep.role.title': 'Your Responsibilities',
      'rep.role.subtitle': 'Four key ways you will help grow the NoorAsk network',
      'rep.role.r1.title': 'Local Promotion',
      'rep.role.r1.desc': 'Spread awareness about NoorAsk within your city or district through community events, social media, and word of mouth.',
      'rep.role.r2.title': 'Mosque Outreach',
      'rep.role.r2.desc': 'Identify and approach mosques that would benefit from partnering with NoorAsk. Present the platform and its value.',
      'rep.role.r3.title': 'Signing Support',
      'rep.role.r3.desc': 'Assist mosques in completing the partnership application and guide them through the online signing process.',
      'rep.role.r4.title': 'Q&A Support',
      'rep.role.r4.desc': 'Be the first point of contact for partner mosques in your area, answering basic questions and escalating when needed.',

      'rep.comp.title': 'Compensation',
      'rep.comp.subtitle': 'NoorAsk is a public-interest project — if donations come in through your efforts, you earn a share',
      'rep.comp.rate': '20%',
      'rep.comp.rateDesc': 'Commission on donations raised through your partner mosques',
      'rep.comp.detail': 'NoorAsk is a public-interest project. If the mosque partners you bring in choose to help raise donations, 20% of the donations attributed to your efforts will be paid to you as a commission. No donations, no commission — just honest service to the community.',

      'rep.cta.title': 'Become a Representative',
      'rep.cta.subtitle': 'Help us connect mosques to NoorAsk. This is a public-interest project — if donations come in, you earn 20%.',
      'rep.cta.placeholder': 'The representative application form will be available here soon. For now, please go to the contact page.',

      /* ============ TRANSPARENCY PAGE ============ */
      'trans.metaDesc': 'NoorAsk transparency — see how partner mosque donations are collected, tracked, and used with full accountability.',
      'trans.title': 'Transparency',
      'trans.hero.tagline': 'NoorAsk pledges complete transparency in all fundraising and expenditure',

      'trans.commit.title': 'Our Commitment',
      'trans.commit.p1': 'NoorAsk is a public-interest platform. We believe trust is built on transparency. We invite partner mosques to help raise donations for the app — every contribution from your community is tracked and reported with full transparency.',
      'trans.commit.p2': 'Mosques that choose to participate can encourage their congregation to donate to NoorAsk. Every taka is accounted for, and funds go directly toward building and maintaining the platform that serves your community. If you have questions, please contact us.',
      'trans.commit.optional': 'Donations entirely voluntary — no pressure.',

      'trans.plan.title': 'How Partner Mosques Can Help',
      'trans.plan.subtitle': 'Your mosque can encourage the community to donate — every contribution is fully transparent',
      'trans.plan.target': 'Phase 1 Target:',
      'trans.plan.targetDesc': 'Build and launch the NoorAsk Android app with the first partner mosque',

      'trans.alloc.title': 'How Funds Are Used',
      'trans.alloc.subtitle': 'Every donation is allocated responsibly across four key areas',
      'trans.alloc.dev.title': 'Product Development',
      'trans.alloc.dev.desc': 'Building and maintaining the NoorAsk platform — mobile apps, web infrastructure, AI systems.',
      'trans.alloc.content.title': 'Content Production',
      'trans.alloc.content.desc': 'Creating Islamic educational content, translating materials, multimedia resources — together with imams.',
      'trans.alloc.marketing.title': 'Marketing',
      'trans.alloc.marketing.desc': 'Community outreach, representative support, mosque onboarding, and awareness campaigns.',
      'trans.alloc.ops.title': 'Operations',
      'trans.alloc.ops.desc': 'Administrative costs, legal compliance, accounting, and platform security.',

      /* ============ FAQ PAGE ============ */
      'faq.metaDesc': 'FAQ — NoorAsk mosque partnership. Common questions about joining, content, technology, fundraising, and representatives.',
      'faq.title': 'Frequently Asked Questions',
      'faq.hero.tagline': 'Everything you need to know about fearlessly asking imams and mosque partnership',

      'faq.cat.partnership': 'Partnership',
      'faq.cat.content': 'Content',
      'faq.cat.technology': 'Technology',
      'faq.cat.finance': 'Finance',
      'faq.cat.rep': 'Representatives',

      'faq.p1.q': 'How does a mosque apply to partner with NoorAsk?',
      'faq.p1.a': 'Mosques can reach out to us directly to start a partnership. Our team speaks with the mosque to present the platform and partnership opportunity. The application form will be available soon — for now, use the contact page.',
      'faq.p2.q': 'Is there any cost for mosques to join?',
      'faq.p2.a': 'No. Joining NoorAsk as a partner mosque is completely free. We operate on a public-interest model and do not charge mosques any fees.',
      'faq.p3.q': 'What information does a mosque need to provide?',
      'faq.p3.a': 'Basic mosque details (name, address, contact), imam information, prayer times, and a brief description of the community you serve.',
      'faq.p4.q': 'Can a mosque leave the platform at any time?',
      'faq.p4.a': 'Yes. Partnership is voluntary. A mosque may withdraw at any time by providing 30 days\' written notice.',

      'faq.c1.q': 'Who provides the answers on NoorAsk?',
      'faq.c1.a': 'All answers on NoorAsk come from qualified imams at partner mosques. When the app first launches, we will seed it with 400+ pre-written Q&A built together with imams — covering common questions about faith, marriage, daily life, and more — so users get instant answers from day one. As imams continue to answer new questions, the answer database grows organically — the more imams answer, the more questions get auto-matched instantly. When a user asks, the app first checks if a match exists. If not, the question is sent to the imam at the nearest partner mosque. Users can also choose a specific imam they trust. Every answer is authoritative because it comes directly from a qualified imam.',
      'faq.c2.q': 'Is the content verified for accuracy?',
      'faq.c2.a': 'Yes. The initial 400+ answers are prepared by qualified imams and reviewed by our content team. As imams from partner mosques answer new questions, each answer carries the authority of the scholar who wrote it. All content is grounded in Quran, authentic hadith, and established Islamic scholarship.',
      'faq.c3.q': 'What languages are supported?',
      'faq.c3.a': 'Currently we support Bengali and English. Arabic content (Quran, hadith) is displayed with translations. We plan to expand language support based on demand.',

      'faq.t1.q': 'Is NoorAsk available as a mobile app?',
      'faq.t1.a': 'We are building the NoorAsk Android app. The app will let users ask by name or anonymously, get instant auto-matched answers from the 400+ Q&A database, or have their question sent to the nearest partner mosque\'s imam. Users can also choose a specific imam to respond — anytime, from their phone.',
      'faq.t2.q': 'How is user data protected?',
      'faq.t2.a': 'We use industry-standard encryption and never sell user data. Anonymous questions are not linked to any personal identifier. See our Privacy Policy for details.',
      'faq.t3.q': 'What happens if the platform goes offline?',
      'faq.t3.a': 'We use Cloudflare and redundant hosting to ensure high availability. In the unlikely event of downtime, all data is safely backed up and will be restored.',

      'faq.f1.q': 'How is NoorAsk funded?',
      'faq.f1.a': 'NoorAsk is funded through voluntary donations from the community, grants from Islamic organizations, and strategic partnerships. We do not display advertisements. See our Transparency page for details on how funds are allocated.',
      'faq.f2.q': 'Can I donate to a specific mosque?',
      'faq.f2.a': 'Yes. During the donation process, you can select a specific partner mosque to support, or contribute to the general platform fund.',
      'faq.f3.q': 'Are donations tax-deductible?',
      'faq.f3.a': 'Tax deductibility depends on your jurisdiction. We are working to obtain charitable status in key regions. Please contact us for specific documentation.',

      'faq.r1.q': 'Who can become a NoorAsk Official Representative?',
      'faq.r1.a': 'Any committed Muslim with good community standing, reliable internet access, and a passion for serving local mosques can apply. Previous community experience is helpful but not required.',
      'faq.r2.q': 'How are representatives compensated?',
      'faq.r2.a': 'NoorAsk is a public-interest project. If the mosque partners you bring in choose to help raise donations, 20% of the donations attributed to your efforts will be paid to you as a commission. No donations, no commission — just honest service to the community.',
      'faq.r3.q': 'How are representatives trained?',
      'faq.r3.a': 'Approved representatives receive a digital onboarding kit, video training sessions, and access to a dedicated support channel. We also host monthly virtual meetups.',
      'faq.r4.q': 'Can a representative serve multiple cities?',
      'faq.r4.a': 'Initially, representatives focus on one city or district to ensure quality. High-performing representatives may be promoted to regional roles.',

      /* ============ CONTACT PAGE ============ */
      'contact.metaDesc': 'Contact NoorAsk — mosque partnership inquiries. Partner your mosque or become a representative.',
      'contact.title': 'Contact Us',
      'contact.hero.tagline': 'Help mosques bring compassionate, fearless imam guidance to those who need it most',

      'contact.info.title': 'Get in Touch',
      'contact.info.subtitle': 'Reach out through any of the channels below',
      'contact.info.lead.title': 'Project Lead',
      'contact.info.lead.name': 'Jovi',
      'contact.info.lead.role': 'Product Manager & Co-Founder',
      'contact.info.email.title': 'Email',
      'contact.info.email.value': 'contact@noorask.online',
      'contact.info.email.note': 'We reply within 2 business days',
      'contact.info.tg.title': 'Telegram',
      'contact.info.tg.value': 't.me/nooraskbangladesh',
      'contact.info.tg.note': 'Fastest response for urgent matters',
      'contact.info.fb.title': 'Facebook',
      'contact.info.fb.value': 'facebook.com/nooraskbangladesh',
      'contact.info.fb.note': 'Follow us for updates and events',
      'contact.connect': 'Connect With Us'
    }
  };

  var DEFAULT_LANG = 'bn';
  var STORAGE_KEY = 'noorask-lang';

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLang(lang);
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    var dict = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      var btnLang = btn.getAttribute('data-lang');
      btn.classList.toggle('active', btnLang === lang);
    });
  }

  window.NoorAskI18n = {
    getLang: getLang,
    setLang: setLang,
    applyLang: applyLang,
    translations: translations
  };

  document.addEventListener('DOMContentLoaded', function() {
    applyLang(getLang());

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var newLang = btn.getAttribute('data-lang');
        setLang(newLang);
      });
    });
  });
})();
