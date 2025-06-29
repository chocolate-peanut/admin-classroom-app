import { Form, Input, Button, Select } from "antd"

import api from "utils/api"
import { levels } from "./assets"

const { Option } = Select

const ClassForm = ({
  teachers,
  onSuccess,
  setShowCreateForm
}) => {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      const selectedTeacher = teachers.find(t => t.id === values.teacher_id)
      if (!selectedTeacher) {
        alert("Invalid teacher selected.")
        return
      }

      await api.post("/classes", {
        level: values.level,
        name: values.name,
        teacherEmail: selectedTeacher.email
      })

      alert("Class added successfully!")
      form.resetFields()
      onSuccess()
      setShowCreateForm(false)
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Failed to add class."
      alert(errorMsg)
    }
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        label="Class Level"
        name="level"
        rules={[{ required: true, message: "Class Level is required." }]}
      >
        <Select placeholder="Select a class level">
          {levels.map(level => (
            <Option key={level} value={level}>{level}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Class Name"
        name="name"
        rules={[{ required: true, message: "Class Name is required." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Form Teacher"
        name="teacher_id"
        rules={[{ required: true, message: "Form Teacher is required." }]}
      >
        <Select placeholder="Select a form teacher">
          {teachers.map(teacher => (
            <Option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Add Class
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ClassForm
