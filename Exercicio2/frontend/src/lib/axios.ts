import axios from 'axios'

export const api = axios.create({
  baseURL: `${import.meta.env}/api/v1`,
})