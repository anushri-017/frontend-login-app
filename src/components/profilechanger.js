import React ,{Component}from 'react';
import "../../node_modules/antd/dist/antd.css";
import { Modal, Button } from "antd";
import FilesUpload from './uploadpic';
  
 class Profilechanger extends Component{
 constructor(props){
    super(props);
    this.state={visible: false,
        imagesArray :[
            props.pic1,
            props.pic2,
            props.pic3
        ]}
}
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
    
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
     render(){
         const imageMapper = this.state.imagesArray.map((image,index)=>{
             return(
                 <img src = {image} alt="profile"
                 onClick={() => this.props.handleImageChange(image)}/>
             )
         })
         return(
            <>
            <Button type="primary" onClick={this.showModal}>
              Change Pic
            </Button>
            <Modal
              title="Choose a picture"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}>
             {imageMapper}
            </Modal>
            <br/>
            <FilesUpload/>
          </>
         );
     }
 }

 export default Profilechanger;