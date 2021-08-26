import Mock from "mockjs";

// mock方法,详细的可以看官方文档
const Random = Mock.Random;

const data = [
  {
    url: "/upload/file",
    type: "post",
    response: () => {
      return {
        code: 200,
        data: {
          name: "file",
          url: Random.image("200x100", "#50B347", "#FFF", "Mfile"),
        },
      };
    },
  },
  {
    url: "/getList/file",
    type: "get",
    response: () => {
      let fileList = [];
      for (let i = 0; i < 20; i++) {
        let file = {};
        file.uid = Random.id();
        file.name = Random.title(3, 5);
        file.url = Random.image("200x100", "#50B347", "#FFF", Random.title(1));
        file.uploadDate = Random.datetime("yyyy-MM-dd A HH:mm:ss");
        file.contentLength = Random.float(0);
        fileList.push(file);
      }
      return {
        code: 200,
        data: fileList,
      };
    },
  },
];

export default data;
