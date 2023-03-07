import React, {Component} from 'react';
import Base, {BaseProps} from './base';

export default class Refresh extends Component<Partial<BaseProps>> {
  static defaultProps = {
    height: '16px',
    viewBox: '0 0 22 16',
    predefinedClassName: 'data-ex-icons-refresh'
  };

  render() {
    return (
      <Base {...this.props}>
        <path d="M17.65 4.35L14.86 7.14C14.54 7.46 14.76 8 15.21 8H17C17 11.31 14.31 14 11 14C10.21 14 9.44 13.85 8.75 13.56C8.39 13.41 7.98 13.52 7.71 13.79C7.2 14.3 7.38 15.16 8.05 15.43C8.96 15.8 9.96 16 11 16C15.42 16 19 12.42 19 8H20.79C21.24 8 21.46 7.46 21.14 7.15L18.35 4.36C18.16 4.16 17.84 4.16 17.65 4.35ZM5 8C5 4.69 7.69 2 11 2C11.79 2 12.56 2.15 13.25 2.44C13.61 2.59 14.02 2.48 14.29 2.21C14.8 1.7 14.62 0.84 13.95 0.57C13.04 0.2 12.04 0 11 0C6.58 0 3 3.58 3 8H1.21C0.76 8 0.54 8.54 0.86 8.85L3.65 11.64C3.85 11.84 4.16 11.84 4.36 11.64L7.15 8.85C7.46 8.54 7.24 8 6.79 8H5Z" />
      </Base>
    );
  }
}
