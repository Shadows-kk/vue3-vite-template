//mock.js 文件
import Mock from 'mockjs'
const Random = Mock.Random

const getTableList = () => {
  let tableList = []
  for (let i = 0; i < 20; i++) {
    let newListObject = {
      address: Random.county(true), //  Random.csentence( min, max )随机产生一个中文标题，长度默认在5-30之间
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    tableList.push(newListObject)
  }
  return tableList
}

Mock.mock('/api/tableList', 'post', getTableList)
