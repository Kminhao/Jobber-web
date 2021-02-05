import React from 'react';
import './style.css'

interface PageHeaderprops {
    title: string;
    description: string;
}

const Index: React.FC<PageHeaderprops> = ({ title, description }) => {
    return (
        <div className="page-header">
            <div id="title">
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>
        </div>
    );
}

export default Index;