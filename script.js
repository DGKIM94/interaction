// script.js

/* --- 1. Common Utility: Detail Overlay Control --- */
function openDetail(htmlContent) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');
    body.innerHTML = htmlContent;
    overlay.classList.add('active'); // CSS slide-up animation
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* --- 2. Home Rendering --- */
function renderHome() {
    // News
    const newsContainer = document.getElementById('home-news');
    if (newsContainer) {
        newsData.slice(0, 3).forEach(item => {
            newsContainer.innerHTML += `
                <div class="news-card">
                    <span class="news-date">${item.date}</span>
                    <h3 style="font-size:1.1rem; margin:5px 0;">${item.title}</h3>
                    <p style="color:#666; font-size:0.9rem;">${item.content}</p>
                </div>`;
        });
    }

    // Research Highlights (Ongoing first)
    const resContainer = document.getElementById('home-research');
    if (resContainer) {
        const highlights = researchData.filter(r => r.status === 'Ongoing').slice(0, 4);
        highlights.forEach(item => {
            resContainer.innerHTML += `
                <div class="member-card">
                    <div style="background:${item.status==='Ongoing'?'var(--primary)':'#ccc'}; height:5px; width:100%; position:absolute; top:0; left:0;"></div>
                    <h3 style="margin-top:15px;">${item.title}</h3>
                    <p style="font-size:0.9rem; color:#666;">${item.description.substring(0, 60)}...</p>
                </div>`;
        });
    }
}

/* --- 3. Members Rendering --- */
function renderMembers() {
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if (!profList) return;

    memberData.forEach(m => {
        if (m.role === 'alumni') {
            alumniList.innerHTML += `
                <div class="research-item completed" style="padding:15px; min-height:auto;">
                    <div>
                        <strong style="color:var(--dark); font-size:1.1rem;">${m.name}</strong><br>
                        <span style="color:#777; font-size:0.9rem;">${m.desc}</span>
                    </div>
                </div>`;
        } else if (m.role === 'prof') {
            profList.innerHTML += createMemberCard(m);
        } else if (m.desc.includes('Ph.D') || m.desc.includes('Direct') || m.desc.includes('Post')) {
            phdList.innerHTML += createMemberCard(m);
        } else if (m.desc.includes('Master') || m.desc.includes('M.S')) {
            msList.innerHTML += createMemberCard(m);
        }
    });
}

function createMemberCard(m) {
    // Data passed via onclick using encoded JSON to avoid quote issues
    const dataStr = encodeURIComponent(JSON.stringify(m));
    return `
        <div class="member-card" onclick="showMemberDetail('${dataStr}')">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.jpg'">
            <span class="role-text">${m.desc.split(',')[0]}</span>
            <h3>${m.name}</h3>
            <p style="font-size:0.85rem; color:#888;">${m.email || ''}</p>
        </div>`;
}

function showMemberDetail(dataStr) {
    const m = JSON.parse(decodeURIComponent(dataStr));

    // Construct Detail HTML
    let extraInfo = '';
    if (m.detail) {
        if(m.detail.education) extraInfo += `<div class="info-row"><div class="info-label">Education</div><ul class="info-list">${m.detail.education.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.position) extraInfo += `<div class="info-row"><div class="info-label">Positions</div><ul class="info-list">${m.detail.position.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.membership) extraInfo += `<div class="info-row"><div class="info-label">Memberships</div><ul class="info-list">${m.detail.membership.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-row"><div class="info-label">Interest</div><div>Haptics, Virtual Reality, HCI</div></div>`;
    }

    const html = `
        <div class="detail-header-group">
            <img src="${m.image}" class="detail-img-lg" onerror="this.src='images/member_placeholder.jpg'">
            <h1 class="detail-title">${m.name}</h1>
            <span class="detail-subtitle">${m.desc}</span>
            <p style="margin-top:10px; color:#666;">${m.email}</p>
        </div>
        <div class="detail-body">
            ${extraInfo}
        </div>
    `;
    openDetail(html);
}

/* --- 4. Research Rendering --- */
function renderResearchPage() {
    const ongoingContainer = document.getElementById('ongoing-research');
    const completedContainer = document.getElementById('completed-research');

    if(!ongoingContainer) return;

    researchData.forEach(r => {
        const cardHTML = createResearchItem(r);
        if (r.status === 'Ongoing') {
            ongoingContainer.innerHTML += cardHTML;
        } else {
            completedContainer.innerHTML += cardHTML;
        }
    });
}

function createResearchItem(r) {
    const dataStr = encodeURIComponent(JSON.stringify(r));
    return `
        <div class="research-item ${r.status.toLowerCase()}" onclick="showResearchDetail('${dataStr}')">
            <div class="res-info">
                <h3>${r.title}</h3>
                <div class="res-meta">
                    <strong>${r.agency}</strong> | ${r.period}
                </div>
            </div>
            <i class="fas fa-chevron-right arrow-icon"></i>
        </div>`;
}

function showResearchDetail(dataStr) {
    const r = JSON.parse(decodeURIComponent(dataStr));
    const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#888';

    const html = `
        <div class="detail-header-group" style="text-align:left;">
            <span style="background:${statusColor}; color:white; padding:5px 15px; border-radius:15px; font-size:0.9rem;">${r.status}</span>
            <h1 class="detail-title" style="margin-top:15px; font-size:2rem;">${r.title}</h1>
        </div>
        <div class="detail-body">
            <div class="info-row">
                <div class="info-label">Agency</div>
                <div>${r.agency}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Period</div>
                <div>${r.period}</div>
            </div>
            <hr style="margin:30px 0; border:0; border-top:1px solid #eee;">
            <div class="info-row">
                <div class="info-label">Description</div>
                <div style="line-height:1.8;">${r.description}</div>
            </div>
        </div>
    `;
    openDetail(html);
}

/* --- 5. Others (News, Publications, Awards) --- */
// (기존 renderPublications, renderAwardsPage 유지하되 DOM 체크 추가)
function renderNewsPage() {
    const container = document.getElementById('news-list');
    if(!container) return;
    newsData.forEach(n => {
        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year" style="font-size:1rem; color:#666; min-width:100px;">${n.date}</div>
                <div class="pub-content">
                    <h3>${n.title}</h3>
                    <p>${n.content}</p>
                </div>
            </div>`;
    });
}

// 4. Other Page Renderers (Placeholder)
/* --- Home Rendering --- */
function renderHome() {
    // News (Top 3)
    const newsContainer = document.getElementById('home-news-container');
    const recentNews = newsData.slice(0, 3);

    recentNews.forEach(item => {
        const div = document.createElement('div');
        div.className = 'research-card'; // Reuse styling
        div.innerHTML = `
            <div class="card-body">
                <small style="color:var(--primary)">${item.date}</small>
                <h3>${item.title}</h3>
                <p>${item.content.substring(0, 60)}...</p>
            </div>
        `;
        newsContainer.appendChild(div);
    });

    // Research Highlights (Top 4)
    const researchContainer = document.getElementById('home-research-container');
    const highlights = researchData.slice(0, 4);

    highlights.forEach(item => {
        const card = createResearchCard(item);
        researchContainer.appendChild(card);
    });
}
function renderResearchPage() {
    const container = document.getElementById('research-list');
    if(!container) return;
    researchData.forEach(r => {
        container.innerHTML += `
            <div class="pub-item" style="display:block;">
                <h3 style="color:var(--primary); margin-bottom:10px;">${r.title}</h3>
                <p><strong>Agency:</strong> ${r.agency} | <strong>Period:</strong> ${r.period}</p>
                <p style="margin-top:10px; color:#555;">${r.description}</p>
            </div>`;
    });
}
function renderAwardsPage() {
    const container = document.getElementById('award-list');
    if(!container) return;
    awardData.forEach(a => {
        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year" style="font-size:1.2rem; min-width:80px;">${a.date}</div>
                <div class="pub-content">
                    <h3>${a.title}</h3>
                    <div class="pub-venue">${a.organization}</div>
                </div>
            </div>`;
    });
}
function renderNewsPage() {
    const container = document.getElementById('news-list');
    if(!container) return;
    newsData.forEach(n => {
        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year" style="font-size:1rem; color:#666; min-width:100px;">${n.date}</div>
                <div class="pub-content">
                    <h3>${n.title}</h3>
                    <p>${n.content}</p>
                </div>
            </div>`;
    });
}
