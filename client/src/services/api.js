const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export const api = {
  async post(path, body) {
    return fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).then(res => res.json());
  },

  async authGet(path) {
    const token = localStorage.getItem("token");
    return fetch(`${API_BASE}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => res.json());
  },

  async authPost(path, body) {
    const token = localStorage.getItem("token");
    return fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }).then(res => res.json());
  },

  async authPut(path, body) {
    const token = localStorage.getItem("token");
    return fetch(`${API_BASE}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }).then(res => res.json());
  },

  async authDelete(path) {
    const token = localStorage.getItem("token");
    return fetch(`${API_BASE}${path}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => res.json());
  },
};
