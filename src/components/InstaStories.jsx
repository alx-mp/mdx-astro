import { useState } from 'preact/hooks';

export default function InstaStories({ historias }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);

  const openStory = (story) => {
    setCurrentStory(story);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentStory(null);
  };

  return (
    <div className="insta-stories-container">
      <div className="stories-scroll">
        {historias.map((story, index) => (
          <div
            key={index}
            className="story-circle"
            onClick={() => openStory(story)}
          >
            <div className="story-border">
              <img src={story.thumb} alt={story.titulo} />
            </div>
            <span className="story-title">{story.titulo}</span>
          </div>
        ))}
      </div>

      {modalOpen && currentStory && (
        <div className="story-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>✕</button>
            {currentStory.video ? (
              <video autoPlay loop muted playsInline className="story-video">
                <source src={currentStory.video} type="video/mp4" />
              </video>
            ) : (
              <img src={currentStory.thumb} alt={currentStory.titulo} className="story-image" />
            )}
            <div className="story-info">
              <h3>{currentStory.titulo}</h3>
              {currentStory.descripcion && <p>{currentStory.descripcion}</p>}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .insta-stories-container {
          margin: 2rem 0;
        }

        .stories-scroll {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding: 1rem 0;
          scrollbar-width: thin;
        }

        .story-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          min-width: 80px;
          transition: transform 0.2s;
        }

        .story-circle:hover {
          transform: scale(1.05);
        }

        .story-border {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          padding: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-border img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid white;
        }

        .story-title {
          font-size: 0.75rem;
          text-align: center;
          color: #333;
          max-width: 80px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .story-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          position: relative;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .story-video,
        .story-image {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: contain;
        }

        .story-info {
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: white;
        }

        .story-info h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.2rem;
        }

        .story-info p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
