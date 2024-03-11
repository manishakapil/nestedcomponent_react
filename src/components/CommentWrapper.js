import React from 'react'
import Comment from './Comment'
import { v4 as uuidv4 } from 'uuid';

function CommentWrapper(props) {
    function mapfnc(value,i){
        return (
          <div className="padleft15">
            <Comment 
              comment={value} 
              comments = {props.comments} 
              key={value.id} 
              functions ={props.functions}
              setCommentdata ={props.setCommentdata}
              allcomments = {props.allcomments}  
              />
              <CommentWrapper 
                key={uuidv4()}  
                comments={value.reply} 
                functions = {props.functions} 
                setCommentdata ={props.setCommentdata}
                allcomments = {props.allcomments}  
                />
          </div>
        );

    }
  return (
    <div>
        {props.comments.map(mapfnc)}
    </div>
  )
}

export default CommentWrapper
