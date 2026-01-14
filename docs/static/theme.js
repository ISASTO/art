(function(){
  const KEY = 'site_theme';
  const DEFAULT = 'github-dark';

  function applyTheme(themeId){
    document.documentElement.setAttribute('data-theme', themeId);
  }

  function loadTheme(){
    try{
      return localStorage.getItem(KEY) || DEFAULT;
    } catch {
      return DEFAULT;
    }
  }

  function saveTheme(themeId){
    try{
      localStorage.setItem(KEY, themeId);
    } catch {}
  }

  // Apply as early as possible
  const theme = loadTheme();
  applyTheme(theme);

  // Expose tiny API for pages
  window.SiteTheme = {
    get: () => loadTheme(),
    set: (themeId) => { applyTheme(themeId); saveTheme(themeId); }
  };
})();
