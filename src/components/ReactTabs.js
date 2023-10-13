// A Tabbed component that renders tabs and single React Component as each tab content

import React from 'react';
import './ReactTabs.css';


function Tabs(props) {
    const { tabs, active } = props;
    const [activeTab, setActiveTab] = React.useState(active || 0);
    if(tabs.length === 0) {
        return null;
    }
    return (
        <div className="tabs">
            <div className="tab-headers">
                {tabs.map((tab, index) => (
                    <div className={"tab-header" + (index === activeTab ? " active": "")} key={index} onClick={() => setActiveTab(index)}>
                        {tab.title}
                    </div>
                ))}
            </div>
            <div className="tab-content">
                {tabs.map((tab, index) => (
                    <div className={"tab-content-item" + (index === activeTab ? "" : " hide")} key={index}>
                        {tab.component}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs;