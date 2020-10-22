import React ,{Component}from 'react';
import "../../node_modules/antd/dist/antd.css";
import { Modal, Button } from 'antd';

 class Profilechanger extends Component{
 constructor(props){
    super(props);
    this.state={visible: false,
        imagesArray :[
            props.pic1,
            props.pic2,
            props.pic3,
            props.pic4
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
                 <img src = {image}
                 onClick={() => this.props.handleImageChange(image)}/>
             )
         })
         return(
            <>
            <Button type="primary" onClick={this.showModal}>
              Change Pic
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}>
             {imageMapper}
            </Modal>
          </>
         );
     }
 }

 export default Profilechanger;