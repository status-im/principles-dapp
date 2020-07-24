import Header from '../components/header'

export default function IndexPage() {
  return (
    <div className="max-w-md mx-auto px-4">
      <Header />
      <div className="bg-white rounded p-4 text-center">
        <span className="bg-blue-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto relative">
          <svg className="fill-current w-12 h-12" width="55" height="60" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.75 15.96C23.5842 15.96 23.4253 16.0258 23.3081 16.143C23.1908 16.2602 23.125 16.4192 23.125 16.585V23.53C23.125 23.6957 23.1908 23.8547 23.3081 23.9719C23.4253 24.0891 23.5842 24.155 23.75 24.155H29.0275C29.5656 24.155 30.0984 24.049 30.5955 23.8431C31.0927 23.6371 31.5444 23.3353 31.9249 22.9548C32.3054 22.5743 32.6072 22.1226 32.8131 21.6255C33.019 21.1284 33.125 20.5956 33.125 20.0575C33.125 19.5194 33.019 18.9865 32.8131 18.4894C32.6072 17.9923 32.3054 17.5406 31.9249 17.1601C31.5444 16.7796 31.0927 16.4778 30.5955 16.2719C30.0984 16.0659 29.5656 15.96 29.0275 15.96H23.75Z" fill="#4360DF"/>
            <path d="M29.0275 30.405H23.75C23.5842 30.405 23.4253 30.4708 23.3081 30.5881C23.1909 30.7053 23.125 30.8642 23.125 31.03V37.9725C23.1247 38.0547 23.1406 38.1361 23.1719 38.2121C23.2032 38.288 23.2492 38.3571 23.3073 38.4152C23.3654 38.4733 23.4345 38.5193 23.5104 38.5506C23.5864 38.5819 23.6678 38.5978 23.75 38.5975H29.0275C29.5739 38.611 30.1176 38.515 30.6264 38.3152C31.1351 38.1155 31.5988 37.8159 31.9901 37.4342C32.3813 37.0525 32.6923 36.5963 32.9045 36.0926C33.1168 35.5889 33.2262 35.0479 33.2262 34.5012C33.2262 33.9546 33.1168 33.4136 32.9045 32.9099C32.6923 32.4062 32.3813 31.95 31.9901 31.5683C31.5988 31.1866 31.1351 30.887 30.6264 30.6873C30.1176 30.4875 29.5739 30.3915 29.0275 30.405Z" fill="#4360DF"/>
            <path d="M51.265 4.875C43.7775 1.58684 35.6774 -0.0747655 27.5 -1.8857e-06C19.3226 -0.0751457 11.2224 1.58648 3.73502 4.875C3.03595 5.1979 2.44495 5.71572 2.03297 6.36628C1.62099 7.01684 1.40555 7.77249 1.41252 8.5425V28.465C1.40221 34.9296 3.34679 41.2463 6.991 46.586C10.6352 51.9256 15.8087 56.0385 21.8325 58.385L24.6175 59.4625C26.4724 60.179 28.5276 60.179 30.3825 59.4625L33.1675 58.385C39.1913 56.0385 44.3648 51.9256 48.009 46.586C51.6532 41.2463 53.5978 34.9296 53.5875 28.465V8.5425C53.5945 7.77249 53.379 7.01684 52.9671 6.36628C52.5551 5.71572 51.9641 5.1979 51.265 4.875ZM16.875 12.835C16.875 12.0062 17.2043 11.2113 17.7903 10.6253C18.3764 10.0392 19.1712 9.71 20 9.71H21.8075C21.8714 9.71 21.9347 9.69737 21.9937 9.67284C22.0527 9.64831 22.1063 9.61236 22.1514 9.56706C22.1964 9.52176 22.2321 9.468 22.2563 9.40887C22.2805 9.34974 22.2928 9.2864 22.2925 9.2225V7.5C22.2925 6.6712 22.6218 5.87634 23.2078 5.29029C23.7939 4.70424 24.5887 4.375 25.4175 4.375C26.2463 4.375 27.0412 4.70424 27.6272 5.29029C28.2133 5.87634 28.5425 6.6712 28.5425 7.5V9.2225C28.5422 9.2864 28.5545 9.34974 28.5787 9.40887C28.6029 9.468 28.6386 9.52176 28.6837 9.56706C28.7288 9.61236 28.7823 9.64831 28.8413 9.67284C28.9003 9.69737 28.9636 9.71 29.0275 9.71C31.0164 9.70654 32.9641 10.2773 34.6365 11.3538C36.3089 12.4303 37.635 13.9667 38.4555 15.7785C39.276 17.5903 39.556 19.6005 39.2619 21.5675C38.9678 23.5346 38.1121 25.3749 36.7975 26.8675C36.6973 26.9816 36.6421 27.1282 36.6421 27.28C36.6421 27.4318 36.6973 27.5784 36.7975 27.6925C38.1124 29.1848 38.9684 31.025 39.2627 32.992C39.5569 34.9591 39.277 36.9692 38.4564 38.781C37.6358 40.5927 36.3095 42.129 34.6368 43.2051C32.9642 44.2813 31.0164 44.8516 29.0275 44.8475C28.9625 44.8475 28.8982 44.8605 28.8384 44.8858C28.7785 44.9111 28.7244 44.9482 28.6792 44.9948C28.6339 45.0415 28.5985 45.0967 28.575 45.1573C28.5516 45.2179 28.5405 45.2826 28.5425 45.3475V46.25C28.5425 47.0788 28.2133 47.8737 27.6272 48.4597C27.0412 49.0458 26.2463 49.375 25.4175 49.375C24.5887 49.375 23.7939 49.0458 23.2078 48.4597C22.6218 47.8737 22.2925 47.0788 22.2925 46.25V45.335C22.2945 45.2701 22.2835 45.2054 22.26 45.1448C22.2365 45.0842 22.2011 45.0289 22.1559 44.9823C22.1106 44.9357 22.0565 44.8986 21.9966 44.8733C21.9368 44.848 21.8725 44.835 21.8075 44.835H20C19.1712 44.835 18.3764 44.5058 17.7903 43.9197C17.2043 43.3337 16.875 42.5388 16.875 41.71V12.835Z" fill="#4360DF"/>
          </svg>
          <svg className="fill-current w-6 h-6 absolute top-0 right-0" width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.295 25.8751L52.7 22.1801C52.3427 21.8921 52.0638 21.5187 51.889 21.0944C51.7142 20.6701 51.6492 20.2086 51.7 19.7526L52.3375 13.8901C52.4235 13.1116 52.3334 12.3238 52.074 11.5848C51.8146 10.8458 51.3925 10.1745 50.8388 9.62061C50.2851 9.06669 49.614 8.64426 48.8752 8.38453C48.1363 8.1248 47.3485 8.03442 46.57 8.12006L40.7 8.75006C40.2439 8.80059 39.7825 8.73547 39.3583 8.5607C38.934 8.38593 38.5606 8.10715 38.2725 7.75006L34.5775 3.15756C34.0713 2.57264 33.4451 2.10348 32.7416 1.78193C32.038 1.46037 31.2735 1.29395 30.5 1.29395C29.7264 1.29395 28.9619 1.46037 28.2584 1.78193C27.5548 2.10348 26.9287 2.57264 26.4225 3.15756L22.7275 7.75006C22.4404 8.10841 22.0672 8.3881 21.6426 8.56299C21.2181 8.73787 20.7562 8.80223 20.3 8.75006L14.4375 8.12006C13.659 8.03408 12.8712 8.12413 12.1322 8.38353C11.3932 8.64294 10.722 9.06508 10.168 9.61876C9.61412 10.1724 9.19169 10.8435 8.93196 11.5824C8.67224 12.3213 8.58185 13.1091 8.66749 13.8876L9.30499 19.7501C9.35693 20.2062 9.29246 20.6681 9.11759 21.0926C8.94272 21.5171 8.66316 21.8903 8.30499 22.1776L3.70499 25.8751C3.09484 26.3652 2.60246 26.9859 2.26414 27.6916C1.92582 28.3973 1.75018 29.17 1.75018 29.9526C1.75018 30.7352 1.92582 31.5078 2.26414 32.2135C2.60246 32.9192 3.09484 33.54 3.70499 34.0301L8.29999 37.7251C8.65798 38.0124 8.93741 38.3857 9.11226 38.8102C9.28711 39.2346 9.35169 39.6964 9.29999 40.1526L8.66249 46.0151C8.57652 46.7935 8.66656 47.5813 8.92597 48.3203C9.18537 49.0593 9.60751 49.7306 10.1612 50.2845C10.7149 50.8384 11.386 51.2609 12.1248 51.5206C12.8637 51.7803 13.6515 51.8707 14.43 51.7851L20.295 51.1476C20.7511 51.0968 21.2126 51.1618 21.6368 51.3366C22.0611 51.5114 22.4345 51.7903 22.7225 52.1476L26.4225 56.7501C26.9126 57.3602 27.5334 57.8526 28.2391 58.1909C28.9448 58.5292 29.7174 58.7049 30.5 58.7049C31.2826 58.7049 32.0552 58.5292 32.7609 58.1909C33.4666 57.8526 34.0874 57.3602 34.5775 56.7501L38.2725 52.1551C38.5606 51.798 38.934 51.5192 39.3583 51.3444C39.7825 51.1696 40.2439 51.1045 40.7 51.1551L46.5625 51.7926C47.3409 51.8785 48.1288 51.7885 48.8678 51.5291C49.6068 51.2697 50.278 50.8475 50.8319 50.2938C51.3859 49.7402 51.8083 49.0691 52.068 48.3302C52.3277 47.5913 52.4181 46.8036 52.3325 46.0251L51.695 40.1601C51.6428 39.7039 51.7072 39.2419 51.8821 38.8174C52.0569 38.3929 52.3366 38.0196 52.695 37.7326L57.29 34.0376C57.9001 33.5475 58.3925 32.9267 58.7308 32.221C59.0692 31.5153 59.2448 30.7427 59.2448 29.9601C59.2448 29.1775 59.0692 28.4048 58.7308 27.6991C58.3925 26.9934 57.9001 26.3726 57.29 25.8826L57.295 25.8751ZM31.5 37.6201C31.1159 38.1203 30.6302 38.5334 30.0748 38.8323C29.5195 39.1311 28.907 39.3088 28.278 39.3537C27.6489 39.3985 27.0175 39.3096 26.4253 39.0926C25.8331 38.8757 25.2937 38.5357 24.8425 38.0951L18.7325 32.0001C18.4937 31.7694 18.3033 31.4936 18.1722 31.1886C18.0412 30.8836 17.9722 30.5555 17.9694 30.2236C17.9665 29.8916 18.0297 29.5624 18.1554 29.2552C18.2811 28.9479 18.4668 28.6688 18.7015 28.4341C18.9362 28.1993 19.2154 28.0137 19.5226 27.888C19.8298 27.7623 20.159 27.699 20.491 27.7019C20.8229 27.7048 21.151 27.7738 21.456 27.9048C21.761 28.0358 22.0369 28.2263 22.2675 28.4651L27.895 34.0926L37.6675 21.0651C38.0653 20.5346 38.6576 20.184 39.3139 20.0902C39.6389 20.0438 39.9699 20.0618 40.2879 20.1433C40.606 20.2248 40.9048 20.3681 41.1675 20.5651C41.4301 20.762 41.6514 21.0088 41.8187 21.2913C41.9859 21.5738 42.0959 21.8865 42.1424 22.2115C42.1888 22.5365 42.1707 22.8675 42.0893 23.1855C42.0078 23.5035 41.8645 23.8024 41.6675 24.0651L31.5 37.6201Z" fill="#4360DF"/>
          </svg>
        </span>
        <p className="uppercase text-sm mt-4">Sign the Status Principles</p>
        <h1 className="font-bold text-2xl">Join the State of Us</h1>
        <p className="mt-4 text-gray-700">By cryptographically signing the Status Principles, you commit to the values of our collective mission.</p>
        <p className="text-gray-700">Once you have signed The Principles and joined The Status of US, a unique badge will be minted and sent to your Status wallet.</p>
        <a href="/started" title="" className="bg-blue-900 px-4 border-2 py-3 rounded text-white text-center block hover:bg-blue-800 cursor-pointer mt-4">Get started</a>
      </div>
    </div>
  )
}