// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <svg width="110" height="52" viewBox="0 0 109 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M57.3398 31.8146C57.1626 31.4652 56.9854 31.121 56.788 30.7261C57.2841 30.6602 57.7145 30.7159 58.1499 30.7716C61.6027 31.2222 64.5239 30.2755 66.7718 27.5264C66.9034 27.3694 66.9642 27.0808 67.268 27.1264C67.3844 27.1416 67.4553 27.0808 67.3844 27.01C67.03 26.6556 67.2629 26.21 67.1718 25.8101C66.9693 24.914 66.4478 24.514 65.1264 24.3368C65.1467 24.0989 65.3694 24.0634 65.5112 23.9774C66.1896 23.5571 66.9136 23.2028 67.5565 22.7319C69.0045 21.6789 70.5993 21.6282 72.2649 21.9472C72.9028 22.0687 73.5408 22.1801 74.3002 22.3218C73.9913 21.9472 73.6471 21.8966 73.3534 21.7801C72.6092 21.4915 71.8548 21.2232 71.1056 20.9498C70.7664 20.8283 70.6853 20.6511 70.9385 20.3575C71.3334 19.8968 71.708 19.4107 72.108 18.95C74.7862 15.8972 77.2619 12.6924 79.1908 9.10289C79.9654 7.66506 80.6084 6.16141 80.978 4.55651C81.0236 4.354 81.0995 4.15655 80.9679 3.73634C79.9351 6.94108 78.2593 9.61423 76.3 12.1001C74.3508 14.5656 72.2346 16.8895 69.7184 18.8285C69.8753 15.7351 70.2449 12.6924 70.1892 9.6193C69.8601 9.65473 69.9512 9.87243 69.9512 10.0142C69.9512 13.2848 69.0956 16.368 67.8654 19.3702C67.5717 20.0841 67.1515 20.5853 66.4073 20.9042C65.01 21.5017 63.6633 22.2307 62.2862 22.8737C61.6635 23.1673 61.6128 23.1116 61.6685 22.4281C61.9217 19.2791 61.9723 16.125 61.9622 12.9709C61.9571 11.8672 61.8103 10.7584 61.7293 9.64461C61.4255 9.7003 61.5166 9.91294 61.5116 10.0547C61.3597 14.3581 60.6003 18.5652 59.6232 22.742C59.3801 23.7799 57.8107 24.6456 56.7981 24.2862C55.4919 23.8255 54.206 23.2989 52.8998 22.8332C52.5454 22.7066 52.6264 22.4636 52.6213 22.2307C52.5909 19.1171 52.3074 16.0288 51.7303 12.9658C51.6847 12.7329 51.6695 12.4848 51.4214 12.1861C51.2544 13.1076 51.4923 13.8974 51.5328 14.6871C51.6594 17.0818 51.8163 19.4715 51.7252 21.8712C51.71 22.3016 51.629 22.3978 51.1886 22.2864C50.1507 22.0282 49.0976 21.8358 48.0496 21.6232C46.4903 21.3042 44.9461 21.5827 43.407 21.7902C42.9362 21.851 42.8603 21.7143 42.9311 21.2991C43.6096 17.2185 45.1638 13.6037 48.5306 10.9913C50.4798 9.4826 52.7226 8.5713 55.1021 7.96376C57.1424 7.4423 59.2029 7.07778 61.2939 6.93602C63.4051 6.79426 65.5112 6.61706 67.6173 6.42974C71.1612 6.11585 74.7508 5.8779 78.0314 4.23755C79.7579 3.37182 81.0286 2.10106 81.7475 0.293642C81.7728 0.232888 81.7982 0.177198 81.8336 0.12657C81.8539 0.096193 81.8994 0.0810046 82.0159 0C82.0665 0.30883 82.1526 0.58222 82.1526 0.855611C82.1677 6.84489 81.8994 12.7937 79.8287 18.5095C79.125 20.4486 78.2238 22.2965 77.2062 24.0887C76.9936 24.4685 76.7101 24.757 76.3304 24.9494C73.3281 26.4581 70.4474 28.2048 67.3388 29.511C65.7238 30.1894 64.0987 30.8476 62.4482 31.4551C59.8155 32.4272 57.1171 32.4525 54.3781 32.1639C53.1681 32.0373 52.029 31.7234 50.9911 31.0906C50.3026 30.6704 50.3279 30.5792 50.9354 30.0983C51.6493 29.5414 52.3783 29.3085 53.2542 29.6781C53.6744 29.8553 54.1402 29.9464 54.5806 30.078C55.4008 30.3261 56.145 30.6906 56.6715 31.4045C56.8184 31.6019 56.9905 31.7994 57.2436 31.8854C57.2892 31.9006 57.3348 31.9158 57.3803 31.931C57.3753 31.9006 57.3601 31.8551 57.3398 31.8146Z"
                fill="url(#paint0_linear_3_4574)"
            />
            <path
                d="M27.1899 47.3582C26.7545 46.6089 26.709 45.7887 26.6533 44.9838C26.0356 36.1948 31.4832 27.4058 38.3989 23.8669C42.9251 21.5532 47.5373 21.6342 52.2153 23.3606C54.3771 24.1605 56.4883 25.1326 58.7665 25.5781C60.5588 25.9274 62.3459 26.0135 64.0673 25.1528C64.8925 24.7377 65.3887 24.8288 65.7937 25.2996C66.2746 25.8616 66.3101 26.5552 65.7633 27.264C64.6039 28.7778 63.0142 29.6536 61.1865 30.0789C58.9032 30.6054 56.6604 30.2359 54.4581 29.6182C52.9848 29.203 51.5318 28.7018 50.0687 28.2462C49.8105 28.1652 49.5421 28.1044 49.2738 28.0487C48.884 27.9728 48.4435 27.8057 48.16 28.1956C47.9068 28.555 48.079 28.9803 48.2359 29.3397C48.889 30.8636 50.1547 31.7142 51.6432 32.2255C53.7898 32.9647 56.0276 32.9799 58.2602 32.7926C61.6523 32.504 64.7052 31.1168 67.753 29.7448C70.1122 28.6866 72.3905 27.4716 74.6586 26.2261C75.7117 25.649 76.7951 25.1427 78.0001 24.9655C78.3089 24.9199 78.6329 24.9098 78.9417 24.9554C79.9492 25.1073 80.1163 25.5224 79.5695 26.3983C79.3974 26.6717 79.1746 26.8944 78.9063 27.0615C75.0484 29.4866 71.6007 32.4534 68.0112 35.2328C66.2341 36.6099 64.4824 38.0427 62.4067 38.9641C59.6475 40.1944 56.7161 40.4171 53.7493 40.2399C48.9599 39.9615 44.3021 38.9185 39.6494 37.8351C37.68 37.3794 35.7055 36.9744 33.6551 37.2428C30.2225 37.6933 28.0962 39.8096 27.6304 43.2725C27.4734 44.4623 27.3975 45.6571 27.3519 46.857C27.3367 47.0291 27.3317 47.1962 27.1899 47.3582Z"
                fill="#0B0B0B"
            />
            <path
                d="M57.3383 31.8137C57.3587 31.8596 57.374 31.9003 57.3943 31.9461C57.3485 31.9309 57.3027 31.9156 57.2568 31.9003C57.2823 31.8697 57.3129 31.8392 57.3383 31.8137Z"
                fill="white"
            />
            <path
                d="M0.359459 73.4292V70.8625L7.76149 61.7205H1.19579V59.3365H11.5106V61.5475L3.79131 71.0548H11.8086V73.4292H0.359459ZM13.5293 73.4292V59.3365H16.3748V73.4292H13.5293ZM25.6513 68.2478V65.8734H31.7844V71.4874C31.1884 72.0642 30.3232 72.5736 29.1889 73.0158C28.061 73.4516 26.917 73.6695 25.7571 73.6695C24.2831 73.6695 22.9981 73.3619 21.9022 72.7467C20.8064 72.125 19.9828 71.2406 19.4317 70.0935C18.8805 68.9399 18.605 67.687 18.605 66.3348C18.605 64.8672 18.9126 63.563 19.5278 62.4223C20.1431 61.2815 21.0435 60.4068 22.2291 59.7979C23.1327 59.3301 24.2574 59.0962 25.6033 59.0962C27.3528 59.0962 28.7179 59.4647 29.6984 60.2017C30.6853 60.9323 31.3198 61.9448 31.6018 63.2394L28.7756 63.7681C28.5769 63.076 28.202 62.5312 27.6508 62.1339C27.1061 61.7302 26.4236 61.5283 25.6033 61.5283C24.36 61.5283 23.3698 61.9224 22.6328 62.7107C21.9022 63.4989 21.5369 64.6685 21.5369 66.2194C21.5369 67.8921 21.9087 69.1482 22.6521 69.9877C23.3955 70.8209 24.3696 71.2374 25.5744 71.2374C26.1704 71.2374 26.7664 71.1221 27.3624 70.8914C27.9649 70.6542 28.4808 70.3691 28.9101 70.0358V68.2478H25.6513ZM34.3799 73.4292V59.3365H38.6385L41.1956 68.9495L43.7238 59.3365H47.992V73.4292H45.3484V62.3358L42.551 73.4292H39.8113L37.0235 62.3358V73.4292H34.3799ZM63.5266 73.4292H60.4312L59.2008 70.2281H53.5675L52.4044 73.4292H49.3859L54.8749 59.3365H57.8838L63.5266 73.4292ZM58.2875 67.8536L56.3457 62.6242L54.4423 67.8536H58.2875Z"
                fill="#0B0B0B"
            />
            <path
                d="M69.7943 73.4292V59.3365H80.2437V61.7205H72.6398V64.8448H79.715V67.2192H72.6398V71.0548H80.5128V73.4292H69.7943ZM82.9257 73.4292V59.3365H87.4919C89.2222 59.3365 90.3502 59.407 90.8757 59.548C91.6832 59.7595 92.3593 60.2209 92.904 60.9323C93.4488 61.6372 93.7211 62.5505 93.7211 63.672C93.7211 64.5372 93.5641 65.2645 93.2501 65.8541C92.9361 66.4437 92.5355 66.9084 92.0485 67.248C91.5678 67.5813 91.0776 67.8024 90.5777 67.9113C89.8984 68.0459 88.9146 68.1132 87.6265 68.1132H85.7712V73.4292H82.9257ZM85.7712 61.7205V65.7196H87.3285C88.45 65.7196 89.1998 65.6459 89.5779 65.4985C89.956 65.3511 90.2508 65.1203 90.4623 64.8063C90.6802 64.4923 90.7892 64.127 90.7892 63.7104C90.7892 63.1977 90.6386 62.7748 90.3374 62.4415C90.0361 62.1083 89.6548 61.9 89.1934 61.8167C88.8537 61.7526 88.1712 61.7205 87.1458 61.7205H85.7712ZM96.0667 73.4292V59.3365H102.056C103.562 59.3365 104.654 59.4647 105.334 59.721C106.019 59.971 106.567 60.4196 106.977 61.0669C107.388 61.7141 107.593 62.4543 107.593 63.2875C107.593 64.3449 107.282 65.2197 106.66 65.9118C106.039 66.5975 105.109 67.0301 103.872 67.2096C104.488 67.5685 104.994 67.9626 105.391 68.392C105.795 68.8214 106.337 69.584 107.016 70.6799L108.737 73.4292H105.334L103.276 70.3626C102.546 69.2668 102.046 68.5778 101.777 68.2958C101.508 68.0075 101.222 67.812 100.921 67.7095C100.62 67.6005 100.143 67.546 99.4889 67.546H98.9122V73.4292H96.0667ZM98.9122 65.2966H101.017C102.382 65.2966 103.235 65.2389 103.574 65.1235C103.914 65.0082 104.18 64.8095 104.372 64.5275C104.565 64.2456 104.661 63.8931 104.661 63.4701C104.661 62.9959 104.533 62.6145 104.276 62.3262C104.026 62.0314 103.671 61.8455 103.209 61.7686C102.978 61.7366 102.286 61.7205 101.133 61.7205H98.9122V65.2966Z"
                fill="#8DC235"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_3_4574"
                    x1="45.4894"
                    y1="25.2055"
                    x2="82.1532"
                    y2="-8.15789e-07"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#119639" />
                    <stop offset="1" stop-color="#AACE12" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
