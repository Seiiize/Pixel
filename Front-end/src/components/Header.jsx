import React from "react";
import styled from "styled-components";
import { cate } from "../fakedata/cards";
import bg from "../images/bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/PC");
      setData(res.data);
    };
    getData();
  }, []);
  SwiperCore.use(Autoplay);
  return (
    <Container>
      <Contain>
        <Head>
          <h1>PIXEL</h1>
          <p>Le magasin N°1 d'informatique en algérie</p>
        </Head>
        <SwiperContainer>
          <h1>Latest Arrivals</h1>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
          >
            {data.map((s) => {
              return (
                <SwiperSlide>
                  <div className="cards">
                    <div className="card">
                      <img src={s.img} alt="" />
                    </div>
                    <div className="infos">
                      <h2>{s.name}</h2>
                      <p>{s.CPU}</p>
                      <p>{s.RAM}</p>
                      <p>{s.Stockage}</p>
                      <p>{s.GPU}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperContainer>
      </Contain>
      <Bottom>
        <Cards>
          {cate.map((i) => {
            return (
              <Card>
                <a href="">
                  <img src={i.img} alt="" />
                  <h2>{i.name}</h2>
                </a>
              </Card>
            );
          })}
        </Cards>
        <a href="">Voir tout les produits</a>
      </Bottom>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 180vh;
`;
const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120vh;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
`;
const Head = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1vh;
  h1 {
    font-size: 55px;
    color: white;
  }
  p {
    color: white;
    font-size: 20px;
  }
`;
const Bottom = styled.div`
  height: 40vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    size: 14px;
    color: black;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  align-items: center;
  justify-content: center;
  column-gap: 100px;
  margin-top: 50px;
  row-gap: 50px;
`;
const Card = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  padding: 0.4em;
  border-radius: 6px;
  img {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 60%;
    border-radius: 6px 6px 0 0;
  }
  img:hover {
    transform: scale(0.98);
  }
`;
const SwiperContainer = styled.div`
  width: 50%;
  margin-top: 150px;
  height: 50vh;
  background-color: #ffffffce;
  color: black;
  margin-top: 20vh;
  border-radius: 50px;
  padding: 20px;
  img {
    width: 100%;
    height: 40vh;
    border-radius: 10px;
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
  }
`;
