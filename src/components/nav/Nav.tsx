import { SearchForm } from '../searchForm';
import React, { SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

import './Nav.scss';

interface IProps {
  textFromRedux: string;
  onSearch: (e: any) => void,
  onButtonClick: (s: React.SyntheticEvent<HTMLButtonElement>) => void
}

const Nav: React.FunctionComponent<IProps> = ({onSearch, textFromRedux, onButtonClick}) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSearch}/>
      <button onClick={onButtonClick}>{textFromRedux}</button>
    </div>
  </nav>
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    textFromRedux: state.unsplash.text
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onButtonClick: (e: SyntheticEvent<HTMLButtonElement>) => {
      dispatch(fetchItems())
    }
  }
};

const ConnectedNav = connect(mapStateToProps, mapDispatchToProps)(Nav);

export {ConnectedNav as Nav};
