import api from "./axiosConfig";

const API_BASE = "/assets";

export const getAllAssets = () =>
    api.get(API_BASE);

export const getDashboardSummary = () =>
    api.get(`${API_BASE}/dashboard/summary`);

export const createAsset = (asset) =>
    api.post(API_BASE, asset);