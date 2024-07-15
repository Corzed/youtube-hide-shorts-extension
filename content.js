function redirectIfYouTubeShorts() {
    // Redirect if the URL contains /shorts/
    if (window.location.href.includes('/shorts/')) {
      window.location.href = 'https://www.youtube.com';
    }
  }
  
  // Run the function when the page loads
  window.addEventListener('load', redirectIfYouTubeShorts);
  
  // Run the function when the URL changes (Single Page Application navigation)
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      redirectIfYouTubeShorts();
    }
  }).observe(document, { subtree: true, childList: true });
  