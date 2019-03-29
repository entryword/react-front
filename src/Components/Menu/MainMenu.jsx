import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu, Segment } from 'semantic-ui-react'

class MainMenu extends Component {
  state = { activeItem: 'About' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item name='Collection' active={activeItem === 'Collection'} onClick={this.handleItemClick} />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {/*<Segment>*/}
          {/*<img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
        {/*</Segment>*/}
      </div>

    )
  }
}

export default MainMenu;
