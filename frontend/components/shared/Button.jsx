import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

export default class Button extends React.Component {

    static propTypes = {
        as: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
        ]),
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {
        as: 'a',
    }

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        if (this.props.onClick)
            this.props.onClick();
    }

    render() {
        const { as: Element, className, ...props } = this.props;
        const classes = classNames('button', className);
        return <Element className={classes} onClick={this.onClick} {...props}></Element>
    }
}