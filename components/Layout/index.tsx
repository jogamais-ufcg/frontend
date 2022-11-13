import React from 'react'
import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div>{props.children}</div>
  )
}

export default Layout;
