import React from 'react';
import "../../node_modules/antd/dist/antd.css";
 import  {Avatar} from 'antd';
import { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import  Profilechanger from './profilechanger';
import  Pic1 from "../components/pics/pic1.jpeg";
import  Pic2 from "../components/pics/pic2.jpeg";
import  Pic3 from "../components/pics/pic3.jpeg";
import  Pic4 from "../components/pics/pic4.jpeg";


 class Profilepic extends Component{
     constructor(props){
         super(props);
         this.state={
             profileImage:""
         }
     }
     handleImageChange = (profileImage) =>{
         this.setState({profileImage})
     }
     render(){
         return(
             <div >
             <Avatar size = {78} icon = {<PersonIcon/>}/>
             <Profilechanger handleImageChange={this.handleImageChange}
             pic1={Pic1} pic2={Pic2}  pic3={Pic3} pic4={Pic4}/>
             </div>
         );
     }
 }

 export default Profilepic;