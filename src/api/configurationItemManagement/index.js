/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-20 16:27:47
 * @LastEditors: lingfeng 3574456011@qq.com
 * @LastEditTime: 2024-03-28 10:45:32
 * @FilePath: \starPayWeb\src\api\configurationItemManagement\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getconfigurationItemManagementTable = (data) => {
    return request({
        url: '/api/admin/config/getConfigClassify',
        method: 'post',
        data
    });
};
export const getconfigurationItemManagementTable2 = (data) => {
    return request({
        url: '/api/admin/config/getConfigItem',
        method: 'post',
        data: data
    });
};
export const deleteConfigClassifyById = (configId) => {
    return request({
        url: '/api/admin/config/deleteConfigClassifyById',
        method: 'delete',
        data: configId
    });
};
export const getConfigItemByConfigId = (configId) => {
    return request({
        url: '/api/admin/config/getConfigItemByConfigId',
        method: 'post',
        data: configId
    });
}

export const addClassifyAndItem = (data) => {
    return request({
        url: 'starpay-service/api/admin/config/addClassifyAndItem',
        method: 'post',
        data: data
    });
}
//新增配置项
export const addClassify = (data) => {
    return request({
        url: 'api/admin/config/addClassify',
        method: 'post',
        data: data
    });
}
//id查询配置项
export const getConfigClassifyById = (data) => {
    return request({
        url: 'api/admin/config/getConfigClassifyById',
        method: 'post',
        data: data
    });
}
//更新配置项
export const updateConfigClassifyById = (data) => {
    return request({
        url: 'api/admin/config/updateConfigClassifyById',
        method: 'put',
        data: data
    });
}
//删除配置项
export const deleteConfigItemById = (data) => {
    return request({
        url: 'api/admin/config/deleteConfigItemById',
        method: 'delete',
        data: data
    });
}
//配置项数据下拉框
export const getConfigFilter = (data) => {
    return request({
        url: 'api/admin/config/getConfigFilter',
        method: 'post',
        data: data
    });
}
//新增配置项明细
export const addConfigItem = (data) => {
    return request({
        url: 'api/admin/config/addConfigItem',
        method: 'post',
        data: data
    });
}
//根据id获取配置项明细数据
export const getConfigItemById = (data) => {
    return request({
        url: 'api/admin/config/getConfigItemById',
        method: 'post',
        data: data
    });
}
//更新配置项明细
export const updateConfigItemById = (data) => {
    return request({
        url: 'api/admin/config/updateConfigItemById',
        method: 'put',
        data: data
    });
}