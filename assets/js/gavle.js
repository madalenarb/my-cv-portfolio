/**
 * The Gävle goat page: New Year countdown, the timeline stories (hover, tap or keyboard)
 * and videos that only load from YouTube when someone presses play.
 */
(function () {
  'use strict';

  /* Countdown to New Year in Sweden (data-target is midnight CET in UTC) */
  var countdown = document.querySelector('.goat-countdown');
  if (countdown) {
    var target = Date.parse(countdown.getAttribute('data-target'));
    var fields = {};
    Array.prototype.forEach.call(countdown.querySelectorAll('[data-unit]'), function (el) {
      fields[el.getAttribute('data-unit')] = el;
    });
    var done = document.querySelector('.cd-done');
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var left = target - Date.now();
      if (!(left > 0)) {
        countdown.hidden = true;
        if (done) done.hidden = false;
        return false;
      }
      var s = Math.floor(left / 1000);
      fields.days.textContent = Math.floor(s / 86400);
      fields.hours.textContent = pad(Math.floor((s % 86400) / 3600));
      fields.minutes.textContent = pad(Math.floor((s % 3600) / 60));
      fields.seconds.textContent = pad(s % 60);
      return true;
    };
    if (tick()) {
      var timer = setInterval(function () { if (!tick()) clearInterval(timer); }, 1000);
    }
  }

  /* Timeline: hovering or focusing a year shows its story (CSS); a tap or click keeps it open */
  var years = Array.prototype.slice.call(document.querySelectorAll('.goat-year'));
  var header = document.getElementById('header');
  var sheet = window.matchMedia('(max-width: 575px)');
  var closeAll = function (except) {
    years.forEach(function (y) { if (y !== except) y.classList.remove('is-open'); });
  };
  /* The story opens above the year; if that would go under the header or off screen, it opens below instead */
  var place = function (year) {
    var story = year.querySelector('.goat-story');
    year.removeAttribute('data-pos');
    if (!story || sheet.matches) return;
    var shown = getComputedStyle(story).display !== 'none';
    if (!shown) { story.style.visibility = 'hidden'; story.style.display = 'grid'; }
    var height = story.offsetHeight;
    if (!shown) { story.style.display = ''; story.style.visibility = ''; }
    var limit = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
    if (year.getBoundingClientRect().top - height - 8 < limit + 4) year.setAttribute('data-pos', 'below');
  };
  years.forEach(function (year) {
    var btn = year.querySelector('.goat-year-btn');
    year.addEventListener('mouseenter', function () { place(year); });
    btn.addEventListener('focus', function () { place(year); });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      place(year);
      var open = !year.classList.contains('is-open');
      closeAll(year);
      year.classList.toggle('is-open', open);
      year.classList.remove('is-dismissed');
    });
    btn.addEventListener('focus', function () { year.classList.remove('is-dismissed'); });
    year.addEventListener('mouseleave', function () { year.classList.remove('is-dismissed'); });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest || !e.target.closest('.goat-year')) closeAll(null);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    years.forEach(function (y) {
      if (y.classList.contains('is-open') || y.matches(':hover') || y.contains(document.activeElement)) {
        y.classList.remove('is-open');
        y.classList.add('is-dismissed');
      }
    });
  });

  /* Videos: a thumbnail until play is pressed, then the YouTube player (privacy-enhanced mode) */
  Array.prototype.forEach.call(document.querySelectorAll('[data-yt]'), function (btn) {
    btn.addEventListener('click', function () {
      var frame = document.createElement('iframe');
      frame.className = 'goat-video-frame';
      frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(btn.getAttribute('data-yt')) + '?autoplay=1&rel=0';
      frame.title = btn.getAttribute('aria-label') || 'YouTube video';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      frame.allowFullscreen = true;
      btn.replaceWith(frame);
      frame.focus();
    });
  });
})();
