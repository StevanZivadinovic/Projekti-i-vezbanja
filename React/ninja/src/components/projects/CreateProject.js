import React, { Component } from 'react'

 class CreateProject extends Component {

     state ={
        title:'',
        content:""
     }
     handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state);
     };

     handleChange = (e)=>{
       this.setState({
           [e.target.id]:e.target.value,//ovo e.target.id je u stvari email ili password, zavisno od toga koji input unosis u trenutku
       })
     };
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create Project</h5>
                    <div className='input-field'>
                        <label htmlFor='Title'>Title</label>
                        <input type='text' id='Title' onChange={this.handleChange}/>
                    </div>

                    <div className='input-field'>
                        <label htmlFor='content'>Peoject Content</label>
                        <textarea  id='content'  className='materialize-textarea ' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button> 
                    </div>
                </form>
                
            </div>
        )
    }
}

export default CreateProject;
