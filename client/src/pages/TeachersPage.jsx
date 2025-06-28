import React, { useState, useEffect } from "react"
import { Button, Divider, Space, Spin } from "antd"
import { PlusOutlined } from "@ant-design/icons"

import TeacherForm from "components/Teachers/Form"
import TeacherList from "components/Teachers/index"

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(false)

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
    fetchTeachers()
  }, [])

  return (
    <div style={{ padding: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ margin: "0px", fontWeight: 800 }}>
          {showCreateForm ? "Add Teacher" : "Teachers"}
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
                <span>Add Teacher</span>
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
            <TeacherForm
              onSuccess={fetchTeachers}
              setShowCreateForm={setShowCreateForm}
            />
          ) : <TeacherList teachers={teachers} />
        )
      }
    </div>
  )
}

export default TeachersPage
