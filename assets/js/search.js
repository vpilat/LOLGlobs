(function () {
  'use strict';

  var searchInput = document.getElementById('search-input');
  var noResults = document.getElementById('no-results');
  var resultsCount = document.getElementById('results-count');
  var clearSearch = document.getElementById('clear-search');
  var platformTabs = document.querySelectorAll('.tab-btn');
  var categoryChips = document.querySelectorAll('.chip');

  if (!searchInput || !window.LOLGLOB_ENTRIES) return;

  var state = { query: '', platform: 'all', category: 'all' };

  function setActivePlatformTab(platform) {
    platformTabs.forEach(function (t) {
      var active = t.dataset.platform === platform;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', String(active));
    });
  }

  function setActiveChip(category) {
    categoryChips.forEach(function (c) {
      c.classList.toggle('active', c.dataset.category === category);
    });
  }

  // Parse prefixes: @platform, /category
  function parseQuery(raw) {
    var q = raw.trim();
    var platform = null;
    var category = null;
    var text = q;

    var platformMatch = q.match(/^@([\w-]+)\s*(.*)/);
    if (platformMatch) {
      platform = platformMatch[1];
      text = platformMatch[2];
    }

    var catMatch = text.match(/^\/([\w-]+)\s*(.*)/);
    if (catMatch) {
      category = catMatch[1];
      text = catMatch[2];
    }

    return { platform: platform, category: category, text: text.toLowerCase() };
  }

  function filter() {
    var raw = searchInput.value;
    var parsed = parseQuery(raw);

    // Prefix overrides tab/chip state
    var activePlatform = parsed.platform || state.platform;
    var activeCategory = parsed.category || state.category;
    var text = parsed.text;

    // Sync UI if prefix changed state
    if (parsed.platform) setActivePlatformTab(parsed.platform);
    if (parsed.category) setActiveChip(parsed.category);

    var visible = 0;
    var entries = window.LOLGLOB_ENTRIES;
    var total = entries.length;

    entries.forEach(function (entry) {
      var show = true;

      if (activePlatform !== 'all' && entry.platform !== activePlatform) show = false;
      if (activeCategory !== 'all' && entry.category !== activeCategory) show = false;

      if (show && text) {
        var isMitre = /^t\d/i.test(text);
        if (isMitre) {
          show = entry.mitre.toLowerCase().indexOf(text) !== -1;
        } else {
          show = entry.name.indexOf(text) !== -1 ||
                 entry.desc.indexOf(text) !== -1 ||
                 entry.mitre.toLowerCase().indexOf(text) !== -1;
        }
      }

      entry.el.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (visible === total && !text && activePlatform === 'all' && activeCategory === 'all') {
      resultsCount.textContent = total + ' entries';
    } else {
      resultsCount.textContent = visible + ' of ' + total + ' entries';
    }

    noResults.style.display = visible === 0 ? '' : 'none';
  }

  searchInput.addEventListener('input', function () {
    filter();
    if (history.replaceState) {
      var q = searchInput.value;
      history.replaceState(null, '', q ? '#search=' + encodeURIComponent(q) : location.pathname + location.search);
    }
  });

  platformTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      setActivePlatformTab(tab.dataset.platform);
      state.platform = tab.dataset.platform;
      // Clear @prefix from search if present
      if (searchInput.value.startsWith('@')) searchInput.value = '';
      filter();
    });
  });

  categoryChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      setActiveChip(chip.dataset.category);
      state.category = chip.dataset.category;
      // Clear /prefix from search if present
      if (searchInput.value.startsWith('/')) searchInput.value = '';
      filter();
    });
  });

  if (clearSearch) {
    clearSearch.addEventListener('click', function (e) {
      e.preventDefault();
      searchInput.value = '';
      state = { query: '', platform: 'all', category: 'all' };
      setActivePlatformTab('all');
      setActiveChip('all');
      filter();
    });
  }

  // '/' shortcut to focus search
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== searchInput &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.blur();
    }
  });

  // Restore from URL hash
  var hashMatch = location.hash.match(/^#search=(.+)/);
  if (hashMatch) {
    searchInput.value = decodeURIComponent(hashMatch[1]);
  }

  filter();
})();
