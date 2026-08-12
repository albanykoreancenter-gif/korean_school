// ══════════════════════════════════════════
//  사이트 설정 — 여기서만 수정하면 전체 반영
// ══════════════════════════════════════════
const SITE = {
  nameKr:    '올바니사랑한국학교',
  nameEn:    'Albany Sarang Korean School',
  address:   'Albany, New York',
  email:     'sarang.hangeul@email.com',
  instagram: 'https://instagram.com',
  facebook:  'https://facebook.com',
};

const PAGES = {
  'index.html':        { kr: 'Home',         en: 'Home' },
  'about.html':        { kr: '학교 소개',    en: 'About Us' },
  'programs.html':     { kr: '수업 프로그램', en: 'Programs' },
  'registration.html': { kr: '등록 안내',    en: 'Registration' },
  'calendar.html':     { kr: '학사 일정',    en: 'Academic Calendar' },
  'schedule.html':     { kr: '수업 시간표',  en: 'Class Schedule' },
};
// ══════════════════════════════════════════

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

const navLinks = [
  { href: 'index.html',        label: 'Home' },
  { href: 'about.html',        label: 'About' },
  { href: 'programs.html',     label: 'Programs' },
  { href: 'registration.html', label: 'Registration' },
  { href: 'calendar.html',     label: 'Calendar' },
  { href: 'schedule.html',     label: 'Schedule' },
];

function renderNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const desktopLinks = navLinks.map(({ href, label }) => {
    const isActive = currentPage === href || (currentPage === '' && href === 'index.html');
    return `<a href="${href}" class="${isActive ? 'active' : ''}">${label}</a>`;
  }).join('');

  const mobileLinks = navLinks.map(({ href, label }) => {
    const isActive = currentPage === href || (currentPage === '' && href === 'index.html');
    return `<a href="${href}" class="${isActive ? 'active' : ''}">${label}</a>`;
  }).join('');

  nav.innerHTML = `
    <a href="index.html" class="gs-nav-logo">
      <span class="kr">${SITE.nameKr}</span>
      <span class="en">${SITE.nameEn}</span>
    </a>
    <div class="gs-nav-links">${desktopLinks}</div>
    <div class="gs-nav-icons">
      <a href="${SITE.instagram}" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
      <a href="${SITE.facebook}" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
    </div>
    <button class="gs-nav-hamburger" onclick="toggleMobileMenu()" aria-label="메뉴 열기">
      <i class="ti ti-menu-2" id="hamburger-icon"></i>
    </button>
    <div class="gs-nav-mobile" id="mobile-menu">
      ${mobileLinks}
      <div class="mobile-social">
        <a href="${SITE.instagram}" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
        <a href="${SITE.facebook}" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
      </div>
    </div>
  `;

  // 브라우저 탭 제목도 자동 설정
  const pageInfo = PAGES[currentPage];
  if (pageInfo) {
    document.title = `${pageInfo.kr} — ${SITE.nameKr}`;
  }
}

function renderHero() {
  const hero = document.getElementById('page-hero');
  if (!hero) return;
  const pageInfo = PAGES[currentPage];
  if (!pageInfo) return;
  hero.innerHTML = `
    <h1>${pageInfo.kr}</h1>
    <p>${pageInfo.en}</p>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  const isOpen = menu.classList.toggle('open');
  icon.className = isOpen ? 'ti ti-x' : 'ti ti-menu-2';
}

document.addEventListener('click', (e) => {
  const nav = document.getElementById('main-nav');
  const menu = document.getElementById('mobile-menu');
  if (menu && nav && !nav.contains(e.target)) {
    menu.classList.remove('open');
    const icon = document.getElementById('hamburger-icon');
    if (icon) icon.className = 'ti ti-menu-2';
  }
});

function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="gs-footer-text">
      ${SITE.nameKr} · ${SITE.nameEn}<br>
      ${SITE.address} · ${SITE.email}
    </div>
    <div class="gs-footer-icons">
      <a href="${SITE.instagram}" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
      <a href="${SITE.facebook}" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderHero();
  renderFooter();
});
