import eRequest from '@/service/index'
// 1.登录接口
export function getTableData(queryData) {
  return eRequest.post({
    url: '/tableList',
    data: queryData
  })
}
