import React, {Component} from 'react';
import styles from "./Slider.module.css";
import {Slider, Slide, MediaBox, Col, Card, CardTitle, Row} from "react-materialize";





export default () => {
    return (
<div className={styles.div_slider}>
        <Slider className={styles.slider}>
            <Slide
                src="https://pp.userapi.com/c848520/v848520144/b4533/8iGWoX5OWbg.jpg"
                title="This is our big Tagline!">
                Here's our small slogan.
            </Slide>
            <Slide
                src="https://pp.userapi.com/c848520/v848520144/b4550/_iyTLCqqzFk.jpg"
                title="Left aligned Caption"
                placement="left"

            >

                Here's our small slogan.
            </Slide>
            <Slide
                src="https://pp.userapi.com/c848520/v848520144/b453d/sjdQdujj1tg.jpg"
                title="Right aligned Caption"
                placement="right">
                Here's our small slogan.
            </Slide>
        </Slider>

    <div>
        <Row>

            <Col m={4} s={12}>
                <Card className='small'
                      header={<CardTitle image='https://f.sravni.ru/cms/KnowledgeBaseArticle/Picture/mat_59624.jpeg'>Аналитика</CardTitle>}
                      actions={[<a href='#'>Читать</a>]}>
                    Акции Apple под ударом, но это временно
                </Card>
            </Col>

            <Col m={4} s={12}>
                <Card className='small'
                      header={<CardTitle image='http://richinvest.biz/wp-content/uploads/2016/06/1-15.jpg'>Новости</CardTitle>}
                      actions={[<a href='#'>Читать</a>]}>
                    "Газпром" повысил среднесрочный ориентир добычи на период до 2025 года
                </Card>
            </Col>

            <Col m={4} s={12}>
            <Card className='small'
                  header={<CardTitle image='http://www.rabstol.net/uploads/gallery/main/360/rabstol_net_quotes_01.jpg'>Криптовалюта</CardTitle>}
                  actions={[<a href='#'>Читать</a>]}>
                В сети появились сообщения об уязвимости в виртуальной машине Ethereum
            </Card>
            </Col>


        </Row>>

    </div>


</div>



    )
}
