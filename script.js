// script.js

// 1. Members Rendering Logic
function renderMembers() {
    const profList = document.getElementById('prof-list');
    const phdList = document.getElementById('phd-list');
    const msList = document.getElementById('ms-list');
    const alumniList = document.getElementById('alumni-list');

    if (!profList) return; // members.html이 아닐 경우 중단

    memberData.forEach((m, index) => {
        // [수정된 로직] Alumni는 무조건 Alumni 섹션으로 보냄 (학위와 무관)
        if (m.role === 'alumni') {
            alumniList.innerHTML += `
                <div class="alumni-item">
                    <strong>${m.name}</strong>
                    <span>${m.desc}</span>
                </div>`;
        }
        // 교수님
        else if (m.role === 'prof') {
            profList.innerHTML += createMemberCard(m, index);
        }
        // 학생 분류 (Alumni가 아닌 경우에만 체크)
        else {
            if (m.desc.includes('Ph.D') || m.desc.includes('Direct') || m.desc.includes('Post-Doc')) {
                phdList.innerHTML += createMemberCard(m, index);
            } else if (m.desc.includes('Master') || m.desc.includes('M.S')) {
                msList.innerHTML += createMemberCard(m, index);
            }
        }
    });
}

// 멤버 카드 생성 함수 (클릭 이벤트 추가)
function createMemberCard(member, index) {
    return `
        <div class="member-card" onclick="openMemberModal(${index})">
            <img src="${member.image}" onerror="this.src='images/member_placeholder.jpg'" alt="${member.name}">
            <span class="role-badge">${member.desc.split(',')[0]}</span>
            <h3>${member.name}</h3>
            <p>${member.email || 'Contact Info'}</p>
        </div>
    `;
}

// 2. Modal Logic (Detail View)
function openMemberModal(index) {
    const member = memberData[index];
    const modal = document.getElementById('member-modal');
    const body = document.getElementById('modal-body');

    // 교수님일 경우 상세 정보 표시 (CV 데이터 활용)
    let detailsHtml = '';
    if (member.role === 'prof' && member.detail) {
        detailsHtml = `
            <div class="modal-info">
                <h4><i class="fas fa-university"></i> Education</h4>
                <ul>${member.detail.education.map(e => `<li>${e}</li>`).join('')}</ul>
                <br>
                <h4><i class="fas fa-briefcase"></i> Positions</h4>
                <ul>${member.detail.position.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>`;
    } else {
        // 학생일 경우 기본 정보
        detailsHtml = `
            <div class="modal-info">
                <p><i class="fas fa-envelope"></i> ${member.email || 'N/A'}</p>
                <p><i class="fas fa-graduation-cap"></i> ${member.desc}</p>
                <p><i class="fas fa-flask"></i> Research Interest: Haptics, VR, HCI</p>
            </div>`;
    }

    body.innerHTML = `
        <img src="${member.image}" class="modal-img" onerror="this.src='images/member_placeholder.jpg'">
        <h2 class="modal-name">${member.name}</h2>
        <span class="modal-role">${member.role === 'prof' ? 'Professor' : 'Researcher'}</span>
        ${detailsHtml}
    `;

    modal.style.display = 'flex'; // flex로 설정해야 중앙 정렬됨
}

function closeModal() {
    document.getElementById('member-modal').style.display = 'none';
}

// 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    const modal = document.getElementById('member-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// 3. Publications Rendering (기존 유지)
function renderPublications() {
    const list = document.getElementById('pub-list');
    if(!list) return;

    // ... (기존 필터 로직 유지, 필요 시 추가) ...
    // 초기 렌더링
    filterPubs('all', document.querySelector('.filter-btn'));
}

function filterPubs(category, btn) {
    if(btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const container = document.getElementById('pub-list');
    container.innerHTML = '';

    publicationData.forEach(pub => {
        if(category === 'all' || pub.category === category) {
            const linkHtml = pub.link ? `<a href="${pub.link}" target="_blank" class="pub-link"><i class="fas fa-external-link-alt"></i></a>` : '';
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
        }
    });
}

// 4. Other Page Renderers (Placeholder)
function renderHome() { /* ... data.js 참조 ... */ }
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
