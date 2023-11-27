import { iAmAffirmations, stoicAffirmations, loveAndRelationshipsAffirmations, zenAffirmations, happinessAffirmations } from "../affirmations"


type AffirmationType = 'i-am' | 'stoic'

export const getAffirmations = (affirmation: string) => {
    const randomIndex = Math.floor(Math.random() * affirmation.length)
    switch(affirmation) {
        case 'i-am': 
            return iAmAffirmations[randomIndex]
        case 'stoic':
            return stoicAffirmations[randomIndex]
        default:
            return 'Invalid affirmation type'
    }
}
