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

  const links = navLinks.map(({ href, label }) => {
    const isActive = currentPage === href || (currentPage === '' && href === 'index.html');
    return `<a href="${href}" class="${isActive ? 'active' : ''}">${label}</a>`;
  }).join('');

  nav.innerHTML = `
    <a href="index.html" class="gs-nav-logo">
      <span class="kr">올바니 사랑의 교회 한글학교</span>
      <span class="en">Albany Korean Language School</span>
    </a>
    <div class="gs-nav-links">${links}</div>
    <div class="gs-nav-icons">
      <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
      <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById('main-footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="gs-footer-text">
      사랑의 교회 한글학교 · Albany Korean Language School<br>
      Albany, New York · sarang.hangeul@email.com
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
