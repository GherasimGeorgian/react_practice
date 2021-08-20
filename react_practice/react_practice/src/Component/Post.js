import React,{Component} from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../actions/postActions'
// import axios from 'axios'
class Post extends Component{


    // state = {
    //     post:null
    // }

    // componentDidMount(){
    //     console.log(this.props)
    //     let id= this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //         .then(res =>{
    //             this.setState({
    //                 post:res.data
    //             })
    //             console.log(res)
    //         })
        
    // }
    handleClickDeletePost = () =>{
        this.props.deletePost(this.props.post.id);
        //redirect to homepage
        this.props.history.push('/')
    }

    render(){

        

        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClickDeletePost}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) 
        : 
        (
            <div className="center">
                Loading post...
            </div>
            ) 

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    //accesam post_id din link
    let id = ownProps.match.params.post_id;
    return {
        post:state.postR.posts.find(post => post.id === id)
    } 
}


const mapDispatchToProps = (dispatch) => {
    return {
        deletePost:(id) => {dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)