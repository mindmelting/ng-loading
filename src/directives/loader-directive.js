angular.module('directives', [])

//directive to be attached to the DOM
.directive('loader', function(loading) {

  function link(scope, elem, attrs) {
    elem[0].style.background = loading.config.overlay.color;
    elem[0].style.transition = loading.config.transitionSpeed;
  }

  var templates = {
    'load-bar-inbox': '<div class="'+ loading.config.overlay.display +' fade-out">' + '<div class="' + loading.config.class +  '"></div>' + '</div>',
    'spinner': '<div class="'+ loading.config.overlay.display +' fade-out">' + '<div class="wrapper">' + '<svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">' + '<circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>' + '</svg>' + '<div>' + '</div>'
  };

  var directive = {
    restrict: 'EAC',
    scope: {},
    replace: true,
    link: link,
    template: templates[loading.config.class]
  };

  //return the directive object
  return directive;
});
