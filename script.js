// script.js

// 1. Navigation Logic (SPA Routing)
function navigateTo(pageId) {
    // 1. Update Navbar Active State
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if(item.getAttribute('onclick').includes(pageId)) {
            item.classList.add('active');
        }
    });

    // 2. Hide All Views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active-view');
    });

    // 3. Show Target View
    const target = document.getElementById(pageId);
    if(target) {
        target.classList.add('active-view');
        window.scrollTo(0, 0); // Scroll to top
    }

    // Special Case: Reset Detail Views
    document.getElementById('prof-detail').classList.add('hidden');
}

// 2. Render Functions (Executed on Load)
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    renderNews();
    renderResearch();
    renderMembers();
    renderPublications();
    renderAwards();
});

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

function createResearchCard(item) {
    const div = document.createElement('div');
    div.className = 'research-card';
    div.onclick = () => showResearchDetail(item.id);
    div.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.title}">
        <div class="card-body">
            <h3>${item.title}</h3>
            <p>${item.description.substring(0, 80)}...</p>
        </div>
    `;
    return div;
}

/* --- Research Detail Logic --- */
function showResearchDetail(id) {
    const item = researchData.find(r => r.id == id);
    if(!item) return;

    // Switch to detail view
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById('research-detail').classList.add('active-view');

    const content = document.getElementById('research-detail-content');
    content.innerHTML = `
        <div class="detail-header">
            <h1>${item.title}</h1>
            <p class="highlight">${item.agency || 'Research Project'}</p>
        </div>
        <img src="${item.thumbnail}" alt="${item.title}" class="detail-img">
        <div class="detail-body">
            <p>${item.description}</p>
            <br>
            <h3>Project Details</h3>
            <ul>
                <li><strong>Period:</strong> ${item.period || 'Ongoing'}</li>
                <li><strong>Agency:</strong> ${item.agency || 'N/A'}</li>
            </ul>
        </div>
    `;
    window.scrollTo(0,0);
}

/* --- Member Logic --- */
function renderMembers() {
    const profContainer = document.getElementById('prof-container');
    const phdGrid = document.getElementById('phd-grid');
    const msGrid = document.getElementById('ms-grid');
    const alumniList = document.getElementById('alumni-list');

    memberData.forEach(member => {
        if (member.role === 'prof') {
            profContainer.innerHTML = createMemberCard(member, true);
        } else if (member.desc.includes('Ph.D. Student') || member.desc.includes('Direct')) {
            phdGrid.appendChild(createMemberCardHTML(member));
        } else if (member.desc.includes('Master') || member.desc.includes('M.S.')) {
            msGrid.appendChild(createMemberCardHTML(member));
        } else if (member.role === 'alumni') {
            const div = document.createElement('div');
            div.className = 'alumni-item';
            div.innerHTML = `<strong>${member.name}</strong> <span>${member.desc}</span>`;
            alumniList.appendChild(div);
        }
    });
}

function createMemberCardHTML(member) {
    const div = document.createElement('div');
    div.className = 'member-card';
    div.onclick = () => showStudentModal(member);
    div.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <div class="role-badge">${member.desc.split(',')[0]}</div>
        <h3>${member.name}</h3>
        <p>${member.email}</p>
    `;
    return div;
}

function createMemberCard(member, isProf) {
    return `
        <div class="member-card" style="max-width:300px; margin:0 auto;" onclick="toggleProfDetail()">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.desc}</p>
            <p style="color:var(--primary); margin-top:10px; font-weight:bold;">Click for Details <i class="fas fa-chevron-down"></i></p>
        </div>
    `;
}

function toggleProfDetail() {
    const detailPanel = document.getElementById('prof-detail');
    const member = memberData.find(m => m.role === 'prof');

    if (detailPanel.classList.contains('hidden')) {
        detailPanel.classList.remove('hidden');
        detailPanel.innerHTML = `
            <div class="prof-detail-view">
                <img src="${member.image}" class="prof-img-large">
                <div class="prof-info">
                    <h2>${member.name}</h2>
                    <p class="prof-meta">${member.desc}</p>
                    <div class="prof-section">
                        <h4>Contact</h4>
                        <p><i class="fas fa-envelope"></i> ${member.email}</p>
                        <p><i class="fas fa-globe"></i> <a href="http://www.postech.ac.kr/~choism" target="_blank">Personal Website</a></p>
                    </div>
                    <div class="prof-section">
                        <h4>Education</h4>
                        <ul>
                            <li><strong>Ph.D.</strong> Purdue University (2003)</li>
                            <li><strong>M.S.</strong> Seoul National University (1997)</li>
                            <li><strong>B.S.</strong> Seoul National University (1995)</li>
                        </ul>
                    </div>
                    <div class="prof-section">
                        <h4>Professional Positions</h4>
                        <ul>
                            <li>Head, Dept. of CSE, POSTECH</li>
                            <li>Professor, POSTECH</li>
                            <li>Outside Director, bHaptics</li>
                        </ul>
                    </div>
                     <div class="prof-section">
                        <h4>Memberships</h4>
                        <ul>
                            <li>IEEE Senior Member</li>
                            <li>ACM Member</li>
                            <li>Korea Robotics Society (Lifetime)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style="text-align:center;"><button class="filter-btn" onclick="document.getElementById('prof-detail').classList.add('hidden')">Close Details</button></div>
        `;
    } else {
        detailPanel.classList.add('hidden');
    }
}

function showStudentModal(member) {
    const modal = document.getElementById('student-modal');
    const content = document.getElementById('student-detail-content');
    content.innerHTML = `
        <div style="text-align:center;">
            <img src="${member.image}" style="width:150px; height:150px; border-radius:50%; object-fit:cover; border:3px solid var(--primary);">
            <h2 style="margin:15px 0;">${member.name}</h2>
            <p class="role-badge">${member.desc}</p>
            <p><i class="fas fa-envelope"></i> ${member.email}</p>
            <hr style="margin:20px 0; border:0; border-top:1px solid #eee;">
            <p>Research Interests: Haptics, VR, HCI</p>
        </div>
    `;
    modal.style.display = 'block';

    document.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }
}

/* --- Publications --- */
function renderPublications() {
    const container = document.getElementById('pub-list');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Populate Select
    // Logic to populate years omitted for brevity, hardcode in data.js or loop

    function filter(category) {
        container.innerHTML = '';
        publicationData.forEach(pub => {
            if(category === 'all' || pub.category === category) {
                const div = document.createElement('div');
                div.className = `pub-item ${pub.category}`;
                div.innerHTML = `
                    <div class="pub-year"><strong>${pub.year}</strong></div>
                    <div class="pub-content">
                        <h3>${pub.title}</h3>
                        <p class="pub-authors">${pub.authors}</p>
                        <p class="pub-venue">${pub.venue}</p
