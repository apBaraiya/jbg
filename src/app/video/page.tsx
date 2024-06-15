"use client";
import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const VideoPage: React.FC = () => {
  const videos = [
    { videoOriginal: "./video/01 Teaser-1-1.mp4" },
    { videoOriginal: "./video/02 Ferrero Rocher Gola-2.mp4" },
    { videoOriginal: "./video/03 Cadbury Gola-3.mp4" },
    { videoOriginal: "./video/04 Choco Ball Gola-4.mp4" },
    { videoOriginal: "./video/05 Choco Sundae Gola-5.mp4" },
    { videoOriginal: "./video/06 Cool Brownie Gola-6.mp4" },
  ];

  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  const handleVideoClick = (src: string) => {
    setModalVideoSrc(src);
    import('bootstrap').then((bootstrap) => {
      const myModal = new bootstrap.Modal(document.getElementById('v-popup') as HTMLElement);
      myModal.show();
    });
  };

  useEffect(() => {
    const modalElement = document.getElementById('v-popup');
    if (modalElement) {
      modalElement.addEventListener('hide.bs.modal', () => {
        setModalVideoSrc(null);
      });
    }
  }, []);

  return (
    <section className="video_section">
      <div className="container">
      <div className="row">
            <div className="col-md-12">
              <div className="section_title text-white d-flex align-items-center justify-content-center pb-5">
                <h2 className="title fs-1 fw-bold d-inline-block">
                  Video
                </h2>
              </div>
            </div>
          </div>
        <div className="row">
          {videos.map((video, index) => (
            <div className="col-lg-4 col-md-4 mb-3" key={index}>
              <div className="video_container w-100 h-100 hover-zoom overflow-hidden">
                <video
                  src={video.videoOriginal}
                  className="video-item w-100 h-100"
                  muted
                  onClick={() => handleVideoClick(video.videoOriginal)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="v-popup" tabIndex={-1} aria-labelledby="exampleModalLabel" data-bs-backdrop="static" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close shadow-none bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-2">
              {modalVideoSrc && (
                <video src={modalVideoSrc} id="mvideo" className="modal-item w-100" muted autoPlay controls></video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;
