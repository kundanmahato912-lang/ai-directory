const toolsData = {
    "gemini": {
        title: "Gemini - AI Tool Details | AI Directory",
        badgeGradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        badgeIcon: "fas fa-robot",
        badgeText: "GOOGLE ECOSYSTEM",
        name: "Gemini",
        image: "images/gemini.jpg",
        
        paragraphs: [
            "Gemini is Google's advanced AI assistant designed to help users with writing, research, coding, learning, productivity, and creative tasks. Built using Google's Gemini AI models, it can understand text, images, documents, audio, and other forms of content to provide intelligent responses.",
            "Gemini integrates deeply with Google's ecosystem, making it useful for users who regularly use Google Search, Gmail, Google Docs, Google Drive, Google Maps, and other Google services. It is widely used for content creation, research, brainstorming, coding assistance, document analysis, and everyday productivity."
        ],
        
        features: [
            { icon: "fas fa-comments", text: "AI Chat Assistant" },
            { icon: "fas fa-search", text: "Google Search Integration" },
            { icon: "fas fa-pen-nib", text: "Advanced Writing Assistant" },
            { icon: "fas fa-code", text: "Dynamic Coding Assistant" },
            { icon: "fas fa-image", text: "Multimodal Image Understanding" },
            { icon: "fas fa-file-alt", text: "Seamless Document Analysis" },
            { icon: "fas fa-lightbulb", text: "Brainstorming Partner" },
            { icon: "fas fa-language", text: "Cross-Language Translation" },
            { icon: "fas fa-graduation-cap", text: "Personalized Learning Assistant" },
            { icon: "fas fa-cubes", text: "Workspace Deep Integration" }
        ],
        
        useCases: [
            { label: "🎓 Students:", text: "Perfect for Deep Research Assistance, Creating Study Notes, Homework Support, and Comprehensive Exam Preparation." },
            { label: "💼 Professionals:", text: "Fast Email Drafting, Document Summaries, Meeting Preparation, and Daily High-Level Productivity Tasks." },
            { label: "💻 Developers:", text: "Accurate Code Generation, Code Review, instant Debugging, and Learning Complex Programming Concepts." },
            { label: "📈 Marketers:", text: "Targeted Ad Copy Creation, Marketing Campaign Planning, Content Strategy, and SEO Content development." },
            { label: "🎬 Content Creators:", text: "Quick Blog Writing, Unique Video Ideas, Script Creation, and Social Media Planning workflows." }
        ],
        
        pros: [
            "Strong Google Ecosystem Integration.",
            "Easy To Use Interface.",
            "Supports Multimodal Text & Image Inputs.",
            "Highly Helpful For Deep Research.",
            "Good Coding & Logic Assistance.",
            "Free Plan Available for Everyone."
        ],
        
        cons: [
            "Advanced Features Need Paid Subscription.",
            "Can Occasionally Produce Hallucinations.",
            "Some Features Depend On Region Availability.",
            "Output Quality Can Vary By Complexity."
        ],
        
        pricingColor: "#60a5fa",
        pricing: [
            { plan: "Gemini Free", price: "$0", desc: "Basic AI Chat Features, standard limits, and core Google integration models." },
            { plan: "Gemini Advanced", price: "$20 / mo", desc: "Access to next-gen premium models, 2TB storage, and AI inside Gmail/Docs via Google One." },
            { plan: "Gemini Enterprise", price: "$30 / user / mo", desc: "Enterprise-grade security, administrative controls, and higher custom usage capabilities." }
        ],
        
        alternatives: ["ChatGPT", "Claude AI", "Microsoft Copilot", "Perplexity AI", "DeepSeek AI"],
        
        faqs: [
            { q: "Is Gemini Free?", a: "Yes. Gemini offers a free plan with access to core AI assistant features without any forced subscriptions." },
            { q: "Can Gemini Analyze Images?", a: "Yes. Users can natively upload images, charts, and diagrams and ask the model questions or ask for descriptions about them." },
            { q: "Can Gemini Write Code?", a: "Yes. Gemini fully supports multiple programming languages including Python, JS, C++, HTML, CSS, Java, etc., and can help generate, explain, or debug scripts." },
            { q: "Is Gemini Good For Research?", a: "Yes. Backed by Google's massive search data pipeline ecosystem, it is highly powerful for real-time data collection, summarization, and compilation." },
            { q: "Does Gemini Work With Google Apps?", a: "Yes. It integrates seamlessly across Google Workspace extensions like Gmail, Google Docs, Drive, Calendar, Sheets, and Maps." }
        ],
        
        verdict: "Gemini is a powerful AI assistant for users who rely on Google's ecosystem. Its ability to combine AI capabilities with Google services makes it a strong choice for students, professionals, developers, marketers, and content creators looking to improve productivity and streamline daily tasks.",
        
        specs: {
            developer: "Google",
            category: "AI Chatbot, Writing, Coding, Research & Productivity AI",
            platforms: "Web, Android, iOS",
            score: "4.6 / 5.0",
            mode: "Freemium Model",
            link: "https://gemini.google.com"
        }
    },
    "chatgpt": {
    title: "ChatGPT - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #10a37f, #0f766e)",
    badgeIcon: "fas fa-brain",
    badgeText: "OPENAI POWERED",
    name: "ChatGPT",
    image: "images/chatgpt.jpg",
    
    paragraphs: [
        "ChatGPT is OpenAI's advanced AI assistant designed to help users with writing, coding, research, learning, productivity, brainstorming, data analysis, and creative projects. Powered by cutting-edge OpenAI models, ChatGPT can understand and generate human-like responses across a wide range of topics and tasks.",
        "ChatGPT supports text, images, files, data analysis, and web-based research capabilities, making it one of the most versatile AI assistants available today. It is widely used by students, professionals, developers, marketers, entrepreneurs, researchers, and content creators to improve productivity and solve complex problems efficiently."
    ],
    
    features: [
        { icon: "fas fa-comments", text: "Advanced AI Chat Assistant" },
        { icon: "fas fa-pen-nib", text: "Professional Writing Assistant" },
        { icon: "fas fa-code", text: "Smart Coding & Debugging" },
        { icon: "fas fa-search", text: "Web Research Capabilities" },
        { icon: "fas fa-image", text: "Image Understanding & Analysis" },
        { icon: "fas fa-file-alt", text: "File & Document Processing" },
        { icon: "fas fa-chart-line", text: "Data Analysis Tools" },
        { icon: "fas fa-lightbulb", text: "Creative Brainstorming Partner" },
        { icon: "fas fa-language", text: "Multilingual Communication" },
        { icon: "fas fa-robot", text: "Custom GPTs & Automation" }
    ],
    
    useCases: [
        { label: "🎓 Students:", text: "Detailed Study Notes, Homework Assistance, Research Support, Exam Preparation, and Concept Explanations." },
        { label: "💼 Professionals:", text: "Email Drafting, Report Creation, Business Analysis, Meeting Preparation, and Productivity Enhancement." },
        { label: "💻 Developers:", text: "Code Generation, Debugging, Documentation Writing, API Assistance, and Learning New Technologies." },
        { label: "📈 Marketers:", text: "Marketing Copywriting, SEO Content Creation, Campaign Planning, Audience Research, and Brand Strategy." },
        { label: "🎬 Content Creators:", text: "Blog Writing, Video Scripts, Social Media Content, Storytelling, and Content Planning Workflows." }
    ],
    
    pros: [
        "Highly Accurate And Versatile AI Assistant.",
        "Excellent Writing & Content Creation Quality.",
        "Powerful Coding And Debugging Support.",
        "Supports File Uploads And Data Analysis.",
        "Custom GPTs For Specialized Workflows.",
        "Free Plan Available For Most Users."
    ],
    
    cons: [
        "Advanced Models Require Paid Subscription.",
        "May Occasionally Generate Incorrect Information.",
        "Usage Limits Apply During High Demand.",
        "Some Premium Features Are Plan Restricted."
    ],
    
    pricingColor: "#10a37f",
    pricing: [
        { plan: "ChatGPT Free", price: "$0", desc: "Access to core AI chat capabilities, writing assistance, and basic productivity features." },
        { plan: "ChatGPT Plus", price: "$20 / mo", desc: "Access to advanced models, faster responses, enhanced tools, and priority availability." },
        { plan: "ChatGPT Team", price: "$25 / user / mo", desc: "Collaboration tools, workspace management, enhanced security, and higher usage limits." }
    ],
    
    alternatives: ["Gemini", "Claude AI", "Microsoft Copilot", "Perplexity AI", "DeepSeek AI"],
    
    faqs: [
        { q: "Is ChatGPT Free?", a: "Yes. ChatGPT offers a free plan that allows users to access core AI assistant features without paying." },
        { q: "Can ChatGPT Analyze Images?", a: "Yes. Users can upload images, screenshots, charts, and diagrams for analysis, explanations, and problem solving." },
        { q: "Can ChatGPT Write Code?", a: "Yes. ChatGPT supports numerous programming languages including Python, JavaScript, HTML, CSS, Java, C++, PHP, and many more." },
        { q: "Is ChatGPT Good For Research?", a: "Yes. ChatGPT is widely used for research, summarization, brainstorming, report creation, and knowledge exploration across various topics." },
        { q: "Can ChatGPT Analyze Documents?", a: "Yes. Users can upload PDFs, spreadsheets, presentations, and documents for summaries, insights, and detailed analysis." }
    ],
    
    verdict: "ChatGPT is one of the most powerful and versatile AI assistants available today. Its strong capabilities in writing, coding, research, data analysis, education, and productivity make it an excellent choice for students, professionals, developers, marketers, and content creators looking to work smarter and faster.",
    
    specs: {
        developer: "OpenAI",
        category: "AI Chatbot, Writing, Coding, Research & Productivity AI",
        platforms: "Web, Windows, macOS, Android, iOS",
        score: "4.7 / 5.0",
        mode: "Freemium Model",
        link: "https://chatgpt.com"
    }
},
"claude": {
    title: "Claude AI - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #d97706, #f59e0b)",
    badgeIcon: "fas fa-feather-alt",
    badgeText: "ANTHROPIC AI",
    name: "Claude AI",
    image: "images/claude.jpg",
    
    paragraphs: [
        "Claude is Anthropic's advanced AI assistant built to help users with writing, coding, research, analysis, learning, and business productivity tasks. Designed with a strong focus on helpfulness, safety, and natural conversation, Claude is known for producing detailed, thoughtful, and well-structured responses.",
        "Claude excels at handling long documents, analyzing complex information, summarizing reports, generating content, and assisting with software development. Its large context window allows users to work with lengthy files, making it a popular choice among professionals, researchers, developers, and content creators."
    ],
    
    features: [
        { icon: "fas fa-comments", text: "Conversational AI Assistant" },
        { icon: "fas fa-pen-nib", text: "Long-Form Writing Expert" },
        { icon: "fas fa-code", text: "Advanced Coding Support" },
        { icon: "fas fa-file-alt", text: "Large Document Analysis" },
        { icon: "fas fa-book", text: "Research & Summarization" },
        { icon: "fas fa-brain", text: "Complex Reasoning Tasks" },
        { icon: "fas fa-lightbulb", text: "Creative Brainstorming" },
        { icon: "fas fa-language", text: "Multilingual Communication" },
        { icon: "fas fa-chart-line", text: "Business Productivity Tools" },
        { icon: "fas fa-shield-alt", text: "Safety-Focused AI Design" }
    ],
    
    useCases: [
        { label: "🎓 Students:", text: "Research Assistance, Detailed Explanations, Study Notes, Essay Writing, and Academic Learning Support." },
        { label: "💼 Professionals:", text: "Business Reports, Email Drafting, Meeting Summaries, Strategic Planning, and Productivity Tasks." },
        { label: "💻 Developers:", text: "Code Generation, Refactoring, Debugging, Documentation Writing, and Technical Problem Solving." },
        { label: "📈 Marketers:", text: "Content Strategy, Ad Copy Creation, Brand Messaging, Market Research, and SEO Planning." },
        { label: "🎬 Content Creators:", text: "Long-Form Articles, Scripts, Creative Writing, Content Outlines, and Publishing Workflows." }
    ],
    
    pros: [
        "Exceptional Long-Form Writing Quality.",
        "Large Context Window For Huge Documents.",
        "Strong Reasoning And Analysis Capabilities.",
        "Natural And Human-Like Responses.",
        "Reliable Research And Summarization.",
        "User-Friendly Interface."
    ],
    
    cons: [
        "Advanced Features Require Paid Plan.",
        "Less Integrated With External Services.",
        "May Occasionally Produce Inaccurate Information.",
        "Availability Can Vary By Region."
    ],
    
    pricingColor: "#f59e0b",
    pricing: [
        { plan: "Claude Free", price: "$0", desc: "Access to core Claude AI capabilities with standard usage limits." },
        { plan: "Claude Pro", price: "$20 / mo", desc: "Higher usage limits, access to advanced models, and priority performance." },
        { plan: "Claude Team", price: "$25 / user / mo", desc: "Collaboration features, team management, and enhanced workspace capabilities." }
    ],
    
    alternatives: ["ChatGPT", "Gemini", "Microsoft Copilot", "Perplexity AI", "DeepSeek AI"],
    
    faqs: [
        { q: "Is Claude Free?", a: "Yes. Claude offers a free plan that provides access to its core AI assistant features with certain usage limitations." },
        { q: "Can Claude Analyze Documents?", a: "Yes. Claude is particularly strong at analyzing long PDFs, reports, research papers, and large text files." },
        { q: "Can Claude Write Code?", a: "Yes. Claude supports many programming languages and can generate, explain, optimize, and debug code." },
        { q: "What Is Claude Best Known For?", a: "Claude is widely recognized for its excellent long-form writing, document analysis, and thoughtful conversational responses." },
        { q: "Is Claude Good For Research?", a: "Yes. Claude is highly effective for summarization, information extraction, report analysis, and deep research assistance." }
    ],
    
    verdict: "Claude is an excellent AI assistant for users who need high-quality writing, deep document analysis, research support, and thoughtful reasoning. Its ability to handle large amounts of information makes it especially valuable for professionals, students, researchers, developers, and content creators.",
    
    specs: {
        developer: "Anthropic",
        category: "AI Chatbot, Writing, Research, Coding & Productivity AI",
        platforms: "Web, Android, iOS",
        score: "4.7 / 5.0",
        mode: "Freemium Model",
        link: "https://claude.ai"
    }
},
"perplexity": {
    title: "Perplexity AI - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    badgeIcon: "fas fa-search",
    badgeText: "AI SEARCH ENGINE",
    name: "Perplexity AI",
    image: "images/perplexity.jpg",
    
    paragraphs: [
        "Perplexity AI is an AI-powered answer engine that combines conversational AI with real-time web search capabilities. Unlike traditional chatbots, Perplexity provides answers backed by cited sources, allowing users to verify information and explore references directly.",
        "Perplexity is widely used for research, fact-checking, learning, news discovery, market analysis, academic studies, and professional knowledge gathering. Its ability to search the web and generate summarized responses makes it a valuable tool for students, researchers, professionals, and curious learners."
    ],
    
    features: [
        { icon: "fas fa-search", text: "Real-Time Web Search" },
        { icon: "fas fa-link", text: "Source-Cited Answers" },
        { icon: "fas fa-comments", text: "Conversational AI Search" },
        { icon: "fas fa-book", text: "Research Assistant" },
        { icon: "fas fa-globe", text: "Live Internet Access" },
        { icon: "fas fa-file-alt", text: "Document Analysis" },
        { icon: "fas fa-chart-line", text: "Market & Trend Research" },
        { icon: "fas fa-lightbulb", text: "Knowledge Discovery" },
        { icon: "fas fa-language", text: "Multilingual Search Support" },
        { icon: "fas fa-brain", text: "AI-Powered Summarization" }
    ],
    
    useCases: [
        { label: "🎓 Students:", text: "Academic Research, Study Material Collection, Fact Verification, and Learning New Subjects Faster." },
        { label: "💼 Professionals:", text: "Industry Research, Competitive Analysis, Business Intelligence, and Daily Information Gathering." },
        { label: "💻 Developers:", text: "Technical Documentation Search, Programming Research, and Finding Coding Solutions Quickly." },
        { label: "📈 Marketers:", text: "Market Trends, Competitor Research, Consumer Insights, and Industry News Monitoring." },
        { label: "📰 Researchers:", text: "Source-Based Research, Data Collection, Fact-Checking, and Information Verification Workflows." }
    ],
    
    pros: [
        "Provides Source-Cited Answers.",
        "Excellent For Research And Fact-Checking.",
        "Real-Time Internet Access.",
        "Fast And Easy Information Discovery.",
        "Supports Follow-Up Questions.",
        "Free Plan Available."
    ],
    
    cons: [
        "Advanced Features Require Paid Plan.",
        "Dependent On Available Web Sources.",
        "May Occasionally Surface Inaccurate Sources.",
        "Less Focused On Creative Writing Tasks."
    ],
    
    pricingColor: "#06b6d4",
    pricing: [
        { plan: "Perplexity Free", price: "$0", desc: "Basic AI search capabilities, source citations, and standard daily usage." },
        { plan: "Perplexity Pro", price: "$20 / mo", desc: "Advanced AI models, more searches, file uploads, and enhanced research features." },
        { plan: "Perplexity Enterprise", price: "$40 / mo", desc: "Enterprise-grade security, collaboration tools, and organization-wide deployment." }
    ],
    
    alternatives: ["ChatGPT", "Gemini", "Claude AI", "Microsoft Copilot", "DeepSeek AI"],
    
    faqs: [
        { q: "Is Perplexity AI Free?", a: "Yes. Perplexity offers a free plan with access to its AI search engine and source-backed answers." },
        { q: "What Makes Perplexity Different?", a: "Perplexity focuses on real-time web search and provides citations for its answers, helping users verify information easily." },
        { q: "Can Perplexity Be Used For Research?", a: "Yes. Research is one of Perplexity's strongest use cases due to its web search capabilities and source references." },
        { q: "Does Perplexity Support File Uploads?", a: "Yes. Free users can upload files with daily limits, while the Pro plan offers advanced data analysis and higher upload limits." },
        { q: "Can Perplexity Replace Traditional Search Engines?", a: "For many research and information-gathering tasks, Perplexity can provide faster summarized answers while still linking to original sources." }
    ],
    
    verdict: "Perplexity AI is one of the best AI-powered research and search tools available today. Its combination of real-time web access, source citations, and conversational AI makes it an excellent choice for students, researchers, professionals, marketers, and anyone who needs trustworthy information quickly.",
    
    specs: {
        developer: "Perplexity AI",
        category: "AI Search Engine, Research & Productivity AI",
        platforms: "Web, Windows, macOS, Android, iOS",
        score: "4.7 / 5.0",
        mode: "Freemium Model",
        link: "https://www.perplexity.ai"
    }
},
"midjourney": {
    title: "Midjourney - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #7c3aed, #4f46e5)",
    badgeIcon: "fas fa-palette",
    badgeText: "AI IMAGE GENERATOR",
    name: "Midjourney",
    image: "images/midjourney.jpg",
    
    paragraphs: [
        "Midjourney is one of the world's most popular AI image generation platforms, allowing users to create stunning artwork, illustrations, concept designs, digital paintings, and photorealistic images from simple text prompts. It is widely recognized for its artistic quality, creativity, and visually impressive outputs.",
        "Midjourney is extensively used by designers, artists, marketers, content creators, game developers, architects, and businesses to generate high-quality visuals quickly. Its advanced AI models can transform ideas into professional-grade images across a wide range of artistic styles and creative industries."
    ],
    
    features: [
        { icon: "fas fa-image", text: "Text-To-Image Generation" },
        { icon: "fas fa-paint-brush", text: "Artistic Style Creation" },
        { icon: "fas fa-magic", text: "Creative Concept Visualization" },
        { icon: "fas fa-camera", text: "Photorealistic Image Generation" },
        { icon: "fas fa-expand", text: "Image Upscaling & Enhancement" },
        { icon: "fas fa-layer-group", text: "Image Variations" },
        { icon: "fas fa-cubes", text: "Advanced Prompt Controls" },
        { icon: "fas fa-globe", text: "Community Showcase Gallery" },
        { icon: "fas fa-lightbulb", text: "Creative Inspiration Tools" },
        { icon: "fas fa-rocket", text: "High-Resolution Outputs" }
    ],
    
    useCases: [
        { label: "🎨 Designers:", text: "Concept Art, Branding Assets, Product Mockups, Visual Exploration, and Design Inspiration." },
        { label: "🎬 Content Creators:", text: "YouTube Thumbnails, Social Media Graphics, Visual Storytelling, and Creative Content Production." },
        { label: "🕹️ Game Developers:", text: "Character Design, Environment Concepts, Game Assets, and World-Building Visuals." },
        { label: "🏢 Businesses:", text: "Marketing Visuals, Advertising Creatives, Product Concepts, and Presentation Graphics." },
        { label: "🏛️ Architects & Artists:", text: "Architectural Visualization, Interior Concepts, Digital Artwork, and Creative Experimentation." }
    ],
    
    pros: [
        "Exceptional Image Quality.",
        "Highly Creative And Artistic Results.",
        "Supports Multiple Art Styles.",
        "Fast Image Generation.",
        "Large Creative Community.",
        "Professional-Level Visual Outputs."
    ],
    
    cons: [
        "No Permanent Free Plan.",
        "Learning Prompt Engineering Takes Time.",
        "Lacks Advanced Multi-Layer Image Editing Tools.", // Naya point
        "Web Interface Features Can Vary From Discord Commands." // Discord vs Web ka difference
    ],
    
    pricingColor: "#7c3aed",
    pricing: [
        { plan: "Basic Plan", price: "$10 / mo", desc: "Entry-level image generation with limited monthly GPU usage." },
        { plan: "Standard Plan", price: "$30 / mo", desc: "More generation hours, faster processing, and expanded creative capabilities." },
        { plan: "Pro Plan", price: "$60 / mo", desc: "Higher limits, advanced features, and priority generation access." }
    ],
    
    alternatives: ["DALL·E", "Adobe Firefly", "Stable Diffusion", "Leonardo AI", "Ideogram"],
    
    faqs: [
        { q: "What Is Midjourney?", a: "Midjourney is an AI-powered image generation platform that creates artwork and visuals from text descriptions." },
        { q: "Is Midjourney Free?", a: "Midjourney primarily operates through paid subscription plans and does not offer a permanent free plan." },
        { q: "Can Midjourney Create Realistic Images?", a: "Yes. Midjourney can generate highly realistic photos, portraits, landscapes, and product visuals." },
        { q: "Who Uses Midjourney?", a: "Designers, artists, marketers, content creators, architects, businesses, and game developers commonly use Midjourney." },
        { q: "Do I Need Design Skills To Use Midjourney?", a: "No. Anyone can create impressive visuals by writing descriptive text prompts, though better prompts often produce better results." }
    ],
    
    verdict: "Midjourney is one of the most powerful AI image generation tools available today. Its outstanding image quality, artistic flexibility, and ability to transform simple ideas into stunning visuals make it a top choice for designers, artists, marketers, content creators, and creative professionals.",
    
    specs: {
        developer: "Midjourney, Inc.",
        category: "AI Image Generator & Creative Design AI",
        platforms: "Web, Discord",
        score: "4.8 / 5.0",
        mode: "Paid Subscription",
        link: "https://www.midjourney.com"
    }
},
"runway": {
    title: "Runway - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #ef4444, #f97316)",
    badgeIcon: "fas fa-video",
    badgeText: "AI VIDEO CREATION",
    name: "Runway",
    image: "images/runway.jpg",
    
    paragraphs: [
        "Runway is a leading AI-powered creative platform that enables users to generate, edit, and enhance videos, images, and multimedia content using advanced artificial intelligence. It is best known for its groundbreaking text-to-video and image-to-video generation capabilities, making professional video creation accessible to everyone.",
        "Runway is widely used by filmmakers, content creators, marketers, designers, agencies, and businesses to produce high-quality visual content without requiring advanced editing skills. Its suite of AI tools helps streamline video production, visual effects creation, motion graphics, and creative storytelling workflows."
    ],
    
    features: [
        { icon: "fas fa-video", text: "AI Text-To-Video Generation" },
        { icon: "fas fa-images", text: "Image-To-Video Animation" },
        { icon: "fas fa-magic", text: "AI Video Editing Tools" },
        { icon: "fas fa-film", text: "Cinematic Video Creation" },
        { icon: "fas fa-cut", text: "Background Removal" },
        { icon: "fas fa-wand-magic-sparkles", text: "Generative Visual Effects" },
        { icon: "fas fa-user-edit", text: "Object & Scene Editing" },
        { icon: "fas fa-layer-group", text: "Motion Graphics Assistance" },
        { icon: "fas fa-cloud", text: "Cloud-Based Workflow" },
        { icon: "fas fa-rocket", text: "Fast Content Production" }
    ],
    
    useCases: [
        { label: "🎬 Filmmakers:", text: "Concept Videos, Visual Effects, Storyboarding, Scene Creation, and Film Production Workflows." },
        { label: "📱 Content Creators:", text: "YouTube Videos, Shorts, Reels, TikTok Content, and Social Media Visual Production." },
        { label: "📈 Marketers:", text: "Video Advertisements, Product Promotions, Campaign Visuals, and Brand Storytelling." },
        { label: "🎨 Designers:", text: "Motion Graphics, Visual Prototypes, Creative Experiments, and Digital Content Creation." },
        { label: "🏢 Businesses:", text: "Training Videos, Presentations, Product Demonstrations, and Marketing Assets." }
    ],
    
    pros: [
        "Powerful AI Video Generation.",
        "Easy-To-Use Interface.",
        "Excellent Text-To-Video Capabilities.",
        "Cloud-Based Workflow.",
        "Useful For Professional Content Creation.",
        "Regularly Updated AI Models."
    ],
    
    cons: [
        "Advanced Features Require Paid Plans.",
        "Generated Videos May Need Manual Refinement.",
        "Rendering Can Consume Credits Quickly.",
        "Higher Resolution Exports Require Premium Access."
    ],
    
    pricingColor: "#f97316",
    pricing: [
        { plan: "Free Plan", price: "$0", desc: "Limited credits and access to core AI video generation tools." },
        { plan: "Standard Plan", price: "$12 / mo", desc: "More credits, higher export limits, and access to advanced creative tools." },
        { plan: "Pro Plan", price: "$28 / mo", desc: "Expanded usage limits, premium models, and professional content production features." }
    ],
    
    alternatives: ["Sora (OpenAI)", "Kling AI", "Luma AI", "Pika", "Adobe Firefly"],
    
    faqs: [
        { q: "What Is Runway?", a: "Runway is an AI-powered creative platform focused on video generation, video editing, visual effects, and multimedia content creation." },
        { q: "Can Runway Generate Videos From Text?", a: "Yes. Runway supports text-to-video generation, allowing users to create videos using simple text prompts." },
        { q: "Is Runway Free?", a: "Yes. Runway offers a free plan with limited credits and access to selected AI tools." },
        { q: "Who Uses Runway?", a: "Filmmakers, content creators, marketers, designers, agencies, and businesses commonly use Runway for video production." },
        { q: "Can Runway Replace Traditional Video Editing?", a: "Runway can significantly accelerate video production workflows, but complex professional projects may still benefit from traditional editing software." }
    ],
    
    verdict: "Runway is one of the most advanced AI video creation platforms available today. Its text-to-video technology, creative editing tools, and professional-grade content generation capabilities make it an excellent choice for filmmakers, marketers, designers, content creators, and businesses looking to produce videos faster and more efficiently.",
    
    specs: {
        developer: "Runway AI",
        category: "AI Video Generator & Creative Media AI",
        platforms: "Web, iOS",
        score: "4.7 / 5.0",
        mode: "Freemium Model",
        link: "https://runwayml.com"
    }
},
"leonardo-ai": {
    title: "Leonardo AI - AI Tool Details | AI Directory",
    badgeGradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    badgeIcon: "fas fa-paint-brush",
    badgeText: "AI IMAGE CREATION",
    name: "Leonardo AI",
    image: "images/leonardo ai.jpg",

    categories: [
        "AI Image Generator",
        "AI Art Generator"
    ],
    
    paragraphs: [
        "Leonardo AI is a powerful AI image generation platform designed for creating artwork, illustrations, concept designs, game assets, marketing visuals, and photorealistic images. It provides creators with advanced tools to generate high-quality visuals from simple text prompts.",
        "Leonardo AI is widely used by designers, artists, marketers, content creators, game developers, and businesses to produce professional-grade images quickly. Its customization options, fine-tuned AI models, and image editing capabilities make it one of the most popular AI art generation platforms available today."
    ],
    
    features: [
        { icon: "fas fa-image", text: "Text-To-Image Generation" },
        { icon: "fas fa-palette", text: "AI Art Creation" },
        { icon: "fas fa-gamepad", text: "Game Asset Generation" },
        { icon: "fas fa-camera", text: "Photorealistic Image Creation" },
        { icon: "fas fa-wand-magic-sparkles", text: "Prompt-Based Customization" },
        { icon: "fas fa-expand", text: "Image Upscaling" },
        { icon: "fas fa-edit", text: "AI Image Editing" },
        { icon: "fas fa-layer-group", text: "Custom AI Models" },
        { icon: "fas fa-paint-brush", text: "Realtime Canvas Generation" }, // Naya aur important feature
        { icon: "fas fa-video", text: "AI Motion & Video Generation" }      // Naya video feature
    ],
    
    useCases: [
        { label: "🎨 Designers:", text: "Concept Art, Product Visuals, Branding Assets, and Creative Design Exploration." },
        { label: "🎬 Content Creators:", text: "YouTube Thumbnails, Social Media Graphics, Blog Images, and Digital Content Creation." },
        { label: "🕹️ Game Developers:", text: "Character Design, Environment Concepts, Game Assets, and World Building." },
        { label: "📈 Marketers:", text: "Advertising Creatives, Promotional Graphics, Campaign Visuals, and Product Marketing." },
        { label: "🏢 Businesses:", text: "Professional Visual Content, Presentations, Product Concepts, and Branding Materials." }
    ],
    
    pros: [
        "High-Quality AI Image Generation.",
        "Excellent For Concept Art And Design.",
        "Supports Custom AI Models.",
        "Fast Rendering Performance.",
        "Free Plan Available.",
        "User-Friendly Interface."
    ],
    
    cons: [
        "Advanced Features Require Paid Plans.",
        "Credit-Based Usage System.",
        "Generated Results May Need Refinement.",
        "Some Premium Models Have Usage Limits."
    ],
    
    pricingColor: "#8b5cf6",
    pricing: [
        { plan: "Free Plan", price: "$0", desc: "Limited daily tokens for AI image generation and creative experimentation." },
        { plan: "Apprentice Plan", price: "$10 - $14 / mo", desc: "More generation credits, faster rendering, and enhanced creative tools." },
        { plan: "Artisan Plan", price: "$30 - $39 / mo", desc: "Higher usage limits, premium models, and advanced image creation features." }
    ],
    
    alternatives: ["Midjourney", "DALL·E", "Stable Diffusion", "Adobe Firefly", "Ideogram"],
    
    faqs: [
        { q: "What Is Leonardo AI?", a: "Leonardo AI is an AI-powered image generation platform that creates artwork, illustrations, game assets, and realistic images from text prompts." },
        { q: "Is Leonardo AI Free?", a: "Yes. Leonardo AI offers a free plan with daily credits for generating images." },
        { q: "Can Leonardo AI Create Game Assets?", a: "Yes. Leonardo AI is especially popular among game developers for creating characters, environments, and asset concepts." },
        { q: "Can Leonardo AI Generate Realistic Images?", a: "Yes. It can produce highly realistic photos, portraits, product images, and digital artwork." },
        { q: "Who Uses Leonardo AI?", a: "Designers, artists, marketers, content creators, game developers, and businesses commonly use Leonardo AI." }
    ],
    
    verdict: "Leonardo AI is one of the best AI image generation platforms for creators who need high-quality artwork, concept designs, game assets, and marketing visuals. Its combination of powerful AI models, customization options, and creator-focused tools makes it an excellent choice for both beginners and professionals.",
    
    specs: {
        developer: "Leonardo AI (An Adobe-rival / Canva Company)",
        category: "AI Image Generator & AI Art Generator",
        platforms: "Web, iOS, Android",
        score: "4.7 / 5.0",
        mode: "Freemium Model",
        link: "https://leonardo.ai"
    }
}
};