
// انتخاب همه لینک‌های سایدبار
const sidebarLinks = document.querySelectorAll('#sidebar a');

// گرفتن نام فایل از آدرس فعلی (بدون دایرکتوری)
const currentPage = window.location.pathname.split('/').pop();

sidebarLinks.forEach(link => {
  // گرفتن href هر لینک
  const linkPage = link.getAttribute('href');

  // اگر href برابر با آدرس صفحه فعلی بود، کلاس active بده
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});


function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);

  const icon = document.getElementById('themeIcon');
  icon.className = newTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';

  localStorage.setItem('theme', newTheme);
}

// در زمان بارگذاری صفحه
(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  const icon = document.getElementById('themeIcon');
  if (savedTheme === 'dark') {
    icon.className = 'bi bi-sun-fill';
  }
})();


document.addEventListener('DOMContentLoaded', function () {
  const avatarBoxes = document.querySelectorAll('.list-avatar .image-box');

  avatarBoxes.forEach(box => {
    box.addEventListener('click', function () {
      // حذف انتخاب قبلی
      avatarBoxes.forEach(b => b.classList.remove('selected'));

      // انتخاب جدید
      this.classList.add('selected');

      // اگر بخوای آدرس آواتار انتخاب‌شده رو ذخیره کنی:
      const selectedImage = this.querySelector('img').getAttribute('src');
      console.log('آواتار انتخاب‌شده:', selectedImage);

      // می‌تونی این مقدار رو توی یک input hidden هم بریزی اگه بخوای برای فرم بفرستی
      // document.getElementById('selectedAvatarInput').value = selectedImage;
    });
  });
});

