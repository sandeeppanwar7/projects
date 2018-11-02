import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';
import {getPosts} from '../../../modules/posts';
import { Link } from 'react-router-dom';

const frontload = async props => await props.getPosts();

class HomePage extends Component {  
  render(){
    let {posts} = this.props;
    return (
      <Page id="homepage" title={"Post Listing"}>
        <p>Here is the List of Posts.</p>
        {typeof(posts)!='undefined' && typeof(posts.posts)!='undefined' && posts.posts.length>0?
          posts.posts.map((post)=>{
            return (
              <p key={post.id}>
                <Link to={"/posts/"+post.id}>{post.title}</Link>
              </p>
            )
          }):
          <div>Loading...</div>
        }
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({ getPosts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(HomePage));
