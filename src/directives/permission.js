// 按钮级别权限控制
import { useRuleMenu } from '@/pinia'
const ruleMenu = useRuleMenu()
function hasPermision(value, el = false) {
  if (!Array.isArray(value)) {
    throw new Error(`需要配置权限，例如 v-permission=['getxxxxx']`)
  }
  const hasAuth = value.findIndex((i) => ruleMenu.rules.includes(i)) != -1
  if (el && !hasAuth) {
    // 节点存在且没有权限,移除节点
    el.parentNode && el.parentNode.removeChild(el)
  }
  return hasAuth
}
// 权限判断，需要后端从接口返回权限信息，如ruleMenu等
export default {
  install(app) {
    app.directive('permision', {
      mounted(el, binding) {
        // binding.value就是v-permission绑定的值
        hasPermision(binding.value, el)
      }
    })
  }
}
