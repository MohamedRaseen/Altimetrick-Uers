import axios from 'axios';

export function ajax(apiDetails) {
    return new Promise((resolve, reject) => {
        const { method, api, params } = apiDetails;

        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        if (method === 'get') {
            axios.get(api)
                .then(res => {
                    const { data } = res;
                    if (data.error) {
                        reject(new Error(data.error));
                    }
                    else {
                        resolve(res);
                    }
                })
        }
        else if (method === 'post') {

            const headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Access-Control-Allow-Origin' :'http://localhost:3000'
              }
              
              axios.post(api, params, {
                  headers: headers
                })
                .then((res) => {
                    const { data } = res;
                    if (data.error) {
                        reject(new Error(data.error));
                    }
                    else {
                        resolve(res);
                    }
                })
        }
    });

}