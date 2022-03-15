import React from 'react';
import './Story.css'

const Story = (props) => {
    const{ type,body,datetime,title,image}=props.story;
    return (
        <div className='col-4 '>
            <div className="card mb-3">
                <img src={Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    {/* <h5 className="card-title">{id}</h5> */}
                    <p className="card-text">body : {body}</p>
                    <p className="card-text">type : {type }</p>
                    <p className="card-text">: {datetime}</p>
                    <p className="card-text"> {title}</p>
                    <p className="card-text">image : {image}</p>
                  
                </div>
                <button type="button" className="btn btn-success" onClick={() => props.handleAddBook(props.book)}  ><i className="fas fa-user-plus"></i> Hire me</button>
            </div>
            
        </div>
    );
};

export default Story;