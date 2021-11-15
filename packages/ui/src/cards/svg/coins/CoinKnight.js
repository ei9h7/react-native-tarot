import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCoinKnight = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={400}
        height={702.667}
        viewBox="0 0 300 527"
        {...props}>
        <Path d="M22.2.8 0 1l.1 263c.1 193.6.5 263 1.3 263s1.1-5.7.9-19.7c0-10.9.1-19.1.3-18.2.4 1.3 2.7 1.7 12.7 2.3 11.2.6 205.9 2.9 259.4 3l23.3.1V526l-27.7.3-27.8.2 28.8.3 28.7.2-.1-139.8c-.1-76.8-.3-139-.5-138.2-.2.8-.5 35.7-.6 77.4-.2 49.5-.6 76-1.3 76.3-.5.1-2-1.3-3.3-3.2-1.2-1.9-2.9-3.5-3.7-3.5-1.9 0-8.5 5.9-8.5 7.6 0 .8-1 1.4-2.5 1.4-1.8 0-2.8-.7-3.5-2.5-.5-1.4-1.6-2.5-2.5-2.5-.8 0-1.5-.9-1.5-2 0-3.8-8.3-4.1-8.8-.2-.3 2.2-1 2.6-4.8 2.3-2.7-.3-3.8 2.3-2.1 5 1 1.7.9 2.2-.6 3-2.7 1.5-1.1 2.9 3.4 2.9 5.1 0 4.2 1.6-1.3 2.3-7.3 1-24.5 5.6-44.2 11.7-5.5 1.6-12.4 3.3-15.5 3.6-3.1.4-6.4 1.1-7.3 1.6-2.1 1-2.1.9-.8-8.5.6-3.7 2.1-9.4 3.5-12.7 2.9-6.9 3.1-9 .9-13.5-1.5-3.2-1.4-3.8.5-10.2 1.1-3.7 3.2-11.5 4.6-17.2 1.4-5.8 2.6-10.5 2.8-10.6.1-.1 1.6-1.1 3.2-2.2 1.7-1.1 4.1-2.4 5.5-2.8 2.7-.8 10-6.2 10-7.4 0-1.1-6.3-3.1-9.8-3.1-2.5 0-3.2-.4-3.2-1.9 0-1 .7-2.4 1.5-3.1.8-.7 1.5-1.8 1.5-2.5s1.8-2.5 4-4c3.8-2.6 8-9.3 8-12.8 0-.9.8-2.1 1.9-2.6 3.1-1.7 5.3-8.7 4.6-14.3-.4-2.6-1.1-5-1.6-5.3-.5-.3-.6-2.5-.3-4.8.5-3.6 0-5.3-3.4-11.7-2.2-4.1-4.3-9.2-4.7-11.4-.8-3.8-.7-3.8 1.6-2.6 3.6 1.9 8.9 7.7 8.9 9.7 0 1 .6 2.8 1.4 3.9 1.8 2.5 2.3 5.5 1.3 7.1-1 1.6.5 1.7 2.1.1.9-.9 1.2-.9 1.2.1 0 .7.4.9 1 .6.5-.3.8-2 .6-3.7-.2-1.7.2-4.2.9-5.7.8-1.4 1.8-4.4 2.4-6.6 1.2-4.6 5.9-10.7 6.7-8.7.3.6.9 1 1.4.7.5-.3 1.6.2 2.4 1.1.9.8 1.6 1.1 1.6.5 0-.6.9-1.1 2-1.1 1.4 0 1.8.5 1.3 1.7-.3 1.1.1.9 1.2-.6 1.6-2.1 1.9-2.1 2.7-.7.5.9 1.6 1.6 2.5 1.6 1.5 0 1.5-.2 0-1.8-1.9-2-2.2-4.2-.8-4.2.5 0 1.8 1.2 2.9 2.7l1.9 2.7 3.1-2.5c1.7-1.3 3.4-3.2 3.7-4.2.4-.9 1-1.7 1.4-1.7.4 0 .6-1.3.3-2.8-.2-1.8.2-3.5 1.2-4.5 1.4-1.3 1.5-2.4.6-6.3-.6-2.5-.8-5.4-.5-6.4 1-3-.5-7-2.6-7-1.4 0-1.9-.7-1.9-2.5 0-1.4-.4-2.5-1-2.5-.5 0-1-1.3-1-3 0-3.3-2.8-11-4.4-12.3-.7-.6-.4-.7.7-.3 1.2.4 1.7 0 1.7-1.2 0-.9.3-3.3.6-5.4.5-3 .2-4-1.9-5.8-3.2-2.8-3.3-8.3 0-8.8 1.4-.2 2-.8 1.6-1.8-.3-.8-.1-1.4.5-1.4s1.2.6 1.5 1.2c.2.7.7 1 1.1.6.4-.3.1-2-.8-3.6-1.5-3-1.5-3 1.3-2.7 1.5.1 3.3.5 4 .9.7.5 1.5.6 1.7.3.8-.7-1.5-4.7-2.6-4.7-.5 0-.7-.7-.3-1.6.3-.8 1.2-1.3 1.9-1 .7.3 1.6.1 1.9-.3.3-.5 1.4-.7 2.5-.4 1.1.3 2.7 0 3.5-.7 1.2-1 1.5-.9 1.5.6.1 1.8.1 1.8 1.1.1 1.4-2.5-.4-4.8-2.3-2.9-1.7 1.7-3.1 1.5-2.4-.3.4-1-.1-1.5-1.4-1.5-1.1 0-2 .6-2 1.2-.1.8-.6.6-1.4-.5-1.7-2.2-4.4-1.3-4.8 1.6-.2 1.2-1.1 2.3-2.1 2.5-1.6.3-1.7-.1-1.1-3.2.5-2.9.3-3.6-1-3.6-.9 0-1.6-.8-1.6-2.1 0-2.5-1.6-1.7-2.3 1.1-.4 1.5.1 2.4 1.6 3 2.1.8 2.1.8.3 1.6-1.3.5-2.1.3-2.4-.4-.2-.7-1.3-1.3-2.5-1.3-1.8-.1-1.9-.2-.4-.6 2.8-.7 1.6-3.9-1.3-3.5-2.4.2-2.4.2-.5-1.2 1.1-.8 2.3-1.2 2.8-.9.4.2 1.4-.1 2.2-.7.8-.6 1.9-.8 2.6-.4.7.4 1 .2.7-.7-.3-.8-1.5-1.4-2.7-1.3-1.3 0-2-.4-1.7-1.1.2-.7 0-1.8-.4-2.5-.7-1.1-1.1-1.1-2.4-.1-.9.8-1.6 2-1.6 2.9 0 .9-1 2.6-2.2 3.9-1.7 1.8-1.9 2.6-1 3.5 1.7 1.7 1.5 2.8-.4 2.8-2.3 0-4.3-2.9-4.4-6.1 0-1.5-.8-3.7-1.9-5l-1.9-2.3-2.1 4.2c-1.3 2.5-2.1 6.1-2.2 9.4-.1 5.9-.4 5.5-1.4-1.2-.5-3.8-1.2-4.9-4.3-7-4.1-2.8-8.1-4.2-9.4-3.4-.4.3-.1 1.8.9 3.4 1.4 2.4 1.5 3.4.5 5.4-.7 1.5-1.9 2.5-2.9 2.4-5-.4-11.4.3-10.8 1.2.3.5.1 1-.4 1-.6 0-1.1-.4-1.1-.9 0-.6-1.7-.7-3.7-.5l-3.8.6 2.5-2.1c1.4-1.1 4-2.5 5.8-3 9.1-2.6 17.2-14.5 17.2-25.4 0-8.4-4.4-17.5-10.8-22.2-13.2-9.8-30.7-7.9-40.7 4.4-4.9 6.2-6.3 10-6.4 17.7-.1 5 .5 7.3 2.8 11.7 2.8 5.3 2.8 5.6 1.1 7.2-1 .9-4 2.2-6.6 3-8.1 2.2-11.2 3.8-12.3 6.1-.7 1.5-2.5 2.6-5.8 3.4-2.6.6-5.8 1.4-7 1.7-1.7.4-2.3.1-2.3-1.1 0-1-.4-1.5-.9-1.2-1.1.7-2.7-1.3-3.4-4.4-1-4.5-3.3-9.9-5-11.8-.9-1-1.7-2.2-1.7-2.6 0-.4-2.8-3.9-6.2-7.8-5.1-5.6-6.3-7.7-6.3-10.4 0-2.6.4-3.4 1.7-3.4 3.3 0 8.4-3.2 10.8-6.8 3.1-4.5 3.3-8.2.6-10.4-1.7-1.5-1.8-2-.7-2.7 1.1-.7 1.1-1.5.2-4.1-1.7-5-1.4-7.1 1.6-10.2 2.1-2.2 2.3-2.8 1-2.8-2 0-2.3-1.5-.5-2.6.6-.4 1.4-.2 1.6.4.5 1.7 2.2.4 2.2-1.8s-9.6-13-11.6-13c-.8 0-4.8-1.8-8.9-4-4.1-2.2-8.2-4-9-4-.8 0-2.4 1.1-3.7 2.4-2.6 2.8-11.2 4.1-11.4 1.8-.1-.6-.2-1.7-.3-2.3 0-.6-1-.8-2.2-.4-1.5.5-1.9.4-1.4-.5.9-1.4-2.8-5-5.1-5-.9 0-3.2-1.1-5-2.5-4.1-3.1-5.4-3.1-8.7-.1-1.8 1.6-3.3 2.2-5.1 1.9-1.7-.4-2.6-.1-2.6.7 0 .9-.4.9-1.6-.1-1.5-1.2-1.9-1.1-3.2.9C58.4 65 56.9 66 56 66c-1.8 0-6 4.4-6 6.2 0 .4 1.1 1.4 2.5 2 1.4.6 2.5 1.5 2.5 2s-.5.6-1.1.2c-1.5-.9-5.8 4.5-5.9 7.3 0 1.2.8 2.6 1.8 3.2 1.5.8 1.5 1.3.4 3.1-.7 1.2-1 3-.7 4.1.4 1.3.2 1.9-.8 1.9-2.3 0-2.8 2.8-.8 4.2.9.7 2 2.1 2.4 3 .8 2.3 3.2 2.3 4.9 0 .7-1.1 2.3-2.4 3.6-3.1 1.2-.6 2.2-1.9 2.2-2.9 0-.9.9-2.3 1.9-2.9 2.3-1.4 3.7-.2 4.3 3.7.4 2.9 4.8 4.3 4.8 1.6 0-3.5 2.8-1.4 3.5 2.6 1.6 8.1 1 16-1.3 19.8-2.3 3.7-2.8 6.5-1.3 7.4 1.8 1.1 7.5-1.5 10.2-4.6 1.5-1.8 3.1-2.9 3.5-2.5.5.5.1 1.3-.9 1.8-1.1.7-1.6 1.7-1.2 2.8.3 1.1-.2 2.4-1.1 3.2-1 .8-3.9 4.7-6.5 8.7-4.4 6.8-4.8 7.9-5.4 15.8-1 11.2 0 20.3 3.6 35.3 2.8 11.5 3 13.1 2.1 20.5-.5 4.5-1.1 8.8-1.3 9.6-.3.9 1.7 2.5 5.5 4.5 3.5 1.7 6.2 3.9 6.7 5.2.9 2.6 1.7 2.8-11.1-3-3-1.3-7.2-2.7-9.2-3.1-2-.4-3.8-1.2-4-1.8-.2-.6-1-.8-1.6-.4-.8.4-1.2 3.6-1.2 8.5 0 4.3-.2 8-.5 8.3-.3.3-3.6-.3-7.3-1.2-3.7-1-10.7-2.5-15.6-3.3-6.4-1.2-9.6-2.3-11.3-3.9l-2.5-2.3-1.7 2.1c-1 1.3-3.5 2.5-6.2 2.9-2.4.4-6.1 1.4-8.3 2.1-2.1.8-4.1 1.3-4.3 1-.2-.2-.5-52.5-.6-116.3l-.2-116 54.3-.7c92.6-1.1 237-1.9 239.6-1.2 2.5.6 2.5.8 2.9 11.4l.3 10.7.2-11.8L300 0 172.3.2C102 .4 34.5.6 22.2.8zM76 63.5c-1 1.9-1.1 2.8-.2 3.7.9.9 1.8.6 3.8-1.3 2.6-2.3 2.6-2.3 1.5-.2-.6 1.3-1.6 2.3-2 2.3-1.8 0-2.1 3.4-.6 4.9 1.5 1.5 1.7 1.4 2.6-.2.6-.9 1.5-1.7 2.1-1.7.6 0 .4.8-.5 1.8-1 1-1.7 2.5-1.7 3.3 0 2.1-2.7 5.6-3.6 4.7-.4-.5 0-1.6.9-2.6 2-2.2 1.3-3.2-2-3.2-2.4 0-3.1-1.4-1.3-2.5 1.7-1.1 1.1-2.5-1.6-3.6-2.4-.8-2.5-1.1-1.1-2.2.9-.7 2.1-2.5 2.7-4.1.6-1.6 1.3-2.6 1.7-2.2.3.3 0 1.7-.7 3.1zm-9 4.9c0 .8 1 1.6 2.2 1.9 1.9.5 2 .8.8 2.3-.9 1-1.6 1.2-1.8.5-.5-1.6-3.2-1.3-3.8.4-.9 2.2-2.7 1.8-2.1-.5.3-1.1.1-2-.5-2-.5 0-1.2.9-1.5 2-.7 2.6-1.9 2.6-2.6-.1-.4-1.6-1-1.9-2.8-1.4-2.1.7-2.2.6-.7-.8.9-.9 2.4-1.4 3.7-1 1.5.4 2.1.1 2.1-1.1 0-1.9 1.1-2.1 2.8-.4.9.9 1.3.7 1.8-.5.7-1.9 2.4-1.3 2.4.7zm48.7 3.1c2.3 1.4 4.3 2.9 4.3 3.3 0 .4-2.4 2.3-5.3 4.2-5.2 3.6-7 7.1-4.9 9.2 1.1 1.1 10.1-4.9 10.2-6.7 0-1.1 5.1-4.5 6.7-4.5 1.2 0 7.3 5.1 7.3 6 0 .4-2.4 1.9-5.2 3.4-2.9 1.4-6.9 4-8.8 5.8-2 1.8-5.5 4.8-7.8 6.7-4.2 3.2-4.4 3.2-5.8 1.5-.8-1.1-2-3.1-2.5-4.7-1.3-3.1-4.3-3.6-7.1-1-1.7 1.5-1.8 1.5-1.8 0 0-1 .7-1.7 1.5-1.7s1.5-.4 1.5-.8c0-.8 4.1-7.5 8.1-13.4 2.4-3.4 2.6-5.6.4-3.8-.8.7-1.5 1.9-1.5 2.6 0 .8-.4 1.4-1 1.4-1.5 0-1.3-.7 1.6-5.6 1.4-2.4 3.3-4.4 4.2-4.4.8 0 3.5 1.1 5.9 2.5zm-25.5.7c1.7-1.7 3.3-1.5 1.8.3-.7.8-2 1.5-3 1.5s-2.3.7-3 1.5c-1.8 2.2-2.3 1.2-.9-1.9 1-2 1.5-2.3 2.6-1.4 1 .8 1.7.8 2.5 0zm11.3 1.8c.7 1.1-5 11.1-8.3 14.5-2.3 2.5-3.7 15.1-1.8 15.9.6.2.3.5-.6.5-2 .1-2.4 2.1-.7 3.8.7.7-.1.7-2.5-.1-3.7-1.1-4.8-2.6-2.1-2.6 1.9 0 1.9-1 .1-3.5-1.9-2.9-2.4-6.9-1.6-11.8 1-5.2.6-5.7-1.9-2.6-1.1 1.3-2 1.9-2.1 1.3 0-.6.7-1.7 1.6-2.5 1-.8 1.4-2.3 1.2-4.1-.4-2.1 0-2.8 1.3-2.8.9 0 2.3-.7 3-1.7 3.1-3.6 13-6.6 14.4-4.3zm-34 5.5c0 4.1 0 4.1-8.2 3.6-2.8-.1-3-2.1-.3-2.8 1.1-.3 1.8-.9 1.5-1.3-.3-.5 0-1.2.6-1.5.6-.4 1.3.2 1.6 1.4.8 3.1 2.9 1.9 2.5-1.4-.2-1.9.1-2.6 1-2.3.8.3 1.3 2 1.3 4.3zm7.5.5c0 .5-.4 1-.9 1-.6 0-1.3-.5-1.6-1-.3-.6.1-1 .9-1 .9 0 1.6.4 1.6 1zm-20 4c0 .5-.9 1-2 1s-2-.5-2-1c0-.6.9-1 2-1s2 .4 2 1zm21 .6c0 1.4-.3 1.4-1.5.4-.8-.7-1.5-1.4-1.5-1.6 0-.2.7-.4 1.5-.4s1.5.7 1.5 1.6zm-16 4c0 .2-.9.4-2.1.4-1.1 0-1.8-.4-1.4-1 .5-.8 3.5-.3 3.5.6zm15.4 4.5c-.3.5-1 .7-1.5.3-.5-.3-.7-1-.3-1.5.3-.5 1-.7 1.5-.3.5.3.7 1 .3 1.5zm53-.5c1 2.7.7 3-3 2.6-3.4-.4-3.4-.5-1.8-2.3 2.1-2.3 4-2.4 4.8-.3zM81 96.5c0 1.4-.4 2.5-.9 2.5s-.8-1.1-.8-2.5.3-2.5.8-2.5.9 1.1.9 2.5zM56.5 96c.3.5.2 1-.4 1-.5 0-1.3-.5-1.6-1-.3-.6-.2-1 .4-1 .5 0 1.3.4 1.6 1zm64.9.6c.9.3 1.3 1 1.1 1.5-.6.9 3 4.9 4.5 4.9.6 0 1-.8 1-1.8.1-1 .8-.4 2 1.8 2.4 4.4 2.4 5 .2 5-.9 0-2.3.9-3 2-.7 1.1-1.9 2-2.7 2-.8 0-1.5.7-1.5 1.5 0 1.8.2 1.9-7-.1l-5.9-1.7 2.4-1.8c1.3-1.1 2.8-1.9 3.4-1.9.6 0 1.1-.9 1.1-1.9 0-1.1.5-2.3 1-2.6.6-.3 1-2.2 1-4.1 0-3.7 0-3.7 2.4-2.8zM103 101c0 .5-1.3 1-3 1-1.6 0-3-.5-3-1 0-.6 1.4-1 3-1 1.7 0 3 .4 3 1zm-7.6 5.1c-1.2 1.3-2 1.6-2.2.9-.3-.7.2-1.6.9-2.1 2.5-1.6 3.2-.9 1.3 1.2zm6.2.8c-.3.5-5.2 4.3-10.8 8.6-5.7 4.2-11.1 8.8-12.1 10.1-1.8 2.3-4.7 3.3-4.7 1.6 0-1.4 15.6-13.6 19.6-15.4 1.3-.6 2.4-1.5 2.4-1.9 0-.5 1.2-1.5 2.8-2.3 3.2-1.8 3.5-1.9 2.8-.7zm-17 3c.5.5 1.8 1.1 2.9 1.3 1.9.4 1.9.5-.3 1.7-2.1 1.1-2.6 1-3.9-.8-.8-1.2-1.9-1.9-2.4-1.6-.5.4-.9.1-.9-.4 0-1.3 3.2-1.4 4.6-.2zm19.1 2.7c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm109.1 1.4c11.2 5.1 16.2 12.7 16.2 24.5 0 5.7-.5 8.1-2.6 12.1-2.8 5.4-9.5 11.7-10.2 9.6-.2-.6-1.5-1.2-2.9-1.2-1.8 0-2.4.4-1.9 1.5.4 1.1-.1 1.5-1.7 1.5-1.8 0-1.9-.2-.7-1 1.1-.7.2-1-3.1-1-5.9 0-8.4-2.3-5.1-4.6 2.4-1.6 2.9-4 1-4.6-1.6-.6-.1-2.8 1.9-2.8.8 0 3.7 1.2 6.4 2.7 2.7 1.4 5.2 2.3 5.6 2 .3-.4-.4-2.9-1.7-5.7-2.6-5.6-2.3-6.5 4.2-10.6 2.1-1.4 3.8-2.9 3.8-3.4 0-.6-3.2-1-7.3-1h-7.4l-1.6-5.1c-1-2.8-1.7-6.5-1.7-8.1 0-5.1-2.4-2.6-3.7 4-2 9.9-2.3 10.2-10.3 10.2-3.9 0-7 .4-7 .9s2.6 2.4 5.8 4.2c3.1 1.8 5.9 3.4 6.1 3.5.2.2-.4 2.3-1.3 4.8-1.5 3.8-2.2 4.5-5.9 5.5-2.3.7-4.7 1.4-5.4 1.7-1.5.6-3.9-3.9-5.2-9.6-1.3-5.8.4-15.5 3.4-20.2 2.8-4.2 9.6-9.2 14.6-10.6 5.6-1.7 13-1.3 17.7.8zm-129.8.9c0 .4-1.2 1.8-2.7 3.2-2.3 2.1-2.5 2.2-1.8.4.4-1.1.9-2.8 1.2-3.7.5-1.6 3.3-1.5 3.3.1zm36.5 1.6 6 1.5-6.4-.4c-3.5-.3-6.8-.9-7.4-1.5-1.5-1.5.3-1.4 7.8.4zm-13.9 1.6c.2 3.1.5 3.3 1.9 1.5 1.5-1.9 3.5-1.4 3.5 1 0 1.7 0 1.7 3.8-.2 3.6-1.7 5.4-1.2 4.5 1.4-.6 1.5-.3 1.4 1.6-.3 1.9-1.6 2.5-1.7 4.3-.6 1.5.9 2.3 1 3.1.2 1.5-1.5 4-1.4 3.5.1-.6 1.8-5.9 2.9-7.5 1.6-.9-.7-1.7-.7-2.7.1-1.7 1.4-22.4 2.2-23.2.9-.3-.4.4-.8 1.5-.8 1.2 0 2.1-.5 2.1-1 0-.6-.7-1-1.5-1s-1.5-.4-1.5-1c0-.5.7-.7 1.6-.3 1 .4 1.7-.2 2.1-1.6.6-2.3 2.7-2.4 2.9 0zm-8.9 4.1c-.2 1.3-.4.5-.4-1.7-.1-2.2.1-3.2.4-2.3.2 1 .2 2.8 0 4zm36-4.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm72 10.8c1 3.1.9 3.5-1.1 4-3 .8-3.8-.5-2.4-4.2 1.6-4.1 2.2-4 3.5.2zm-102.3-1.8c1.3.5 1.4.9.5 2-1.6 2-11.9 1.9-11.9 0 0-1.1 1.4-1.6 4.8-1.9 2.6-.2 4.8-.4 4.9-.5.1-.1.9.1 1.7.4zm4.7 1.7c-.1 1.2-1.5.9-1.9-.4-.3-.6.1-1 .8-.8.6.3 1.1.8 1.1 1.2zm5.9 2.3c0 .8-.5 1.2-1 .9-.6-.4-.8-1.1-.5-1.6.9-1.4 1.5-1.1 1.5.7zm95.2 6.5c1.6 2.8 1.6 2.9-.9 4.9-3.1 2.4-5.1 2.5-7.5.3-3.6-3.2-1.5-8.1 3.5-8.1 2.6 0 3.6.6 4.9 2.9zm7.8-2.2c0 .5-1.1 1.6-2.5 2.5-2.3 1.5-2.5 1.5-3.4-.3-.6-1-.7-2.1-.4-2.5 1-.9 6.3-.7 6.3.3zm-21 2.1c0 2.3-1 2.6-2.8.8-1.8-1.8-1.5-2.8.8-2.8 1.3 0 2 .7 2 2zm-83.9 3.2c2.2 1.2 3.9 2.5 3.9 3 0 .4-1.8 2.5-4.1 4.5-2.2 2-4.9 5.4-6.1 7.6-1.4 2.9-2.3 3.6-3.1 2.8-.8-.8-.8-2.6.1-6.9 1.4-7 1.5-8.2.3-8.2-.5 0-1.2 1.8-1.6 4-.7 4.4-2.5 6.5-2.4 2.8.1-4.5 2.5-9.3 4.4-9 1.3.3 1.6-.1 1.2-1.2-.9-2.3 2.7-2 7.4.6zm-13.9.1c-.6.7-1.4 4.4-1.9 8.2l-.7 7-.9-4.3c-.6-2.3-1.3-4.2-1.8-4.2-.4 0-1 1.9-1.2 4.2-.3 4.1-.4 4-.5-1-.2-4.8.1-5.6 3-8.3 3.2-2.9 6-4 4-1.6zm102.2 4c1.6 1.2 1.5 1.4-.8 3.6-3.1 2.9-4 2.3-3.1-1.8.7-3.4 1.3-3.7 3.9-1.8zm13.6 3.9c0 1.3-2.3.9-4.4-.7-1.6-1.2-1.7-1.7-.6-3 1.2-1.5 1.5-1.4 3.2.7.9 1.3 1.8 2.6 1.8 3zm-93.8-.5c6 6.6 7.3 10.3 3.5 10.3-3.1 0-8.6 4.3-13.6 10.7-2.2 2.8-4.5 5.4-5.1 5.8-1.7 1-1.1-.9.8-2.7 3-2.9 3.8-4.3 4.5-7.7.4-1.9 2.3-5.6 4.2-8.2 3.6-5 3.7-6.3.3-3.2-1.8 1.6-1.8 1.6-1.2 0 1.1-3-1.5-1.8-3.6 1.5-1.1 1.8-2 2.8-2 2.3 0-2 7.4-11.5 9-11.5.3 0 1.8 1.2 3.2 2.7zm-20.5 8.5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zM92 166.3c0 1.7-.2 1.7-3-.3-2-1.4-3-3-3-4.8v-2.6l3 2.9c1.7 1.6 3 3.7 3 4.8zm31.4-4.7c.4 1.1.1 1.4-1.1 1.2-.9-.2-1.8-.9-2.1-1.6-.6-1.8 2.5-1.5 3.2.4zm-17.1 3.2c-.5 1.2-.7 1.2-1.5-.2-1.1-2 .1-4.4 1.2-2.5.5.6.6 1.9.3 2.7zm-24.6.4c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm36.3-1.5c0 .5-1.8 2.8-4.1 5.3-2.6 2.9-3.6 3.6-2.8 2 2.7-5.6 6.9-10.1 6.9-7.3zm6.6 1.8c-1 .8-2.4 1.6-3 1.8-.6.2-.7.8-.3 1.3.4.4 1.7.3 2.7-.4 1.1-.7 2.3-1.2 2.7-1.2.5 0 0 .5-.9 1.1-1 .5-1.8 1.5-1.8 2 0 .6 1.4 0 3.1-1.2 3-2.1 3.1-2.1 5-.3 1.9 1.9 1.8 2-1.7 7.7-3.5 5.6-5.4 7.1-5.4 4.3 0-.7-.7-1.9-1.5-2.6-1.3-1.1-2-.9-4 1-3.1 2.9-3.2 1.8-.4-2.2 2.4-3.2 1.9-4.9-.8-2.7-1.2 1-1.5 1-.9.1.4-.7.3-1.9-.4-2.7-.9-1.1-.3-2 3.1-4.4 4.1-3 8.3-4.5 4.5-1.6zm40.4 0c-.7.8-1.8 1.5-2.4 1.5-.6 0-.2-.7.8-1.5 2.5-1.9 3.2-1.9 1.6 0zm-63 3.1c0 1.6-1.6 1.9-2.5.4-.8-1.3.4-3.2 1.6-2.5.5.4.9 1.3.9 2.1zm-1.7 6.1c.6 3.2-1 2.9-2.8-.7-2-3.8-1.9-4.3.4-2.8 1.1.6 2.1 2.2 2.4 3.5zm96.7-3.1c0 .2-1.6.4-3.6.4-1.9 0-3.3-.4-3-.8.5-.8 6.6-.4 6.6.4zm34.1-.2c-.9 1.1-.9 2-.2 3.5.6 1.1 1 3.7.9 5.8l-.1 3.8-.4-3.5c-.3-1.9-.9-3.9-1.4-4.5-1.6-1.6-1.1-6.5.7-6.5 1.3 0 1.4.3.5 1.4zm-91.1 1.8c0 1.3-.9 3.8-2 5.6-1.1 1.8-2 3.9-2 4.7 0 .8-.4 1.5-1 1.5-.5 0-1 .7-1 1.5s-.7 1.5-1.5 1.5c-2.1 0-1.9 2.6.3 4 1.6 1.1 1.6 1.1 0 .6-1-.3-2.4-.8-3.1-1.1-1.6-.7-4.2 3.8-3.3 5.4 1 1.6 3.6 1.3 3.6-.4 0-.8.5-1.5 1-1.5 1.8 0 1 4.5-1 5.8-1.1.7-2 2.3-2 3.6 0 1.4-.4 2.8-1 3.1-.6.4-1-1.2-1-4 0-3.7-.5-5.1-2.7-7.1l-2.7-2.5 1.9-3.4c1.1-1.8 4.4-7 7.4-11.4 4.2-6.3 6-8.1 7.8-8.1 1.7 0 2.3.6 2.3 2.2zm124.4-.6c.3.8.2 1.2-.4.9-.6-.3-1-1-1-1.6 0-1.4.7-1.1 1.4.7zm-29.4 2c.6 1.4.9 4.2.9 6.2-.2 3.5-.2 3.5-.8-.9-.4-2.6-1.3-5.4-2-6.3-.9-1.1-1-1.6-.2-1.6.6 0 1.6 1.2 2.1 2.6zm-44.2-.6c-.5 1.6-8.8 6.3-8.8 5 0-2.8 3.3-6 6.2-6 1.6 0 2.8.5 2.6 1zm13.3.6c.7.9 2.1 1.3 3.3 1 2.5-.6 4.7 3.2 3.9 6.4-.7 2.7-1.7 2.5-3.1-.5-.6-1.4-1.8-2.5-2.6-2.5-1.2 0-4.6-4-4.6-5.5 0-1.1 1.8-.5 3.1 1.1zm-95.1 2.9c0 .9-.9 1.5-2.5 1.5-2.6 0-3.4-1.5-1.2-2.3 2.3-1 3.7-.7 3.7.8zm91.3 1.1c2.2 3 1.5 4.4-1 2.1-1-.8-3.4-1.7-5.3-1.9-3.5-.4-3.5-.4-1-1.5 3.8-1.8 5.3-1.5 7.3 1.3zM255 177c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm19 1.1c0 .5-.4.9-1 .9-.5 0-1-.7-1-1.6 0-.8.5-1.2 1-.9.6.3 1 1 1 1.6zm-130.3 1.4c-1 .7-1.5 1.9-1.1 2.9.3.9.1 1.6-.5 1.6s-1.1-1.1-1.1-2.5c0-1.6.6-2.5 1.5-2.5.8 0 1.5-.5 1.5-1.2 0-.6.3-.8.7-.4.5.4 0 1.3-1 2.1zm80.3.7c0 .7-.5 2-1 2.8-.8 1.2-1 .9-1-1.3 0-1.5.5-2.7 1-2.7.6 0 1 .6 1 1.2zm-103 2.3c-.7.9-1.5 1.3-1.8 1-.3-.2.1-1.1.8-2 .7-.9 1.5-1.3 1.8-1 .3.2-.1 1.1-.8 2zm66.8-.4c1.2 1.9 1.1 2-.7 1.4-2.7-.8-6.7 1.3-5.2 2.8 1.2 1.2 1.3 7.6.1 12.2-.6 2.4-.8 1.8-.9-3.1-.1-4.1-.6-6.6-1.6-7.4-2.2-1.8-1.9-2.4 2.2-5.3 4.5-3.2 4.5-3.2 6.1-.6zM152 182c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm8.4 5c.5 1.7.4 2-.2 1-.5-.8-1.3-2.6-1.6-4-.5-1.7-.4-2 .2-1 .5.8 1.3 2.6 1.6 4zm57.6-4.5c0 1.3-3.4 5.7-5.1 6.6-1.6.8-1.9.6-1.9-1.6 0-1.6.4-2.4 1.1-2 .6.4 1.7-.2 2.5-1.4 1.4-1.9 3.4-2.9 3.4-1.6zm-64.1 5.7c1.6 5.5 1.4 6.1-1.2 7.1-1.8.7-2 .6-.9-.4 1.6-1.7 1.5-2.4-.5-4.4-1.4-1.4-1.4-1.8-.2-2.7 1.1-.7 1.1-1.1.2-1.5-1.7-.6-1.6-2.3.1-2.3.7 0 1.9 1.9 2.5 4.2zM193 185c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm-50.8 5c.3 2 0 3-.9 3-1.3 0-1.8-4.1-.6-5.3 1-1 1-.9 1.5 2.3zm83.3 4.1c-1.4 3-2.3 4.2-2 2.8.7-3.8 3.7-10.6 4.2-9.3.2.6-.8 3.6-2.2 6.5zM137 189c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm27.4 4.5c.5 1.9-.2 4-2.6 8-3.4 5.5-5.6 6.7-7.8 4-.7-.8-2.4-1.5-3.7-1.5-4.1 0-2-2.3 3.5-3.8 4.5-1.3 5.2-1.8 5.2-4 0-2.7 2.7-6.5 4-5.7.4.3 1.1 1.6 1.4 3zm56.6-.6c0 .5-.7 2.4-1.5 4.2l-1.4 3.4-.1-3.6c0-2 .3-3.9.7-4.2.9-1 2.3-.9 2.3.2zm-13.3 7.8c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm-50.7-3.8c0 1-2.4 2.1-4.3 2.1-.7 0-.3-.7.7-1.5 2.2-1.7 3.6-1.9 3.6-.6zm108 .6c1.7 2 .5 3.2-1.5 1.5-1.4-1.1-3.3-1-8.2.6-1 .3-.4-.3 1.2-1.4 3.6-2.5 6.8-2.7 8.5-.7zm-125 .9c0 .3-.5 1.7-1 3.2-.8 2-.8 2.9.1 3.5.6.4.8 1.2.5 1.8-2.2 3.5-4.4-1.7-2.6-6 1-2.4 3-4 3-2.5zm5.5 1.6c-2.7 1.2-4.3 1.2-2.5 0 .8-.5 2.2-.9 3-.9 1 0 .8.3-.5.9zm26.1 4.7c-.3.4-1.4-.1-2.4-1-1.5-1.6-1.5-1.9-.2-2.7 1.1-.7 1.7-.4 2.4 1 .5 1.1.6 2.3.2 2.7zm92.2-2.7c.3.9-.1 1.1-1.2.7-1-.4-2.5-.7-3.4-.8-1.4 0-1.3-.2.3-.9 2.5-1.1 3.7-.8 4.3 1zm-4.4 4.2c.6.4.7 1 .3 1.5-1 .9-2.7-1.6-2.6-3.7.1-1.3.1-1.3.6 0 .3.8 1.1 1.8 1.7 2.2zm-124.8-.7c1.8 1.5 1.8 1.5-1 1.3-1.6-.2-3.1-.9-3.4-1.6-.5-1.7 2-1.5 4.4.3zm29.4.5c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-13.8 2.2c-.9.9-1.5.9-2.4 0-.9-.9-.7-1.2 1.2-1.2s2.1.3 1.2 1.2zm114.5 4.4c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-102.3 7.9c-.4.8-.8 1.5-1 1.5-.2 0-.4-.7-.4-1.5s.4-1.5 1-1.5c.5 0 .7.7.4 1.5zm73.4.5c-.7 1-1.4 1.7-1.7 1.5-.4-.4 1.8-3.5 2.5-3.5.2 0-.1.9-.8 2zm-79.8 4c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-4.8 9.3c2.6 1.1 7.8 9.5 7.8 12.5 0 .7.7 1.5 1.5 1.8 2.2.9 1.9 2-1.3 5.1-1.5 1.6-4.1 4.6-5.7 6.7-1.6 2.2-3.1 3.4-3.3 2.8-.3-.9-.9-.9-2.4-.1-2.2 1.2-1.9 0 1-3.4 2.4-2.7.1-2-3 1-1.5 1.5-2.8 2.2-2.8 1.5 0-.6.5-1.4 1-1.7.6-.3 1-1.4 1-2.3 0-1.3-.5-1.2-2.1.8l-2 2.5.6-3c.5-2.5.1-3.5-2.1-5.4-2.1-1.8-2.8-2-3.5-1-.7 1.1-.9.9-.9-.5 0-1.8-.1-1.8-2-.1-1.9 1.8-2 1.7-2-.5 0-2-.2-2.1-1.7-.9-1.5 1.3-1.6 1.2-1.1-.9.4-1.2.2-2-.3-1.6-.5.3-.9-.2-.9-1.1 0-1.2-.6-1.5-2-1-1.9.6-2 .4-1.4-2.2.7-2.6.6-2.7-1.1-1.3-1.7 1.4-1.8 1.3-1.2-.8.4-1.8.2-2.2-.9-1.8-1.1.4-1.2.2-.4-1.4 1.6-2.9 1.2-3.5-1-1.5s-2.6 1.4-1-1.6c1-1.7 1.9-1.8 8.8-1.4 4.2.3 9.7.2 12.2-.3 4.8-1 7.8-.7 12.2 1.1zm5.8-.8c2 2.4.6 2.8-1.5.5-1-1.1-1.3-2-.8-2 .6 0 1.6.7 2.3 1.5zm73 3.7c0 1-.1 1-3.9-.3-1.7-.6-3.1-1.7-3.1-2.4 0-1 .8-.9 3.5.3 1.9.9 3.5 2 3.5 2.4zm-139 2.3c1.4 6.8 1 9-1.5 9-1.7 0-2-.8-2.3-5-.5-10.3 2-12.9 3.8-4zm163.4-4.9c.9.3 1.6 1.3 1.6 2.1 0 1-.6 1.3-1.6.9-.9-.3-1.8-.6-2-.6-.2 0-.4-.7-.4-1.5 0-1.7.2-1.8 2.4-.9zm-40.8 4.1c-.8.9-4.6-1.8-4-2.8.4-.6 1.3-.4 2.5.7 1.1.9 1.7 1.9 1.5 2.1zm-46.7 5.5c1.5 4.4.9 4.4-1.4 0-1.1-2-3.1-4.7-4.5-6-2.1-2-1.9-2 1.2.3 2 1.4 4.1 4 4.7 5.7zm66.6-6.2c.3.5.1 1-.4 1-.6 0-1.1-.5-1.1-1 0-.6.2-1 .4-1 .3 0 .8.4 1.1 1zm-8 3.8c-.3.3-1.1 0-1.8-.7-.9-1-.8-1.1.6-.5 1 .3 1.5.9 1.2 1.2zm29.5.2c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-15.2 4.8c7.7 2.5 9.8 4.3 5.8 5-1 .2-5.5-1.5-10.2-3.8-12.2-6.1-11.6-6.3 4.4-1.2zm-178.9-.7c2.8 1 4.3 2.9 2.3 2.9-1.5 0-6.2-2.5-6.2-3.3 0-.9.1-.9 3.9.4zm18.6.4c2.3 1 2.6 1.4 1 1.4-2.9.1-6.5-1-6.5-2 0-1.3 2-1 5.5.6zm40.2.7c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm60.3-.1c1.4 2.5.3 4.1-1.1 1.6-.6-.9-1.4-1.5-2-1.2-.5.3-.6-.1-.3-.9.8-2.2 2.1-2 3.4.5zm95.1.2c-1 .9-1.1.8-.5-.6.3-1 .9-1.5 1.2-1.2.3.3 0 1.1-.7 1.8zM175 253.2c0 .6-.7.5-1.5-.2s-1.5-1.7-1.5-2.2c0-.6.7-.5 1.5.2s1.5 1.7 1.5 2.2zm80-2.2c0 .5-.9 1-2.1 1-1.1 0-1.7-.5-1.4-1 .3-.6 1.3-1 2.1-1s1.4.4 1.4 1zm-160.1 2.6c.3 1.6.1 1.7-1.3.5-1.9-1.6-2.1-3.4-.3-2.9.6.3 1.4 1.3 1.6 2.4zm167.6-.5c.6 1.9 0 3.8-.9 2.8-1-1.2-1.6-4.9-.7-4.9.5 0 1.3.9 1.6 2.1zm-94.5 3c0 2.9.5 3.8 2.1 4.2 1.7.5 2 1.1 1.7 3.1-.3 1.5 0 2.7.8 3 1.4.6 3.7 10.4 3.2 14.2-.2 1.8-1.4 3.2-3.6 4.5-3.3 1.7-3.5 1.7-6.5-.2-5.6-3.3-12-6-13.4-5.5-.7.3-1.3.1-1.3-.4 0-1.2 7.8-3.3 9.6-2.6.8.3 1.3 1 1.2 1.5-.2.5.2 1.1.7 1.2.6.2 1.1-.6 1.3-1.8.4-2.8-3-3.8-9.4-2.9-2.9.4-4.3.2-3.9-.4.3-.6 1.6-1 2.8-1.1 2-.1 2-.2-.3-.8-3-.8-1.9-1.7 3.5-2.6 2.2-.4 5.2-1.4 6.7-2.1 1.5-.8 3.6-1.4 4.8-1.4 1.2 0 2-.7 2-1.6 0-1.4-.7-1.5-4.2-1l-4.3.6 2.9-2.4c1.6-1.4 2.4-2.6 1.8-3-.6-.3-1.3-.2-1.7.4-.9 1.5-2.5 1.2-2.5-.5 0-2.6-1.4-1.7-4.5 3-2.6 3.9-4.5 5.6-4.5 4 0-.8 7.2-10.9 8.7-12.1.8-.7 2.5-1.1 3.8-1 2.2.1 2.5.6 2.5 3.7zm83.7-1.9c-.2.7-1.1 1.2-1.9 1-.8-.1-2.3.7-3.3 1.8-2.1 2.3-3.5 2.6-3.5.7 0-1.2 5.5-4.5 7.8-4.6.8-.1 1.2.5.9 1.1zM20.9 263c0 2.3-1.5-.7-2.2-4.5l-.6-3 1.4 3c.8 1.6 1.4 3.7 1.4 4.5zm80.1-5.5c.7.8.8 1.5.2 1.5-.5 0-1.5-.7-2.2-1.5-.7-.8-.8-1.5-.2-1.5.5 0 1.5.7 2.2 1.5zm-14.1 3.7c0 2.8-.2 3-.9 1.3-1.2-2.8-1.2-4.5 0-4.5.6 0 1 1.5.9 3.2zM25 262.3c0 .5-.4.5-1 .2-.5-.3-1-1.4-1-2.3 0-1.5.2-1.5 1-.2.5.8 1 1.9 1 2.3zm99.5-1.7c4.8.9 12.9 4 13.2 5 .2.5-1.6 1.7-3.9 2.6-2.3 1-3.9 2.1-3.6 2.4.4.3.2 1.8-.3 3.3-1.2 3.4-.1 6.5 3.6 10.4 1.7 1.7 3.5 2.7 4.8 2.5 2.5-.3 5 1 4.2 2.2-.3.4.5 1.4 1.8 2.3 2.1 1.3 2.3 2.2 2.5 13.3.3 13-1.2 24.6-3.5 28.2l-1.5 2.4-2-2.2c-2.3-2.5-4.3-2.1-4.2.8 0 1.3-.4 1.8-1 1.4-.6-.3-1.9-.5-2.8-.4-1.4.3-1.7-.5-1.7-3.5 0-2.1-.3-5.2-.6-6.8-.4-1.7-1-8-1.5-14-.4-6.1-1.3-14.6-2-19-1.2-6.9-1.1-9.3.4-17.9 1.6-9.7 1.5-11.9-.4-10-1.2 1.2-3.1 10.5-3.2 15.7-.1 7.4-1.3 2.4-1.8-7.6-.4-9-.7-10.2-2.2-9.9-1 .2-1.8-.1-1.8-.6 0-1.4 1.3-2.3 2.6-1.8.7.3 2.9.8 4.9 1.2zM44 262.1c0 .6-.4.7-1 .4-.5-.3-1-1.1-1-1.6 0-.6.5-.7 1-.4.6.3 1 1.1 1 1.6zm63.4 3.5c.6 2.4.2 4.4-.8 3.3-.9-1.1-1.5-5.9-.7-5.9.5 0 1.2 1.2 1.5 2.6zm87.6 3.6c0 1-.6 1.8-1.3 1.8-1 0-1.4-2.7-.8-6 .3-1.1 2.1 2.6 2.1 4.2zm-92 1.8c0 .6-.9.5-2-.2s-2-1.6-2-2.1c0-.4.9-.3 2 .3s2 1.5 2 2zm-86.3.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm8 2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm21 2.5c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm6 0c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm93.5-1.5c-.7.7-1.2.8-1.2.2 0-.6.3-1.4.7-1.7.3-.4.9-.5 1.2-.2.2.3-.1 1.1-.7 1.7zm45.2-.7c-.4.8-1 1.5-1.5 1.5s-.9-.7-.9-1.5.7-1.5 1.5-1.5c.9 0 1.2.6.9 1.5zM119 279c0 3.3-.4 6-.9 6-.4 0-.7-2.6-.5-5.8.3-6.5.2-6.2.9-6.2.3 0 .5 2.7.5 6zm-12-2c0 1.6-.2 3-.5 3-.9 0-2.6-4.1-2-5 1.2-2 2.5-.9 2.5 2zm85 1c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm-121.7 2.5c-.7 2.1-1.3 1.9-1.3-.6 0-1.1.4-1.8 1-1.4.5.3.7 1.2.3 2zm76.7-1.6c0 .5-.7 1.1-1.4 1.4-1 .4-1.3.1-.9-.9.6-1.5 2.3-1.9 2.3-.5zm-9.5 1.1c-.3.5-1.2 1-1.8 1-.7 0-.6-.4.3-1 1.9-1.2 2.3-1.2 1.5 0zM3.7 282.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm148.3.8c0 .5-.7.7-1.5.4-.8-.4-1.5-.8-1.5-1 0-.2.7-.4 1.5-.4s1.5.4 1.5 1zm7.5 2c.3.5-.1 1-.9 1s-1.8-.5-2.1-1c-.3-.6.1-1 .9-1s1.8.4 2.1 1zm17.1 1.5c.4.8.3 2.7 0 4.1-.5 2-1 2.3-2 1.5-1.7-1.4-2.6-.4-2.6 3.1 0 1.5-.5 3.7-1.2 4.8-.7 1-.9 2.3-.4 2.7 1 1 4.7-3.8 4.1-5.5-.2-.6-.1-1.2.3-1.2.5 0 1.3 4.2 2 9.4.6 5.2 2.5 14.9 4.1 21.6 2.6 10.8 2.8 12.5 1.6 14.4-2 3.1-.6 7.9 2.6 8.6 2.1.5 2.5 1.2 2.9 6.8.4 5.4.3 6.2-1.2 6.2-2 0-2.4-2.6-.5-3.3.9-.3.9-.8-.2-2.1-1.3-1.5-1.3-1.9-.1-2.6 1.7-1 1.3-1.5-1.9-2.5-2.3-.7-2.4-.6-1.9 3.8.4 3.7.3 4.4-.9 4-1-.4-1.3-1.5-.9-3.4.3-1.6.2-2.9-.2-2.9-1.4 0-3.2 2.4-3.2 4.2 0 1-.4 1.8-1 1.8-.5 0-1-.7-1-1.6 0-1.1-.6-1.4-2-.9-1.6.5-2 .2-2-1.4 0-1.4 1.2-2.7 3.5-3.8 4-1.9 4.5-3.3 1.3-3.4-1.3 0-1.7-.3-1-.6 1.8-.7 1.5-2.3-.5-2.4-1.4 0-1.3-.2.5-.9 3.6-1.5 2.5-2.3-2-1.7-4.2.6-4.2.6-2-.9 2.6-1.9 2.9-3.4.5-3.4-1.5 0-1.4-.2.3-1.5 1.8-1.4 1.8-1.4-1.1-1.5-1.6-.1-2.4-.4-1.7-.7 1.7-.7 1.5-2.1-.5-2.5-.9-.2-2.1-2-2.8-4.3-.8-2.9-1.6-3.9-2.8-3.7-2.2.4-3.3-2.4-1.7-4.3 1-1.2 1-1.5 0-1.5-.7 0-1-.7-.6-1.5.4-1.1-.1-1.5-1.7-1.5-2-.1-2.1-.2-.4-1.4 2.5-1.9 2.1-2.9-.8-2.2-1.4.4-2.5.2-2.5-.4 0-.5 1.2-1.3 2.8-1.7l2.7-.7-2.5-.7-2.5-.6 2.5-1.1 2.5-1.1h-2.8c-1.6-.1-2.6-.5-2.2-1.1.9-1.5 4.7-1.2 9 .6 3.7 1.5 6.5 1.3 6.5-.5 0-.6-1.6-1.3-3.5-1.7-4.5-.8-6-2.6-4.5-5.3.9-1.7.7-2.4-1.1-3.8-1.2-1-3.3-2.7-4.7-3.9l-2.6-2.1 7.7.2c6.3.2 8.2-.1 10-1.6 2.7-2.3 3.6-2.3 4.3-.4zm-25.6 1.2c1.8 1.7 1.7 1.8-1.1 1.9-1.6.1-2.9 0-2.9-.2 0-.7 1.3-3.4 1.6-3.4.3 0 1.3.8 2.4 1.7zm-34.7 13.7c1.1-.1 1.7.6 1.8 2 .3 6.2.7 10.4 1.4 12.6.6 2 .5 2.3-.5 1.3-.9-.9-2-.7-4.6.8-1.9 1-3.4 1.5-3.5 1.1-.8-5.5-.7-10.2.1-10.7.5-.3 1-2.6 1-4.9 0-2.4.3-6.5.8-9.2l.7-4.9.5 6c.4 4.9.8 6 2.3 5.9zm66.7 16c2.2 9.8 3.9 18.1 3.6 18.4-.7.6-.6.9-5.5-18.8-2.3-9.1-4.1-17.9-4-19.5.1-3 .1-3 .9-.5.4 1.4 2.7 10.5 5 20.4zm7-22c0 .2-.9.6-2 .9-1.1.3-2 .1-2-.4s.9-.9 2-.9 2 .2 2 .4zm-87.3 11.3c-.2 1.6-.4.5-.4-2.2 0-2.8.2-4 .4-2.8.2 1.3.2 3.5 0 5zm-97.5-2.5c-.8.8-.9.4-.5-1.3.4-1.3.8-1.8 1.1-1 .2.7-.1 1.8-.6 2.3zm14.8-1.1c0 .5-.4.9-1 .9-.5 0-1-.7-1-1.6 0-.8.5-1.2 1-.9.6.3 1 1 1 1.6zm138-1.1c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm28.2 4.2c-.7.7-1.2.8-1.2.2 0-.6.3-1.4.7-1.7.3-.4.9-.5 1.2-.2.2.3-.1 1.1-.7 1.7zm19.8-.2c-3.3 2.6-4.9 2.6-1.9 0 1.3-1 2.9-1.9 3.4-1.9.6-.1-.1.8-1.5 1.9zm1.2 3.5c-1.7 1.4-3.4 2.5-3.8 2.5-1.1-.1 4.8-5 5.9-5 .5 0-.5 1.1-2.1 2.5zm-160.5 2.2c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm61 10.5c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm2 13.5c-.2 1.6-.4.3-.4-2.7s.2-4.3.4-2.8c.2 1.6.2 4 0 5.5zm9.8 2.1c-.6 1.5-.8 1.5-2.1-.2-1.8-2.5-1.8-3.6.1-3.6.8 0 1.6-.8 1.6-1.8.1-.9.4-.4.6 1.1.3 1.6.2 3.6-.2 4.5zm-65.4-3.2c1.5 1.8 8.8 5.6 14 7.3 3.6 1.1 3.6 1.2 4.3 7.9 1.1 11.8.8 18.2-.9 18.2-.8 0-1.9.9-2.5 1.9-1.3 2.6-1.3 3.1.5 3.1.8 0 1.2.6.9 1.4-.3.8-.1 1.7.5 2.1.6.3 1.1 1.5 1.1 2.6 0 1 .7 1.9 1.5 1.9s1.5.7 1.5 1.5c0 2.4 1.9 1.7 2.6-1 .3-1.4 1.2-2.5 2-2.5s1.4-.5 1.4-1c0-.6-.4-1-.9-1-.4 0-.6-1.1-.3-2.5.2-1.4 1.1-2.5 1.8-2.5 1.9 0 1.8-2.4-.1-4-1.2-1-1.5-3.6-1.5-11.7v-10.6l5.3.7c2.8.4 7.8.8 11 .8l5.7.2v4.6c0 2.5-.5 5.1-1.2 5.8-1.4 1.4-.3 2.8 2.7 3.4 1.4.2 2 1.1 2 3 .1 1.4.7 3.3 1.4 4.2 1 1.2 1.2 3.3.8 7.6-.7 6 .6 9 3.7 9 2.2 0 4 7.3 4.1 17.8.1 5.9.7 10.8 1.3 11.4.6.6 4.3 1.2 8.2 1.4 6.8.2 7.1.1 9.2-2.7 2.1-2.8 2.3-2.9 3-.9.9 2.4 3.5 2.6 6 .4 1.3-1.2 2.1-1.4 3.1-.6.7.6 1.7.8 2.3.4 1.7-1.1 3.3-16 2.7-24.4-.5-6.7-.4-7.8 1.1-8.4 2.4-.9 2.7-.2 1.4 3.3-1 2.6-.8 3.4 1.2 6.2 2 2.9 2.2 4 1.6 8.9-.4 3.2-1.1 9.1-1.6 13.3-.5 4.2-1.3 8.5-1.9 9.5-.5 1.1-1.3 4.5-1.6 7.6-.7 6.6-1.9 7.9-7.1 7.7-2.2 0-10.1 0-17.7.1-13.1.1-13.9 0-18.7-2.6-4.7-2.5-5.1-2.6-9.2-1.3-5.1 1.6-24.3 1.5-36.3-.3-4.4-.6-11.4-1.2-15.5-1.3-5.7-.2-8.9-.9-13.5-3-3.9-1.7-7.1-2.5-9.3-2.3-2.8.4-3.7-.1-5.4-2.6-1.2-1.7-2.3-3.3-2.4-3.5-.2-.2-2.4 1.5-5.1 3.7-2.6 2.2-5.8 4.3-7 4.7l-2.3.6v-48.6l3.3-5.2c4.3-6.9 18.4-21.3 23.3-23.8 7.8-3.9 14-8.4 17.9-12.9 4.3-5 5.6-5.4 7.6-3zm89.6 6.6c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zM188 340c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-33 7.6c0 2.4-.4 4.4-1 4.4-.5 0-1-2.3-1-5.1 0-3.1.4-4.8 1-4.4.6.3 1 2.6 1 5.1zm-48.3-1.4c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm110.1-1.3c2.3 1.4-1.4 3.4-7 3.7-2.8.1-5.5.7-6.1 1.3-.6.6-2.2 1.1-3.6 1.1-3.3 0-4.7 1-5.4 3.5-.4 1.8-.5 1.7-.6-.3-.1-1.4-.6-2.2-1.3-1.9-.7.2-1.2 1.8-1.2 3.6.1 1.7-.2 2.8-.7 2.5-.5-.3-.9-2.7-.9-5.4v-4.9l4.3-1.2c8.9-2.4 20.2-3.5 22.5-2zm-73.8 16c-.5 1.1-1 3.1-1 4.5 0 1.7-.5 2.6-1.6 2.6-1.4 0-1.4-.3-.4-1.5.8-1 1-2.9.6-5.4-.7-4.4 0-5.6 2.1-3.6 1 1.1 1.1 1.9.3 3.4zm21.6 1.2c.3.5 2.3.9 4.5.9 2.1 0 3.9.4 3.9 1 0 .5-1.8 1-4 1-3 0-4 .4-4 1.6 0 1.3-.6 1.5-2.7.9-3.9-.9-4.6-1.8-3.2-4.7 1.1-2.5 4.1-2.9 5.5-.7zm26.7 3.5c-.4 1.1-3.4 2.3-5.5 2.4-.5 0-.8-.7-.8-1.5 0-.9-.6-1.2-1.7-.9-1.2.4-1.4.3-.6-.3 1.8-1.3 9.2-1.1 8.6.3zm-43.8 2.4c.3.5-.1 1-.9 1-.9 0-1.6-.5-1.6-1 0-.6.4-1 .9-1 .6 0 1.3.4 1.6 1zm1.5 4c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm-1 4.2c0 .5-.6.8-1.4.8-.7 0-1.6.9-1.9 2-.4 1.6-1.4 2-5.2 2-2.8 0-4.4-.4-4-1 .3-.6 2.4-1 4.6-1 2.7 0 3.9-.4 3.9-1.4 0-.8-.6-1.6-1.2-1.9-.7-.2.2-.4 1.9-.3 1.8.1 3.3.4 3.3.8zm-34 .2c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm18 2.2c0 .3-.9 1.7-2 3.1-1.9 2.4-1.9 2.7-.3 3.8 1.6 1.2 1.6 1.4.1 2.9-1 1-1.9 1.2-2.3.6-.3-.5-1.6-1-2.8-1.1h-2.2l2.2-.9c1.5-.6 2-1.5 1.6-2.8-.3-1.2.4-2.8 1.8-4.1 2.2-2 3.9-2.7 3.9-1.5zm14.2 8.9c-.2 2.8-.7 5.3-1 5.7-1.1 1.1-5.6 1.6-7.7.8-1.6-.7-1.2-.9 2.3-1.5 4.5-.8 5.2-1.8 2.5-3.4-1.2-.7-1.3-1.1-.5-1.1 2.7 0 .4-2.5-2.9-3.1l-3.4-.6 3.2-.2c1.7 0 3.5-.6 3.8-1.2.4-.5 1.4-.9 2.3-.7 1.4.3 1.6 1.3 1.4 5.3zm9.5-1.8c-.3 1-.5.4-.5-1.2 0-1.7.2-2.4.5-1.8.2.7.2 2.1 0 3zm-23.6 12.5c.3 14.6 0 15.8-3.7 12.9-1.5-1.2-3.7-2.1-5-2.1-1.2 0-2.6-.5-2.9-1-.4-.6.9-1 3.2-1 7.9 0 7.8-2.8-.2-4.1l-4-.6 4.6-.2c2.5 0 4.9-.4 5.2-.8 1.4-1.4-1.7-3.3-5.7-3.5l-4.1-.1 4.5-.6c4.9-.6 6.1-2.4 2-2.9-6.8-.8-5.2-1.8 4.8-3 .8-.2 1.2 1.9 1.3 7zm11.9-.3c0 .5-1.8.9-4 .9s-4-.3-4-.7c0-.5 1.8-.9 4-.9s4 .3 4 .7zm0 5.1c0 .5-1.8 1-4 1s-4-.5-4-1c0-.6 1.8-1 4-1s4 .4 4 1zm-2.3 6.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm142.8 1.7c1.7.3 2.6.9 2 1.1-1.7.9-17.5-.1-17.5-1.1s10.8-1 15.5 0zm14.5 3.8c0 1.7-2.2 1.6-4.6-.1-1.8-1.4-1.8-1.5.6-2.4 2.6-1 4-.1 4 2.5zm-128.3 6c-1.1 12.6-2.8 15.8-2.2 4 .2-5.4.7-10.2 1-10.8 1.4-2.2 1.8-.4 1.2 6.8zm-152.8 5.4c2.4 2.9 2.8 3 5.4 1.8 2.7-1.2 3.5-1.1 10 2.2.9.5 3.8 1.6 6.3 2.5 4 1.3 4.8 1.3 6.7.1 1.9-1.2 2.8-1.2 6.7 0 6.3 1.9 39.3 3.4 44.6 2 3.5-.9 5-.7 10.2 1.2 5.5 2.1 7.3 2.2 17.9 1.7 8.3-.3 10.6-.2 7.8.4-4.8 1.1-18.3 1.2-39.5.2-8.5-.4-17.3-.4-19.5 0-3.6.7-15.7.4-30-.7-2.7-.2-7-.9-9.5-1.6-2.5-.7-8.2-1.1-12.8-1-8 .2-18.8-1.4-19.8-3-.5-.9 5.1-4.1 5.8-3.4.2.3 1.7-.9 3.3-2.5 1.6-1.7 3.1-3 3.4-3 .2 0 1.6 1.4 3 3.1zm240.1 8.3c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm-34 1.6c0 .5-.7 1-1.6 1-.8 0-1.2-.5-.9-1 .3-.6 1-1 1.6-1 .5 0 .9.4.9 1zm28.5 0c-.3.5-1 1-1.6 1-.5 0-.9-.5-.9-1 0-.6.7-1 1.6-1 .8 0 1.2.4.9 1zm-84 7.2c-.8 3.6-2.1 4.9-4.2 4.1-2.2-.8-1.5-2.5.8-1.8 1.9.6 2 .4 1.4-2.4-.5-2.5-.3-3.1 1-3.1s1.5.6 1 3.2zM148 445c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm27 6c-.7 2.8-1.7 5.3-2.3 5.7-.6.4-.8.1-.5-.8.3-.8 1.1-3.8 1.9-6.8.7-2.9 1.5-4.8 1.7-4.2.2.6-.2 3.4-.8 6.1zm57-3.5c0 .8-.4 1.5-1 1.5-.5 0-.7-.7-.4-1.5.4-.8.8-1.5 1-1.5.2 0 .4.7.4 1.5zm66.2 12c0 4.9-.1 14.3-.1 20.7L298 492h-7.6c-6.3 0-7.4-.2-6.5-1.3.8-1 .7-1.4-.4-1.4-.7 0-1.3.5-1.2 1.1.1.7-3.2 1.2-9.3 1.4-8.1.2-10.1 0-13.8-1.8-3.3-1.7-4.1-2.6-3.7-4 .3-1 0-2.2-.7-2.6-1.7-1.1-5.9-1.3-5.2-.3.2.4 1.3.6 2.4.4 1.3-.2 1.7.1 1.4 1-.3.8-1.2 1.1-2 .8-.8-.3-1.4.1-1.4 1 0 2.5-2 3.1-3.5 1.1-1.4-2.1-1.5-4.1-.2-3.6.5.1.5-.3.2-.9-.5-.7-1.1-.7-1.7-.1-.6.6-2.3.3-4.8-.9-2.2-1.1-4.3-1.9-4.9-1.9-.5 0-1.3-.5-1.7-1.2-.4-.6-.3-.8.4-.4.6.3 1.3.2 1.7-.4.4-.6 1.2-.7 1.8-.3.7.4.6-.1-.2-1-1.2-1.6-1.6-1.6-3.1-.2-2.5 2.2-5.6 1.8-7.4-1-.9-1.4-1.4-2.5-1.1-2.5 1.6 0 2 .3 1.7 1.3-.2.6.3.5 1.2-.2.8-.7 2.3-1.1 3.3-.9 1.3.2 1.8-.3 1.8-2.2 0-1.7.7-2.6 2.5-3 2.7-.6 3.8-3.6 2.1-5.3-1.7-1.7-1.3-2.7 1.2-2.7 2.5-.1 10.7-2.2 12.2-3.2.6-.3 3.5-.9 6.5-1.3s6-1 6.5-1.3c.6-.4 1.9-.8 3-.9 1.1-.2 4.3-.8 7-1.3 2.8-.6 6.7-.9 8.8-.8 2 .1 3.9-.1 4.2-.3.2-.3 2.8-.5 5.6-.4h5.2l-.1 9zM191.5 452c.3.5-.1 1-1 1s-1.3-.5-1-1c.3-.6.8-1 1-1 .2 0 .7.4 1 1zm-21.5 3c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm70 1c0 .5-.7 1-1.6 1-.8 0-1.2-.5-.9-1 .3-.6 1-1 1.6-1 .5 0 .9.4.9 1zm-64.3 6.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm-54.1 2.4c1.5 1.1 3.8 2.7 5.3 3.6l2.6 1.8-3 .2c-1.6.1-3.9.2-5 .3-1.1.1-2.6.4-3.3.9-2.5 1.6-1 2.6 4.1 2.7 8.2.2 11.6 1.7 4 1.8-3.5.1-6.3.5-6.3 1.1 0 .5 1.7 1 3.8 1 4.4 0 15.2 2.6 16.6 4.1.6.5 2.1.9 3.4.9 1.7 0 2.3-.4 1.8-1.5-.7-1.9-.1-1.9 2.7-.1 2.6 1.7 4.7 2 14.5 1.8 6.9-.2 7.3-.3 8.3-2.9l1-2.7 2.1 2.1c1.3 1.3 2.1 3.5 2.2 6l.1 3.8-61.1.3-61.1.2-1.1-2.4c-.9-2-2.3-2.8-7.1-3.7-4.5-1-6.1-1.8-6.5-3.2-.4-1.8-.1-1.9 5.7-1.4 7.7.7 19.1-1 23.7-3.6 2-1.1 5.3-2 7.7-1.9 2.7 0 4.8-.6 6.2-1.9 1.1-1.1 3.4-2.2 5.1-2.5 1.6-.4 3-1 3-1.4 0-1-2.6-2-5.1-2-1.1 0-3-.5-4.2-1.2l-2.2-1.2 2.3-.5c1.3-.3 10.2-.5 19.8-.5 15.2.2 17.8.4 20 2zm22.7 1.4c-.3 1.1-.7 2-.8 2-.1 0-.5-.9-.8-2-.3-1.2 0-2 .8-2s1.1.8.8 2zm24.8 4.4c-2.1 2-2.2 2-1.5.1 1.1-3.2 2.8-4.9 3.2-3.5.3.7-.5 2.2-1.7 3.4zM78 468c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm153 1.9c0 .5-.7 1.4-1.5 2.1-1.3 1-1.5.9-1.5-.9 0-1.2.6-2.1 1.5-2.1.8 0 1.5.4 1.5.9zM16.8 473c.7 1.2 2.3 2 4.1 2 1.6 0 4.2.3 5.9.6 3 .6 3 .7 1.5 3-1.8 2.9-1.1 5.4 1.6 5.4 1.1 0 2.4.8 2.9 1.7.8 1.3 2.2 1.6 6.6 1.4 3.2-.1 5.6.2 5.6.7 0 1.7-5.8 2.5-12.5 1.7-5-.5-6.8-1.2-8.8-3.3-1.4-1.5-2.7-3.8-2.9-5.2-.2-1.4-1.4-3-2.8-3.7-2.5-1.2-5-4-5-5.5 0-1.6 2.5-.8 3.8 1.2zm25.9-.7c9.6.2 11.9.5 11.1 1.4-1 1.2.1 1.8 2.5 1.4.5-.1.5.3.2.9-.9 1.5-16.3.2-19.2-1.6-1.2-.8-3.9-1.4-6-1.5-2.1-.1-4.9-.5-6.3-1-1.9-.6-1.6-.7 1.5-.3 2.2.2 9.5.5 16.2.7zm25.9-.6c-1 1-7.9 3.3-8.5 2.8-1.1-1.2 2.6-3.5 5.7-3.5 1.9 0 3.2.3 2.8.7zM143 479c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm62.4 5.6c2.1 3.1 3.5 5.8 3.2 6.2-.3.3-.6 0-.6-.6 0-.8-2.5-1.2-7.2-1.3-4-.1-6.3-.4-5-.6 1.7-.3 2.1-.9 1.7-2.3-.3-1.1 0-2 1-2.4.8-.3 1.5-1.5 1.5-2.6 0-3.3 1.5-2.3 5.4 3.6zm22.4-3c5.6 1.4 14.5 7.1 13.9 8.8-.4 1.1-16.4 1.6-24.4.8-3.6-.3-4.4-.9-5.8-3.8-.9-1.9-2-3.4-2.4-3.4-1.1 0-2.3-2.9-1.7-3.9.7-1 14.4-.1 20.4 1.5zm-44.5 1.1c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5z" />
        <Path d="M99.1 355.6c0 1.1.3 1.4.6.6.3-.7.2-1.6-.1-1.9-.3-.4-.6.2-.5 1.3zM281.3 452.8c-2 .3-2.8 1.8-2.4 4.4 0 .5-.6.9-1.4.9-3.6.3-7.5 1.9-7.5 3 0 .5.3.9.8.9.4 0 1.4.4 2.1.9 1.2.8 1.1 1.3-1 3s-2.2 2-.6 2.6c2.1.9 2.3 2.5.2 2.5-1.6 0-1.9 1.7-.9 4.4.8 2 2.4 1.1 2.4-1.5 0-1.3.7-1.9 2.4-1.9 2.3 0 2.3.2 2.1 8-.2 6.3 0 8 1.1 8s1.4-1.7 1.4-6.9c0-4.7.4-7.2 1.4-8 .9-.8 1.6-.8 2-.2.4.5.2 1.3-.4 1.6-.8.5-.7 1.1.1 2.1.9 1.1 1.5 1.2 2.5.3 1.1-.9 1.1-1.5.3-2.5-.9-1.1-.7-1.4 1.3-1.4 1.3 0 2.8.4 3.4.9.5.6 1.8.3 3.4-.9l2.5-2-6-.1c-3.6-.1-4.6-.4-2.5-.6 1.9-.2 4.6-.6 6-.9l2.5-.6-2.5-1.3c-2.5-1.4-2.7-2-.8-4.3.6-.6.9-1.2.7-1.3-.2 0-1.5-.3-2.9-.5-1.3-.3-2.8-1.1-3.3-1.9-.4-.8-2-1.5-3.5-1.6-2-.1-1.6-.4 1.6-1.1 2.5-.5 4.2-1.4 3.9-2.1-.4-1.3-5.2-2.4-8.4-1.9zm4.5 1.9c-1 .2-2.6.2-3.5 0-1-.3-.2-.5 1.7-.5s2.7.2 1.8.5zM288 467c0 .5-1.8 1-4 1s-4-.5-4-1c0-.6 1.8-1 4-1s4 .4 4 1zM244.1 464.4c-.9 1.1-.6 1.2 1.4.8 1.4-.2 2.5-.8 2.5-1.3 0-1.4-2.6-1.1-3.9.5zM259.6 465.9c-.4.5-.2 1.2.3 1.5.5.4 1.2.2 1.5-.3.4-.5.2-1.2-.3-1.5-.5-.4-1.2-.2-1.5.3zM242.5 474c-.3.4.1 1.3.9 1.9 1 .9 1.6.8 2.6-.4.7-.8 1.1-1.5.9-1.6-3.1-.6-4-.6-4.4.1zm3.5.6c0 .8-1.9 1.3-2.4.6-.3-.5.1-.9.9-.9s1.5.2 1.5.3zM251.3 474.5c0 .8.4 1.2.9.9.5-.3.6-1 .3-1.5-.9-1.3-1.2-1.1-1.2.6zM267.5 484.9c-.3.5-.2 1.2.3 1.5.5.3.9-.1.9-.9 0-1.7-.3-1.9-1.2-.6zM130 481.8c0 .4 2.1 1.4 4.8 2.2 2.6.8 5.3 1.6 6 1.8 2.9.9.9-1.9-2.4-3.3-3.9-1.6-8.4-2-8.4-.7zM145.5 486c-.4.6 1.3 1 4.4 1 2.8 0 5.1-.5 5.1-1 0-.6-2-1-4.4-1-2.5 0-4.8.4-5.1 1zM278 176c0 .5.4 1 .9 1s1.1.7 1.3 1.5c.2 1 .7.7 1.5-1 1-2.3.9-2.5-1.3-2.5-1.3 0-2.4.4-2.4 1zM299.4 190.5c0 5.5.1 7.6.3 4.7.2-2.9.2-7.4 0-10-.2-2.6-.3-.2-.3 5.3zM299.4 217.5c0 8.2.2 11.5.3 7.2.2-4.3.2-11 0-15-.1-4-.3-.5-.3 7.8zM4 499c0 .5.7 1 1.5 1 1.2 0 1.5 1.7 1.5 9 0 5.3-.4 9-1 9-.5 0-1 .4-1 .8 0 .5 1.4.7 3 .4 2.4-.3 2.9-.8 2.5-2.3-.7-2.1.4-8.9 1.4-8.9 1.1 0 7.1 8.9 7.1 10.5 0 1 1 1.5 3.1 1.5h3.1l-3.4-4.3c-1.8-2.3-4.2-5.5-5.2-7.1-1.8-2.9-1.8-2.9.5-4.8 1.3-1 3.4-2.1 4.7-2.4 3.4-.9 2.6-2.4-1.4-2.4-1.9 0-3.3.4-2.9.9.5.9-4.4 5.1-5.9 5.1-1.4 0-.5-4.1 1.1-4.7 1.5-.6 1.5-.7-.3-1.4-2.8-1.1-8.4-1.1-8.4.1zM26.5 499.9c-.3.6-.1 1.1.4 1.1.7 0 1.1 3.5 1.1 9.5v9.5h4.3c3.6-.1 4-.2 2.5-1.3-1.1-.9-1.6-2.7-1.6-6.2l.1-4.8 2.4 2.9c1.2 1.6 2.3 3.4 2.3 4 0 1.7 4.5 5.4 6.6 5.4 1.7 0 1.9-.8 1.9-10v-10l-3.5.1c-1.9.1-2.7.3-1.7.6 1.4.4 1.7 1.6 1.7 6.9 0 4-.4 6.3-1 5.9-.5-.3-2.6-3.5-4.6-7-2.4-4.3-4.2-6.5-5.4-6.5-1 0-2.5-.3-3.3-.6-.8-.3-1.8-.1-2.2.5zM87.6 499.9c-.3.5 0 1.1.7 1.4.9.3 1.2 1.6.9 3.6-.3 2.4-.9 3.1-2.8 3.1s-2.3-.6-2.6-3.8c-.3-3.4-.6-3.7-3.7-4-3-.3-3.3-.2-2.2 1.2.9 1.1 1.2 3.9.8 9.6-.4 7.9-.4 8 1.9 8 1.3 0 2.5-.6 2.5-1.3.2-1.5.6-4.8.7-6.5.1-.6 1.3-1.2 2.7-1.2 2.4 0 2.6.3 2.4 4.5-.2 2.4 0 4.8.4 5.2 1.6 1.6 2.5-1.8 2.9-11 .4-9.5.3-9.7-1.8-9.7-1.3 0-2.5.4-2.8.9zM96.8 499.8c-2 .4-2.3 1.9-.9 4.1.7 1.1 1.1.9 2-.8.7-1.1 1.5-2.1 2-2.1 1.2 0 1 16.2-.2 17.7-.7 1 .1 1.3 3.4 1.3s4-.3 3.1-1.2c-.7-.7-1.2-4.4-1.2-9.5 0-7.6.2-8.3 2-8.3 1.1 0 1.9.3 1.8.7-.2.5 0 .9.5 1 1.9.7 2.7.1 2.7-1.7 0-1.9-.5-2.1-6.7-1.8-3.8.2-7.6.4-8.5.6zM138 501c.6 1.1 1 3.9.9 6.3-.2 2.3-.2 6.1-.1 8.4.2 4 .4 4.3 3.1 4.3h3l-.4-5.4c-.4-5.3-.4-5.5 2.4-6.1 3.8-.8 6.2-3.5 5.5-6.2-.7-2.5-3-3.3-10.2-3.3-5 0-5.2.1-4.2 2zm8.8 3.2c-.4 4.6-2.8 4.9-2.8.4 0-2.6.4-3.6 1.6-3.6 1.1 0 1.4.8 1.2 3.2zM156 499.6c-1.3.4-1.5 2.1-1.3 10.2l.3 9.7h5.2c5.9 0 7.8-.8 7.8-3.6 0-2.5-3-2.4-3.7.1-.7 2.7-2.9 2.5-3.7-.2-.7-2.7-.7-6.8.1-5.1.9 2.3 3.3 1.4 3.3-1.1 0-2.6-2.1-4.7-2.8-2.8-.8 2.5-2.2 1-2.2-2.3 0-3 .3-3.5 2.4-3.5 1.3 0 2.6.6 2.9 1.2.2.7.8 1 1.2.6.4-.4.5-1.4.2-2.3-.6-1.4-5.8-1.9-9.7-.9zM169.5 500c-.2.3 0 1.2.6 2 1.3 2.2 1.1 15.4-.3 16.8-.9.9-.5 1.2 1.8 1.2h2.9l-.3-6.1c-.4-6.8.7-7.2 2.8-.9 1.5 4.6 3.1 6.2 6.6 6.6 2.1.2 2.4-.2 2.5-2.9.1-5.4.7-14.1 1.1-15.7.2-1.1-.7-1.6-3.1-1.8-3.2-.3-3.3-.2-2.7 2.3 1.7 6.6 1.8 8.5.7 8.5-.6 0-1.1-.6-1.1-1.3 0-.7-1.1-2.9-2.5-4.8-1.7-2.6-3.3-3.8-5.5-4.1-1.7-.3-3.3-.2-3.5.2zM191.2 500.2c-1.5 1.5-1.6 4.8-.2 4.8.6 0 1.3-.7 1.6-1.5.4-.8 1.3-1.5 2.1-1.5 1.2 0 1.4.7.9 3.2-.4 1.8-.4 5.9 0 9 .5 4.8 1 5.8 2.5 5.8 1.7 0 1.9-.9 1.9-8.5 0-7.7.2-8.5 1.9-8.5 1 0 2.2.8 2.5 1.7.5 1.1 1 1.3 1.7.6 1.6-1.6.2-5-2.4-5.7-3.8-1-11.2-.7-12.5.6zM208.6 499.9c-.3.5 0 1.4.8 2 1.1 1 .7 2.6-2.8 9.6l-4.2 8.5 4.5-.1c2.5-.1 3.6-.4 2.4-.6-2.6-.5-2.7-.8-1.2-5.2.9-2.4 1.7-3.1 3.7-3.1 3.8 0 4.9 1 6.4 5.5 1.2 3.6 1.7 4 4.8 4.3 1.9.1 3-.1 2.4-.5-1.3-.9-6.4-15.4-6.4-18.2 0-2.6-9-4.5-10.4-2.2zm6.2 7.4c.3 2.8-.4 3.3-2.7 1.8-.8-.5-1.1-1.6-.6-3 .9-2.9 2.9-2.1 3.3 1.2zM51 510v10h2.5c2.1 0 2.5-.5 2.5-3.3 0-1.7.3-6.2.5-10l.5-6.7h-6v10zM64.2 501.1c-4.5 1.8-6.3 4.9-5.9 10.3.6 6.5 3.4 8.9 9.6 8.1 4.8-.6 6.3-1.8 5.9-5-.2-1.5-1.2-2.1-3.5-2.3-3.2-.3-4.6 1.2-2 2.1.6.2.9.8.5 1.2-.4.4-1.4.5-2.3.2-1.1-.5-1.5-2.1-1.5-6.1 0-4.5.4-5.7 2-6.6 2.3-1.2 4-.6 4 1.6 0 .8.4 1.4.8 1.4 1.6 0 3-2.2 2.5-4.1-.4-1.4-1.4-1.9-4.2-1.8-2 0-4.7.4-5.9 1zM244.9 500.7c-.1.5 0 1.2.1 1.8.2.5.2 4.9.1 9.7l-.1 8.8h5.8c5.7 0 8.2-1.1 8.2-3.7 0-1.8-2.7-1.6-3.4.2-.3.8-1.6 1.5-2.9 1.5-2.3 0-2.3-.1-1.9-9.5l.4-9.5h-3.1c-1.7 0-3.2.3-3.2.7zM279.2 500.8c-.7.5-2 2.1-2.7 3.6-1.3 2.4-1.2 2.9.5 4.6 1.1 1.1 3.2 2 4.8 2 3.8 0 5.4 1.3 5 4.1-.4 2.9-3.9 3.7-5.8 1.4-2.1-2.5-4.2-1.9-3.8 1.2.3 2.6.7 2.8 5.3 3.1 7.9.5 11.1-3.6 7.5-9.5-1.5-2.5-2.9-3.4-6-3.9-3-.5-4-1.1-3.8-2.3.4-2.2 5.6-2.7 6.4-.7.8 2.2 2.4 1 2.4-1.8 0-1.9-.6-2.3-4.2-2.4-2.4-.1-4.9.2-5.6.6zM230.3 502c-3.1 1.3-5.6 6.5-4.8 10 1.4 6.4 8.5 10.8 13.2 8.1 1.5-.9 1.4-1-1.3-1.1-3.5 0-4.9-1.2-5.9-5.3-1.9-7.5 2.8-13.6 6.6-8.6 1.6 2.1 1.8 2.2 2.4.6 1.3-3.1-.2-4.7-4.2-4.6-2.1 0-4.8.4-6 .9zM259 501.9c0 .6.5 1.3 1 1.6 1.5.9 1.3 16.2-.2 16.8-.7.3 1.8.6 5.5.6 6.1.1 6.8-.1 7.6-2.2 1.1-2.8-.4-3.5-2.9-1.2-2.6 2.4-5 1.2-5-2.4 0-2.3.4-2.9 1.5-2.5 1 .4 1.5 0 1.5-1.4 0-1.1-.7-2.3-1.6-2.6-1-.4-1.4-1.5-1.2-3.3.4-3.3 2.5-4.2 3-1.2.4 2.7 2.6 3.7 3.4 1.5 1.1-2.9-1.5-4.6-7.2-4.6-3 0-5.4.4-5.4.9zM123.5 505.4c-1.9 1.3-1.8 1.5.9 5.6 2.1 3.3 2.7 5.1 2.4 8.1-.2 2.2 0 3.9.4 3.9 1.1 0 2.8-3.6 2.8-5.8 0-1.1.9-2.2 2.1-2.5 1.7-.5 1.9-.9.9-2.6-1.3-2.5-2.6-2.7-3.4-.5-.5 1.4-.9 1.2-2.6-.9-2.6-3.3-2.6-5 0-4.2 2.4.7 2.7-1 .4-1.9-2-.8-1.7-.8-3.9.8zM114.2 512.2c-2.6 2.6-.6 6.8 3.3 6.8 2 0 5.5-2.7 5.5-4.3 0-.3-.7-1.3-1.6-2.1-1.8-1.9-5.5-2.1-7.2-.4zm5.8 3.4c0 .9-.7 1.4-1.7 1.2-2.5-.5-2.8-2.8-.4-2.8 1.2 0 2.1.6 2.1 1.6zM294.5 519c-.3.5-.1 1 .4 1 .6 0 1.1-.5 1.1-1 0-.6-.2-1-.4-1-.3 0-.8.4-1.1 1zM118 526c-17.6.3 2.3.6 47 .6 42.6 0 75.5-.1 73-.3-9-.6-90.3-.8-120-.3z" />
    </Svg>
);

export default SvgCoinKnight;
