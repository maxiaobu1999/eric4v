/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-18 18:04:10
 * @LastEditors: lingfeng 12919339+lan_ling_cao@user.noreply.gitee.com
 * @LastEditTime: 2024-04-16 15:28:00
 * @FilePath: \starPayWeb\src\api\customerFeedback\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';

export const getcustomerFeedbackTable = (data,headers) => {
    return request({
        url: '/api/admin/feedback/getFeedback',
        method: 'post',
        headers,
        data
    });
};

export const feedbackTypeFilter = (headers) => {
    return request({
        url: '/api/admin/feedback/feedbackTypeFilter',
        method: 'get',
        headers
    });
};
export const getFeedbackById = (data,headers) => {
    return request({
        url: '/api/admin/feedback/getFeedbackById',
        method: 'post',
        headers,
        data
    });
};