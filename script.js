// Navbar Animation on Scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

// Accordion Functionality
// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const question = item.querySelector('.accordion-item-question');
  const answer = item.querySelector('.accordion-item-answer-container');
  const chevron = item.querySelector('.chevron-down');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all other accordions
    accordionItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        const ans = i.querySelector('.accordion-item-answer-container');
        ans.style.maxHeight = '0';
        ans.style.opacity = '0';
        i.querySelector('.chevron-down').style.transform = 'rotate(0deg)';
      }
    });

    if (isActive) {
      // Close clicked item
      item.classList.remove('active');
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
      chevron.style.transform = 'rotate(0deg)';
    } else {
      // Open clicked item
      item.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      // Fade in after height starts expanding
      requestAnimationFrame(() => {
        answer.style.opacity = '1';
      });
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});

// Ensure all are closed on first load
window.addEventListener('DOMContentLoaded', () => {
  accordionItems.forEach(item => {
    item.classList.remove('active');
    const answer = item.querySelector('.accordion-item-answer-container');
    answer.style.maxHeight = '0';
    answer.style.opacity = '0';
    item.querySelector('.chevron-down').style.transform = 'rotate(0deg)';
  });
});

