import React from 'react';
import Navbar from '../../components/layout/navbar/Navbar';
import Content from '../../components/planning/content/Content';
export default function Planning() {
  return (
    <div>
        <Navbar logo_color="#000" background="#ffff" link_color="#000" />
        <Content />
    </div>
  );
}
