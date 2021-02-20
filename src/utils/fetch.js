export function fetchWithBody(url, metodo, conteudo, token) {
  return fetch(url, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      //Authorization: token && `Bearer ${token}`,
    },
    body: JSON.stringify(conteudo),
  });
}

export function fetchWithToken(url, metodo, conteudo, token) {
  return fetch(url, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
    body: JSON.stringify(conteudo),
  });
}
export function fetchWithTokenNoBody(url, metodo, token) {
  return fetch(url, {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
      Authorization: token && `Bearer ${token}`,
    },
  });
}

export function fetchNoTokenNobody(url, method) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/csv",
      Accept: "application/csv",
    },
  });
}
