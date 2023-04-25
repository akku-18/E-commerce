import React from "react";
import "./success.css";

export default function Success() {
  return (
    <div class="card">
      <div className="success">
        <i class="checkmark">✓</i>
      </div>
      <h1 className="success-head">Success</h1>
      <p className="success-p">
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>
    </div>
  );
}
