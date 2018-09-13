import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import io from 'socket.io-client';

import {test} from './api';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageUrl: '',
      fileList: []
    };

    this.handleChange = info => {
      const { fileList } = this.state;
      // if (info.file.status === "uploading") {
      //   this.setState({ loading: true });
      //   return;
      // }
      const formData = new FormData();
      formData.append('ymb', 1234)
      fileList.forEach(file => {
        formData.append('files', file);
      });

      console.log(formData)

      test(formData).then(data => {
        console.log(data)
      })
      let socket = io('http://localhost:8080');
      // socket.emit("send msg", { params: formData });
      // if (info.file.status === "done") {
      //   getBase64(info.file.originFileObj, imageUrl =>
      //     this.setState({
      //       imageUrl,
      //       loading: false
      //     })
      //   );
      // }
    };
  }

  render() {
    const props = {
      beforeUpload: file => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file]
        }));
        return false;
      }
    };

    return (
      <div>
        <Upload
            {...props}
            className="avatar-uploader"
            listType="picture-card"
            multiple
            onChange={this.handleChange}
          // action="/api/upload"
          // beforeUpload={beforeUpload}
            showUploadList={false}
        >
          <i className="iconfont icon-image" />
        </Upload>
      </div>
    );
  }
}

export default UploadImg;
