/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-19 17:24:34
 * @LastEditors: lingfeng 3574456011@qq.com
 * @LastEditTime: 2024-03-19 17:25:21
 * @FilePath: \starPayWeb\src\api\userManagement\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getuserManagementTable = (data) => {
    return request({
        url: 'api/admin/user/adminUsers',
        method: 'post',
        data
    });
};
// 新增接口
export const addAdminUser = (data) => {
    return request({
        url: 'api/admin/user/addAdminUser',
        method: 'post',
        data
    });
};
//根据用户名获取详情
export const adminUserByName = (data) => {
    return request({
        url: 'api/admin/user/adminUserByName',
        method: 'post',
        data
    });
};
//更新接口
export const updateAdminUser = (data) => {
    return request({
        url: 'api/admin/user/updateAdminUser',
        method: 'put',
        data
    });
};
//角色列表
export const getRolePage = (data) => {
    return request({
        url: 'api/admin/rolePermission/rolePage',
        method: 'post',
        data
    });
};
//分配角色
export const addUserRoles = (data) => {
    return request({
        url: 'api/admin/user/addUserRoles',
        method: 'post',
        data
    });
};
//部门
export const departmentTree = () => {
    return request({
        url: 'api/admin/org/departmentTree',
        method: 'get'
    });
};
//获取手机区号
export const countryListPhone = () => {
    return request({
        url: 'api/comm/countryList',
        method: 'get'
    });
};
//获取分配角色列表
export const getUerRoles = () => {
    return request({
        url: 'api/admin/user/userRoles',
        method: 'get'
    });
};