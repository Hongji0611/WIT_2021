import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: "",
      userId: "",
      title: "",
      body: "",
      comments: [],
    };
  }

  // componentDidMount() {
  //   return fetch('https://jsonplaceholder.typicode.com/posts/1/comments') //1. => 요청
  //     .then(response => response.json()) // => JSON body 를 JS로 변환
  // }

  // async mappingComments(){
  //   this.setState({comments: await this.componentDidMount()})
  // }

  render() {
    // this.mappingComments();
    
    return (
      <div className="post">
        <div className="board-row">
          <p className="font-bold">User</p>
          <p className="font-normal">{this.props.userId}</p>
        </div>
        <div className="board-row">
          <p className="font-bold">Title</p>
          <p className="font-normal">{this.props.title}</p>
        </div>
        <hr />
        <div className="board-row">
          <p className="font-bold">Body</p>
          <p className="font-normal">{this.props.body}</p>
        </div>
        {/* <hr />
        <div>
        {this.state.comments.map(comment =>
          <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
        )}
        </div> */}
      </div>
    );
  }
}

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      body: "",
    };
  }

  render() {
    return (
      <div className="comment">
        <div className="board-row">
          <p className="font-bold">{this.props.name}</p>
          <p className="font-normal">{this.props.email}</p>
        </div>
        <div className="board-row">
          {this.props.body}
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      url: 'https://jsonplaceholder.typicode.com/posts/',
      list: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(this.state.url) //1. => 요청
      ;
    return await response.json(); // => JSON body 를 JS로 변환
  }

  async mappingPost(){
    this.setState({list: await this.componentDidMount()})
  }

  render() {
    this.mappingPost();
    return (
      <div>
        {this.state.list.map(post =>
          <Post key={post.id} postId={post.postId} userId={post.userId} title={post.title} body={post.body} />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
