import React from "react";
import { Container, Header } from 'semantic-ui-react';

function NotFoundPage() {
  return (
    <div>
      <h1>Error 404</h1>
      <a className="ui dropdown item">
        Messages
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item">
            <i className="dropdown icon"></i>
            <span className="text">Categories</span>
            <div className="menu">
              <div className="item">Unread</div>
            </div>
          </div>
          <div className="item">Archive</div>
        </div>
      </a>
    </div>
  );
}

export default NotFoundPage;
