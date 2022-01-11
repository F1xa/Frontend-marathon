
export const storage = {
  
  saveFavorits(citiesList) {
    localStorage.setItem('cities', JSON.stringify(citiesList));
  },

  saveFavoriteCity(currentCity) {
    let storageList = storage.getFavoriteCities();
    storageList.push(currentCity);
    localStorage.setItem('cities', JSON.stringify(storageList));
  },

  getFavoriteCities() {
    return JSON.parse(localStorage.getItem('cities') || '[]');
  },

  saveCurrentCity(currentCity) {
    localStorage.setItem('currentCity', JSON.stringify(currentCity))
  },

  getCurrentCity() {
    return JSON.parse(localStorage.getItem('currentCity'))
  },
  
};