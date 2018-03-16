import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./modal.css";

export default class SitePopover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.runRoute = this.runRoute.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    runRoute() {
        this.props.calculateRoute();

    }

    render() {
        return (
            <span id="site-modal-main">
                <Button onClick={this.toggle}>{this.props.siteTitle}</Button>
                <Modal id="modal-main" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <h3>{this.props.siteTitle}</h3>
                        <table id="modal-table">
                            <td>
                                <img id="modal-img" src={this.props.imgUrl} alt={this.props.siteTitle} />
                            </td>
                            <tr>
                                <button className="modal-buttons"><a className="website-anchor" href={this.props.siteUrl} target="_blank" rel="noopener noreferrer">Website</a></button>
                                <button className="modal-buttons" onClick={this.runRoute}>Take Me There!</button>
                            </tr>
                        </table>
                    </ModalBody>
                </Modal>
            </span>
        );
    }
}
