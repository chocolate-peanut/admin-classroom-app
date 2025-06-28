import React, { useState, useEffect } from "react"
import { Button, Divider, Space, Spin } from "antd"
import { PlusOutlined } from "@ant-design/icons"

import ClassForm from "components/Classes/Form"
import ClassList from "components/Classes/index"

const ClassesPage = () => {
  const [classes, setClasses] = useState([])
  const [teachers, setTeachers] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchClasses = async () => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:8080/api/classes")
      const data = await response.json()
      setClasses(data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchTeachers = async () => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:8080/api/teachers")
      const data = await response.json()
      setTeachers(data.data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchClasses()
    fetchTeachers()
  }, [])

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: "0px", fontWeight: 800 }}>
          {showCreateForm ? "Add Class" : "Classes"}
        </h2>
        <div style={{ display: "flex", gap: "8px" }}>
          {showCreateForm && (
            <Button
              color="default"
              variant="outlined"
              onClick={() => setShowCreateForm(false)}
            >
              Back
            </Button>
          )}
          {!showCreateForm && (
            <Button
              color="primary"
              variant="solid"
              onClick={() => setShowCreateForm(true)}
            >
              <div>
                <Space style={{ paddingRight: "8px" }}>
                  <PlusOutlined />
                </Space>
                <span>Add Class</span>
              </div>
            </Button>
          )}
        </div>
      </div>

      <Divider />
      {
        loading ? (
          <Spin size="large" />
        ) : (
          showCreateForm ? (
            <ClassForm
              teachers={teachers}
              onSuccess={fetchClasses}
              setShowCreateForm={setShowCreateForm}
            />
          ) : <ClassList classes={classes} />
        )
      }
    </div>
  )
}

export default ClassesPage
