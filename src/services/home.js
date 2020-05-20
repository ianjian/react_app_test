import request from '@/utils/request';

// const BASE_HOST = process.env.apiUrl;
// // const BASE_HOST = '';

const requestFunc = (url, params) => (
  request(process.env.baseApi+url, {
    method: 'POST',
    body: params,
  })
);
export async function queryPlaces(params) {
  return requestFunc('/place/list', params);
}
