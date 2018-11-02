import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Page from '../../components/page';
import {getPostDetail} from '../../../modules/posts';

const frontload = async props => await props.getPostDetail(+props.match.params.id);

class PostPage extends Component {  
  shouldComponentUpdate(nextProps){
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getPostDetail(+nextProps.match.params.id);
     
    }
    return true;
  }

  render(){
    let {post} = this.props;
    return (
      <Page id="postpage" title={"Post Detail"}>
        <p>Here is the Detail of Post.</p>
        {typeof(post)!='undefined' && typeof(post.post)!='undefined' && +post.post.hasOwnProperty('id') && post.post.id === +this.props.match.params.id?
          <div>
            <p>Title: {post.post.title} </p>
            <p>{post.post.body}</p>
          </div>
          :
          <div>Loading...</div>
        }
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  post: state.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({ getPostDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false
  })(PostPage));
