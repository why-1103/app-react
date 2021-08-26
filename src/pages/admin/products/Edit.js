import React from "react";
import { Form, Card, Input, Button } from "antd";

function Edit() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("vals", values);
  };

  const onSave = () => {
    const obj = form.getFieldsValue();
    console.log("obj", obj);
  };

  return (
    <Card title="编辑">
      <Form form={form}>
        {/* onFinish={onFinish} */}
        <Form.Item
          name="name"
          label="name"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onSave}>
            {/* htmlType="submit"  */}
            保存
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Edit;
