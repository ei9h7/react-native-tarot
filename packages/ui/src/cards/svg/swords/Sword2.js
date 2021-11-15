import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgSword2 = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={400}
        height={694.667}
        viewBox="0 0 300 521"
        {...props}>
        <Path d="M3.3.7c-1.9.4-2.2 1.2-2.8 9.6C0 16.9.4 431.1 1 513.7c0 4.2.4 7.3 1 7.3.7 0 1-17.8 1-51.5V418l7.3-.1c3.9-.1 21.4-.3 38.7-.5 17.3-.3 34.3-.2 37.6.1l6.2.6.6 5.7c.4 3.1 1 7.2 1.3 8.9l.5 3.3h11.9c10.9 0 11.9.2 12.9 2.1.6 1.1 2.1 2.4 3.3 2.9 2.1.8 2 .9-1.4 2.3-4.4 1.9-6.1 3.8-5 5.6 1.3 2 16.5.9 21.1-1.5 2.8-1.5 5.9-1.9 16-2 6.9 0 13.8-.6 15.3-1.2 4.4-1.8 8.9-1.4 14.3 1.3 5.8 3 14.2 4.2 17.2 2.6s2.8-2.6-1.8-7.3c-2.2-2.3-4-4.6-4-5 0-.4 3.3-.9 7.3-1 3.9 0 7.9-.1 8.7-.2 1.7-.1 2.8-6.6 1.1-6.6-.6 0-1.1.8-1.1 1.9 0 1-.8 2.1-1.8 2.3-2.7.7-13.2-.3-13.2-1.3 0-.5.6-.9 1.3-.9.6 0 2.7-1.3 4.5-2.8l3.3-2.7-1.6-6c-.8-3.3-1.8-11.5-2-18.2l-.5-12.2 3.4-.6c7.3-1.4 7.1-2.1 7.2 18.5.2 21.7.2 20.9 1.4 19 .5-.8 1-3.2 1-5.3V416H298.3l-.6 47.8c-.4 26.2-1 49.4-1.3 51.4l-.7 3.8-33.1.1c-18.2.1-66.8.5-108.1.8-74 .7-73.5.7 35 .7l110-.1.3-260.3L300 0h-57.4c-41.8 0-57.7.3-58.2 1.1-.5.9 14 1 56.5.6l57.1-.6.1 5.2c0 2.9.3 13.8.5 24.3l.4 19.1-2.9 1.3c-3.1 1.2-4.5 3-14.6 18.9-.5.8-3.9 5.5-7.5 10.3-3.6 4.8-9.9 13.5-14 19.4-4.1 5.8-9 12.3-10.7 14.4-1.8 2.1-3.3 4-3.3 4.4 0 .3-2.8 4.3-6.2 8.8-3.4 4.6-8 10.8-10.2 13.8-2.3 3-4.6 6.1-5.3 7-.7.8-9.6 12.7-19.9 26.5-10.2 13.7-20.5 27.2-22.9 30-2.3 2.7-4.5 6-4.9 7.2-1 3-2 2.9-6.5-.8-3.6-2.9-3.8-3.3-4.4-10.4-.4-4.8-.3-8.4.5-9.9 1.6-3.6-.7-13.8-3.8-16.7-2.2-2.1-3.2-2.2-14.6-2-13.8.2-16 1-18.4 6.7-.8 1.9-1.4 5.6-1.3 8.2.1 2.6-.1 9-.4 14.1-.5 8.8-.7 9.6-3.1 11.4-2.6 1.9-2.6 1.9-4.6-.5-1.1-1.2-6.6-8.8-12.2-16.8-5.7-8-10.9-15.1-11.6-15.9-.7-.8-2.1-2.6-3-4-1.5-2.3-32.2-45.3-40.6-56.8-2.9-4-21.2-29.3-31.9-44.2-2.6-3.6-5.5-7.8-6.5-9.2C11.7 61.1 5.1 54 4.1 54 3 54 2.3 29 3 14.5l.5-11 7.5-.7c4.1-.3 44.2-.7 89-.7 54.2-.1 81.8-.5 82.5-1.2.7-.7-27.1-.9-88-.8-49 .2-90 .4-91.2.6zm292.6 56c-1.2 2.1-3 4.7-3.9 5.8-1 1.1-4.4 5.8-7.6 10.5-16 23.5-19.8 28.9-32.9 46.9-7.7 10.6-16.9 23.6-20.5 28.7-10.5 15.1-36.1 50.5-39.8 55.1-3.4 4.3-5.5 5.3-6.7 3.2-.4-.5 5.5-9.2 13-19.2s18-24.1 23.3-31.3c5.3-7.2 17.8-24 27.7-37.4 9.9-13.3 19.6-26.6 21.5-29.4 1.9-2.8 6.3-8.8 9.6-13.2 3.4-4.5 8.2-11.3 10.8-15.2 3.9-6 5.4-7.6 7.4-8.1.2-.1-.6 1.6-1.9 3.6zM8.1 60.2c1.3 1.8 2.9 4 3.4 4.9.6.9 2.3 3.2 3.8 5 1.5 1.9 7.2 9.7 12.5 17.5 5.3 7.7 13 18.5 17 24 6.9 9.3 17.9 24.8 25.4 35.6 1.8 2.7 6.2 8.8 9.8 13.7 3.6 4.9 9.3 12.9 12.7 17.8 3.4 4.8 9.2 13 12.8 18.1 3.6 5.1 6.3 9.7 6 10.2-1.3 2.1-3.2.7-7.2-5.3-2.3-3.4-7.2-10.5-11-15.8-3.7-5.3-13.1-18.5-20.8-29.4-7.7-10.8-15.5-21.8-17.3-24.4-1.8-2.5-6.5-9.3-10.5-15-4-5.7-8.2-11.8-9.5-13.5-1.2-1.7-3.3-4.7-4.6-6.6-5.4-8-17.3-24.7-19.9-28-4.7-6-8-12-6.4-12 .7 0 2.4 1.4 3.8 3.2zm286.5 5.1c-2 2.9-4.8 6.5-6.2 8.2-2.2 2.7-2.4 2.7-1.3.5.7-1.4 2.5-4.1 4-6.1 1.6-2 2.9-4.1 2.9-4.6 0-1.7 3.4-5.7 3.8-4.4.2.6-1.2 3.5-3.2 6.4zM8.9 69.7l2.1 3.8L8 70c-1.6-1.9-3-3.8-3-4.3 0-1.6 1.8.3 3.9 4zm289.3 88.5c-.1 51.3-.4 93.4-.7 93.6-.9 1-17.2-2.1-20.1-3.7-6.5-3.9-9.3-4.2-17.5-2.2-6.2 1.5-8.5 1.7-11.7.8-3.2-.8-5.7-.7-11.9.6-10.5 2.3-13.2 2.2-19.9-.8-3.1-1.4-7.2-2.5-9-2.5-3.9 0-11.8 4.1-12.2 6.4-.4 2.1 3.6 2.2 4.5.1.7-1.9 5.5-4.5 8.2-4.5 1.1 0 2.8.9 3.8 1.9 1 1 2.7 2.1 3.8 2.3 1.1.2 1.9.9 1.8 1.5-.1.6.7 1.9 1.7 2.8 1.1 1 2.1 1.5 2.1 1.2.1-.4.2-1.2.3-1.8.2-2.1 4.2-2.8 7-1.4 1.6.9 2.8 1 3.2.4.3-.6 1.8-.7 3.4-.4 1.5.3 8.3.6 15.1.6 6.8.1 13.9.5 15.7 1.1 4 1.2 5.5.2 2.7-1.9-1.5-1.1-3.8-1.4-9.3-1-8.2.5-9.6-1.2-2.1-2.6 10.8-2 12.4-1.9 16.4.5 4.6 2.7 11.5 4.7 16.5 4.8 1.9 0 4.5.3 5.8.6 2.3.7 3 2.9 1 3.3-.7.1-21.5.3-46.3.6-24.7.2-48.7.7-53.3 1l-8.3.7.3-4.4c.2-3.4.6-4.2 2.1-4 1 .2 1.7-.3 1.7-1.3 0-.8-.8-1.5-1.9-1.5-1.4 0-2-1-2.4-4.2-.6-4.1.1-6.6 1-4.1.3.7 1.1 1.3 1.8 1.3 1.8 0 7.5-7 7.5-9.2 0-.9-2-3.1-4.5-4.8-4.9-3.4-5.3-4.4-2.8-7.2.9-1 2.1-2.7 2.7-3.7 1.6-2.8 12.9-19 14.7-21.2.9-1 4.5-6.3 8-11.7 5.7-8.8 17.5-26.5 23.9-36 1.4-2.1 6.6-9.6 11.5-16.7 5-7.2 9.5-13.7 10-14.6.6-.9 5-7.5 9.8-14.5 4.9-7.1 12.5-18.4 17-25.2 4.5-6.7 8.4-12.2 8.7-12.2.3 0 .4 41.9.2 93.2zM18.7 90.5c7.6 11.2 15.8 23.6 18.3 27.4 2.5 3.8 9.5 14.3 15.5 23.2 6.1 8.9 11.2 16.6 11.4 17.1.6 1.6 12.8 19.5 18.6 27.3 3 4.1 5.5 7.7 5.5 7.9 0 .3 2.9 4.9 6.5 10.3s6.5 10.8 6.5 12.1c0 1.2.7 2.5 1.5 2.8.8.4 1.5 1.2 1.5 1.9s.7 1.8 1.5 2.5c2.5 2.1 1.7 3.8-4 8.1-3 2.3-5.5 4.9-5.5 5.8 0 2 5.7 8.1 7.5 8.1.6 0 2.2-1.4 3.5-3 2.5-3.3 4.7-4.1 3.2-1.3-.6 1-1.3 4.1-1.7 6.9l-.6 5.1-15.2.6c-8.9.3-17.9 1.3-21.7 2.3-4.3 1.1-8.2 1.4-11.8 1-3.4-.4-7.3-.1-11.1.9-5 1.3-30.9 3.5-41.3 3.5H3v-96.1c0-60.4.4-95.8 1-95.4.5.3 7.1 9.8 14.7 21zm-3-10.8c2 3.2 5.5 8.3 7.8 11.3 5.8 7.8 7.7 11 6.5 11-.6 0-4.8-5.7-9.3-12.8-9.9-15.1-10-15.2-9.2-15.2.3 0 2.2 2.6 4.2 5.7zm269.7-1.5c-1.1 1.8-26.3 39.2-34.8 51.6-3.9 5.7-7.9 11.7-9 13.5-1 1.8-2.1 3.4-2.5 3.7-.4.3-4.1 5.7-8.4 12.1-4.2 6.4-8.4 12.2-9.2 12.9-.8.7-1.5 1.6-1.5 2.1s-1.4 2.8-3 5.1c-1.7 2.4-4.7 6.8-6.7 9.8-2 3-5.5 8.1-7.9 11.2-2.4 3.1-4.4 6-4.4 6.5-.1.4-1 1.9-2.1 3.2-1.8 2.2-2.1 2.3-3.5.9-1.8-1.8-1.3-2.7 12.6-21.3 12.8-17.3 16-21.6 17.7-24.6 1-1.6 2.1-2.9 2.5-2.9.4 0 .8-.5.8-1 0-.6 1.8-3.5 4-6.5 2.1-2.9 6.3-8.8 9.3-13.2 8-11.6 16.6-23.5 18.8-25.9 1-1.1 1.9-2.4 1.9-2.8 0-.4 2.6-4.2 5.8-8.4 3.1-4.3 6.8-9.5 8.2-11.7 2.6-4.4 11-15.5 11.7-15.5.2 0 .1.6-.3 1.2zM39.9 114c7.4 10.6 7.9 11.3 20.3 29 22.2 31.9 27.1 39 34.5 50 4.2 6.3 8.6 12.5 9.7 13.8 1.4 1.6 1.7 2.5.9 3.3-.6.6-1.6.8-2.2.5-1.1-.7-12.7-17.6-17.8-25.9-1.7-2.9-3.6-5.7-4.1-6.3-.8-.9-3.8-5.3-7.7-11.5-.5-.9-4.5-6.7-8.8-13-25.5-37.2-32.4-47.6-33.1-49.4-.6-1.8-.5-1.8.8-.5.8.8 4.2 5.3 7.5 10zm111.9 71c1.1 1.8 1 2-1.8 2-1.8 0-3-.5-3-1.3 0-3.2 3-3.6 4.8-.7zm6.5 5.1c3.8 1 5.7 3.3 4.1 4.8-.5.5-7.7 1.1-16.1 1.4l-15.2.6 1.1-2.3c1.1-2.6 3.8-4.3 7.8-4.9 5.1-.9 14.6-.7 18.3.4zm1.7 11.4c0 1.7-.7 4-1.5 5.1-.8 1-1.5 2.7-1.5 3.7s-1.2 2.9-2.6 4.2c-3.7 3.4-8.5 3.3-12.4-.2-1.7-1.4-2.8-2.8-2.5-3.1.2-.2-.7-2.1-2-4.1-1.4-1.9-2.5-4.6-2.5-5.8 0-2.5 2.6-2.9 17.3-2.9h7.7v3.1zm26.6 9.7c1.1 1.3 1.2 1.7.3 1.1-.8-.7-2.6-1.7-4-2.2-2.2-.9-2.2-1-.3-1 1.1-.1 2.9.9 4 2.1zm-54.6 0c0 .6.7 1.9 1.4 2.7 1.9 2 1.5 2.6-5.9 8.1-3.3 2.5-10.2 8-15.4 12.3l-9.5 7.7-2-2-2.1-2.1 4-3.7c9.8-8.9 18.3-16.3 22.2-19.1 2.2-1.6 4.4-3.4 4.8-4 .8-1.5 2.5-1.4 2.5.1zm34.4-.3c.3.5 3 2.5 5.8 4.5 2.9 1.9 7.6 5.1 10.3 7.1 2.8 2 7.1 5.1 9.8 6.9l4.8 3.3-2 2.4-1.9 2.3-6.8-5.5c-3.8-3-8.6-6.4-10.7-7.4-2.1-1.1-5.3-3.3-7-4.8-1.8-1.6-4.3-3.8-5.7-4.9-2.4-1.9-2.4-2-.6-3.4 2.3-1.6 3.3-1.8 4-.5zm-48.2 1.8c2.7 2.4 2.3 3.5-2.6 7.6-3.7 3.1-4.6 3.4-5.6 2.2-.6-.8-.8-2-.4-2.6.4-.7-.1-1.8-1.1-2.6-1.1-.7-1.4-1.3-.9-1.3.6 0 1.9-.8 3-1.8 1.7-1.6 3.8-2.8 5.3-3.1.3-.1 1.3.6 2.3 1.6zm64.9.3c1 .6 1.9 1.5 1.9 2.1 0 .6 1 2 2.3 3l2.2 2-2.5-.7c-2.2-.6-2.3-.5-1.1 1 2.3 2.8-.7 1.9-5-1.5-3.4-2.6-3.7-3.3-2.6-5 1.4-2.2 2.1-2.3 4.8-.9zm8.8 3.4c-.3.3-1.1-.5-1.8-1.7-1.3-2.1-1.2-2.1.5-.5 1 1 1.6 2 1.3 2.2zm-44.4 2.6c2.3 0 5-.7 6.1-1.5 2.6-2 3.4-1.9 3.4.6 0 2.8 1.8 5.9 3.4 5.9.8 0 1.9.7 2.7 1.6 1.1 1.3.6 2.1-2.8 5.6-4 4-4.3 4.1-10.8 4.1-6.5 0-6.8-.1-10.2-3.8-3.1-3.4-3.3-3.9-1.9-5.4.9-1 1.6-3.6 1.6-6 0-4.2 0-4.2 2.2-2.7 1.2.9 4.1 1.6 6.3 1.6zm18.1 2.2c4.4 3.2 5.5 4.8 3.1 4.8-1.5 0-8.7-5.8-8.7-7.1 0-1.5.9-1.1 5.6 2.3zm-31.2 3.5c-2.1 1.5-5.4 1.7-5.4.4 0-.5 1.5-2.1 3.3-3.5l3.2-2.6.3 2.2c.2 1.3-.4 2.7-1.4 3.5zm-6.6 2.5c2 2 1.3 3.6-1.9 4.3-4.2.9-5.8-1.3-2.6-3.7 2.6-2.1 3-2.1 4.5-.6zm46.3 1.6c-.6.2-.9.7-.7 1.1.9 1.4-1.1 3.2-2.7 2.5-2.1-.8-2.2-2.2 0-4.6 1.3-1.4 1.9-1.6 3.1-.6.9.8 1 1.4.3 1.6zm-9.7 2.6c-.7 1.7 4.4 3.6 9.7 3.6 2.2 0 3.9.4 3.9 1 0 .5-2.1 1-4.6 1-3.2 0-4.4.4-4.1 1.2.2.7 1.3 1.3 2.5 1.3s2.2.4 2.2 1c0 .5-1.5 1-3.3 1-2.6 0-4.1.9-7.1 4.2-3.7 4.1-6.8 5.4-8.1 3.3-.9-1.5-2.5-1.2-2.5.5 0 .8-.4 1.5-1 1.5-1.3 0-1.3-1.9.1-5.9.6-1.7 1.7-3.1 2.4-3.1s1.5-1 1.9-2.3c.5-1.9 7-9.7 8.1-9.7.3 0 .2.6-.1 1.4zm-26.5 2.2c1.2 1.5 2.1 3.2 2.1 3.9 0 .7.6 1.5 1.4 1.8 1.8.7 1.7 5.3-.1 6.9-1.1.9-1.9.9-3.5-.1-1.5-.9-2.3-1-3.1-.2-.6.6-1.8 1.1-2.6 1.1-1.1 0-1.1-.4.4-2 1.7-1.9 1.7-1.9-.6-1.4-6.5 1.5-7.2 1.4-3.1-.6 5.7-2.8 4.6-3.7-2.3-2-3 .7-5.8 1.1-6.1.7-.8-.7 6.2-3.7 8.7-3.7 2.5 0 3.4-1.9 1.3-2.7-1-.3-3 .1-4.6 1-1.7.9-3.9 1.7-5.1 1.6-2.2 0-2.2 0 .2-1.7 3.3-2.3 10.1-5.1 12.8-5.1 1.2-.1 3.1 1.1 4.2 2.5zm40.2-.8c-.7.2-1.8-.1-2.3-.6-.8-.8-.4-.9 1.3-.5 1.3.4 1.8.8 1 1.1zm6.6 5.4c1.3 2.5 1.8 6.6 2.1 17 .2 7.6.2 14.8-.1 16.1-1 3.9-6.8 11.7-8.7 11.7-2.5 0-8-3.2-8-4.7 0-.6-1.5-1.3-3.2-1.5-2.8-.2-3.4-.8-3.6-3.1-.3-2.5-.6-2.7-4-2.1-2.9.4-4.2.1-5.9-1.6-2.6-2.4-3-4.8-.8-5.6 2-.8 1.9-2.4-.2-4.1-1.6-1.2-1.6-1.3.9-1.1 2.8.3 6.8-2.6 6.8-4.9 0-1.7 1.1-1.7 6.2.4 5.2 2 8.6 4.8 9 7.6.2 1.1.9 2.2 1.7 2.5.8.3 1.1 0 .7-.6-.3-.6-.2-1.3.4-1.7 1.6-1 1.1-4.1-1-6-1.1-1-2-2.4-2-3.2 0-1.9-2.7-2.8-4.4-1.4-1.4 1.1-4.6.5-4.6-.9 0-.4 1.7-1.5 3.9-2.4 3.3-1.6 8.1-6.3 8.1-8.1 0-1 3.4-5.4 4.2-5.5.4 0 1.5 1.5 2.5 3.2zm-32.3.7c1 1.5-5.7 1.9-7.2.5-1.1-1.2-.7-1.4 2.7-1.4 2.2 0 4.2.4 4.5.9zm-35.2 3.6c1.1 1.4 2.5 2.5 3.3 2.5.7 0 1.8.6 2.4 1.4.6.7 2.5 1.6 4.1 2 3.8.7 3.9 2.2.2 2.9-3.2.7-8 4.2-7 5.2.3.4 2.4-.6 4.7-2 2.2-1.5 4.5-2.4 5.2-1.9.8.5.2 1.2-1.8 2.3-4.8 2.6-8.2 5.7-9.2 8.4-1.2 3.1-.3 4.3 1.5 1.9 1.2-1.5 1.3-1.4 1.4 1 0 1.6.5 2.8 1 2.8.6 0 1-2 1-4.5 0-3.7.4-4.7 2.5-6.1 2.9-1.9 4.4-1.2 2.5 1.1-.7.8-1 1.5-.7 1.5.3 0 1.2.3 2.1.6 1 .4 2-.5 3-3.1 1.3-3 1.9-3.5 3.6-3 2 .6 2.5-.5 2.1-4.2-.3-2.1 1.8-2.4 2.9-.3 1.5 2.8 2.6 2.5 2.5-.7 0-4.1 2.8-4.1 4-.1.7 2.3 2 3.8 4.3 4.8 3.7 1.8 3.3 3-1 3-1.6 0-3.7.7-4.6 1.6-1.4 1.5-1.4 1.7 0 2.5 2.7 1.5.9 4.6-5.1 9-3.1 2.3-6.1 4.8-6.7 5.5-.6.7-3.5 2.9-6.4 4.9-7.1 4.8-10.4 4.5-14.1-1-3.5-5-3.9-7.2-4-22.1-.1-9.4.2-12.8 1.5-15.2 2-3.9 2.3-3.9 4.8-.7zM169 245c0 .5-.4 1-.9 1-.6 0-1.3-.5-1.6-1-.3-.6.1-1 .9-1 .9 0 1.6.4 1.6 1zm-31.5 6c-.4.6-1.4.5-2.5-.2-2.4-1.6-1.5-3.1 1.1-1.8 1.1.6 1.7 1.5 1.4 2zm110.5-1.5c1.1 1.3.7 1.5-2.9 1.5-3.8 0-5-.8-3.4-2.3 1.2-1.2 5-.7 6.3.8zm-27.4 4.1c.2 1.2-.1 1.3-1.2.3-.7-.6-1.1-1.6-.8-2.1.7-1.1 1.7-.3 2 1.8zM135 253c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-30.7 3c3.2 0 3.7.3 3.7 2.3v2.4l-31.6.7c-17.4.3-31.9.4-32.2.2-1.3-1.3 6.3-2.8 15.8-3.1 5.8-.2 14.3-1 19-1.9 4.7-.8 11.4-1.3 15-1 3.6.2 8.2.4 10.3.4zM298 266.9c0 3.8-.4 6.1-1.2 6.4-1 .4-1 .7-.1 1.4 1.3 1 2.8 76.6 1.6 86.2l-.6 5.3-3.2-.6c-4.1-.8-6.5.1-6.5 2.4 0 3.2-2.6 4.1-14.6 4.6-6.5.3-12 .7-12.3.9-.8.9.9 1.8 4.6 2.6 3.7.7 3.6.8-1.1.6-2.8-.1-5.1.3-5.3 1-.4 1.2 4.2 2.3 10.4 2.3 3.7 0 4.3.3 3.4 1.3-.6.8-.8 1.7-.4 2 .3.4 5.8.8 12.2.9 6.4.1 9.2.3 6.4.5-2.9.2-5.3.8-5.3 1.2 0 .5-1.9 1.1-4.2 1.4-2.4.3-4.8 1.3-5.5 2.4-3.5 4.9-4.3 5.3-9.2 5.3-2.8 0-5.3.4-5.6 1-.3.5-4.6 1-9.6 1-4.9 0-8.9.3-8.9.8 0 .4-6.3.6-14 .4-8.4-.1-14 .2-14 .7 0 .6 2.1 1.2 4.8 1.4l4.7.3-5.2.2-5.3.2v-4.9c0-6.7.7-8.1 4.1-8.1 1.6 0 2.9-.5 2.9-1.1 0-.7-1.4-1-3.5-.7l-3.4.4 2.3-3.1c5.1-6.7 3.7-16.7-3.5-24.3-2.4-2.7-4.9-6-5.6-7.4-.9-2-2.1-2.7-5.7-3.2-2.5-.4-4.7-1.3-4.7-1.9-.1-.7-.2-3.7-.3-6.7-.1-5.6-3.3-12.3-6.5-13.5-2.1-.8-2.6.2-1 2.2 1.3 1.5 1.2 1.6-.6.8-1.1-.5-4.9-.8-8.5-.7-5.9.3-7.1.7-13.3 4.9-3.7 2.5-6.5 4.8-6.3 5 .6.6 4.6-1.6 7-3.9 6.1-5.8 20.5-5.9 23.9-.1.4.7 1.4 1.3 2.1 1.3.9 0 1.2 2.2 1.2 8 0 4.4-.3 8-.8 8-.4 0-.8-1.1-.8-2.4 0-2.9-3.3-7.2-7-9.1-3.3-1.7-8-2-8-.5 0 .5 1.2 1 2.6 1 4.6 0 10.3 4.4 10.4 8 0 .8.7 2.8 1.5 4.4.9 1.8 1.5 5.8 1.6 11 .1 13.6 2.1 29.5 4.7 38.6.6 1.9 1.3 6.3 1.7 9.8.3 3.5 1 7.3 1.4 8.5.7 1.8.3 2.5-2.1 3.9-3.1 2-4.8 2.3-4.8.9 0-.5 1-1.2 2.3-1.6 1.9-.6 1.9-.8.5-1.2-1.9-.5-2.5-2.3-.8-2.3.6 0 1-.5 1-1 0-.6-.8-1-1.7-1-1.3 0-1.4-.3-.5-1.2.7-.7 1.2-2 1.2-3.1 0-1.3-.6-1.8-2.2-1.5-1.6.2-2.2.9-2.1 2.3.2 1.1.4 5.8.5 10.5l.2 8.5-5 .6c-2.7.4-8.4 1.4-12.7 2.3-4.3.9-8.6 1.6-9.5 1.5-2.3-.1 5.1-2.7 11.3-4.1 5.6-1.2 12.5-4.4 12.5-5.8 0-1.5-1.7-2-4.9-1.4-3.2.7-4.3 2.4-1.5 2.4 3.3 0 .1 1.9-4.4 2.6-2.6.4-6.4 1.3-8.6 2-2.1.8-6.3 1.4-9.2 1.4-6.4 0-7.1 1.4-1.1 2.5l4.2.7-3.5 1c-5.8 1.7-15.2.4-19.6-2.6-4.4-3-8-3.3-11.2-1-1.4 1-3.3 1.3-5.1.9-2.7-.6-2.8-1-5-12.8-1.3-6.7-2.7-15.6-3.2-19.7-1.6-12.6-2.8-23.1-3.5-30.9-.5-5.4-1.2-7.8-2.7-9.1-1.4-1.4-1.8-2.6-1.3-4.4.4-1.5 0-4.1-.9-6.2-2.3-5.6-2-11 1-14 1.5-1.5 2.5-3.6 2.5-5.3 0-1.5.8-3.5 1.8-4.3 2-1.7 8.9-3.8 12.6-3.8 1.4 0 2.6-.5 2.6-1 0-1.2-5.2-1.3-10.3-.1-6.6 1.6-5.8-1.9 1.5-6.5 4-2.6 8.1-3 12.4-1.4 3.4 1.3 4.2.5 1.9-2-1.1-1.2-3.1-2-5.2-2-2.3 0-3.3-.5-3.3-1.5 0-.9-.7-3-1.6-4.7-1-2-1.2-3.4-.6-4 1.2-1.2 15.8 9.5 16.5 12.1.2 1 1.4 2 2.6 2.4 2.4.6 2.9-1 .6-1.9-.8-.4-1.5-1.2-1.5-2 0-.7-.8-1.8-1.9-2.3-1.7-1-8.7-6.3-12.3-9.6-1.3-1-1.8-3-1.8-6.4 0-6.6 2.3-11.7 6.2-13.7 1.7-.9 5.3-3.6 7.9-6.1l4.7-4.4.7 7.6c.5 5 1.1 7.3 1.7 6.7.6-.6.7-3.6.1-8.1-.8-5.8-.7-7.4.5-8.3 1.1-1 1.8-.8 3.1.9 1 1.1 5.1 3.8 9.2 5.9 4.1 2.1 7.6 4.2 7.7 4.6.2.4.9.8 1.5.8 1.6.1 5.8 3.6 5.6 4.7-.2.8.9 5.7 1.8 8.3 1.2 3.1.6 4.9-2.5 7.8-3.2 3-4.1 5.2-2.2 5.2.6 0 1-.4 1-.9 0-1.9 3-3.9 5-3.4 1.4.4 1.9 1.1 1.5 2.3-.4 1.2.1 1.9 1.5 2.3 1.2.3 2 1.3 2 2.5 0 1.1.3 2.8.7 3.8.5 1.4.2 1.6-1.6 1.1-2.7-.7-7.1.8-7.1 2.3 0 1.5 3.3 2.6 3.8 1.2.2-.7 1.1-1.2 1.9-1.2.9 0 1.3.6.9 1.5-.3.9 0 1.5.9 1.5.8 0 1.9.9 2.5 2 .6 1.1 1.8 2 2.7 2 1.6 0 1.5-.4-.6-6.5-.5-1.7-1.7-5.6-2.6-8.7-.9-3.1-2.2-6.2-3-6.8-.7-.6-1.6-3.1-2-5.6-.3-2.5-1.2-5.9-2-7.7-1.3-3.1-1.3-3.2 1.8-4.2 2.5-.8 3.8-2.4 6.4-7.5 2.1-4.2 3.2-8 3.3-10.8 0-2.6.5-4.3 1.3-4.3 3.1-.4 58.7-1.5 82-1.7l25.7-.2v5.9zm-189.7.1c-.4 2.5.4 6 2.6 11.5 1.7 4.5 2.6 8.1 2.1 8.3-.6.2-1 .8-1 1.3 0 .6 2.3.7 6 .3l6-.7v6c0 4.3-.5 6.4-1.6 7.4-1.2 1-1.5 2.4-1.1 5.4.8 5.3-2.5 12.5-5.6 12.5-2 0-2 0-.1-1.5 1-.8 1.7-1.5 1.4-1.5-5-.6-14.9-.8-16.3-.4-3.5 1.1-.5 2.4 5.5 2.4 3.4 0 5.8.3 5.5.7-.4.3-.2 1.2.3 1.8.7.8.6 2.9-.1 6.1-.6 2.7-1.1 6-1.2 7.4-.1 1.4-1.4 3.5-2.9 4.8-2.1 1.8-2.8 3.5-3.4 8.5-.7 6.1-.8 6.3-7.3 12-3.6 3.2-7.6 6.6-8.8 7.6-1.9 1.5-2.3 2.8-2.3 8 0 6 0 6.1-2.7 6-1.6 0-2.2-.3-1.5-.6 2.4-1 1.1-2.3-2.3-2.3-1.9 0-3.5-.5-3.5-1 0-.6-5.4-1-14.3-1-11.7 0-15-.3-17.8-1.7l-3.4-1.8 10.3-.3c7.3-.2 11.1-.7 12.7-1.8 1.4-.9 3.9-1.4 6.1-1.2 2.4.2 3.9-.2 4.2-1 .3-1-.9-1.3-4.9-1.1-3 .2-6.5-.1-7.8-.5-2.4-.8-2.4-.9-.6-2.2 1.7-1.3 1.6-1.4-1.3-1.4-1.8 0-3.2.4-3.2 1s-4.7 1-12.2 1c-15.4 0-19.9-.7-20.6-3.2-.2-1-.9-1.8-1.4-1.8-.5 0-.7-.4-.3-.9.8-1.4 5.2-.8 6.7.9 1.1 1.3 3.5 1.5 13.6 1.2 6.7-.2 12.2-.8 12.2-1.3s-5.1-1-11.2-1c-6.2-.1-10.3-.4-9-.6 2.7-.5 2.9-2.3.2-2.3-1.1 0-2-.6-2-1.4 0-.8-1.2-1.7-2.7-1.9-1.6-.2.8-.4 5.2-.5 4.4 0 7.4.2 6.8.5-2.9 1.1-1 2.3 3.8 2.3 3.6 0 4.9-.4 4.6-1.3-.2-.6-1.7-1.1-3.3-1-2.7.2-2.7.2.5-.8 2.5-.8 4.2-.7 6 .1 3.2 1.5 21 1.5 22.5 0 1.2-1.2.8-1.3-7.2-1-4.8.1-6.8-.2-8.2-1.5-1.8-1.6-2-1.6-2.6-.2-.5 1.3-1 1.4-2.6.6-1.1-.6-8.6-1.5-16.7-1.9-8-.5-15.6-1.2-16.7-1.5-1.2-.4-3.1-.2-4.3.4-1.8 1-2.1.9-2.1-.9 0-1.6-.6-2-3.4-2-2.4 0-3.6.5-3.9 1.7-.3 1.2-.5.9-.6-.8 0-1.4-1-3.4-2.1-4.4-1.5-1.3-1.9-3-1.9-7l.1-5.3 3.7-.6c2-.3 6.8-.4 10.6-.1l7 .4-6-1c-3.3-.5-8.1-.8-10.7-.6l-4.8.4V320.4l6.3.4c4.2.3 5.9.1 5.2-.6-.8-.8-5.9-1.8-10.7-2.1-.5-.1-.8-1-.8-2.1 0-1.7.7-2 4.5-2 2.5 0 4.5.4 4.5 1 0 .5-.9 1-2 1s-2 .4-2 .9c0 1 46.5.6 69.3-.7 9.6-.5 16.2-1.3 16.9-2 .9-.9.8-1.2-.6-1.2-.9 0-1.4-.5-1.1-1 .3-.6 3.2-1 6.3-1 6.4 0 13.2-1.6 13.2-3 0-.6-.8-1-1.7-1-.9 0-2.4-.7-3.4-1.6-.9-.8-2.4-1.7-3.3-1.8-.8-.1-2.6-1.4-4-2.9-2.2-2.4-3.3-2.7-8.5-2.7-3.3 0-6.3.4-6.6 1-1 1.5-3.7 1.2-8-1-2.2-1.1-5.2-2-6.7-2s-2.9-.4-3.3-.9c-1-1.7-8.9-6.7-12.5-7.9-5.8-2.1-10.5-1.4-17.9 2.3-4.3 2.2-8.3 3.5-10.7 3.5-4.1 0-8.8 1.5-14.2 4.3-3.4 1.9-7.3 2-7.2.2 0-.6.7-1 1.4-1 .8 0 1.8-.4 2.2-.8.4-.4-.5-.7-1.9-.7-2.5 0-2.7-.3-2.7-3.9 0-3.7.2-3.9 3.8-4.5 2-.3 4.9-.6 6.5-.6 1.5 0 2.7-.4 2.7-.9s-2.6-.7-5.9-.4c-3.9.4-6.1.2-6.6-.6-1.2-2-.1-2.3 9.7-2.6 11.6-.3 11.8-.3 11.8-1.4 0-.5-4.9-.8-11-.6l-11 .2V267h4.5c2.5 0 4.5-.5 4.5-1 0-.6-2-1-4.5-1s-4.5-.3-4.5-.8c0-.4 23.8-.7 52.9-.7h52.8l-.4 3.5zm-57.8 23.4c0 .6-1.6 1.4-3.5 1.9s-4 1.3-4.6 1.8c-.6.4-3.7 1.7-7 2.7-3.2 1.1-6.7 2.3-7.6 2.7-1.3.5-1.8.2-1.8-.9 0-1.8-4-2.2-6.8-.7-.9.4-3 1.1-4.7 1.5l-3 .7 2.4-1.7c1.3-1 6.2-2.3 10.9-3.1 4.7-.7 9.6-2.2 11.1-3.2 3.8-2.8 14.6-4 14.6-1.7zm46.4 11.3c1.5 1.3 1.9 2.5 1.5 4-.8 2.8-2.4 3-2.4.3 0-1.1-.6-2-1.4-2-1.5 0-2.8-2.4-1.9-3.4 1-1 1.9-.7 4.2 1.1zM52.5 303c.4.6-1.1 1-3.9 1-2.5 0-4.7.4-5 .9-.7 1.1-5.6 2.1-5.6 1.1 0-1.1 2.2-2.7 4.5-3.3 3.6-.9 9.4-.7 10 .3zm16.8.5c.7 1.6-.8 2.9-2.3 2-1.5-.9-1.2-3.5.4-3.5.8 0 1.6.7 1.9 1.5zM88 303c0 1.3-5 1.3-7 0-1.1-.7-.4-1 2.8-1 2.3 0 4.2.4 4.2 1zm-58.3 1.4c-.7 1.7 1.1 3.6 3.5 3.6 1 0 1.8.4 1.8 1 0 1.6-5.7 1.2-6.4-.5-.5-1.4-.8-1.4-2.8-.1-1.3.8-3.7 1.7-5.5 2.1l-3.2.6 1.6-3.1c1.6-3.4 4.2-4.8 8.7-4.9 2-.1 2.7.3 2.3 1.3zM64 307c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm5.5 7c-1.6.4-5.7.7-9 .7-5.9 0-6 0-1.5-.7 2.5-.4 6.5-.7 9-.7 4-.1 4.2 0 1.5.7zm-39.9.9c-.8 1.2-10.4 1.2-11.1 0-.4-.5 1.9-.9 5.5-.9 3.4 0 5.9.4 5.6.9zm18.7-.2c.3.5-3.3.9-7.8 1.1-4.8.1-8.6-.2-9-.8-.4-.6 2.4-1 7.9-1 4.7 0 8.7.3 8.9.7zM205 353.5c0 .6 2.5 4 5.5 7.5 3 3.4 5.2 6.7 4.9 7.1-.3.5-4.5.9-9.3.9h-8.8l-.6-6.3c-.7-7.6 0-11.5 2.2-12 2.1-.4 6.1 1.3 6.1 2.8zM28.5 355c.4.6-1.2.9-4 .8-2.5-.1-4.5-.6-4.5-1 0-1.2 7.8-1 8.5.2zm-18.7 1.6c1.2.4 2.2 1.1 2.2 1.6s-.9.6-2 .3c-1.2-.4-2.7-.2-3.5.5-1 .8-1.5.8-2-.1-.4-.6-.1-1.5.6-2 1.7-1 1.8-1 4.7-.3zm97 4.2c.1 2.7.2 5.5.4 6.3.2 1.1-1.4 1.4-8.2 1.6l-8.5.3 6.9-6.5c3.7-3.6 7.4-6.5 8.1-6.5.9 0 1.3 1.6 1.3 4.8zm-87.5-1.1c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm91.4 13.5c-.2 1.3-.4.5-.4-1.7-.1-2.2.1-3.2.4-2.3.2 1 .2 2.8 0 4zm184.5-3.2c1 0 1.8.4 1.8 1 0 .5-.6 1-1.4 1-2.6 0-4.6-1.2-4.6-2.8 0-1.2.3-1.3 1.2-.4.7.7 2 1.2 3 1.2zm-288.5.6c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm209.3 6.5c-.7 3.1-.8 2.9-.8-2.1-.1-3.9.2-4.9.8-3.4.4 1.1.5 3.6 0 5.5zm-196.9-4.5c1.2 1.4 1.1 1.6-.5 1.3-1.1-.2-2.1-1-2.4-1.7-.5-1.7 1.3-1.5 2.9.4zm85.8-1c2.8.6 3.1 1 3.1 4.6 0 3.3-.2 3.8-1.4 2.9-1.1-.9-1.5-.8-2 .4-.3.9-1 1.4-1.5 1-.6-.3-.8-1.1-.5-1.9.3-.9-.5-1.3-2.6-1.3-1.6 0-3 .3-3 .6 0 1-5.9 3.3-6.8 2.7-1.3-.8-2.3-6.2-1.6-8.1.7-1.6 10.1-2.1 16.3-.9zm95.8 2.6c-.3.7-.5.2-.5-1.2s.2-1.9.5-1.3c.2.7.2 1.9 0 2.5zm12.3.8c0 2.2-.4 4-1 4-.5 0-1-.7-1-1.5 0-2.3-1.8-1.8-2.3.7-.3 1.4-.5.9-.6-1.5-.1-2.5-.6-3.7-1.5-3.7-1 0-1.6 1.3-1.9 3.7-.3 3.5-.4 3.4-.5-1l-.2-4.7h9v4zm-174.7-2.3c-1.3.2-3.3.2-4.5 0-1.3-.2-.3-.4 2.2-.4s3.5.2 2.3.4zM9.5 375c.4.6-.6 1-2.2 1-2.2 0-2.5-.2-1.3-1 1.9-1.2 2.7-1.2 3.5 0zm266.5 0c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm-239 2.4c0 1.1-1.9 1.5-2.5.6-.3-.5.1-1 .9-1 .9 0 1.6.2 1.6.4zM8.5 379c-.3.5-1.5 1-2.6 1s-1.7-.5-1.4-1c.3-.6 1.5-1 2.6-1s1.7.4 1.4 1zm104.3 8.2c.2 3.4.7 8.1 1.2 10.3.5 2.2 1.2 7.1 1.5 10.8.7 5.9.5 6.8-.8 6.5-.9-.2-1.7.1-1.9.7-.2.5.7 1.1 2 1.3 3 .5 2.8 2.2-.3 2.2-1.4 0-2.5.4-2.5 1 0 .5 1.3 1 2.9 1 3 0 4.1 1.8 4.1 6.9v2.4l-2.3-2.1c-2.9-2.7-4-2.8-3.2-.2.7 2.3-.3 2.6-3 .7-1.7-1.3-1.7-2.9-1.3-23.3.5-20.6 1.1-25.9 2.7-25 .3.2.8 3.3.9 6.8zm-98.5-4.5c-1.3.2-3.5.2-5 0-1.6-.2-.5-.4 2.2-.4 2.8 0 4 .2 2.8.4zm24.5.9c2.9.8 2.9 4.2 0 4.6-1.2.2-2.4.9-2.6 1.7-.4 1.1.5 1.3 3.9.9 2.4-.3 5.3-.2 6.4.3 1.6.6 1.1.9-2.3 1.4-2.3.4-4.5 1.2-4.8 1.6-.3.5-1.4.9-2.5.9s-1.8-.4-1.5-.9c.3-.5-1.3-1.1-3.6-1.5-3.8-.6-4.6-2.1-1.1-2.1.9 0 2.1-.8 2.7-1.8.9-1.4.7-2.1-.7-3.2-1.8-1.3-1.7-1.4.5-1.8 1.3-.2 2.5-.5 2.8-.6.3 0 1.5.2 2.8.5zM11 386c0 .5-1.8 1-4 1s-4-.5-4-1c0-.6 1.8-1 4-1s4 .4 4 1zm96.2 11.5c-.1 6.6-.5 15.8-.8 20.5-.6 8.5-.6 8.6 2.3 11.7 3.5 3.8 2.9 4.3-5.2 4.3-7.2 0-7.8-.9-7.4-12.2.2-5.1-.1-10-.6-10.8-1-1.6-1.8-23.7-.9-25.2.3-.5 3.3-.8 6.7-.6l6.1.3-.2 12zM29 388c0 .5-.9 1-2 1s-2-.5-2-1c0-.6.9-1 2-1s2 .4 2 1zm62.5 2.2c-.9 4.2-1.2 4.5-3.5 3-1.3-.8-6.5-1.2-14.9-1.2-7.6 0-13.2-.4-13.6-1-.4-.6.5-1 1.9-1 5.2 0 2.4-1.9-3.1-2.2-3.2-.2 3.1-.5 14-.6l19.9-.2-.7 3.2zm206.5.4c0 2-.5 2.4-2.7 2.4-2.5 0-7.9-4.1-6.8-5.1.2-.2 2.4-.3 4.9-.1 4.1.4 4.6.7 4.6 2.8zm-283.2.1c-1.6.2-4 .2-5.5 0-1.6-.2-.3-.4 2.7-.4s4.3.2 2.8.4zm269.8.8c1.6 1.2 1.6 1.4.3 1.5-.9 0-2.2.7-2.9 1.5-.7.8-1.9 1.5-2.7 1.5-1.2 0-1.3-.3-.4-1.4.6-.8 1.1-1.8 1-2.2-.5-2.8 1.6-3.2 4.7-.9zm-266.8 2.2c-2.6.2-7.1.2-10 0-2.9-.2-.8-.3 4.7-.3s7.9.1 5.3.3zm2.7 3.3c-.3.5-1.3 1-2.1 1s-1.2-.5-.9-1c.3-.6 1.3-1 2.1-1s1.2.4.9 1zm4.5-.6c0 1.1-1.9 1.5-2.5.6-.3-.5.1-1 .9-1 .9 0 1.6.2 1.6.4zm19.3 1.3c-1.3.2-3.5.2-5 0-1.6-.2-.5-.4 2.2-.4 2.8 0 4 .2 2.8.4zm13.5 0c-1.5.2-4.2.2-6 0-1.8-.2-.6-.4 2.7-.4 3.3 0 4.8.2 3.3.4zm24.9-.1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm6.1.6c-.6 1.8-2.8 2.1-2.8.4 0-.9.7-1.6 1.6-1.6.9 0 1.4.5 1.2 1.2zm208.7-.2c.4.6-.6 1-2.2 1-2.2 0-2.5-.2-1.3-1 1.9-1.2 2.7-1.2 3.5 0zm-43.2 1.7c-1.3.2-3.3.2-4.5 0-1.3-.2-.3-.4 2.2-.4s3.5.2 2.3.4zm-241.6.9c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm6.3.9c0 .8-.7 1.5-1.6 1.5-1.4 0-1.4-.3-.4-1.5.7-.8 1.4-1.5 1.6-1.5.2 0 .4.7.4 1.5zm12-1.1c0 1.1-1.9 1.5-2.5.6-.3-.5.1-1 .9-1 .9 0 1.6.2 1.6.4zm31.8.3c-2.6.2-7.1.2-10 0-2.9-.2-.8-.3 4.7-.3s7.9.1 5.3.3zM240 402c0 .5-.7 1-1.5 1s-1.5-.5-1.5-1c0-.6.7-1 1.5-1s1.5.4 1.5 1zm46.7-.4c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM92 403c0 .6-4 1-10.2.9-6.7-.1-9.4-.4-7.8-.9 3.7-1.2 18-1.2 18 0zm163.7-.4c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm-189 1c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm159.1 1.1c-2.1.2-5.5.2-7.5 0-2.1-.2-.4-.4 3.7-.4 4.1 0 5.8.2 3.8.4zm42.5 0c-.7.2-2.1.2-3 0-1-.3-.4-.5 1.2-.5 1.7 0 2.4.2 1.8.5zm-16.5 1c-1 .2-2.8.2-4 0-1.3-.2-.5-.4 1.7-.4 2.2-.1 3.2.1 2.3.4zm43.2.3c0 .6-2.8.9-6.7.8l-6.8-.1 6-.7c3.3-.4 6.3-.7 6.8-.8.4-.1.7.2.7.8zm-283.7.7c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm265.5 0c-1 .2-2.6.2-3.5 0-1-.3-.2-.5 1.7-.5s2.7.2 1.8.5zm-13.5 1c-1.3.2-3.5.2-5 0-1.6-.2-.5-.4 2.2-.4 2.8 0 4 .2 2.8.4zm35.2 3.7c0 1.9-1 2-41.9 1.8-23.1-.1-42.2-.5-42.5-.7-.2-.3-.2-.7 0-.9.2-.3 14.1-.7 30.8-1 16.7-.3 30.6-.8 30.9-1.1.3-.3 5.6-.4 11.6-.3 10.2.3 11.1.5 11.1 2.2zm-205.7 1.9c.2 1.2-.4 1.7-2 1.7-1.3 0-21.4 0-44.8.1-36.5 0-42.5-.2-42.8-1.5-.3-1.2 3.3-1.5 24.9-1.5 13.9-.1 25.4-.3 25.5-.4.2-.1 9-.2 19.6-.1 17.1.1 19.3.3 19.6 1.7zm47 26.4c4.8 3.1 5.1 3.9 2 4.6-1.3.3-4.1 1.2-6.3 2.1-4.3 1.6-15.5 2.2-15.5.8 0-.5 1.8-1.7 3.9-2.7 2.2-.9 5.2-3 6.7-4.6 3.4-3.6 4-3.6 9.2-.2zm50.7-1.7c1.4 0 9.8 6.6 10.3 8.1.7 1.8-9.3.9-12.3-1.1-1.6-1.1-3.7-2-4.6-2-.9 0-2.2-.7-2.9-1.5-1-1.2-.6-1.7 2.2-2.9 1.8-.8 3.9-1.2 4.6-1 .8.2 2 .4 2.7.4z" />
        <Path d="M211.1 254.4c-1 1.1-.9 1.4.1 1.2 1.4-.2 2.3-1.5 1.5-2.2-.2-.2-1 .2-1.6 1zM144 205.1c0 1.1 4.6 2.3 5.9 1.4 2.1-1.3 1-2.3-2.4-2.3-1.9 0-3.5.4-3.5.9zM144.8 209.7c-2.2.5-2.4 3.3-.3 3.3.8 0 1.5.4 1.5 1 0 1.6 2 1.2 5.3-1.2 2.7-2 2.8-2.2 1.1-2.9-2.1-.8-5-.9-7.6-.2zM195.5 266l-5 .7 6.3.1c3.6.1 6.2-.2 6.2-.8 0-.6-.6-.9-1.2-.8-.7 0-3.5.4-6.3.8zM268.5 266.1c-6.6.5-15.8.7-20.5.4-6-.4-8.1-.3-7 .4 2.5 1.8 53.5.7 52.4-1.1-.6-.9-8.1-.8-24.9.3zM211 267c0 .6 3.7 1 9 1s9-.4 9-1-3.7-1-9-1-9 .4-9 1zM288.5 268.9c-.2.5 1.2 1.1 3.3 1.3 3.5.5 5.1.3 4.1-.6-1.1-.9-6.9-1.4-7.4-.7zM243.5 271l-5 .7 6.3.1c4 .1 6.1-.2 5.7-.8-.3-.6-.9-.9-1.3-.8-.4 0-2.9.4-5.7.8zM260 272c-1.1.7 0 1 3.8 1 3.3 0 5.1-.4 4.7-1-.8-1.3-6.5-1.3-8.5 0zM279.3 271.7c-5.7.7-3.5 2.3 3.2 2.3 3.7 0 6.5-.4 6.5-1s-.6-1-1.2-1c-.7 0-2.2-.2-3.3-.4-1.1-.2-3.5-.1-5.2.1zM191.3 273.5c.5 1.3 16.7 1.9 16.7.6 0-.5-3.8-1.1-8.5-1.3-5.4-.2-8.4.1-8.2.7zM219.5 274c-.4.6 1 1 3.5 1s3.9-.4 3.5-1c-.3-.6-1.9-1-3.5-1s-3.2.4-3.5 1zM234.7 274.4c-4.7 1.7-6.7 3.4-6.7 5.7 0 2.6-3.8 4.9-8.1 4.9-2 0-5 .7-6.5 1.5-1.6.8-3.9 1.5-5.1 1.5-1.3 0-2.3.5-2.3 1.1 0 .7-2.7 1-8 .7-4.7-.2-8 .1-8.2.7-.2.6 2.8 1.1 7.2 1.3 5.2.2 7.7.7 8.3 1.7.9 1.7 5.3 2 6.2.5.4-.6-.7-1.3-2.5-1.6-4.7-1-2.7-1.8 3.6-1.5 7 .3 11.9 1.9 6.2 2-2.1.1-3.8.5-3.8 1.1 0 .6 4.5 1 11.5 1s11.5-.4 11.5-1-1.2-1-2.7-1c-1.7 0-2.3-.4-1.7-.9 1.1-1.1 26.6-1.7 28.2-.7 2 1.2 1.3 2.6-1.2 2.6-2.8 0-5.6.9-5.6 1.9 0 .3 8.6.7 19 .9 11.3.2 19-.1 19-.7 0-1.7-3.1-2.1-15.2-2.1-6.7 0-11.8-.3-11.5-.6.4-.4 6.8-.8 14.4-1.1 7.6-.2 14.4-.5 15.1-.8 2-.7 1.4-2.2-1.3-2.9-3-.8-3.3-2.6-.5-2.6 1.1 0 2-.5 2-1 0-1.3-3.3-1.3-4.7.1-1.3 1.3-6.9.3-8-1.4-1.9-3-9.9-4.7-11.9-2.7-.6.6-3.5 1.1-6.5 1.2-4.5.1-6.3-.4-9.4-2.5-2.2-1.5-4.8-2.7-5.7-2.7-2.7 0-9.8-2.4-9.8-3.2 0-1.1-.8-1-5.3.6zm7.8 2.8c1.4.6 2.5 1.5 2.5 2.1 0 .5 1.1.6 2.4.3 1.6-.4 3 0 4 1 2 2 2 3.4.1 3.4-.9 0-2.7.7-4 1.6-2.4 1.6-2.5 1.6-2.5-.9 0-3.2-1-3.8-6.5-4-2.9-.1-4.7-.7-5-1.7-.5-1.3-.7-1.3-1.5 0-.7 1.1-1 1.1-1 .2 0-2.7 7.1-4 11.5-2zm38.2 8.7c1.1 1.7.8 1.9-3.2 2.4-5 .7-14.5-.2-14.5-1.4 0-.4 2.5-.7 5.5-.5 3.7.2 5.9-.2 6.6-1.1 1.6-1.9 4.2-1.6 5.6.6zM231 292c1.1.7.3 1-3 1s-4.1-.3-3-1c.8-.5 2.2-1 3-1 .8 0 2.2.5 3 1z" />
        <Path d="M256.8 275.8c-1.6.2-2.8.8-2.8 1.4 0 .6 1.1.7 2.7.3 4.7-1.1 4.7-2.3.1-1.7zM269.5 277c-.4.6.7 1 2.4 1s3.1-.5 3.1-1c0-.6-1.1-1-2.4-1-1.4 0-2.8.4-3.1 1zM291 278c0 .5.9 1 2.1 1 1.1 0 1.7-.5 1.4-1-.3-.6-1.3-1-2.1-1s-1.4.4-1.4 1zM187.6 280.8c.5.5 3.8.6 7.4.2l6.5-.7-7.4-.1c-4.1-.1-7.1.2-6.5.6zM213.5 281.9c-1.9.8-1.9.8.2 1.5 2.4.8 4.3.1 4.3-1.5 0-1.1-1.7-1.1-4.5 0zM136.9 285.7c0 2.7-.1 2.7-.9.5-1.3-3-2-2.8-2 .8 0 1.8.5 3 1.3 3 .9 0 1.2 1.9 1 7.2-.2 6-.1 6.6.6 3.3 1.6-7.6 2.2-17.5 1.1-17.5-.5 0-1 1.2-1.1 2.7zM181.5 287c-.4.6 1 1 3.4 1 2.3 0 4.1-.5 4.1-1 0-.6-1.5-1-3.4-1s-3.8.4-4.1 1zM242 294c0 .5 2.3 1 5 1 2.8 0 5-.5 5-1 0-.6-2.2-1-5-1-2.7 0-5 .4-5 1zM183.6 295.9c1.2 1.1 10.3 2.1 10.9 1.1.7-1.2-2.2-2-7.3-2-2.7 0-4.2.4-3.6.9zM200.3 297.7c.9 1.4 19.6 2.3 29.2 1.4l8-.8-10.5-.2c-5.8 0-14.3-.4-18.9-.8-5.6-.4-8.2-.3-7.8.4zM245.5 304c.3.5 1 1 1.6 1 .5 0 .9-.5.9-1 0-.6-.7-1-1.6-1-.8 0-1.2.4-.9 1zM255.5 304c.3.5 1 1 1.6 1 .5 0 .9-.5.9-1 0-.6-.7-1-1.6-1-.8 0-1.2.4-.9 1zM262 304c-4.1 1-1 1.5 8.5 1.4 16.9-.1 22.5-.4 22.5-1.3 0-1-26.8-1.1-31-.1zM189 305.4c0 1.3.6 1.5 2.8 1 3.3-.8 4.1-1.4 1.9-1.4-.8 0-2.2-.3-3.1-.6-1.1-.4-1.6-.1-1.6 1zM205.8 304.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM221.8 304.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM226.8 304.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM287 310.5c0 1.3.9 1.6 4.3 1.3 2.3-.2 4.2-.8 4.2-1.3 0-.6-1.9-1.1-4.2-1.3-3.4-.3-4.3 0-4.3 1.3zM168.8 311.8c-1 1.3-11.2 9.7-14.7 11.9-.2.2-.2.6.1.9.7.6 12.2-7.6 15.4-11.1 1.3-1.4 1.9-2.7 1.4-3-.5-.3-1.5.3-2.2 1.3zM192.8 311.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM210.8 312.7c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4zM253.8 313.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM272.8 313.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM168.6 317.5c-1.5 1.9-4.4 4.4-6.4 5.5-4.3 2.2-3.6 2.6 1.1.6 2.9-1.2 9.7-7.6 9.7-9 0-1.6-2-.2-4.4 2.9zM283.8 316.7c2.3.2 6.1.2 8.5 0 2.3-.2.4-.4-4.3-.4s-6.6.2-4.2.4zM192 320c0 .6 2.8 1 6.4 1 3.6 0 6.8-.5 7.1-1 .4-.6-2-1-6.4-1-4.1 0-7.1.4-7.1 1zM144.5 321c.3.5 1 1 1.6 1 .5 0 .9-.5.9-1 0-.6-.7-1-1.6-1-.8 0-1.2.4-.9 1zM138 321.5c0 .3 2.3 1.6 5 2.9 5.9 2.8 6.8 1.6 1-1.4-3.8-2-6-2.5-6-1.5zM212 322c0 .6 2.8 1 6.5 1s6.5-.4 6.5-1-2.8-1-6.5-1-6.5.4-6.5 1zM252 323c0 .6 2.4 1 5.7 1 6.8 0 6.6-.5-.4-1.4-3.4-.4-5.3-.3-5.3.4zM281.8 322.7c-2.8.7-2.1 2.3 1.1 2.3 4.3 0 9.1-1.1 9.1-2.1 0-.9-7.1-1-10.2-.2z" />
        <Path d="M130 323.9c0 .6 1 1.1 2.2 1.1 3.2 0 10.8 3 14.4 5.7 4.1 3 6.7 2.9 10.2-.5 1.5-1.5 1.8-1.9.7-1-3.1 2.6-5.8 2.2-13.9-1.7-7.9-3.9-13.6-5.4-13.6-3.6zM176 325c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM161.5 326c-.3.5-.2 1 .4 1 .5 0 1.3-.5 1.6-1 .3-.6.2-1-.4-1-.5 0-1.3.4-1.6 1zM201 329c0 .5 1.5 1 3.4 1s3.8-.5 4.1-1c.4-.6-1-1-3.4-1-2.3 0-4.1.4-4.1 1zM221 330.8c0 .5 2 .9 4.5 1 2.5 0 4.5-.4 4.5-.9s-2-.9-4.5-.9-4.5.4-4.5.8zM117.3 332.1c-1.8.5-3.3 1.4-3.3 2 0 .6.7.8 1.6.5.9-.3 3.1-.6 4.9-.6 2 0 3.5-.6 3.9-1.5.6-1.7-2-1.9-7.1-.4zM126 331.4c0 .2.7.6 1.5 1 .8.3 1.5.1 1.5-.4 0-.6-.7-1-1.5-1s-1.5.2-1.5.4zM243.4 331.7c1.1 1.1 7.6 1.3 7.6.2 0-.5-1.9-.9-4.2-.9-2.3 0-3.8.3-3.4.7zM276 332.1c0 1.2 15.9.9 16.7-.4.2-.4-3.4-.7-8.1-.7-5.5 0-8.6.4-8.6 1.1zM121 338c-1 .7.2.9 4.1.7 4.4-.1 6.2.2 7.8 1.7 1.2 1.1 2.4 1.7 2.7 1.4.3-.3-.8-1.5-2.4-2.7-3.2-2.2-9.6-2.8-12.2-1.1zM202.5 339c-.4.6.8 1 3 1s3.4-.4 3-1c-.3-.6-1.7-1-3-1s-2.7.4-3 1zM227 341c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM276 341c-4.5.7-4.5.7 1.7.8 3.4.1 6.5-.3 6.8-.8.7-1.1-1.5-1.1-8.5 0zM288 341c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM246.5 342c.8 1.3 3.5 1.3 5.5 0 1.1-.7.5-1-2.3-1-2.3 0-3.6.4-3.2 1zM142.4 345.9c4.2 2.1 18.5 3.7 22.9 2.6 4.3-1.1 3.1-2.5-1.5-1.9-4.1.5-17.4-.7-22.8-2-1.5-.4-.9.2 1.4 1.3zM124 345.8c0 .5 1.1 1.4 2.5 2 2.6 1.2 3.3.4 1.3-1.6-1.4-1.4-3.8-1.6-3.8-.4zM213 347c-1.2.8-1.2 1 .2 1.5 2 .8 4.1-.2 3.3-1.6-.8-1.1-1.6-1.1-3.5.1zM228.5 348c-.3.5.3 1 1.5 1s1.8-.5 1.5-1c-.3-.6-1-1-1.5-1s-1.2.4-1.5 1zM247 349c0 .5 2 1 4.5 1s4.5-.5 4.5-1c0-.6-2-1-4.5-1s-4.5.4-4.5 1zM276 349c0 .5 1.1 1 2.4 1 1.4 0 2.8-.5 3.1-1 .4-.6-.7-1-2.4-1s-3.1.4-3.1 1zM134 352c1.9 1.3 3 1.3 3 0 0-.6-1-1-2.2-1-1.9 0-2 .2-.8 1zM258.5 354c.3.5 2.6 1 5.1 1 2.4 0 4.4-.5 4.4-1 0-.6-2.3-1-5.1-1-3.1 0-4.8.4-4.4 1zM213 356c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM294 356c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM127 356.4c0 .3 2.3 2.8 5 5.5 3 3 5 4.4 5 3.5 0-.9-1.4-2.9-3.2-4.5-3.1-3-6.8-5.4-6.8-4.5zM134.5 357c.3.5.8 1 1.1 1 .2 0 .4-.5.4-1 0-.6-.5-1-1.1-1-.5 0-.7.4-.4 1zM278 357.9c0 1.1 4 2.2 5.2 1.5.5-.3.6-1 .3-1.5-.8-1.2-5.5-1.2-5.5 0zM227.5 359c-.4.6 1 1 3.5 1s3.9-.4 3.5-1c-.3-.6-1.9-1-3.5-1s-3.2.4-3.5 1zM250.5 359c.3.5 1.9 1 3.6 1 1.6 0 2.9-.5 2.9-1 0-.6-1.6-1-3.6-1-2.1 0-3.3.4-2.9 1zM140.6 362.2c.3 1.3 1.1 2.4 1.5 2.6 1 .4 1.2 3.6.2 4.5-.3.4-1.2.2-2-.5-2-1.6-2.9-.1-1.1 1.9.9 1 3.5 5.8 5.9 10.8 2.3 4.9 4.4 8.3 4.6 7.5.2-.9-1.2-4.9-3.1-9-2.1-4.7-3.1-7.9-2.5-8.5 1.6-1.7 1-7.4-1.1-9.5-2.6-2.6-3.3-2.5-2.4.2zM158.6 361.6c-.3.9-.2 2.3.4 3.2.7 1.4.9 1 1-1.6 0-3.5-.5-4.1-1.4-1.6zM166.6 362.9c-.4.7-.5 1.5-.2 1.8.9.9 1.9-.4 1.4-1.8-.4-1.1-.6-1.1-1.2 0zM190.7 365c-.3 1.4-.8 4.3-1.1 6.5-.2 2.2-.8 5.5-1.2 7.4-.5 2.3-.4 3.2.4 2.8 1.3-.9 3.6-13.3 3-16.7l-.4-2.5-.7 2.5zM265 364c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM150.7 364.6c-1 1.1-.9 10.4.2 10.4.5 0 1.2-.6 1.4-1.3.3-.6.6.9.6 3.5.1 2.7.5 4.8 1 4.8.9 0 2.1-7.2 2.1-13.1 0-4.7-2-5.3-2.1-.7l-.1 3.3-1.2-3.8c-.6-2.1-1.5-3.5-1.9-3.1zM231 365c0 .5 1.6 1 3.5 1s3.5-.5 3.5-1c0-.6-1.6-1-3.5-1s-3.5.4-3.5 1zM147 368.9c0 2.3.5 4.1 1 4.1.6 0 1-1.5 1-3.4s-.4-3.8-1-4.1c-.6-.4-1 1-1 3.4zM221 366c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM283 367c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM251 369c0 .5.9 1 1.9 1 1.1 0 2.3-.5 2.6-1 .4-.6-.5-1-1.9-1s-2.6.4-2.6 1zM271.8 368.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM228.5 370c.3.5 1.7 1 3.1 1 1.3 0 2.4-.5 2.4-1 0-.6-1.4-1-3.1-1-1.7 0-2.8.4-2.4 1zM242.5 374c-1.3 2.6-2.2 3-7.6 3.6-3.7.4-6.3 1.2-6.6 2-.3.9-2 1.4-4.4 1.4-4.1 0-5.6 1.9-1.6 2.1 6.6.2 19.2-.3 20-.8.5-.3.3-.9-.4-1.4-2-1.2.3-1.8 8-2.1 4.1-.2 6.6-.8 6.9-1.6.2-.7-.5-1.2-1.6-1.2-1 0-2.4-1.1-3-2.5-.9-2-1.9-2.5-4.7-2.5-2.8 0-3.7.5-5 3zM158.7 374.2c-.5 1.8.3 4.8 1.4 4.8.5 0 .9-1.4.9-3 0-3-1.5-4.1-2.3-1.8zM223 374c0 .5.9 1 2 1s2-.5 2-1c0-.6-.9-1-2-1s-2 .4-2 1zM162.8 377.7c-.3 1.6-.4 4.3-.3 6 .2 1.8.3 4.3.4 5.5 0 1.2.4 1.8.9 1.4.9-.9 1-15.6.1-15.6-.4 0-.9 1.2-1.1 2.7zM140.5 380.5c.4 2.2 1.8 7.8 3.1 12.4 1.3 4.6 2.4 8.9 2.4 9.6 0 3.3 4.3 14.3 6.6 16.9 3.7 4.1 3.9 2.6.5-3-1.8-3-4-9.1-5.6-15.4-1.4-5.8-3.2-13.2-4.1-16.5-1.9-7.2-4-10-2.9-4zM244 384c0 .5 1.3 1 2.9 1 1.7 0 3.3-.5 3.6-1 .4-.6-.8-1-2.9-1-2 0-3.6.4-3.6 1zM253 384c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM228 385c0 .5 1.6 1 3.5 1s3.5-.5 3.5-1c0-.6-1.6-1-3.5-1s-3.5.4-3.5 1zM185.8 389.3c-.9 2.3-1.9 5.5-2.3 7.2-.3 1.6-.8 3.8-1.1 4.7-.3 1-.1 1.8.4 1.8s1.3-1.7 1.6-3.8c.4-2 1.4-5.9 2.3-8.5 1.9-6 1.3-7-.9-1.4zM191 387.5c0 .8.5 1.5 1 1.5.6 0 1-.7 1-1.5s-.4-1.5-1-1.5c-.5 0-1 .7-1 1.5zM191.6 391.9c-.4.5-.2 1.2.3 1.5.5.4 1.2.2 1.5-.3.4-.5.2-1.2-.3-1.5-.5-.4-1.2-.2-1.5.3zM192 397c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM127.2 402.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8zM192 402c0 .5.4 1 .9 1 .6 0 1.3-.5 1.6-1 .3-.6-.1-1-.9-1-.9 0-1.6.4-1.6 1zM192 406c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM181.6 410.5c-.9 2.1-1.5 4.6-1.3 5.5.2.9 1-.1 2.1-2.5.9-2.1 1.5-4.6 1.3-5.5-.2-.9-1 .1-2.1 2.5zM194.3 409.3c-2.2 1-3.1 2.7-1.5 2.7 1.2 0 4.8-2.8 4.2-3.3-.3-.2-1.5 0-2.7.6zM130 412c0 .5.9 1 2.1 1 1.1 0 1.7-.5 1.4-1-.3-.6-1.3-1-2.1-1s-1.4.4-1.4 1zM133 418c0 .5.7 1 1.6 1 .8 0 1.2-.5.9-1-.3-.6-1-1-1.6-1-.5 0-.9.4-.9 1zM187 419c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM188 423.3c-2.2.9-2.3 1.1-.6 1.4 1 .3 2.3 0 2.9-.6 1.6-1.6.5-2-2.3-.8zM133 424.9c0 .6.7 1.4 1.5 1.7.8.4 1.5 1.2 1.5 2s.3 1.4.8 1.4c.4 0 2.4.4 4.4.9 3 .7 3.5.6 3.1-.6-.5-1.2-.1-1.4 1.5-.8 1.3.4 2.2.2 2.2-.4 0-.6-1.2-1.3-2.7-1.6-1.6-.3-4.1-1-5.8-1.6-5.6-2-6.5-2.1-6.5-1zM175 428c0 .5.6 1 1.4 1 .8 0 1.8-.5 2.1-1 .3-.6-.3-1-1.4-1-1.2 0-2.1.4-2.1 1zM160.4 429.2c-.3.4.9.8 2.5.8 1.7 0 3.1-.4 3.1-.8s-1.2-.8-2.6-.8c-1.4 0-2.8.4-3 .8zM166.3 431.7c-1.3.2-2.3.9-2.3 1.5 0 1.1 6.4.2 9-1.3 1.6-.9-2.4-1-6.7-.2zM148.2 435.9c.4 1.3 1.8 1.6 1.9.4 0-.4-.5-.9-1.1-1.2-.7-.2-1.1.2-.8.8zM21.2 266.1c.5 1.6 7.8 2.5 7.8 1 0-.6-1.1-1.1-2.4-1.1-1.3 0-3.2-.3-4.2-.7-1.2-.4-1.5-.2-1.2.8zM35 267c0 .5 1.8 1 4 1s4-.5 4-1c0-.6-1.8-1-4-1s-4 .4-4 1zM47 267c0 .6 2.8 1 6.5 1s6.5-.4 6.5-1-2.8-1-6.5-1-6.5.4-6.5 1zM79.7 266.6c-1.5 1.6-.5 2.4 2.8 2.4 1.9 0 3.5-.5 3.5-1 0-.6-.6-1-1.4-1-.8 0-2.1-.2-2.8-.5-.8-.3-1.7-.2-2.1.1zM97.7 266.6c-1.2 1.2.4 2.4 3.4 2.4 1.9 0 2.9-.5 2.9-1.5 0-1.5-5-2.2-6.3-.9zM67 268c0 .5 2 1 4.5 1s4.5-.5 4.5-1c0-.6-2-1-4.5-1s-4.5.4-4.5 1zM4.5 273c.3.6 5.2 1 11 1s10.7-.4 11-1c.4-.6-3.5-1-11-1s-11.4.4-11 1zM34.8 272.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5-1.4 0-1.9.2-1.2.5zM45 273c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM52.2 273.1c.5 1.7 4.8 2.5 4.8 1 0-.6-.4-1.1-.9-1.1s-1.7-.3-2.7-.7c-1.2-.4-1.5-.2-1.2.8zM91 274.2c0 .4 3.8.8 8.5.8s8.5-.4 8.5-.8-3.8-.8-8.5-.8-8.5.4-8.5.8zM71.8 275.2c.9.9 1.5.9 2.4 0 .9-.9.7-1.2-1.2-1.2s-2.1.3-1.2 1.2zM44.6 278.8c-.8 1.4 2.8 2 10.7 1.7 8.4-.2 10.1-1.5 2-1.5-3.3 0-7.4-.3-9.1-.6-1.6-.3-3.2-.2-3.6.4zM74 279c0 .6 4.3 1 11 1s11-.4 11-1-4.3-1-11-1-11 .4-11 1zM101.8 278.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6zM29.6 279.9c.5.5 2.7.6 4.9.1l4-.8-4.9-.1c-3-.1-4.6.3-4 .8zM62.2 284c.4 1.2 20.8 2.2 20.8 1 0-1.2-5.6-2-13.7-2-4.6 0-7.3.4-7.1 1zM98 284c0 .5 2.5 1 5.5 1s5.5-.5 5.5-1c0-.6-2.5-1-5.5-1s-5.5.4-5.5 1zM24 286c0 .6 3.2 1 7.5 1s7.5-.4 7.5-1-3.2-1-7.5-1-7.5.4-7.5 1zM81 288c-1.2.8-1 1 .8 1 1.3 0 2-.4 1.7-1-.7-1.2-.6-1.2-2.5 0zM88 288c0 .6 4 1 10.1 1 6.4 0 9.8-.4 9.4-1-.3-.6-4.8-1-10.1-1-5.6 0-9.4.4-9.4 1zM70.8 289.2c.9.9 1.5.9 2.4 0 .9-.9.7-1.2-1.2-1.2s-2.1.3-1.2 1.2zM13.3 289.7c-1.8.2-3.3.9-3.3 1.5s1 .8 2.3.4c1.2-.3 3-.6 4-.6.9 0 1.7-.5 1.7-1 0-.6-.3-.9-.7-.8-.5 0-2.3.3-4 .5zM72 293c0 .5 1.4 1 3 1 1.7 0 3-.5 3-1 0-.6-1.3-1-3-1-1.6 0-3 .4-3 1zM99.5 293c-7.1.3-12.8.7-12.5.8 1.3.6 24.9.7 28 .1 1.9-.4 2.7-.7 1.8-.8-.9 0-2.2-.2-3-.4-.7-.1-7.1 0-14.3.3zM107 297.1c0 .7 2.4.9 7 .7 9.6-.6 10-1.8.7-1.8-4.9 0-7.7.4-7.7 1.1zM117 300c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM22.3 319.7c-4.7 1-2 2 6.9 2.7 12.3.8 16.8.8 16.8-.3 0-.4-3.3-1.1-7.2-1.5-4-.3-8.9-.8-10.8-1-1.9-.2-4.5-.2-5.7.1zM81.3 320.3c.3.9 3.9 1.2 13.1 1.3 13.3.1 18.1-1.1 7.4-1.9-13.1-1-21-.7-20.5.6zM52 320.7c0 1 23.9 2.7 24.8 1.8 1.3-1.2-1.5-1.7-12.7-2.2-7.7-.4-12.1-.2-12.1.4zM38.6 326.9c-.4.5 2.2 1 6.1 1 3.8.1 7.5.2 8.3.3 3.3.3 7.1-.2 6.7-1-.7-1.1-20.4-1.4-21.1-.3zM71 326.7c0 .5 5.6.9 12.5 1 7.8.2 12.5-.1 12.5-.7s-4.9-1-12.5-1c-6.9 0-12.5.3-12.5.7zM103 327c-1.2.8-.9 1 1.3 1 1.5 0 2.7-.5 2.7-1 0-1.3-2-1.3-4 0zM25 332c-1.1.7.2 1 4.3 1 3.6 0 5.6-.4 5.2-1-.8-1.3-7.5-1.3-9.5 0zM55.5 332c-.4.6 3.5 1 11 1s11.4-.4 11-1c-.3-.6-5.2-1-11-1s-10.7.4-11 1zM97.5 333c.3.5 1.3 1 2.1 1s1.4-.5 1.4-1c0-.6-.9-1-2.1-1-1.1 0-1.7.4-1.4 1zM41.5 336c-1.5.6-.7.9 3 .9s4.5-.3 3-.9c-1.1-.5-2.4-.9-3-.9-.5 0-1.9.4-3 .9zM96.5 336c.3.5 1.5 1 2.6 1s1.7-.5 1.4-1c-.3-.6-1.5-1-2.6-1s-1.7.4-1.4 1zM17.8 336.7c1.8.2 4.5.2 6 0s0-.4-3.3-.4-4.5.2-2.7.4zM81.3 336.7c2.6.2 6.7.2 9 0s.2-.3-4.8-.3c-4.9 0-6.8.1-4.2.3zM26 341c-1.4.4-4.2.8-6.2.9-2.1.1-3.8.5-3.8 1.1 0 .6 2.2.7 5.8.3 3.1-.3 10.2-.7 15.7-.8 14.2-.2 16.9-.4 16.2-1.1-1-1-24.9-1.3-27.7-.4zM63.6 342.2c.6.9 12.1.9 21.4-.1 5-.6 3.2-.7-7.7-.7-7.8 0-14 .3-13.7.8zM98.3 341.7c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5zM80 350c0 .5 1.8 1 4 1s4-.5 4-1c0-.6-1.8-1-4-1s-4 .4-4 1zM93 350c0 .5 1.1 1 2.4 1 1.4 0 2.8-.5 3.1-1 .4-.6-.7-1-2.4-1s-3.1.4-3.1 1zM79 357c0 .6 3.5 1 8.5 1s8.5-.4 8.5-1-3.5-1-8.5-1-8.5.4-8.5 1zM55.6 358.6c-.5 1.4-.1 1.6 2.5 1 1.7-.3 6.5-.6 10.6-.6 4.7 0 7.2-.4 6.8-1-.3-.6-4.8-1-10-1-7.7 0-9.4.3-9.9 1.6zM77.5 361.9c-1.8.7-1.7.8.5 1.2 3.4.6 7 0 7-1.2 0-1.1-4.7-1.1-7.5 0zM71 372c0 .5 2.1 1 4.6 1 2.7 0 4.3-.4 3.9-1-.3-.6-2.4-1-4.6-1-2.1 0-3.9.4-3.9 1zM112 410.6c0 .8.5 1.2 1 .9.6-.4.8-1.1.5-1.6-.9-1.4-1.5-1.1-1.5.7zM113.5 423c-.3.5.3 1.4 1.4 2 2.6 1.3 3.5-.2 1.1-1.8-1.1-.7-2.1-.8-2.5-.2zM131.3 11.3c-.5.8 1.1 1.5 4.7 1.9 2.3.3 2.5.8 2.8 6l.3 5.8H135c-2.9 0-4 .4-3.7 1.2.5 1.6 30.7 1.9 30.7.3.1-.6-1.4-1.2-3.2-1.5-3-.5-3.3-.9-3.6-4.2-.4-4.6 1.2-7.8 3.5-7.2 2.2.5 5.1-1.2 3.9-2.3-1-1-30.6-1.1-31.3 0zm19 2.9c-.2.5-.3 3-.3 5.8 0 4.9-.1 5-3 5h-3V12.9l3.3.3c1.7.2 3.1.6 3 1zM210 52.6c-4.2 1.8-8.6 5.9-10.6 9.7-2.4 4.4-.6 5.1 3.4 1.2 3.2-3.1 4.2-3.5 8.7-3.5 6.8.1 10.5 3.1 11.2 9.1.6 5.2-2 9.3-7.4 11.6-4 1.6-3.5 3.3 1 3.2 5-.2 7.4-1.2 11.2-4.8 9-8.5 8.5-19.9-1.2-26.3-3.4-2.2-11.4-2.3-16.3-.2zm13.1 2.6c9.1 2.7 10.7 17.8 2.4 23.2-3.2 2.1-4.5 1.3-2.1-1.3 2.6-2.9 3-9 .9-13.1-2.6-5-7.4-7.2-14.2-6.6-6 .5-5.8-.5.4-2.8 4.1-1.4 6.1-1.3 12.6.6zM282.3 463.7c-4.1.8-2.5 2.3 1.7 1.7 2.9-.5 4-.3 4 .6 0 .9-1.4 1.1-5.1.8-4.4-.5-5.2-.3-5.6 1.3-.3 1.1-1.2 1.9-2 1.9s-2.3.5-3.4 1.1c-2.6 1.4-1.1 3.4 3.2 4.3 4 .8 3 2.2-2.1 3-4.3.7-5.1 1.9-2.2 3.5 1.6 1 1.6 1 0 1.1-2.4 0-6.8 2.1-6.8 3.3 0 .5.6.4 1.4-.2.8-.7 3.7-1.1 6.8-.9 5.2.3 5.3.3 5 3.2-.5 4.2.8 13.6 1.9 13.6.5 0 .9-3.8.9-8.4v-8.4l8-.7c9.8-.9 10.8-2.8 2.3-4.3-3.3-.5-4.6-1-3-1.1 1.7 0 2.6-.5 2.2-1.1-.4-.7-2.4-.8-5.1-.4-2.7.4-4.4.2-4.4-.4 0-1.5 2.6-2.2 8.1-2.2 7.5 0 5.8-2-1.8-2.2-5.7-.1-6-.2-2-.5 5.6-.5 5.4-2.3-.4-2.3-2.1 0-3.9-.4-3.9-1 0-.5 1.3-.7 3-.4 3 .7 9-1.2 9-2.7 0-2.2-4.5-3.2-9.7-2.2zm-6.1 9.5c-.9.9-1.5.9-2.4 0-.9-.9-.7-1.2 1.2-1.2s2.1.3 1.2 1.2zm.1 7.5c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm14.5 2c-1 .2-2.6.2-3.5 0-1-.3-.2-.5 1.7-.5s2.7.2 1.8.5z" />
        <Path d="M283 488c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1z" />
    </Svg>
);

export default SvgSword2;
