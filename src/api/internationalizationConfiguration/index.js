/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-21 16:14:25
 * @LastEditors: lingfeng 12919339+lan_ling_cao@user.noreply.gitee.com
 * @LastEditTime: 2024-04-19 16:34:16
 * @FilePath: \starPayWeb\src\api\internationalizationConfiguration\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getinternationalizationConfigurationTable = (data,headers) => {
    return request({
        url: '/api/admin/resource/resourcePage',
        method: 'post',
        headers,
        data
    });
};
// 新增
export const addResource = (data,headers) => {
    return request({
        url: '/api/admin/resource/addResource',
        method: 'post',
        headers,
        data
    });
};
// 删除
export const deleteResource = (data,headers) => {
    return request({
        url: '/api/admin/resource/deleteResource',
        method: 'delete',
        headers,
        data
    });
};
// 根据ID获取国际化配置
export const resourceById = (data,headers) => {
    return request({
        url: '/api/admin/resource/resourceById',
        method: 'post',
        headers,
        data
    });
};
// 修改 
export const updateResource = (data,headers) => {
    return request({
        url: '/api/admin/resource/updateResource',
        method: 'put',
        headers,
        data
    });
};