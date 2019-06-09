import React from 'react';
import axios from 'axios';
import unsplashApi from './apis';

import './App.scss';
import { Image, SearchResponse } from './types/search-api';
import { Grid } from './components/grid';
import { Nav } from './components/nav/Nav';
import { Button } from './components/button/index';

import './App.scss'
import { async } from 'q';

const apiUrl = '/search/photos';

interface IState {
  items: Array<Image>;
  total: number;
  totalPages: number;
  currentPage: number;
  value: string;
}

export class App extends React.Component<{}, IState> {
  public state = {
    items: [],
    total: 0,
    totalPages: 0,
    currentPage: 1,
    value: ''
  };

  private loadImages = async() => {
    const currentPage = this.state.currentPage + 1;
    const { items } = await this.fetchImages(this.state.value, currentPage);
      const newItems = [...this.state.items, ...items];
      this.setState(state => ({...state, currentPage,  items: newItems}));
  }

  private fetchImages = async(value: string, page: number) => {
    const { currentPage } = this.state;
    const axiosConfig = {
      params: {
        query: value,
        page: page
      }
    }

    const response = await unsplashApi.get<SearchResponse>(apiUrl, axiosConfig);
    const { total_pages: totalPages, total, results: items } = response.data;
    return { totalPages, total, items }
  };

  private search = async (value: string) => {
   const responseData = await this.fetchImages(value, this.state.currentPage);

    this.setState(state => ({...state, ...responseData,value}));
  };

  public render() {
    return <div className={'page-container'}>
      <Nav onSearch={this.search}/>
      <Grid {...this.state} />
      <Button onClick={this.loadImages}>Show more</Button>
    </div>;
  }
}




