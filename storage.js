
export const storage = {
  
  saveFavorits(citiesList) {
    localStorage.setItem('cities', JSON.stringify(citiesList));
  },

  saveFavoriteCity(currentCity) {
    const favoriteCities = new Set(storage.getFavoriteCities());
    favoriteCities.add(currentCity)
    localStorage.setItem('cities', JSON.stringify([...favoriteCities]))
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

