
// data,replies,id
let comment = [
                {
                    "id" : 1000,
                    "data" : "hello",
                    "reply" : [
                        {
                            "id" : 2,
                            "data" : "hello world",
                            "reply" : [
                                {
                                    "id" : 3,
                                    "data" : "hello world 123",
                                    "reply" : []
                                },
                                {
                                    "id" : 4,
                                    "data" : "hello world 567",
                                    "reply" : []
                                }
                            ]
                        }
                    ]   
                },
                {
                    "id" : 5000,
                    "data" : "react js",
                    "reply" : [
                        {
                            "id" : 6,
                            "data" : "javascript",
                            "reply" : [ ]
                        }
                    ]
                }
            ]


function addComment(commenttree,data){
    let newComment = {id : Date.now()  ,data: data ,reply : []}
    commenttree.push(newComment)   
}    

function deleteComment(commenttree,id){
    for(i= 0; i< commenttree.length;i++){
        console.log(commenttree[i])
        if (commenttree[i].id == id ){
            commenttree.splice(i,1)
        }
    }
}


addComment(comment,"newComment")
addComment(comment,"newComment")
addComment(comment,"newComment")
addComment(comment,"newComment")
console.log(comment)
deleteComment(comment,5000)