// Portfolio data. Add a project here and it shows up in the grid and gets its own detail page.
// `repo` is only set for public repositories.

export const projects = [
    {
        slug: "pacestation",
        title: "PACEStation",
        tagline: "AI-powered MRCP PACES exam simulator",
        category: "AI & Education",
        url: "https://pacestation.onlyapp.top",
        img: "assets/images/pacestation.png",
        featured: true,
        objective:
            "Give doctors preparing for the MRCP (UK) PACES clinical exam a free, realistic place to practise. Candidates talk to an AI patient or relative under real exam timings, then two independent AI examiners mark them against the PACES23 marksheet. Everything runs on free AI tiers and on-device engines, so practice costs the candidate nothing.",
        features: [
            "Voice-driven clinical consultations (Stations 2 & 5) and communication encounters (Stations 1a & 4a)",
            "Dual AI examiners with realistic variance, verdicts, missed red flags and actionable feedback",
            "Dynamic case generation, a hand-written scenario bank, and cases built from photographed book pages via OCR",
            "Cross-provider model pool (Gemini, Groq, Cerebras, Mistral, OpenRouter) with automatic failover and key rotation",
            "Hands-free speech-to-text and on-device text-to-speech with British voices",
            "Case queue, shareable cases, session history and analytics",
        ],
        stack: {
            Frontend: ["Vue 3", "Vue Router", "Pinia", "Vite"],
            Backend: ["Firebase Auth", "Cloud Firestore", "PHP relay"],
            "AI & Voice": ["Gemini", "Groq", "Whisper", "Piper TTS", "Kokoro", "Transformers.js", "Tesseract.js"],
        },
    },
    {
        slug: "aatel",
        title: "আঁতেল",
        subtitle: "Aatel",
        tagline: "বাঙালি মননের ডিজিটাল পাঠকক্ষ - a Bengali e-book reader",
        category: "Reading & Literature",
        url: "https://aatel.onlyapp.top",
        img: "assets/images/aatel.png",
        featured: true,
        objective:
            "A completely free Bengali e-book and PDF reader. It collects free books from around the web into one library, and lets anyone paste a PDF link to read it straight away in an eye-friendly online reader.",
        features: [
            "Library and bookshelf of curated free Bengali books",
            "PDF and EPUB readers with bookmarks and reading notes",
            "Open any PDF by link and read it in the app",
            "Dictionary tooltip for looking up words while reading",
            "Shareable quote cards rendered as images",
            "Accounts and an admin view for managing the collection",
        ],
        stack: {
            Frontend: ["Vue 3", "Vue Router", "Tailwind CSS", "Vite", "Lucide icons"],
            Backend: ["Firebase Auth", "Cloud Firestore", "Cloudinary"],
            Libraries: ["PDF.js", "html2canvas"],
        },
    },
    {
        slug: "my-tax-lawyer",
        title: "My Tax Lawyer",
        tagline: "Bangladesh NBR tax calculator & rebate advisor",
        category: "Finance",
        url: "https://my-tax-lawyer.onlyapp.top",
        img: "assets/images/my-tax-lawyer.png",
        featured: true,
        objective:
            "Help salaried corporate professionals in Bangladesh work out their personal income tax under the Income Tax Act 2023, and plan investments to claim the maximum rebate under Schedule 24D.",
        features: [
            "Salary-based income tax calculation using the current NBR slabs",
            "Investment rebate advisor for Sanchayapatra, DPS and other Schedule 24D options",
            "Charts that break down tax, rebate and take-home amounts",
            "Runs entirely in the browser - no data leaves the device",
        ],
        stack: {
            Frontend: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            Libraries: ["Recharts", "Lucide icons"],
        },
    },
    {
        slug: "json-fit",
        title: "JSON-Fit",
        tagline: "Advanced all-in-one JSON toolkit",
        category: "Developer Tools",
        url: "https://json-fit.onlyapp.top",
        img: "assets/images/json-fit.png",
        objective:
            "A fast, private, client-side toolkit for developers to format, validate, analyse, compare and mock JSON - all running locally in the browser so sensitive payloads never leave the machine.",
        features: [
            "Formatter and minifier with selectable indentation and size stats",
            "Validator with exact line/column errors and fix suggestions",
            "Recursive key sorter and structural diff viewer",
            "Parser for string ↔ JSON conversion and structure analysis",
            "Mock data generator from JSON Schema",
            "Conversions to and from YAML and XML, plus JSONPath queries",
        ],
        stack: {
            Frontend: ["Next.js", "React", "TypeScript", "React Bootstrap"],
            Libraries: ["Ajv", "JSONPath", "json-schema-faker", "YAML", "xml-js", "React Flow", "react-diff-viewer"],
        },
    },
    {
        slug: "bdix-hunter",
        title: "BDIX FTP Hunter",
        tagline: "Find and check BDIX FTP & movie servers",
        category: "Utilities",
        url: "https://bdix-hunter.onlyapp.top",
        img: "assets/images/bdix.png",
        objective:
            "Help users in Bangladesh discover which BDIX (Bangladesh Internet Exchange) FTP and media servers are reachable from their ISP, and keep an organised, health-checked list of them.",
        features: [
            "Bulk-add server links and check them with several detection methods",
            "Response-time measurement and speed classification",
            "Categories, tags, favourites and notes",
            "Dashboard with health score and status charts",
            "Import/export in four formats and share lists",
            "Installable PWA with offline support",
        ],
        stack: {
            Frontend: ["Vue 3", "TypeScript", "Pinia", "Vue Router", "PrimeVue", "Tailwind CSS", "Vite"],
            Backend: ["Firebase"],
            Libraries: ["Chart.js", "VueUse", "date-fns", "Vite PWA"],
        },
    },
    {
        slug: "zurban",
        title: "Zurban",
        tagline: "The time god - task tracker & infinite study clock",
        category: "Productivity",
        url: "https://zurban.onlyapp.top",
        img: "assets/images/zurban.png",
        objective:
            "Make long study sessions measurable and motivating. Zurban is a focus timer and study tracker that records every session by topic and turns the history into streaks and analytics.",
        features: [
            "Tap-to-start timer orb with a Pomodoro cube and focus mode",
            "Sessions logged by topic with notes",
            "Dashboard with heatmap calendar, streaks, daily goal and charts",
            "3D visuals, ambient audio and keyboard shortcuts",
            "Sign-in with progress synced to the cloud",
        ],
        stack: {
            Frontend: ["Vue 3", "Vue Router", "Pinia", "Tailwind CSS", "Vite"],
            Backend: ["Firebase Auth", "Cloud Firestore"],
            Libraries: ["Three.js"],
        },
    },
    {
        slug: "hourman",
        title: "Hourman",
        tagline: "The time crawler - world clock & timezone converter",
        category: "Productivity",
        url: "https://hourman.onlyapp.top",
        img: "assets/images/hourman.png",
        objective:
            "Track live time across many timezones at once and convert between them easily - built for people who work with teams, family or clients around the world.",
        features: [
            "Multiple live analog and digital clocks",
            "Interactive world map of the selected cities",
            "Custom time bar to convert a chosen moment across all zones",
            "Daylight-saving badges, sunrise/sunset and local weather",
            "Alarms with in-app notifications",
        ],
        stack: {
            Frontend: ["Vue 3", "Pinia", "Tailwind CSS", "Vite"],
            Libraries: ["D3-geo", "Day.js", "SunCalc", "Open-Meteo API"],
        },
    },
    {
        slug: "desco-bill-check",
        title: "DESCO Bill Check",
        tagline: "Postpaid electricity bill checker & analytics",
        category: "Utilities",
        url: "https://desco.onlyapp.top",
        img: "assets/images/desco-bill-utility.png",
        objective:
            "Let DESCO (Dhaka Electric Supply Company) postpaid customers check their bills for any month or a whole year in one go, and see how their consumption and cost change over time.",
        features: [
            "Fetch one month or all months of a year by biller number",
            "KPI cards for total consumption, total bill and average cost per unit",
            "Bar and area charts of kWh usage and billing trends",
            "Bill details with VAT, late fee, due date and payment status",
            "PHP proxy that relays requests to the EkPay gateway",
        ],
        stack: {
            Frontend: ["HTML5", "CSS3", "Bootstrap 5", "jQuery", "Select2"],
            Backend: ["PHP (cURL proxy)", "EkPay API"],
            Libraries: ["Chart.js"],
        },
    },
    {
        slug: "kali-o-kobita",
        title: "কালি ও কবিতা",
        subtitle: "Kali o Kobita",
        tagline: "An interactive Bengali poetry book",
        category: "Reading & Literature",
        url: "https://saifulislamconnect.github.io/kali-o-kobita",
        repo: "https://github.com/saifulislamconnect/kali-o-kobita",
        img: "assets/images/kali-o-kobita.png",
        objective:
            "Present Bengali poetry the way a printed book feels - a page-turning digital book with illustrations, sound and careful Bengali typography.",
        features: [
            "Realistic page-turn animation with sound effects",
            "Single-line SVG illustrations generated for each poem",
            "Keyboard, touch and click navigation",
            "Dark and light themes, remembered between visits",
            "Noto Serif Bengali typography, responsive on every screen size",
        ],
        stack: {
            Frontend: ["Next.js", "React", "TypeScript"],
            Hosting: ["GitHub Pages (static export)"],
        },
    },
    {
        slug: "textal",
        title: "Textal",
        tagline: "Smart text analyzer",
        category: "Developer Tools",
        url: "https://saifulislamconnect.github.io/textal",
        repo: "https://github.com/saifulislamconnect/textal",
        img: "assets/images/textal.png",
        objective:
            "Paste any text and instantly understand it - a real-time analyzer for writers, students and developers that goes well beyond a word count.",
        features: [
            "Live counts of characters, graphemes, words, sentences and paragraphs",
            "Reading time and estimated syllables",
            "Character-class breakdown and byte size",
            "Top words, word-length distribution and line-length stats",
            "Export results as CSV",
        ],
        stack: {
            Frontend: ["Vue 3", "Vite"],
            Hosting: ["GitHub Pages"],
        },
    },
    {
        slug: "rich-input-formatting",
        title: "Textarea Live Preview",
        tagline: "Formatted text area with a live tooltip preview",
        category: "Developer Tools",
        url: "https://saifulislamconnect.github.io/rich-input-formatting",
        repo: "https://github.com/saifulislamconnect/rich-input-formatting",
        img: "assets/images/textarea-rnd.png",
        objective:
            "A small UI experiment: show how formatted input in a plain textarea will look, live, in a tooltip preview as the user types.",
        features: [
            "Live formatted preview while typing",
            "Tooltip that follows the textarea",
            "Zero dependencies - a single HTML page",
        ],
        stack: {
            Frontend: ["HTML", "CSS", "Vanilla JavaScript"],
            Hosting: ["GitHub Pages"],
        },
    },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);

export const allTech = (p) => Object.values(p.stack).flat();
