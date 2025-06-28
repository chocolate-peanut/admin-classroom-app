import React from "react"
import { Form, Input, Button, Select } from "antd"

import api from "utils/api"

const { Option } = Select

const TeacherForm = ({
  onSuccess,
  setShowCreateForm
}) => {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      await api.post("/teachers", values)
      alert("The teacher was added successfully!")
      form.resetFields()
      onSuccess()
      setShowCreateForm(false)
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to add teacher."
      alert(errorMsg)
    }
  }

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Name is required." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: "Subject is required." }]}
        >
          <Select placeholder="Select a subject">
            <Option value="English Language">English Language</Option>
            <Option value="Mother Tongue Language">Mother Tongue Language</Option>
            <Option value="Mathematics">Mathematics</Option>
            <Option value="Science">Science</Option>
            <Option value="Art">Art</Option>
            <Option value="Music">Music</Option>
            <Option value="Physical Education">Physical Education</Option>
            <Option value="Social Studies">Social Studies</Option>
            <Option value="Character and Citizenship Education">
              Character and Citizenship Education
            </Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: "Email Address is required." },
            { type: "email", message: "Invalid email format." }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[
            { required: true, message: "Contact Number is required." },
            {
              pattern: /^\d{5,15}$/,
              message: "Contact number must be 5-15 digits."
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Add Teacher
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default TeacherForm
