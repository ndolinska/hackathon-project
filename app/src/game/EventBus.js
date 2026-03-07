import { Events } from 'phaser';

// Globalny nadajnik zdarzeń. React go nasłuchuje, Phaser do niego nadaje (lub odwrotnie).
export const EventBus = new Events.EventEmitter();