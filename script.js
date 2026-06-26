let visibleTools = 12;
const toolsPerLoad = 12;
let visibleCourses = 4;
let visiblePrompts = 4;
const itemsPerLoadShared = 4;
let visibleArticles = 6;
const articlesPerLoad = 6;

const loadMoreArticlesBtn = document.getElementById("loadMoreArticlesBtn");
const articlesContainer = document.getElementById("articlesContainer");
const tickerAllBtn = document.getElementById("tickerAllBtn");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const loadMoreCoursesBtn = document.getElementById("loadMoreCoursesBtn");
const loadMorePromptsBtn = document.getElementById("loadMorePromptsBtn");
const toolsContainer = document.getElementById("toolsContainer");
const coursesContainer = document.getElementById("coursesContainer");
const promptsContainer = document.getElementById("promptsContainer");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");

let selectedCategory = "All";
let selectedPromptCategory = "All";
let selectedType = "all"; 

// Global View Track State (Change 1 & 3)
let currentActiveView = "tools"; 

/* -------------------------
   1. PERFORMANCE SEARCH CACHE (OPTIMIZED)
------------------------- */
if (typeof tools !== 'undefined') {
    tools.forEach(tool => {
        tool.searchText = [
            tool.name || "",
            ...(tool.categories || [])
        ]
        .join(" ")
        .toLowerCase();
    });
}

if (typeof prompts !== 'undefined') {
    prompts.forEach(prompt => {
        prompt.searchText = [
            prompt.title || "",
            ...(prompt.categories || [])
        ]
        .join(" ")
        .toLowerCase();
    });
}

/* -------------------------
   NEW: CHANGE 1 & 3 LOGIC FOR VIEW SWITCHER
------------------------- */
function switchView(view) {
    currentActiveView = view;
    
    const toolsSection = document.getElementById("tools");
    const promptsSection = document.getElementById("prompts");
    const switchToolsBtn = document.getElementById("switchToolsBtn");
    const switchPromptsBtn = document.getElementById("switchPromptsBtn");
    const exploreBtnText = document.getElementById("exploreBtnText");
    
    if (view === "tools") {
        if(switchToolsBtn) switchToolsBtn.classList.add("active");
        if(switchPromptsBtn) switchPromptsBtn.classList.remove("active");
        
        if(toolsSection) toolsSection.style.display = "block";
        if(promptsSection) promptsSection.style.display = "none";
        
        if(exploreBtnText) exploreBtnText.innerText = "Explore Tools";
        renderTools(); // render counters as tools
    } else {
        if(switchToolsBtn) switchToolsBtn.classList.remove("active");
        if(switchPromptsBtn) switchPromptsBtn.classList.add("active");
        
        if(toolsSection) toolsSection.style.display = "none";
        if(promptsSection) promptsSection.style.display = "block";
        
        if(exploreBtnText) exploreBtnText.innerText = "Explore Prompts";
        renderPrompts(); // render counters as prompts
    }
}

// Hero Explore Button scroll redirection based on active view
function scrollToCurrentSection() {
    const targetId = currentActiveView === "tools" ? "tools" : "prompts";
    const section = document.getElementById(targetId);
    if(section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}

/* -------------------------
   2. DYNAMIC CATEGORIES GENERATOR
------------------------- */
function generateDynamicCategories() {
    if (typeof tools !== 'undefined') {
        const toolCats = new Set();
        tools.forEach(t => { if(t.categories) t.categories.forEach(c => toolCats.add(c)); });
        
        const categoryButtonsContainer = document.getElementById("categoryButtons");
        if (categoryButtonsContainer) {
            let toolHtml = `<button class="category-btn active" data-category="All">All <span class="count" id="allCount">${tools.length}</span></button>`;
            Array.from(toolCats).sort().forEach(cat => {
                toolHtml += `<button class="category-btn" data-category="${cat}">${cat} <span class="count">0</span></button>`;
            });
            categoryButtonsContainer.innerHTML = toolHtml;
        }
    }

    if (typeof prompts !== 'undefined') {
        const promptCats = new Set();
        prompts.forEach(p => { if(p.categories) p.categories.forEach(c => promptCats.add(c)); });
        
        const promptCategoryButtonsContainer = document.getElementById("promptCategoryButtons");
        if (promptCategoryButtonsContainer) {
            let promptHtml = `<button class="prompt-category-btn active" data-category="All">All <span class="count" id="allPromptsCount">${prompts.length}</span></button>`;
            Array.from(promptCats).sort().forEach(cat => {
                promptHtml += `<button class="prompt-category-btn" data-category="${cat}">${cat} <span class="count">0</span></button>`;
            });
            promptCategoryButtonsContainer.innerHTML = promptHtml;
        }
    }

    attachCategoryEventListeners();
}

function updateCategoryCounts(){
    if (typeof tools !== 'undefined') {
        document.querySelectorAll(".category-btn").forEach(btn => {
            const category = btn.dataset.category;
            if(category === "All") return;
            const count = tools.filter(t => t.categories && t.categories.includes(category)).length;
            const badge = btn.querySelector(".count");
            if(badge) badge.textContent = count;
        });
    }

    if (typeof prompts !== 'undefined') {
        document.querySelectorAll(".prompt-category-btn").forEach(btn => {
            const category = btn.dataset.category;
            if(category === "All") return;
            const count = prompts.filter(p => p.categories && p.categories.includes(category)).length;
            const badge = btn.querySelector(".count");
            if(badge) badge.textContent = count;
        });
    }
}

/* -------------------------
   3. TOOLS RENDERING
------------------------- */
function renderTools(){
    if (!toolsContainer || typeof tools === 'undefined') return;
    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = tools.filter(tool => {
        const matchCategory = selectedCategory === "All" || (tool.categories && tool.categories.includes(selectedCategory));
        const matchSearch = search === "" || tool.searchText.includes(search);
        
        let matchType = true;
        if (selectedType === "popular") {
            matchType = tool.isPopular === true;
        } else if (selectedType === "new") {
            matchType = tool.isNew === true;
        }

        return (matchCategory && matchSearch && matchType);
    });

    // Change 3 Condition Check
    if (resultCount && currentActiveView === "tools") {
        resultCount.innerHTML = `<i class="fas fa-circle-check"></i> ${filtered.length} Tools Found`;
    }

    if(filtered.length === 0){
        toolsContainer.innerHTML = `<div class="no-results"><h3>No Tools Found</h3><p>Try another keyword.</p></div>`;
        if (loadMoreBtn) loadMoreBtn.style.display = "none";
        return;
    }

    let html = "";
    // Loop me index track karne ke liye slice wale array par loop chalaya hai
    filtered.slice(0, visibleTools).forEach((tool, index) => {
        let metaBadgesHtml = "";
        if (tool.isPopular && tool.isNew) {
            metaBadgesHtml = `<div class="card-tag-wrapper"><span class="tag-pop">Popular</span><span class="tag-new">New</span></div>`;
        } else if (tool.isPopular) {
            metaBadgesHtml = `<div class="card-tag-wrapper"><span class="tag-pop">Popular</span></div>`;
        } else if (tool.isNew) {
            metaBadgesHtml = `<div class="card-tag-wrapper"><span class="tag-new">New</span></div>`;
        }

        let tutorialBtnHtml = "";
        if(tool.tutorial && tool.tutorial.trim() !== "") {
            tutorialBtnHtml = `<button class="btn tutorial-btn" onclick="window.open('${tool.tutorial}','_blank')">Tutorial</button>`;
        }

        // 1. Tool card ka original code
        html += `
        <div class="tool-card">
            ${metaBadgesHtml}
            <img src="${tool.image}" alt="${tool.name}" loading="lazy">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="badges">
                ${tool.categories.map(category => `<span class="badge">${category}</span>`).join("")}
                <span class="badge">${tool.pricing}</span>
            </div>
            <div class="btn-group">
                <button class="btn open-btn" onclick="window.open('${tool.website}','_blank')">Open Tool</button>
                ${tutorialBtnHtml}
            </div>
        </div>
        `;

        // 2. AUTOMATIC AD INJECTION LOGIC: Har 4th card ke baad ad insert hoga
        // (index + 1) % 4 === 0 se har 4th element target hoga, aur check kiya hai ki ye bilkul aakhiri card na ho.
        if ((index + 1) % 4 === 0 && index !== filtered.slice(0, visibleTools).length - 1) {
            html += `
            <div class="smart-ad-placeholder ad-square-grid">
                <span class="ad-badge">Advertisement</span>
                <div class="ad-info-text">
                    <i class="fa-solid fa-square-rss"></i>
                    <span>Square Ad Slot<br><small style="color:#94a3b8;">300 x 250 px</small></span>
                </div>
            </div>
            `;
        }
    });

    toolsContainer.innerHTML = html;
    if (loadMoreBtn) loadMoreBtn.style.display = filtered.length <= visibleTools ? "none" : "block";
}

/* -------------------------
   4. PROMPTS RENDERING
------------------------- */
function renderPrompts() {
    if (!promptsContainer || typeof prompts === 'undefined') return;
    const search = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = prompts.filter(prompt => {
        const matchCategory = selectedPromptCategory === "All" || (prompt.categories && prompt.categories.includes(selectedPromptCategory));
        const matchSearch = search === "" || prompt.searchText.includes(search);
        return (matchCategory && matchSearch);
    });

    // Change 3 Condition Check
    if (resultCount && currentActiveView === "prompts") {
        resultCount.innerHTML = `<i class="fas fa-circle-check"></i> ${filtered.length} Prompts Found`;
    }

    if(filtered.length === 0){
        promptsContainer.innerHTML = `<div class="no-results" style="grid-column: 1/-1;"><h3>No Prompts Found</h3><p>Try another keyword.</p></div>`;
        if (loadMorePromptsBtn) loadMorePromptsBtn.style.display = "none";
        return;
    }

    let html = "";
    filtered.slice(0, visiblePrompts).forEach((prompt, index) => {
        const isLongText = prompt.text && prompt.text.length > 150;
        let shortText = isLongText ? prompt.text.substring(0, 150) + "..." : prompt.text;
        
        let reqHtml = "";
        if(prompt.requirements && prompt.requirements.trim() !== "") {
            reqHtml = `<div class="prompt-req-box"><strong>Requirements:</strong> <span class="prompt-req-badge">${prompt.requirements}</span></div>`;
        } else {
            reqHtml = `<div class="prompt-req-box"><strong>Requirements:</strong> <span class="prompt-req-badge" style="background:rgba(16,185,129,0.1); color:#34d399; border-color:rgba(16,185,129,0.2);">None</span></div>`;
        }

        let categoriesHtml = "";
        if(prompt.categories && prompt.categories.length > 0) {
            categoriesHtml = `<div class="badges" style="margin-bottom: 12px;">
                ${prompt.categories.map(cat => `<span class="badge" style="background: rgba(147, 51, 234, 0.1); color: #a855f7; border: 1px solid rgba(147, 51, 234, 0.2);">${cat}</span>`).join("")}
            </div>`;
        }

        // How to use button check: agar link maujood hai toh button dikhega
        let howToUseBtnHtml = "";
        if(prompt.howToUseLink && prompt.howToUseLink.trim() !== "") {
            howToUseBtnHtml = `<button class="how-to-use-btn" onclick="window.open('${prompt.howToUseLink}','_blank')" style="margin-top: 8px; width: 100%; padding: 10px; background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 6px; cursor: pointer; font-weight: 500; transition: background 0.2s;">How to Use</button>`;
        }

        html += `
        <div class="prompt-card" data-index="${index}">
            <img src="${prompt.image}" alt="${prompt.title}" loading="lazy">
            <h3>${prompt.title}</h3>
            ${categoriesHtml}
            ${reqHtml} 
            <div class="prompt-text-wrapper">
                <p class="prompt-text">${shortText}</p>
                ${isLongText ? `<span class="read-more-btn">Read More</span>` : ''}
            </div>
            <button class="copy-btn">Copy Prompt</button>
            ${howToUseBtnHtml}
        </div>
        `;
    });

    promptsContainer.innerHTML = html;
    attachPromptEvents(filtered);
    if (loadMorePromptsBtn) loadMorePromptsBtn.style.display = filtered.length <= visiblePrompts ? "none" : "block";
}

function attachPromptEvents(currentFilteredPrompts) {
    const cards = promptsContainer.querySelectorAll('.prompt-card');
    cards.forEach(card => {
        const index = card.dataset.index;
        if (!currentFilteredPrompts[index]) return;
        
        const fullText = currentFilteredPrompts[index].text;
        const shortText = fullText.substring(0, 150) + "...";

        const textElement = card.querySelector('.prompt-text');
        const readMoreBtn = card.querySelector('.read-more-btn');
        const copyBtn = card.querySelector('.copy-btn');

        if (readMoreBtn) {
            readMoreBtn.onclick = () => {
                if (readMoreBtn.innerText === "Read More") {
                    textElement.innerText = fullText;
                    readMoreBtn.innerText = "Read Less";
                } else {
                    textElement.innerText = shortText;
                    readMoreBtn.innerText = "Read More";
                }
            };
        }

        if (copyBtn) {
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(fullText);
                const oldText = copyBtn.innerText;
                copyBtn.innerText = "Copied!";
                setTimeout(() => { copyBtn.innerText = oldText; }, 2000);
            };
        }
    });
}

/* -------------------------
   5. EVENT LISTENERS ATTACHMENT
------------------------- */
function attachCategoryEventListeners() {
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedCategory = btn.dataset.category;
            visibleTools = 12;
            renderTools();
        });
    });

    document.querySelectorAll(".prompt-category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".prompt-category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedPromptCategory = btn.dataset.category;
            visiblePrompts = 4;
            renderPrompts();
        });
    });
}

// Single Main Search Trigger for both panels
if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            visibleTools = 12;   
            visiblePrompts = 4;  
            renderTools();       
            renderPrompts();     
        }, 250);
    });
}

document.querySelectorAll(".type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedType = btn.dataset.type;
        visibleTools = 12;
        renderTools();
    });
});

if (loadMoreBtn) loadMoreBtn.addEventListener("click", () => { visibleTools += toolsPerLoad; renderTools(); });
if (loadMorePromptsBtn) loadMorePromptsBtn.addEventListener("click", () => { visiblePrompts += itemsPerLoadShared; renderPrompts(); });
if (loadMoreCoursesBtn) loadMoreCoursesBtn.addEventListener("click", () => { visibleCourses += itemsPerLoadShared; renderCourses(); });
if (loadMoreArticlesBtn) loadMoreArticlesBtn.addEventListener("click", () => { visibleArticles += articlesPerLoad; renderArticles(); });

const categoryButtons = document.getElementById("categoryButtons");
if (categoryButtons) {
    if(document.getElementById("scrollLeft")) document.getElementById("scrollLeft").addEventListener("click", () => { categoryButtons.scrollBy({ left: -300, behavior: "smooth" }); });
    if(document.getElementById("scrollRight")) document.getElementById("scrollRight").addEventListener("click", () => { categoryButtons.scrollBy({ left: 300, behavior: "smooth" }); });
}

const promptCategoryButtons = document.getElementById("promptCategoryButtons");
if(promptCategoryButtons){
    if(document.getElementById("promptScrollLeft")) document.getElementById("promptScrollLeft").addEventListener("click", () => { promptCategoryButtons.scrollBy({ left: -300, behavior: "smooth" }); });
    if(document.getElementById("promptScrollRight")) document.getElementById("promptScrollRight").addEventListener("click", () => { promptCategoryButtons.scrollBy({ left: 300, behavior: "smooth" }); });
}

/* -------------------------
   6. MISC RENDERS (COURSES & ARTICLES)
------------------------- */
function renderCourses() {
    if (!coursesContainer || typeof courses === 'undefined') return;
    let html = "";
    courses.slice(0, visibleCourses).forEach(course => {
        html += `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}" loading="lazy">
            <h3>${course.title}</h3>
            <button class="open-course-btn" onclick="window.open('${course.link}','_blank')"><i class="fas fa-book-open"></i> Open Course</button>
        </div>`;
    });
    coursesContainer.innerHTML = html;
    if (loadMoreCoursesBtn) loadMoreCoursesBtn.style.display = courses.length <= visibleCourses ? "none" : "block";
}

function renderArticles() {
    if (!articlesContainer || typeof articles === 'undefined') return;
    let html = "";
    articles.slice(0, visibleArticles).forEach(article => {
        html += `
        <div class="article-row-pill" onclick="window.open('${article.page}','_blank')">
            <h3>${article.title}</h3>
            <button class="article-arrow-btn" aria-label="Read Article"><i class="fas fa-arrow-right"></i></button>
        </div>`;
    });
    articlesContainer.innerHTML = html;
    if (loadMoreArticlesBtn) loadMoreArticlesBtn.style.display = articles.length <= visibleArticles ? "none" : "block";
}

if(tickerAllBtn) {
    tickerAllBtn.addEventListener("click", () => {
        const targetSection = document.getElementById("articles-section");
        if(targetSection) targetSection.scrollIntoView({ behavior: "smooth" });
    });
}

/* -------------------------
   7. INITIALIZATION PIPELINE WITH DEFAULT STATE
------------------------- */
generateDynamicCategories();
updateCategoryCounts();
renderTools();
renderPrompts();
renderCourses();
renderArticles();

// Set Default State on Page Load
document.addEventListener("DOMContentLoaded", function() {
    switchView("tools"); // Default tools load hoga aur prompts automatically hide rahenge.
    
    // Mobile Menu Handler
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    if (menuBtn && navLinks) {
        menuBtn.onclick = function(e) { e.stopPropagation(); navLinks.classList.toggle("active"); };
        document.querySelectorAll(".navbar .nav-links a").forEach(link => {
            link.addEventListener("click", () => { navLinks.classList.remove("active"); });
        });
    }
});