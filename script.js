// script.js

/* --- 1. 유틸리티: 오버레이 제어 --- */
function openDetail(html) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');
    // 오버레이가 없는 페이지에서 호출 시 에러 방지
    if(overlay && body) {
        body.innerHTML = html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.warn("Detail overlay element not found on this page.");
    }
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if(overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 오버레이 외부 클릭 시 닫기
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('detail-overlay');
    if(overlay && e.target === overlay) {
        closeDetail();
    }
});

/* --- 2. Home Rendering --- */
function renderHome() {
    // 1) YouTube Videos
    const ytContainer = document.getElementById('youtube-gallery');
    if (ytContainer && typeof youtubeVideos !== 'undefined') {
        ytContainer.innerHTML = '';
        youtubeVideos.forEach(v => {
            ytContainer.innerHTML += `
                <div class="video-wrapper">
                    <iframe src="${v.embedUrl}" title="${v.title}" allowfullscreen></iframe>
                </div>`;
        });
    }

    // 2) Latest News (Home)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        newsContainer.innerHTML = '';
        newsData.slice(0, 3).forEach(item => {
            const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" alt="${item.title}" onerror="this.style.display='none'">` : '';
            const dataStr = encodeURIComponent(JSON.stringify(item));

            newsContainer.innerHTML += `
                <div class="news-card" onclick="showNewsDetail('${dataStr}')">
                    ${imgHtml}
                    <div class="news-body">
                        <span class="news-date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                        <div class="read-more">Read More <i class="fas fa-arrow-right"></i></div>
                    </div>
                </div>`;
        });
    }
}

/* --- 3. News Page Rendering --- */
function renderNewsPage() {
    const container = document.getElementById('news-grid-full');
    if(!container || typeof newsData === 'undefined') return;

    container.innerHTML = '';
    newsData.forEach(item => {
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';
        const dataStr = encodeURIComponent(JSON.stringify(item));

        container.innerHTML += `
            <div class="news-card" onclick="showNewsDetail('${dataStr}')">
                ${imgHtml}
                <div class="news-body">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <div class="read-more">Read More <i class="fas fa-arrow-right"></i></div>
                </div>
            </div>`;
    });
}

function showNewsDetail(dataStr) {
    const item = JSON.parse(decodeURIComponent(dataStr));
    const imgHtml = item.image ? `<img src="${item.image}" class="detail-hero-img" onerror="this.style.display='none'">` : '';

    const html = `
        ${imgHtml}
        <h1 class="detail-title">${item.title}</h1>
        <p style="color:var(--primary); font-weight:700; margin-bottom:30px;">${item.date}</p>
        <div style="font-size:1.1rem; line-height:1.8; color:#444;">
            ${item.detailContent || item.content}
        </div>
    `;
    openDetail(html);
}

/* --- 4. Research Rendering --- */
function renderResearchPage() {
    // 1) Research Areas
    const areaContainer = document.getElementById('research-areas');
    if (areaContainer && typeof researchAreas !== 'undefined') {
        areaContainer.innerHTML = '';
        researchAreas.forEach(area => {
            const dataStr = encodeURIComponent(JSON.stringify(area));
            areaContainer.innerHTML += `
                <div class="area-card" onclick="showAreaDetail('${dataStr}')">
                    <img src="${area.thumbnail}" class="area-img" alt="${area.title}" onerror="this.src='images/lab_intro1.jpg'">
                    <div class="area-content">
                        <h3>${area.title}</h3>
                        <p>${area.desc}</p>
                    </div>
                </div>`;
        });
    }

    // 2) Projects Lists
    const ongoingList = document.getElementById('ongoing-list');
    const completedList = document.getElementById('completed-list');

    if (ongoingList && completedList && typeof researchData !== 'undefined') {
        ongoingList.innerHTML = '';
        completedList.innerHTML = '';

        researchData.forEach(proj => {
            const dataStr = encodeURIComponent(JSON.stringify(proj));
            const statusClass = proj.status === 'Ongoing' ? 'ongoing' : 'completed';

            const html = `
                <div class="project-card ${statusClass}" onclick="showProjectDetail('${dataStr}')">
                    <div class="proj-info">
                        <h4>${proj.title}</h4>
                        <div class="proj-meta">
                            <span class="proj-status ${statusClass}">${proj.status}</span>
                            <span>${proj.agency} | ${proj.period}</span>
                        </div>
                    </div>
                    <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
                </div>`;

            if (proj.status === 'Ongoing') ongoingList.innerHTML += html;
            else completedList.innerHTML += html;
        });
    }
}

function showAreaDetail(dataStr) {
    const area = JSON.parse(decodeURIComponent(dataStr));
    const html = `
        <img src="${area.thumbnail}" class="detail-hero-img" onerror="this.src='images/lab_intro1.jpg'">
        <h1 class="detail-title">${area.title}</h1>
        <div style="font-size:1.1rem; line-height:1.8;">${area.detail}</div>
    `;
    openDetail(html);
}

function showProjectDetail(dataStr) {
    const proj = JSON.parse(decodeURIComponent(dataStr));
    const html = `
        <span class="proj-status ${proj.status==='Ongoing'?'ongoing':'completed'}" style="font-size:1rem; padding:6px 15px;">${proj.status}</span>
        <h1 class="detail-title" style="margin-top:15px;">${proj.title}</h1>
        <p style="color:#666; margin-bottom:30px;"><strong>${proj.agency}</strong> | ${proj.period}</p>
        <div class="detail-body">
            ${proj.description}
        </div>
    `;
    openDetail(html);
}

/* --- 5. Publications Rendering --- */
function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    applyPubFilter();

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPubFilter();
        });
    });
}

function applyPubFilter() {
    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.cat : 'all';

    // input 요소가 없을 경우 기본값 처리
    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');
    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0;
    const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999;

    const container = document.getElementById('pub-list');
    container.innerHTML = '';

    const filtered = publicationData.filter(pub => {
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        return catMatch && yearMatch;
    });

    if(filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#999; margin-top:30px;">No publications found.</p>';
        return;
    }

    filtered.forEach(pub => {
        const linkHtml = pub.link ? `<a href="${pub.link}" class="pub-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>` : '';
        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year">${pub.year}</div>
                <div class="pub-content">
                    <h3>${pub.title}</h3>
                    <div class="pub-authors">${pub.authors}</div>
                    <div class="pub-venue">${pub.venue}</div>
                </div>
                ${linkHtml}
            </div>`;
    });
}

/* --- 6. Members Rendering --- */
function renderMembers() {
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if(!profList) return;

    memberData.forEach(m => {
        if (m.role === 'alumni') {
            alumniList.innerHTML += `
                <div class="alumni-item">
                    <strong>${m.name}</strong>
                    <span>${m.desc}</span>
                </div>`;
        } else {
            const card = createMemberCard(m);
            if (m.role === 'prof') profList.innerHTML += card;
            else if (m.desc.includes('Ph.D') || m.desc.includes('Direct') || m.desc.includes('Post')) phdList.innerHTML += card;
            else if (m.desc.includes('Master') || m.desc.includes('M.S')) msList.innerHTML += card;
        }
    });
}

function createMemberCard(m) {
    const dataStr = encodeURIComponent(JSON.stringify(m));
    return `
        <div class="member-card" onclick="showMemberDetail('${dataStr}')">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.png'">
            <span class="role-text">${m.desc.split(',')[0]}</span>
            <h3>${m.name}</h3>
        </div>`;
}

function showMemberDetail(dataStr) {
    const m = JSON.parse(decodeURIComponent(dataStr));
    let extraInfo = '';

    if (m.detail) {
        if(m.detail.education) extraInfo += `<div class="info-group"><h4>Education</h4><ul>${m.detail.education.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.position) extraInfo += `<div class="info-group"><h4>Positions</h4><ul>${m.detail.position.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.membership) extraInfo += `<div class="info-group"><h4>Memberships</h4><ul>${m.detail.membership.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p><p>${m.email || ''}</p></div>`;
    }

    const html = `
        <div class="detail-header-center">
            <img src="${m.image}" class="detail-img-lg" onerror="this.src='images/member_placeholder.png'">
            <h1 class="detail-title">${m.name}</h1>
            <p class="detail-email">${m.email || ''}</p>
        </div>
        <div class="detail-body">${extraInfo}</div>
    `;
    openDetail(html);
}

/* --- 7. Awards Rendering --- */
function renderAwardsPage() {
    const container = document.getElementById('award-list'); // HTML ID 확인 필수
    if(!container || typeof awardData === 'undefined') return;

    container.innerHTML = '';
    awardData.forEach(item => {
        container.innerHTML += `
            <div class="pub-item award-item-style">
                <div class="pub-year">${item.date}</div>
                <div class="pub-content">
                    <h3>${item.title}</h3>
                    <div class="pub-venue">${item.organization}</div>
                </div>
            </div>`;
    });
}
