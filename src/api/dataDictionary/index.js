/*
 * @Author: lingfeng 3574456011@qq.com
 * @Date: 2024-03-20 15:23:48
 * @LastEditors: lingfeng 3574456011@qq.com
 * @LastEditTime: 2024-03-20 15:24:28
 * @FilePath: \starPayWeb\src\api\dataDictionary\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request';
//数据字典列表树接口
export const getdataDictionaryTable = (data) => {
    return request({
        url: 'api/admin/dictionary/trees',
        method: 'post',
        data
    });
};
//数据字典下拉接口
export const getdataValueLabel = () => {
    return request({
        url: 'api/admin/dictionary/valueLabel',
        method: 'get'
    });
};
//数据字典新增接口
export const addDataDictionary = (data) => {
    return request({
        url: 'api/admin/dictionary/add',
        method: 'post',
        data
    });
};
//根据ID查询数据字典
export const dictionaryById = (data) => {
    return request({
        url: 'api/admin/dictionary/dictionaryById',
        method: 'post',
        data
    });
};
//数据字典修改接口
export const updateDataDictionary = (data) => {
    return request({
        url: 'api/admin/dictionary/update',
        method: 'put',
        data
    });
};
//删除数据字典
export const deleteById = (data) => {
    return request({
        url: 'api/admin/dictionary/deleteById',
        method: 'post',
        data
    });
};