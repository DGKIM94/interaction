// script.js

// 1. Home Rendering
function renderHome() {
    const newsContainer = document.getElementById('home-news');
    newsData.slice(0, 3).forEach(item => {
        newsContainer.innerHTML += `
            <div class="member-card" style="text-align:left; padding:20px;">
                <small style="color:var(--secondary)">${item.date}</small>
                <h3 style="margin:10px 0; font-size:1.1rem;">${item.title}</h3>
                <p style="font-size:0.9rem; color:#666;">${item.content}</p>
            </div>`;
    });

    const resContainer = document.getElementById('home-research');
    researchData.slice(0, 4).forEach(item => {
        resContainer.innerHTML += `
            <div class="research-card">
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>`;
    });
}

// 2. Publication Rendering (With Links)
function renderPublications() {
    filterPubs('all', document.querySelector('.filter-btn'));
}

function filterPubs(category, btn) {
    // Button active state
    if(btn) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }

    const container = document.getElementById('pub-list');
    container.innerHTML = '';

    publicationData.forEach(pub => {
        if(category === 'all' || pub.category === category) {
            // Link icon if link exists
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

// 3. Members Rendering
function renderMembers() {
    const container = document.querySelector('.container');
    container.innerHTML += `
        <h2>Professor</h2>
        <div id="prof-list" class="member-grid"></div>
        <br><h2>Ph.D. Students</h2>
        <div id="phd-list" class="member-grid"></div>
        <br><h2>Master Students</h2>
        <div id="ms-list" class="member-grid"></div>
        <br><h2>Alumni</h2>
        <div id="alumni-list" class="alumni-list"></div>
    `;

    memberData.forEach(m => {
        if(m.role === 'prof') {
            document.getElementById('prof-list').innerHTML += createMemberCard(m);
        } else if(m.desc.includes('Ph.D. Student') || m.desc.includes('Direct')) {
            document.getElementById('phd-list').innerHTML += createMemberCard(m);
        } else if(m.desc.includes('M.S.') || m.desc.includes('Master')) {
            document.getElementById('ms-list').innerHTML += createMemberCard(m);
        } else if(m.role === 'alumni') {
            document.getElementById('alumni-list').innerHTML += `
                <div class="alumni-item">
                    <strong>${m.name}</strong><br>
                    <small>${m.desc}</small>
                </div>`;
        }
    });
}

function createMemberCard(m) {
    return `
        <div class="member-card">
            <img src="${m.image}" onerror="this.src='images/member_placeholder.jpg'">
            <h3>${m.name}</h3>
            <p class="role-badge">${m.desc}</p>
            <p style="font-size:0.9rem">${m.email}</p>
        </div>`;
}

// 4. Research Page
function renderResearchPage() {
    const container = document.getElementById('research-list'); // HTML에 이 ID div 필요
    researchData.forEach(r => {
        container.innerHTML += `
            <div class="pub-item" style="display:block;">
                <h3 style="color:var(--primary); margin-bottom:10px;">${r.title}</h3>
                <p><strong>Agency:</strong> ${r.agency} | <strong>Period:</strong> ${r.period}</p>
                <p style="margin-top:10px;">${r.description}</p>
            </div>`;
    });
}

// 5. Awards Page
function renderAwardsPage() {
    const container = document.getElementById('award-list'); // HTML에 이 ID div 필요
    awardData.forEach(a => {
        container.innerHTML += `
            <div class="pub-item">
                <div class="pub-year">${a.date}</div>
                <div class="pub-content">
                    <h3>${a.title}</h3>
                    <div class="pub-venue">${a.organization}</div>
                </div>
            </div>`;
    });
}
