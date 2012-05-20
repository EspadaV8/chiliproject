(function($) {
  $(function() {
  
    var themeName = '';
    $('body').attr('class').split(' ').each(function(item) { if(item.indexOf('theme') !== -1) { themeName = item; } });
    themeName = themeName.split('-')[1].toLowerCase()
    var scriptLocation = '/themes/' + themeName + '/javascripts/bootstrap.min.js';
    $.getScript(scriptLocation, function() {
      var topMenu = $('#top-menu');

      topMenu.addClass('navbar');
      topMenu.wrapInner('<div class="navbar-inner" />');
      $('#header').addClass('container');

      $('#logo').find('a').unwrap().addClass('brand');

      $('#account-nav').unwrap().addClass('nav');
      $('#account-nav .drop-down')
        .removeClass('drop-down')
        .addClass('dropdown')
        .find('> a')
          .attr('href', '#')
          .addClass('dropdown-toggle')
          .attr('data-toggle', 'dropdown')
          .append('<b class="caret"></b>')
          .end()
        .find('> ul')
          .addClass('dropdown-menu')
          .attr('style', '');

      $('#search')
        .find('> label')
          .remove()
          .end()
        .find('form')
          .unwrap()
          .attr('id', 'search')
          .addClass('pull-right navbar-search')
          .end();
      $('#search input').addClass('search-query span2');

      $('.dropdown-toggle').dropdown();


      var breadcrumb = $('#breadcrumb');
      var bcItems = breadcrumb.html().split('»');
      var ulBreadcrumb = $('<ul class="breadcrumb" />');

      $(bcItems).each(function(item) {
          ulBreadcrumb.append('<li>' + this + ' <span class="divider">/</span></li>');
      });
      ulBreadcrumb.find('li:last').addClass('active').find('.divider').remove();

      breadcrumb.insertAfter(topMenu);
      breadcrumb.replaceWith(ulBreadcrumb);

      $('#main').addClass('container-fluid')
        .wrapInner('<div class="row-fluid" />');
      $('#side-container').addClass('span2');
      $('#content').addClass('span10');

      $('#main-menu')
        .find('ul')
          .addClass('nav nav-list')
          .end()
        .find('.selected')
          .parent().addClass('active');

      // $('#main-menu').addClass('row-fliud');
    });
  });
})(jQuery);
