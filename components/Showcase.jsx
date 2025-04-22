"use client";
import React, { useState } from 'react';
import './Css/Showcase.css';

const Showcase = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedFeature, setExpandedFeature] = useState(null);

  const features = {
    all: [
      {
        id: 'newModules',
        icon: '🆕',
        title: 'Newly Revised Modules',
        description: 'Latest revised modules for Anthropology, History, and more',
        details: 'We constantly update our content to match the latest curriculum changes.'
      },
      {
        id: 'aiChat',
        icon: '🤖',
        title: 'AI-Chat Enhancement',
        description: 'Smarter, more powerful AI assistance',
        details: [
          'Additional Span Report added',
          'Better filtered text and appropriate styling',
          'Copy user questions with one tap',
          'One-tap note saving with question as title',
          'Ability to stop ongoing AI requests',
          'Ultra sleek UI with multi-line editable input'
        ]
      },
      {
        id: 'timetable',
        icon: '📝',
        title: 'Advanced TimeTable',
        description: 'Organize your class schedule effortlessly',
        details: [
          'Fully customizable interface',
          '20 preset subject colors for better organization',
          'Drag and drop interface optimized for small screens'
        ]
      },
      {
        id: 'notes',
        icon: '📝',
        title: 'Advanced Note-Taking',
        description: 'Powerful note management system',
        details: [
          'Add, edit, search, and organize notes',
          'Classic grid layout with intuitive controls',
          'Long-press to delete notes',
          'Custom background colors for better visual organization'
        ]
      },
      {
        id: 'pdf',
        icon: '🔥',
        title: 'Advanced PDF Management',
        description: 'Smarter PDF handling for your textbooks',
        details: [
          'Auto-saves last visited page',
          'Favorite/bookmark system for quick access',
          'Organize your digital library efficiently'
        ]
      },
      {
        id: 'gpa',
        icon: '🎯',
        title: 'GPA & Academic Tracking',
        description: 'Track your academic progress',
        details: [
          'Set and monitor GPA goals',
          'Save current GPA to track improvements',
          'Add unlimited subjects for comprehensive tracking'
        ]
      },
      {
        id: 'ui',
        icon: '✨',
        title: 'Premium UI & UX',
        description: 'Beautiful, intuitive interface',
        details: [
          'Sleek modern design',
          'Improved chapter modals for readability',
          'Dynamic status bar theming',
          'Draggable modals for small screens'
        ]
      },
      {
        id: 'performance',
        icon: '🔄',
        title: 'Optimized Performance',
        description: 'Faster, smoother experience',
        details: [
          'Reduced loading times',
          'Enhanced AI response quality',
          'More workflow control',
          'Confirmation dialogs to prevent accidental deletions',
          'Numerous bug fixes'
        ]
      }
    ],
    ai: [
      {
        id: 'aiChat',
        icon: '🤖',
        title: 'AI-Chat Enhancement',
        description: 'Smarter, more powerful AI assistance',
        details: [
          'Additional Span Report added',
          'Better filtered text and appropriate styling',
          'Copy user questions with one tap',
          'One-tap note saving with question as title',
          'Ability to stop ongoing AI requests',
          'Ultra sleek UI with multi-line editable input'
        ]
      }
    ],
    organization: [
      {
        id: 'timetable',
        icon: '📝',
        title: 'Advanced TimeTable',
        description: 'Organize your class schedule effortlessly',
        details: [
          'Fully customizable interface',
          '20 preset subject colors for better organization',
          'Drag and drop interface optimized for small screens'
        ]
      },
      {
        id: 'notes',
        icon: '📝',
        title: 'Advanced Note-Taking',
        description: 'Powerful note management system',
        details: [
          'Add, edit, search, and organize notes',
          'Classic grid layout with intuitive controls',
          'Long-press to delete notes',
          'Custom background colors for better visual organization'
        ]
      }
    ]
  };

  const toggleFeature = (id) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  return (
    <section id="descriptions">
          <div className="showcase-container">
        <h1 className="showcase-header">Freshman Module Plus Features Descriptions</h1>
        <p className="showcase-subheader">Discover what's new in your ultimate study companion</p>
        
        <div className="filter-tabs">
          <button 
            className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Features
          </button>
          <button 
            className={`tab-button ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            AI Features
          </button>
          <button 
            className={`tab-button ${activeTab === 'organization' ? 'active' : ''}`}
            onClick={() => setActiveTab('organization')}
          >
            Organization
          </button>
        </div>
        
        <div className="features-grid">
          {features[activeTab].map((feature) => (
            <div 
              key={feature.id}
              className={`feature-card ${expandedFeature === feature.id ? 'expanded' : ''}`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="feature-header">
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <span className="feature-arrow">
                  {expandedFeature === feature.id ? '▼' : '▶'}
                </span>
              </div>
              <p className="feature-description">{feature.description}</p>
              
              {expandedFeature === feature.id && (
                <div className="feature-details">
                  {Array.isArray(feature.details) ? (
                    <ul>
                      {feature.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{feature.details}</p>
                  )}
                  <div className="feature-preview">
                    {/* Placeholder for actual feature preview */}
                    <div className="preview-box">
                      {feature.id === 'aiChat' && '🤖 AI Chat Interface Preview'}
                      {feature.id === 'timetable' && '📅 Timetable Preview'}
                      {feature.id === 'notes' && '📝 Notes Grid Preview'}
                      {feature.id === 'pdf' && '📚 PDF Viewer Preview'}
                      {feature.id === 'gpa' && '📊 GPA Tracker Preview'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>  
    </section>

  );
};

export default Showcase;