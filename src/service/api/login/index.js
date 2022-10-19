import eRequest from '@/service/index'
// 1.登录接口
export function accountLoginRequest(loginForm) {
  return eRequest.post({
    url: '/login',
    data: loginForm
  })
}
export function accountLogout() {
  return eRequest.get({
    url: '/logout'
  })
}
