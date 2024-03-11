 
function useFnc() {

    function addComment(commenttree,data){
        let newComment = {id : Date.now()  ,data: data ,reply : []}
        let newtree =  [...commenttree, newComment]  
        localStorage.setItem("comments", JSON.stringify(newtree))
        return newtree;
    }    
    
    function deleteComment(commenttree,id){

        // debugger;
        function dfs(nodes, id) {

            for(let i=0; i<nodes.length; i++){
                if(nodes[i].id===id) {
                    return true;
                }
                if (dfs(nodes[i].reply, id)) {
                    let idx = nodes[i].reply.findIndex((v) => v.id === id)
                    nodes[i].reply.splice(idx, 1);
                    return false
                }
                

            }
        }

        let res = dfs(commenttree, id);
        if (res) {
            let idx = commenttree.findIndex((v) => v.id === id)
            commenttree.splice(idx, 1);
        }
        localStorage.setItem("comments", JSON.stringify(commenttree))
        return commenttree;

    }

    function editComment(commenttree,id, newdata){
        let queue = [...commenttree]
    
        while (queue.length > 0) { // breath first search []
            let top = queue.pop()
            if (top.id === id) {
                top.data= newdata;
                break
            }
            top.reply.forEach((reply) => queue.push(reply))
        }
        localStorage.setItem("comments", JSON.stringify(commenttree))
        return commenttree
    }

    function addReply(commenttree,id, newdata){
       
        let queue = [...commenttree]
        let newComment = {id : Date.now()  ,data: newdata ,reply : []}
    
        while (queue.length > 0) { // breath first search []
            let top = queue.pop()
            if (top.id === id) {
                top.reply.push(newComment)
                break
            }
            top.reply.forEach((reply) => queue.push(reply))
        }
        localStorage.setItem("comments", JSON.stringify(commenttree))
        return commenttree
    
    }
    
    return {addComment,deleteComment,editComment,addReply}

}

export default useFnc
