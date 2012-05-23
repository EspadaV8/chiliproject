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

      $('#main').addClass('container-fluid')
        .wrapInner('<div class="row-fluid" />');


      var breadcrumb = $('#breadcrumb');
      var bcItems = breadcrumb.html().split('»');
      var ulBreadcrumb = $('<ul class="breadcrumb" />');

      $(bcItems).each(function(item) {
          ulBreadcrumb.append('<li>' + this + ' <span class="divider">/</span></li>');
      });
      ulBreadcrumb.find('li:last').addClass('active').find('.divider').remove();

      breadcrumb.prependTo($('#main'));
      breadcrumb.replaceWith(ulBreadcrumb);

      if($('#side-container').size() > 0) {
        $('#side-container').addClass('span2');
        $('#content').addClass('span10');

        $('#content').find('.wiki, .members').parent().addClass('span6').wrapAll('<div class="row-fluid" />');
      } else {
        $('#content').addClass('span12');
        $('#content').find('.wiki, .projects').unwrap().wrapAll('<div class="row-fluid" />').wrap('<div class="span6" />');
      }

      $('#content > h2').wrap('<div class="page-header" />');

      if($('#main-menu').size() > 0) {
        $('#main-menu')
          .find('> ul')
            .addClass('nav nav-list well')
            .end()
          .find('.selected')
            .parent().addClass('active');

        $('#main-menu ul.menu-children').each(function() {
            var self = $(this);
            var par = self.parent();
            var link = par.find('> a');

            par.wrapInner('<div class="btn-group" />');
            link.addClass('btn');
            self.addClass('dropdown-menu');
            link.after('<button class="btn dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>');
          });
      }

      var tabs = $('.tabs');
      if(tabs.size() > 0) {
          tabs.find('> ul')
                .addClass('nav nav-tabs')
                .end()
              .find('.tabs-buttons')
                .remove();
          tabs.find('a').each(function() {
            var self = $(this);
            var href = self.attr('href').split('/').pop();
            if(href.indexOf('=') !== -1) {
              href = href.split('=').pop();
            }
            self.attr('href', '#tab-content-' + href)
              .attr('onclick', '')
              .attr('data-toggle', 'tab');
          });

          $('.tab-content')
            .removeClass('tab-content')
            .addClass('tab-pane')
            .attr('style', '')
            .wrapAll('<div class="tab-content" />');

          tabs.find('a:first').tab('show');
      }

      $('table').addClass('table table-condensed table-striped table-bordered');

      /* forms */
      if($('#main form').size() > 0) {
        $('#main form').addClass('well');
        $('#main form p').each(function() {
            var self = $(this);
            var label = self.find('label');
            var text = label.text();
            label.remove();

            self.find('input,select').wrapAll('<label />');
            if(self.find('input[type="checkbox"]').size() > 0) {
              self.find('label').append(text);
            } else {
              self.find('label').prepend(text);
            }
        });
        $('#main form label input[type="checkbox"]').parent().addClass('checkbox');
        $('#main form input[type="submit"]').addClass('btn');
      }

      $('.dropdown-toggle').dropdown();
      $('#footer').appendTo('#main');
    });
  });
})(jQuery);
