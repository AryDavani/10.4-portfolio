import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="flex column v-center contacts">
      <div>
        <p>Cole Alexander Smith III</p>
        <p>555-555-5555</p>
        <p>squashanyone@gmail.com</p>
      </div>
      <div className="flex h-center">
        <Link to="#">Facebook</Link>
        <Link to="#">GitHub</Link>
        <Link to="#">Email</Link>
      </div>
    </div>
  )
}
