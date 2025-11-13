// api.js
export const apiClient = {
    async get(url) {
      // Simulate an actual API call (for demo purposes, just returning dummy data)
      if (url === "/users/1") {
        return { data: { id: 1, name: "Alice" } };
      }
      return { data: null };
    },
  };
  