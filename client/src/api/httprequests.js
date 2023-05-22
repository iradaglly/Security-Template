import axios from "axios";
import { BASE_URL } from "./base_url";

export const getAllSec = async () => {
    let globalData;
    let URL;
    URL = BASE_URL + '/security';
    await axios.get(URL).then((res) => {
        globalData = res.data;
    });
    return globalData;
};


export const getSectByID = async (ID) => {
    let globalData;
    await axios.get(`${BASE_URL}/security/${ID}`).then((res) => {
        globalData = res.data;
    });
    return globalData;
};

 
export const deleteSecByID = async (ID) => {
    let deletedSec;
    await axios.delete(`${BASE_URL}/security/${ID}`).then((res) => {
        deletedSec = res.globalData;
    });

    return deletedSec;
};

export const postSec = (payload) => {
    axios.post(`${BASE_URL}/security`, payload);
};


export const editSec = (id, payload) => {
    axios.put(`${BASE_URL}/security/${id}`, payload);
}


