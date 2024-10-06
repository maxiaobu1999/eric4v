/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-21 16:16:14
 * @LastEditors: lingfeng 12919339+lan_ling_cao@user.noreply.gitee.com
 * @LastEditTime: 2024-04-29 17:30:19
 * @FilePath: \starPayWeb\src\api\rotationChartConfiguration\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

// 新增轮播图接口
export const addAdvertisement = (data,headers) => {
    return request({
        url:'/api/admin/advertisement/addAdvertisement',
        method:'post',
        headers,
        data:data
    })
};
// 删除配置项明细接口
export const deleteAdvertById = (data,headers) => {
    return request({
        url:'/api/admin/advertisement/deleteAdvertById',
        method:'delete',
        headers,
        data:data
    })
};
// 分页获取轮播图列表接口
export const getAdvertisement = (data,headers) => {
    return request({
        url:'/api/admin/advertisement/getAdvertisement',
        method:'post',
        headers,
        data:data
    })
};
// 根据ID获取轮播图数据接口
export const getAdvertisementById = (data,headers) => {
    return request({
        url:'/api/admin/advertisement/getAdvertisementById',
        method:'post',
        headers,
        data:data
    })
};

//banner广告列表数据
// export const getrotationChartConfigurationTable = (data) => {
//     return request({
//         url: '/api/admin/advertisement/getAdvertisementChart',
//         method: 'post',
//         data
//     });
// };
// 更新轮播图接口
export const updateAdvertById = (data,headers) => {
    return request({
        url:'/api/admin/advertisement/updateAdvertById',
        method:'put',
        headers,
        data:data
    })
};