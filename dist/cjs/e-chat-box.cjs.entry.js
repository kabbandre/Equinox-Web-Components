'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-977a8e5f.js');

const eChatBoxCss = "html{--red-50:#FFF5F5;--red-100:#FED7D7;--red-200:#FEB2B2;--red-300:#FC8181;--red-400:#F56565;--red-500:#E53E3E;--red-600:#C53030;--red-700:#9B2C2C;--red-800:#63171B;--red-900:#63171B;--purple-50:#FAF5FF;--purple-100:#E9D8FD;--purple-200:#D6BCFA;--purple-300:#B794F4;--purple-400:#9F7AEA;--purple-500:#805AD5;--purple-600:#6B46C1;--purple-700:#553C9A;--purple-800:#44337A;--purple-900:#322659;--cyan-50:#EDFDFD;--cyan-100:#C4F1F9;--cyan-200:#9DECF9;--cyan-300:#76E4F7;--cyan-400:#0BC5EA;--cyan-500:#00B5D8;--cyan-600:#00A3C4;--cyan-700:#0987A0;--cyan-800:#086F83;--cyan-900:#065666;--blue-50:#EBF8FF;--blue-100:#CEEDFF;--blue-200:#90CDF4;--blue-300:#63B3ED;--blue-400:#4299E1;--blue-500:#3182CE;--blue-600:#2A69AC;--blue-700:#1E4E8C;--blue-800:#153E75;--blue-900:#1A365D;--teal-50:#E6FFFA;--teal-100:#B2F5EA;--teal-200:#81E6D9;--teal-300:#4FD1C5;--teal-400:#38B2AC;--teal-500:#319795;--teal-600:#2C7A7B;--teal-700:#285E61;--teal-800:#234E52;--teal-900:#1D4044;--green-50:#F0FFF4;--green-100:#C6F6D5;--green-200:#9AE6B4;--green-300:#68D391;--green-400:#48BB78;--green-500:#38A169;--green-600:#2F855A;--green-700:#276749;--green-800:#22543D;--green-900:#1C4532;--yellow-50:#FFFFF0;--yellow-100:#FEFCBF;--yellow-200:#FAF089;--yellow-300:#F6E05E;--yellow-400:#ECC94B;--yellow-500:#D69E2E;--yellow-600:#B7791F;--yellow-700:#975A16;--yellow-800:#744210;--yellow-900:#5F370E;--orange-50:#FFFAF0;--orange-100:#FEEBC8;--orange-200:#FBD38D;--orange-300:#F6AD55;--orange-400:#ED8936;--orange-500:#DD6B20;--orange-600:#C05621;--orange-700:#9C4221;--orange-800:#7B341E;--orange-900:#652B19;--gray-50:#F7FAFC;--gray-100:#EDF2F7;--gray-200:#E2E8F0;--gray-300:#CBD5E0;--gray-400:#A0AEC0;--gray-500:#718096;--gray-600:#4A5568;--gray-700:#2D3748;--gray-800:#1A202C;--gray-900:#171923;--primary:#000000;--equinox:linear-gradient(90deg, #E7CCB4 0%, rgba(255, 255, 255, 0) 100%), #F2F2F2;--sunrise:linear-gradient(135deg, #F6AD55 34.9%, #FAF089 100%);--nightfall:linear-gradient(135deg, #B794F4 34.9%, #0BC5EA 100%)}.silicon-light-weak{background:rgba(255, 255, 255, 0.13);-webkit-backdrop-filter:blur(13px);backdrop-filter:blur(13px)}.silicon-light-medium{background:rgba(255, 255, 255, 0.22);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px)}.silicon-light-strong{background:rgba(255, 255, 255, 0.33);-webkit-backdrop-filter:blur(33px);backdrop-filter:blur(33px)}.silicon-dark-weak{background:rgba(0, 0, 0, 0.13);-webkit-backdrop-filter:blur(13px);backdrop-filter:blur(13px)}.silicon-dark-medium{background:rgba(0, 0, 0, 0.22);-webkit-backdrop-filter:blur(22px);backdrop-filter:blur(22px)}.silicon-dark-strong{background:rgba(0, 0, 0, 0.33);-webkit-backdrop-filter:blur(33px);backdrop-filter:blur(33px)}.e-scroll::-webkit-scrollbar{width:10px}.e-scroll::-webkit-scrollbar-track{background:#f1f1f1}.e-scroll::-webkit-scrollbar-thumb{background:#888}.e-scroll::-webkit-scrollbar-thumb:hover{background:#555}.elevation-1{-webkit-box-shadow:0px 2px 1px -1px rgba(160, 174, 192, 0.2), 0px 1px 1px rgba(160, 174, 192, 0.14), 0px 1px 3px rgba(160, 174, 192, 0.12);box-shadow:0px 2px 1px -1px rgba(160, 174, 192, 0.2), 0px 1px 1px rgba(160, 174, 192, 0.14), 0px 1px 3px rgba(160, 174, 192, 0.12)}.elevation-2{-webkit-box-shadow:0px 3px 1px -2px rgba(160, 174, 192, 0.2), 0px 2px 2px rgba(160, 174, 192, 0.14), 0px 1px 5px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 1px -2px rgba(160, 174, 192, 0.2), 0px 2px 2px rgba(160, 174, 192, 0.14), 0px 1px 5px rgba(160, 174, 192, 0.12)}.elevation-3{-webkit-box-shadow:0px 3px 3px -2px rgba(160, 174, 192, 0.2), 0px 3px 4px rgba(160, 174, 192, 0.14), 0px 1px 8px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 3px -2px rgba(160, 174, 192, 0.2), 0px 3px 4px rgba(160, 174, 192, 0.14), 0px 1px 8px rgba(160, 174, 192, 0.12)}.elevation-4{-webkit-box-shadow:0px 2px 4px -1px rgba(160, 174, 192, 0.2), 0px 4px 5px rgba(160, 174, 192, 0.14), 0px 1px 10px rgba(160, 174, 192, 0.12);box-shadow:0px 2px 4px -1px rgba(160, 174, 192, 0.2), 0px 4px 5px rgba(160, 174, 192, 0.14), 0px 1px 10px rgba(160, 174, 192, 0.12)}.elevation-5{-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 5px 8px rgba(160, 174, 192, 0.14), 0px 1px 14px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 5px 8px rgba(160, 174, 192, 0.14), 0px 1px 14px rgba(160, 174, 192, 0.12)}.elevation-6{-webkit-box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12);box-shadow:0px 3px 5px -1px rgba(160, 174, 192, 0.2), 0px 6px 10px rgba(160, 174, 192, 0.14), 0px 1px 18px rgba(160, 174, 192, 0.12)}.elevation-7{-webkit-box-shadow:0px 4px 5px -2px rgba(160, 174, 192, 0.2), 0px 7px 10px 1px rgba(160, 174, 192, 0.14), 0px 2px 16px 1px rgba(160, 174, 192, 0.12);box-shadow:0px 4px 5px -2px rgba(160, 174, 192, 0.2), 0px 7px 10px 1px rgba(160, 174, 192, 0.14), 0px 2px 16px 1px rgba(160, 174, 192, 0.12)}.elevation-8{-webkit-box-shadow:0px 5px 5px -3px rgba(160, 174, 192, 0.2), 0px 8px 10px 1px rgba(160, 174, 192, 0.14), 0px 3px 14px 2px rgba(160, 174, 192, 0.12);box-shadow:0px 5px 5px -3px rgba(160, 174, 192, 0.2), 0px 8px 10px 1px rgba(160, 174, 192, 0.14), 0px 3px 14px 2px rgba(160, 174, 192, 0.12)}.elevation-9{-webkit-box-shadow:0px 5px 6px -3px rgba(160, 174, 192, 0.2), 0px 9px 12px 1px rgba(160, 174, 192, 0.14), 0px 3px 16px 2px rgba(160, 174, 192, 0.12);box-shadow:0px 5px 6px -3px rgba(160, 174, 192, 0.2), 0px 9px 12px 1px rgba(160, 174, 192, 0.14), 0px 3px 16px 2px rgba(160, 174, 192, 0.12)}.elevation-10{-webkit-box-shadow:0px 6px 6px -3px rgba(160, 174, 192, 0.2), 0px 10px 14px 1px rgba(160, 174, 192, 0.14), 0px 4px 18px 3px rgba(160, 174, 192, 0.12);box-shadow:0px 6px 6px -3px rgba(160, 174, 192, 0.2), 0px 10px 14px 1px rgba(160, 174, 192, 0.14), 0px 4px 18px 3px rgba(160, 174, 192, 0.12)}.elevation-11{-webkit-box-shadow:0px 6px 7px -4px rgba(160, 174, 192, 0.2), 0px 11px 15px 1px rgba(160, 174, 192, 0.14), 0px 4px 20px 3px rgba(160, 174, 192, 0.12);box-shadow:0px 6px 7px -4px rgba(160, 174, 192, 0.2), 0px 11px 15px 1px rgba(160, 174, 192, 0.14), 0px 4px 20px 3px rgba(160, 174, 192, 0.12)}.elevation-12{-webkit-box-shadow:0px 7px 8px -4px rgba(160, 174, 192, 0.2), 0px 12px 17px 2px rgba(160, 174, 192, 0.14), 0px 5px 22px 4px rgba(160, 174, 192, 0.12);box-shadow:0px 7px 8px -4px rgba(160, 174, 192, 0.2), 0px 12px 17px 2px rgba(160, 174, 192, 0.14), 0px 5px 22px 4px rgba(160, 174, 192, 0.12)}.equinox{background:var(--equinox)}.sunrise{background:var(--sunrise)}.nightfall{background:var(--nightfall)}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzQdL_nz.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzwdL_nz.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzMdL_nz.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz8dL_nz.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz4dL_nz.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc3CsTKlA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc-CsTKlA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc2CsTKlA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc5CsTKlA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc1CsTKlA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc0CsTKlA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xIIzI.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc3CsTKlA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc-CsTKlA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc2CsTKlA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc5CsTKlA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc1CsTKlA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc0CsTKlA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc3CsTKlA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc-CsTKlA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc2CsTKlA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc5CsTKlA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc1CsTKlA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc0CsTKlA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:italic;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxFIzIFKw.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxMIzIFKw.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxEIzIFKw.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxLIzIFKw.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxHIzIFKw.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxGIzIFKw.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxIIzI.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:700;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCRc4EsA.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfABc4EsA.woff2) format('woff2');unicode-range:U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCBc4EsA.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfBxc4EsA.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCxc4EsA.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Roboto';font-style:normal;font-weight:900;src:url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfBBc4.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}.weight-normal{font-weight:normal}.weight-bold{font-weight:bold}.decoration-underline{text-decoration:underline}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-xs{font-size:12px;line-height:150%}.text-sm{font-size:14px;line-height:150%}.text-md{font-size:16px;line-height:150%}.text-lg{font-size:18px;line-height:150%}.text-xl{font-size:20px;line-height:150%}.text-2xl{font-size:24px;line-height:150%}.text-3xl{font-size:28px;line-height:140%}.text-4xl{font-size:36px;line-height:42px}.text-5xl{font-size:48px;line-height:140%}.text-6xl{font-size:64px;line-height:130%}*{font-family:Roboto, serif}:host{display:block}.e-chat-box{border:1px solid var(--gray-200);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;gap:12px;padding:28px 24px}.e-chat-box input{background:transparent;width:100%;border:none;font-size:18px;line-height:150%;color:var(--gray-500);padding-top:2px}.e-chat-box input::-webkit-input-placeholder{color:var(--gray-500)}.e-chat-box input::-moz-placeholder{color:var(--gray-500)}.e-chat-box input:-ms-input-placeholder{color:var(--gray-500)}.e-chat-box input::-ms-input-placeholder{color:var(--gray-500)}.e-chat-box input::placeholder{color:var(--gray-500)}.e-chat-box input:focus-visible{outline:none}.e-chat-box.dark input{color:#fff !important}.e-chat-box.dark input::-webkit-input-placeholder{color:#fff !important}.e-chat-box.dark input::-moz-placeholder{color:#fff !important}.e-chat-box.dark input:-ms-input-placeholder{color:#fff !important}.e-chat-box.dark input::-ms-input-placeholder{color:#fff !important}.e-chat-box.dark input::placeholder{color:#fff !important}";

const EChatBox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.outerPrependClick = index.createEvent(this, "outerPrependClick", 7);
        this.prependClick = index.createEvent(this, "prependClick", 7);
        this.appendClick = index.createEvent(this, "appendClick", 7);
        this.outerAppendClick = index.createEvent(this, "outerAppendClick", 7);
        this.valueChange = index.createEvent(this, "valueChange", 7);
        this.type = 'text';
        this.placeholder = "Message to...";
        this.outerPrependIcon = "ph-plus";
        this.prependIcon = "ph-smiley-sticker";
        this.appendIcon = "ph-dots-three";
        this.outerAppendIcon = "ph-paper-plane";
        this.backdrop = true;
        this.dark = true;
        this.backdropBlur = "weak";
        this.classes = () => {
            const classes = {
                'e-chat-box': true,
            };
            const setting = {
                style: this.dark ? 'dark' : 'light',
                blur: this.backdropBlur
            };
            if (this.backdrop) {
                classes[`silicon-${setting.style}-${setting.blur}`] = true;
            }
            return Object.assign(Object.assign({}, classes), { [setting.style]: true });
        };
    }
    onOuterPrependClick() {
        this.outerPrependClick.emit('outer-prepend-click');
    }
    onPrependClick() {
        this.prependClick.emit('prepend-click');
    }
    onAppendClick() {
        this.appendClick.emit('append-click');
    }
    onOuterAppendClick() {
        this.outerAppendClick.emit('outer-append-click');
    }
    handleChange(event) {
        const val = event.target.value;
        console.log(val);
        this.value = val;
        this.valueChange.emit(val);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: this.classes() }, index.h("slot", { name: "outer-prepend" }, index.h("e-btn", { onClick: this.onOuterPrependClick.bind(this), icon: this.outerPrependIcon, size: "sm" })), index.h("slot", { name: "prepend" }, index.h("e-btn", { onClick: this.onPrependClick.bind(this), icon: this.prependIcon, size: "sm" })), index.h("input", { type: this.type, value: this.value, onInput: event => this.handleChange(event), placeholder: this.placeholder }), index.h("slot", { name: "append" }, index.h("e-btn", { onClick: this.onAppendClick.bind(this), icon: this.appendIcon, size: "sm" })), index.h("slot", { name: "outer-append" }, index.h("e-btn", { onClick: this.onOuterAppendClick.bind(this), icon: this.outerAppendIcon, size: "sm" })))));
    }
};
EChatBox.style = eChatBoxCss;

exports.e_chat_box = EChatBox;
