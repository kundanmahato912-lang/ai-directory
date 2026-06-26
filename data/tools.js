const tools = [

{
id: 1,
name: "ChatGPT",
categories: [
"Chatbot AI",
"Writing AI",
"Coding AI",
"Research AI",
"Productivity AI"
],
description: "AI assistant for chatting, writing, coding, and comprehensive research across multiple topics.",
image: "images/chatgpt.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=chatgpt",
tutorial: ""
},
{
id: 2,
name: "Claude",
categories: [
"Chatbot AI",
"Writing AI",
"Coding AI",
"Research AI",
"Productivity AI"
],
description: "Advanced AI assistant focused on deep reasoning, coding, and long-form document analysis.",
image: "images/claude.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=claude",
tutorial: ""
},
{
id: 3,
name: "Gemini",
categories: [
"Chatbot AI",
"Writing AI",
"Coding AI",
"Research AI",
"Productivity AI"
],
description: "Google multimodal AI assistant integrated with search, workspace tools, and logical reasoning.",
image: "images/gemini.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=gemini",
tutorial: ""
},
{
id: 4,
name: "Perplexity",
categories: [
"AI Search Engine",
"Research AI",
"Productivity AI"
],
description: "Conversational search engine that provides cited answers and structured overviews to queries.",
image: "images/perplexity.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=perplexity",
tutorial: "" 
},
{
id: 5,
name: "Midjourney",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Text-to-image generator that produces highly detailed, stylistic illustrations and digital artwork.",
image: "images/midjourney.jpg",
pricing: "$10/month",
website: "tool-details.html?tool=midjourney",
tutorial: ""
},
{
id: 6,
name: "Runway",
categories: [
"AI Video Generator",
"Video Editing AI"
],
description: "Generative video platform providing text-to-video, video-to-video, and advanced editing tools.",
image: "images/runway.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=runway",
tutorial: ""
},
{
id: 7,
name: "Pika",
categories: [
"AI Video Generator",
"AI Animation Generator"
],
description: "Idea-to-video platform that creates high-quality animations and cinematic clips from prompts.",
image: "images/pika.jpg",
pricing: "Freemium",
website: "https://pika.art",
tutorial: ""
},
{
id: 8,
name: "Leonardo AI",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Production-grade image generation tool optimized for gaming assets, artwork, and design.",
image: "images/leonardo ai.jpg",
pricing: "Freemium",
website: "tool-details.html?tool=leonardo-ai",
tutorial: ""
},
{
id: 9,
name: "ElevenLabs",
categories: [
"Voice AI",
"Text To Speech AI"
],
description: "Hyper-realistic voice generation software for speech synthesis, voice cloning, and dubbing.",
image: "images/elevenlabs.jpg",
pricing: "Freemium",
website: "https://elevenlabs.io",
tutorial: ""
},
{
id: 10,
name: "Synthesia",
categories: [
"AI Video Generator",
"AI Avatar"
],
description: "Video creation platform that converts text scripts into videos with realistic human avatars.",
image: "images/synthesia.jpg",
pricing: "$22/month",
website: "https://synthesia.io",
tutorial: ""
},
{
id: 11,
name: "Jasper",
categories: [
"Copywriting AI",
"Marketing AI"
],
description: "Enterprise grade AI platform for creating marketing copy, blogs, and brand-consistent content.",
image: "images/jasper.jpg",
pricing: "$39/month",
website: "https://jasper.ai",
tutorial: ""
},
{
id: 12,
name: "Copy.ai",
categories: [
"Copywriting AI",
"Marketing AI"
],
description: "GTM automation platform that writes high-converting sales and marketing content instantly.",
image: "images/copy ai.jpg",
pricing: "Freemium",
website: "https://copy.ai",
tutorial: ""
},
{
id: 13,
name: "Writesonic",
categories: [
"Blogging AI",
"SEO AI"
],
description: "SEO-optimized content writer for generating blog posts, ads, and product descriptions.",
image: "images/writesonic.PNG",
pricing: "Freemium",
website: "https://writesonic.com",
tutorial: ""
},
{
id: 14,
name: "Framer",
categories: [
"Website Builder AI",
"No Code AI"
],
description: "Design and publish responsive web interfaces directly from text inputs and prompts.",
image: "images/framer.jpg",
pricing: "Freemium",
website: "https://framer.com",
tutorial: ""
},
{
id: 15,
name: "Replit",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "Cloud-based development environment with collaborative AI features for writing software.",
image: "images/replit.jpg",
pricing: "Freemium",
website: "https://replit.com",
tutorial: ""
},
{
id: 16,
name: "Cursor",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "AI-first code editor designed for pair programming, refactoring, and code generation.",
image: "images/cursor.jpg",
pricing: "Freemium",
website: "https://cursor.com",
tutorial: ""
},
{
id: 17,
name: "GitHub Copilot",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "AI code completion tool that suggests lines or entire functions within code editors.",
image: "images/github copilot.jpg",
pricing: "$10/month",
website: "https://github.com/features/copilot",
tutorial: ""
},
{
id: 18,
name: "DeepSeek",
categories: [
"Chatbot AI",
"Coding AI"
],
description: "Open-source conversational AI model optimized for coding, mathematics, and complex reasoning.",
image: "images/deepseek.jpg",
pricing: "Free",
website: "https://deepseek.com",
tutorial: "" 
},
{
id: 19,
name: "Grok",
categories: [
"Chatbot AI",
"AI Search Engine"
],
description: "AI assistant powered by SpaceXAI, combining live social insights and real‑time conversations.",
image: "images/grok.jpg",
pricing: "GROK IS AVAILABLE INSIDE X (Twitter). Open X to start chatting.",
website: "",
tutorial: ""
},
{
id: 20,
name: "Hugging Face",
categories: [
"Developer Tools AI"
],
description: "Open platform and community for sharing machine learning models, datasets, and web apps.",
image: "images/hugging face.jpg",
pricing: "Freemium",
website: "https://huggingface.co",
tutorial: ""
},
{
id: 21,
name: "Notion AI",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Integrated writing assistant that summarizes notes, drafts ideas, and autofills tables inside Notion.",
image: "images/notion ai.jpg",
pricing: "$8/month",
website: "https://notion.so",
tutorial: ""
},
{
id: 22,
name: "Canva AI",
categories: [
"UI Design AI",
"Productivity AI"
],
description: "Suite of creative tools for image editing, asset generation, and layout design automation.",
image: "images/canva ai.jpg",
pricing: "Freemium",
website: "https://canva.com",
tutorial: ""
},
{
id: 23,
name: "Adobe Firefly",
categories: [
"AI Image Generator",
"AI Photo Editor"
],
description: "Generative AI models embedded in Creative Cloud for image filling, vector styling, and text effects.",
image: "images/adobe firefly.jpg",
pricing: "Freemium",
website: "https://adobe.com/firefly",
tutorial: ""
},
{
id: 24,
name: "v0",
categories: [
"UI Design AI",
"Developer Tools AI"
],
description: "Generative UI system by Vercel producing production-ready frontend code from descriptions.",
image: "images/v0.jpg",
pricing: "Freemium",
website: "https://v0.dev",
tutorial: ""
},
{
id: 25,
name: "Bolt.new",
categories: [
"App Builder AI",
"No Code AI"
],
description: "In-browser full-stack application creator that builds, runs, and deploys software directly.",
image: "images/bolt.new.jpg",
pricing: "Freemium",
website: "https://bolt.new",
tutorial: ""
},
{
id: 26,
name: "Lovable",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Full-stack development assistant that generates operational software products via chat.",
image: "images/lovable.jpg",
pricing: "Freemium",
website: "https://lovable.dev",
tutorial: ""
},
{
id: 27,
name: "Phind",
categories: [
"AI Search Engine",
"Coding AI"
],
description: "Search engine tailored specifically for software developers providing direct code answers.",
image: "images/phind.jpg",
pricing: "Freemium",
website: "https://phind.com",
tutorial: ""
},
{
id: 28,
name: "Blackbox AI",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "Coding companion that builds code, auto-completes functions, and extracts text from images.",
image: "images/blackbox ai.jpg",
pricing: "Freemium",
website: "https://blackbox.ai",
tutorial: ""
},
{
id: 29,
name: "Cody",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "AI coding assistant by Sourcegraph that reads and explains entire codebases seamlessly.",
image: "images/cody.jpg",
pricing: "Freemium",
website: "https://sourcegraph.com/cody",
tutorial: ""
},
{
id: 30,
name: "Tabnine",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "Context-aware code prediction tool supporting multiple IDEs and secure localized privacy.",
image: "images/tabnine.jpg",
pricing: "Freemium",
website: "https://tabnine.com",
tutorial: ""
},
{
id: 31,
name: "Gamma",
categories: [
"Presentation AI",
"Productivity AI"
],
description: "Design generator creating polished slideshows, webpages, and documentation from text outlines.",
image: "images/gamma.jpg",
pricing: "Freemium",
website: "https://gamma.app",
tutorial: ""
},
{
id: 32,
name: "Beautiful.ai",
categories: [
"Presentation AI",
"Productivity AI"
],
description: "Smart slide deck builder that automatically applies professional layout design principles.",
image: "images/beautiful.ai.jpg",
pricing: "$12/month",
website: "https://beautiful.ai",
tutorial: ""
},
{
id: 33,
name: "Tome",
categories: [
"Presentation AI",
"Story Writing AI"
],
description: "Narrative canvas creating interactive business presentations, prototypes, and dynamic pitches.",
image: "images/tome.jpg",
pricing: "Freemium",
website: "https://tome.app",
tutorial: ""
},
{
id: 34,
name: "Otter.ai",
categories: [
"Meeting Assistant AI",
"Speech To Text AI"
],
description: "Automated meeting recorder providing live transcriptions, speaker tracking, and synthesis.",
image: "images/otter.ai.jpg",
pricing: "Freemium",
website: "https://otter.ai",
tutorial: ""
},
{
id: 35,
name: "Fireflies.ai",
categories: [
"Meeting Assistant AI",
"Speech To Text AI"
],
description: "Voice assistant that records, transcribes, and searches through team spoken conversations.",
image: "images/fireflies.ai.jpg",
pricing: "Freemium",
website: "https://fireflies.ai",
tutorial: ""
},
{
id: 36,
name: "Fathom",
categories: [
"Meeting Assistant AI",
"Productivity AI"
],
description: "Free Zoom, Teams, and Meet recording bot providing instant summarized action items.",
image: "images/fathom.jpg",
pricing: "Freemium",
website: "https://fathom.video",
tutorial: ""
},
{
id: 37,
name: "Descript",
categories: [
"Video Editing AI",
"Podcast Tools",
"Audio AI"
],
description: "Text-based audio and video editor making media creation as simple as editing docs.",
image: "images/descript.jpg",
pricing: "Freemium",
website: "https://descript.com",
tutorial: ""
},
{
id: 38,
name: "Grammarly",
categories: [
"Writing AI",
"Productivity AI"
],
description: "Writing assistant that corrects spelling, improves grammar, and refines prose tone contextually.",
image: "images/grammarly.jpg",
pricing: "Freemium",
website: "https://grammarly.com",
tutorial: ""
},
{
id: 39,
name: "QuillBot",
categories: [
"Writing AI"
],
description: "Paraphrasing tool and summary assistant that refines language vocabulary and structure.",
image: "images/quillbot.jpg",
pricing: "Freemium",
website: "https://quillbot.com",
tutorial: ""
},
{
id: 40,
name: "Hemingway Editor",
categories: [
"Writing AI"
],
description: "Readability enhancement platform that highlights complex sentences and passive voice issues.",
image: "images/hemingway editor.jpg",
pricing: "Freemium",
website: "https://hemingwayapp.com",
tutorial: ""
},
{
id: 41,
name: "Surfer SEO",
categories: [
"SEO AI",
"Writing AI"
],
description: "Content optimization platform mapping out keywords for ranking improvement on search engines.",
image: "images/surfer seo.jpg",
pricing: "$29/month",
website: "https://surferseo.com",
tutorial: ""
},
{
id: 42,
name: "Frase",
categories: [
"SEO AI",
"Blogging AI"
],
description: "Content research and brief creation assistant that automates search engine outline mapping.",
image: "images/frase.jpg",
pricing: "$15/month",
website: "https://frase.io",
tutorial: ""
},
{
id: 43,
name: "Semrush AI",
categories: [
"SEO AI",
"Marketing AI"
],
description: "Suite of intelligence tools specializing in content generation, ads optimization, and SEO tracking.",
image: "images/semrush ai.jpg",
pricing: "Freemium",
website: "https://semrush.com",
tutorial: ""
},
{
id: 44,
name: "HeyGen",
categories: [
"AI Video Generator",
"AI Avatar"
],
description: "Video localization and creation platform featuring hyper-realistic digital corporate spokespersons.",
image: "images/heygen.jpg",
pricing: "Freemium",
website: "https://heygen.com",
tutorial: ""
},
{
id: 45,
name: "D-ID",
categories: [
"AI Video Generator",
"AI Avatar"
],
description: "Animate still profile photographs into talking presenters using audio scripts or text.",
image: "images/d-id.jpg",
pricing: "Freemium",
website: "https://d-id.com",
tutorial: ""
},
{
id: 46,
name: "Colossyan",
categories: [
"AI Video Generator",
"AI Education"
],
description: "Workplace training video creator featuring digital actors, localized accents, and quizzes.",
image: "images/colossyan.jpg",
pricing: "$19/month",
website: "https://colossyan.com",
tutorial: ""
},
{
id: 47,
name: "Murf AI",
categories: [
"Text To Speech AI",
"Voice AI"
],
description: "Studio grade natural sounding synthetic voices for advertisements, audiobooks, and software presentations.",
image: "images/murf ai.jpg",
pricing: "Freemium",
website: "https://murf.ai",
tutorial: ""
},
{
id: 48,
name: "Play.ht",
categories: [
"Text To Speech AI",
"Voice AI"
],
description: "Extensive conversational voice generation ecosystem with high fidelity cloning capabilities.",
image: "images/play.ht.jpg",
pricing: "Freemium",
website: "https://play.ht",
tutorial: ""
},
{
id: 49,
name: "Lovo AI",
categories: [
"Text To Speech AI",
"Voice AI"
],
description: "Voice platform with integrated content features for video producers and course creators.",
image: "images/lovo ai.jpg",
pricing: "Freemium",
website: "https://lovo.ai",
tutorial: ""
},
{
id: 50,
name: "Speechify",
categories: [
"Text To Speech AI"
],
description: "Screen reader converting documents, books, and articles into natural voice formats.",
image: "images/speechify.jpg",
pricing: "Freemium",
website: "https://speechify.com",
tutorial: ""
},
{
id: 51,
name: "Suno",
categories: [
"AI Music Generator"
],
description: "Create complete vocal and instrumental audio compositions using simple plain language prompts.",
image: "images/suno.jpg",
pricing: "Freemium",
website: "https://suno.com",
tutorial: ""
},
{
id: 52,
name: "Udio",
categories: [
"AI Music Generator"
],
description: "Music generation service optimizing high-fidelity vocal tracks and intricate instrumental mixing.",
image: "images/udio.jpg",
pricing: "Freemium",
website: "https://udio.com",
tutorial: ""
},
{
id: 53,
name: "Soundraw",
categories: [
"AI Music Generator"
],
description: "Royalty-free music composer enabling customization of tempo, instruments, and audio track length.",
image: "images/soundraw.jpg",
pricing: "Freemium",
website: "https://soundraw.io",
tutorial: ""
},
{
id: 54,
name: "Mubert",
categories: [
"AI Music Generator"
],
description: "Streaming background loops and dynamic audio tracks tailored for content creators and streams.",
image: "images/mubert.jpg",
pricing: "Freemium",
website: "https://mubert.com",
tutorial: ""
},
{
id: 55,
name: "Boomy",
categories: [
"AI Music Generator"
],
description: "Instant song generation engine that submits your created tracking directly to streaming outlets.",
image: "images/boomy.jpg",
pricing: "Freemium",
website: "https://boomy.com",
tutorial: ""
},
{
id: 56,
name: "Stable Diffusion",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Open weights image generation system giving fine grained architectural prompt control to users.",
image: "images/stable diffusion.jpg",
pricing: "Free",
website: "https://stability.ai",
tutorial: ""
},
{
id: 57,
name: "DALL-E 3",
categories: [
"AI Image Generator"
],
description: "OpenAI visual model translating text details into accurate visual renderings with accuracy.",
image: "images/dall-e 3.jpg",
pricing: "Freemium",
website: "https://openai.com/dall-e-3",
tutorial: ""
},
{
id: 58,
name: "Clipdrop",
categories: [
"AI Photo Editor",
"AI Background Remover"
],
description: "Visual enhancement applications specializing in re-lighting, upscale, and isolating item layers.",
image: "images/clipdrop.jpg",
pricing: "Freemium",
website: "https://clipdrop.co",
tutorial: ""
},
{
id: 59,
name: "Photoroom",
categories: [
"AI Background Remover",
"AI Photo Editor"
],
description: "E-commerce focused image isolating tool providing high volume background replacements seamlessly.",
image: "images/photoroom.jpg",
pricing: "Freemium",
website: "https://photoroom.com",
tutorial: ""
},
{
id: 60,
name: "Remini",
categories: [
"AI Photo Editor"
],
description: "Photo restoration engine modernizing blurry historical shots and low resolution smartphone portraits.",
image: "images/remini.jpg",
pricing: "Freemium",
website: "https://remini.ai",
tutorial: ""
},
{
id: 61,
name: "Khroma",
categories: [
"UI Design AI"
],
description: "Color palette tool calibrated to individual tastes providing tailored mock design options.",
image: "images/khroma.jpg",
pricing: "Free",
website: "https://khroma.co",
tutorial: ""
},
{
id: 62,
name: "Looka",
categories: [
"AI Logo Generator",
"Branding AI"
],
description: "Identity creator building complete brand materials and high-res vector logos programmatically.",
image: "images/looka.jpg",
pricing: "Freemium",
website: "https://looka.com",
tutorial: ""
},
{
id: 63,
name: "Brandmark",
categories: [
"AI Logo Generator"
],
description: "Logo design software crafting custom icon pairings and social layouts instantly.",
image: "images/brandmark.jpg",
pricing: "$25",
website: "https://brandmark.io",
tutorial: ""
},
{
id: 64,
name: "Tailor Brands",
categories: [
"AI Logo Generator",
"Marketing AI"
],
description: "All in one corporate setup wizard packaging logo graphics alongside domain tracking tools.",
image: "images/tailor brands.jpg",
pricing: "Freemium",
website: "https://tailorbrands.com",
tutorial: ""
},
{
id: 65,
name: "Uizard",
categories: [
"UI Design AI",
"UX Design AI"
],
description: "Wireframe mapping application prototyping design layouts derived directly from hand drawn diagrams.",
image: "images/uizard.jpg",
pricing: "Freemium",
website: "https://uizard.io",
tutorial: ""
},
{
id: 66,
name: "Galileo AI",
categories: [
"UI Design AI",
"UX Design AI"
],
description: "Interface generation workspace converting user request briefs into fully editable Figma layouts.",
image: "images/galileo ai.jpg",
pricing: "Freemium",
website: "https://usegalileo.ai",
tutorial: ""
},
{
id: 67,
name: "Visily",
categories: [
"UI Design AI",
"No Code AI"
],
description: "Collaboration frame constructor enabling teams to craft app designs from screenshots instantly.",
image: "images/visily.jpg",
pricing: "Freemium",
website: "https://visily.ai",
tutorial: ""
},
{
id: 68,
name: "Relume",
categories: [
"Website Builder AI",
"UX Design AI"
],
description: "Site architecture builder structuring component sitemaps and wireframe copy via prompt inputs.",
image: "images/relume.jpg",
pricing: "Freemium",
website: "https://relume.io",
tutorial: ""
},
{
id: 69,
name: "Webflow AI",
categories: [
"Website Builder AI",
"No Code AI"
],
description: "Web development engine embedding assistive intelligence directly inside layout configuration workspaces.",
image: "images/webflow ai.jpg",
pricing: "Freemium",
website: "https://webflow.com",
tutorial: ""
},
{
id: 70,
name: "Bubble AI",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Full-stack web software developer integrating visual editing tools alongside logic setup assistants.",
image: "images/bubble ai.jpg",
pricing: "Freemium",
website: "https://bubble.io",
tutorial: ""
},
{
id: 71,
name: "Softr AI",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Data table interface builder drafting client portals instantly out of existing records.",
image: "images/softr ai.jpg",
pricing: "Freemium",
website: "https://softr.io",
tutorial: ""
},
{
id: 72,
name: "FlutterFlow AI",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Cross-platform mobile building software using intuitive text commands to code UI components.",
image: "images/flutterflow ai.jpg",
pricing: "Freemium",
website: "https://flutterflow.io",
tutorial: ""
},
{
id: 73,
name: "Zapier Central",
categories: [
"Automation AI",
"Workflow AI"
],
description: "Persistent interactive work bots executing actions across thousands of interconnected enterprise ecosystems.",
image: "images/zapier central.jpg",
pricing: "Freemium",
website: "https://zapier.com/central",
tutorial: ""
},
{
id: 74,
name: "Make",
categories: [
"Automation AI",
"Workflow AI"
],
description: "Visual application integrator structuring complex automated workflows using smart contextual logic builders.",
image: "images/make.jpg",
pricing: "Freemium",
website: "https://make.com",
tutorial: ""
},
{
id: 75,
name: "Relay",
categories: [
"Automation AI",
"Workflow AI"
],
description: "Team oriented pipeline automation software integrating human validation points inside automated tracks.",
image: "images/relay.jpg",
pricing: "$9/month",
website: "https://relay.app",
tutorial: ""
},
{
id: 76,
name: "Bardeen",
categories: [
"Automation AI",
"Workflow AI"
],
description: "Browser workspace automation tool scraping text data and driving operational apps contextually.",
image: "images/bardeen.jpg",
pricing: "Freemium",
website: "https://bardeen.ai",
tutorial: ""
},
{
id: 77,
name: "Fin",
categories: [
"Customer Support AI"
],
description: "Intercom automated customer representative resolving modern ticket queries based on existing documentation.",
image: "images/fin.jpg",
pricing: "Custom Pricing",
website: "https://intercom.com/fin",
tutorial: ""
},
{
id: 78,
name: "Zendesk AI",
categories: [
"Customer Support AI"
],
description: "Service center agent evaluating intent and sentiment parameters to accelerate customer response resolutions.",
image: "images/zendesk ai.jpg",
pricing: "$19/month",
website: "https://zendesk.com",
tutorial: ""
},
{
id: 79,
name: "Ada",
categories: [
"Customer Support AI"
],
description: "Customer service automation solution resolving enterprise level support tickets across various channels.",
image: "images/ada.jpg",
pricing: "Enterprise Pricing",
website: "https://ada.cx",
tutorial: ""
},
{
id: 80,
name: "Drift",
categories: [
"Sales AI",
"Chatbot AI"
],
description: "Conversational marketing pipeline screening digital traffic to schedule direct meetings for human sales agents.",
image: "images/drift.jpg",
pricing: "$2,500/month",
website: "https://drift.com",
tutorial: ""
},
{
id: 81,
name: "Gong",
categories: [
"Sales AI",
"AI Analytics"
],
description: "Sales transaction insight collector evaluating consumer talk paths to enhance corporate closing metrics.",
image: "images/gong.jpg",
pricing: "Custom Pricing",
website: "https://gong.io",
tutorial: ""
},
{
id: 82,
name: "Chorus",
categories: [
"Sales AI",
"Meeting Assistant AI"
],
description: "Conversation visibility solution capturing performance analytics from outbound business relationships.",
image: "images/chorus.jpg",
pricing: "Custom Pricing",
website: "https://chorus.ai",
tutorial: ""
},
{
id: 83,
name: "Einstein",
categories: [
"CRM AI",
"Sales AI"
],
description: "Salesforce native intelligent engine surfacing predictive purchase behavior metrics from enterprise data layers.",
image: "images/einstein.jpg",
pricing: "Custom Pricing",
website: "https://salesforce.com/einstein",
tutorial: ""
},
{
id: 84,
name: "ChatSpot",
categories: [
"CRM AI",
"Marketing AI"
],
description: "HubSpot conversational system accelerating profile tracking and record updating operations using conversational text.",
image: "images/chatspot.jpg",
pricing: "Free",
website: "https://chatspot.ai",
tutorial: ""
},
{
id: 85,
name: "Lavender",
categories: [
"Email Assistant AI",
"Sales AI"
],
description: "Sales message evaluation framework grading candidate text to optimize total clickthrough metrics.",
image: "images/lavender.jpg",
pricing: "Freemium",
website: "https://lavender.ai",
tutorial: ""
},
{
id: 86,
name: "Regie.ai",
categories: [
"Sales AI",
"Copywriting AI"
],
description: "Outbound email campaign generator drafting personalized sequences matching specific customer personas.",
image: "images/regie.ai.jpg",
pricing: "Freemium",
website: "https://regie.ai",
tutorial: ""
},
{
id: 87,
name: "Seamless.ai",
categories: [
"Sales AI",
"CRM AI"
],
description: "Sales prospect locator scanning directory footprints to uncover direct dials and email contacts.",
image: "images/seamless.ai.jpg",
pricing: "Freemium",
website: "https://seamless.ai",
tutorial: ""
},
{
id: 88,
name: "Zoom AI Companion",
categories: [
"Meeting Assistant AI",
"Productivity AI"
],
description: "Meeting recap extension outlining action items directly inside communications dashboards.",
image: "images/zoom ai companion.jpg",
pricing: "Included with plan",
website: "https://zoom.com",
tutorial: ""
},
{
id: 89,
name: "Microsoft Copilot",
categories: [
"Productivity AI",
"Chatbot AI"
],
description: "Office suite assistant writing text drafts, organizing spreadsheet lines, and building slide presentations.",
image: "images/microsoft copilot.jpg",
pricing: "Freemium",
website: "https://copilot.microsoft.com",
tutorial: ""
},
{
id: 90,
name: "Julius AI",
categories: [
"AI Data Analysis",
"Spreadsheet AI"
],
description: "Data interpreter tool transforming spreadsheet tables into clean python models and charted charts.",
image: "images/julius ai.jpg",
pricing: "Freemium",
website: "https://julius.ai",
tutorial: ""
},
{
id: 91,
name: "Akkio",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Predictive analytics software building data operations and business outcomes without code.",
image: "images/akkio.jpg",
pricing: "$49/month",
website: "https://akkio.com",
tutorial: ""
},
{
id: 92,
name:"MonkeyLearn",
categories: [
"AI Data Analysis", 
"AI Analytics"
],
description:"Text parsing toolkit extracting specific user intent trends directly from feedback files.",
image: "images/monkeylearn.jpg",
pricing:"$299/month",
website:"https://monkeylearn.com",
tutorial: ""
},
{
id: 93,
name:"Polymer",
categories: [
"AI Data Analysis",
"Spreadsheet AI"
],
description:"Spreadsheet visualizer instantly constructing functional relational dashboards from row inputs.",
image: "images/polymer.jpg",
pricing:"$25/month",
website:"https://polymersearch.com",
tutorial: ""
},
{
id: 94,
name:"Feedly Leo",
categories: [
"AI Search Engine", 
"Research AI"
],
description:"Information filter assistant monitoring global trade publications to surface relevant specific event patterns.",
image: "images/feedly leo.jpg",
pricing:"$8.25/month",
website:"https://feedly.com",
tutorial: ""
},
{
id: 95,
name:"Consensus",
categories: [
"Research AI", 
"AI Search Engine"
],
description:"Scientific research terminal providing answers backed by peer reviewed journal documentation.",
image: "images/consensus.jpg",
pricing:"Freemium",
website:"https://consensus.app",
tutorial: ""
},
{
id: 96,
name:"Elicit",
categories: [
"Research AI"
],
description:"Literature research tracker discovering paper connections and pulling insight metrics across research papers.",
image: "images/elicit.jpg",
pricing:"Freemium",
website:"https://elicit.com",
tutorial: ""
},
{
id: 97,
name:"SciSpace",
categories: [
"Research AI", 
"AI Education"
],
description:"Paper summary companion decoding complex mathematics and explaining paragraphs directly within text viewer platforms.",
image: "images/scispace.jpg",
pricing:"Freemium",
website:"https://typeset.io",
tutorial: ""
},
{
id: 98,
name:"PDF.ai",
categories: [
"Productivity AI", 
"Chatbot AI"
],
description:"Document reading workspace extracting chapter highlights and responding to queries from uploaded files.",
image: "images/pdfai.jpg",
pricing:"Freemium",
website:"https://pdf.ai",
tutorial: ""
},
{
id: 99,
name:"ChatPDF",
categories: [
"Productivity AI", 
"Chatbot AI"
],
description:"Document translation and interaction app pulling summary responses directly out of uploaded text files.",
image: "images/chatpdf.jpg",
pricing:"Freemium",
website:"https://chatpdf.com",
tutorial: ""
},
{
id: 100,
name: "Coda AI",
categories: [
"Productivity AI",
"Automation AI"
],
description: "Interactive doc builder featuring integrated data assistants capable of writing content summaries, parsing tables, and triggering actions.",
image: "images/coda ai.jpg",
pricing: "Freemium",
website: "https://coda.io/product/ai",
tutorial: ""
},
{
id: 101,
name: "Llama 3",
categories: [
"Chatbot AI",
"Coding AI",
"Research AI"
],
description: "Powerful open-source large language model by Meta built for coding, reasoning, and conversational tasks.",
image: "images/llama 3.jpg",
pricing: "Free",
website: "https://llama.meta.com",
tutorial: ""
},
{
id: 102,
name: "Mistral",
categories: [
"Chatbot AI",
"Coding AI"
],
description: "Highly efficient open-weight language model optimized for rapid local inferencing and robust reasoning.",
image: "images/mistral.jpg",
pricing: "Freemium",
website: "https://mistral.ai",
tutorial: ""
},
{
id: 103,
name: "Cohere",
categories: [
"Writing AI",
"Developer Tools AI"
],
description: "Enterprise language AI platform specializing in search, summarization, and secure text generation endpoints.",
image: "images/cohere.jpg",
pricing: "Freemium",
website: "https://cohere.com",
tutorial: ""
},
{
id: 104,
name: "HuggingChat",
categories: [
"Chatbot AI",
"Research AI"
],
description: "Open-source conversational interface built by Hugging Face allowing users to interact with multiple models.",
image: "images/huggingchat.jpg",
pricing: "Free",
website: "https://huggingface.co/chat",
tutorial: ""
},
{
id: 105,
name: "Poe",
categories: [
"Chatbot AI",
"AI Search Engine"
],
description: "Aggregator platform providing fast access to top language models like Claude, GPT, and custom bots.",
image: "images/poe.jpg",
pricing: "Freemium",
website: "https://poe.com",
tutorial: ""
},
{
id: 106,
name: "Pi",
categories: [
"Chatbot AI"
],
description: "Empathetic conversational agent designed to act as a supportive personal companion and sounding board.",
image: "images/pi.jpg",
pricing: "Free",
website: "https://pi.ai",
tutorial: ""
},
{
id: 107,
name: "Character.ai",
categories: [
"Chatbot AI",
"Story Writing AI"
],
description: "Platform for creating and chatting with distinct AI personas, fictional characters, and historical figures.",
image: "images/character.ai.jpg",
pricing: "Freemium",
website: "https://character.ai",
tutorial: ""
},
{
id: 108,
name: "Replika",
categories: [
"Chatbot AI",
"AI Avatar"
],
description: "Virtual AI companion application designed for emotional support, casual conversation, and daily check-ins.",
image: "images/replika.jpg",
pricing: "Freemium",
website: "https://replika.com",
tutorial: ""
},
{
id: 109,
name: "You.com",
categories: [
"AI Search Engine",
"Research AI"
],
description: "Private search engine utilizing generative AI to synthesize answers and generate text instantly.",
image: "images/you.com.jpg",
pricing: "Freemium",
website: "https://you.com",
tutorial: ""
},
{
id: 110,
name: "Andi Search",
categories: [
"AI Search Engine",
"Research AI"
],
description: "Conversational search assistant providing fact-checked summaries instead of traditional web links.",
image: "images/andi search.jpg",
pricing: "Free",
website: "https://andisearch.com",
tutorial: ""
},
{
id: 111,
name: "Kagi",
categories: [
"AI Search Engine"
],
description: "Premium, ad-free search engine integrating language models for quick summaries and enhanced privacy.",
image: "images/kagi.jpg",
pricing: "Custom Pricing",
website: "https://kagi.com",
tutorial: ""
},
{
id: 112,
name: "Microsoft Copilot Pro",
categories: [
"Productivity AI",
"Writing AI"
],
description: "Premium AI workspace integration bringing advanced generative capabilities across all major Office applications.",
image: "images/microsoft copilot pro.jpg",
pricing: "$20/month",
website: "https://microsoft.com/copilot",
tutorial: ""
},
{
id: 113,
name: "Luma Dream Machine",
categories: [
"AI Video Generator",
"AI 3D Generator"
],
description: "Next-generation video creation tool converting still images and text prompts into fluid video.",
image: "images/luma dream machine.jpg",
pricing: "Freemium",
website: "https://lumalabs.ai",
tutorial: ""
},
{
id: 114,
name: "Kling AI",
categories: [
"AI Video Generator"
],
description: "Advanced text-to-video generation software focused on hyper-realistic motion physics and long video generations.",
image: "images/kling ai.jpg",
pricing: "Freemium",
website: "https://klingai.com",
tutorial: ""
},
{
id: 115,
name: "Haiper",
categories: [
"AI Video Generator",
"Video Editing AI"
],
description: "Creative visual model platform specializing in high-quality short video generations and motion transformations.",
image: "images/haiper.jpg",
pricing: "Free",
website: "https://haiper.ai",
tutorial: ""
},
{
id: 116,
name: "InVideo AI",
categories: [
"AI Video Generator",
"YouTube AI"
],
description: "Prompt-to-video creator automatically assembling scripts, stock footage, and voiceovers into ready-to-publish videos.",
image: "images/invideo ai.jpg",
pricing: "Freemium",
website: "https://invideo.io",
tutorial: ""
},
{
id: 117,
name: "Fliki",
categories: [
"AI Video Generator",
"Text To Speech AI"
],
description: "Software converting blog posts and text files into narrated videos using realistic synthetic voices.",
image: "images/fliki.jpg",
pricing: "Freemium",
website: "https://fliki.ai",
tutorial: ""
},
{
id: 118,
name: "Pictory",
categories: [
"Video Editing AI",
"Short Video AI"
],
description: "Marketing tool transforming long-form content and Zoom recordings into highly engaging branded short clips.",
image: "images/pictory.jpg",
pricing: "Freemium",
website: "https://pictory.ai",
tutorial: ""
},
{
id: 119,
name: "Kapwing AI",
categories: [
"Video Editing AI",
"Productivity AI"
],
description: "Collaborative browser-based video editor featuring automatic subtitling, script generation, and silent gap removal.",
image: "images/kapwing ai.jpg",
pricing: "Freemium",
website: "https://kapwing.com",
tutorial: ""
},
{
id: 120,
name: "Opus Clip",
categories: [
"Short Video AI",
"YouTube AI"
],
description: "Repurposing engine slicing long podcasts into viral short-form videos with animated captions automatically.",
image: "images/opus clip.jpg",
pricing: "Freemium",
website: "https://opus.pro",
tutorial: ""
},
{
id: 121,
name: "Veed AI",
categories: [
"Video Editing AI",
"Short Video AI"
],
description: "Online video creation suite providing automatic translation, background noise removal, and auto-subtitling features.",
image: "images/veed ai.jpg",
pricing: "Freemium",
website: "https://veed.io",
tutorial: ""
},
{
id: 122,
name: "Topaz Video AI",
categories: [
"Video Editing AI"
],
description: "Desktop software utilizing neural networks to upscale, stabilize, and enhance low-resolution video footage.",
image: "images/topaz video ai.jpg",
pricing: "$299",
website: "https://topazlabs.com",
tutorial: ""
},
{
id: 123,
name: "Filmora AI",
categories: [
"Video Editing AI"
],
description: "Consumer video editor offering smart cutouts, audio stretching, and automated color correction algorithms.",
image: "images/filmora ai.jpg",
pricing: "Freemium",
website: "https://filmora.wondershare.com",
tutorial: ""
},
{
id: 124,
name: "CapCut AI",
categories: [
"Video Editing AI",
"Short Video AI"
],
description: "Mobile and desktop editor equipped with auto-captions, trending effects, and background removal capabilities.",
image: "images/capcut ai.jpg",
pricing: "Freemium",
website: "https://capcut.com",
tutorial: ""
},
{
id: 125,
name: "WellSaid Labs",
categories: [
"Text To Speech AI",
"Voice AI"
],
description: "Enterprise text-to-speech platform generating realistic voiceovers tailored for corporate training and commercial advertisements.",
image: "images/wellsaid labs.jpg",
pricing: "Custom Pricing",
website: "https://wellsaidlabs.com",
tutorial: ""
},
{
id: 126,
name: "Resemble AI",
categories: [
"Voice AI",
"Text To Speech AI"
],
description: "Voice cloning software providing real-time speech generation and deepfake audio detection for creators.",
image: "images/resemble ai.jpg",
pricing: "Freemium",
website: "https://resemble.ai",
tutorial: ""
},
{
id: 127,
name: "Altered Studio",
categories: [
"Voice AI",
"AI Sound Effects"
],
description: "Audio editor allowing voice morphing, acting transformations, and performance synthesis for game developers.",
image: "images/altered studio.jpg",
pricing: "Freemium",
website: "https://altered.ai",
tutorial: ""
},
{
id: 128,
name: "Coqui",
categories: [
"Voice AI",
"Text To Speech AI"
],
description: "Open-source voice cloning and text-to-speech studio targeting interactive video game character voiceovers.",
image: "images/coqui.jpg",
pricing: "Freemium",
website: "https://coqui.ai",
tutorial: ""
},
{
id: 129,
name: "Voicemaker",
categories: [
"Text To Speech AI"
],
description: "Online audio generation tool transforming text blocks into downloadable MP3 audio files efficiently.",
image: "images/voicemaker.jpg",
pricing: "Freemium",
website: "https://voicemaker.in",
tutorial: ""
},
{
id: 130,
name: "Whisper",
categories: [
"Speech To Text AI"
],
description: "Open-source automatic speech recognition system by OpenAI transcribing multiple languages with high accuracy.",
image: "images/whisper.jpg",
pricing: "Free",
website: "https://openai.com/research/whisper",
tutorial: ""
},
{
id: 131,
name: "AssemblyAI",
categories: [
"Speech To Text AI",
"Developer Tools AI"
],
description: "API platform helping developers transcribe audio, analyze sentiment, and summarize spoken data programmatically.",
image: "images/assemblyai.jpg",
pricing: "Freemium",
website: "https://assemblyai.com",
tutorial: ""
},
{
id: 132,
name: "Deepgram",
categories: [
"Speech To Text AI",
"Voice AI"
],
description: "High-speed foundational voice models providing real-time transcription and intelligence APIs for software developers.",
image: "images/deepgram.jpg",
pricing: "Freemium",
website: "https://deepgram.com",
tutorial: ""
},
{
id: 133,
name: "Rev AI",
categories: [
"Speech To Text AI",
"Productivity AI"
],
description: "Highly accurate transcription API utilizing advanced speech recognition models for enterprise media workflows.",
image: "images/rev ai.jpg",
pricing: "Custom Pricing",
website: "https://rev.ai",
tutorial: ""
},
{
id: 134,
name: "Sonix",
categories: [
"Speech To Text AI",
"AI Translation"
],
description: "Automated transcription and translation software featuring an interactive browser-based audio text editor.",
image: "images/sonix.jpg",
pricing: "$10/hour",
website: "https://sonix.ai",
tutorial: ""
},
{
id: 135,
name: "Riverside Magic Editor",
categories: [
"AI Podcast Tools",
"Video Editing AI"
],
description: "Podcast studio automating multi-track audio leveling, silences removal, and seamless transcript-based video editing.",
image: "images/riverside magic editor.jpg",
pricing: "Freemium",
website: "https://riverside.fm",
tutorial: ""
},
{
id: 136,
name: "Podcastle",
categories: [
"AI Podcast Tools",
"Voice AI"
],
description: "All-in-one web podcasting platform offering remote recording, AI noise cancellation, and automated sweetening.",
image: "images/podcastle.jpg",
pricing: "Freemium",
website: "https://podcastle.ai",
tutorial: ""
},
{
id: 137,
name: "Adobe Podcast",
categories: [
"AI Podcast Tools",
"AI Sound Effects"
],
description: "Web-based audio enhancer powered by AI that transforms amateur voice recordings into studio-quality sound.",
image: "images/adobe podcast.jpg",
pricing: "Freemium",
website: "https://podcast.adobe.com",
tutorial: ""
},
{
id: 138,
name: "Castmagic",
categories: [
"AI Podcast Tools",
"Marketing AI"
],
description: "Content multiplier transforming podcast audio files into structured show notes, social posts, and blogs.",
image: "images/castmagic.jpg",
pricing: "$39/month",
website: "https://castmagic.io",
tutorial: ""
},
{
id: 139,
name: "Swell AI",
categories: [
"AI Podcast Tools",
"Writing AI"
],
description: "Automated podcast copywriter generating transcripts, titles, and newsletters from uploaded media files.",
image: "images/swell ai.jpg",
pricing: "Freemium",
website: "https://swellai.com",
tutorial: ""
},
{
id: 140,
name: "Sudowrite",
categories: [
"Story Writing AI",
"Writing AI"
],
description: "Creative writing assistant helping fiction authors brainstorm plots, expand scenes, and break writer's block.",
image: "images/sudowrite.jpg",
pricing: "$19/month",
website: "https://sudowrite.com",
tutorial: ""
},
{
id: 141,
name: "NovelAI",
categories: [
"Story Writing AI",
"AI Image Generator"
],
description: "Monthly subscription service for AI-assisted authoring, storytelling, and anime-style virtual image synthesis.",
image: "images/novelai.jpg",
pricing: "$10/month",
website: "https://novelai.net",
tutorial: ""
},
{
id: 142,
name: "Rytr",
categories: [
"Copywriting AI",
"Writing AI"
],
description: "Affordable AI writing assistant generating emails, blogs, and marketing copy across various tones.",
image: "images/rytr.jpg",
pricing: "Freemium",
website: "https://rytr.me",
tutorial: ""
},
{
id: 143,
name: "Anyword",
categories: [
"Copywriting AI",
"Marketing AI"
],
description: "Data-driven copywriting platform providing predictive performance scores for digital advertisements and marketing emails.",
image: "images/anyword.jpg",
pricing: "$39/month",
website: "https://anyword.com",
tutorial: ""
},
{
id: 144,
name: "Wordtune",
categories: [
"Writing AI",
"Productivity AI"
],
description: "Browser extension rewriting sentences in real-time to adjust tone, length, and overall clarity.",
image: "images/wordtune.jpg",
pricing: "Freemium",
website: "https://wordtune.com",
tutorial: ""
},
{
id: 145,
name: "Peppertype",
categories: [
"Copywriting AI",
"Blogging AI"
],
description: "Content generation software accelerating the creation of social media captions and SEO marketing materials.",
image: "images/peppertype.jpg",
pricing: "$35/month",
website: "https://peppercontent.io",
tutorial: ""
},
{
id: 146,
name: "Copysmith",
categories: [
"Copywriting AI",
"AI Ecommerce"
],
description: "Enterprise content generator focusing on e-commerce product descriptions and large-scale catalogue updates.",
image: "images/copysmith.jpg",
pricing: "$19/month",
website: "https://copysmith.ai",
tutorial: ""
},
{
id: 147,
name: "Scalenut",
categories: [
"SEO AI",
"Blogging AI"
],
description: "SEO marketing platform utilizing AI to research, write, and optimize long-form organic content.",
image: "images/scalenut.jpg",
pricing: "$39/month",
website: "https://scalenut.com",
tutorial: ""
},
{
id: 148,
name: "AI-Writer",
categories: [
"Blogging AI",
"Writing AI"
],
description: "Text generation platform exclusively focused on drafting full-length, verifiable SEO articles from simple headlines.",
image: "images/ai-writer.jpg",
pricing: "$29/month",
website: "https://ai-writer.com",
tutorial: ""
},
{
id: 149,
name: "Neuroflash",
categories: [
"Copywriting AI",
"AI Image Generator"
],
description: "European AI content suite generating marketing texts and conceptual imagery with predictive performance analytics.",
image: "images/neuroflash.jpg",
pricing: "Freemium",
website: "https://neuroflash.com",
tutorial: ""
},
{
id: 150,
name: "INK",
categories: [
"SEO AI",
"Writing AI"
],
description: "All-in-one SEO workspace replacing multiple tools to generate, optimize, and protect web content.",
image: "images/ink.jpg",
pricing: "$39/month",
website: "https://inkforall.com",
tutorial: ""
},
{
id: 151,
name: "Outranking",
categories: [
"SEO AI",
"Blogging AI"
],
description: "SEO strategy platform automating content outlines and data-driven article drafts based on competitor analysis.",
image: "images/outranking.jpg",
pricing: "$29/month",
website: "https://outranking.io",
tutorial: ""
},
{
id: 152,
name: "MarketMuse",
categories: [
"SEO AI",
"Marketing AI"
],
description: "Content intelligence platform evaluating website topical authority to build optimized SEO content briefs.",
image: "images/marketmuse.jpg",
pricing: "Freemium",
website: "https://marketmuse.com",
tutorial: ""
},
{
id: 153,
name: "Clearscope",
categories: [
"SEO AI",
"Writing AI"
],
description: "Text optimization tool grading content readability and keyword density against top search engine results.",
image: "images/clearscope.jpg",
pricing: "$170/month",
website: "https://clearscope.io",
tutorial: ""
},
{
id: 154,
name: "Rank Math AI",
categories: [
"SEO AI",
"Blogging AI"
],
description: "WordPress plugin module generating smart SEO meta tags and optimizing on-page structure automatically.",
image: "images/rank math ai.jpg",
pricing: "Freemium",
website: "https://rankmath.com",
tutorial: ""
},
{
id: 155,
name: "GitHub Codespaces",
categories: [
"Developer Tools AI",
"Coding AI"
],
description: "Cloud-hosted development environments tightly integrated with AI copilot capabilities for faster remote programming.",
image: "images/github codespaces.jpg",
pricing: "Freemium",
website: "https://github.com/features/codespaces",
tutorial: ""
},
{
id: 156,
name: "Amazon Q",
categories: [
"Coding AI",
"Productivity AI"
],
description: "Enterprise generative assistant tailored to AWS services for coding, troubleshooting, and secure business intelligence.",
image: "images/amazon q.jpg",
pricing: "Custom Pricing",
website: "https://aws.amazon.com/q",
tutorial: ""
},
{
id: 157,
name: "Codeium",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "Free AI-powered code acceleration toolkit supporting numerous languages and IDEs for individual developers.",
image: "images/codeium.jpg",
pricing: "Freemium",
website: "https://codeium.com",
tutorial: ""
},
{
id: 158,
name: "Mintlify",
categories: [
"Developer Tools AI",
"Writing AI"
],
description: "Continuous documentation platform that reads codebases to automatically generate beautiful, maintained software manuals.",
image: "images/mintlify.jpg",
pricing: "Freemium",
website: "https://mintlify.com",
tutorial: ""
},
{
id: 159,
name: "Mutable.ai",
categories: [
"Coding AI",
"Developer Tools AI"
],
description: "AI software development tool converting raw codebase repositories into readable Wikipedia-style wiki pages.",
image: "images/mutable.ai.jpg",
pricing: "Freemium",
website: "https://mutable.ai",
tutorial: ""
},
{
id: 160,
name: "Warp",
categories: [
"Developer Tools AI",
"Productivity AI"
],
description: "Modern, Rust-based terminal integrating artificial intelligence command search and collaborative engineering workflows.",
image: "images/warp.jpg",
pricing: "Freemium",
website: "https://warp.dev",
tutorial: ""
},
{
id: 161,
name: "FigJam AI",
categories: [
"UX Design AI",
"Productivity AI"
],
description: "Whiteboarding assistant summarizing sticky notes and generating visual organizational charts from text prompts.",
image: "images/figjam ai.jpg",
pricing: "Freemium",
website: "https://figma.com/figjam",
tutorial: ""
},
{
id: 162,
name: "Miro Assist",
categories: [
"Productivity AI",
"Workflow AI"
],
description: "Collaborative canvas AI summarizing brainstorming sessions, clustering themes, and generating mind map layouts.",
image: "images/miro assist.jpg",
pricing: "Freemium",
website: "https://miro.com",
tutorial: ""
},
{
id: 163,
name: "Whimsical AI",
categories: [
"Productivity AI",
"UX Design AI"
],
description: "Visual workspace tool utilizing AI to rapidly construct wireframes, user flows, and logic sequences.",
image: "images/whimsical ai.jpg",
pricing: "Freemium",
website: "https://whimsical.com",
tutorial: ""
},
{
id: 164,
name: "tldraw",
categories: [
"UI Design AI",
"No Code AI"
],
description: "Infinite canvas tool leveraging AI to translate hand-drawn rough sketches into functional software code.",
image: "images/tldraw.jpg",
pricing: "Free",
website: "https://tldraw.com",
tutorial: ""
},
{
id: 165,
name: "Dora",
categories: [
"Website Builder AI",
"UI Design AI"
],
description: "No-code platform enabling designers to build interactive 3D web experiences using text-to-website generation.",
image: "images/dora.jpg",
pricing: "Freemium",
website: "https://dora.run",
tutorial: ""
},
{
id: 166,
name: "10Web",
categories: [
"Website Builder AI",
"SEO AI"
],
description: "Automated WordPress builder mimicking existing sites and optimizing backend performance via AI hosting.",
image: "images/10web.jpg",
pricing: "$20/month",
website: "https://10web.io",
tutorial: ""
},
{
id: 167,
name: "Hostinger AI",
categories: [
"Website Builder AI",
"Marketing AI"
],
description: "Integrated hosting site builder that generates copy, layouts, and logos for new web domains.",
image: "images/hostinger ai.jpg",
pricing: "$2.99/month",
website: "https://hostinger.com",
tutorial: ""
},
{
id: 168,
name: "Wix ADI",
categories: [
"Website Builder AI",
"AI Ecommerce"
],
description: "Artificial Design Intelligence engine building personalized, fully-functional business websites from short questionnaires.",
image: "images/wix adi.jpg",
pricing: "Freemium",
website: "https://wix.com",
tutorial: ""
},
{
id: 169,
name: "Dorik",
categories: [
"Website Builder AI",
"No Code AI"
],
description: "Single-page website builder using prompt generation for rapid landing page layouts and CMS integration.",
image: "images/dorik.jpg",
pricing: "Freemium",
website: "https://dorik.com",
tutorial: ""
},
{
id: 170,
name: "Glide",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Platform converting spreadsheet data into polished, user-friendly mobile and web applications without coding.",
image: "images/glide.jpg",
pricing: "Freemium",
website: "https://glideapps.com",
tutorial: ""
},
{
id: 171,
name: "Thunkable",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Drag-and-drop mobile app creator facilitating cross-platform native builds using integrated intelligent logic blocks.",
image: "images/thunkable.jpg",
pricing: "Freemium",
website: "https://thunkable.com",
tutorial: ""
},
{
id: 172,
name: "Adalo",
categories: [
"App Builder AI",
"No Code AI"
],
description: "Visual application builder enabling non-technical founders to launch customized mobile store apps rapidly.",
image: "images/adalo.jpg",
pricing: "Freemium",
website: "https://adalo.com",
tutorial: ""
},
{
id: 173,
name: "AppSheet AI",
categories: [
"App Builder AI",
"Productivity AI"
],
description: "Google Cloud no-code development platform building powerful business applications through natural language inputs.",
image: "images/appsheet ai.jpg",
pricing: "Freemium",
website: "https://appsheet.com",
tutorial: ""
},
{
id: 174,
name: "Draftbit",
categories: [
"App Builder AI",
"UI Design AI"
],
description: "Visual builder for React Native mobile apps allowing designers to export production-ready source code.",
image: "images/draftbit.jpg",
pricing: "Freemium",
website: "https://draftbit.com",
tutorial: ""
},
{
id: 175,
name: "Retool AI",
categories: [
"App Builder AI",
"Developer Tools AI"
],
description: "Internal tool builder injecting AI models directly into customized business dashboards and database applications.",
image: "images/retool ai.jpg",
pricing: "Freemium",
website: "https://retool.com",
tutorial: ""
},
{
id: 176,
name: "Vercel AI SDK",
categories: [
"Developer Tools AI",
"Coding AI"
],
description: "Open-source library streamlining the integration of streaming conversational text models into modern web frameworks.",
image: "images/vercel ai sdk.jpg",
pricing: "Free",
website: "https://sdk.vercel.ai",
tutorial: ""
},
{
id: 177,
name: "LangChain",
categories: [
"Developer Tools AI",
"Workflow AI"
],
description: "Programming framework simplifying the creation of complex context-aware applications backed by large language models.",
image: "images/langchain.jpg",
pricing: "Free",
website: "https://langchain.com",
tutorial: ""
},
{
id: 178,
name: "LlamaIndex",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Data framework enabling developers to effortlessly connect custom private data to public large language models.",
image: "images/llamaindex.jpg",
pricing: "Free",
website: "https://llamaindex.ai",
tutorial: ""
},
{
id: 179,
name: "Flowise",
categories: [
"Developer Tools AI",
"No Code AI"
],
description: "Open-source drag-and-drop interface for constructing custom LangChain applications and personalized chatbot logic visually.",
image: "images/flowise.jpg",
pricing: "Free",
website: "https://flowiseai.com",
tutorial: ""
},
{
id: 180,
name: "Pinecone",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Fully managed vector database facilitating fast information retrieval for scalable long-term AI memory.",
image: "images/pinecone.jpg",
pricing: "Freemium",
website: "https://pinecone.io",
tutorial: ""
},
{
id: 181,
name: "Weaviate",
categories: [
"Developer Tools AI",
"AI Search Engine"
],
description: "Open-source vector search engine allowing developers to store data embeddings and build robust recommendation systems.",
image: "images/weaviate.jpg",
pricing: "Freemium",
website: "https://weaviate.io",
tutorial: ""
},
{
id: 182,
name: "Chroma",
categories: [
"Developer Tools AI"
],
description: "Open-source AI-native embedding database designed specifically to improve developer productivity for RAG applications.",
image: "images/chroma.jpg",
pricing: "Free",
website: "https://trychroma.com",
tutorial: ""
},
{
id: 183,
name: "Milvus",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Highly scalable open-source vector database built to handle massive scale similarity search and analytics.",
image: "images/milvus.jpg",
pricing: "Free",
website: "https://milvus.io",
tutorial: ""
},
{
id: 184,
name: "Qdrant",
categories: [
"Developer Tools AI"
],
description: "Vector search engine database deployed in Rust providing production-grade performance for similarity matching.",
image: "images/qdrant.jpg",
pricing: "Freemium",
website: "https://qdrant.tech",
tutorial: ""
},
{
id: 185,
name: "Databricks MosaicML",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Enterprise platform providing infrastructure for securely training and deploying custom large-scale machine learning models.",
image: "images/databricks mosaicml.jpg",
pricing: "Custom Pricing",
website: "https://mosaicml.com",
tutorial: ""
},
{
id: 186,
name: "DataRobot",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Enterprise machine learning platform automating the preparation, building, and deployment of predictive analytical models.",
image: "images/datarobot.jpg",
pricing: "Custom Pricing",
website: "https://datarobot.com",
tutorial: ""
},
{
id: 187,
name: "H2O.ai",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Open-source generative AI and machine learning cloud platform solving complex business analytical challenges.",
image: "images/h2o.ai.jpg",
pricing: "Custom Pricing",
website: "https://h2o.ai",
tutorial: ""
},
{
id: 188,
name: "Alteryx AiDIN",
categories: [
"AI Data Analysis",
"Automation AI"
],
description: "Data analytics software merging generative AI workflow automation to accelerate enterprise intelligence insights.",
image: "images/alteryx aidin.jpg",
pricing: "Custom Pricing",
website: "https://alteryx.com",
tutorial: ""
},
{
id: 189,
name: "Snowflake Cortex",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Secure, fully managed service granting organizations native access to industry-leading AI models directly within databases.",
image: "images/snowflake cortex.jpg",
pricing: "Custom Pricing",
website: "https://snowflake.com",
tutorial: ""
},
{
id: 190,
name: "Tableau AI",
categories: [
"AI Data Analysis",
"Productivity AI"
],
description: "Business intelligence visualizer incorporating conversational interfaces to interpret complex corporate data sets effortlessly.",
image: "images/tableau ai.jpg",
pricing: "Custom Pricing",
website: "https://tableau.com",
tutorial: ""
},
{
id: 191,
name: "Power BI AI",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Microsoft data visualization service leveraging Copilot features for instant report generation and insight surfacing.",
image: "images/power bi ai.jpg",
pricing: "Custom Pricing",
website: "https://powerbi.microsoft.com",
tutorial: ""
},
{
id: 192,
name: "ThoughtSpot",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Search-driven analytics software enabling natural language questioning to instantly explore relational business data.",
image: "images/thoughtspot.jpg",
pricing: "Custom Pricing",
website: "https://thoughtspot.com",
tutorial: ""
},
{
id: 193,
name: "Sisense AI",
categories: [
"AI Analytics",
"Developer Tools AI"
],
description: "API-first analytics platform embedding machine learning insights directly into custom customer-facing applications.",
image: "images/sisense ai.jpg",
pricing: "Custom Pricing",
website: "https://sisense.com",
tutorial: ""
},
{
id: 194,
name: "Qlik AI",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Active intelligence platform employing associative engines and AI assistance for comprehensive data pipeline automation.",
image: "images/qlik ai.jpg",
pricing: "Custom Pricing",
website: "https://qlik.com",
tutorial: ""
},
{
id: 195,
name: "Browse AI",
categories: [
"Automation AI",
"Research AI"
],
description: "No-code web scraping automation software turning any website into structured, easily accessible database spreadsheets.",
image: "images/browse ai.jpg",
pricing: "Freemium",
website: "https://browse.ai",
tutorial: ""
},
{
id: 196,
name: "Octoparse AI",
categories: [
"Automation AI",
"AI Data Analysis"
],
description: "Visual web extraction tool executing deep data crawling and exporting information without requiring coding knowledge.",
image: "images/octoparse ai.jpg",
pricing: "Freemium",
website: "https://octoparse.com",
tutorial: ""
},
{
id: 197,
name: "Diffbot",
categories: [
"Research AI",
"Developer Tools AI"
],
description: "Knowledge graph API machine reading the web to structure pages into clean, usable JSON data feeds.",
image: "images/diffbot.jpg",
pricing: "Freemium",
website: "https://diffbot.com",
tutorial: ""
},
{
id: 198,
name: "Apify",
categories: [
"Automation AI",
"Developer Tools AI"
],
description: "Full-stack web scraping platform providing pre-built actor bots for extracting public intelligence and automation.",
image: "images/apify.jpg",
pricing: "Freemium",
website: "https://apify.com",
tutorial: ""
},
{
id: 199,
name: "Taskade",
categories: [
"Productivity AI",
"Workflow AI"
],
description: "Collaborative workspace implementing autonomous AI agents to manage projects, mind maps, and team documentation.",
image: "images/taskade.jpg",
pricing: "Freemium",
website: "https://taskade.com",
tutorial: ""
},
{
id: 200,
name: "Mem",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Self-organizing workspace utilizing AI to seamlessly tag, link, and search through personal knowledge notes.",
image: "images/mem.jpg",
pricing: "$14.99/month",
website: "https://mem.ai",
tutorial: ""
},
{
id: 201,
name: "Obsidian AI Copilot",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Markdown-based knowledge base integrating smart community plugins for semantic search and customized text synthesis.",
image: "images/obsidian ai copilot.jpg",
pricing: "Free",
website: "https://obsidian.md",
tutorial: ""
},
{
id: 202,
name: "Roam Research AI",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Networked thought organization tool utilizing artificial intelligence to connect bi-directional notes and ideas.",
image: "images/roam research ai.jpg",
pricing: "$15/month",
website: "https://roamresearch.com",
tutorial: ""
},
{
id: 203,
name: "Superhuman AI",
categories: [
"Email Assistant AI",
"Productivity AI"
],
description: "Premium email client integrating generative capabilities to auto-draft replies and summarize long inbox threads.",
image: "images/superhuman ai.jpg",
pricing: "$30/month",
website: "https://superhuman.com",
tutorial: ""
},
{
id: 204,
name: "SaneBox",
categories: [
"Email Assistant AI",
"Automation AI"
],
description: "Inbox management software using machine learning algorithms to automatically filter out distractions and spam.",
image: "images/sanebox.jpg",
pricing: "$7/month",
website: "https://sanebox.com",
tutorial: ""
},
{
id: 205,
name: "Mailbutler AI",
categories: [
"Email Assistant AI",
"Productivity AI"
],
description: "Smart email extension crafting professional responses, summarizing messages, and optimizing send times intelligently.",
image: "images/mailbutler ai.jpg",
pricing: "Freemium",
website: "https://mailbutler.io",
tutorial: ""
},
{
id: 206,
name: "Boomerang AI",
categories: [
"Email Assistant AI",
"Productivity AI"
],
description: "Email productivity add-on featuring a smart assistant that predicts message response rates and schedules follow-ups.",
image: "images/boomerang ai.jpg",
pricing: "Freemium",
website: "https://boomeranggmail.com",
tutorial: ""
},
{
id: 207,
name: "GrammarlyGO",
categories: [
"Writing AI",
"Email Assistant AI"
],
description: "On-demand generative text assistant integrated directly into workspaces to draft, rewrite, and ideate instantly.",
image: "images/grammarlygo.jpg",
pricing: "Freemium",
website: "https://grammarly.com/go",
tutorial: ""
},
{
id: 208,
name: "Flowrite",
categories: [
"Email Assistant AI",
"Writing AI"
],
description: "Productivity extension that converts short bullet points into fully formatted, professional emails and messages.",
image: "images/flowrite.jpg",
pricing: "$12/month",
website: "https://flowrite.com",
tutorial: ""
},
{
id: 209,
name: "Hootsuite OwlyWriter AI",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Social media post generator instantly turning web links and prompt ideas into platform-optimized captions.",
image: "images/hootsuite owlywriter ai.jpg",
pricing: "$99/month",
website: "https://hootsuite.com",
tutorial: ""
},
{
id: 210,
name: "Buffer AI Assistant",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Social media management tool with built-in text generation to brainstorm ideas and repurpose old posts.",
image: "images/buffer ai assistant.jpg",
pricing: "Freemium",
website: "https://buffer.com",
tutorial: ""
},
{
id: 211,
name: "Sprout Social AI",
categories: [
"Social Media AI",
"AI Analytics"
],
description: "Enterprise social media suite utilizing sentiment analysis and smart text suggestions for community management.",
image: "images/sprout social ai.jpg",
pricing: "Custom Pricing",
website: "https://sproutsocial.com",
tutorial: ""
},
{
id: 212,
name: "Lately.ai",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Content repurposing engine analyzing brand voice to atomize long-form content into dozens of social posts.",
image: "images/lately.ai.jpg",
pricing: "$99/month",
website: "https://lately.ai",
tutorial: ""
},
{
id: 213,
name: "Flick AI",
categories: [
"Social Media AI",
"Copywriting AI"
],
description: "Social media brainstorming and scheduling platform creating personalized captions and suggesting trending hashtags.",
image: "images/flick ai.jpg",
pricing: "Freemium",
website: "https://flick.social",
tutorial: ""
},
{
id: 214,
name: "Taplio",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "LinkedIn growth tool leveraging AI to generate viral post hooks, schedule content, and engage targeted prospects.",
image: "images/taplio.jpg",
pricing: "$39/month",
website: "https://taplio.com",
tutorial: ""
},
{
id: 215,
name: "Tweet Hunter",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Twitter optimization platform providing AI-generated tweet suggestions, analytics, and CRM features to build audiences.",
image: "images/tweet hunter.jpg",
pricing: "$49/month",
website: "https://tweethunter.io",
tutorial: ""
},
{
id: 216,
name: "Tweepsmap AI",
categories: [
"Social Media AI",
"AI Analytics"
],
description: "Twitter mapping and analytics tool predicting optimal posting times based on follower demographic intelligence.",
image: "images/tweepsmap ai.jpg",
pricing: "Freemium",
website: "https://tweepsmap.com",
tutorial: ""
},
{
id: 217,
name: "Followerwonk AI",
categories: [
"Social Media AI",
"AI Analytics"
],
description: "Deep social graph search application analyzing profile biographies and tracking network engagement performance.",
image: "images/followerwonk ai.jpg",
pricing: "Freemium",
website: "https://followerwonk.com",
tutorial: ""
},
{
id: 218,
name: "FeedHive AI",
categories: [
"Social Media AI",
"Automation AI"
],
description: "Visual social media scheduler featuring automated recycling algorithms and AI-powered text generation capabilities.",
image: "images/feedhive ai.jpg",
pricing: "$19/month",
website: "https://feedhive.com",
tutorial: ""
},
{
id: 219,
name: "Publer AI",
categories: [
"Social Media AI",
"Productivity AI"
],
description: "Social media scheduling superhero platform integrating AI to draft posts, generate images, and reply to comments.",
image: "images/publer ai.jpg",
pricing: "Freemium",
website: "https://publer.io",
tutorial: ""
},
{
id: 220,
name: "Vista Social AI",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Comprehensive social management platform utilizing ChatGPT integrations to rewrite captions and answer client messages.",
image: "images/vista social ai.jpg",
pricing: "Freemium",
website: "https://vistasocial.com",
tutorial: ""
},
{
id: 221,
name: "Canva Magic Studio",
categories: [
"UI Design AI",
"Marketing AI"
],
description: "Integrated design suite automating visual resizing, background removing, and text-to-image graphic generations.",
image: "images/canva magic studio.jpg",
pricing: "Freemium",
website: "https://canva.com",
tutorial: ""
},
{
id: 222,
name: "Adobe Express AI",
categories: [
"UI Design AI",
"Social Media AI"
],
description: "Cloud-based design application employing generative firefly models for social flyers, logos, and video editing.",
image: "images/adobe express ai.jpg",
pricing: "Freemium",
website: "https://adobe.com/express",
tutorial: ""
},
{
id: 223,
name: "Predis.ai",
categories: [
"Social Media AI",
"AI Video Generator"
],
description: "Automated social media engine generating ready-to-publish image carousels, reels, and captions directly from text prompts.",
image: "images/predis.ai.jpg",
pricing: "Freemium",
website: "https://predis.ai",
tutorial: ""
},
{
id: 224,
name: "Ocoya",
categories: [
"Social Media AI",
"Marketing AI"
],
description: "Content creation software combining text drafting, image generation, and multi-channel scheduling into a single dashboard.",
image: "images/ocoya.jpg",
pricing: "$15/month",
website: "https://ocoya.com",
tutorial: ""
},
{
id: 225,
name: "Missinglettr AI",
categories: [
"Social Media AI",
"Automation AI"
],
description: "Drip campaign automation tool scraping new blog posts and turning them into months of social content.",
image: "images/missinglettr ai.jpg",
pricing: "Freemium",
website: "https://missinglettr.com",
tutorial: ""
},
{
id: 226,
name: "StoryChief AI",
categories: [
"Marketing AI",
"Blogging AI"
],
description: "B2B content marketing workspace optimizing centralized blogs and syndicating tailored messaging across social platforms.",
image: "images/storychief ai.jpg",
pricing: "Custom Pricing",
website: "https://storychief.io",
tutorial: ""
},
{
id: 227,
name: "CoSchedule Headline Studio",
categories: [
"SEO AI",
"Copywriting AI"
],
description: "Headline grading application analyzing word balance and emotional sentiment to maximize click-through traffic rates.",
image: "images/coschedule headline studio.jpg",
pricing: "Freemium",
website: "https://coschedule.com/headline-studio",
tutorial: ""
},
{
id: 228,
name: "Clearbit AI",
categories: [
"Sales AI",
"Marketing AI"
],
description: "B2B data enrichment platform leveraging machine intelligence to reveal anonymous website visitors and company insights.",
image: "images/clearbit ai.jpg",
pricing: "Custom Pricing",
website: "https://clearbit.com",
tutorial: ""
},
{
id: 229,
name: "Apollo.io AI",
categories: [
"Sales AI",
"CRM AI"
],
description: "End-to-end sales engine utilizing predictive algorithms to build accurate prospect lists and draft personalized emails.",
image: "images/apollo.io ai.jpg",
pricing: "Freemium",
website: "https://apollo.io",
tutorial: ""
},
{
id: 230,
name: "Lusha AI",
categories: [
"Sales AI",
"CRM AI"
],
description: "B2B contact finder predicting best-fit customers and automatically updating CRM databases with verified data.",
image: "images/lusha ai.jpg",
pricing: "Freemium",
website: "https://lusha.com",
tutorial: ""
},
{
id: 231,
name: "ZoomInfo Copilot",
categories: [
"Sales AI",
"CRM AI"
],
description: "Go-to-market platform providing AI-driven buyer intent signals and contact data to accelerate enterprise sales.",
image: "images/zoominfo copilot.jpg",
pricing: "Custom Pricing",
website: "https://zoominfo.com",
tutorial: ""
},
{
id: 232,
name: "Hunter.io AI",
categories: [
"Sales AI",
"Email Assistant AI"
],
description: "Professional email lookup software automating cold outreach sequencing and domain search verification processes.",
image: "images/hunter.io ai.jpg",
pricing: "Freemium",
website: "https://hunter.io",
tutorial: ""
},
{
id: 233,
name: "Woodpecker AI",
categories: [
"Sales AI",
"Email Assistant AI"
],
description: "Cold email outreach application validating email addresses and intelligently adapting delivery times to maximize open rates.",
image: "images/woodpecker ai.jpg",
pricing: "$29/month",
website: "https://woodpecker.co",
tutorial: ""
},
{
id: 234,
name: "Lemlist AI",
categories: [
"Sales AI",
"Email Assistant AI"
],
description: "Personalized outbound outreach platform using AI to craft custom icebreakers and generate personalized image attachments.",
image: "images/lemlist ai.jpg",
pricing: "$59/month",
website: "https://lemlist.com",
tutorial: ""
},
{
id: 235,
name: "Reply.io Jason AI",
categories: [
"Sales AI",
"Automation AI"
],
description: "B2B sales engagement platform featuring an autonomous conversational agent that sets up meetings automatically.",
image: "images/reply.io jason ai.jpg",
pricing: "$59/month",
website: "https://reply.io",
tutorial: ""
},
{
id: 236,
name: "Outreach Kaia",
categories: [
"Sales AI",
"Meeting Assistant AI"
],
description: "Real-time conversation intelligence assistant joining sales calls to capture notes, track action items, and trigger workflows.",
image: "images/outreach kaia.jpg",
pricing: "Custom Pricing",
website: "https://outreach.io",
tutorial: ""
},
{
id: 237,
name: "SalesLoft AI",
categories: [
"Sales AI",
"CRM AI"
],
description: "Revenue workflow software providing machine learning guided next-best-action recommendations for enterprise sales representatives.",
image: "images/salesloft ai.jpg",
pricing: "Custom Pricing",
website: "https://salesloft.com",
tutorial: ""
},
{
id: 238,
name: "Clari Copilot",
categories: [
"Sales AI",
"AI Analytics"
],
description: "Revenue operation platform forecasting sales pipelines and identifying deal risks using historical data algorithms.",
image: "images/clari copilot.jpg",
pricing: "Custom Pricing",
website: "https://clari.com",
tutorial: ""
},
{
id: 239,
name: "People.ai",
categories: [
"Sales AI",
"CRM AI"
],
description: "Enterprise revenue intelligence software automatically capturing all contact activity to populate clean CRM records.",
image: "images/people.ai.jpg",
pricing: "Custom Pricing",
website: "https://people.ai",
tutorial: ""
},
{
id: 240,
name: "InsightSquared AI",
categories: [
"Sales AI",
"AI Analytics"
],
description: "Sales forecasting and analytics software leveraging historical deal data to accurately predict quarterly revenue outcomes.",
image: "images/insightsquared ai.jpg",
pricing: "Custom Pricing",
website: "https://insightsquared.com",
tutorial: ""
},
{
id: 241,
name: "Pipedrive AI",
categories: [
"CRM AI",
"Sales AI"
],
description: "Sales CRM integrating intelligent automation tools to rank lead quality and schedule targeted email campaigns.",
image: "images/pipedrive ai.jpg",
pricing: "$14.90/month",
website: "https://pipedrive.com",
tutorial: ""
},
{
id: 242,
name: "Freshsales Freddy AI",
categories: [
"CRM AI",
"Sales AI"
],
description: "Context-driven CRM assistant scoring leads, predicting deal success, and generating personalized email content templates.",
image: "images/freshsales freddy ai.jpg",
pricing: "Freemium",
website: "https://freshworks.com/crm",
tutorial: ""
},
{
id: 243,
name: "Zoho CRM Zia",
categories: [
"CRM AI",
"Sales AI"
],
description: "Conversational business assistant identifying cross-sell opportunities, forecasting revenue, and detecting CRM data anomalies.",
image: "images/zoho crm zia.jpg",
pricing: "Freemium",
website: "https://zoho.com/crm",
tutorial: ""
},
{
id: 244,
name: "ActiveCampaign AI",
categories: [
"Marketing AI",
"Automation AI"
],
description: "Customer experience automation platform utilizing predictive sending and smart text generation for complex email workflows.",
image: "images/activecampaign ai.jpg",
pricing: "$29/month",
website: "https://activecampaign.com",
tutorial: ""
},
{
id: 245,
name: "Keap AI",
categories: [
"CRM AI",
"Automation AI"
],
description: "Small business CRM leveraging generative prompts to draft professional text messages and email marketing broadcasts.",
image: "images/keap ai.jpg",
pricing: "$149/month",
website: "https://keap.com",
tutorial: ""
},
{
id: 246,
name: "Mailchimp Intuit Assist",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Marketing platform generating optimized email copy, predicting customer lifetime value, and segmenting audiences automatically.",
image: "images/mailchimp intuit assist.jpg",
pricing: "Freemium",
website: "https://mailchimp.com",
tutorial: ""
},
{
id: 247,
name: "Klaviyo AI",
categories: [
"Marketing AI",
"AI Ecommerce"
],
description: "E-commerce marketing automation generating predictive analytic profiles and drafting tailored promotional SMS/email content.",
image: "images/klaviyo ai.jpg",
pricing: "Freemium",
website: "https://klaviyo.com",
tutorial: ""
},
{
id: 248,
name: "Omnisend AI",
categories: [
"Marketing AI",
"AI Ecommerce"
],
description: "Ecommerce marketing platform featuring an AI subject line generator and automated workflow splitting logic.",
image: "images/omnisend ai.jpg",
pricing: "Freemium",
website: "https://omnisend.com",
tutorial: ""
},
{
id: 249,
name: "Brevo AI",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Digital marketing toolbox incorporating smart text generation to create engaging email newsletters and landing page copy.",
image: "images/brevo ai.jpg",
pricing: "Freemium",
website: "https://brevo.com",
tutorial: ""
},
{
id: 250,
name: "GetResponse AI",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Email marketing service featuring an AI email generator that crafts complete promotional campaigns in seconds.",
image: "images/getresponse ai.jpg",
pricing: "Freemium",
website: "https://getresponse.com",
tutorial: ""
},
{
id: 251,
name: "AWeber AI",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Newsletter tool offering intelligent writing assistants and automated tagging based on subscriber link click behavior.",
image: "images/aweber ai.jpg",
pricing: "Freemium",
website: "https://aweber.com",
tutorial: ""
},
{
id: 252,
name: "Constant Contact AI",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Digital marketing engine employing content generators to eliminate writer's block for small business email campaigns.",
image: "images/constant contact ai.jpg",
pricing: "$12/month",
website: "https://constantcontact.com",
tutorial: ""
},
{
id: 253,
name: "Campaign Monitor AI",
categories: [
"Marketing AI",
"Email Assistant AI"
],
description: "Email marketing software providing predictive demographic segmentation and intelligent send time optimization features.",
image: "images/campaign monitor ai.jpg",
pricing: "$9/month",
website: "https://campaignmonitor.com",
tutorial: ""
},
{
id: 254,
name: "HubSpot ChatSpot",
categories: [
"CRM AI",
"Marketing AI"
],
description: "Conversational CRM bot enabling users to add contacts, create reports, and draft blogs via chat commands.",
image: "images/hubspot chatspot.jpg",
pricing: "Free",
website: "https://chatspot.ai",
tutorial: ""
},
{
id: 255,
name: "Marketo Sensei",
categories: [
"Marketing AI",
"Automation AI"
],
description: "Enterprise marketing automation leveraging predictive intelligence to deliver highly personalized cross-channel customer journeys.",
image: "images/marketo sensei.jpg",
pricing: "Custom Pricing",
website: "https://adobe.com/marketing/marketo.html",
tutorial: ""
},
{
id: 256,
name: "Salesforce Einstein",
categories: [
"CRM AI",
"Sales AI"
],
description: "Integrated AI suite across the Salesforce ecosystem generating insights, automating workflows, and drafting customer communications.",
image: "images/salesforce einstein.jpg",
pricing: "Custom Pricing",
website: "https://salesforce.com",
tutorial: ""
},
{
id: 257,
name: "Oracle Eloqua AI",
categories: [
"Marketing AI",
"Automation AI"
],
description: "B2B marketing automation platform identifying buyer fatigue and recommending optimal campaign orchestration strategies.",
image: "images/oracle eloqua ai.jpg",
pricing: "Custom Pricing",
website: "https://oracle.com/cx/marketing/eloqua",
tutorial: ""
},
{
id: 258,
name: "Braze AI",
categories: [
"Marketing AI",
"Automation AI"
],
description: "Customer engagement platform utilizing predictive churn modeling and generative copywriting for mobile marketing campaigns.",
image: "images/braze ai.jpg",
pricing: "Custom Pricing",
website: "https://braze.com",
tutorial: ""
},
{
id: 259,
name: "Iterable AI",
categories: [
"Marketing AI",
"Automation AI"
],
description: "Cross-channel marketing suite providing sentiment analysis and dynamic personalization to optimize consumer brand experiences.",
image: "images/iterable ai.jpg",
pricing: "Custom Pricing",
website: "https://iterable.com",
tutorial: ""
},
{
id: 260,
name: "MoEngage Sherpa",
categories: [
"Marketing AI",
"AI Analytics"
],
description: "Customer engagement engine using artificial intelligence to route messages through the highest converting communication channels.",
image: "images/moengage sherpa.jpg",
pricing: "Custom Pricing",
website: "https://moengage.com",
tutorial: ""
},
{
id: 261,
name: "CleverTap AI",
categories: [
"Marketing AI",
"AI Analytics"
],
description: "Retention marketing platform predicting user behavior trajectories and automating highly targeted push notification triggers.",
image: "images/clevertap ai.jpg",
pricing: "Custom Pricing",
website: "https://clevertap.com",
tutorial: ""
},
{
id: 262,
name: "Mixpanel Spark",
categories: [
"AI Analytics",
"Marketing AI"
],
description: "Product analytics interface allowing teams to query complex user behavior data using natural language prompts.",
image: "images/mixpanel spark.jpg",
pricing: "Freemium",
website: "https://mixpanel.com",
tutorial: ""
},
{
id: 263,
name: "Amplitude AI",
categories: [
"AI Analytics",
"Productivity AI"
],
description: "Digital analytics platform featuring a generative assistant to automatically build charts and interpret conversion anomalies.",
image: "images/amplitude ai.jpg",
pricing: "Freemium",
website: "https://amplitude.com",
tutorial: ""
},
{
id: 264,
name: "Heap AI",
categories: [
"AI Analytics",
"UX Design AI"
],
description: "Digital insights platform automatically capturing all user interactions and surfacing hidden friction points proactively.",
image: "images/heap ai.jpg",
pricing: "Freemium",
website: "https://heap.io",
tutorial: ""
},
{
id: 265,
name: "Pendo AI",
categories: [
"AI Analytics",
"Product Management AI"
],
description: "Product experience platform summarizing user feedback volumes and generating targeted in-app onboarding walkthroughs.",
image: "images/pendo ai.jpg",
pricing: "Freemium",
website: "https://pendo.io",
tutorial: ""
},
{
id: 266,
name: "FullStory AI",
categories: [
"AI Analytics",
"UX Design AI"
],
description: "Digital experience intelligence software highlighting rage clicks and algorithmically surfacing sessions with severe usability errors.",
image: "images/fullstory ai.jpg",
pricing: "Custom Pricing",
website: "https://fullstory.com",
tutorial: ""
},
{
id: 267,
name: "Hotjar AI",
categories: [
"AI Analytics",
"UX Design AI"
],
description: "Website heatmapping tool automatically generating concise summary reports from thousands of open-ended user survey responses.",
image: "images/hotjar ai.jpg",
pricing: "Freemium",
website: "https://hotjar.com",
tutorial: ""
},
{
id: 268,
name: "Crazy Egg AI",
categories: [
"AI Analytics",
"UX Design AI"
],
description: "Website optimization platform using machine learning to suggest high-converting A/B testing variations based on traffic.",
image: "images/crazy egg ai.jpg",
pricing: "$29/month",
website: "https://crazyegg.com",
tutorial: ""
},
{
id: 269,
name: "VWO AI",
categories: [
"AI Analytics",
"UX Design AI"
],
description: "Experience optimization engine generating test hypotheses and copywriting alternatives to maximize website conversion rates.",
image: "images/vwo ai.jpg",
pricing: "Freemium",
website: "https://vwo.com",
tutorial: ""
},
{
id: 270,
name: "Optimizely AI",
categories: [
"AI Analytics",
"Marketing AI"
],
description: "Digital experimentation platform providing content generation and predictive audience targeting for high-velocity A/B testing.",
image: "images/optimizely ai.jpg",
pricing: "Custom Pricing",
website: "https://optimizely.com",
tutorial: ""
},
{
id: 271,
name: "Google Analytics Intelligence",
categories: [
"AI Analytics",
"Marketing AI"
],
description: "Web analytics service featuring built-in machine learning models to detect anomalies and predict purchase probabilities.",
image: "images/google analytics intelligence.jpg",
pricing: "Free",
website: "https://analytics.google.com",
tutorial: ""
},
{
id: 272,
name: "Matomo AI",
categories: [
"AI Analytics",
"Marketing AI"
],
description: "Privacy-focused open-source analytics platform utilizing predictive modeling to identify future traffic trends and user behaviors.",
image: "images/matomo ai.jpg",
pricing: "Freemium",
website: "https://matomo.org",
tutorial: ""
},
{
id: 273,
name: "Plausible AI",
categories: [
"AI Analytics"
],
description: "Lightweight, privacy-friendly website analytics tool employing smart algorithms to highlight essential data without cookies.",
image: "images/plausible ai.jpg",
pricing: "$9/month",
website: "https://plausible.io",
tutorial: ""
},
{
id: 274,
name: "Fathom AI",
categories: [
"AI Analytics"
],
description: "Cookie-free website analytics software summarizing traffic spikes and referrer data into easy-to-read automated insights.",
image: "images/fathom ai.jpg",
pricing: "$15/month",
website: "https://usefathom.com",
tutorial: ""
},
{
id: 275,
name: "Supermetrics AI",
categories: [
"AI Analytics",
"Automation AI"
],
description: "Marketing data connector utilizing smart mapping to seamlessly combine metrics from hundreds of advertising platforms.",
image: "images/supermetrics ai.jpg",
pricing: "$39/month",
website: "https://supermetrics.com",
tutorial: ""
},
{
id: 276,
name: "Funnel.io AI",
categories: [
"AI Analytics",
"Marketing AI"
],
description: "Marketing data hub automatically classifying and cleaning complex advertising expenditures across fragmented digital channels.",
image: "images/funnel.io ai.jpg",
pricing: "Freemium",
website: "https://funnel.io",
tutorial: ""
},
{
id: 277,
name: "Databox AI",
categories: [
"AI Analytics",
"Productivity AI"
],
description: "Business dashboard builder surfacing automated performance alerts and predicting metric trajectories based on historical averages.",
image: "images/databox ai.jpg",
pricing: "Freemium",
website: "https://databox.com",
tutorial: ""
},
{
id: 278,
name: "Geckoboard AI",
categories: [
"AI Analytics"
],
description: "KPI dashboard software integrating smart data formatting to instantly translate raw numbers into visual tracking widgets.",
image: "images/geckoboard ai.jpg",
pricing: "$39/month",
website: "https://geckoboard.com",
tutorial: ""
},
{
id: 279,
name: "Klipfolio PowerMetrics AI",
categories: [
"AI Analytics",
"AI Data Analysis"
],
description: "Lightweight BI tool using generative chat to allow non-technical teams to interact dynamically with complex metrics.",
image: "images/klipfolio powermetrics ai.jpg",
pricing: "Freemium",
website: "https://klipfolio.com",
tutorial: ""
},
{
id: 280,
name: "Domo.ai",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Cloud-native data experience platform providing conversational analytics, text generation, and automated dataset insights for enterprises.",
image: "images/domo.ai.jpg",
pricing: "Custom Pricing",
website: "https://domo.com",
tutorial: ""
},
{
id: 281,
name: "Looker AI Copilot",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Google Cloud BI platform accelerating data exploration by translating natural language questions into precise SQL queries.",
image: "images/looker ai copilot.jpg",
pricing: "Custom Pricing",
website: "https://cloud.google.com/looker",
tutorial: ""
},
{
id: 282,
name: "Mode Analytics AI",
categories: [
"AI Data Analysis",
"Developer Tools AI"
],
description: "Collaborative data science workspace assisting analysts by auto-completing SQL syntax and generating python visualization codes.",
image: "images/mode analytics ai.jpg",
pricing: "Freemium",
website: "https://mode.com",
tutorial: ""
},
{
id: 283,
name: "Metabase AI",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Open-source business intelligence platform interpreting plain English questions into interactive charts and functional database queries.",
image: "images/metabase ai.jpg",
pricing: "Freemium",
website: "https://metabase.com",
tutorial: ""
},
{
id: 284,
name: "Redash AI",
categories: [
"AI Data Analysis"
],
description: "Dashboarding utility integrating conversational models to help teams build, execute, and visualize complex SQL statements effortlessly.",
image: "images/redash ai.jpg",
pricing: "Free",
website: "https://redash.io",
tutorial: ""
},
{
id: 285,
name: "Superset AI",
categories: [
"AI Data Analysis"
],
description: "Apache open-source data visualization framework offering smart query completions and semantic layering for robust charting.",
image: "images/superset ai.jpg",
pricing: "Free",
website: "https://superset.apache.org",
tutorial: ""
},
{
id: 286,
name: "Grafana Machine Learning",
categories: [
"AI Data Analysis",
"Developer Tools AI"
],
description: "Operational dashboard platform utilizing predictive algorithms to accurately forecast server capacities and detect infrastructure anomalies.",
image: "images/grafana machine learning.jpg",
pricing: "Freemium",
website: "https://grafana.com",
tutorial: ""
},
{
id: 287,
name: "Kibana Machine Learning",
categories: [
"AI Data Analysis",
"Security AI"
],
description: "Elasticsearch visualization interface finding hidden patterns in log data and identifying rare cyber security threats.",
image: "images/kibana machine learning.jpg",
pricing: "Freemium",
website: "https://elastic.co/kibana",
tutorial: ""
},
{
id: 288,
name: "Splunk AI",
categories: [
"AI Data Analysis",
"Security AI"
],
description: "Enterprise observability platform leveraging generative AI to summarize incidents, formulate search queries, and accelerate security resolutions.",
image: "images/splunk ai.jpg",
pricing: "Custom Pricing",
website: "https://splunk.com",
tutorial: ""
},
{
id: 289,
name: "Datadog Watchdog",
categories: [
"AI Data Analysis",
"Developer Tools AI"
],
description: "Cloud monitoring application automatically detecting performance spikes and isolating root causes across complex microservice architectures.",
image: "images/datadog watchdog.jpg",
pricing: "$15/month",
website: "https://datadoghq.com",
tutorial: ""
},
{
id: 290,
name: "New Relic Grok",
categories: [
"AI Data Analysis",
"Developer Tools AI"
],
description: "Observability assistant allowing engineers to query system health, debug errors, and write complex queries via chat.",
image: "images/new relic grok.jpg",
pricing: "Freemium",
website: "https://newrelic.com",
tutorial: ""
},
{
id: 291,
name: "Dynatrace Davis AI",
categories: [
"AI Data Analysis",
"Automation AI"
],
description: "Hypermodal intelligence engine continuously monitoring application performance to deliver precise answers about system degradations.",
image: "images/dynatrace davis ai.jpg",
pricing: "Custom Pricing",
website: "https://dynatrace.com",
tutorial: ""
},
{
id: 292,
name: "AppDynamics Cognition Engine",
categories: [
"AI Data Analysis",
"Developer Tools AI"
],
description: "Application performance tool employing machine learning to reduce alert fatigue by pinpointing exact code-level business impacts.",
image: "images/appdynamics cognition engine.jpg",
pricing: "Custom Pricing",
website: "https://appdynamics.com",
tutorial: ""
},
{
id: 293,
name: "Sentry AI",
categories: [
"Developer Tools AI",
"Coding AI"
],
description: "Error tracking software using language models to explain crash reports and suggest immediate code-level fixes.",
image: "images/sentry ai.jpg",
pricing: "Freemium",
website: "https://sentry.io",
tutorial: ""
},
{
id: 294,
name: "Raygun AI",
categories: [
"Developer Tools AI"
],
description: "Crash reporting application interpreting complex stack traces and providing actionable remediation steps for software developers.",
image: "images/raygun ai.jpg",
pricing: "$40/month",
website: "https://raygun.com",
tutorial: ""
},
{
id: 295,
name: "LogRocket AI",
categories: [
"Developer Tools AI",
"AI Analytics"
],
description: "Frontend monitoring tool utilizing machine intelligence to summarize user sessions and identify systemic interface friction points.",
image: "images/logrocket ai.jpg",
pricing: "Freemium",
website: "https://logrocket.com",
tutorial: ""
},
{
id: 296,
name: "Bugsnag AI",
categories: [
"Developer Tools AI"
],
description: "Application stability management tracking fatal errors and intelligently grouping similar crashes for faster engineering prioritization.",
image: "images/bugsnag ai.jpg",
pricing: "Freemium",
website: "https://bugsnag.com",
tutorial: ""
},
{
id: 297,
name: "PostHog AI",
categories: [
"AI Analytics",
"Developer Tools AI"
],
description: "Open-source product operating system incorporating generative features to construct data funnels directly from textual instructions.",
image: "images/posthog ai.jpg",
pricing: "Freemium",
website: "https://posthog.com",
tutorial: ""
},
{
id: 298,
name: "LaunchDarkly AI",
categories: [
"Developer Tools AI"
],
description: "Feature management platform utilizing intelligence to track flag statuses and safely automate progressive deployment rollouts.",
image: "images/launchdarkly ai.jpg",
pricing: "$10/month",
website: "https://launchdarkly.com",
tutorial: ""
},
{
id: 299,
name: "Split.io AI",
categories: [
"Developer Tools AI",
"AI Analytics"
],
description: "Feature delivery software statistically analyzing engineering releases to proactively halt deployments causing performance degradations.",
image: "images/split.io ai.jpg",
pricing: "Freemium",
website: "https://split.io",
tutorial: ""
},
{
id: 300,
name: "Optimizely Feature Experimentation",
categories: [
"Developer Tools AI",
"Product Management AI"
],
description: "Engineering platform mathematically evaluating impact metrics to validate new code features safely before global releases.",
image: "images/optimizely feature experimentation.jpg",
pricing: "Custom Pricing",
website: "https://optimizely.com/products/feature-experimentation",
tutorial: ""
},
{
id: 301,
name: "Eightify",
categories: [
"YouTube AI",
"Productivity AI"
],
description: "Browser extension using AI to generate instant summaries of long YouTube videos, extracting key points.",
image: "images/eightify.jpg",
pricing: "Freemium",
website: "https://eightify.app",
tutorial: ""
},
{
id: 302,
name: "ChatTube",
categories: [
"YouTube AI",
"Chatbot AI"
],
description: "Interactive extension allowing users to chat directly with YouTube videos to find specific information quickly.",
image: "images/chattube.jpg",
pricing: "Freemium",
website: "https://chattube.io",
tutorial: ""
},
{
id: 303,
name: "TubeBuddy",
categories: [
"YouTube AI",
"SEO AI"
],
description: "YouTube channel management toolkit featuring AI title generators, tag suggestions, and comprehensive video optimization metrics.",
image: "images/tubebuddy.jpg",
pricing: "Freemium",
website: "https://tubebuddy.com",
tutorial: ""
},
{
id: 304,
name: "VidIQ",
categories: [
"YouTube AI",
"SEO AI"
],
description: "AI-driven YouTube growth tool offering keyword research, competitor tracking, and daily video idea generation.",
image: "images/vidiq.jpg",
pricing: "Freemium",
website: "https://vidiq.com",
tutorial: ""
},
{
id: 305,
name: "Harpa AI",
categories: [
"Productivity AI",
"Automation AI"
],
description: "Chrome extension integrating ChatGPT for web page summarization, price tracking, and intelligent task automation.",
image: "images/harpa ai.jpg",
pricing: "Free",
website: "https://harpa.ai",
tutorial: ""
},
{
id: 306,
name: "Monica AI",
categories: [
"Productivity AI",
"Chatbot AI"
],
description: "All-in-one browser assistant providing translation, writing support, and document summarization using multiple AI models.",
image: "images/monica ai.jpg",
pricing: "Freemium",
website: "https://monica.im",
tutorial: ""
},
{
id: 307,
name: "Sider",
categories: [
"Productivity AI",
"Writing AI"
],
description: "Browser sidebar assistant integrating ChatGPT and Claude for reading comprehension, writing emails, and summarizing articles.",
image: "images/sider.jpg",
pricing: "Freemium",
website: "https://sider.ai",
tutorial: ""
},
{
id: 308,
name: "Merlin AI",
categories: [
"Productivity AI",
"Chatbot AI"
],
description: "AI browser extension allowing users to access GPT-4 across any website to draft or summarize text.",
image: "images/merlin ai.jpg",
pricing: "Freemium",
website: "https://getmerlin.in",
tutorial: ""
},
{
id: 309,
name: "MaxAI",
categories: [
"Productivity AI",
"Writing AI"
],
description: "Browser extension that improves writing speed and reading efficiency by rewriting or summarizing web text.",
image: "images/maxai.jpg",
pricing: "Freemium",
website: "https://maxai.me",
tutorial: ""
},
{
id: 310,
name: "ChatGPT Writer",
categories: [
"Email Assistant AI",
"Writing AI"
],
description: "Free privacy-friendly Chrome extension that drafts complete emails and messages with proper context and tone.",
image: "images/chatgpt writer.jpg",
pricing: "Free",
website: "https://chatgptwriter.ai",
tutorial: ""
},
{
id: 311,
name: "Compose AI",
categories: [
"Email Assistant AI",
"Productivity AI"
],
description: "Autocompletion extension that accelerates email and document typing by predicting full sentences across platforms.",
image: "images/compose ai.jpg",
pricing: "Freemium",
website: "https://compose.ai",
tutorial: ""
},
{
id: 312,
name: "TextCortex",
categories: [
"Writing AI",
"Productivity AI"
],
description: "Customizable AI companion named Zeno that learns your unique writing style and knowledge base.",
image: "images/textcortex.jpg",
pricing: "Freemium",
website: "https://textcortex.com",
tutorial: ""
},
{
id: 313,
name: "HyperWrite",
categories: [
"Writing AI",
"Automation AI"
],
description: "Personal writing assistant and autonomous web agent executing online research and drafting tasks automatically.",
image: "images/hyperwrite.jpg",
pricing: "Freemium",
website: "https://hyperwriteai.com",
tutorial: ""
},
{
id: 314,
name: "WordAi",
categories: [
"Writing AI",
"SEO AI"
],
description: "Article spinning tool using machine learning to completely restructure sentences while retaining original meaning.",
image: "images/wordai.jpg",
pricing: "$57/month",
website: "https://wordai.com",
tutorial: ""
},
{
id: 315,
name: "Article Forge",
categories: [
"Blogging AI",
"SEO AI"
],
description: "Content generator writing high-quality, completely unique, and SEO-optimized long-form articles with a single click.",
image: "images/article forge.jpg",
pricing: "$27/month",
website: "https://articleforge.com",
tutorial: ""
},
{
id: 316,
name: "AskYourPDF",
categories: [
"Research AI",
"Productivity AI"
],
description: "Document interaction application turning uploaded PDF files into conversational chatbots for instant knowledge extraction.",
image: "images/askyourpdf.jpg",
pricing: "Freemium",
website: "https://askyourpdf.com",
tutorial: ""
},
{
id: 317,
name: "SciSummary",
categories: [
"Research AI",
"AI Education"
],
description: "Scientific summarization tool simplifying dense academic papers into digestible paragraphs for students and researchers.",
image: "images/scisummary.jpg",
pricing: "Freemium",
website: "https://scisummary.com",
tutorial: ""
},
{
id: 318,
name: "Scholarcy",
categories: [
"Research AI",
"AI Education"
],
description: "Online article summarizer evaluating research papers to automatically highlight key findings, methodologies, and citations.",
image: "images/scholarcy.jpg",
pricing: "Freemium",
website: "https://scholarcy.com",
tutorial: ""
},
{
id: 319,
name: "Paperpal",
categories: [
"Writing AI",
"Research AI"
],
description: "Academic writing assistant tailored for researchers to check grammar, structure, and journal submission readiness.",
image: "images/paperpal.jpg",
pricing: "Freemium",
website: "https://paperpal.com",
tutorial: ""
},
{
id: 320,
name: "Trinka AI",
categories: [
"Writing AI",
"AI Translation"
],
description: "Grammar checker and language enhancement tool specifically designed for academic and technical writing formats.",
image: "images/trinka ai.jpg",
pricing: "Freemium",
website: "https://trinka.ai",
tutorial: ""
},
{
id: 321,
name: "Jenni AI",
categories: [
"Writing AI",
"Research AI"
],
description: "AI writing assistant specializing in essays and research papers, complete with automatic in-text citations.",
image: "images/jenni ai.jpg",
pricing: "Freemium",
website: "https://jenni.ai",
tutorial: ""
},
{
id: 322,
name: "Kumo.ai",
categories: [
"AI Data Analysis",
"AI Analytics"
],
description: "Predictive AI platform enabling businesses to generate highly accurate predictions directly from raw enterprise data.",
image: "images/kumo.ai.jpg",
pricing: "Custom Pricing",
website: "https://kumo.ai",
tutorial: ""
},
{
id: 323,
name: "Anyscale",
categories: [
"Developer Tools AI",
"Coding AI"
],
description: "Fully managed AI platform allowing developers to scale, deploy, and fine-tune machine learning models efficiently.",
image: "images/anyscale.jpg",
pricing: "Custom Pricing",
website: "https://anyscale.com",
tutorial: ""
},
{
id: 324,
name: "Together AI",
categories: [
"Developer Tools AI"
],
description: "Cloud platform providing high-performance, cost-effective infrastructure for training and running open-source generative AI models.",
image: "images/together ai.jpg",
pricing: "Custom Pricing",
website: "https://together.ai",
tutorial: ""
},
{
id: 325,
name: "Fireworks AI",
categories: [
"Developer Tools AI"
],
description: "Lightning-fast inference engine tailored for developers to integrate open-source language models into production applications.",
image: "images/fireworks ai.jpg",
pricing: "Custom Pricing",
website: "https://fireworks.ai",
tutorial: ""
},
{
id: 326,
name: "Groq",
categories: [
"Developer Tools AI"
],
description: "Hardware-accelerated AI inference engine delivering unprecedented token generation speeds for real-time AI applications.",
image: "images/groq.jpg",
pricing: "Freemium",
website: "https://groq.com",
tutorial: ""
},
{
id: 327,
name: "Replicate",
categories: [
"Developer Tools AI",
"AI Image Generator"
],
description: "Developer platform making it simple to run and deploy custom machine learning models via APIs.",
image: "images/replicate.jpg",
pricing: "Custom Pricing",
website: "https://replicate.com",
tutorial: ""
},
{
id: 328,
name: "Baseten",
categories: [
"Developer Tools AI"
],
description: "Machine learning infrastructure platform offering fast, scalable model deployment and management for software teams.",
image: "images/baseten.jpg",
pricing: "Custom Pricing",
website: "https://baseten.co",
tutorial: ""
},
{
id: 329,
name: "Modal",
categories: [
"Developer Tools AI",
"Coding AI"
],
description: "Serverless cloud platform specialized in executing heavy AI inference workloads and custom python scripts.",
image: "images/modal.jpg",
pricing: "Custom Pricing",
website: "https://modal.com",
tutorial: ""
},
{
id: 330,
name: "Clarifai",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Comprehensive AI lifecycle platform specializing in computer vision, text analysis, and audio recognition systems.",
image: "images/clarifai.jpg",
pricing: "Freemium",
website: "https://clarifai.com",
tutorial: ""
},
{
id: 331,
name: "Roboflow",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Computer vision platform helping developers manage datasets, train models, and deploy object detection endpoints quickly.",
image: "images/roboflow.jpg",
pricing: "Freemium",
website: "https://roboflow.com",
tutorial: ""
},
{
id: 332,
name: "LandingLens",
categories: [
"Developer Tools AI",
"AI Analytics"
],
description: "Cloud-based visual inspection platform simplifying the deployment of complex deep learning vision models for manufacturing.",
image: "images/landinglens.jpg",
pricing: "Freemium",
website: "https://landing.ai",
tutorial: ""
},
{
id: 333,
name: "Ultralytics",
categories: [
"Developer Tools AI"
],
description: "Creators of YOLO architecture providing state-of-the-art, open-source computer vision frameworks for object detection tasks.",
image: "images/ultralytics.jpg",
pricing: "Free",
website: "https://ultralytics.com",
tutorial: ""
},
{
id: 334,
name: "Scale AI",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Enterprise data platform providing high-quality annotated training data and evaluation systems for frontier AI models.",
image: "images/scale ai.jpg",
pricing: "Custom Pricing",
website: "https://scale.com",
tutorial: ""
},
{
id: 335,
name: "Snorkel AI",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Data-centric AI platform accelerating model development by programmatically labeling and refining massive training datasets.",
image: "images/snorkel ai.jpg",
pricing: "Custom Pricing",
website: "https://snorkel.ai",
tutorial: ""
},
{
id: 336,
name: "Labelbox",
categories: [
"Developer Tools AI",
"AI Data Analysis"
],
description: "Customizable training data platform enabling teams to annotate imagery, text, and build better predictive models.",
image: "images/labelbox.jpg",
pricing: "Custom Pricing",
website: "https://labelbox.com",
tutorial: ""
},
{
id: 337,
name: "Turing",
categories: [
"AI Career Tools",
"Developer Tools AI"
],
description: "Intelligent talent cloud utilizing deep learning algorithms to vet and match remote developers with companies.",
image: "images/turing.jpg",
pricing: "Custom Pricing",
website: "https://turing.com",
tutorial: ""
},
{
id: 338,
name: "Eightfold AI",
categories: [
"AI Career Tools",
"AI Analytics"
],
description: "Talent intelligence platform analyzing career trajectories to predict candidate success and manage enterprise workforces.",
image: "images/eightfold ai.jpg",
pricing: "Custom Pricing",
website: "https://eightfold.ai",
tutorial: ""
},
{
id: 339,
name: "Paradox AI",
categories: [
"Customer Support AI",
"AI Interview Assistant"
],
description: "Conversational recruiting assistant named Olivia that automates candidate screening, interview scheduling, and onboarding tasks.",
image: "images/paradox ai.jpg",
pricing: "Custom Pricing",
website: "https://paradox.ai",
tutorial: ""
},
{
id: 340,
name: "SeekOut",
categories: [
"AI Career Tools",
"AI Data Analysis"
],
description: "Enterprise talent search engine employing AI to source diverse candidates from hard-to-find digital footprints.",
image: "images/seekout.jpg",
pricing: "Custom Pricing",
website: "https://seekout.com",
tutorial: ""
},
{
id: 341,
name: "Beamery",
categories: [
"AI Career Tools",
"AI Analytics"
],
description: "Talent lifecycle management platform leveraging AI to match employee skills with internal corporate career opportunities.",
image: "images/beamery.jpg",
pricing: "Custom Pricing",
website: "https://beamery.com",
tutorial: ""
},
{
id: 342,
name: "HireVue",
categories: [
"AI Interview Assistant",
"AI Career Tools"
],
description: "Video interviewing software incorporating structured AI assessments to objectively evaluate candidate competencies and skills.",
image: "images/hirevue.jpg",
pricing: "Custom Pricing",
website: "https://hirevue.com",
tutorial: ""
},
{
id: 343,
name: "Pymetrics",
categories: [
"AI Career Tools",
"AI Analytics"
],
description: "Gamified behavioral assessment platform utilizing audited ethical AI to match candidates with ideal corporate roles.",
image: "images/pymetrics.jpg",
pricing: "Custom Pricing",
website: "https://pymetrics.ai",
tutorial: ""
},
{
id: 344,
name: "Textio",
categories: [
"Writing AI",
"AI Career Tools"
],
description: "Augmented writing platform identifying hidden demographic bias within corporate job descriptions and employee performance reviews.",
image: "images/textio.jpg",
pricing: "Custom Pricing",
website: "https://textio.com",
tutorial: ""
},
{
id: 345,
name: "Resume Worded",
categories: [
"AI Resume Builder",
"AI Career Tools"
],
description: "AI-powered platform providing instant feedback on resumes and LinkedIn profiles based on top recruiter metrics.",
image: "images/resume worded.jpg",
pricing: "Freemium",
website: "https://resumeworded.com",
tutorial: ""
},
{
id: 346,
name: "Rezi",
categories: [
"AI Resume Builder",
"AI Career Tools"
],
description: "Automated resume generator explicitly optimized to bypass modern applicant tracking systems and secure corporate interviews.",
image: "images/rezi.jpg",
pricing: "Freemium",
website: "https://rezi.ai",
tutorial: ""
},
{
id: 347,
name: "Kickresume",
categories: [
"AI Resume Builder",
"Writing AI"
],
description: "Online resume builder utilizing OpenAI integration to quickly draft professional cover letters and experience summaries.",
image: "images/kickresume.jpg",
pricing: "Freemium",
website: "https://kickresume.com",
tutorial: ""
},
{
id: 348,
name: "Enhancv",
categories: [
"AI Resume Builder",
"AI Career Tools"
],
description: "Design-focused resume builder featuring built-in AI content suggestions to tailor applications for specific job industries.",
image: "images/enhancv.jpg",
pricing: "Freemium",
website: "https://enhancv.com",
tutorial: ""
},
{
id: 349,
name: "Teal",
categories: [
"AI Career Tools",
"AI Resume Builder"
],
description: "Personal career growth platform utilizing AI to customize resumes, track job applications, and optimize LinkedIn profiles.",
image: "images/teal.jpg",
pricing: "Freemium",
website: "https://tealhq.com",
tutorial: ""
},
{
id: 350,
name: "Interview Warmup",
categories: [
"AI Interview Assistant",
"AI Career Tools"
],
description: "Free Google AI tool allowing candidates to practice answering job interview questions and analyze their responses.",
image: "images/interview warmup.jpg",
pricing: "Free",
website: "https://grow.google/certificates/interview-warmup",
tutorial: ""
},
{
id: 351,
name: "Yoodli",
categories: [
"AI Interview Assistant",
"Productivity AI"
],
description: "AI speech coach recording practice sessions to provide real-time feedback on filler words, pacing, and tone.",
image: "images/yoodli.jpg",
pricing: "Freemium",
website: "https://yoodli.ai",
tutorial: ""
},
{
id: 352,
name: "Poised",
categories: [
"AI Interview Assistant",
"Meeting Assistant AI"
],
description: "Communication coach application living directly on your screen to deliver private, real-time speaking performance feedback.",
image: "images/poised.jpg",
pricing: "Freemium",
website: "https://poised.com",
tutorial: ""
},
{
id: 353,
name: "Orai",
categories: [
"AI Interview Assistant",
"AI Education"
],
description: "Mobile speech improvement app deploying interactive AI lessons to enhance public speaking confidence and clarity.",
image: "images/orai.jpg",
pricing: "$10/month",
website: "https://oraiapp.com",
tutorial: ""
},
{
id: 354,
name: "Spline AI",
categories: [
"AI 3D Generator",
"UI Design AI"
],
description: "3D design software incorporating generative prompts to create immersive objects, textures, and interactive animations directly.",
image: "images/spline ai.jpg",
pricing: "Freemium",
website: "https://spline.design/ai",
tutorial: ""
},
{
id: 355,
name: "Masterpiece X",
categories: [
"AI 3D Generator",
"AI Gaming"
],
description: "Text-to-3D creation platform democratizing game asset generation by producing rigged, animated models from simple descriptions.",
image: "images/masterpiece x.jpg",
pricing: "Freemium",
website: "https://masterpiecex.com",
tutorial: ""
},
{
id: 356,
name: "Sloyd",
categories: [
"AI 3D Generator",
"Developer Tools AI"
],
description: "Parametric 3D asset generator delivering optimized, game-ready models quickly based on user prompt inputs.",
image: "images/sloyd.jpg",
pricing: "Freemium",
website: "https://sloyd.ai",
tutorial: ""
},
{
id: 357,
name: "Meshy",
categories: [
"AI 3D Generator",
"AI Gaming"
],
description: "AI toolkit enabling incredibly fast text-to-3D and image-to-3D model generation with high-quality PBR texturing.",
image: "images/meshy.jpg",
pricing: "Freemium",
website: "https://meshy.ai",
tutorial: ""
},
{
id: 358,
name: "CSM AI",
categories: [
"AI 3D Generator",
"AI Video Generator"
],
description: "Common Sense Machines translating standard 2D images and videos into robust, fully realized 3D environments.",
image: "images/csm ai.jpg",
pricing: "Freemium",
website: "https://csm.ai",
tutorial: ""
},
{
id: 359,
name: "Rodin",
categories: [
"AI 3D Generator",
"AI Avatar"
],
description: "Advanced generative 3D model engine by Deemos specializing in highly detailed digital avatars and assets.",
image: "images/rodin.jpg",
pricing: "Freemium",
website: "https://hyperhuman.deemos.com",
tutorial: ""
},
{
id: 360,
name: "Polycam",
categories: [
"AI 3D Generator",
"AI Architecture"
],
description: "LiDAR and photogrammetry application using cloud AI processing to convert smartphone photos into accurate 3D captures.",
image: "images/polycam.jpg",
pricing: "Freemium",
website: "https://poly.cam",
tutorial: ""
},
{
id: 361,
name: "Krea AI",
categories: [
"AI Image Generator",
"AI Photo Editor"
],
description: "Real-time generative design tool upscaleing images and enhancing digital art with instant prompt-based rendering.",
image: "images/krea ai.jpg",
pricing: "Freemium",
website: "https://krea.ai",
tutorial: ""
},
{
id: 362,
name: "Magnific AI",
categories: [
"AI Image Generator",
"AI Photo Editor"
],
description: "Premium AI image upscaler and enhancer adding incredible high-resolution details and textures to existing digital images.",
image: "images/magnific ai.jpg",
pricing: "$39/month",
website: "https://magnific.ai",
tutorial: ""
},
{
id: 363,
name: "Upscayl",
categories: [
"AI Photo Editor",
"Developer Tools AI"
],
description: "Free, open-source AI image upscaler application that functions locally on desktop computers for enhanced privacy.",
image: "images/upscayl.jpg",
pricing: "Free",
website: "https://upscayl.org",
tutorial: ""
},
{
id: 364,
name: "Let's Enhance",
categories: [
"AI Photo Editor",
"AI Ecommerce"
],
description: "Online photo upscaling tool maximizing resolution and color correcting product images for ecommerce and printing.",
image: "images/let's enhance.jpg",
pricing: "Freemium",
website: "https://letsenhance.io",
tutorial: ""
},
{
id: 365,
name: "VanceAI",
categories: [
"AI Photo Editor",
"AI Background Remover"
],
description: "Suite of AI image enhancement tools for sharpening, denoising, and restoring old photographs instantly.",
image: "images/vanceai.jpg",
pricing: "Freemium",
website: "https://vanceai.com",
tutorial: ""
},
{
id: 366,
name: "Cutout.pro",
categories: [
"AI Background Remover",
"AI Photo Editor"
],
description: "Visual design platform automating background removal, video masking, and generative object deletion workflows seamlessly.",
image: "images/cutout.pro.jpg",
pricing: "Freemium",
website: "https://cutout.pro",
tutorial: ""
},
{
id: 367,
name: "WatermarkRemover.io",
categories: [
"AI Object Eraser",
"AI Photo Editor"
],
description: "AI-powered tool that cleanly eliminates watermarks, logos, and timestamp text from digital images instantly.",
image: "images/watermarkremover.io.jpg",
pricing: "Freemium",
website: "https://watermarkremover.io",
tutorial: ""
},
{
id: 368,
name: "Cleanup.pictures",
categories: [
"AI Object Eraser",
"AI Photo Editor"
],
description: "Web application utilizing inpainting algorithms to remove unwanted people, objects, and defects from photographs.",
image: "images/cleanup.pictures.jpg",
pricing: "Freemium",
website: "https://cleanup.pictures",
tutorial: ""
},
{
id: 369,
name: "Bria AI",
categories: [
"AI Image Generator",
"Marketing AI"
],
description: "Visual generative AI API built ethically on licensed data to create compliant marketing and commercial imagery.",
image: "images/bria ai.jpg",
pricing: "Custom Pricing",
website: "https://bria.ai",
tutorial: ""
},
{
id: 370,
name: "Playground AI",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Free-to-use online AI image creator blending multiple diffusion models to produce stunning graphic design visuals.",
image: "images/playground ai.jpg",
pricing: "Freemium",
website: "https://playground.com",
tutorial: ""
},
{
id: 371,
name: "Tensor.art",
categories: [
"AI Image Generator",
"Developer Tools AI"
],
description: "Free online platform hosting thousands of custom Stable Diffusion models and LoRAs for image generation.",
image: "images/tensor.art.jpg",
pricing: "Freemium",
website: "https://tensor.art",
tutorial: ""
},
{
id: 372,
name: "Civitai",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Community platform and repository sharing custom fine-tuned generative art models and creative prompt configurations.",
image: "images/civitai.jpg",
pricing: "Free",
website: "https://civitai.com",
tutorial: ""
},
{
id: 373,
name: "SeaArt AI",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Highly efficient AI illustration engine offering rich prompt libraries to generate detailed anime and realistic art.",
image: "images/seaart ai.jpg",
pricing: "Freemium",
website: "https://seaart.ai",
tutorial: ""
},
{
id: 374,
name: "Dezgo",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Uncensored Stable Diffusion text-to-image generator offering completely free and fast visual generation without restrictive filters.",
image: "images/dezgo.jpg",
pricing: "Free",
website: "https://dezgo.com",
tutorial: ""
},
{
id: 375,
name: "NightCafe",
categories: [
"AI Art Generator",
"AI Image Generator"
],
description: "AI art studio aggregating multiple algorithms like VQGAN+CLIP and Stable Diffusion in an accessible interface.",
image: "images/nightcafe.jpg",
pricing: "Freemium",
website: "https://creator.nightcafe.studio",
tutorial: ""
},
{
id: 376,
name: "StarryAI",
categories: [
"AI Art Generator",
"AI Image Generator"
],
description: "Mobile application converting text descriptions into beautiful artwork, granting users full commercial ownership of generations.",
image: "images/starryai.jpg",
pricing: "Freemium",
website: "https://starryai.com",
tutorial: ""
},
{
id: 377,
name: "Wombo Dream",
categories: [
"AI Art Generator",
"AI Image Generator"
],
description: "Fast mobile and web application creating stylized generative artwork and trading cards from basic text prompts.",
image: "images/wombo dream.jpg",
pricing: "Freemium",
website: "https://dream.ai",
tutorial: ""
},
{
id: 378,
name: "DeepArt",
categories: [
"AI Art Generator",
"AI Photo Editor"
],
description: "Neural style transfer tool turning standard photographs into artworks imitating the styles of famous painters.",
image: "images/deepart.jpg",
pricing: "Freemium",
website: "https://deepart.io",
tutorial: ""
},
{
id: 379,
name: "Artbreeder",
categories: [
"AI Art Generator",
"AI Image Generator"
],
description: "Collaborative generative platform blending images and manipulating facial genetics to create entirely new digital portraits.",
image: "images/artbreeder.jpg",
pricing: "Freemium",
website: "https://artbreeder.com",
tutorial: ""
},
{
id: 380,
name: "Craiyon",
categories: [
"AI Image Generator",
"AI Art Generator"
],
description: "Formerly DALL-E mini, this free online application generates grids of creative images from any text prompt.",
image: "images/craiyon.jpg",
pricing: "Freemium",
website: "https://craiyon.com",
tutorial: ""
},
{
id: 381,
name: "Ideogram",
categories: [
"AI Image Generator",
"AI Logo Generator"
],
description: "Generative model uniquely capable of rendering highly accurate and stylized typography within generated image compositions.",
image: "images/ideogram.jpg",
pricing: "Freemium",
website: "https://ideogram.ai",
tutorial: ""
},
{
id: 382,
name: "Recraft",
categories: [
"AI Image Generator",
"UI Design AI"
],
description: "Generative vector art board focused on producing infinitely scalable graphics, icons, and illustrations for designers.",
image: "images/recraft.jpg",
pricing: "Freemium",
website: "https://recraft.ai",
tutorial: ""
},
{
id: 383,
name: "Kittl",
categories: [
"UI Design AI",
"AI Logo Generator"
],
description: "Intuitive graphic design platform combining AI image generation with advanced typography tools for merchandise creation.",
image: "images/kittl.jpg",
pricing: "Freemium",
website: "https://kittl.com",
tutorial: ""
},
{
id: 384,
name: "Microsoft Designer",
categories: [
"UI Design AI",
"Social Media AI"
],
description: "Graphic design application integrating DALL-E 3 to automatically generate social media posts and digital invitations.",
image: "images/microsoft designer.jpg",
pricing: "Free",
website: "https://designer.microsoft.com",
tutorial: ""
},
{
id: 385,
name: "AutoDraw",
categories: [
"UI Design AI",
"AI Art Generator"
],
description: "Experimental Google drawing tool employing machine learning to predict and refine hand-drawn doodles into polished icons.",
image: "images/autodraw.jpg",
pricing: "Free",
website: "https://autodraw.com",
tutorial: ""
},
{
id: 386,
name: "Sketch2Code",
categories: [
"UI Design AI",
"Coding AI"
],
description: "Microsoft AI initiative translating handwritten user interface layouts into valid HTML markup code instantly.",
image: "images/sketch2code.jpg",
pricing: "Free",
website: "https://azure.microsoft.com",
tutorial: ""
},
{
id: 387,
name: "Fontjoy",
categories: [
"UI Design AI"
],
description: "Typography tool leveraging deep learning vectors to generate highly complementary, aesthetic font pairings for web designers.",
image: "images/fontjoy.jpg",
pricing: "Free",
website: "https://fontjoy.com",
tutorial: ""
},
{
id: 388,
name: "Colormind",
categories: [
"UI Design AI"
],
description: "AI-driven color palette generator learning aesthetic combinations from photographs, movies, and famous art pieces.",
image: "images/colormind.jpg",
pricing: "Free",
website: "https://colormind.io",
tutorial: ""
},
{
id: 389,
name: "Huemint",
categories: [
"UI Design AI"
],
description: "Machine learning color palette tool mapping contextual color placement specifically for brand identities and website mockups.",
image: "images/huemint.jpg",
pricing: "Free",
website: "https://huemint.com",
tutorial: ""
},
{
id: 390,
name: "Harvey AI",
categories: [
"AI Legal Assistant",
"Research AI"
],
description: "Enterprise legal LLM built for global law firms to perform contract analysis, due diligence, and regulatory research.",
image: "images/harvey ai.jpg",
pricing: "Enterprise Pricing",
website: "https://harvey.ai",
tutorial: ""
},
{
id: 391,
name: "Casetext CoCounsel",
categories: [
"AI Legal Assistant",
"Research AI"
],
description: "Professional AI legal assistant drafting memos, reviewing extensive databases, and preparing deposition questions for attorneys.",
image: "images/casetext cocounsel.jpg",
pricing: "Custom Pricing",
website: "https://casetext.com",
tutorial: ""
},
{
id: 392,
name: "Spellbook",
categories: [
"AI Legal Assistant",
"Writing AI"
],
description: "Legal software integrating OpenAI directly into Microsoft Word to instantly draft, review, and negotiate contracts.",
image: "images/spellbook.jpg",
pricing: "Custom Pricing",
website: "https://spellbook.legal",
tutorial: ""
},
{
id: 393,
name: "Ironclad AI",
categories: [
"AI Legal Assistant",
"Automation AI"
],
description: "Contract lifecycle management platform utilizing AI to extract metadata and redline agreements across enterprise legal departments.",
image: "images/ironclad ai.jpg",
pricing: "Custom Pricing",
website: "https://ironcladapp.com",
tutorial: ""
},
{
id: 394,
name: "Kira Systems",
categories: [
"AI Legal Assistant",
"AI Data Analysis"
],
description: "Machine learning software identifying, extracting, and analyzing critical provisions across hundreds of complex corporate contracts simultaneously.",
image: "images/kira systems.jpg",
pricing: "Custom Pricing",
website: "https://kirasystems.com",
tutorial: ""
},
{
id: 395,
name: "Luminance",
categories: [
"AI Legal Assistant",
"Research AI"
],
description: "Legal AI platform assisting lawyers with M&A due diligence, eDiscovery, and automated contract negotiation markups.",
image: "images/luminance.jpg",
pricing: "Custom Pricing",
website: "https://luminance.com",
tutorial: ""
},
{
id: 396,
name: "Robin AI",
categories: [
"AI Legal Assistant",
"Writing AI"
],
description: "Legal tech company combining Anthropic's Claude models with human experts to rapidly draft and review legal contracts.",
image: "images/robin ai.jpg",
pricing: "Freemium",
website: "https://robinai.com",
tutorial: ""
},
{
id: 397,
name: "DoNotPay",
categories: [
"AI Legal Assistant",
"Productivity AI"
],
description: "Consumer robot lawyer application assisting users in contesting parking tickets, canceling subscriptions, and navigating small claims.",
image: "images/donotpay.jpg",
pricing: "$36/bimonthly",
website: "https://donotpay.com",
tutorial: ""
},
{
id: 398,
name: "PatentPal",
categories: [
"AI Legal Assistant",
"Writing AI"
],
description: "Generative AI writing tool automating the drafting of patent specifications and complex intellectual property claims.",
image: "images/patentpal.jpg",
pricing: "Custom Pricing",
website: "https://patentpal.com",
tutorial: ""
},
{
id: 399,
name: "Lex Machina",
categories: [
"AI Legal Assistant",
"AI Analytics"
],
description: "Legal analytics platform mining court data to predict case outcomes, judge behaviors, and opposing counsel strategies.",
image: "images/lex machina.jpg",
pricing: "Custom Pricing",
website: "https://lexmachina.com",
tutorial: ""
},
{
id: 400,
name: "Tome Legal",
categories: [
"AI Legal Assistant",
"Productivity AI"
],
description: "AI-driven contract analysis tool breaking down complex non-disclosure agreements and terms of service into plain language.",
image: "images/tome legal.jpg",
pricing: "Freemium",
website: "https://tome.app",
tutorial: ""
},
{
id: 401,
name: "Murf.ai",
categories: [
"AI Voice Generator",
"Audio AI"
],
description: "Versatile text-to-speech platform featuring a massive library of studio-quality synthetic voices for e-learning, ads, and presentations.",
image: "images/murf.ai.jpg",
pricing: "Freemium",
website: "https://murf.ai",
tutorial: ""
},
{
id: 402,
name: "Riverside.fm AI",
categories: [
"Audio AI",
"Video Editor AI"
],
description: "Local recording platform integrating AI to automatically generate short social media clips and perfect audio transcripts.",
image: "images/riverside.fm ai.jpg",
pricing: "Freemium",
website: "https://riverside.fm",
tutorial: ""
},
{
id: 403,
name: "Auphonic",
categories: [
"Audio AI",
"Automation AI"
],
description: "Automatic web-based audio engineer mastering levels, loudness, and balancing dynamics for podcasts and broadcasts.",
image: "images/auphonic.jpg",
pricing: "Freemium",
website: "https://auphonic.com",
tutorial: ""
},
{
id: 404,
name: "Cleanvoice AI",
categories: [
"Audio AI"
],
description: "Specialized audio editor that automatically detects and removes filler words, mouth sounds, and dead air from podcasts.",
image: "images/cleanvoice ai.jpg",
pricing: "Freemium",
website: "https://cleanvoice.ai",
tutorial: ""
},
{
id: 405,
name: "Krisp",
categories: [
"Audio AI",
"Productivity AI"
],
description: "Intelligent background noise cancellation software running locally to filter out distractions during live online video calls.",
image: "images/krisp.jpg",
pricing: "Freemium",
website: "https://krisp.ai",
tutorial: ""
},
{
id: 406,
name: "VoiceMod",
categories: [
"Audio AI",
"AI Gaming"
],
description: "Real-time AI voice changer and soundboard software widely used by gamers, streamers, and online content creators.",
image: "images/voicemod.jpg",
pricing: "Freemium",
website: "https://voicemod.net",
tutorial: ""
},
{
id: 407,
name: "Spleeter by Deezer",
categories: [
"Audio AI",
"Developer Tools AI"
],
description: "Open-source source separation library spliting songs into isolated vocal, drum, bass, and instrumental tracks seamlessly.",
image: "images/spleeter by deezer.jpg",
pricing: "Free",
website: "https://github.com/deezer/spleeter",
tutorial: ""
},
{
id: 408,
name: "Lalal.ai",
categories: [
"Audio AI"
],
description: "High-precision stem extraction service using neural networks to separate vocals, instruments, and specific sounds cleanly.",
image: "images/lalal.ai.jpg",
pricing: "Freemium",
website: "https://lalal.ai",
tutorial: ""
},
{
id: 409,
name: "Moises AI",
categories: [
"Audio AI",
"AI Education"
],
description: "The musician's application using artificial intelligence to isolate tracks, detect chords, and shift tempos for practicing.",
image: "images/moises ai.jpg",
pricing: "Freemium",
website: "https://moises.ai",
tutorial: ""
},
{
id: 410,
name: "Landr AI",
categories: [
"Audio AI"
],
description: "Automated music mastering engine providing instant, high-quality audio polishing and digital distribution services globally.",
image: "images/landr ai.jpg",
pricing: "Freemium",
website: "https://landr.com",
tutorial: ""
},
{
id: 411,
name: "Izotope Ozone AI",
categories: [
"Audio AI"
],
description: "Industry-standard audio mastering suite featuring an intelligent Assistant that builds custom processing signal chains.",
image: "images/izotope ozone ai.jpg",
pricing: "Paid",
website: "https://izotope.com",
tutorial: ""
},
{
id: 412,
name: "Happy Scribe",
categories: [
"Audio AI",
"Productivity AI"
],
description: "Transcription and subtitling platform combining advanced speech recognition with professional human proofreading workflows.",
image: "images/happy scribe.jpg",
pricing: "Freemium",
website: "https://happyscribe.com",
tutorial: ""
},
{
id: 413,
name: "Fellow.app AI",
categories: [
"Meeting Assistant AI",
"Productivity AI"
],
description: "Managerial meeting tool generating automated agendas and collaborative workspace summaries utilizing conversational context intelligence.",
image: "images/fellow.app ai.jpg",
pricing: "Freemium",
website: "https://fellow.app",
tutorial: ""
},
{
id: 414,
name: "Avoma",
categories: [
"Meeting Assistant AI",
"Sales AI"
],
description: "End-to-end conversation intelligence solution providing synchronized note-taking and customer interaction mapping across enterprise teams.",
image: "images/avoma.jpg",
pricing: "Freemium",
website: "https://avoma.com",
tutorial: ""
},
{
id: 415,
name: "Grain",
categories: [
"Meeting Assistant AI",
"Productivity AI"
],
description: "User interview and research clipping application extracting bite-sized video highlights from long online product interviews seamlessly.",
image: "images/grain.jpg",
pricing: "Freemium",
website: "https://grain.com",
tutorial: ""
},
{
id: 416,
name: "Read AI",
categories: [
"Meeting Assistant AI",
"AI Analytics"
],
description: "Virtual meeting metric tool monitoring group sentiment, engagement levels, and talk-time distribution to optimize collaboration quality.",
image: "images/read ai.jpg",
pricing: "Freemium",
website: "https://read.ai",
tutorial: ""
},
{
id: 417,
name: "Supernormal",
categories: [
"Meeting Assistant AI",
"Productivity AI"
],
description: "AI platform writing formatted meeting minutes, executive summaries, and action trackers instantly across multiple online connection apps.",
image: "images/supernormal.jpg",
pricing: "Freemium",
website: "https://supernormal.com",
tutorial: ""
},
{
id: 418,
name: "Rewind AI",
categories: [
"Productivity AI"
],
description: "Personal local timeline recording everything you've seen, said, or heard on your desktop computer to make it fully searchable.",
image: "images/rewind ai.jpg",
pricing: "Freemium",
website: "https://rewind.ai",
tutorial: ""
},
{
id: 419,
name: "Glance.fyi",
categories: [
"Productivity AI"
],
description: "AI-powered web reading utility summarizing dense landing pages and identifying primary thematic components within heavy articles.",
image: "images/glance.fyi.jpg",
pricing: "Free",
website: "https://glance.fyi",
tutorial: ""
},
{
id: 420,
name: "Heptabase",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Visual canvas note-taking ecosystem incorporating machine intelligence to organize complex research spaces and map conceptual relationships.",
image: "images/heptabase.jpg",
pricing: "$10/month",
website: "https://heptabase.com",
tutorial: ""
},
{
id: 421,
name: "Scrintal",
categories: [
"Note Taking AI",
"Productivity AI"
],
description: "Mind mapping and digital whiteboard application utilizing predictive text blocks to streamline systemic knowledge engineering workflows.",
image: "images/scrintal.jpg",
pricing: "$5/month",
website: "https://scrintal.com",
tutorial: ""
},
{
id: 422,
name: "Logseq AI",
categories: [
"Note Taking AI"
],
description: "Privacy-first open-source outliner knowledge base deploying localized vector plugins to structure interconnected bullet points contextually.",
image: "images/logseq ai.jpg",
pricing: "Free",
website: "https://logseq.com",
tutorial: ""
},
{
id: 423,
name: "ClickUp Brain",
categories: [
"Productivity AI",
"Automation AI"
],
description: "Unified productivity application embedding a centralized conversational model to cross-reference tasks, write documents, and build roadmaps.",
image: "images/clickup brain.jpg",
pricing: "$7/month",
website: "https://clickup.com/features/brain",
tutorial: ""
},
{
id: 424,
name: "Asana Intelligence",
categories: [
"Productivity AI",
"Automation AI"
],
description: "Enterprise work management suite deploying smart models to predict milestone bottlenecks and outline clear optimization fixes.",
image: "images/asana intelligence.jpg",
pricing: "Freemium",
website: "https://asana.com",
tutorial: ""
},
{
id: 425,
name: "Monday.com AI Assistant",
categories: [
"Productivity AI",
"Automation AI"
],
description: "Cloud ERP system incorporating generative text modules to build data column configurations and formulate custom formula strings.",
image: "images/monday.com ai assistant.jpg",
pricing: "Freemium",
website: "https://monday.com",
tutorial: ""
},
{
id: 426,
name: "Jira Product Discovery AI",
categories: [
"Product Management AI",
"Developer Tools AI"
],
description: "Agile tracker adding intelligence modules to distill vast user feedback matrices into refined developer backlog hierarchies.",
image: "images/jira product discovery ai.jpg",
pricing: "Freemium",
website: "https://atlassian.com/software/jira",
tutorial: ""
},
{
id: 427,
name: "Linear Asks",
categories: [
"Developer Tools AI",
"Productivity AI"
],
description: "Streamlined issue tracking module using machine learning models to cluster duplicate bug logs and prioritize system updates.",
image: "images/linear asks.jpg",
pricing: "Freemium",
website: "https://linear.app",
tutorial: ""
},
{
id: 428,
name: "Fibery AI",
categories: [
"Product Management AI",
"Note Taking AI"
],
description: "Connected workspace utility allowing product teams to process raw qualitative texts and synthesize comprehensive product requirement docs.",
image: "images/fibery ai.jpg",
pricing: "Freemium",
website: "https://fibery.io",
tutorial: ""
},

];

// 1. Aapki di hui Popular tools ki list
const popularList = [
  "ChatGPT", "Claude", "Gemini", "Perplexity", "Midjourney", "Runway", "Leonardo AI", 
  "ElevenLabs", "Synthesia", "Jasper", "Copy.ai", "Writesonic", "Framer", "Replit", 
  "GitHub Copilot", "Hugging Face", "Notion AI", "Canva AI", "Adobe Firefly", "Grammarly", 
  "QuillBot", "Otter.ai", "Fireflies.ai", "HeyGen", "Speechify", "Stable Diffusion", 
  "DALL-E 3", "Photoroom", "Looka", "Zapier Central", "Zoom AI Companion", "Microsoft Copilot", 
  "Consensus", "Elicit", "SciSpace", "ChatPDF", "Poe", "Character.ai", "You.com", 
  "CapCut AI", "Whisper", "Deepgram", "AssemblyAI", "NovelAI", "Rytr", "Amazon Q", 
  "Codeium", "LangChain", "Pinecone", "Weaviate", "DataRobot", "H2O.ai", "Apollo.io AI", 
  "ZoomInfo Copilot", "Salesforce Einstein", "HubSpot ChatSpot", "TubeBuddy", "VidIQ", 
  "Monica AI", "Merlin AI", "AskYourPDF", "Scholarcy", "Replicate", "Scale AI", 
  "Roboflow", "Resume Worded", "Kickresume", "Polycam", "Playground AI", "Civitai", 
  "Microsoft Designer", "Harvey AI", "Casetext CoCounsel", "Krisp"
];

// 2. Aapki di hui New tools ki list
const newList = [
  "Relay", "GPT-based ChatPDF alternatives (PDF.ai)", "Anyscale", "Kumo.ai", 
  "Snowflake Cortex", "Canva Magic Studio", "GrammarlyGO", "Eightify", "ChatTube", 
  "MaxAI", "Teal", "Yoodli", "Linear Asks", "Fibery AI", "Glance.fyi", "Heptabase", "Scrintal"
];

// 3. Aapki di hui Popular + New (Both) tools ki list
const bothList = [
  "Cursor", "DeepSeek", "Grok", "v0", "Bolt.new", "Lovable", "Luma Dream Machine", 
  "Kling AI", "Groq", "Julius AI", "Recraft", "Ideogram", "Krea AI", "Magnific AI", 
  "Meshy", "Rodin", "SeaArt AI", "Tensor.art", "Read AI", "ClickUp Brain", "Haiper", 
  "Together AI", "Fireworks AI", "Baseten", "Modal", "Flowise", "LlamaIndex", "PDF.ai", 
  "Suno", "Udio"
];

// 4. AUTOMATION LOGIC: Yeh function aapke original 'tools' array ko update karega
function autoAddTags(toolsArray) {
    return toolsArray.map(tool => {
        const toolName = tool.name ? tool.name.trim() : "";

        // Agar tool "Popular + New" dono list mein hai
        if (bothList.some(name => name.toLowerCase() === toolName.toLowerCase())) {
            tool.isPopular = true;
            tool.isNew = true;
        } 
        // Agar tool sirf "Popular" list mein hai
        else if (popularList.some(name => name.toLowerCase() === toolName.toLowerCase())) {
            tool.isPopular = true;
        } 
        // Agar tool sirf "New" list mein hai
        else if (newList.some(name => name.toLowerCase() === toolName.toLowerCase())) {
            tool.isNew = true;
        }

        return tool;
    });
}

// 5. TRICK RUN: Isko run karte hi aapka 'tools' array update ho jayega
if (typeof tools !== 'undefined') {
    tools = autoAddTags(tools);
    console.log("🔥 Booom! Saare 150+ tools me tags automatic lag gaye hain.");
    console.log(tools); // Update hua array dekhne ke liye
} else {
    console.log("Error: 'tools' array nahi mila. Is code ko script.js ke sabse niche paste karein.");
}