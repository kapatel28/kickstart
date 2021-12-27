import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';

//<Menu.Item>   CrowdCoin   </Menu.Item>
//<Menu.Item>  Campaings  </Menu.Item>
//<Menu.Item>   +   </Menu.Item>


export default () => {
return (
<Menu style={{marginTop: '10px'}}>

  <Link route='/'>
    <a className="item">
      CrowdCoin
    </a>
  </Link>

  <Menu.Menu position = 'right'>

    <Link route='/'>
      <a className="item">Campaings</a>
    </Link>

    <Link route='/campaigns/new'>
      <a className="item">+</a>
    </Link>

  </Menu.Menu>

</Menu>


);

}
