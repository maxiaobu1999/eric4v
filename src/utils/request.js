import Axios from "axios";
// import { useRouter } from "vue-router";
import router from "@/router/index.js";
import {refreshToken} from "@/api/login.js";
import {ElMessage, ElMessageBox} from "element-plus";
// const router = useRouter();
const BASE_URL = import.meta.env.VITE_APP_BASE_API; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = 5000; // 接口超时时间
const instance = Axios.create({baseURL: BASE_URL, timeout: TIME_OUT}); // 可以添加一个axios的post全局配置
// 添加请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 可以在此处添加一些共有的请求拦截
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            const accessToken = token.accessToken;
            const refreshToken = token.refreshToken;
            config.headers.Authorization = accessToken;
            config.headers.Refresh_token = refreshToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
// 添加响应拦截器
instance.interceptors.response.use(
    async (response) => {
        const res = response.data;
        //如果token失效
        if (res.code === 4010002) {
            // 普通token失效 2小时有效期
            try {
                const refrechRes = await refreshToken();
                if (refrechRes) {
                    if (refrechRes.data.code === 0) {
                        let allToken = {
                            accessToken: refrechRes.data.data.accessToken,
                            refreshToken: refrechRes.data.data.refreshToken,
                        };
                        localStorage.setItem("token", JSON.stringify(allToken));
                        const config = response.config;
                        config.headers["authorization"] =
                            refrechRes.data.data.accessToken;
                        config.headers["refresh_token"] =
                            refrechRes.data.data.refreshToken;
                        return instance(config);
                    } else {
                        ElMessage.error(refrechRes.msg);
                        router.push({
                            path: "/",
                        });
                    }
                }
            } catch (error) {
                ElMessage.error(error);
            }
        } else if (res.code === 4010003) {
            // 刷新token失效，需要重新登陆 24小时有效期
            router.push({
                path: "/",
            });
            localStorage.removeItem("token");
        } else if (res.code === 4010001) {
            //token为空
            router.push({
                name: "login",
            });
        } else {
            return response;
        }
    },
    (error) => {
        return Promise.reject(error.message);
    },
);
export default instance;
