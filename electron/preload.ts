import toPreloadEvents from "./utils/preloadEvents"

toPreloadEvents()

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)

    if (element) element.innerHTML = text
  }

  for(const dependecy of ['chrome', 'node', 'electron']) {
    replaceText(`${dependecy}-version`, process.versions[dependecy])
  }
})