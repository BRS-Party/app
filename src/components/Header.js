import React from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

export default () => (
  <Navbar brand='BRS-Party' right>
    <NavItem href='/stock'><Icon>search</Icon></NavItem>
    <NavItem href='/stats'><Icon>settings</Icon></NavItem>
  </Navbar>
)
