import React from "react"
import { Menu } from "antd"
import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onClick = (e) => {
    navigate(e.key)
  }

  const items = [
    {
      label: "Classes",
      key: "/classes",
    },
    {
      label: "Teachers",
      key: "/teachers",
    },
  ]

  return (
    <Menu
      style={{ fontWeight: 600, fontSize: "14px" }}
      onClick={onClick}
      selectedKeys={[location.pathname]}
      mode="horizontal"
      items={items}
    />
  )
}

export default Header