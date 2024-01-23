$(document).ready(function () {
  // Load the navs and footer
  $('.navContainer').load('partials/nav.html');
  $('.footerContainer').load('partials/footer.html');

  // Tabs functionality
  $('.tab').click(function () {
    var tabId = $(this).attr('id');
    $(this).openTab('tab', tabId + '-content');
  });
  $('.subtab').click(function () {
    var tabId = $(this).attr('id');
    $(this).openTab('subtab', tabId + '-content');
  });

  // Products list
  $('#merrickProducts').load('partials/products/merrick.html');
});

$.fn.openTab = function (className, tabId) {
  // Only show the selected content
  $('.' + className + '-content').removeClass('show');
  $('#' + tabId).addClass('show');

  // Only add 'active' to the clicked
  $('.' + className).removeClass('active');
  this.addClass('active');
};
