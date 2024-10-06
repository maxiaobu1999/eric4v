/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-20 14:26:36
 * @LastEditors: lingfeng 12919339+lan_ling_cao@user.noreply.gitee.com
 * @LastEditTime: 2024-04-18 17:55:12
 * @FilePath: \starPayWeb\src\api\contractManagement\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getcontractManagementTable = (data,headers) => {
    return request({
        url: '/api/admin/contract/contractPage',
        method: 'post',
        headers,
        data
    });
};
// 新增
export const addContract = (data,headers) => {
    return request({
        url: '/api/admin/contract/addContract',
        method: 'post',
        headers,
        data
    });
};
// 根据ID获取
export const contractById = (data,headers) => {
    return request({
        url: '/api/admin/contract/contractById',
        method: 'post',
        headers,
        data
    });
};
// 修改 
export const updateContract = (data,headers) => {
    return request({
        url: '/api/admin/contract/updateContract',
        method: 'put',
        headers,
        data
    });
};
// 删除
export const deleteContract = (data,headers) => {
    return request({
        url: '/api/admin/contract/deleteContract',
        method: 'delete',
        headers,
        data
    });
};