import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

 class FlashMessage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

    render() {
        const {id, type, text } = this.props.message; 
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <div className="ui two column centered grid">
                    <div className="column">
                        <div className={classnames('ui', {
                            'positive': type === 'success',
                            'negative': type === 'error'
                        }, 'message')}>
                            <i onClick={this.onClick} className="close icon"></i>
                            <div className="header">
                                {type === 'success' ? "Hurray!" : "We're Sorry!"}
                            </div>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;