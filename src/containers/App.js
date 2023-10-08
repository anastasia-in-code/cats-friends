import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestCats } from '../actions';

const mapStateToProps = state => {
   return {
      searchField: state.searchCats.searchField,
      cats: state.requestCats.cats,
      isPending: state.requestCats.isPending,
      error: state.requestCats.error
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestCats: () => dispatch(requestCats())
   }
}

const App = ({
   searchField, 
   onSearchChange, 
   cats, 
   isPending, 
   onRequestCats}) => {

   useEffect(() => {
      onRequestCats()
   }, [onRequestCats]);

   const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
   });

   return isPending ?
      <h1 className='tc'>Loading...</h1> :
      <div className='tc'>
         <h1 className='f2'>CATS FROM CARTOONS</h1>
         <SearchBox onSearchChange={onSearchChange} />
         <Scroll>
            <ErrorBoundary>
               <CardsList cats={filteredCats} />
            </ErrorBoundary>
         </Scroll>
      </div>
};

export default connect(mapStateToProps, mapDispatchToProps)(App);