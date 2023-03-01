// JavaScript Document 

// Returns all element descendants of node that match selectors.
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
//   (method) Storage.setItem(key: string, value: string): void
// Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

// Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

// Dispatches a storage event on Window objects holding an equivalent Storage object.
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
//   (method) NodeListOf<Element>.forEach(callbackfn: (value: Element, key: number, parent: NodeListOf<Element>) => void, thisArg?: any): void
// Performs the specified action for each node in an list.

// @param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};

colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

document.onload = setTheme();


// JavaScript getting exciting