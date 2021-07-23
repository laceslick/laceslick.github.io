import React, { Component } from 'react';
import { Menu, Dropdown, Image, Input } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <Menu attached='bottom' inverted>
                <Menu.Item style={{ padding: 5 }} >
                    <Image src='https://cdn.discordapp.com/attachments/236152279839801344/868161637671137300/unknown.png' size='mini' spaced='right' />
                </Menu.Item>
                <Menu.Item header>
                    LaceSlick exists.
                </Menu.Item>
                {/* <Menu.Item fitted >
                    <Input list='projects' placeholder='Search...' icon='search' />
                    <datalist id='projects'>
                        <option value='Corruption Calculator'>Corruption Calculator</option>
                        <option value='Home'>Home</option>
                    </datalist>
                </Menu.Item> */}
                <Menu.Item fluid href='https://teavana-t.github.io/'  > <Image src='http://stop-it.get-some.help/8RjBBvi.png' avatar size='mini' spaced='right' /> Powered by Teavana </Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text="Tools">
                        <Dropdown.Menu>
                            <Dropdown.Item content="haha pp" >
                                <Image src='https://cdn.discordapp.com/attachments/236152279839801344/868161871721680936/unknown.png' />
                                pp
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        content="Home"
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar;