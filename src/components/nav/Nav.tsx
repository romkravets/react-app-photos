import { SearchForm } from '../searchForm';
import React from 'react';

import './Nav.scss';

export const Nav: React.FunctionComponent<any> = ({onSeacrh}) => {
  return <nav className={'page-nav'}>
    <div className='page-nav__container'>
      <SearchForm className={'page-nav__search-form'} onSubmit={onSeacrh}/>
    </div>
  </nav>
};
