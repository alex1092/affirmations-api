import { iAmAffirmations,stoicAffirmations, loveAndRelationshipsAffirmations, zenAffirmations, happinessAffirmations } from "../affirmations"

type AffirmationType = 'i-am' | 'stoic' | 'love-and-relationships' | 'zen' | 'happiness'

let affirmationHistory: number[] = []

const generateRandomAffirmation = (affirmationArray: string[]): number => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * affirmationArray.length);
    } while (affirmationHistory.includes(randomIndex));

    affirmationHistory.push(randomIndex);
    if (affirmationHistory.length > 3) {
        affirmationHistory.shift();
    }

    return randomIndex;
}

export const getAffirmations = (affirmation: AffirmationType | string): string => {

    const affirmations: { [key: string]: string[] } = {
        'i-am': iAmAffirmations,
        'stoic': stoicAffirmations,
        'love-and-relationships': loveAndRelationshipsAffirmations,
        'zen': zenAffirmations,
        'happiness': happinessAffirmations
    };

    const affirmationArray = affirmations[affirmation as AffirmationType];

    if (!affirmationArray) {
        return 'Invalid affirmation type';
    }

    const randomIndex = generateRandomAffirmation(affirmationArray);

    return affirmationArray[randomIndex];
}
