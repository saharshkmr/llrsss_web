import React from 'react';
import './YouTubeVideos.css';
import './Achievements.css';

const YouTubeVideos = () => {
    // Array of video IDs from the LLRBMSRSEC1968 YouTube channel
    const videoIds = [
        'I31RegEd3Wc',  // Replace with actual video IDs from the channel
        'uXApgTFeGac',
        'XtSFlU4OX6o'
    ];

    // Video titles (you can update these)
    const videoTitles = [
        'SCIENCE EXHIBITION 2025',
        'KARGIL VIJAY DIWAS 2025',
        'Launch Of News-Letter April-June 2025 Part-2'
    ];

    return (
        <section className="youtube-section">
            <div className="container">
                <h2 className="section-title">Latest Videos</h2>
                <div className="youtube-videos-grid">
                    {videoIds.map((videoId, index) => (
                        <div key={index} className="youtube-video-card">
                            <div className="video-wrapper">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={videoTitles[index] || `Video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="video-title">{videoTitles[index] || `Video ${index + 1}`}</h3>
                        </div>
                    ))}
                </div>
                <div className="view-all-container">
                    <a
                        href="https://www.youtube.com/@LLRBMSRSEC1968/videos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-all-btn"
                    >
                        View All Videos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default YouTubeVideos;
