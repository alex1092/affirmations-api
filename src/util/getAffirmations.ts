import { iAmAffirmations, stoicAffirmations, loveAndRelationshipsAffirmations, zenAffirmations, happinessAffirmations } from "../affirmations"


type AffirmationType = 'i-am' | 'stoic' | 'love-and-relationships' | 'zen' | 'happiness'

let lastTenIndices: number[] = [];

export const getAffirmations = (affirmation: AffirmationType | string) => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * affirmation.length);
    } while (lastTenIndices.includes(randomIndex));

    if (lastTenIndices.length >= 2) {
        lastTenIndices.shift(); 
    }
    lastTenIndices.push(randomIndex); 

    switch(affirmation) {
        case 'i-am': 
            return iAmAffirmations[randomIndex]
        case 'stoic':
            return stoicAffirmations[randomIndex]
        case 'love-and-relationships':
            return loveAndRelationshipsAffirmations[randomIndex]
        case 'zen':
            return zenAffirmations[randomIndex]
        case 'happiness':
            return happinessAffirmations[randomIndex]
        default:
            return 'Invalid affirmation type'
    }
}