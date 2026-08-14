import api from "./axiosConfig";

const API_BASE = "/alerts";

export const getOpenAlerts = () =>
    api.get(`${API_BASE}/open`);

export const createAlert = (assetId, severity, message) =>
    api.post(API_BASE, null, {
        params: {
            assetId,
            severity,
            message
        }
    });

export const resolveAlert = (id) =>
    api.put(`${API_BASE}/${id}/resolve`);