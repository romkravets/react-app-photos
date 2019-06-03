import React from 'react';
import { Image } from '../../types/search-api';
import { GridItem } from './GridItem';
import './Grid.scss';
import { Button } from '../button';

interface IProps {
  items: Array<Image>;
  totalPages: number;
  total: number;
}

export class Grid extends React.PureComponent<IProps> {
  render() {
    const {total, items} = this.props;

    return <div className={'grid'}>
      <div className='grid__content'>
        {
          items.map(item => {
            const {description, urls, likes, id} = item;
            return <GridItem
              className={'grid__item'}
              id={id}
              description={description}
              url={urls.small}
              likes={likes}/>;
          })
        }
      </div>
      <div>Found: {total} items</div>
      <Button>Show more</Button>
    </div>;
  }
}
