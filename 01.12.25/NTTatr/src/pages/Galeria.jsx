import { useEffect, useState } from 'react';
import './Pages.css';

function Galeria() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        document.title = 'Galeria - NT Tatr';

        const galeria = [
            { id: 1, title: 'Morskie Oko', emoji: '🏔️', description: 'Najpiękniejsze jezioro w Tatrach' },
            { id: 2, title: 'Rysy o wschodzie', emoji: '🌄', description: 'Wschód słońca na Rysach' },
            { id: 3, title: 'Kozica tatrzańska', emoji: '🦌', description: 'Dzikie zwierzęta Tatr' },
            { id: 4, title: 'Dolina Gąsienicowa', emoji: '⛰️', description: 'Widok na dolinę' },
            { id: 5, title: 'Zima w Tatrach', emoji: '❄️', description: 'Zimowy krajobraz' },
            { id: 6, title: 'Kwiat tatrzański', emoji: '🌸', description: 'Flora Tatr' }
        ];

        setImages(galeria);
    }, []);

    const openLightbox = (image) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <div className="page">
            <h1>📸 Galeria</h1>
            <p className="subtitle">Odkryj piękno Tatr</p>

            <div className="gallery-grid">
                {images.map(image => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openLightbox(image)}
                    >
                        <div className="gallery-emoji">{image.emoji}</div>
                        <p className="gallery-title">{image.title}</p>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeLightbox}>✕</button>
                        <div className="lightbox-emoji">{selectedImage.emoji}</div>
                        <h2>{selectedImage.title}</h2>
                        <p>{selectedImage.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Galeria;