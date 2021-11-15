import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCoin2 = props => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={400}
        height={694.667}
        viewBox="0 0 300 521"
        {...props}>
        <Path d="M.4 1.3C-.1 2.7.4 132 1.6 309c.9 118.7.9 120.6.6 169-.2 19-.2 36.1-.2 38.2v3.6l36.3.3c19.9.1 38.5.3 41.2.3 11.5.1 22.8-.5 22.1-1.2-.4-.4-6.9-.7-14.4-.7-7.6-.1-29.3-.2-48.4-.3L4.2 518l.4-37.3c.2-20.4.4-37.8.4-38.5 0-.8 1.7-1.1 5.8-1l5.7.2-5.2.3c-2.9.2-5.3.8-5.3 1.4 0 .5 6.5.9 15.8.9 8.6 0 18.9.5 22.7 1.2 7.9 1.3 56 1.2 68.8-.1 4.5-.4 13.3-.6 19.5-.3 10 .4 11.4.7 12.3 2.5.8 1.4.8 3.1-.1 6.1-2.3 7.7-4.5 11.3-10 15.7-5.2 4.3-12 13.7-12 16.7 0 1.7 4.5 1.2 14.5-1.7 12.7-3.7 14-4.3 17.5-8.8 1.9-2.6 4.4-4.6 5.9-4.9 1.4-.3 3.6-1.4 4.9-2.4 2.2-1.8 2.2-2 .8-8.7-.8-3.7-1.7-8.5-2-10.6l-.5-3.7h16.2l5.4 5.5c5.9 6 9 7.3 19.3 7.6 8.7.2 9 .2 9-1.9 0-2.4-5.7-9.2-7.7-9.2-3.6 0 .1-1.5 4-1.6 5.6-.1 57.8-.5 73.9-.4H297l-.6 35.7c-.3 19.6-.7 35.9-.9 36.2-.2.3-2 .5-4.2.5-8.3-.3-16.2-.3-51.3.1-20.1.2-47.3.3-60.5.3-39.1-.2-72.7.3-74.9 1.2-1.2.4 42.3.7 96.6.6l98.8-.1V0h-23.2c-12.7 0-22.9.2-22.6.5.3.3 9.9.6 21.4.6h20.9v167.2c0 92-.2 186.9-.3 210.9L296 423h-4.9c-7.4 0-10.5-1.6-16.8-8.8-3.2-3.6-7.1-7.9-8.8-9.5-4.2-4-14.3-8.7-18.6-8.7-2.4 0-3.9-.5-4.3-1.6-1-2.5-.7-7.2.5-7.9.6-.4.9-2.1.8-3.9-.6-5.9.9-9.3 4.3-10 1.7-.3 2.8-.9 2.4-1.3-1.1-1.1-7.6-1.3-7.6-.3 0 2-.2 2.5-1.2 3.8-.9 1-1.6.8-3.7-1.2-2.5-2.4-10.8-5.3-11.9-4.2-.5.6-3.1-2.4-3.2-3.7 0-.5.8-.6 1.9-.2 1.2.4 2.9-.5 5.1-2.5 2.8-2.6 2.9-3 1.2-3-1.1 0-2.5.7-3.2 1.5-.7.9-1.8 1.4-2.4 1.2-1.9-.8-5.6 1.2-5.6 2.9 0 1 .8 2.6 1.7 3.6 1.5 1.6 1.5 2.1.3 2.8-.9.5-1.9.5-2.7-.1-.7-.6-1.8-.7-2.5-.3-1 .6-1 .5-.2-.7 2.8-3.5-2.3-19-10.1-30.9-1.6-2.5-1.2-6.4.8-8.1 2.6-2.1 1.5-5.9-1.8-5.9-1.4 0-3.1-1.1-4.2-2.6-1.4-1.9-2.6-2.5-4.4-2.2l-2.4.4 2.6 1.1c1.5.7 2.9 1.9 3.3 2.8.3.9 1.9 2.1 3.6 2.6 1.6.6 3 1.5 3 1.9 0 1.6-3.2 1.9-5.3.5-2.4-1.5-5.9-1.4-6.4.2-.2.6.1 1.4.6 1.8 1.4.8 1.4 2.5.1 2.5-.5 0-1.6-1.4-2.5-3-.9-1.7-2.1-3-2.8-3-.7 0-3-.9-5.2-2-2.9-1.5-4.2-1.7-5.2-.9-2.2 1.9-1.5 5.7 1.7 9.1 1.6 1.7 3 3.4 3 3.8 0 1.2-2.6 1.9-4.7 1.4-2.9-.8-4.6 1.8-3.3 5.1 1.4 3.6.9 3.9-3.7 2.5-2.1-.7-4.4-1.4-5-1.6-.7-.2-1.3-1.7-1.3-3.3 0-3.3-2.7-5.5-5.3-4.5-1.2.4-1.5 2.3-1.5 7.7 0 10.7-.2 12.6-1.3 13.3-.5.3-1.6.1-2.3-.6-1-.8-1.5-.8-1.8 0-.2.7-2-.4-4.1-2.4-2.6-2.5-3.7-4.3-3.7-6.4 0-1.6-.7-3.5-1.5-4.2-.8-.7-1.5-2.1-1.5-3.2 0-1.4-.6-1.9-2.2-1.6-1.8.3-2.2 1-2.3 5.3-.2 7.1-1.8 9.5-6 9.5-3 0-3.7-.5-5-3.6-.9-2.2-1.2-5-.9-7.7.5-3.2.2-4.6-.9-5.6-2.6-2.1-5.2-.9-5.3 2.4-.2 6.1-.4 6.5-5.5 9-5.9 2.8-7.3 2.5-6.5-1.6.3-1.5-.1-4.4-1-6.4-1-2.6-1.2-4.1-.4-5.5 1.6-3 1.2-4.7-1.2-5.3-2.2-.6-6.2 1.9-5.3 3.3.2.4-.2 1.5-.9 2.6-.9 1.2-1.1 2.6-.5 4.1 1 2.7-.3 3.7-3.4 2.9-2.8-.8-6-7.2-4.7-9.7.5-.9 1.7-6.1 2.5-11.6 3.5-21.7 11.9-39.4 16.8-35.5.7.5 3 1.5 5.2 2.1 2.2.7 4.7 1.5 5.5 1.8 1.5.6 2.5.9 3.6 1.2.3 0-.4 1.4-1.5 2.9-2.6 3.7-3.6 7.9-2.2 9.6 1.2 1.4.5 7.3-1 8.2-1.7 1-.9 3.4 1 3.4 2.7 0 5.8-4.3 6.6-8.9 1.1-6.7 7.3-11.1 14.1-10.1 3.5.5 4.7.3 6-1.1 1.1-1.2 2.9-1.8 5.3-1.7 2 .1 4.9-.1 6.6-.5 2.5-.5 4 .1 9 3.6 6.4 4.4 17.7 15.2 21.2 20.2 3.5 4.9 3.8 2 .4-3.1-1.8-2.5-3-4.8-2.9-5 .2-.1 4.6 1.6 9.8 4 5.2 2.4 13.9 5.3 19.3 6.5 8.4 2 10.9 2.1 17 1.3 17.5-2.4 30.9-12.6 37.2-28.6 2.2-5.6 3.1-19.7 1.5-24.9-5.6-18.7-10.5-25.9-21.4-31.5-17.6-9-24.5-10.6-46.7-10.7h-17.6l-4.7-9.5c-2.5-5.3-4.6-10.4-4.6-11.5-.1-6.3-13-13.5-24.2-13.5h-5.6l.2-5.3c.2-4.8.5-5.2 2.8-5.5 3.3-.4 5-2.4 7.2-8.5 1-2.6 2.3-4.7 2.9-4.7 2.8-.1 4.7-4.8 4.5-11.2-.2-6.7 1.5-11.5 12.9-35.7 5.5-11.8 7.7-24.4 4.9-28.6-3.8-5.8-10.6-7.5-18.3-4.7-4 1.4-5.7 3.1-11.7 11.1-8.3 10.9-12.6 17-12.6 17.6 0 .4-4.3 7.2-5.8 9-.4.5-1.8 2.5-3 4.2-2.8 3.9-10.3 9.3-13 9.3-2.3 0-6.2 4-6.2 6.3 0 1 .6 2.6 1.2 3.7 1.1 1.6.9 2.2-.6 3.3-1.5 1.1-1.8 2.2-1.3 5 .6 4-.6 5.6-2.8 3.7-.8-.6-1.6-.7-1.9-.2-.3.6.1 1.5.8 2.2 1.6 1.2 1.8 5 .3 5-.5 0-.6-.7-.3-1.6.4-1.1.1-1.4-1.2-1.2-1.7.4-1.9 3.7-.3 4.8.4.3 1 1.3 1.4 2.2.6 1.6 2.6 2.3 5.1 1.9 1.2-.2 3.6 2 3.6 3.4 0 .6-1.1 1.7-2.4 2.3-1.7.8-2.7 2.2-3.2 4.7-.6 3.5-5.2 8.5-7.8 8.5-.8 0-3.7-3.8-6.5-8.5-7.4-12.1-18.3-23.2-30.7-31.5-8.9-5.8-11.7-7.1-19.3-8.9-4.9-1.2-10.6-2.1-12.7-2.1-5.4.1-15.7 2.4-18.1 4.1-3.7 2.6-7.8 6.4-10.5 9.7-1.6 1.9-2.8 3-2.8 2.5-.1-.4 0-14.5.1-31.3.2-16.8.3-51.5.3-77.2.1-25.6.4-47 .9-47.4.4-.4 55.6-.8 122.6-.8 67.1-.1 122.3-.4 122.7-.9.4-.4-55.4-.7-124-.7C22.9 0 .8.2.4 1.3zm178.9 94.5c-.2 1.7.2 3.4.7 3.7.6.3 1 2.4 1 4.6 0 3.8 0 3.9-1.9 2-1.1-1.1-2.1-3.8-2.4-6.7-.2-2.7-.8-6-1.3-7.4-.7-2.4-.7-2.5 1.7-.8 1.8 1.2 2.3 2.4 2.2 4.6zm-60.5 46.4c-.3.7-1.3 1.5-2.4 1.7-1.6.3-1.7.1-.5-1.3 1.6-1.9 3.4-2.1 2.9-.4zm-68.3 5.3c7.4 2.4 11.2 4.4 19 10.1 9.8 7.1 16.5 14.3 24.2 25.7 6.1 9.1 6.5 10 5 11.5s-1.8 1.5-2.9 0c-.7-.8-3.5-4.4-6.3-7.9-2.7-3.5-5.2-6.6-5.5-6.9-.3-.3-2.7-3.1-5.3-6.2-5-5.9-19.7-17.8-22.1-17.8-.7 0-2.5-1.1-4-2.5-6-5.5-16.4-8.1-25-6.1-11.4 2.7-20.1 11.1-22.6 22-1.2 5.1-1.2 6.7.2 13 2.6 11.5 4.1 14.4 12.4 23.6 13.7 15.1 30 22.8 57.5 26.9 3.5.6 7.5 1.2 8.9 1.5 1.4.2 6.6.9 11.5 1.5 16.9 2 19 2.2 20.1 2.3.6.1 1.8 1.5 2.7 3.1l1.7 2.9-11.2-.6c-14.5-.8-20.1-1.7-31.8-4.8-5.2-1.5-12.7-3.1-16.6-3.7-8-1.2-10.5-2.1-25.9-9.6-16-7.7-23.5-15.2-30.7-30.6-2.1-4.4-2.6-19.7-.9-25.4 3.1-10 8.7-18.2 14.3-21.1 6.7-3.4 24.1-3.9 33.3-.9zm-8.4 3.1c4.2 1.2 6.9 2.8 10.4 6.2 6.4 6.3 7.8 9.4 8.3 18.3.4 6.6.1 8.1-2.1 12.5-4.9 9.6-11.3 13.9-22.2 14.8-7.5.6-8.4.5-14.1-2.3C11.7 195 6 184.6 7.3 172.5c.7-6.9 3.6-12.4 8.9-16.9 7.2-6.2 15.7-7.9 25.9-5zm93.4 2.4c-.5 1.6-1 1.9-1.8 1.1-.7-.7-.6-1.5.3-2.6 1.7-2 2.4-1.3 1.5 1.5zm7 1.3c-.5 1.8-.2 2.3 1.4 2.4 1.1.1 2.5-.5 3.2-1.3 1.3-1.6 3.9-.2 3.9 2.2 0 .7.9 1.8 2 2.4 2.2 1.2 2.4 1.8 1 4-.9 1.3-1.1 1.3-1.9 0-1.4-2.1-4.8 1.3-6.1 6.2-.6 2.2-1.7 3.8-2.5 3.8s-1.5.4-1.5.9-.9 1.1-2 1.4c-2.1.5-2.8 2.7-.9 2.7.8 0 .8.5-.1 1.5-1 1.2-.9 1.6.4 2.1 2.2.8 4.9-1.5 4.3-3.8-.3-1-.1-1.6.3-1.3.5.3 1.7-.6 2.6-2 .9-1.4 2.3-2.5 3.1-2.5.8 0 1.7-.9 2-2 .3-1.1.9-1.7 1.4-1.4.5.3.1 1.7-.8 3.2-3 4.5-4.3 6.6-5.4 8.9-.6 1.1-2.6 2.9-4.4 3.9-3.2 1.7-3.4 1.7-6.2-.1-1.5-1-3.2-2.4-3.6-3.2-.4-.7-1.5-1.3-2.3-1.3-2 0 1.9 5.3 5.2 7.1 3.2 1.6 3 2.6-.9 6.4l-3.3 3.2-1.8-4.3c-1.6-3.9-2.1-4.4-6.1-5-4.6-.6-9.6-3.3-6.4-3.4 1.3 0 1.8-1.5 2.3-7.2.3-3.9 1.1-7.7 1.6-8.3.5-.6.7-2.1.3-3.3-.6-2.3 1.1-3.1 2.1-1 .3.9.8.8 1.6-.5.6-.9 1.8-1.7 2.6-1.7s1.7-.7 2-1.5c.4-.8 1.3-1.5 2.2-1.5 2.2 0 5.2-3 5.2-5.1 0-1.6.8-2 5.3-2.8.4 0 .5.9.2 2.2zm19.5 2.6c0 .6-.4 1.3-1 1.6-.5.3-1-.1-1-.9 0-.9.5-1.6 1-1.6.6 0 1 .4 1 .9zm-96.1 7.6c3.2 2.4 8 7.2 10.7 10.6 2.7 3.4 6.3 7.8 7.9 9.8 4.3 5.1 7.5 9.9 7.5 11 0 .5-1.7 2.4-3.8 4.3-5.6 4.8-8.4 9.5-8.8 14.2-.8 10-.7 9.6-2.9 9-2.4-.8-9.3-6.6-18.9-15.9l-6.8-6.7 3.5-2.9c2-1.6 4.8-5.5 6.4-8.7 3.7-7.6 4-18.4.5-25-1.2-2.3-2-4.2-1.6-4.2.3 0 3.2 2 6.3 4.5zM163 162c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm-50.3 4.2c-.3.8-.6.5-.6-.6-.1-1.1.2-1.7.5-1.3.3.3.4 1.2.1 1.9zm4.3 14.7c0 1.2-2.9 3.5-3.6 2.8-.7-.6 1.7-3.6 2.9-3.7.4 0 .7.4.7.9zm-.1 7.9c2.2 1 3.9 2.1 3.6 2.4-.3.3.1 1.1 1 1.8.8.7 1.5 2.5 1.5 4.1 0 1.6.5 2.9 1.1 2.9.8 0 .8.5-.1 1.5-1.5 1.8-.5 4.9 1.4 4.2 2-.8 3.6 1.3 3.6 4.9 0 2 .6 3.4 1.6 3.8.8.3 1.4 1.4 1.3 2.3-.4 4.5.2 6.5 2.1 7 2.3.6 2.4.7.8 3.2-1.4 2.3-.4 5.1 2.2 5.8 3.5.9 1.1 2.2-4.1 2.1-4.3 0-5.2-.4-6.7-2.6-.9-1.5-3.3-5-5.4-7.9-2-2.8-5.1-7.5-6.7-10.5-6.4-11.4-10.1-18.2-9.8-18.3 3.5-2.2 7.7-6.1 7.7-7.1 0-1.8 0-1.8 4.9.4zm46.6 7.2c1.7.8 5.1 3 7.8 4.9 4.1 3.1 4.7 3.9 4.6 7.1-.1 1.9-.4 4.6-.8 6l-.7 2.5-.7-2.8c-.4-1.5-1.4-2.7-2.3-2.7-1.2 0-1.4.5-.8 1.7.4 1 .9 5 1.2 8.9l.4 7.2-4.8 1.1c-9.2 2-21.9 4.1-23.8 3.7-2.7-.4-3.1-2.2-.6-2.9 2.8-.7 3.6-3.5 1.6-5.5-2.2-2.2-4.9-.6-5.6 3.3-.5 2.6-.6 2.7-1.9 1.1-1.2-1.4-1.1-1.9.5-3.7 1.8-2 1.8-2.1-.1-3.5-1-.8-2.3-1.4-2.8-1.4s-.6-1.5-.3-3.3c.5-2.5.2-3.6-1.4-5-2.9-2.4-1.5-4.1 1.6-2 2.4 1.5 2.6 1.5 4.5-.3 1.8-1.8 1.8-2.1.3-4.2-.9-1.3-2.2-2.1-3-1.8-1 .4-1.4-.2-1.3-2.2 0-1.5.3-2.1.6-1.5.2.7 1.6 1.3 3 1.3 2.2 0 2.5-.3 2.1-3-.3-1.7-.1-3 .3-3s.9 1 1.1 2.2c.5 3.7 4.2 3 4.6-.7l.3-3 6.7.1c3.7 0 8.1.7 9.7 1.4zm-148.6 3.4c-.3.3-1.1-.5-1.8-1.7-1.3-2.1-1.2-2.1.5-.5 1 1 1.6 2 1.3 2.2zm89.1.8c0 .5 1.1 2.5 2.3 4.6 1.3 2 3.9 6.4 5.7 9.7 6.6 11.8 26 39.1 33.1 46.5 1.9 1.9 4.6 5.3 6.1 7.5 5.1 7.8 16.2 18.2 24.8 23.2 2.5 1.5 6.7 4.4 9.3 6.5 2.6 2 6.3 4.2 8.2 4.7 1.9.5 4.9 2 6.7 3.3 6.6 4.9 13.6 7 24.8 7.5 9.9.5 11 .4 17.5-2.3 5.5-2.3 8.3-4.4 13.7-9.9 3.7-3.9 6.6-7.5 6.3-8.2-.2-.7.2-1.9 1-2.6 2.7-2.8 4.7-9.3 4.8-15.8.1-5.5-.4-7.7-3.1-13.1-3-6.1-7.9-11.3-12.7-13.3-2.6-1.1-9.8-3.8-15.5-6-2.5-.9-5.8-2.3-7.5-3-3.3-1.5-5.9-1.9-21.5-3.6-10-1-11.6-.9-35 2.6-27.2 4.2-33 4.8-37.7 4-4.5-.8-4.2-2.5.5-2.6 7.3-.1 19.7-2.5 19.5-3.7-.2-.6.7-1.4 2-1.6 1.2-.2 5.8-1.1 10.2-1.9 4.4-.9 10.7-2.1 14-2.7 10-1.9 25.2-2.2 34.5-.6 11.8 1.9 21.9 4.3 25.5 6 1.6.8 4.7 2.1 6.7 3 5.5 2.2 12.9 10.1 16.9 18.1 4 7.8 4.5 9.4 5.8 18.9 1.5 10.5-2.2 23.1-9.3 31.6-1.7 1.9-3.5 3.5-4.1 3.5-.6 0-2.4 1-4 2.2-10.9 7.7-31.1 9.5-45.6 4-10.3-3.9-31.9-16-31.9-17.9 0-.5-.5-.8-1.1-.8-3.3 0-26.8-22.9-33.3-32.4-1.4-2.1-4.4-6.2-6.6-9-11.1-14-15-19.2-15-20 0-.5-.6-1.7-1.4-2.5-.8-.9-2.6-3.9-4.1-6.6-1.6-2.8-5.7-10-9.1-16.1-6.2-10.7-7.2-13.3-5.7-14.7.7-.8 4.3 2.1 4.3 3.5zm-7.2 2.3c1.9 2.5 7.2 11.3 7.2 11.9 0 .4 1.1 2.2 2.5 4 1.4 1.8 2.5 3.8 2.5 4.3 0 .6.7 1.6 1.5 2.3.8.7 1.5 1.9 1.5 2.7 0 .8.9 2.8 2 4.3 2.3 3.2 1.7 4.1-2.2 3.3-2.1-.4-2.9-1.4-3.9-4.8-2.9-9.6-13-20.4-20.6-22-1.8-.4-3.3-1-3.3-1.3 0-.3 1.9-2.6 4.3-5.2 4.6-5.1 4.1-5.2 8.5.5zm-88.9 3.4c5 7.7 14.4 15.3 26.6 21.5 6.1 3 12.3 6 13.9 6.6l2.8 1-.6 7.8c-.8 9.2.3 13.6 4.3 17.1 1.6 1.4 3.8 5.1 5 8.2 3 7.5 7.3 11.6 13.6 12.8 4.9.9 12.8.8 19.2-.4 3.3-.6 9.3-6.4 9.3-9 0-2.8 1.5-1.4 3.8 3.4 2.7 5.8 2.7 7.1.3 10.2-6.1 7.9-12 24.1-13.6 37.4-.8 7.2-2.6 13.5-3.8 13.5-.5 0-.3.8.6 1.8 1 1 1.4 2.2 1.1 2.5-.4.4-.2 1.2.4 2 .7.8.7 1.8.2 2.7-1.7 2.7-1.1 3 5.4 2.6l6.4-.4.6 3.6c.7 4.8 6.2 16.2 11.9 24.9 5.9 8.9 11.7 21.3 12.3 26 .2 2.1.9 5.3 1.5 7 .8 2.6.7 3.6-.5 4.8-.8.8-2.1 1.5-2.8 1.5-1 0-.9.3.2 1.1 1.2.8 1 .9-.7.4-1.6-.4-3.8.4-7.8 3-3 2-5.2 4.1-4.9 4.6 1.2 2-9 4.3-18.1 4.1-4.7-.1-11.5-2.1-11.5-3.4 0-.5 1-1.3 2.3-1.7 1.9-.8 2-1 .5-1.6-.9-.4-2.1-.4-2.7-.1-2.1 1.3-2-1.5.4-7.8 3-8 1.7-8.9-1.5-1.1-1.3 3.1-2.5 5.3-2.8 5-.3-.2.3-2.3 1.3-4.6 1.7-3.8 1.8-4.2.3-5.3-1.5-1.1-1.7-3.8-.4-8.8.3-1.2-.4-.2-1.6 2.5-2.5 5-4.2 6.3-3.2 2.2.3-1.4.3-2.5 0-2.5-.4 0-1.1 1.1-1.6 2.5s-1.7 2.5-2.8 2.5c-2.1 0-4.8 4.2-3.8 5.9.9 1.5-.1 1.4-6.5-.5-3.7-1.1-7.8-1.5-13.1-1.2-6.5.4-8.4.9-11.9 3.4-4.8 3.3-11.9 7.8-16.7 10.5-1.8 1.1-5.7 2.2-8.7 2.5l-5.5.7v-25.4c0-14-.3-64.9-.6-113.2-.3-48.2-.4-87.7-.2-87.7.3 0 1.9 2.2 3.7 4.9zm12.1-2.5c0 .7 1.5 2.1 3.4 3.1 3.3 1.8 3.5 1.8 7.3-.2 5.6-2.9 10.1-3.7 11.9-2.2 2 1.6 5.4 2.2 5.4.9 0-.6-.5-1-1.2-1-.9 0-.9-.3 0-1.2.8-.8 1.5-.8 2.7.2 1.7 1.4 1.7 6.5.1 10.2-.6 1.3-.2 2 1.4 2.6 2.1.8 2.1.8-.4 2-2.3 1-2.6.9-2.6-.6 0-1-1.5-3.3-3.4-5.1-2.8-2.8-4.1-3.2-8.9-3.4-3.2-.1-6.1.3-6.8 1-.9.9.3 1 4.7.6 5.6-.5 6.1-.3 8.8 2.6 1.7 1.7 2.6 3.1 2 3.1-.5 0 .1.8 1.4 1.8 1.3 1 2.4 2.5 2.5 3.2.2.8.6 2.1 1.1 2.9 1 1.5-1.3 1-8.1-1.9-8.7-3.8-23.3-16.1-23.3-19.7 0-.8.5-1.1 1-.8.6.3 1 1.2 1 1.9zm111.7 1.8c-.3.7-.5.2-.5-1.2s.2-1.9.5-1.3c.2.7.2 1.9 0 2.5zm-104.1-.1c.9 1.5-2.3 1-3.5-.5-1-1.2-.8-1.3.9-.9 1.1.3 2.3.9 2.6 1.4zM59 215.4c0 .2-.7.7-1.6 1-.8.3-1.2.2-.9-.4.6-1 2.5-1.4 2.5-.6zm2.1.9c-.6.8-.7 1.8-.3 2.2.4.5.1.5-.6.1-1-.6-1-1.1-.1-2.2.6-.8 1.4-1.4 1.6-1.4.3 0 0 .6-.6 1.3zm32.9 1c0 .6 1.6 2.7 3.5 4.4 1.9 1.8 3.5 3.6 3.5 4 0 .5.9 1.4 2.1 2.1 1.2.7 1.8 1.6 1.5 1.9-.3.3-.1 1.3.4 2.2.7 1.5.3 1.8-3.6 2-2.4.1-7-.3-10.2-.9-4.9-1-6.1-1.7-8-4.6-2.5-3.8-2.1-6.4.6-3.7.9.9 1.7 2.1 1.7 2.7 0 .6 1.4 1.2 3.2 1.4 1.7.2 3.7 1 4.3 1.8 1.5 1.7 4 1.8 4.1.1.4-4.4-.5-7.4-2.7-9-2.4-1.8-3.3-5.7-1.4-5.7.6 0 1 .6 1 1.3zm-25.5 3.8c1 1.5-.1 2.3-2 1.5-.9-.3-1.3-1-1-1.6.8-1.3 2.2-1.3 3 .1zm109.5 1.4c0 .8-.4 1.5-1 1.5-.5 0-1-.7-1-1.5s.5-1.5 1-1.5c.6 0 1 .7 1 1.5zm4 .5c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm-127.5 2c.3.5.2 1-.4 1-.5 0-1.3-.5-1.6-1-.3-.6-.2-1 .4-1 .5 0 1.3.4 1.6 1zm17.3 1.2c-.2 1.3.2 2.3.9 2.3.6 0 1.5.4 2 .9s-.2.6-1.7.3c-1.4-.4-3.1-.7-3.7-.7-1.6 0-1.7-2.2-.1-3.8 1.9-1.9 3-1.4 2.6 1zM55 238c0 1.1-.4 2-1 2-.5 0-1-.9-1-2s.5-2 1-2c.6 0 1 .9 1 2zm11.6.5 9.9 1.8c1.1.2 2.7.6 3.5.9 4.1 1.5 10.2 2.7 16.8 3.3 3.9.4 7.2 1.1 7.2 1.6s-.9.9-2 .9-2.5.9-3.2 2c-1.6 2.5-2.5 2.5-3.1.2-.3-1.5-.5-1.5-1.1.3-.5 1.1-1.4 3.3-2.1 5-.8 1.6-1.2 3.1-1 3.4.7.7 3.5-2.1 3-2.9-.3-.4.2-1 1-1.4 1.1-.4 1.5.2 1.5 2.4 0 1.6.5 3.2 1 3.5.6.3 1 1.5 1 2.6s-.4 1.8-.9 1.5c-1.4-.9-3.3 2.1-3.6 5.4-.3 4-.6 4.2-4.3 2.9-2.3-.8-3.2-1.7-3.2-3.3 0-1.9-.5-2.2-3.1-2.1-2.4.1-3.3-.4-4.1-2.1-.6-1.3-1.5-2.1-2.1-1.7-.5.3-.3.9.4 1.4 1 .6.8.9-.8.9-1.3 0-2.3-.5-2.3-1.1 0-.5-.5-.7-1.2-.3-.6.4-.8.3-.5-.4.4-.5.4-1.8.1-2.7-.6-1.4-.8-1.3-2.1.5-2.4 3.5-8.2 1.6-6.8-2.2.4-.9-.1-1.8-.9-2.1-.9-.4-1.6-1.4-1.6-2.3 0-1-.5-1.4-1.5-1.1-.8.4-1.7.2-2-.3-.4-.6.3-1 1.4-1 2.6 0 2.6-.8.1-3-1.3-1.1-2-2.8-1.9-4.6.2-1.6-.1-3.9-.5-5.2-.9-2.6-1-2.6 9-.7zm153.9 1c10.2 2.1 17 4.6 15.4 5.6-.8.5-2.1.9-2.9.9-3 0-11.6 4.8-15.3 8.5-2.2 2.1-4.7 5.8-5.8 8.2-1.8 4.2-1.9 4.3-3.7 2.6-1-1-1.7-2.1-1.5-2.5.2-.4-.9-2-2.4-3.5-2.9-2.9-5.6-8-7.8-14.8-.7-2.2-1.6-4.8-2-5.9-.8-1.8-.4-1.8 9.1-1.2 5.4.4 13.1 1.4 16.9 2.1zm-27.9.7c.5 1.3.8 2.6.9 3 0 .3.3 1 .8 1.4.4.4.7 1.5.7 2.5s.6 3.3 1.4 5.1c.8 1.8 1.7 4.6 2.1 6.1.4 2 1 2.7 2 2.3.9-.3 1.5.1 1.5 1 0 .8.7 1.7 1.5 2 .8.4 1.5 1.6 1.5 2.8 0 2.8 1.5 5 2.9 4.2.7-.5 1.1.7 1.1 3.8 0 2.4.3 5.1.6 6 .4 1.1-.2 1.7-2.3 2.1-5.1 1.1-7.3 2.4-8.3 5-1.2 3.2-3.8 3.2-5 .1-.5-1.3-1.3-2.7-1.8-3-.5-.3-.9-2.4-1-4.7-.2-3.5 0-3.9 1.2-3 1 .9 1.6.9 2.1.1.4-.6.4-1.4.1-1.7-.3-.4-.6 0-.6.8-.1.9-.4.8-1.2-.5-.9-1.6-.6-2.4 2.3-4.7 1.9-1.6 2.9-2.9 2.3-2.9-.6 0-1.7.7-2.4 1.5-.7.9-2 1.5-2.9 1.3-2-.3-4.1.9-4.1 2.5 0 .6.7.2 1.5-.9 1.3-1.8 1.4-1.7.6 1.1-.5 1.6-1.2 3.9-1.7 4.9-.6 1.5-.4 1.7.7 1.1 1.2-.8 1.2-.6 0 .8-.7.9-1.9 1.7-2.5 1.6-.7 0-.7-.2.1-.5 1.2-.5.6-3.4-.9-4.5-.5-.3-1.1-2.6-1.4-5-.3-2.4-.9-4.8-1.5-5.4-.5-.5-.9-1.8-.9-2.9 0-1.8-.2-1.9-1.5-.5-1.3 1.3-2.1 6.4-2.4 15.1-.1 1.6-.5 2.8-1 2.8-.4 0-.8-1.7-.7-3.8.1-2-.2-5.3-.6-7.3-.5-2.5-.3-4.6.7-6.6 1.1-2.1 1.2-4.2.6-8-.4-2.9-.4-5.9.1-7 .8-1.6.8-1.6-.6.1-2 2.5-3.1 1.5-1.6-1.4.6-1.2 1.8-1.9 2.5-1.6.7.2 1.9-.3 2.7-1.1 1.1-1.4 1.1-1.6-.4-1-1.5.5-4.7-1.8-3.7-2.7.6-.5 10.1-2.4 13.1-2.5 1.9-.1 2.9.5 3.4 2.1zm-22.3 2.5c-2.6 1.8-3.1 3.8-.7 2.9 1.5-.6 1.5-.4 0 1.8-2 3.1-2 3.7-.1 3 .8-.4 1.5-.2 1.5.4 0 .5-.9 1.2-2 1.5-1.1.3-2 1-2 1.6 0 .6.4 1 .9.8.5-.1.9.1 1 .5.3 2.2 0 2.9-.9 2.3-.5-.3-.7 0-.4.8.3.8-.6 1.9-2.3 2.7l-2.8 1.4 3 .5 3 .4-3 .6c-3.2.7-3.5 2.8-.2 2.3 1.2-.2 1.7.1 1.3.7-.4.6-2 1.1-3.7 1.1-1.6 0-2.9.4-2.9 1 0 .5 1.3 1 2.9 1 2.5 0 2.8.3 2.3 2.5-.2 1.4-.9 2.5-1.4 2.5-.6 0-.8.7-.4 1.5 1 2.7-1.2 1.6-5.3-2.7-3-3.2-3.7-4.6-3.1-5.9 1.1-2-.6-3.9-3.5-3.9-1.3 0-3.3-1.6-5.3-4.2-2.9-3.8-3.1-4.3-1.6-5.9.9-1 1.3-2.3.9-2.8-.3-.7.2-1.1 1.5-1.1 1.5 0 2.2-.8 2.6-2.9.6-2.7 1-2.9 9.3-4.3 4.7-.8 9.7-1.6 11.1-1.6l2.5-.1-2.2 1.6zm-31.6 4.3c.1 1.1 0 2-.2 2s-.9-.9-1.5-2c-.8-1.5-.8-2 .3-2 .7 0 1.3.9 1.4 2zm4.3 0c0 1.1-.4 2-1 2-.5 0-1-.9-1-2s.5-2 1-2c.6 0 1 .9 1 2zm4-.4c0 .8-.4 1.2-1 .9-.5-.3-1-1-1-1.6 0-.5.5-.9 1-.9.6 0 1 .7 1 1.6zm-21.8 4.1c4.2 5.5 10.4 13.2 16.5 20.7 2.7 3.2 4.2 6.1 4.3 7.9 0 2.3.7 3.1 3 4 3.7 1.4 4.1 3.9.5 3.4-1.3-.1-2.7-.6-3.1-1-1.1-1.1-7.2-.8-7.9.3-.5.8-1.1.8-1.9.1-.7-.6-2.1-1.2-3.2-1.4-1-.2-2.8-.7-3.9-1.1-2.9-1.1-6.4-2.2-11.5-3.6-2.5-.7-5.1-1.4-5.9-1.6-1.1-.4-1-.9.5-2.5 1.8-2 1.7-2.1-1.1-4.5-1.7-1.3-2.2-2.1-1.2-1.8 2.4.8 2.1-.4-.5-2.7l-2.3-2 2.5.6c2.2.5 2.3.4.9-.7-2.1-1.7-3.3-8.7-2.4-14.4l.6-4.4h12.4l3.7 4.7zm122-1.7c2 .6 5.6 2.7 8 4.6 17.6 14.6 12.1 40-10.1 46.9-2.3.7-2.3.6-1.7-3 .7-3.4.6-3.6-1.3-3-1.5.5-2.1.2-2.1-.9 0-.9-.6-1.6-1.2-1.6-1.8.1-4.8 2.5-4.8 3.8 0 .7-1.1.9-3 .5-1.9-.3-3-.1-3 .6 0 2.1-2.6 1.1-6.9-2.5-15.8-13.6-10.2-39.3 9.9-45.5 3.7-1.1 12-1 16.2.1zm-104.4 3.8c.6 1.8-1.5 1.4-2.2-.4-.4-1-.1-1.4.6-1.2.6.2 1.4 1 1.6 1.6zM107.3 263c.3 1.1 0 2-.5 2-.6 0-.4.8.5 1.8 1 1 1.4 2.2 1 2.5-.3.4.3 1.7 1.5 3 2.1 2.3 2.1 2.3.1 2.4-2.4.2-3.7-2.7-4.5-9.9-.5-4.9.8-6.1 1.9-1.8zm-36 4c-.6 2.2-2.3 3.8-2.3 2.1 0-1.7 1.2-4.1 2-4.1.5 0 .6.9.3 2zm139 19.8c-.3.7-1.2 1.1-2 .8-.8-.3-2.1-.6-2.9-.6-.8 0-1.4-.5-1.4-1 0-.6 1.5-1 3.4-.8 2.4.1 3.2.6 2.9 1.6zm-64.8 3.9c1.7 4 1.5 4.6-2 5-2.3.3-2.5 0-2.5-3.5 0-6.3 2.2-7.1 4.5-1.5zm33.5-2.2c0 .9.7 1.8 1.5 2.1.8.4 1.5 1 1.5 1.5s-1.3 0-3-1.3c-3.3-2.4-3.8-3.8-1.5-3.8.8 0 1.5.7 1.5 1.5zm39 6.7c2 1.8 4.5 3.8 5.6 4.4 3.8 2.3.2 2.8-3.9.6-6.4-3.5-7.8-4.8-7.1-6.6.8-2.2 1.1-2.1 5.4 1.6zm19.5 2c-1.3 5.6-2.5 8-3.8 7.5-.7-.3-2.4.1-3.8.9-2.2 1.2-2.2 1.3-.4 1.5 8 .6 10.6.6 11.1-.2.3-.5 1.9-.9 3.5-.9 4.2 0 2.7 1.7-2.1 2.5-2.2.4-4.2 1.1-4.6 1.6-.9 1.5-17.9 1.1-21.6-.5-1.8-.8-5.9-2.5-9.2-3.7-6-2.5-7.1-4.4-2.4-4.4 1.5-.1 3.3-.6 4-1.3 1.9-1.9 4.9-1.4 8.9 1.4 2.1 1.4 5.3 2.7 7.1 2.7 2.9.2 3.4-.2 4.5-3.3 1.1-3.3 1.2-3.4 1.2-.8.1 1.6.5 2.8 1 2.8 1.7 0 3.9-2.9 4.6-6 .4-1.6 1.1-3 1.7-3 .6 0 .7 1.3.3 3.2zm-111.3 1.1c-.7.8-.8 1.8-.4 2.2.4.5.1.5-.5.1-1-.5-1-1.1-.1-2.6.7-1.1 1.4-1.7 1.7-1.5.2.3-.1 1.1-.7 1.8zm114.4 2.5c-2 2-2.2.1-.4-3.1 1.1-2 1.2-2.1 1.6-.3.2 1-.3 2.6-1.2 3.4zm14-.3c-1.1.8-2.5 1.5-3 1.5-.6 0-.2-.7.8-1.5 1.1-.8 2.5-1.5 3-1.5.6 0 .2.7-.8 1.5zm-15.1 3.5c.3.5-.1 1-1 1s-1.3-.5-1-1c.3-.6.8-1 1-1 .2 0 .7.4 1 1zm11 .1c.5.7-.5.8-3.2.3-5.1-.9-5.4-1.4-1-1.4 2 0 3.9.5 4.2 1.1zM188.4 332c1.1 0 1.5.7 1.3 2.2-.4 2.5-2.7 3.7-2.7 1.4 0-.9-.7-1.6-1.5-1.6-1 0-1.5-1-1.5-2.8.1-2.4.2-2.5 1.4-1 .7 1 2.1 1.8 3 1.8zm-81.9 15.8c-.9.9-1.6-.5-2.1-4.4l-.4-3.9 1.5 3.9c.8 2.2 1.3 4.2 1 4.4zm75.4-.9c-1.4.4-3-1.9-2.2-3.3.3-.5 1.2-.1 2 1 1 1.3 1 2 .2 2.3zm21.6-1.9c-.3.5-.1 1 .5 1s.8.4.5 1c-1 1.6-2.3 1.1-2-.8.5-2.3.4-2.2 1.1-2.2.3 0 .2.4-.1 1zm-78.9 3.9c-.1 1.8-.5 2.7-1.3 2.4-1.4-.6-1.6-1.4-.7-3.7 1-2.6 2.1-1.8 2 1.3zm16.5 6.4c-.8.8-1.1.7-1.1-.4 0-.9.3-1.9.7-2.3.4-.4.9-.2 1.1.4.3.7-.1 1.7-.7 2.3zm25.1-1c1.8 1.2 6.9 4.8 11.2 8.1l7.9 5.8-4.5 4.2c-2.5 2.2-5.3 5.3-6.2 6.7-2.5 3.9-2.3 15.7.3 23.9 2.3 7.2 2.6 10.6 1.1 14.4l-1 2.6-4.6-3.5c-2.5-1.9-5.6-3.8-6.9-4.1-1.7-.4-2.5-1.5-3-4.2-.6-3.4-4.1-11.1-5.4-12.2-2.5-2-4.5-7.2-4.8-13-.2-3.6-.8-8.9-1.4-11.9-1.7-9.9-.7-15.2 1.9-10.5.6 1 2.4 1.7 5.1 1.8 4.9.3 6.1-1.1 6.1-6.8 0-2 .2-3.6.5-3.6.2 0 1.9 1 3.7 2.3zm-56.3 4.1c1 2.5 1 2.8-.2 1.7-.8-.6-1.7-2.3-2-3.7-.5-3 .4-2.1 2.2 2zm7.1-3.4c1.2.8 1.2 1-.3 1.6-.9.3-1.7 1.2-1.7 2s-.7 1.4-1.5 1.4c-1.8 0-1.8-.2-.3-3.5 1.2-2.8 1.6-2.9 3.8-1.5zm9 2.5c0 .8-.4 1.5-1 1.5-.5 0-1-.7-1-1.5s.5-1.5 1-1.5c.6 0 1 .7 1 1.5zm59.1 5.8c-.7.7-1.4.8-2.1.1-.6-.6-.2-1 1.2-1.1 1.6-.2 1.8.1.9 1zm-66.4 3.3c.3.9.1 1.9-.6 2.3-.6.4-.9 1.5-.5 2.4.3 1 .1 1.7-.5 1.7-1.7 0-3-4.2-1.9-6.3 1.1-2.1 2.7-2.2 3.5-.1zm70.3 5.3c0 .6-.4 1.3-1 1.6-.5.3-1-.1-1-.9 0-.9.5-1.6 1-1.6.6 0 1 .4 1 .9zm44 1.1c2.6 1.3 4.1 2.9 4.5 4.5.3 1.4.7 3.6 1 5 .4 2 0 2.7-1.9 3.5-3.9 1.5-6.6.9-6.6-1.5 0-2.7-3.6-6.1-7.3-7l-2.7-.7 3.6-2.9c4.4-3.4 4.4-3.5 9.4-.9zm-23.8 13c-2.9 5-2.8 5.6.8 6.3 1.7.4 3 1.1 3 1.7 0 .8-.6.8-2 0-1.6-.8-2.6-.6-5 1.2-1.6 1.2-3 2.3-3 2.5 0 1.4 8.5 8.1 9.6 7.6.8-.3 1.6.2 2 1 .3.9 1.3 1.3 2.7.9 3.2-.8-5.4 8.4-12.2 13.1-3 2-4.8 3.7-4 3.7 2.2 0 6.9-3.3 13.4-9.3 3.2-3.1 6.1-5.4 6.4-5.1.8.7-5.8 7-11.6 11-4.4 3-6.5 3.8-10.9 4l-5.4.3v-3.3c0-3.9 2.7-12 7-21.3 5.9-12.5 6.9-14.8 8-17.7.8-2.3 1.3-2.7 2.3-1.7.9.9.7 2-1.1 5.1zm17.7-2.4c.8 1.6 1.8 3.6 2.2 4.5.5 1.2-.1 2-2.8 3.3-2 .9-3.6 1.6-3.7 1.4-2.8-4.5-3.9-5.8-5.1-5.8-.8 0-1.5-.5-1.5-1 0-.6.6-1 1.3-1 .8 0 2.4-1.1 3.7-2.5 2.8-3 4-2.8 5.9 1.1zm-99.5 5.6c.3 1.6.2 2.8-.3 2.8s-1.2-1.1-1.5-2.4c-.3-1.3-.9-3.2-1.2-4.3-.6-1.6-.5-1.6.8-.3.9.8 1.8 2.7 2.2 4.2zm49.6 4.2c0 .8-.4 1.8-1 2.1-.5.3-1-.3-1-1.4 0-1.2.5-2.1 1-2.1.6 0 1 .6 1 1.4zm50 1.4c0 .5-1.1 1.5-2.5 2.2-2 1.1-2.7 1.1-4 0-.8-.7-1.3-1.5-1-1.8.2-.3 1.1 0 1.8.7 1.1.9 1.7.8 2.7-.4 1.4-1.6 3-2 3-.7zm-78 3.2c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm30.1 3.1c.4 1.8.5 3.6.3 3.8-.9.9-2.4-1.5-3-4.8-.6-2.6-.4-3.3.7-2.9.7.2 1.7 2 2 3.9zM230 398c0 .5-.4 1-1 1-.5 0-1-.5-1-1 0-.6.5-1 1-1 .6 0 1 .4 1 1zm19.3.7c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm-26 3c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm37.6 3.7c3.3 2.1 8.9 6.6 12.3 10.1 6.7 7 11.5 9.5 18.2 9.5 4.2 0 4.4.1 4.8 3.5l.4 3.4-4.6-.5c-9.4-1.1-15.5-4.3-25.3-13.2-6.3-5.8-14.9-9.7-20.7-9.5-6.7.2-15.3 4.7-22.2 11.5-7.4 7.3-16.1 12.8-20.5 12.8-1.7 0-3.5.5-3.9 1.2-.5.8.7.9 4.6.5 6.4-.8 10.5-3.4 20.9-13.1 7.7-7.1 16-11.6 21.5-11.6 4.9 0 11.6 3.4 19.7 9.9 10.8 8.7 17 11.9 24.5 12.9 5 .6 5.9 1 5.9 2.7 0 1.9-.7 2-12.2 2-6.7 0-12-.2-11.7-.6.2-.4-1.3-1-3.4-1.4-2-.4-7-2.4-11.1-4.6-11.1-5.8-17.4-5.5-26.6 1.5-2.6 2-5.7 3.9-7.1 4.2-1.3.3-2.4 1-2.4 1.5s-4.8.9-10.7.9c-5.8 0-10.3.3-9.9.7.4.5 21.9.8 47.6.8 42.1.1 49.5.4 47.9 2-.3.2-20.9.5-45.9.5-25.9.1-46 .6-46.6 1.1-.8.6-2.1-1-4.3-5.1-1.8-3.3-3.1-6.1-3-6.2.1-.2-.3-1.3-.9-2.5-1.1-2.1-1-2.2 2.5-2.8 6.7-1.2 7.4-1.6 20.2-12.3 14.9-12.5 18.8-14.4 28.7-13.9 6.1.3 8 .9 13.3 4.1zM136 416.2c3.4 6.5 4.1 8.8 2.7 8.2-2.3-.9-7.7-14.4-7.6-18.8.1-2.8.2-2.6 1.4 1.6.7 2.6 2.3 6.7 3.5 9zm-57-4.7c0 3.5-.5 4.1-2.7 2.7-1.5-1-.4-6.2 1.3-6.2.9 0 1.4 1.2 1.4 3.5zm109.3-1.1c.3 1.2-3 3.2-3.9 2.4-1.1-1.2.5-4 2.1-3.6.9.2 1.7.7 1.8 1.2zm-124 3.9c2.1.9 6.4 4 9.5 6.8 3.1 2.8 8.1 6.3 11.1 7.6 4.7 2.2 6.3 2.5 13.5 2.1 8.6-.5 13.7-2.4 20.7-7.9 1.9-1.5 4.8-3.1 6.5-3.5 4.2-1 4.6-1.4 3.3-3-.9-1.1-.8-1.4.5-1.4.8 0 2.4 1.7 3.4 3.7 1.1 2.1 3.8 7.2 6 11.4 3.9 7.3 4.5 10.2 1.6 7.8-.8-.7-2.9-.9-5.1-.5-2.1.3-6.3.9-9.3 1.1l-5.5.6 5.5-3c3-1.7 6.7-3 8.3-3.1 1.7 0 2.7-.5 2.7-1.5 0-1.2-.7-1.4-2.7-.9-5.1 1.2-14.3 5.7-14.3 7 0 1.7-30.9 2.9-50.9 1.9-8.6-.4-18.2-.7-21.3-.7-6.7 0-6.8-1.1-.4-2.7 3.4-.8 5.3-.8 8.3.3 5.4 1.9 12 3 10.8 1.8-1.5-1.5-11.8-4.2-15.7-4.2-1.8 0-5.3 1-7.8 2.2-3.9 1.9-6.6 2.2-21.2 2.6-16.1.4-16.8.3-16.8-1.6 0-1.7.9-2 7.3-2.5 8.6-.6 14.1-2.7 22.4-8.3 10.5-7.2 16.8-7.1 33.1.7 5.7 2.7 10.6 4.9 10.8 4.9.3 0 2.6 1 5.2 2.1 6.6 3 11 3.3 23.9 1.5 10.1-1.4 11.9-2 17.6-5.6 3.5-2.2 7.2-4 8.1-4 .9 0 1.6-.5 1.6-1 0-2.1-3.9-.9-9.6 2.9-4.6 3.1-7.8 4.3-14.3 5.5-14.8 2.8-19.4 2.2-33.1-4.2-16.9-7.8-19.9-9-25.5-9.6-5-.6-7-.4-11.5 1.4-3 1.2-6.4 3-7.5 4-4 3.7-13.3 7.1-21 7.7-7.2.6-7.5.5-7.5-1.6 0-1.6.6-2.1 2.8-2.1 6.2 0 16.8-5 26.5-12.4 2.1-1.6 5.8-3.4 8.2-4.1 5.4-1.3 16.5-.4 21.8 1.8zm101 .9c3.5 2 7.7 6.1 7.7 7.5 0 1.8-1.3 1.6-3.7-.6-1.1-1-3.4-2.6-5.1-3.5-1.8-.9-3.2-2.3-3.2-3.1 0-1.8 1.3-1.9 4.3-.3zm14.9 3.3c-.2 1.4-.9 2.5-1.4 2.5-.6 0-.7-.7-.4-1.6.3-.9.6-2 .6-2.5s.4-.9.9-.9c.4 0 .6 1.1.3 2.5zm-13.8 4.7c5.6 3.6 6.4 5.2 4.2 7.7-1.8 2-2.1 4.7-.6 5.6 2.6 1.6.8 2.7-3.4 2.1-2.6-.4-4.7-.3-5 .3-1 1.5 2.8 2.3 9.9 2 4-.1 7 .2 7.7.9.9.9-1.2 1.2-9 1.2H160v-4c0-3.8.1-3.9 2.6-3 3.3 1.3 3.4 1.3 3.4-.4 0-.8-1.3-1.7-3-2.1-2.3-.5-3-1.2-3-3 0-2.7 1.9-2.5 5.3.3.9.8 2 1.2 2.3.9 1-.9-1.5-3.6-4.8-5.3-1.9-1-2.8-2.2-2.8-3.9 0-3.2.7-3.1 6.4.7zm-50.4-.7c-.7.8-1.7 1.5-2.3 1.5-.6 0-.2-.7.9-1.5 2.5-1.9 3-1.9 1.4 0zm66.7 7.2c2.7 1.6 5 2.2 6.3 1.8 1.6-.5 2-.2 2 1.4 0 1.1.4 2.2.9 2.5.5.3.7 1.5.4 2.6-.6 2.3 2 4.9 5 5 1.1 0 2.1.9 2.4 1.9.3 1.1 2.2 2.6 4.3 3.5 3.4 1.3 7 4.8 7 6.8 0 .6-9.2.1-13.7-.8-1.3-.2-2.3-1.2-2.3-2 0-1.1-.6-1.5-2-1.1-1.1.3-2 .1-2-.4s.7-.9 1.5-.9c2.2 0 1.8-1.6-.8-3.3-1.7-1.1-2.8-1.2-4.3-.5-1.6.9-1.7.8-.6-.3 1.9-2 1.4-3.1-1-2.3l-2.3.7 2-2.3 2-2.3-2.7.7c-2.4.5-2.8.3-3.4-1.9-.3-1.4-1.2-2.5-2-2.5s-1.4-.6-1.4-1.4c0-.8-.9-1.8-2-2.1-2-.6-2.5-2.1-1.4-4.9.7-1.7 2.1-1.3 8.1 2.1zm75.4 2.8c5.1 2.5 10.2 4.5 11.2 4.5 1.1 0 1.8.2 1.5.5-1 1-17.9 1.7-24.4 1-5.9-.6-6.5-.9-4.4-1.7 2.5-1 11.9-.5 15.6.8 1.3.5 1.6.4.9-.3-.5-.6-3.1-1.6-5.6-2.3-4-1-5.5-1-10.5.6-6.2 1.8-16.4 3.4-16.4 2.5 0-.9 12-8.5 14.4-9.3 4.8-1.5 8.8-.6 17.7 3.7zM64 441.8c6.3.4 20.7.4 32 .1 32.5-1.1 48-1 48 .2 0 .7-4.5 1-14.2.8-7.9-.2-26.7.2-41.8.8-22.7 1-29.8.9-41-.3-7.4-.7-17.3-1.4-22-1.5-5.7-.1-7.3-.4-5-.8 4.3-.7 28.5-.4 44 .7zm126 6.6c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm-39.6 5.2c.9 2.2.8 2.4-.9 2.4-.8 0-1.5-.9-1.5-2 0-2.4 1.5-2.7 2.4-.4zm5.6-.6c0 .5-.5 1-1.1 1-.5 0-.7-.5-.4-1 .3-.6.8-1 1.1-1 .2 0 .4.4.4 1zm7.3 4.5c.7 2.1.7 3-.1 3.3-.7.2-1.2 1-1.2 1.8s-.7 1.4-1.6 1.4c-1.4 0-1.4.3-.4 1.5.7.9 1 1.8.6 2.2-.3.3-.6.1-.6-.5 0-.7-.4-1.2-1-1.2-.5 0-1 .9-1 2 0 1.3-.5 1.8-1.6 1.3-1.1-.4-1.5-.1-1.2 1.3.2 1.4-.2 1.8-1.6 1.6-1.7-.3-1.8-.1-.8 1.1 1.1 1.2.8 1.9-1.7 3.6-3 2.2-22.9 8.3-24.3 7.5-2.2-1.4 5.8-12.6 9.3-12.9.9-.1 2.4-.7 3.2-1.3 1.2-1 1.6-.9 2.1.3.3.8 1.3 1.5 2.3 1.5 2.3 0 6.3-3.9 6.3-6.2 0-1 .6-2.1 1.4-2.4.8-.3 1.7-1.5 2-2.7.6-2.2 6.3-6.8 8-6.3.6.1 1.4 1.5 1.9 3.1zm-17.7 5c-.9.7-1.3 1.4-1.1 1.7.3.3-.4 1.3-1.5 2.3-1.6 1.5-1.5 1 .7-3.6 2-4 2.8-4.9 3.1-3.5.2 1.1-.3 2.5-1.2 3.1z" />
        <Path d="M33.2 159c-.5 1.4-1.8 4.6-2.7 7.2l-1.6 4.7-6.6.3-6.5.3 4.7 3.4c4.4 3.2 4.6 3.5 4 7-.3 2-1.3 4.9-2.1 6.5-2.4 4.9-1.6 4.9 4.6.1l6-4.6 3.3 2.2c1.7 1.2 4.2 3.1 5.4 4.2 3.5 3.1 4.2 1.6 2.2-4.8-1.1-3.3-1.7-6.5-1.5-7.2.3-.7 2.1-2.3 4-3.5 2-1.3 3.6-2.6 3.6-3.1 0-.4-2.7-.7-6.1-.7-3.3 0-5.8-.3-5.6-.8.2-.4-.6-3.6-1.8-7.2-2.1-6.1-2.3-6.3-3.3-4zm3.7 10.2c.1 1.3-.7 1.8-2.9 1.8-3.5 0-3.5-.1-1.3-6.6l1.7-4.9 1.2 4c.7 2.2 1.3 4.8 1.3 5.7zm-8.9 3.6c0 .5-.6 1.6-1.2 2.5-1.2 1.6-1.5 1.5-4.3-.8l-3-2.4 4.3-.1c2.3 0 4.2.4 4.2.8zm11 1.8c1.3 3.3 1.5 2.9-2.5 5.4-3.4 2.1-3.5 2.1-5.9.3-2.5-1.8-3.1-3.8-2-6.7.4-1.1 1.9-1.6 5-1.6 3.9 0 4.6.3 5.4 2.6zm6.4-1.2c-1.2 3-5.4 3-5.4 0 0-.9 1.1-1.4 3-1.4 2.1 0 2.8.4 2.4 1.4zm-16 8.5c1.6 1.8 1.6 2-1.4 4.1-1.7 1.2-3.3 2-3.6 1.7-.5-.5 2.2-7.7 2.9-7.7.2 0 1.2.9 2.1 1.9zm12.4 1.4c2 5.5 1.4 6-2.8 2.7-3.8-3-3.9-3.3-2.3-4.6 2.8-2.1 3.8-1.7 5.1 1.9zM139 160.4c2.5 1.5 4.5 1.2 3.5-.5-.4-.5-1.8-.9-3.3-.9l-2.7.1 2.5 1.3zM136 163.1c0 .5.4.8.9.4.5-.3 1.2-.1 1.5.4.4.5-.2 1.2-1.1 1.4-1.1.3-.8.5 1 .6 3 .1 3.8-2.3 1.1-3.3-2.3-.9-3.4-.7-3.4.5zM137.4 217.5c-.9 2.2.3 4.5 2.3 4.5 3.1 0 4.6-1.6 3.8-3.9-.8-2.5-5.2-2.9-6.1-.6zM107 425.5c-1.4.8-2 1.4-1.5 1.4.6 0 2.1-.6 3.5-1.4 1.4-.8 2.1-1.4 1.5-1.4-.5 0-2.1.6-3.5 1.4zM71 249.1c0 .5.5.7 1 .4.6-.3 1-.8 1-1.1 0-.2-.4-.4-1-.4-.5 0-1 .5-1 1.1zM74.2 250c-1.8 2.9-1.5 3.8.4 1.2.9-1.3 1.4-2.5 1.2-2.7-.2-.2-.9.5-1.6 1.5zM91 266c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM187.1 246.6c-.7.8-1.1 1.7-.9 2 .3.2 1.3-.5 2.3-1.6 1-1.1 1.4-2 .9-2-.5.1-1.5.8-2.3 1.6zM192.3 252.2c-1.5 2-2.5 3.8-2 3.8.3 0 1.2-1.1 2.1-2.5 1.7-2.6 1.6-3.5-.1-1.3zM184 258.6c0 .8.5 1.2 1 .9.6-.3 1-1 1-1.6 0-.5-.4-.9-1-.9-.5 0-1 .7-1 1.6zM187 260c-.6 1.1-.8 2-.6 2 .3 0 1-.9 1.6-2 .6-1.1.8-2 .6-2-.3 0-1 .9-1.6 2zM190.5 259.1c-.4.6-.5 1.2-.2 1.5.2.3.7-.2 1-1.1.7-1.7.1-2-.8-.4zM191.9 262.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3zM192.9 265.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3zM201 278.5c0 .8.7 1.5 1.5 1.5.9 0 1.2-.6.9-1.5-.4-.8-1-1.5-1.5-1.5s-.9.7-.9 1.5zM146.8 255.6c-1.2 2.7-.5 4 2.6 4.6 2.5.4 4.4-2.6 3-4.9-1.6-2.6-4.4-2.4-5.6.3zm3.7 1.4c.3.5.1 1-.4 1-.6 0-1.1-.5-1.1-1 0-.6.2-1 .4-1 .3 0 .8.4 1.1 1zM161 273c0 .5.4 1 .9 1 .6 0 1.3-.5 1.6-1 .3-.6-.1-1-.9-1-.9 0-1.6.4-1.6 1zM235.9 261.2l-2.5 6.3-7.2.3c-4 .2-7.2.6-7.2 1.1 0 .4 2.3 2.2 5 4 2.8 1.8 5 3.8 5 4.5 0 .7-1.1 3.4-2.4 6.2-1.3 2.7-2.2 5.1-2.1 5.2.6.6 7.5-1.9 7.5-2.6 0-.4 1.4-1.5 3.1-2.4l3.1-1.8 5.8 4.5c3.2 2.5 6.1 4.5 6.4 4.5 1.5 0 .2-6-2.8-13.1-.5-1.1.7-2.4 4.4-4.7 6.8-4.3 6.5-5.4-1.7-5.1l-6.7.2-2-6.6c-1.2-3.7-2.4-6.7-2.7-6.7-.3 0-1.7 2.8-3 6.2zm4.5 4c.6 2.5.4 2.8-2 2.8-2.3 0-2.5-.3-1.9-2.3.3-1.2.9-3.3 1.2-4.6.6-2.3.7-2.3 1.3-.5.4 1 1 3.1 1.4 4.6zm-8.4 5.7c0 1.6-1.9 2.3-4 1.6-3-1-2.4-2.5 1-2.5 1.7 0 3 .4 3 .9zm11 1c1.6 3.1 1.2 4.7-1.5 5.9-2.1 1-3.2.9-5.5-.3-3.5-1.8-3.5-1.8-1.4-5 2-3.1 6.8-3.4 8.4-.6zm10-1.4c0 .2-1.4 1.2-3.1 2.1-2.6 1.3-3.3 1.4-4 .2-1.5-2.3-1-2.8 3.1-2.8 2.2 0 4 .2 4 .5zm-19.7 12.2c-3.5 2.9-4.6 2.9-3.7 0 1.2-3.9 2.3-4.8 4.5-3.4 1.9 1.2 1.9 1.3-.8 3.4zm14.1.5c.8 3.5.2 3.5-4.2.2l-3.5-2.7 2.4-1.3c2.8-1.5 4.3-.4 5.3 3.8zM142.5 289.2c-.4 1-.4 2.6 0 3.5.8 1.7.8 1.7 1.2 0 .3-.9.3-2.5 0-3.5-.4-1.6-.4-1.6-1.2 0zM241.2 416.1c-5.1 1.5-12.2 6.3-17.2 11.5-4.2 4.3-11.2 8.4-14.6 8.4-.8 0-1.4.4-1.4 1 0 .5.9 1 1.9 1 1.1 0 2.3-.5 2.6-1 .3-.6 1.6-1 2.9-1 2.6 0 5.1-1.8 11.8-8.7 5.8-6 13.6-10.3 18.6-10.3 4.8 0 11.4 3.5 16.5 8.7 2.3 2.4 6.9 5.7 10.3 7.2 6.7 3.1 15.4 4.9 15.4 3.2 0-.6-1.3-1.1-3-1.1-5.2 0-14.1-4.3-19.9-9.6-10-9-16.5-11.5-23.9-9.3zM43.3 427c-2.9 1-6.5 2.7-8.1 3.9-1.6 1.1-4.7 2.6-7 3.3-4.3 1.3-5.6 2.8-2.4 2.8 1.5 0 4.9-1.6 16.3-7.6 5.1-2.7 11.4-2.8 18.1-.4 3.5 1.3 7.9 3.3 9.8 4.5 6.1 3.7 15.4 6.3 16.5 4.6.5-1-1.8-2.1-4.3-2.1-.9 0-5.3-1.9-9.7-4.1-13.7-7-20.3-8.2-29.2-4.9zM146.3 8.7c-4.8.5-6.3 3.3-1.8 3.3 2.4 0 2.5.3 2.5 6v6h-3.6c-6 0-3.5 2.4 3.2 3.1 11.7 1 24-1.6 14.2-3.1-3.3-.5-3.3-.5-3.3-6s0-5.5 3.3-5.8c2.4-.2 3.2-.8 3.2-2.3 0-1.7-.7-1.9-6.7-1.7-3.8.1-8.7.3-11 .5zm7.3 6.8c.8 4.4-.2 8.5-2.1 8.5-1.2 0-1.5-1.4-1.5-6s.3-6 1.5-6c.8 0 1.7 1.4 2.1 3.5zM275.9 463.7c-1.3.3-1.6 1.2-1.2 3.7.4 3.3.4 3.4-4.4 4.2-6 1.1-6.7 3.7-1 4.2 4.9.4 4.7 1.8-.4 2.5-2.2.3-4.3.8-4.6 1.1-1.3 1.3 2.2 3.6 5.3 3.6 1.9 0 3.4.4 3.4 1 0 .5-1 1-2.2 1-4.2 0-6.9 1.2-6.6 2.8.2.9.8 1.4 1.3 1.1.6-.2.9-.7.8-1.2-.2-.4 1.5-.7 3.7-.7h4l.1 6.7c.1 3.8.2 8.1.2 9.6-.1 1.7.4 2.6 1.1 2.4.6-.2 1-1.7.9-3.3-.5-7.8-.4-14.4.2-15.4.3-.5 3.5-1 6.9-1 6.7 0 9.2-1.4 8-4.4-.5-1.3-2.2-1.6-8.3-1.8l-7.6-.2 6.3-.3c3.4-.2 6.2-.8 6.2-1.3 0-.6-2.8-1-6.2-1.1-6.6 0-5.7-1.5 1.2-2 2.8-.2 2.4-.4-2-.9-4.2-.5-4.7-.7-2-.9 5.5-.2 7.4-2.1 2.2-2.1-4.1 0-4.3-.1-4-2.8.2-2.1.9-2.7 2.8-2.9 1.4-.1 1.8 0 .8.3-2.7.8-2.2 2.4.7 2.4 2.9 0 4.5-2.8 2.4-4.1-1.4-.9-5.1-1-8-.2zm-3.4 10.3c-.3.5-1.3 1-2.1 1s-1.4-.5-1.4-1c0-.6.9-1 2.1-1 1.1 0 1.7.4 1.4 1zm.5 6c0 .5-1.5 1-3.2.9-3.1-.1-3.2-.1-.8-.9 3.5-1.1 4-1.1 4 0zm15.8 2.8c-.3 1.3-1.6 1.8-6.7 2-4.8.2-6.2 0-5.9-1 .4-1.1 2.4-1.6 11.1-2.5 1.2-.1 1.7.4 1.5 1.5z" />
        <Path d="M279 489c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1z" />
    </Svg>
);

export default SvgCoin2;
