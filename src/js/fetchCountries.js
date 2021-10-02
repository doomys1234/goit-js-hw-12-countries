const MAIN_URL = 'https://restcountries.com/v2/name/'

export function fetchCountry(searchQuery) {
  return fetch(`${MAIN_URL}${searchQuery}`).then(response => {
    if (response.ok) return response.json()
    throw new Error('Error of fetching request')
  })
}
