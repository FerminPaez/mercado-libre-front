const CONFIG_FETCH = {
  mode: 'cors',
  method: 'get',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getDescription = async (id) => {
  const route = `http://localhost:3031/items/${id}`
  return fetch(route, CONFIG_FETCH)
}

// Almacena las peticiones de las listas
const histPeticiones = {}

export const getList = async (query) => {
  const route = `http://localhost:3031/${query}`
  if (histPeticiones[query] === undefined) {
    // Es una forma de no hacer la misma peticion todo el tiempo
    // Faltaria mejorar un poco la idea
    const resp = await fetch(route)
    const respjson = await resp.json()
    histPeticiones[query] = respjson
    return histPeticiones[query]
  }
  return histPeticiones[query]
}
