import request from '@/utils/request';
export const getData = () => {
    return request({
        url: '/api/list/user',
        method: 'get'
    });
};
