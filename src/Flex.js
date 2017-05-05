import React, {PropTypes, Component} from 'react';
import {flexRow, flexColumn} from "./style-globals";
import {View} from 'react-native-web'

export default class Flex extends Component {
    constructor(props) {
        super(props);
        this._props = props;
        console.log(props);
    };

    render() {
        const {component = "View", style, row, column, fill, align, justify, children = [], ...props} = this._props;
        const Component = component;
        let thisStyle;
        if (column) thisStyle = flexColumn;
        if (row) thisStyle = flexRow;
        if (fill) thisStyle = {
            ...thisStyle,
            position: "absolute",
            top: 0, bottom: 0, left: 0, right: 0
        };
        if (align) thisStyle.alignItems = align;
        if (justify) thisStyle.justifyContent = justify;
        console.log("this style")
        console.log(thisStyle)
        return (
            <Component style={ {...thisStyle, ...style}} {...props}>
                {children}
            </Component>);
    };
};


const {any, bool, string} = PropTypes;
Flex.prototype.propTypes = {
  /** an optional */
  component: string,
  row: any,
  column: any,
  fill: bool,
  /** one of center, start, end */
  align: string,
  /** one of stretch, center, start, end */
  justify: string,
  style: any
};

Flex.prototype.defaultProps = {
  component: "View"
};

