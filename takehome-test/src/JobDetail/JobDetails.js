// import { useParams } from "react-router-dom";
import { LinkOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined, ArrowDownOutlined, UploadOutlined } from '@ant-design/icons';
import {Button, Menu, Form, Input, Checkbox, Upload, message} from 'antd';
// import {reCAPTCHA} from "react-google-recaptcha"

const JobDetails = () => {
  // const { id } = useParams();
  const [form] = Form.useForm();
  const props = {
    beforeUpload: (file) => {
      const isPDF = file.type === 'application/pdf';
  
      if (!isPDF) {
        message.error(`${file.name} is not a pdf file`);
      }
  
      return isPDF || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <div className='job-details'>
      <div className="job-hero py-5">
        <div className="container">
          <div className="row">
            <div className="col col-md-6 col-xs-12">
              <h3 className="text-3xl w-75">Software Engineer (Backend)</h3>
              <div className="cta-buttons"> 
                <Button className='cta-button' href="#"><LinkOutlined /></Button>
                <Button className='cta-button' href="#"><FacebookOutlined /></Button>
                <Button className='cta-button' href="#"><TwitterOutlined /></Button>
                <Button className='cta-button' href="#"><LinkedinOutlined /></Button>
              </div>
              <p>Apply for this job now!</p>
              <Button href="#jobs-apply" className='btn-apply'><ArrowDownOutlined /></Button>
            </div>

            <div className="col col-md-6 col-xs-12">
              <div className='job-summary'>
                <ul className='list-none'>
                  <li className='mb-4'>
                    <p className='text-grey mb-0 text-xs'>Posted on</p>
                    <p className='text-base mb-0 font-semibold'>July 12, 2022</p>
                  </li>
                  <li className='mb-4'>
                    <p className='text-grey mb-0 text-xs'>Employment Type</p>
                    <p className='text-base mb-0 font-semibold'>Full Time</p>
                  </li>
                  <li className='mb-4'>
                    <p className='text-grey mb-0 text-xs'>Experience Range</p>
                    <p className='text-base mb-0 font-semibold'>0 - 1 years</p>
                  </li>
                  <li className='mb-4'>
                    <p className='text-grey mb-0 text-xs'>Salary Range</p>
                    <p className='text-base mb-0 font-semibold'>Rp 6.000.000,00 - Rp 9.000.000,00</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="jobs-nav-container">
        <div className='container'>
          <Menu mode="horizontal" className="jobs-nav mb-3">
            <Menu.Item >
              <Button href="#jobs-overview" title="Overview" >Overview</Button>
            </Menu.Item>
            <Menu.Item>
              <Button href="#jobs-apply" title="Overview" >Apply</Button>
            </Menu.Item>
          </Menu>
        </div>
      </div>

      <div id="jobs-overview" className="my-3 py-5">
        <div className="container">
          <h3 className="">Overview</h3>
          <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor ultricies nisi, accumsan porttitor risus hendrerit ut. Nunc in tortor dapibus, ultricies odio in, dapibus nisi. Praesent cursus eros id finibus sollicitudin. Ut tristique erat ut arcu mollis, eget lacinia ipsum finibus. Duis id metus vitae mauris vehicula fermentum ac vestibulum orci. Curabitur imperdiet commodo lacus, tristique condimentum leo tristique at. Donec congue condimentum neque, non vulputate lorem consequat vel. Duis at urna sit amet risus rutrum aliquet. Phasellus ultrices metus sed ex molestie placerat. Donec nunc sem, malesuada a risus vel, commodo vestibulum odio. Donec molestie nisl eget turpis maximus, in volutpat nulla consectetur. Vivamus commodo blandit lacinia. Nulla blandit, ante in pretium tempus, purus sapien mattis ante, in viverra erat nisl quis dui. Integer congue pulvinar urna ut pellentesque.</p>

          <h4>Minimum Requirements</h4>
          <ul className="mb-3">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>

          <h4>Job Description</h4>
          <ul className="mb-3">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </div>
      </div>

      <div id="jobs-apply" className="my-3 py-5">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12 col-md-5">
              <h3>Apply</h3>
              <p>Fill in your contact information, and our team will contact you shortly</p>
            </div>
            <div className="col col-xs-12 col-md-7">
            <Form
              name="apply-form"
              layout="vertical"
              form={form} 
              className="form-apply"
            >
              <Form.Item label="Name"  rules={[{ required: true, message: 'Please input your Name' }]}>
                <Input placeholder="test" />
              </Form.Item>
              <Form.Item label="Email"  rules={[{ required: true, message: 'Please input your Email' }]}>
                <Input placeholder="test@mail.con" />
              </Form.Item>
              <Form.Item label="Phone Number"  rules={[{ required: true, message: 'Please input your Phone Number' }]}>
                <Input placeholder="08xxxxxxxx" />
              </Form.Item>
              <Form.Item className='upload-field' label="Resume" valuePropName="fileList">
                <div className="d-flex flex-wrap align-items-center">
                  <div class="d-inline-block">
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Upload file</Button>
                    </Upload>
                  </div>
                  <div class="d-inline-block px-3">
                    <p className='mb-0'>Max. file size 5MB</p>
                    <p className='mb-0'>Supported file type : PDF</p>
                  </div>
                </div>
              </Form.Item>
              <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
                <Checkbox>By proceeding, I agree that MIG's representative may contact me by email, phone, or SMA (including by automatic telephone dialing system) at the email address or number I provide inclugin for marketing purposes</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className='w-100'>Submit</Button>
              </Form.Item>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
 
export default JobDetails;