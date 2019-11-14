import request from 'request';

const callRequest = (params, method) => {
  return new Promise((resolve, reject) => {
    // if(params.url != 'https://dev-api.qathena.com/user/user/refresh-token') {
    //     return reject({code: 403})
    // }
    request(
      {
        url: params.url,
        headers: params.headers,
        method,
        body: JSON.stringify(params.body),
      },
      (err, res, body) => {
        body = body ? JSON.parse(body) : null;
        console.log('call api:', { res, body, err });
        if (err) {
          reject(err);
        } else if (body && body.code == 200) {
          resolve(body.data);
        } else {
          if (res.statusCode == 401) {
            reject({ ...body, code: res.statusCode });
          } else {
            reject(body);
          }
        }
      },
    );
  });
};

const wrappedequest = async (params, refreshHeaders, method) => {
  try {
    const response = await callRequest(params, method);
    return response;
  } catch (err) {
    if (err.code == 401 && refreshHeaders) {
      let headers;
      try {
        headers = await refreshHeaders();
      } catch (error) {
        throw { code: 999999 };
      }
      const response = await callRequest({ ...params, headers }, 'post');
      return response;
    } else {
      throw err;
    }
  }
};

const getRequest = (params, refreshHeaders) => {
  return wrappedequest(params, refreshHeaders, 'get');
};
const putRequest = (params, refreshHeaders) => {
  return wrappedequest(params, refreshHeaders, 'put');
};

const postRequest = (params, refreshHeaders) => {
  return wrappedequest(params, refreshHeaders, 'post');
};

const deleteRequest = (params, refreshHeaders) => {
  return wrappedequest(params, refreshHeaders, 'delete');
};

export default {
  get: getRequest,
  put: putRequest,
  post: postRequest,
  delete: deleteRequest,
};
