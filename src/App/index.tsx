import React, { useState } from "react";
import "./app.scss";
import { Upload, Dialog, Button, Input } from "element-react";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>逐梦临时免费云盘</h1>
      </div>
    </header>
  );
};

export default function App() {
  const [dialogVisible, setdialogVisible] = useState(false);
  const [fileObj, setfileObj] = useState({
    name: "",
    url: "",
  });

  const onUpCallback = () => {};

  const onClickFile = (file: any) => {
    // console.log(file);
    showUpFileDialog(file?.name, file?.response?.img_url);
  };

  const showUpFileDialog = (name: string, url: string) => {
    setfileObj({
      name,
      url,
    });
    setdialogVisible(true);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <div className="comtent">
        <Dialog
          title="上传成功！"
          size="tiny"
          visible={dialogVisible}
          onCancel={() => setdialogVisible(false)}
          lockScroll={false}
        >
          <Dialog.Body>
            <span>
              文件：{fileObj.name}，上传成功，分享链接在 36h 内会保证其有效性！
            </span>
            <Input
              style={{ marginTop: 10 }}
              placeholder="这是文件链接"
              value={fileObj.url}
            />
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => setdialogVisible(false)}>取消</Button>
            <Button type="primary" onClick={() => setdialogVisible(false)}>
              分享
            </Button>
          </Dialog.Footer>
        </Dialog>
        <div className="website-comtent">
          <Upload
            className="upload-demo"
            drag
            action="//img-s.zmide.com/upload_img.php"
            multiple={false}
            onPreview={onClickFile}
            tip={
              <div className="el-upload__tip">
                只能上传 jpg/png 文件，且不超过 20mb
              </div>
            }
          >
            <i className="el-icon-upload"></i>
            <div className="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
          </Upload>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-body">
          <samp style={{ color: "#F56", fontWeight: "bold" }}>
            请勿上传违反国际和中华人民共和国法律的文件，违者后果自负。
          </samp>
          <br />
          <samp>Copyright Ⓒ ZMIDE Studio, ORG. All rights reserved.</samp>
        </div>
      </footer>
    </div>
  );
}
