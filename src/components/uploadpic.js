import React, { Component } from 'react';
import  {createData} from '../actions/index';
import {connect} from 'react-redux';
// import axios from 'axios';

class FilesUpload extends Component {
constructor(props){
    super(props);
    this.onFileChange=this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state={
        profileImg:""
    }
}
onFileChange(e){
    this.setState({profileImg:e.target.files[0]})
}

onSubmit(e){
    e.preventDefault()
    console.log(this.state)
    this.props.createData(this.state);

    // const formData = new FormData()
    // formData.append('profileImg',this.state.profileImg)
    // axios.post("http://localhost:5000/logindata",formData,{})
    // .then (res => {
    //     console.log(res)
    // })
}
    render() {
        return (
            <>
            <form>
                <div >
                    <input type="file" onChange = {this.onFileChange} />
                </div>
                <div >
                    <button className="btn btn-primary"   onSubmit={this.onSubmit}  type="submit">
                        Upload</button>
                </div>
                </form>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createData: (data) => dispatch(createData(data))
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(FilesUpload);