import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./popovers.css";

export default class SitePopover extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <span id="site-popover-main">
                <Button id="Popover1" onClick={this.toggle}>
                    {this.props.siteTitle}
                </Button>
                <Popover id="popover-main" placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    {/* <PopoverHeader>{this.props.siteDescription}</PopoverHeader> */}
                    <PopoverBody>
                        <table id="popover-table">
                            <td>
                                <img id="popover-img" src={this.props.imgUrl} alt={this.props.siteTitle} />
                            </td>
                            <tr>
                                <button className="popover-buttons"><a className="website-anchor" href={this.props.siteUrl} target="_blank" rel="noopener noreferrer">Website</a></button>
                            {/* </tr>
                            <tr> */}
                                <button className="popover-buttons">Take Me There!</button>
                            </tr>
                        </table>
                    </PopoverBody>

                </Popover>
            </span>
        );
    }
}
