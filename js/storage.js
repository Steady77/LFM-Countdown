export function getDateFromLocalStorage(key) {
  return new Date(localStorage.getItem(key));
}

export function setToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
