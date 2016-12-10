'use strict';

function createRipple(y, x) {
  var ripple = '<div class="circle" style="top:' + y + 'px;left:' + x + 'px;"></div>';
  console.log(x);
  var _ripple = $(ripple);
  $('.ripple').append(_ripple);
  setTimeout(function () {
    return _ripple.remove();
  }, 900);
}

function confetti() {
  [{
    bg: '#b00b00',
    position: Math.random() * $('html').width()
  }, {
    bg: '#de1e7e',
    position: Math.random() * $('html').width()
  }, {
    bg: '#BADA55',
    position: Math.random() * $('html').width()
  }, {
    bg: '#F0FEAF',
    position: Math.random() * $('html').width()
  }, {
    bg: '#ac1d1c',
    position: Math.random() * $('html').width()
  }, {
    bg: '#facade',
    position: Math.random() * $('html').width()
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '😜'
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🤑'
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🤑'
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '🐻'
  }, {
    bg: 'transparent',
    position: Math.random() * $('html').width(),
    internal: '💰'
  }].map(function (options) {
    var c = $('<div class="confetti" style="background:' + options.bg + ';left:' + options.position + 'px;">' + (options.internal || '') + '</div>');
    $('body').append(c);
    setTimeout(function () {
      return c.remove();
    }, 1900);
  });
}

$('.mui-button').mousedown(function (e) {
  var offset = $(e.target).offset();
  createRipple(e.pageY - offset.top, e.pageX - offset.left);
  confetti();
});