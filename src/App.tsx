import React from 'react';
import axios from 'axios';
import unsplashApis from './apis';

import './App.scss';
import { Image, SearchResponse } from './types/search-api';
import { Grid } from './components/grid';
import { Nav } from './components/nav/Nav';

import './App.scss'

const apiUrl = '/search/photos';

interface IState {
  items: Array<Image>;
  total: number;
  totalPages: number;
  currentPage: number
}

export class App extends React.Component<{}, IState> {
  public state = {
    items: [],
    total: 0,
    totalPages: 0,
    currentPage: 1
  };

  private search = async (value: string) => {
    const { currentPage } = this.state;
    const axiosConfig = {
      params: {
        query: value,
        page: currentPage
      }
    }

    const response = await unsplashApis.get<SearchResponse>(apiUrl, axiosConfig);
    const { total_pages: totalPages, total, results: items } = response.data;

    this.setState(state => ({...state, totalPages, total, items}));
  };

  public render() {
    return <div className={'page-container'}>
      <Nav onSeacrh={this.search}/>
      <Grid {...this.state} />
    </div>;
  }
}




