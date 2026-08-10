// 현재 페이지 파일명 기반으로 active 네비 설정
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
      <span class="kr">올바니 사랑의 교회 한글학교</span>
      <span class="en">Albany Korean Language School</span>
    </a>
    <div class="gs-nav-links">${desktopLinks}</div>
    <div class="gs-nav-icons">
      <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
      <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
    </div>
    <button class="gs-nav-hamburger" onclick="toggleMobileMenu()" aria-label="메뉴 열기">
      <i class="ti ti-menu-2" id="hamburger-icon"></i>
    </button>
    <div class="gs-nav-mobile" id="mobile-menu">
      ${mobileLinks}
      <div class="mobile-social">
        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
      </div>
    </div>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  const isOpen = menu.classList.toggle('open');
  icon.className = isOpen ? 'ti ti-x' : 'ti ti-menu-2';
}

// 메뉴 바깥 클릭하면 닫기
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
      올바니 사랑의 교회 한글학교 · Albany Korean School<br>
      Albany, New York · albanykoreancenter@gmail.com
    </div>
    <div class="gs-footer-icons">
      <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
      <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
