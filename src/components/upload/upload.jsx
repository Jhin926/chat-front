import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';

import {upload} from '@/api/api.js';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      imageUrl: '',
      fileList: []
    };

    this.handleChange = (info) => {
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

      // console.log(formData)

      // test(formData).then(data => {
      //   console.log(data)
      // })
    };
  }

  render() {
    const props = {
      beforeUpload: file => {
        console.log(file)
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        // const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isLt2M) {
        //   message.error('Image must smaller than 2MB!');
        // }
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file]
        }));
        const formData = new FormData();
        formData.append('ymb', 1234)
        formData.append('file', file);

        upload(formData).then(data => {
          console.log(data)
        })
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
            showUploadList={false}
        >
          <i className="iconfont icon-image"
              type="upload"
          />
        </Upload>
      </div>
    );
  }
}

export default UploadImg;
