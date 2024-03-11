import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ReplyIcon from '@mui/icons-material/Reply';

function Comment(props) {

    let [isEditing, setEditing] = useState(false)
    let [isReplying, setReplying] = useState(false)
    let [newreply, setnewReply] = useState("")
    let [editedcomment, seteditcomment] = useState(props.comment.data)
    let deepcopy = JSON.parse(JSON.stringify(props.allcomments))
    
    
    function handleDelete(){
        let newtree = props.functions.deleteComment(deepcopy,props.comment.id)
        props.setCommentdata(newtree);
    }

    function handleEdit() {
      setEditing(true)
    }

    function editComment(){
      let newtree = props.functions.editComment(deepcopy, props.comment.id, editedcomment);
      props.setCommentdata(newtree)
      setEditing(false)

    }

    function handleReply(){
      setReplying(true);
    }

    function replyComment(){
      // debugger;
      let newtree = props.functions.addReply(deepcopy, props.comment.id, newreply);
      setReplying(false);
      props.setCommentdata(newtree);
      setnewReply("")
    }

    function canelReply() {
      setReplying(false);
      setnewReply("")
    }


  return (
    <div>
       <div className='comment_box mt-2' >
          {isEditing ? (
            <p>
                <input
                  type="text"
                  value={editedcomment}
                  onChange={(e)=>{seteditcomment(e.target.value)}}
                  placeholder="Enter some text"
                />
                <button onClick={editComment}>Edit</button>
            </p>
          ) : (
            <h5>
                 <span className='data_text' >{props.comment.data}</span>
            </h5>
          )}
          {isEditing || isReplying ? (<></>):(
          <p>
            <Button variant="outlined" size="small"  onClick={handleDelete} startIcon={<DeleteIcon />} className="m-1">Delete</Button>
            <Button variant="outlined"  size="small" onClick={handleEdit} startIcon={<EditIcon />} className="m-1">Edit</Button>
            <Button variant="outlined" size="small"  onClick={handleReply} startIcon={<ReplyIcon />} className="m-1">Reply</Button>
            </p>
          )}

          {isReplying ? (
              <div>
                <input
                  type="text"
                  value={newreply}
                  onChange={(e)=>{setnewReply(e.target.value)}}
                  placeholder="Enter some text"
                />
                <div>
                  <button onClick={replyComment}>Reply</button>
                  <button onClick={canelReply}>Cancel</button>
                </div>  
              </div>
          ): (<></>)}
         
       </div>
    </div>
  )
}

export default Comment