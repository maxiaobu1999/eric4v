import request from "@/utils/request";

export const login = (data) => {
	return request({
		url: "api/admin/user/login",
		method: "post",
		data,
	});
};
export const logout = (data) => {
	return request({
		url: "api/admin/user/logout",
		method: "get",
		data,
	});
};
// 刷新token接口
export const refreshToken = () => {
	return request({
		url: "api/admin/user/token",
		method: "get"
	});
};
