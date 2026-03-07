import React from 'react';

export default function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <svg className="pixel-plant float-animation" style={{ top: '10%', left: '5%' }} viewBox="0 0 32 40">
        <rect x="12" y="32" width="8" height="8" fill="#a67c52" /><rect x="10" y="30" width="12" height="4" fill="#8b6914" /><rect x="14" y="20" width="4" height="12" fill="#4a7c59" /><rect x="10" y="16" width="4" height="8" fill="#5a9c6a" /><rect x="18" y="16" width="4" height="8" fill="#5a9c6a" /><rect x="6" y="12" width="4" height="8" fill="#6ab77a" /><rect x="22" y="12" width="4" height="8" fill="#6ab77a" /><rect x="12" y="8" width="8" height="12" fill="#5a9c6a" />
      </svg>
      <svg className="pixel-plant float-animation" style={{ top: '15%', right: '8%', animationDelay: '1s' }} viewBox="0 0 32 40">
        <rect x="12" y="34" width="8" height="6" fill="#c9a66b" /><rect x="10" y="32" width="12" height="4" fill="#a67c52" /><rect x="14" y="22" width="4" height="12" fill="#3d6b4a" /><rect x="8" y="18" width="6" height="4" fill="#4a8c5a" /><rect x="18" y="18" width="6" height="4" fill="#4a8c5a" /><rect x="4" y="14" width="6" height="6" fill="#5aa66a" /><rect x="22" y="14" width="6" height="6" fill="#5aa66a" /><rect x="10" y="10" width="12" height="10" fill="#4a8c5a" />
      </svg>
      <svg className="pixel-shelf" style={{ top: '30%', left: '3%' }} viewBox="0 0 60 40" width="80" height="53">
        <rect x="0" y="30" width="60" height="6" fill="#8b6914" /><rect x="0" y="28" width="60" height="4" fill="#a67c52" /><rect x="5" y="8" width="10" height="22" fill="#c9675a" /><rect x="16" y="12" width="8" height="18" fill="#5a8cc9" /><rect x="25" y="6" width="12" height="24" fill="#c9a65a" /><rect x="38" y="14" width="8" height="16" fill="#8b5a8c" /><rect x="47" y="10" width="10" height="20" fill="#5ac98c" />
      </svg>
      <svg className="pixel-shelf" style={{ top: '35%', right: '2%' }} viewBox="0 0 50 35" width="70" height="49">
        <rect x="0" y="28" width="50" height="5" fill="#8b6914" /><rect x="0" y="26" width="50" height="3" fill="#a67c52" /><rect x="4" y="10" width="8" height="18" fill="#d4a574" /><rect x="13" y="14" width="10" height="14" fill="#7cb5d4" /><rect x="24" y="8" width="8" height="20" fill="#d47c7c" /><rect x="33" y="12" width="12" height="16" fill="#a5d47c" />
      </svg>
      <svg style={{ position: 'absolute', top: '50%', left: '4%' }} viewBox="0 0 40 50" width="50" height="62">
        <rect x="0" y="0" width="40" height="50" fill="#8b6914" /><rect x="4" y="4" width="32" height="42" fill="#f5efe6" /><rect x="8" y="8" width="24" height="34" fill="#d4c4a8" /><rect x="14" y="20" width="12" height="10" fill="#f5a855" /><rect x="14" y="16" width="4" height="6" fill="#f5a855" /><rect x="22" y="16" width="4" height="6" fill="#f5a855" /><rect x="16" y="22" width="2" height="2" fill="#333" /><rect x="22" y="22" width="2" height="2" fill="#333" />
      </svg>
      <svg style={{ position: 'absolute', top: '55%', right: '5%' }} viewBox="0 0 30 50" width="40" height="67">
        <rect x="10" y="40" width="10" height="10" fill="#a67c52" /><rect x="8" y="38" width="14" height="4" fill="#8b6914" /><rect x="12" y="20" width="6" height="20" fill="#c9a65a" /><rect x="4" y="4" width="22" height="18" fill="#f5d89a" /><rect x="6" y="6" width="18" height="14" fill="#fff8e8" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }} viewBox="0 0 200 40" width="300" height="60">
        <ellipse cx="100" cy="20" rx="95" ry="18" fill="#c9a65a" /><ellipse cx="100" cy="20" rx="80" ry="14" fill="#d4b878" /><ellipse cx="100" cy="20" rx="60" ry="10" fill="#e8cc8c" />
      </svg>
      <svg className="pixel-plant float-animation" style={{ bottom: '15%', left: '10%', animationDelay: '2s' }} viewBox="0 0 24 32">
        <rect x="8" y="26" width="8" height="6" fill="#a67c52" /><rect x="10" y="18" width="4" height="10" fill="#4a7c59" /><rect x="6" y="12" width="4" height="8" fill="#5a9c6a" /><rect x="14" y="12" width="4" height="8" fill="#5a9c6a" /><rect x="8" y="6" width="8" height="10" fill="#6ab77a" />
      </svg>
      <svg className="pixel-plant float-animation" style={{ bottom: '20%', right: '12%', animationDelay: '0.5s' }} viewBox="0 0 28 36">
        <rect x="10" y="30" width="8" height="6" fill="#c9a66b" /><rect x="12" y="20" width="4" height="12" fill="#3d6b4a" /><rect x="6" y="14" width="6" height="8" fill="#4a8c5a" /><rect x="16" y="14" width="6" height="8" fill="#4a8c5a" /><rect x="10" y="8" width="8" height="10" fill="#5aa66a" />
      </svg>
    </div>
  );
}