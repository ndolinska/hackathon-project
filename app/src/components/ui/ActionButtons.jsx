import React from 'react';
import { EventBus } from '../../game/EventBus';

export const ActionButtons = ({ onOpenShop }) => {

    const handleFeed = () => {
        // Wysyłamy sygnał do Phasera, że gracz chce nakarmić kota
        EventBus.emit('action-feed');
    };

    const handlePlay = () => {
        EventBus.emit('action-play');
    };

    return (
        <div className="action-buttons-container" style={styles.container}>
            <button onClick={handleFeed} style={styles.retroBtn}>KARM</button>
            <button onClick={handlePlay} style={styles.retroBtn}>BAW</button>
            <button onClick={onOpenShop} style={styles.retroBtnShop}>SKLEP</button>
        </div>
    );
};

// Proste style inline dla szybkiego podglądu (docelowo przenieś do .css)
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '15px',
        width: '600px', // Dopasowane do szerokości gry
        margin: '15px auto'
    },
    retroBtn: {
        fontFamily: '"Press Start 2P", monospace',
        backgroundColor: '#dbad78',
        color: '#2d1a14',
        border: '4px solid #ffffff',
        padding: '15px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        boxShadow: '4px 4px 0px #555555'
    },
    retroBtnShop: {
        fontFamily: '"Press Start 2P", monospace',
        backgroundColor: '#dbad78', // Sklep wyróżnia się kolorem
        color: '#2d1a14',
        border: '4px solid #ffffff',
        padding: '15px 20px',
        cursor: 'pointer',
        fontSize: '20px',
        boxShadow: '4px 4px 0px #555555'
    }
};