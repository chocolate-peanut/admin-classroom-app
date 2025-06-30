import { Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"

import logo from "assets/logo.svg"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClick = (e) => {
    navigate(e.key)
  }

  const items = [
    {
      label: "Teachers",
      key: "/teachers",
    },
    {
      label: "Classes",
      key: "/classes",
    },
  ]

  return (
    <div className="d-md-flex">
      <img
        src={logo}
        alt="Logo"
        style={{ height: "40px", marginRight: "24px" }}
      />
      <Menu
        style={{ fontWeight: 600, fontSize: "14px" }}
        onClick={onClick}
        selectedKeys={[location.pathname]}
        mode="horizontal"
        items={items}
      />
    </div>
  )
}

export default Header