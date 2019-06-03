import React, { RefObject } from 'react';

import classnames from 'classnames';

import './GridItem.scss';

interface IGridItemProps {
  id: string;
  url: string;
  description: string;
  likes: number;
  link?: string;
  className?: string,
}


export class GridItem extends React.PureComponent<IGridItemProps> {
  public state = {
    spans: 0
  };

  private imageRef: RefObject<HTMLImageElement> = React.createRef();

  componentDidMount(): void {
    this.imageRef.current!.addEventListener('load', this.setSpans);
  }

  componentWillUnmount(): void {
    this.imageRef.current!.removeEventListener('load', this.setSpans);
  }

  render() {
    const {url, className} = this.props;
    const {spans} = this.state;

    return <div className={classnames('grid-item', className)} style={{gridRowEnd: `span ${spans}`}}>
      <img src={url} alt='' ref={this.imageRef}/>
    </div>;
  }

  private setSpans = () => {
    const imageHeight = this.imageRef.current!.clientHeight;
    const rawHeight = 10;// Looking to Grid.scss
    const spans = Math.ceil(imageHeight / rawHeight);
    this.setState(state => ({...state, spans}));
  }
}

