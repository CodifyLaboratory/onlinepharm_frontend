import React, { useState, useEffect, useMemo } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import ReviewCard from '../../components/ReviewCard'
import Api from '../../API-old'
import Stars from 'react-native-stars'
import Faq from '../../components/Faq'
import { Colors } from '../../constants/colors'
import Loader from '../../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../../components/Counter'
import { addToBasket, getAllBasket, updateBasket } from '../../api'
import { loadCart, setAuthorization } from '../../store/actions'
import { strings } from '../../localization'
import { getMedication } from '../../api'

export default function MedicineInfo({ navigation, route }) {
    const { medId } = route.params

    const [medData, setMedData] = useState(null)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const { cart = [], is_guest } = useSelector((state) => state.data)

    const find_basket = cart.find((item) => item.medication?.id === medId)

    useEffect(() => {
        getData().then((r) => setMedData(r))
    }, [])

    const getData = async () => {
        setLoading(true)
        try {
            return await getMedication(medId)
        } catch (e) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }
    }

    const reviewsList = useMemo(
        () =>
            medData?.feedbacks?.map((item) => (
                <ReviewCard data={item} key={item.id} />
            )),
        [medData?.feedbacks]
    )

    async function _create() {
        if (is_guest) dispatch(setAuthorization(false))
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

    if (loading) return <Loader />

    return (
        <ScrollView style={{paddingLeft: 16, paddingRight: 16, backgroundColor: Colors.white}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.imageBox}>
                    <Image
                        style={styles.image}
                        source={{ uri: medData?.image }}
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
                        display={medData?.middle_star}
                        spacing={8}
                        count={5}
                        disabled={true}
                        starSize={20}
                        fullStar={require('../../assets/icons/fullStar.png')}
                        emptyStar={require('../../assets/icons/emptyStar.png')}
                    />
                    <Text
                        style={[
                            styles.reviewsCount,
                            {
                                color: !medData?.feedbacks_count
                                    ? Colors.gray_light
                                    : Colors.black,
                            },
                        ]}
                    >
                        отзывов: {medData?.feedbacks_count}
                    </Text>
                </View>
                <Text style={styles.blockTitle}>
                    {strings.product.description}
                </Text>
                <View style={styles.description}>
                    {!medData?.description?.manufacturer ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.manufacturer}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.manufacturer}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.inn ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.INN}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.inn}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.ingredient ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.active_ingredients}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.ingredient}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.form ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.release_form}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.form}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.package ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.packing}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.package}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.dosage ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.dosage}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.dosage}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.expiration_date ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.expiration_date}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.expiration_date}
                            </Text>
                        </View>
                    )}
                    {!medData?.description?.pharmacy_term ? null : (
                        <View style={styles.descriptionElem}>
                            <Text style={styles.descriptionElemTitle}>
                                {strings.product.conditions}
                            </Text>
                            <Text style={styles.descriptionElemDesc}>
                                {medData?.description?.pharmacy_term}
                            </Text>
                        </View>
                    )}
                </View>
                <Text style={styles.blockTitle}>
                    {strings.product.instructions}
                </Text>
                <View>
                    {!medData?.instruction?.description ? null : (
                        <Faq
                            title={strings.product.release_form_packing}
                            data={medData?.instruction?.description}
                        />
                    )}
                    {!medData?.instruction?.consistency ? null : (
                        <Faq
                            title={strings.product.shell_composition}
                            data={medData?.instruction?.consistency}
                        />
                    )}
                    {!medData?.instruction?.pharmacologic_effect ? null : (
                        <Faq
                            title={strings.product.side_effects}
                            data={medData?.instruction?.pharmacologic_effect}
                        />
                    )}
                    {!medData?.instruction?.pharmacokinetic ? null : (
                        <Faq
                            title={strings.product.pharmacokinetics}
                            data={medData?.instruction?.pharmacokinetic}
                        />
                    )}
                    {!medData?.instruction?.indication ? null : (
                        <Faq
                            title={strings.product.indications}
                            data={medData?.instruction?.indication}
                        />
                    )}
                    {!medData?.instruction?.method ? null : (
                        <Faq
                            title={strings.product.application}
                            data={medData?.instruction?.method}
                        />
                    )}
                    {!medData?.instruction?.dosage ? null : (
                        <Faq
                            title={strings.product.dosage_regimen}
                            data={medData?.instruction?.dosage}
                        />
                    )}
                    {!medData?.instruction?.effect ? null : (
                        <Faq
                            title={strings.product.side_effects}
                            data={medData?.instruction?.effect}
                        />
                    )}
                    {!medData?.instruction?.contraindication ? null : (
                        <Faq
                            title={strings.product.contraindications}
                            data={medData?.instruction?.contraindication}
                        />
                    )}
                    {!medData?.instruction?.special_instruction ? null : (
                        <Faq
                            title={strings.product.special_instructions}
                            data={medData?.instruction?.special_instruction}
                        />
                    )}
                    {!medData?.instruction?.overdose ? null : (
                        <Faq
                            title={strings.product.overdose}
                            data={medData?.instruction?.overdose}
                        />
                    )}
                    {!medData?.instruction?.interaction ? null : (
                        <Faq
                            title={strings.product.drug_interaction}
                            data={medData?.instruction?.interaction}
                        />
                    )}
                    {!medData?.instruction?.storage ? null : (
                        <Faq
                            title={strings.product.storage_conditions}
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
                        fullStar={require('../../assets/icons/fullStar.png')}
                        emptyStar={require('../../assets/icons/emptyStar.png')}
                    />
                    <Text
                        style={[
                            styles.reviewsCount,
                            {
                                color: !medData?.feedbacks_count
                                    ? Colors.gray_light
                                    : Colors.black,
                            },
                        ]}
                    >
                        {strings.main.review_count}: {medData?.feedbacks_count}
                    </Text>
                </View>

                {medData?.feedbacks_count ? (
                    <Text style={styles.blockTitle}>
                        {strings.main.reviews}
                    </Text>
                ) : (
                    <Text style={styles.withoutFeedbacks}>
                        {strings.main.without_feedbacks_pharmacy}
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.reviewBtn}
                    activeOpacity={0.8}
                    onPress={() => {
                        is_guest
                            ? dispatch(setAuthorization(false))
                            : navigation.push('LeaveReview', {
                                  id: medData.id,
                                  type: 'medication',
                              })
                    }}
                >
                    <Text style={styles.reviewBtnText}>
                        {strings.main.leave_feedback}
                    </Text>
                </TouchableOpacity>
                <View
                    style={{ marginBottom: medData?.feedbacks_count ? 10 : 0 }}
                >
                    {reviewsList}
                </View>
                {find_basket ? (
                    <Counter
                        increment={_increment}
                        decrement={_decrement}
                        data={find_basket}
                    />
                ) : (
                    <TouchableOpacity
                        style={styles.reviewBtn}
                        activeOpacity={0.8}
                        onPress={() => _create()}
                    >
                        <Text style={styles.reviewBtnText}>
                            {strings.main.add_to_cart}
                        </Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 16,
        paddingTop: 16,
        backgroundColor: Colors.white,
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
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 24,
    },
    price: {
        fontSize: 14,
        color: '#999999',
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 17,
    },
    soms: {
        fontSize: 17,
        color: '#1F8BA7',
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 20,
    },
    reviewsCount: {
        fontSize: 15,
        color: '#4B4747',
        marginLeft: 14,
        fontFamily: 'Poppins-Medium',
        lineHeight: 22,
    },
    blockTitle: {
        color: '#4B4747',
        fontSize: 15,
        marginTop: 24,
        marginBottom: 20,
        fontFamily: 'SF-Pro-SemiBold',
        fontWeight: '600',
    },
    withoutFeedbacks: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.gray_light,
        marginTop: 30,
        marginBottom: 16,
        fontFamily: 'Poppins-Medium',
        lineHeight: 27,
    },
    description: {},
    descriptionElem: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    descriptionElemTitle: {
        width: 126,
        color: '#999999',
        fontFamily: 'SF-Pro-Regular',
        fontSize: 14,
        lineHeight: 17,
    },
    descriptionElemDesc: {
        width: 200,
        color: '#4B4747',
        fontFamily: 'SF-Pro-Regular',
        fontSize: 14,
        lineHeight: 17,
    },
    reviewBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4BCCED',
        padding: 13,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    reviewBtnText: {
        color: '#ffffff',
        fontSize: 17,
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 20,
    },
})
