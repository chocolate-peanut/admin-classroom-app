import { useState, useEffect } from "react"
import { Button, Divider, Space, Spin } from "antd"
import { PlusOutlined } from "@ant-design/icons"

import TeacherForm from "pages/Teachers/Form"
import TeacherList from "pages/Teachers/List"

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchTeachers = async () => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:8080/api/teachers")
      const data = await response.json()
      setTeachers(data.data || [])
    } catch (err) {
      alert(err)
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
      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-2">
        <h2
          className="text-center text-md-start"
          style={{ margin: "0px", fontWeight: 800 }}>

          {showCreateForm ? "Add Teacher" : "Teachers"}
        </h2>
        <div
          className="d-flex flex-column flex-md-row align-items-center gap-2"
          style={{ marginTop: showCreateForm ? "0" : "0" }}
        >
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
          ) : (
            (teachers?.length > 0) ?
              <TeacherList teachers={teachers} /> :
              <p>There's no existing teachers. Please add new teacher.</p>
          )
        )
      }
    </div>
  )
}

export default TeachersPage
