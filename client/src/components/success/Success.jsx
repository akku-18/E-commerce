import React from "react";
import "./success.scss";

export default function Success() {
  return (
    <div className="card">
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <h1 className="success-head">Success</h1>
      <p className="success-p">
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
}
