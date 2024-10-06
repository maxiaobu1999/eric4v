/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-19 11:25:13
 * @LastEditors: lingfeng 12919339+lan_ling_cao@user.noreply.gitee.com
 * @LastEditTime: 2024-04-15 11:06:12
 * @FilePath: \starPayWeb\src\api\customerManagement\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getcustomerTable = (data) => {
    return request({
        url: '/api/admin/customer/users',
        method: 'post',
        data
    });
};
export const getUserTypeFilter = () => {
    return request({
        url: 'api/admin/customer/userTypeFilter',
        method: 'get'
    });
};