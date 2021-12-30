
export const storage = {
  arrayFavoriteList : [],

  saveFavoriteCities(currentCity) {
    this.arrayFavoriteList.push(currentCity)
    localStorage.setItem('cities', JSON.stringify(storage.arrayFavoriteList));
  },
  getFavoriteCities() {
    return JSON.parse(localStorage.getItem('cities'));
  },

  saveCurrentCity(currentCity) {
    localStorage.setItem('currentCity', JSON.stringify(currentCity))
  },

  getCurrentCity() {
    return JSON.parse(localStorage.getItem('currentCity'))
  },
};

