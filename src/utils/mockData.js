import Images from "../assets/images"

export const workoutData = [
    { id : 1, label : 'Strength'},
    { id : 2, label : 'Cardio'},
    { id : 3, label : 'Yoga'},
    { id : 4, label : 'Pilates'},
]

export const mealData = [
    { id : 1, label : 'Vegetarian'},
    { id : 2, label : 'Keto'},
    { id : 3, label : 'High Protein'},
]

export const macroData = [
    { id : 1, label : 'Lose'},
    { id : 2, label : 'Maintain'},
    { id : 3, label : 'Gain'},
]

export const mealIngredients = [
    {
        title:'Salt',
        subTitle:'',
        image:Images?.salt
    },
    {
        title:'Chickee',
        subTitle:'',
        image:Images?.chicken
    },
    {
        title:'Onion',
        subTitle:'Alergy',
        image:Images?.onion
    },
    {
        title:'Garlic',
        subTitle:'',
        image:Images?.garlic
    },
    {
        title:'Pappers',
        subTitle:'alergy',
        image:Images?.chiliPepper
    },
    {
        title:'Ginger',
        subTitle:'',
        image:Images?.ginger
    },
    {
        title:'Broccoli',
        subTitle:'',
        image:Images?.broccoli
    },
    {
        title:'Orange',
        subTitle:'',
        image:Images?.orange
    },
    {
        title:'Walnut',
        subTitle:'',
        image:Images?.walnut
    },
]
export const notificationData = [
    {
        title:'Streak',
        description:'Continue you 5 day streak',
        duration:'2h ago',
        image:Images?.fire
    },
    {
        title:'ABC Workout',
        description:'Continue you 5 day streak',
        duration:'2h ago',
        image:Images?.running
    },
    {
        title:'Congratulations!',
        description:'Continue you 5 day streak',
        duration:'2h ago',
        image:Images?.celebration
    },
]