import React, {useState, useEffect, useMemo} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import ReviewCard from './../components/ReviewCard'
import Api from './../API/index'
import Stars from 'react-native-stars'
import Faq from '../components/Faq'
import {Colors} from "../constants/colors";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../components/Counter";
import {addToBasket, getAllBasket, updateBasket} from "../api";
import {loadCart} from "../store/actions";

export default function MedicineInfo({navigation, route}) {
    const medId = route.params
    const [medData, setMedData] = useState(null)

    const dispatch = useDispatch()



    const cart = useSelector(state => state.data.cart)

    console.log('cart', cart)

    const find_basket = cart.find(item => item.medication?.id === medId)

    useEffect(() => {
        Api.getData(`medications/${medId}/`)
            .then((res) => setMedData(res.data))
            .catch((e) => console.error(e))
    }, [])

    const reviewsList = useMemo(
        () =>
            medData?.feedbacks?.map((item) => (
                <ReviewCard data={item} key={item.id}/>
            )),
        [medData?.feedbacks]
    )



    async function _create() {
        await addToBasket(medId, 1)
        const basket = await getAllBasket()
        await dispatch(loadCart(basket))
    }

    async function _increment() {
        await updateBasket(find_basket.id, find_basket.count + 1)
        const basket = await getAllBasket()
        await dispatch(loadCart(basket))
    }

    async function _decrement() {
        await updateBasket(find_basket.id, find_basket.count - 1)
        const basket = await getAllBasket()
        await dispatch(loadCart(basket))

    }

    if (!medData) return <Loader />

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageBox}>
                    <Image
                        style={styles.image}
                        source={{uri: medData?.image}}
                    />
                </View>
                <Text style={styles.title}>{medData?.title}</Text>
                <Text style={styles.price}>
                    Цена от: <Text style={styles.soms}>{medData?.price} с</Text>
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Stars
                        display={medData.middle_star}
                        spacing={8}
                        count={5}
                        disabled={true}
                        starSize={20}
                        fullStar={require('./../assets/icons/fullStar.png')}
                        emptyStar={require('./../assets/icons/emptyStar.png')}
                    />
                    <Text
                        style={[styles.reviewsCount, {color: !medData?.feedbacks_count ? Colors.gray_light : Colors.black}]}>
                        отзывов: {medData?.feedbacks_count}
                    </Text>
                </View>
                <Text style={styles.blockTitle}>Описание</Text>
                <View style={styles.description}>
                    {!medData?.description?.manufacturer ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Производитель
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.manufacturer}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.inn ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>МНН</Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.inn}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.ingredient ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Действующие вещества
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.ingredient}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.form ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Форма выпуска
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.form}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.package ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Фасовка
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.package}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.dosage ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Дозировка
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.dosage}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.expiration_date ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Срок годности
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.expiration_date}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.pharmacy_term ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                Условия отпуска из аптеки
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.pharmacy_term}
                            </Text>
                        </View>
                    )}
                </View>
                <Text style={styles.blockTitle}>Форма выпуска</Text>
                <View>
                    {!medData?.instruction?.description ? null : (
                        <Faq
                            title={'Форма выпуска, упаковка и состав'}
                            data={medData?.instruction?.description}
                        />
                    )}
                    {!medData?.instruction?.consistency ? null : (
                        <Faq
                            title={'Состав оболочки'}
                            data={medData?.instruction?.consistency}
                        />
                    )}
                    {!medData?.instruction?.pharmacologic_effect ? null : (
                        <Faq
                            title={'Фармакологическое действие'}
                            data={medData?.instruction?.pharmacologic_effect}
                        />
                    )}
                    {!medData?.instruction?.pharmacokinetic ? null : (
                        <Faq
                            title={'Фармакокинетика'}
                            data={medData?.instruction?.pharmacokinetic}
                        />
                    )}
                    {!medData?.instruction?.indication ? null : (
                        <Faq
                            title={'Показания препарата'}
                            data={medData?.instruction?.indication}
                        />
                    )}
                    {!medData?.instruction?.method ? null : (
                        <Faq
                            title={'Применение'}
                            data={medData?.instruction?.method}
                        />
                    )}
                    {!medData?.instruction?.dosage ? null : (
                        <Faq
                            title={'Режим дозирования'}
                            data={medData?.instruction?.dosage}
                        />
                    )}
                    {!medData?.instruction?.effect ? null : (
                        <Faq
                            title={'Побочное действие'}
                            data={medData?.instruction?.effect}
                        />
                    )}
                    {!medData?.instruction?.contraindication ? null : (
                        <Faq
                            title={'Противопоказания к применению'}
                            data={medData?.instruction?.contraindication}
                        />
                    )}
                    {!medData?.instruction?.special_instruction ? null : (
                        <Faq
                            title={'Особые указания'}
                            data={medData?.instruction?.special_instruction}
                        />
                    )}
                    {!medData?.instruction?.overdose ? null : (
                        <Faq
                            title={'Передозировка'}
                            data={medData?.instruction?.overdose}
                        />
                    )}
                    {!medData?.instruction?.interaction ? null : (
                        <Faq
                            title={'Лекарственное взаимодействие'}
                            data={medData?.instruction?.interaction}
                        />
                    )}
                    {!medData?.instruction?.storage ? null : (
                        <Faq
                            title={'Условия хранения'}
                            data={medData?.instruction?.storage}
                        />
                    )}
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: 20,
                    }}
                >
                    <Stars
                        display={medData?.middle_star}
                        spacing={8}
                        count={5}
                        disabled={true}
                        starSize={20}
                        fullStar={require('./../assets/icons/fullStar.png')}
                        emptyStar={require('./../assets/icons/emptyStar.png')}
                    />
                    <Text
                        style={[styles.reviewsCount, {color: !medData?.feedbacks_count ? Colors.gray_light : Colors.black}]}>
                        отзывов: {medData?.feedbacks_count}
                    </Text>
                </View>

                {medData?.feedbacks_count
                    ? <Text style={styles.blockTitle}>Отзывы</Text>
                    : <Text style={styles.withoutFeedbacks}>Отзывов о товаре еще нет</Text>}
                <TouchableOpacity
                    style={styles.reviewBtn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('LeaveReview', {id: medData.id, type: 'medication'})}
                >
                    <Text style={styles.reviewBtnText}>Оставить отзыв</Text>
                </TouchableOpacity>
                <View style={{marginBottom: medData?.feedbacks_count ? 10 : 0}}>
                    {reviewsList}
                </View>
                {find_basket
                    ? <Counter increment={_increment} decrement={_decrement} data={find_basket} />
                    : <TouchableOpacity
                    style={styles.reviewBtn}
                    activeOpacity={0.8}
                    onPress={() => _create()}
                >
                        <Text style={styles.reviewBtnText}>Добавить в корзину</Text>
                </TouchableOpacity>}

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: Colors.white
    },
    imageBox: {
        width: '100%',
        height: 210,
        borderWidth: 1.5,
        borderColor: '#ECEEEF',
        borderRadius: 13,
        marginBottom: 22,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        color: '#4B4747',
        marginBottom: 25,
    },
    price: {
        fontSize: 14,
        color: '#999999',
    },
    soms: {
        fontSize: 17,
        color: '#1F8BA7',
    },
    reviewsCount: {
        fontSize: 15,
        color: '#4B4747',
        marginLeft: 14,
    },
    blockTitle: {
        color: '#4B4747',
        fontSize: 15,
        marginTop: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    withoutFeedbacks: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.gray_light,
        marginTop: 30,
        marginBottom: 16
    },
    description: {},
    descriptionElem: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    descriptionElemTitle: {
        width: 126,
        color: '#999999',
    },
    descriptionElemDesc: {
        width: 200,
        color: '#4B4747',
    },
    reviewBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4BCCED',
        padding: 13,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10
    },
    reviewBtnText: {
        color: '#ffffff',
        fontSize: 17,
    },
})
