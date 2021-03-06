import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { EditDropdown, Icon } from '@components'
import All from './All'
import Products from './Products'
import Library from './Library'
import Jobs from './Jobs'
import Blogs from './Blogs'
import Community from './Community'
import HCM from './HCM'
import './ContentMgt.scss'

const ContentMgt = () => {
  const [key, setKey] = useState('all')

  return (
    <>
      <div className="d-flex mb-4">
        <span className="dsl-b14 text-400">Super Admin</span>
        <Icon name="far fa-chevron-right ml-2" size={12} color="#969faa" />
        <span className="dsl-m14 ml-2">Content Mgt</span>
      </div>
      <div className="super-admin-contentmgt">
        <div className="d-flex justify-content-between card-header">
          <p className="dsl-b22 bold">Content Moderation</p>
          <EditDropdown options={['Add Content']} onChange={() => {}} />
        </div>
        <Tabs className="card-content pb-3" defaultActiveKey="all" activeKey={key} onSelect={e => setKey(e)}>
          <Tab eventKey="all" title="All">
            <All />
          </Tab>
          <Tab eventKey="products" title="Products">
            <Products />
          </Tab>
          <Tab eventKey="library" title="Library">
            <Library />
          </Tab>
          <Tab eventKey="jobs" title="Jobs">
            <Jobs />
          </Tab>
          <Tab eventKey="blogs" title="Blogs">
            <Blogs />
          </Tab>
          <Tab eventKey="community" title="Community">
            <Community />
          </Tab>
          <Tab eventKey="hcm" title="HCM">
            <HCM />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default ContentMgt
