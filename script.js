// script.js

/* =========================================
   1. 유틸리티: 상세 오버레이 (Overlay Control)
   ========================================= */
function openDetail(html) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');
    if (overlay && body) {
        body.innerHTML = html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
}

function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // 스크롤 복구
    }
}

// 오버레이 외부 클릭 시 닫기
document.addEventListener('click', function (e) {
    const overlay = document.getElementById('detail-overlay');
    if (overlay && e.target === overlay) {
        closeDetail();
    }
});


/* =========================================
   2. 데이터 헬퍼 (Data Helper)
   ========================================= */
// 뉴스 날짜순 정렬 (최신순)
function getSortedNews() {
    if (typeof newsData === 'undefined') return [];
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// script.js

// ... [이전 코드는 그대로 유지] ...

/* =========================================
   0. 모바일 메뉴 토글 (추가됨)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // 메뉴 보이기/숨기기 토글
        });
    }
});

/* =========================================
   1. 유틸리티: 상세 오버레이 ... (이하 기존 코드)
   ========================================= */
/* =========================================
   3. 메인 페이지 (Home Rendering)
   ========================================= */
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

    // 2) Latest News (날짜순 정렬 + 상위 3개)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer && typeof newsData !== 'undefined') {
        const sorted = getSortedNews();
        newsContainer.innerHTML = '';

        sorted.slice(0, 3).forEach(item => {
            const originalIndex = newsData.findIndex(n => n.id === item.id);
            const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" alt="${item.title}" onerror="this.style.display='none'">` : '';

            newsContainer.innerHTML += `
                <div class="news-card" onclick="showNewsDetail(${originalIndex})">
                    ${imgHtml}
                    <div class="news-body">
                        <span class="news-date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <p style="color:#666; font-size:0.9rem; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical;">${item.content}</p>
                        <div class="read-more">Read More &rarr;</div>
                    </div>
                </div>`;
        });
    }

    // 3) Research Highlights (Ongoing 상위 4개)
    const resContainer = document.getElementById('home-research');
    if (resContainer && typeof researchData !== 'undefined') {
        resContainer.innerHTML = '';
        const highlights = researchData.filter(r => r.status === 'Ongoing').slice(0, 4);

        highlights.forEach(item => {
            resContainer.innerHTML += `
                <div class="member-card" onclick="location.href='research.html'">
                    <div style="background:var(--primary); height:4px; width:100%; position:absolute; top:0; left:0;"></div>
                    <div style="padding-top:15px;">
                        <h3 style="margin-bottom:10px;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#666;">${item.description.substring(0, 80)}...</p>
                        <div style="margin-top:15px; color:var(--primary); font-size:0.85rem; font-weight:bold;">View Research &rarr;</div>
                    </div>
                </div>`;
        });
    }
}


/* =========================================
   4. 뉴스 페이지 (News Page)
   ========================================= */
function renderNewsPage() {
    const container = document.getElementById('news-grid-full');
    if (!container || typeof newsData === 'undefined') return;

    const sorted = getSortedNews();
    container.innerHTML = '';

    sorted.forEach(item => {
        const originalIndex = newsData.findIndex(n => n.id === item.id);
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';

        container.innerHTML += `
            <div class="news-card" onclick="showNewsDetail(${originalIndex})">
                ${imgHtml}
                <div class="news-body">
                    <span class="news-date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <p style="color:#666; font-size:0.95rem;">${item.content}</p>
                    <div class="read-more">Read More &rarr;</div>
                </div>
            </div>`;
    });
}

function showNewsDetail(index) {
    const item = newsData[index];
    const imgHtml = item.image ? `<img src="${item.image}" class="detail-img-lg" style="width:100%; height:300px; border-radius:16px; border:none; object-fit:cover;" onerror="this.style.display='none'">` : '';

    const html = `
        ${imgHtml}
        <h1 class="detail-title" style="margin-top:20px;">${item.title}</h1>
        <p style="color:var(--primary); font-weight:700; margin-bottom:30px;">${item.date}</p>
        <div class="detail-body">
            <div style="font-size:1.1rem; line-height:1.8; color:#333;">
                ${item.detailContent || item.content}
            </div>
        </div>
    `;
    openDetail(html);
}


/* =========================================
   5. 멤버 페이지 (Members Page)
   ========================================= */
function renderMembers() {
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if (!profList || typeof memberData === 'undefined') return;

    memberData.forEach((m, index) => {
        if (m.role === 'alumni') {
            if (alumniList) {
                alumniList.innerHTML += `
                    <div class="alumni-item">
                        <strong style="color:var(--dark); font-size:1.1rem;">${m.name}</strong>
                        <span style="font-size:0.85rem; color:#666; display:block; margin-top:4px;">${m.desc}</span>
                    </div>`;
            }
        } else {
            const card = createMemberCard(m, index);
            if (m.role === 'prof') profList.innerHTML += card;
            else if (m.desc.includes('Ph.D') || m.desc.includes('Direct') || m.desc.includes('Post')) phdList.innerHTML += card;
            else if (m.desc.includes('Master') || m.desc.includes('M.S')) msList.innerHTML += card;
        }
    });
}

function createMemberCard(m, index) {
    return `
        <div class="member-card" onclick="showMemberDetail(${index})">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">
            <span class="role-text">${m.desc.split(',')[0]}</span>
            <h3>${m.name}</h3>
            <p style="font-size:0.85rem; color:#888;">${m.email || ''}</p>
        </div>`;
}

function showMemberDetail(index) {
    const m = memberData[index];
    let extraInfo = '';

    if (m.detail) {
        if (m.detail.education) extraInfo += `<div class="info-group"><h4>Education</h4><ul>${m.detail.education.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.position) extraInfo += `<div class="info-group"><h4>Positions</h4><ul>${m.detail.position.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
        if (m.detail.membership) extraInfo += `<div class="info-group"><h4>Memberships</h4><ul>${m.detail.membership.map(e => `<li>${e}</li>`).join('')}</ul></div>`;
    } else {
        extraInfo = `<div class="info-group"><h4>Info</h4><p>${m.desc}</p></div>`;
    }

    const html = `
        <div class="detail-header-center">
            <img src="${m.image}" class="detail-img-lg" onerror="this.src='images/member_placeholder.png'">
            <h1 class="detail-title" style="margin-bottom:5px;">${m.name}</h1>
            <p style="color:#666; margin-bottom:30px;">${m.email || ''}</p>
        </div>
        <div class="detail-body">${extraInfo}</div>
    `;
    openDetail(html);
}


/* =========================================
   6. 연구 페이지 (Research Page)
   ========================================= */
function renderResearchPage() {
    const ongoingContainer = document.getElementById('ongoing-list');
    const completedContainer = document.getElementById('completed-list');
    const areaContainer = document.getElementById('research-areas');

    if (!ongoingContainer || typeof researchData === 'undefined') return;

    // 1) Research Areas
    if (areaContainer && typeof researchAreas !== 'undefined') {
        areaContainer.innerHTML = '';
        researchAreas.forEach((area, idx) => {
            areaContainer.innerHTML += `
                <div class="area-card" style="cursor:default;">
                    <img src="${area.thumbnail}" class="area-img" onerror="this.src='images/lab_intro1.jpg'">
                    <div class="area-content">
                        <h3>${area.title}</h3>
                        <p>${area.desc}</p>
                    </div>
                </div>`;
        });
    }

    // 2) Projects List
    ongoingContainer.innerHTML = '';
    completedContainer.innerHTML = '';

    researchData.forEach((r, idx) => {
        const statusClass = r.status === 'Ongoing' ? 'ongoing' : 'completed';
        const html = `
            <div class="project-card ${statusClass}" onclick="showProjectDetail(${idx})">
                <div class="proj-info">
                    <h4>${r.title}</h4>
                    <div class="proj-meta">
                        <span class="proj-status ${statusClass}">${r.status}</span>
                        <span>${r.agency} | ${r.period}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
            </div>`;

        if (r.status === 'Ongoing') ongoingContainer.innerHTML += html;
        else completedContainer.innerHTML += html;
    });
}

function showProjectDetail(index) {
    const r = researchData[index];
    const statusColor = r.status === 'Ongoing' ? 'var(--primary)' : '#64748b';

    const html = `
        <span style="background:${statusColor}; color:white; padding:5px 15px; border-radius:20px; font-size:0.9rem; font-weight:bold;">${r.status}</span>
        <h1 class="detail-title" style="margin-top:15px; font-size:2rem;">${r.title}</h1>
        <p style="color:#666; margin-bottom:30px; font-size:1.1rem;"><strong>${r.agency}</strong> | ${r.period}</p>
        <div class="detail-body">
            <p style="font-size:1.1rem; line-height:1.8;">${r.description}</p>
        </div>
    `;
    openDetail(html);
}


/* =========================================
   7. 논문 페이지 (Publications Page) - 자동 정렬 적용
   ========================================= */
function renderPublications() {
    const container = document.getElementById('pub-list');
    if (!container || typeof publicationData === 'undefined') return;

    // 초기 렌더링
    applyPubFilter();

    // 탭 클릭 이벤트 설정
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyPubFilter();
        });
    });
}

function applyPubFilter() {
    const container = document.getElementById('pub-list');
    if (!container) return;

    const activeTab = document.querySelector('.tab-btn.active');
    const category = activeTab ? activeTab.dataset.cat : 'all';

    const startInput = document.getElementById('year-start');
    const endInput = document.getElementById('year-end');
    const startYear = startInput ? (parseInt(startInput.value) || 0) : 0;
    const endYear = endInput ? (parseInt(endInput.value) || 9999) : 9999;

    // 1. 필터링 (카테고리 & 연도)
    let filtered = publicationData.filter(pub => {
        const catMatch = category === 'all' || pub.category === category;
        const yearMatch = pub.year >= startYear && pub.year <= endYear;
        return catMatch && yearMatch;
    });

    // 2. [수정] 연도 내림차순 (최신순) 자동 정렬
    filtered.sort((a, b) => b.year - a.year);

    // 3. 렌더링
    container.innerHTML = '';

    if (filtered.length === 0) {
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


/* =========================================
   8. 수상 페이지 (Awards Page)
   ========================================= */
function renderAwardsPage() {
    const container = document.getElementById('award-list-container');
    if (!container || typeof awardData === 'undefined') return;

    container.innerHTML = '';

    // 날짜(연도) 내림차순 정렬
    const sorted = [...awardData].sort((a, b) => parseInt(b.date) - parseInt(a.date));

    sorted.forEach(item => {
        container.innerHTML += `
            <div class="pub-item award-item-style">
                <div class="pub-year" style="min-width:80px;">${item.date}</div>
                <div class="pub-content">
                    <h3>${item.title}</h3>
                    <div class="pub-venue" style="color:#666; font-style:normal;">${item.organization}</div>
                </div>
            </div>`;
    });
}
