import {useEffect} from "react"
import homeImg from "../../home-img.png"
import studentImg from "../../student.png"
import ParticlesBg from "particles-bg"
import {Ariza} from "../../Components/Language"
import {Card, Col, Row} from "antd";
import firstPhoto from '../../images/news/1.jpeg'
import secondPhoto from '../../images/news/2.jpeg'
import thirdPhoto from '../../images/news/3.jpeg'
import fourPhoto from '../../images/news/4jpeg.jpeg'
import fivePhoto from '../../images/announcement/5.jpg'
import sixPhoto from '../../images/announcement/6.jpg'
import sevenPhoto from '../../images/announcement/7.jpg'
import {EnvironmentFilled, MailFilled, PhoneFilled, YoutubeFilled} from "@ant-design/icons";

const Home = ({setUserName, language}) => {
    const {news, announcement, router} = Ariza

    // useEffect(() => {
    //     localStorage.removeItem("Token")
    //     localStorage.removeItem("user-data")
    //     setUserName(null)
    // }, [])

    const style = {
        padding: '10px',
    };

    return (
        <div>

            <ParticlesBg color='#0d3b66' type='cobweb' num={35} bg={true}/>

            <div className={"home-img"} style={{marginTop: 120}}>
                <img src={homeImg} alt=''/>
            </div>

            <div className={"rectangle"}>
                <div className={'home-title'}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>{news[language]}</h1>
                </div>

                <div>
                    <div className='row' style={{marginBottom: 30}}>
                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={<img alt=""
                                                style={{height: 180}}

                                                src={firstPhoto}/>}
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Toshkent kimyo-texnologiyalari instituti rektori Toshkent
                                            kimyo-texnologiyalar
                                            instituti Yangiyer filialiga tashrif buyurdi
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>

                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={<img
                                        style={{height: 180}}
                                        alt=""
                                        src={secondPhoto}/>}
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Najot - maktabda, najot - ta'limda, najot - bilimda!
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={<img alt=""
                                                style={{height: 180}}

                                                src={thirdPhoto}/>}
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            "Korrupsiyasiz soha" loyihasi amalda
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <div style={style}>
                                <Card
                                    hoverable
                                    style={{
                                        height: 350,
                                        width: 250,
                                    }}
                                    cover={<img alt=""
                                                style={{height: 180}}

                                                src={fourPhoto}/>}
                                >
                                    <div style={{height: 100}}>
                                        <a href="/">
                                            Vinochilik texnologiyasi va sanoat uzumchilik fakulteti "Karyera kuni"
                                            bo'lib
                                            o'tdi
                                        </a>
                                    </div>

                                    <h4>13.04.2022</h4>
                                </Card>
                            </div>
                        </Col>

                    </div>
                </div>
            </div>

            <div className={"announcement"}>
                <div className={'home-title'}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>{announcement[language]}</h1>
                </div>

                <div>
                    <div className='row'>
                        <div className="row-4-3">
                            <Col className="gutter-row" span={8}>
                                <div style={style}>
                                    <Card
                                        hoverable
                                        style={{
                                            height: 350,
                                            width: 300,
                                        }}
                                        cover={<img alt=""
                                                    style={{height: 180}}

                                                    src={fivePhoto}/>}
                                    >
                                        <div style={{height: 100}}>
                                            <a href="/">
                                                ABITURIYENTLAR DIQQATIGA! TOSHKENT KIMYO-TEXNOLOGIYALAR INSTITUTIDA
                                                2022-2023 O'QUV YILI UCHUN QO'SHMA TA'LIM DASTURLARI BO'YICHA QABUL
                                                BOSHLANDI!!!
                                            </a>
                                        </div>

                                    </Card>
                                </div>
                            </Col>
                        </div>
                       <div className="row-4-3">
                           <Col className="gutter-row" span={8}>
                               <div style={style}>
                                   <Card
                                       hoverable
                                       style={{
                                           height: 350,
                                           width: 300,
                                       }}
                                       cover={<img alt=""
                                                   style={{height: 180}}

                                                   src={sixPhoto}/>}
                                   >
                                       <div style={{height: 100}}>
                                           <a href="/">
                                               20-may "Marketing va talabalar amaliyoti" bo'limi va "Menejment va kasb
                                               ta'limi" fakulteti tomonidan "Karyera kuni" tashkil qilindi
                                           </a>
                                       </div>
                                   </Card>
                               </div>
                           </Col>
                       </div>
                        <div className="row-4-3">
                            <Col className="gutter-row " span={8}>
                                <div style={style}>
                                    <Card
                                        hoverable
                                        style={{
                                            height: 350,
                                            width: 300,
                                        }}
                                        cover={<img alt=""
                                                    style={{height: 180}}

                                                    src={sevenPhoto}/>}
                                    >
                                        <div style={{height: 100}}>
                                            <a href="/">
                                                20-may Marketing va talabalar amaliyoti bo'limi hamda Noorganik moddalar
                                                kimyoviy texnologiyasi fakulteti tomonidan navbatdagi Karyera kuni
                                                o'tkazildi
                                            </a>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </div>



                    </div>
                </div>
            </div>

            <div className={'rectangle'}>
                <div className={'home-title'}>
                    <h1 style={{color: "#00a0e9", marginTop: 15}}>{router[language]}</h1>
                </div>

                <div className="row">
                    <Col span={6} gutter={[6, 12, 12, 24]} className='gutter-row'>
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className='numbers'>
                                <b>1</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Arizani to'ldiring</h1>
                            </div>
                            <div>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza formasini to'ldiring va kerakli hujjatlarni tizimga yuklang
                                </h3>
                            </div>
                        </div>

                    </Col>

                    <Col span={6} gutter={[6, 12, 12, 24]} className='gutter-row'>
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className='numbers'>
                                <b>2</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Yo'nalishni tanlang</h1>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza topshirmoqchi bo'lgan ta'lim yo'nalishlaridan birini tanlang
                                </h3>
                            </div>
                        </div>
                    </Col>

                    <Col span={6} gutter={[6, 12, 12, 24]} className='gutter-row'>
                        <div style={{width: 300, textAlign: "center"}}>
                            <div className='numbers'>
                                <b>3</b>
                            </div>

                            <div>
                                <h1 style={{color: "#00a0e9"}}>Arizani tasdiqlang</h1>
                                <h3 style={{color: "#00a0e9"}}>
                                    Ariza va hujjatlaringiz universitet qabul komissiyasi tomonidan ko'rib chiqilib
                                    tasdiqlanadi
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <div className="gutter-row">
                        <Col span={6} gutter={[6, 12, 12, 24]} className='gutter-row'>
                            <div style={{width: 300, textAlign: "center", marginTop: 25}}>
                                <div className='numbers'>
                                    <b>4</b>
                                </div>

                                <div>
                                    <h1 style={{color: "#00a0e9"}}>Qaydnomani yuklab oling</h1>
                                </div>
                                <div>
                                    <h3 style={{color: "#00a0e9"}}>
                                        Login va parol orqali tizimga kiring hamda abituriyent qaydnomasini yuklab oling
                                    </h3>
                                </div>
                            </div>

                        </Col>
                    </div>

                </div>
                <div className="youtube">
                    <button className="youtube-btn">
                        <a style={{color: "red"}} href="/">
                            <YoutubeFilled/> <b>TO'LIQ YO'RIQNOMA</b>
                        </a>
                    </button>
                </div>

            </div>
                <div className="statistics">
                    <div className="container">
                        <div className="statistics_result">
                            <img src={studentImg} alt="img" width="80px" />
                            <h2>0 ta talaba ro'yxatdan o'tgan</h2>
                        </div>
                        <div className="content_wrapper">
                            <div className="first_select_form select_form">
                                <label className="select_label">
                                    Darajani tanlang:
                                </label>
                                <select>
                                    <option value="bachelor">Bakalavr</option>
                                    <option value="magister">Magistr</option>
                                </select>
                            </div>
                            <div className="second_select_form select_form">
                                <label className="select_label">
                                    Davlatni tanlang:
                                </label>
                                <select>
                                    <option value="Беларусь Республикаси">Беларусь Республикаси</option>
                                    <option value="Россия Федерацияси">Россия Федерацияси</option>
                                    <option value="Латвия Республикаси">Латвия Республикаси</option>
                                    <option value="Туркия Республикаси">Туркия Республикаси</option>
                                    <option value="Венгрия Республикаси">Венгрия Республикаси</option>
                                </select>
                            </div>
                            <div className="third_select_form select_form">
                                <label className="select_label">
                                    Universitetni tanlang:
                                </label>
                                <select>
                                    <option value="Белоруссия давлат озик-овкат ва кимёвий технологоиялар университети">Белоруссия давлат озик-овкат ва кимёвий технологоиялар университети</option>
                                    <option value="Белоруссия давлат технологоия университети">Белоруссия давлат технологоия университети</option>
                                    <option value="Полоцк давлат университети">Полоцк давлат университети</option>
                                    <option value="Янка Купала номидаги Гродво давлат университети">Янка Купала номидаги Гродво давлат университети</option>
                                    <option value="Козон (Волгабуйи) Федерал университети">Козон (Волгабуйи) Федерал университети</option>
                                    <option value="Латвия табиий фанлар ва технология университети">Латвия табиий фанлар ва технология университети</option>
                                    <option value="Остим техника университети">Остим техника университети</option>
                                    <option value="Дебрецен университети">Дебрецен университети</option>
                                </select>
                            </div>
                            <div className="fourth_select_form select_form">
                                <label className="select_label">
                                    Yo'nalishni tanlang:
                                </label>
                                <select>
                                    <option value="">Озиқ-овқат технологияси (нон, макарон ва қандолатчилик маҳсулотлари)</option>
                                    <option value="">Технологик машиналар ва жиҳозлар (тармоқлар бўйича)</option>
                                    <option value="">Озиқ-овқат технологияси (дон маҳсулотлари)</option>
                                    <option value="">Технологик машиналар ва жиҳозлар(совутиш, криоген техникаси ва мўътадиллаш тизимлари машиналари ҳамда агрегатлари)</option>
                                    <option value="">Технологик машиналар ва жиҳозлар (тармоқлар бўйича)</option>
                                    <option value="">Кимёвий технология (қурилиш материаллар)</option>
                                    <option value="">Технологик машиналар ва жиҳозлар (тармоқлар бўйича)</option>
                                    <option value="">Кимёвий технология (ишлаб чиқариш турлари бўйича)</option>
                                    <option value="">Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар бўйича)</option>
                                    <option value="">Машинасозлик технологияси, машинасозлик ишлаб чиқаришини жиҳозлаш ва автоматлаштириш</option>
                                    <option value="">Нефть ва нефть-газни қайта ишлаш технологияси</option>
                                    <option value="">Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш</option>
                                    <option value="">Менежмент (инновацион)</option>
                                    <option value="">Мехатроника ва робототехника</option>
                                    <option value="">Материалшунослик ва янги материаллар технологияси (тармоқлар бўйича)</option>
                                    <option value="">Технологик жараёнлар ва ишлаб чиқаришни автоматлаштириш ва бошқариш (тармоқлар буйича)</option>
                                    <option value="">Озиқ-овқат технологияси (маҳсулот турлари бўйича)</option>
                                    <option value="">«Материаловедение и технология новых материалов (по отраслям)»</option>
                                    <option value="">«Информационно-коммуникационные системы для управления технологическими процессами»</option>
                                    {/* MAGISTRATURA FAKULTETLARI */}
                                    <option value="">Кимёвий технология жараёнлари ва аппаратлари (ишлаб чиқариш тури бўйича)</option>
                                    <option value="">Ёғочга ишлов бериш технологияси ва ёғочшунослик</option>
                                    <option value="">Кимёвий технология(силикат ва қийин эрийдиган нометалл материаллар)</option>
                                    <option value="">Озиқ-овқат маҳсулотларини ишлаб чиқариш ва қайта ишлаш технологияси (маҳсулот турлари бўйича)</option>
                                    <option value="">Озиқ-овқат саноати машиналари ва агрегатлари</option>
                                    <option value="">Нефт ва газни қайта ишлаш ва кимёвий технологияси </option>
                                    <option value="">Нефть ва газ қувурлари, база ва омборларини қуриш ва улардан фойдаланиш</option>
                                    <option value="">Tехнологические процессы
    управления информационныx и коммуникационныx систем</option>
                                    <option value="">Озиқ-овқат хавфсизлиги ва сифати</option>
                                </select>
                            </div>
                        <div className="search_result_button">
                            <button>Aniqlash</button>
                        </div>
                    </div>
                    </div>
                    
                </div>                               
            <div className={'rectangle2'}>
                <div>
                    <h3 style={{color: "white"}}><EnvironmentFilled/> <b>Manzil:</b> <a target="_blank"
                                                                                        href="https://goo.gl/maps/yTkSZdFJnDFJiZDj8">
                        <b style={{color: "white"}}> Toshkent sh. Navoiy ko'chasi, 32-uy, 100011</b> </a></h3>
                    <h3 style={{color: "white"}}><PhoneFilled/> Telefon: <a style={{color: "white"}}
                                                                            href="tel:+998712447915"> (998-71)
                        244-79-15 </a>, <a style={{color: "white"}} href="tel:+998712447918"> (998-71) 244-79-18 </a>,<a
                        style={{color: "white"}} href="tel:+998712447920"> (998-71) 244-79-20 </a></h3>
                    <h3 style={{color: "white"}}><MailFilled/> Email: <a style={{color: "white"}}
                                                                         href="mailto:info@tcti.uz"> info@tcti.uz</a>
                    </h3>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Home
