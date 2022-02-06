import {strings} from "../localization";


export const getSlideData = () => {

    const data = [
        {
            id: '1',
            title: strings.auth.medicine_you_need,
            image: require('./../assets/onBoardingStep1.png'),
        },
        {
            id: '2',
            title: strings.auth.nearest_pharmacy,
            image: require('./../assets/onBoardingStep2.png'),
        },
        {
            id: '3',
            title: strings.auth.convenient_payment,
            image: require('./../assets/onBoardingStep3.png'),
        },
        {
            id: '4',
            title: strings.auth.get_your_product,
            image: require('./../assets/onBoardingStep4.png'),
        },
    ]

    const localization = {
        0: strings.auth.medicine_you_need,
        1: strings.auth.nearest_pharmacy,
        2: strings.auth.convenient_payment,
        3: strings.auth.get_your_product,
    }
    return data.map((item, index) => ({...item, title: localization[index]}))
}
