
// Øvelse 1 + 2
export function doubleNumber(num) {
    if (typeof num !== 'number') {
      return 0;
    }
    return num * 2;
  }
  
  export function uppercaseString(str) {
    if (typeof str !== 'string') {
      return '';
    }
    return str.toUpperCase();
  }
  
  export function handleNullUndefined(value) {
    if (value === null) return null;
    if (value === undefined) return undefined;
    return value;
  }
  
  // Øvelse 3 — async functions
  export async function fetchData(success = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data loaded successfully");
        } else {
          reject(new Error("Failed to load data"));
        }
      }, 100);
    });
  }
  
  // Øvelse 4 — error handling
  export function throwError() {
    throw new Error('This is an error');
  }
  
  // Øvelse 5 — Mocked API usage (for example purposes)
  export async function getUser(api, id) {
    const response = await api.get(`/user/${id}`);
    return response.data;
  }
  