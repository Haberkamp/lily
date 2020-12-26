window.boostrap = require('./vendors/bootstrap.bundle.min');

// enabling tooltips everywhere
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.forEach(tooltipTriggerEl => {
  return new window.boostrap.Tooltip(tooltipTriggerEl);
});
