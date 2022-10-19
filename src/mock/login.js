import Mock from 'mockjs'

Mock.mock('/api/login', 'post', (req, res) => {
  return {
    status: 200,
    message: '成功',
    data: {
      token: 'asdasdasdsadadsadasdehsdjskdhajhdkljasdasdasdasdasdas'
    }
  }
})
Mock.mock('/api/logout', 'get', (req, res) => {
  return {
    status: 200,
    message: '成功'
  }
})
