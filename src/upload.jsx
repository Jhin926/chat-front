import React, { Component } from "react";
import { Upload, Icon, message } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageUrl: ""
    };

    this.handleChange = info => {
      if (info.file.status === "uploading") {
        this.setState({ loading: true });
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            loading: false
          })
        );
      }
    };
  }

  render() {
    return (
      <div>
        <Upload
          multiple
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="/api/upload"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          <i className="iconfont icon-image" />
        </Upload>
      </div>
    );
  }
}

export default UploadImg;
