import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {aboutUs} from "../../styles/aboutus";

import PhoneIcon from '../../assets/aboutus/phone.svg'
import WhatsappIcon from '../../assets/aboutus/whatsapp.svg'
import TelegramIcon from '../../assets/aboutus/telegram.svg'
import InstagramIcon from '../../assets/aboutus/instagram.svg'
import MailIcon from '../../assets/aboutus/mail.svg'
import Logo from '../../assets/auth/logo-2.svg'
import Arrow from '../../assets/profile/arrow.svg'

const AboutUs = ({navigation}) => {
    return (


        <ScrollView>
            <View style={aboutUs.container}>
                <Logo />
                <Text style={aboutUs.version}>Версия 1.0.0</Text>
                <Text style={aboutUs.description}>
                    {`MyMed - знак качества, который обеспечивает \n высокое качество, безопасность лекарств и \n оптимальные цены. \n \n Это значит, что покупатели могут получить \n отличное обслуживание в аптеке и \n приобрести качественные лекарства по \n доступным ценам. \n \n Вы можете быть уверены в профессионализме \n аптек, входящих в союз MyMed`}
                </Text>
                <TouchableOpacity style={aboutUs.button}>
                    <PhoneIcon /><Text style={aboutUs.buttonText}>+996555123456</Text>
                </TouchableOpacity>
                <TouchableOpacity style={aboutUs.button}>
                    <WhatsappIcon /><Text style={aboutUs.buttonText}>Whatsapp</Text>
                </TouchableOpacity>
                <TouchableOpacity style={aboutUs.button}>
                    <TelegramIcon /><Text style={aboutUs.buttonText}>Telegram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={aboutUs.button}>
                    <InstagramIcon /><Text style={aboutUs.buttonText}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={aboutUs.button}>
                    <MailIcon /><Text style={aboutUs.buttonText}>mymed@gmail.com</Text>
                </TouchableOpacity>

                <View style={aboutUs.bottomLinks}>
                    <TouchableOpacity onPress={()=>navigation.push('UserAgreement')} style={aboutUs.link}>
                        <Text style={aboutUs.textLink}>Пользовательское соглашение</Text>
                        <Arrow />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.push('DataProcessing')} style={aboutUs.link}>
                        <Text style={aboutUs.textLink}>{`Политика обработки\nперсональных данных`}</Text>
                        <Arrow />
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}

export default AboutUs
