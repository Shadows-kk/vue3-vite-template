import menus from './menus'
import ele_icons from './ele_icons'
import eForm from './eForm'
import eTable from './eTable'
import popForm from './ePopForm'
import fullScreenCpn from './fullScreenCpn'
import Icon from './svg'
const components = [
  menus,
  ele_icons,
  eForm,
  eTable,
  popForm,
  fullScreenCpn,
  Icon
]
export default {
  install(app) {
    components.map((item) => {
      app.use(item)
    })
  }
}
