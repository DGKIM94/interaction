// script.js

/* --- 1. 유틸리티: 오버레이 --- */
function openDetail(html) {
    const overlay = document.getElementById('detail-overlay');
    const body = document.getElementById('detail-body');
    if(overlay && body) {
        body.innerHTML = html;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeDetail() {
    const overlay = document.getElementById('detail-overlay');
    if(overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/* --- 2. 데이터 유틸리티 --- */
// 뉴스 날짜순 정렬 (최신순)
function getSortedNews() {
    if (typeof newsData === 'undefined') return [];
    return [...newsData].sort((a, b) => new Date(b.date) - new Date(a.date));
}

/* --- 3. Home Rendering --- */
function renderHome() {
    // Latest News (상위 3개)
    const newsContainer = document.getElementById('home-news');
    if (newsContainer) {
        const sorted = getSortedNews();
        newsContainer.innerHTML = '';

        sorted.slice(0, 3).forEach(item => {
            // 원본 배열에서의 정확한 인덱스를 찾음 (ID 기반)
            const originalIndex = newsData.findIndex(n => n.id === item.id);
            const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';

            // [수정] 객체 문자열 대신 'originalIndex' 숫자만 전달 -> 따옴표 오류 해결!
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

    // Research Highlights
    const resContainer = document.getElementById('home-research');
    if (resContainer && typeof researchData !== 'undefined') {
        resContainer.innerHTML = '';
        const highlights = researchData.filter(r => r.status === 'Ongoing').slice(0, 4);
        highlights.forEach(item => {
            resContainer.innerHTML += `
                <div class="member-card" onclick="location.href='research.html'">
                    <div style="background:var(--primary); height:4px; width:100%; position:absolute; top:0; left:0;"></div>
                    <div style="padding-top:10px;">
                        <h3 style="margin-bottom:10px;">${item.title}</h3>
                        <p style="font-size:0.9rem; color:#666;">${item.description.substring(0, 80)}...</p>
                        <div style="margin-top:15px; color:var(--primary); font-weight:bold; font-size:0.85rem;">View Research &rarr;</div>
                    </div>
                </div>`;
        });
    }

    // YouTube
    const ytContainer = document.getElementById('youtube-gallery');
    if (ytContainer && typeof youtubeVideos !== 'undefined') {
        ytContainer.innerHTML = '';
        youtubeVideos.forEach(v => {
            ytContainer.innerHTML += `
                <div class="video-wrapper" style="position:relative; padding-bottom:56.25%; height:0; border-radius:16px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
                    <iframe src="${v.embedUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                </div>`;
        });
    }
}

/* --- 4. News Rendering --- */
function renderNewsPage() {
    const container = document.getElementById('news-grid-full');
    if(!container) return;

    const sorted = getSortedNews();
    container.innerHTML = '';

    sorted.forEach(item => {
        const originalIndex = newsData.findIndex(n => n.id === item.id);
        const imgHtml = item.image ? `<img src="${item.image}" class="news-thumb" onerror="this.style.display='none'">` : '';

        // [수정] 여기도 index만 전달
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

// [수정] 인덱스를 받아서 데이터를 조회하는 방식 (따옴표 문제 완벽 해결)
function showNewsDetail(index) {
    const item = newsData[index];
    const imgHtml = item.image ? `<img src="${item.image}" class="detail-img-lg" style="width:100%; height:300px; border-radius:16px; border:none;" onerror="this.style.display='none'">` : '';

    const html = `
        ${imgHtml}
        <h1 style="font-size:2rem; margin:20px 0 10px; color:var(--dark);">${item.title}</h1>
        <p style="color:var(--primary); font-weight:700; margin-bottom:30px;">${item.date}</p>
        <div style="font-size:1.1rem; line-height:1.8; color:#333; background:#fff; padding:30px; border-radius:20px; box-shadow:0 4px 20px rgba(0,0,0,0.05);">
            ${item.detailContent || item.content}
        </div>
    `;
    openDetail(html);
}

/* --- 5. Members Rendering (Fix) --- */
function renderMembers() {
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if (!profList) return;

    if (typeof memberData === 'undefined') return;

    memberData.forEach((m, index) => {
        if (m.role === 'alumni') {
            if(alumniList) {
                alumniList.innerHTML += `
                    <div class="alumni-item" style="background:#fff; padding:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05); border-left:4px solid #ccc;">
                        <strong style="color:var(--dark);">${m.name}</strong>
                        <span style="font-size:0.85rem; color:#666; display:block; margin-top:4px;">${m.desc}</span>
                    </div>`;
            }
        } else {
            // 인덱스 전달 방식 사용
            const card = createMemberCard(m, index);
            if (m.role === 'prof') profList.innerHTML += card;
            else if (m.desc.includes('Ph.D') || m.desc.includes('Direct')) phdList.innerHTML += card;
            else if (m.desc.includes('Master') || m.desc.includes('M.S')) msList.innerHTML += card;
        }
    });
}

function createMemberCard(m, index) {
    // [수정] onclick에 index 전달 -> 렉 방지 및 안전한 실행
    return `
        <div class="member-card" onclick="showMemberDetail(${index})">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.png'" alt="${m.name}">
            <span class="role-text">${m.desc.split(',')[0]}</span>
            <h3>${m.name}</h3>
            <p style="font-size:0.85rem; color:#888;">${m.email || ''}</p>
        </div>`;
}

function showMemberDetail(index) {
    const m = memberData[index]; // 데이터 직접 조회
    let extraInfo = '';

    if (m.detail) {
        if(m.detail.education) extraInfo += `<div class="info-group"><h4>Education</h4><ul>${m.detail.education.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
        if(m.detail.position) extraInfo += `<div class="info-group"><h4>Positions</h4><ul>${m.detail.position.map(e=>`<li>${e}</li>`).join('')}</ul></div>`;
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

/* --- 6. Research & Awards (기존 유지, 안전장치 추가) --- */
function renderResearchPage() {
    const ongoingContainer = document.getElementById('ongoing-list');
    const completedContainer = document.getElementById('completed-list');
    const areaContainer = document.getElementById('research-areas');

    if (!ongoingContainer) return;

    // Areas
    if (areaContainer && typeof researchAreas !== 'undefined') {
        areaContainer.innerHTML = '';
        researchAreas.forEach((area, idx) => {
            // area dataDetail logic needed? passing idx
            // For brevity, simple display
             areaContainer.innerHTML += `
                <div class="member-card" style="text-align:left; cursor:default;">
                    <img src="${area.thumbnail}" style="width:100% !important; height:200px !important; border-radius:12px; margin-bottom:15px;" onerror="this.src='images/lab_intro1.jpg'">
                    <h3 style="margin-bottom:10px;">${area.title}</h3>
                    <p style="color:#666; font-size:0.95rem;">${area.desc}</p>
                </div>`;
        });
    }

    if (typeof researchData !== 'undefined') {
        ongoingContainer.innerHTML = '';
        completedContainer.innerHTML = '';
        researchData.forEach((r, idx) => {
            const html = `
                <div class="news-card" style="padding:20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;" onclick="showProjectDetail(${idx})">
                    <div>
                        <span style="background:${r.status==='Ongoing'?'#e0e7ff':'#f1f5f9'}; color:${r.status==='Ongoing'?'var(--primary)':'#64748b'}; padding:4px 10px; border-radius:20px; font-size:0.8rem; font-weight:700;">${r.status}</span>
                        <h4 style="margin:10px 0 5px; font-size:1.1rem;">${r.title}</h4>
                        <span style="font-size:0.9rem; color:#666;">${r.agency} | ${r.period}</span>
                    </div>
                    <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
                </div>`;

            if (r.status === 'Ongoing') ongoingContainer.innerHTML += html;
            else completedContainer.innerHTML += html;
        });
    }
}

function showProjectDetail(index) {
    const r = researchData[index];
    const html = `
        <span style="background:${r.status==='Ongoing'?'var(--primary)':'#64748b'}; color:white; padding:5px 15px; border-radius:20px; font-size:0.9rem;">${r.status}</span>
        <h1 class="detail-title" style="margin-top:15px;">${r.title}</h1>
        <p style="color:#666; margin-bottom:30px;"><strong>${r.agency}</strong> | ${r.period}</p>
        <div class="detail-body">
            <p>${r.description}</p>
        </div>
    `;
    openDetail(html);
}

function renderAwardsPage() {
    const list = document.getElementById('award-list');
    if(!list) return;

    // 날짜 내림차순 정렬
    const sorted = [...awardData].sort((a,b) => parseInt(b.date) - parseInt(a.date));
    list.innerHTML = '';
    sorted.forEach(a => {
        list.innerHTML += `
            <div class="news-card" style="padding:20px; display:flex; gap:20px; align-items:center; cursor:default; margin-bottom:15px;">
                <div style="font-size:1.5rem; font-weight:800; color:var(--primary); min-width:80px;">${a.date}</div>
                <div>
                    <h3 style="margin:0 0 5px; font-size:1.1rem;">${a.title}</h3>
                    <div style="color:#666;">${a.organization}</div>
                </div>
            </div>`;
    });
}

function renderPublications() {
    // 기존과 동일 (필요시 복구)
    if(typeof applyPubFilter === 'function') applyPubFilter();
}
