declare module '*.svg' {
    import React from 'react';
    import {SvgViewProps} from '@typings/svg/svg';
    const content: React.FC<SvgViewProps>;
    export default content;
}
declare module '*.png' {
    import {ImageSourcePropType} from 'react-native';
    export default '' as ImageSourcePropType;
}
declare module '*.jpeg' {
    import {ImageSourcePropType} from 'react-native';
    export default '' as ImageSourcePropType;
}
declare module '*.jpg' {
    import {ImageSourcePropType} from 'react-native';
    export default '' as ImageSourcePropType;
}
declare module 'react-native-modern-datepicker';
