import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import ChatBot from './ChatBot'

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget/>
        <WidgetTags />
        <ChatBot />
    </aside>
  )
}

export default RightSidebar