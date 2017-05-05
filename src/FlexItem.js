/** Created by ge on 4/24/16. */
import React, {Component, PropTypes, createElement} from 'react';
import {flexFluid, flexFixed} from "./style-globals";

const styles = {};
var {any} = PropTypes;

export default class FlexItem extends Component {
    static propTypes = {
        /** if a component is passed in, then it is used to substitute the `div` container */
        component: any,
        /** if the component is fluid (width/height) */
        fluid: any,
        /** if the component is fixed (width/height) */
        fixed: any,
        /**  width e.g. `100px`, `50%`, `40em` etc. */
        width: any,
        /** height e.g. `100px`, `50%`, `40em` etc. */
        height: any,
        /** style of component */
        style: any,
        children: any
    };

    static defaultProps = {
        component: 'View',
        style: {}
    };

    componentWillUnmount() {
    }

    render() {
        var flexStyle;
        const {
            component: Component,
            style,
            fluid,
            fixed,
            width,
            height,
            children,
            ...props
        } = this.props;
        if (fluid) flexStyle = flexFluid;
        if (fixed) flexStyle = flexFixed;
        return (
            <Component {...props} width={width} height={height} style={{...flexStyle, ...style}}>
                {children}
            </Component>
        );
    }
}
