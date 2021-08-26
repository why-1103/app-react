import React, { useEffect, useState } from "react";
import { Card, Table, Button, Popconfirm } from "antd";
import { withRouter } from "react-router-dom";
import { getFiles } from "../../../service/file";

function List(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    getFiles().then((res) => {
      console.log(res);
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const columns = [
    {
      title: "序号",
      key: "_id",
      width: 80,
      align: "center",
      render: (txt, record, index) => index + 1,
    },
    {
      title: "名称",
      dataIndex: "name",
    },
    // {
    //   title: "主图",
    //   dataIndex: "url",
    //   render: (txt, record) =>
    //     record.url ? (
    //       <img src={record.url} alt={record.name} style={{ width: "120px" }} />
    //     ) : (
    //       "暂无图片"
    //     ),
    // },
    {
      title: "发行时间",
      dataIndex: "uploadDate",
    },
    {
      title: "文件大小",
      dataIndex: "contentLength",
    },
    {
      title: "操作",
      render: (txt, record, index) => {
        return (
          <div>
            <Button
              type="primary"
              size="small"
              onClick={() => {
                // 跳转到edit页面，传递id作为参数
                props.history.push(`/admin/products/edit/${record.uid}`);
              }}
            >
              修改
            </Button>
            <Popconfirm
              title="确定删除此项？"
              onCancel={() => console.log("用户取消删除")}
              onConfirm={() => {
                // // console.log("用户确认删除");
                // // 此处调用api接口进行相关操作
                // delOne(record._id).then((res) => {
                //   loadData();
                // });
              }}
            >
              <Button style={{ margin: "0 1rem" }} type="danger" size="small">
                删除
              </Button>
            </Popconfirm>
            <Button
              size="small"
              onClick={() => {
                // 修改在售状态
                // modifyOne(record._id, { onSale: !record.onSale }).then(
                //   (res) => {
                //     loadData();
                //   }
                // );
              }}
            >
              {record.onSale ? "下架" : "上架"}
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Card
      title="列表"
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => props.history.push("/admin/products/edit")}
        >
          新增
        </Button>
      }
    >
      <Table bordered size="small" dataSource={data} columns={columns} />
    </Card>
  );
}

export default withRouter(List);
