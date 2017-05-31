import React from 'react';
import jQuery from 'jquery';
import ReactDOM from 'react-dom';
import CommentBox from './Components/comment-box'

jQuery(function() {
  ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box'),
    function(){
      console.timeEnd('react-app')
    }
  );
})
