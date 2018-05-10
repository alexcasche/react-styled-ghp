'use strict';

import sidebarBase from './sidebarBase';
import sidebarFactory from './sidebarFactory';

const Styled = sidebarBase.extend `
  .sidebar__menu {
    transform: ${props => (!props.isOpen)
      ? (props.side === 'right')
        ? 'translate3d(100%, 0, 0)'
        : 'translate3d(-100%, 0, 0)'
      : 'translate3d(0, 0, 0)'
    };
  }
  .sidebar__page {
    transform: ${props => (!props.isOpen)
      ? 'translate3d(0, 0, 0)'
      : `translate3d(0, 0, -${props.menuWidth})`
    };
  }
`;

export default sidebarFactory(Styled);