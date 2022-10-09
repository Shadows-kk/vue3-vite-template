import eRequest from "@/service/index";
// 1.登录接口
export function accountLoginRequest(loginForm) {
  return eRequest.post({
    url: "/api/user/login",
    data: loginForm,
  });
}
// 2.获取用户列表
export function getUserList(userData) {
  return eRequest.post({
    url: "/api/user/list",
    data: userData,
  });
}
// 3.根据用户id获取菜单
export function getUserMenu(id) {
  return eRequest.get({
    url: "" + id,
  });
}
