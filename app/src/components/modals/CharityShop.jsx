import React from 'react';
import { EventBus } from '../../game/EventBus';
import hatIcon from '../../assets/hatIcon.png';
import orangeB from '../../assets/orangeball.png';
import pinkB from '../../assets/pinkball.png';
import blueB from '../../assets/blueball.png';
import redS from '../../assets/redSofa.png';
import flower from '../../assets/flower.png';
import toast from 'react-hot-toast';
export const CharityShop = ({ onClose }) => {

    const handlePurchaseAndEquip = (itemName, itemKey, price) => {
        toast(`Dziękujemy! Kupiłeś: ${itemName} za ${price} PLN. 100% kwoty wspiera schronisko!`, {
            icon: '🐾'
        });
        EventBus.emit('trust-increased', 15); 
        EventBus.emit('equip-item', itemKey); 
        onClose();
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>SKLEP WSPARCIA</h2>
            <p style={styles.description}>
                Wybierz przedmiot, aby wesprzeć schronisko symboliczną wpłatą!
            </p>
            <div style={styles.itemsGrid}>
                <button 
                    onClick={() => handlePurchaseAndEquip('Czapeczka świąteczna', 'hat', 5)} 
                    style={styles.itemCard}
                >
                    <img src={hatIcon} alt="Czapka" style={styles.icon} />
                    <span>Czapeczka Świąteczna</span>
                    <span style={styles.price}>5 PLN</span>
                </button>
                 <button 
                    onClick={() => handlePurchaseAndEquip('Piłka różowa', 'ball-pink', 5)} 
                    style={styles.itemCard}
                >
                    <img src={pinkB} alt="Czapka" style={styles.icon} />
                    <span>Różowa piłka</span>
                    <span style={styles.price}>5 PLN</span>
                </button>
                 <button 
                    onClick={() => handlePurchaseAndEquip('Piłka niebieska', 'ball-blue', 5)} 
                    style={styles.itemCard}
                >
                    <img src={blueB} alt="Czapka" style={styles.icon} />
                    <span>Niebieska piłka</span>
                    <span style={styles.price}>5 PLN</span>
                </button>
                 <button 
                    onClick={() => handlePurchaseAndEquip('Piłka niebieska', 'ball-blue', 5)} 
                    style={styles.itemCard}
                >
                    <img src={orangeB} alt="Czapka" style={styles.icon} />
                    <span>Pomarańczowa piłka</span>
                    <span style={styles.price}>5 PLN</span>
                </button>
                <button 
                    onClick={() => handlePurchaseAndEquip('Kanapa', 'sofa', 15)} 
                    style={styles.itemCard}
                >
                    <img src={redS} alt="Kanapa" style={styles.icon} />
                    <span>Czerwona kanapa</span>
                    <span style={styles.price}>15 PLN</span>
                </button>
                 <button 
                    onClick={() => handlePurchaseAndEquip('Kwiatek', 'Flower', 5)} 
                    style={styles.itemCard}
                >
                    <img src={flower} alt="Flower" style={styles.icon} />
                    <span>Kwiatek</span>
                    <span style={styles.price}>5 PLN</span>
                </button>

                

                
                
            </div>

            <button onClick={onClose} style={styles.closeBtn}>X ZAMKNIJ</button>
        </div>
    );
};

// --- STYLE CSS (W TYM NOWY GRID) ---
const styles = {
    container: { 
        padding: '10px', 
        color: '#380f0f', 
        fontFamily: '"Press Start 2P"', 
        backgroundColor: '#ddc295', 
        border: '4px solid #380f0f',
        margin: '0 auto',
        height:'500px'
    },
    header: { fontSize: '26px', marginBottom: '10px', textAlign: 'center' },
    description: { fontSize: '17px', lineHeight: '1.5', marginBottom: '10px', textAlign: 'center' },
 
    itemsGrid: { 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', // Dwie równe kolumny (zmień na 3, jeśli chcesz więcej obok siebie)
        gap: '10px' // Odstęp między kafelkami
    },
    
    itemCard: { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', // Wyśrodkowanie zawartości
        justifyContent: 'space-between',
        backgroundColor: '#663110', 
        color: '#f8d6a3', 
        padding: '15px 10px', 
        border: '3px solid #380f0f', 
        cursor: 'pointer', 
        fontFamily: '"Press Start 2P"', 
        fontSize: '12px',
        minHeight: '120px',
        width: '90px',
        boxShadow: '4px 4px 0px rgba(0,0,0,0.3)', // Klasyczny retro cień
        transition: 'transform 0.1s' // Lekka animacja przy kliknięciu (wymagałaby obsługi pseudo-klas, ale tu zostawiamy jako opcję)
    },
    
    icon: {
        width: '64px',
        height: '64px',
        marginBottom: '5px',
        imageRendering: 'pixelated' // Wymusza brak rozmywania obrazka (chrupiące piksele!)
    },
    
    price: {
        marginTop: '5px',
        color: '#ffffff', // Wyróżnienie ceny innym kolorem
    },

    closeBtn: { 
        marginTop: '20px', 
        padding: '12px', 
        backgroundColor: 'transparent', 
        border: '3px solid #380f0f', 
        cursor: 'pointer', 
        width: '100%', 
        fontFamily: '"Press Start 2P"', 
        fontSize: '12px',
        fontWeight: 'bold'
    }
};