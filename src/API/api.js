import axios from "axios";

const instance = axios.create({
    baseURL: 'http://router.project-osrm.org'
});

export const getRouteDataAPI = (coordinates) => {
    return instance
        .get(`/route/v1/driving/${coordinates}?geometries=geojson`);
}