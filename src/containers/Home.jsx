import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState'

const Home = ({ user, myList, trends, originals, tendencias, searchActive}) => {
 // const initialState = useInitialState(API);
  return  (
    <>
      <Header />
      <Search isHome />
      {
        searchActive && (
            Object.keys(tendencias).length === 0 ? <div><h5>No hay registro</h5><br/></div> : (
               <Categories title="Búsqueda">
                    <Carousel>
                      {tendencias.map(item =>
                        <CarouselItem 
                            key={item.id} 
                            {...item} 
                        />
                      )}
                    </Carousel>
                  </Categories>
            )
          )
      }  
      <Categories title="My Lista">
        <Carousel>
          {myList.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>    
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

//export default Home;

//export default connect(props, actions)(Home);

const mapStateToProps = state => {
  return {
      user: state.user,
      myList: state.myList,
      trends: state.trends,
      originals: state.originals,
      tendencias: state.tendencias,
      searchActive: state.searchActive
  };
};

export default connect(mapStateToProps, null)(Home);