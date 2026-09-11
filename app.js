const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const form = document.querySelector('#lead-form');
const statusEl = document.querySelector('#form-status');

if (form && statusEl) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusEl.className = 'form-status';

    if (!form.checkValidity()) {
      statusEl.textContent = 'Vui lòng điền đầy đủ họ tên, số điện thoại và nhu cầu.';
      statusEl.classList.add('error');
      form.reportValidity();
      return;
    }

    // V1 demo: chưa gửi dữ liệu ra ngoài để tránh làm mất lead vào endpoint chưa cấu hình.
    // Khi triển khai thật, thay phần này bằng endpoint Google Apps Script / CRM / form backend.
    const data = Object.fromEntries(new FormData(form).entries());
    console.log('QTD Digital lead demo:', data);
    statusEl.textContent = 'Form V1 đã hoạt động. Bước triển khai tiếp theo sẽ kết nối dữ liệu thật về Google Sheet/CRM.';
    statusEl.classList.add('success');
  });
}
