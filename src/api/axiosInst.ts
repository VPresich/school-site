import axios from 'axios';

const projectId = import.meta.env.VITE_PROJECTID;
const dataset = import.meta.env.VITE_DATASET;
const tocken = import.meta.env.VITE_TOKEN_READ;
console.log('projectId', projectId);
console.log('dataset', dataset);
console.log('tocken', tocken);

export const axiosInst = axios.create({
  baseURL: `https://${projectId}.api.sanity.io/v2023-08-01/data/query/${dataset}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN_READ}`,
  },
});
