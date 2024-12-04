import React from 'react';
import TitleSection from '../../molecules/sobre/titleSection';
import SubtitleSection from '../../molecules/sobre/subTitleSection';
import VideoSection from '../../molecules/sobre/videoSection';
import './pageContent.css';

const PageContent: React.FC = () => {
  return (
    <div>
      <TitleSection />
      <SubtitleSection />
      <div className="page-content">
        <VideoSection />
      </div>
    </div>
  );
};

export default PageContent;
