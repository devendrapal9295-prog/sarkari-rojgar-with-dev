SARKARI ROJGAR WITH DEV — STARTER WEBSITE
========================================

इस फोल्डर में क्या है?
- index.html : वेबसाइट का होमपेज
- style.css  : मोबाइल/कंप्यूटर के लिए डिज़ाइन
- app.js     : सर्च, कैटेगरी फ़िल्टर और डेमो जॉब कार्ड
- admin.html : भर्ती जोड़ने/हटाने का डेमो एडमिन पैनल
- admin.js   : एडमिन पैनल की कार्यक्षमता

लोकल में कैसे देखें?
1. ZIP को extract करें।
2. index.html को ब्राउज़र में खोलें।
3. भर्ती जोड़ने के लिए admin.html खोलें।
4. ध्यान दें: यह अभी प्रोटोटाइप है। एडमिन पैनल से जो डेटा जोड़ा जाएगा वह उसी ब्राउज़र में localStorage में सेव होगा। दूसरे डिवाइस या दूसरे विज़िटर को नहीं दिखेगा।

₹0 में ऑनलाइन कैसे डालें?
- Static hosting जैसे GitHub Pages या Cloudflare Pages के मुफ्त प्लान पर वेबसाइट होस्ट की जा सकती है।
- मुफ्त होस्टिंग पर आमतौर पर platform subdomain मिलता है; अपनी पसंद का .com/.in domain सामान्यतः अलग से खरीदना पड़ता है।
- वेबसाइट को सभी के लिए सही तरीके से चलाने के लिए custom domain, सुरक्षित admin login और database अलग से configure करना होगा।

ऑटो अपडेट की स्थिति:
- होमपेज में /api/jobs endpoint को कॉल करने का शुरुआती hook है। अभी backend/API configured नहीं है।
- वास्तविक भर्ती ऑटो-अपडेट के लिए वैध/आधिकारिक डेटा स्रोत (जैसे आधिकारिक RSS/API जहाँ उपलब्ध हो), server-side importer, database, scheduled job और duplicate-checking चाहिए। सभी विभागों से स्वचालित डेटा उपलब्ध होना सुनिश्चित नहीं है।
- scraping या किसी वेबसाइट की शर्तों का उल्लंघन न करें। आवेदन की तारीख/योग्यता/लिंक को आधिकारिक नोटिफिकेशन से सत्यापित करें।

लाइव वेबसाइट पर प्रकाशित करने से पहले जरूरी:
1. Server-side authentication (admin password केवल frontend में न रखें)
2. Database (उदाहरण: Supabase/Firebase/अन्य उपयुक्त विकल्प)
3. Server/API endpoint और scheduled update job
4. डेटा सत्यापन, स्रोत/तारीख, error handling और backup
5. Privacy/Disclaimer/Contact पेज और ad-network policies की समीक्षा

यह starter project है, production-ready secured system नहीं।
