insertIcons();

function insertIcons() {
  const elements = document.querySelectorAll('[data-icon]');

  elements.forEach((el) => {
    switch (el.dataset.icon) {
      case 'ua-flag':
        el.innerHTML = uaFlagIcon();
        break;
      case 'user':
        el.innerHTML = userIcon();
        break;
      case 'logo':
        el.innerHTML = logoIcon();
        break;
      case 'lessons':
        el.innerHTML = lessonsIcon();
        break;
      case 'courses':
        el.innerHTML = coursesIcon();
        break;
      case 'saved':
        el.innerHTML = savedIcon();
        break;
      case 'paw':
        el.innerHTML = pawIcon();
        break;
      case 'external-link':
        el.innerHTML = externalLinkIcon();
        break;
    }
  });
}

function uaFlagIcon() {
  return `
    <svg
      width="72"
      height="51"
      viewBox="0 0 72 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C6 7 25.8 7 41 3C56.2 -1 67.67 1.33 71.5 3V49C66.33 46.67 52.3 43.2 37.5 48C22.7 52.8 6.33 50.67 0 49V4V4Z"
        fill="#E9CE01"
      />
      <path
        d="M41 3C25.8 7 6 7 0 4V26.5C13 30.5 23 30 42 25C57.2 21 68 24 71.5 26V3C67.67 1.33 56.2 -1 41 3Z"
        fill="#357DDE"
      />
    </svg>
  `;
}

function userIcon() {
  return `
  <svg
    width="22"
    height="25"
    viewBox="0 0 22 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 23.5V21C21 19.6739 20.4732 18.4021 19.5355 17.4645C18.5979 16.5268 17.3261 16 16 16H6C4.67392 16 3.40215 16.5268 2.46447 17.4645C1.52678 18.4021 1 19.6739 1 21V23.5"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 11C13.7614 11 16 8.76142 16 6C16 3.23858 13.7614 1 11 1C8.23858 1 6 3.23858 6 6C6 8.76142 8.23858 11 11 11Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  `;
}

function logoIcon() {
  return `
    <svg
      width="64"
      height="63"
      viewBox="0 0 64 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.9584 23.2885C23.9584 23.2885 31.5126 17.2502 40.9944 24.2415L49.1902 38.382C49.1902 38.382 47.5789 47.7573 47.0999 47.7573C46.6209 47.7573 44.3679 50.7772 42.6014 51.4174C42.6014 51.4174 36.4945 55.5496 34.2518 55.3903C34.2518 55.3903 29.1088 55.8668 28.3061 55.3903C27.5033 54.9137 23.8061 54.5951 20.7519 51.1002C17.6977 47.6052 16.4541 45.8961 16.4541 45.8961L19.4673 24.8817L23.9584 23.2885Z"
        fill="white"
      />
      <path
        d="M50.6086 31.4558L50.5471 31.4863C50.5302 31.4939 50.5145 31.5036 50.5002 31.5152C50.4108 31.5963 50.4387 31.7571 50.5324 31.9671C50.8488 32.6667 51.9328 33.9108 52.0251 34.5221C52.2199 35.8097 52.2184 35.449 52.5934 36.9959C52.8264 37.9576 50.2937 35.3114 50.4328 36.2094C50.572 37.1074 51.6472 38.5442 51.5695 39.251C51.5109 39.7811 50.2951 39.0193 49.9773 39.251C49.6257 39.5045 50.1691 40.7486 50.0915 41.2787C49.945 42.2926 49.5774 41.9073 49.5275 43.3065C49.5275 43.4093 49.5275 43.5223 49.5275 43.6483C49.5324 43.873 49.5108 44.0976 49.4631 44.3174C49.4297 44.4744 49.3627 44.6225 49.2668 44.7519C49.0852 44.9909 48.8391 45.1242 48.6179 45.563C47.9367 46.9086 47.5339 47.0114 47.2527 47.2489C47.2527 47.2489 47.2175 47.304 46.7297 47.9152C46.4529 48.2599 46.0339 48.7842 45.3953 49.5707C45.3601 49.6155 45.3146 49.6513 45.2626 49.6752C45.2106 49.6991 45.1536 49.7104 45.0963 49.7081C45.039 49.7059 44.983 49.6901 44.9331 49.6622C44.8832 49.6342 44.8408 49.5949 44.8093 49.5475C43.7986 48.0006 43.2669 46.348 43.2669 45.2053C43.2669 41.945 38.8313 39.3582 34.6243 35.31C30.9476 31.773 32.9998 23.3435 33.5755 21.2694C33.659 20.9696 33.7132 20.803 33.7132 20.803L38.8841 22.4716L38.9456 22.4904L39.0115 22.3934C39.0115 22.3934 51.9606 30.7867 50.6086 31.4558Z"
        fill="#D38A3C"
      />
      <path
        d="M28.8224 34.635C24.6154 38.6832 20.1798 41.2686 20.1798 44.5318C20.1798 45.6702 20.1974 49.3621 18.4426 48.7929C18.2096 48.7161 17.9592 48.2541 17.801 47.9311C17.7482 47.8254 17.7057 47.7341 17.6779 47.6791C17.1769 46.6898 17.4494 47.5676 17.1096 47.0056C16.8166 46.5175 16.5397 46.5551 15.4016 44.7548C15.1089 44.2718 14.8888 43.7493 14.7482 43.2036C14.3205 41.6336 14.3454 39.9028 14.1521 39.1337C14.0378 38.6832 14.0861 38.9077 13.5837 39.0207C13.4284 39.0555 12.7165 39.7261 12.4455 39.2466C11.9314 38.3342 13.7771 37.1871 13.4709 36.3209C13.2805 35.7908 11.3689 37.2624 11.3088 36.7728C11.1037 35.042 12.7839 33.4604 12.8308 32.3741C12.8308 32.2886 13.2512 31.8208 13.4328 31.5587C13.4885 31.4776 13.5222 31.4138 13.5134 31.3936C13.5046 31.3733 12.3884 30.7592 12.3884 30.7577C12.3371 30.6549 11.6955 29.9683 10.9382 29.1008C9.89965 27.9131 8.64282 26.3793 8.37476 25.5204C7.91919 24.0575 6.28884 21.0913 5.96364 19.3228C4.67752 12.3315 4.99978 13.2845 4.99978 13.2845L5.80251 8.36003L7.54713 7.491L8.05689 7.24188L11.8406 9.03787L12.0676 9.1465L16.0856 12.0056L25.4064 22.0153L24.047 22.8264L24.4 22.6961L29.7613 20.7205L29.8463 20.6886V20.706C29.8682 20.7697 29.9386 20.9957 30.0367 21.3621C30.6666 23.6592 32.3731 31.2241 28.8224 34.635Z"
        fill="#D38A3C"
      />
      <path
        d="M11.9989 25.238C9.22071 22.1897 7.76368 18.1851 7.94128 14.0855C8.0614 11.5943 8.76745 9.80842 10.9222 11.4523C14.6297 14.2825 17.8509 16.5216 20.1507 18.4045C20.385 18.5957 18.5393 18.7739 18.9978 19.3938C19.471 20.0397 17.4964 20.2845 17.7381 20.874C17.8977 21.2651 20.782 21.1202 20.6677 21.2926L18.324 25.8347C18.2566 26.0056 18.1643 27.6568 18.0721 27.8161C17.8143 28.2607 17.0672 28.7343 16.7259 29.1674C16.4944 29.4571 16.3465 29.5903 16.0828 29.3267L11.9989 25.238Z"
        fill="white"
      />
      <path
        d="M18.3868 27.777C18.3004 27.7993 18.2086 27.7872 18.1311 27.7433C18.0536 27.6994 17.9965 27.6273 17.9722 27.5423C17.4537 25.7073 19.3243 22.6642 20.1197 21.4852L16.421 21.1463C16.3422 21.1391 16.2683 21.105 16.2122 21.0499C16.156 20.9948 16.1209 20.9221 16.1129 20.8442C16.105 20.7664 16.1246 20.6882 16.1685 20.6231C16.2124 20.558 16.2778 20.51 16.3536 20.4873L18.8965 19.7211L17.9546 19.5068C17.8834 19.4911 17.8191 19.4532 17.7713 19.3986C17.7236 19.344 17.6949 19.2757 17.6894 19.2037C17.684 19.1317 17.7022 19.0599 17.7412 18.9989C17.7803 18.938 17.8382 18.891 17.9063 18.8651C18.1304 18.7768 18.3633 18.7 18.5904 18.6247C18.854 18.5363 19.1236 18.448 19.377 18.335C18.0586 17.6673 16.8648 16.6288 15.794 15.699C15.5816 15.5136 15.3721 15.3325 15.1685 15.1587C14.7994 14.8459 14.4361 14.5243 14.0816 14.2144C13.0987 13.3454 12.17 12.5357 11.1007 11.7985C10.1881 11.1699 9.49815 10.8991 9.04991 10.9918C8.95358 11.012 8.86288 11.0528 8.78419 11.1113C8.70549 11.1699 8.6407 11.2448 8.59435 11.3307C8.2384 11.91 8.24865 12.7443 8.25744 13.4163V13.4917C8.28381 15.7569 8.75695 17.9816 9.16564 19.6617C9.17673 19.7048 9.17897 19.7497 9.17225 19.7937C9.16552 19.8376 9.14996 19.8798 9.12648 19.9178C9.103 19.9557 9.07207 19.9886 9.03552 20.0145C8.99898 20.0405 8.95755 20.0589 8.91368 20.0687C8.82569 20.0896 8.7329 20.0752 8.65571 20.0284C8.57852 19.9817 8.52325 19.9066 8.50207 19.8196C8.08459 18.1033 7.60266 15.8322 7.57483 13.5003V13.425C7.56604 12.6661 7.55432 11.7232 8.01428 10.9802C8.109 10.8154 8.23802 10.6723 8.39281 10.5604C8.5476 10.4486 8.72464 10.3705 8.91222 10.3313C9.77794 10.1517 10.8004 10.7658 11.4947 11.2452C12.5581 12.0052 13.5746 12.8274 14.5386 13.7075C14.8902 14.016 15.2535 14.3346 15.6182 14.6446C15.8233 14.8198 16.0342 15.0023 16.2481 15.1891C17.4522 16.2334 18.8174 17.4182 20.2823 17.9975C20.3403 18.02 20.3911 18.0578 20.4289 18.1068C20.4667 18.1558 20.4901 18.2142 20.4966 18.2755C20.5031 18.3368 20.4924 18.3987 20.4657 18.4544C20.439 18.5101 20.3974 18.5575 20.3452 18.5914C20.0065 18.8048 19.6425 18.9761 19.2613 19.1012L20.2969 19.3373C20.3702 19.3539 20.4359 19.3939 20.4839 19.4513C20.5318 19.5086 20.5592 19.58 20.5619 19.6543C20.5645 19.7286 20.5423 19.8017 20.4986 19.8623C20.455 19.9228 20.3923 19.9674 20.3203 19.9891L18.2139 20.6249L20.7642 20.8566C20.8242 20.8621 20.8817 20.8832 20.9308 20.9178C20.9799 20.9524 21.0188 20.9992 21.0437 21.0535C21.0685 21.1078 21.0784 21.1677 21.0723 21.227C21.0661 21.2863 21.0442 21.3429 21.0088 21.3911C20.1914 22.5005 18.1729 25.7362 18.6314 27.3497C18.6557 27.4358 18.6446 27.5278 18.6004 27.6058C18.5562 27.6837 18.4825 27.7411 18.3955 27.7654L18.3868 27.777Z"
        fill="black"
      />
      <path
        d="M31.6399 44.4405C29.9671 44.5071 27.1561 41.8971 27.4241 39.8984C27.66 38.1792 29.5891 37.8026 31.5549 37.8026C34.1916 37.7953 35.529 38.2371 35.6902 39.7912C35.8791 41.6017 33.7317 44.3565 31.6399 44.4405Z"
        fill="black"
      />
      <path
        d="M39.1655 44.7259C38.5093 46.5218 37.5322 47.5951 36.2622 47.9123C35.9962 47.9798 35.7224 48.0129 35.4478 48.0108H35.3745C35.1458 48.0058 34.9179 47.9816 34.6934 47.9384C33.6577 47.737 32.7583 47.1823 32.2647 46.826C32.19 46.7724 32.1182 46.7203 32.0669 46.6812C31.938 46.7623 31.8106 46.8376 31.6831 46.91C30.5918 47.5227 29.5577 47.8196 28.5879 47.7964C28.3564 47.7917 28.1256 47.768 27.898 47.7254L27.7515 47.6965C27.605 47.6632 27.4586 47.6226 27.3267 47.5763C24.8643 46.7376 23.8697 43.8641 23.8302 43.7424C23.8159 43.7004 23.8102 43.656 23.8133 43.6118C23.8164 43.5675 23.8283 43.5244 23.8483 43.4847C23.8683 43.445 23.896 43.4096 23.9299 43.3805C23.9637 43.3514 24.003 43.3292 24.0455 43.3151C24.088 43.3011 24.1329 43.2954 24.1776 43.2985C24.2224 43.3016 24.266 43.3133 24.3062 43.3331C24.3463 43.3529 24.3821 43.3803 24.4115 43.4137C24.4409 43.4472 24.4634 43.486 24.4776 43.528C24.4923 43.5715 25.4151 46.2148 27.5538 46.939C27.6604 46.9753 27.7689 47.0058 27.879 47.0302L27.9712 47.049C28.1664 47.0905 28.365 47.1142 28.5645 47.12C29.5782 47.1548 30.6988 46.7753 31.9014 45.9816L31.9292 45.9642C31.9839 45.9274 32.0495 45.9099 32.1155 45.9146C32.1814 45.9194 32.2438 45.946 32.2925 45.9903L32.3159 46.012C32.3321 46.025 33.4527 46.994 34.7798 47.2678C34.9323 47.3004 35.087 47.3222 35.2427 47.3329C35.3174 47.3329 35.3892 47.3402 35.4639 47.3402C35.6778 47.3413 35.891 47.315 36.0981 47.262C37.1235 47.0013 37.9438 46.0772 38.5195 44.51C38.5454 44.4344 38.5968 44.3699 38.6651 44.3272C38.7333 44.2845 38.8143 44.2662 38.8945 44.2754C38.9448 44.2827 38.9927 44.3009 39.035 44.3288C39.0772 44.3568 39.1125 44.3937 39.1385 44.4368C39.1645 44.48 39.1804 44.5283 39.185 44.5783C39.1897 44.6283 39.183 44.6787 39.1655 44.7259Z"
        fill="black"
      />
      <path
        d="M40.9489 24.2907C40.9164 24.3256 40.8771 24.3535 40.8332 24.3727C40.7894 24.3918 40.742 24.4019 40.6941 24.4023C40.6096 24.4018 40.5285 24.3697 40.467 24.3125C40.0625 23.9506 39.6348 23.6149 39.1867 23.3073C39.0007 23.1784 38.8103 23.0538 38.6184 22.9379C37.0893 22.0058 35.3635 21.4348 33.575 21.2694C32.3972 21.1595 31.2104 21.1911 30.0403 21.3636C29.7591 21.4012 29.4749 21.449 29.1863 21.5084C27.5835 21.8205 26.0248 22.3234 24.5443 23.006C24.3099 23.1132 24.1048 23.2117 23.9334 23.2957C23.5482 23.4883 23.3299 23.6172 23.3241 23.6216C23.2464 23.6677 23.1533 23.6814 23.0654 23.6596C22.9775 23.6379 22.9019 23.5825 22.8553 23.5057C22.8087 23.4289 22.7949 23.3369 22.8168 23.25C22.8388 23.1631 22.8948 23.0883 22.9725 23.0422C23.0033 23.0248 23.2377 22.8844 23.6434 22.6801L23.8968 22.5541C24.0052 22.502 24.1239 22.444 24.2528 22.3861C25.7788 21.6833 27.3852 21.1653 29.0369 20.8436C29.2801 20.7987 29.5203 20.7567 29.7605 20.7219L29.8499 20.7074C33.2395 20.2193 36.3333 20.7842 38.9494 22.3557L39.011 22.3934C39.1824 22.4962 39.3508 22.6048 39.5207 22.7192C40.0133 23.0514 40.4817 23.4173 40.9226 23.8142C40.9896 23.8742 41.03 23.9579 41.035 24.0471C41.0399 24.1364 41.009 24.2239 40.9489 24.2907Z"
        fill="black"
      />
      <path
        d="M43.2562 51.2001C40.2547 53.6623 37.183 55.1947 34.1302 55.7567C33.2521 55.9194 32.3606 56.0018 31.4672 56.0029C29.9014 56.0009 28.3466 55.745 26.8647 55.2454C22.851 53.9027 20.4765 51.2725 20.3769 51.1639C20.3451 51.1309 20.3203 51.092 20.3041 51.0494C20.2879 51.0067 20.2805 50.9613 20.2826 50.9158C20.2846 50.8703 20.2959 50.8257 20.3158 50.7846C20.3357 50.7435 20.3638 50.7069 20.3985 50.6768C20.4331 50.6468 20.4735 50.624 20.5173 50.6098C20.5611 50.5957 20.6073 50.5904 20.6532 50.5944C20.6991 50.5983 20.7437 50.6114 20.7843 50.6329C20.825 50.6543 20.8608 50.6837 20.8896 50.7192C22.6234 52.485 24.7552 53.8201 27.1108 54.6153C32.2655 56.3244 37.5521 55.0006 42.8211 50.6801C42.8908 50.6225 42.9809 50.5946 43.0714 50.6026C43.1619 50.6106 43.2455 50.6539 43.3038 50.7228C43.362 50.7918 43.3902 50.8808 43.3821 50.9703C43.374 51.0598 43.3303 51.1424 43.2605 51.2001H43.2562Z"
        fill="black"
      />
      <path
        d="M29.5298 41.5264C30.3355 41.7581 31.1412 41.0788 30.9786 40.2648C30.9666 40.1129 30.8945 39.9717 30.778 39.872C30.6614 39.7722 30.5098 39.7218 30.356 39.7318C29.1841 39.7188 28.5982 41.1976 29.2427 41.4337C29.335 41.467 29.4317 41.4989 29.5298 41.5264Z"
        fill="#282828"
      />
      <path
        d="M33.4785 41.5684C32.6538 41.7133 31.9243 40.9615 32.1602 40.1678C32.2495 39.8782 32.4458 39.6652 32.834 39.7C34.0059 39.8043 34.438 41.3352 33.7671 41.5047C33.6777 41.5337 33.5781 41.5539 33.4785 41.5684Z"
        fill="#282828"
      />
      <path
        d="M9.81469 26.3069C10.6687 27.4322 10.9866 28.3491 10.9324 29.0935C9.89379 27.9059 8.63696 26.372 8.3689 25.5131C7.91333 24.0503 6.28298 21.084 5.95778 19.3155C4.67166 12.3242 4.99392 13.2773 4.99392 13.2773L5.79665 8.35279L7.54127 7.48376L8.05689 7.24188L11.8406 9.03787L12.1965 9.52742C12.1965 9.52742 8.69263 7.7155 7.8899 9.1465C7.08717 10.5775 5.47878 20.5872 9.81469 26.3069Z"
        fill="#BC6F2F"
      />
      <path
        d="M26.0832 22.0834C25.8826 22.2442 25.7082 22.389 25.5632 22.5179C25.4299 22.3542 25.282 22.1775 25.1238 21.9936C23.6165 20.1918 21.2405 17.5253 18.6624 14.9791C13.8094 10.1922 10.0873 7.66336 7.90173 7.67639C7.59456 7.66239 7.28889 7.72655 7.01396 7.86272C6.73903 7.9989 6.50403 8.20254 6.33143 8.45417C5.09511 10.1922 4.9999 13.5235 6.04725 18.3828C7.18689 23.6607 9.83971 28.0637 13.5765 31.0575C13.7581 31.2024 13.9412 31.3472 14.1273 31.4833C13.9808 31.6499 13.8343 31.8281 13.6878 32.0149C13.5003 31.8701 13.3172 31.7354 13.1356 31.5905C11.8239 30.5375 10.649 29.3281 9.63756 27.9899C7.61756 25.3277 6.1454 22.0515 5.38955 18.5233C4.28946 13.4699 4.42276 9.95469 5.7748 8.06021C6.0092 7.71971 6.32715 7.44357 6.69888 7.25764C7.0706 7.07171 7.48396 6.98207 7.90027 6.99711C12.6493 6.98117 21.8792 17.0792 25.6453 21.5576C25.72 21.6489 25.7917 21.7372 25.8664 21.8227C25.9411 21.9081 26.0115 21.9994 26.0832 22.0834Z"
        fill="black"
      />
      <path
        d="M14.7478 43.2036C14.3201 41.6335 14.345 39.9027 14.1516 39.1336C14.0373 38.6832 14.0857 38.9077 13.5832 39.0207C13.428 39.0554 12.7161 39.726 12.4451 39.2466C11.9309 38.3341 13.7766 37.187 13.4705 36.3209C13.28 35.7908 11.3684 37.2623 11.3084 36.7728C11.1033 35.042 12.7834 33.4604 12.8303 32.3741C12.8303 32.2886 13.2507 31.8208 13.4324 31.5586C13.488 31.4775 13.5217 31.4138 13.5129 31.3935C13.5041 31.3732 14.156 31.0778 14.156 31.0749C14.156 31.072 14.0622 30.9967 14.156 30.5984L15.4421 29.9625C15.4421 29.9625 13.6741 33.6168 13.6741 34.0933C13.6741 34.5698 15.2854 34.4105 15.2854 34.4105C15.2854 34.4105 13.1965 37.9069 14.1604 37.7417C15.1242 37.5766 15.2854 37.9011 15.2854 37.9011C15.2854 37.9011 14.8035 43.9393 15.9284 45.211C16.2214 45.5514 15.5945 43.4512 14.7478 43.2036Z"
        fill="#BC6F2F"
      />
      <path
        d="M18.0276 47.8355C17.9668 47.8945 17.8857 47.9286 17.8006 47.9311C17.7963 47.9324 17.7917 47.9324 17.7874 47.9311C17.7421 47.9311 17.6972 47.9222 17.6554 47.9048C17.6136 47.8874 17.5758 47.8618 17.5442 47.8297C14.0477 44.3536 13.7693 40.6573 13.7986 39.3581L12.7645 39.6145C12.6568 39.6427 12.5434 39.6413 12.4366 39.6104C12.3297 39.5795 12.2334 39.5203 12.158 39.4393C12.0913 39.3649 12.0462 39.274 12.0277 39.1763C12.0091 39.0786 12.0177 38.9778 12.0526 38.8845L12.9197 36.599L12.2591 37.0335C12.1362 37.114 11.9928 37.1582 11.8454 37.161C11.6981 37.1638 11.553 37.1251 11.4271 37.0494C11.3152 36.9845 11.2246 36.889 11.1661 36.7744C11.1077 36.6599 11.0838 36.5311 11.0975 36.4035C11.2753 34.9103 11.8123 33.4809 12.6634 32.235L12.7894 32.0525C12.8773 31.9251 12.9681 31.802 13.0618 31.6818L13.1351 31.5862C13.2816 31.3979 13.428 31.2212 13.5745 31.0532C14.3751 30.1387 15.314 29.3521 16.3577 28.7213C16.3963 28.6931 16.4404 28.6734 16.4873 28.6634C16.5341 28.6533 16.5826 28.6532 16.6295 28.6629C16.6764 28.6727 16.7207 28.6922 16.7594 28.7201C16.7982 28.748 16.8305 28.7836 16.8543 28.8248C16.8781 28.8659 16.8929 28.9116 16.8976 28.9587C16.9023 29.0059 16.8969 29.0535 16.8816 29.0984C16.8664 29.1434 16.8418 29.1846 16.8093 29.2195C16.7768 29.2543 16.7372 29.282 16.6932 29.3006C15.8558 29.8184 15.0897 30.441 14.4139 31.1531C14.3157 31.2559 14.2161 31.3617 14.1209 31.4732C13.9744 31.6398 13.8279 31.8179 13.6815 32.0047C13.6507 32.041 13.6214 32.0786 13.5921 32.1177C13.4573 32.2915 13.3255 32.4755 13.1995 32.6681C12.4281 33.8044 11.9383 35.1044 11.7699 36.4628C11.7856 36.4734 11.8043 36.4791 11.8233 36.4791C11.8424 36.4791 11.861 36.4734 11.8768 36.4628L13.3768 35.4852C13.4397 35.4407 13.5156 35.4177 13.5929 35.4195C13.6703 35.4213 13.7449 35.4479 13.8057 35.4952C13.8664 35.5426 13.91 35.6081 13.9299 35.6821C13.9497 35.756 13.9448 35.8343 13.9158 35.9052L12.7703 38.9193L14.5706 38.4688L14.5018 38.9613C14.5018 39.0047 14.0228 43.3803 18.0174 47.3619C18.081 47.424 18.1176 47.5082 18.1195 47.5966C18.1214 47.685 18.0885 47.7707 18.0276 47.8355Z"
        fill="black"
      />
      <path
        d="M50.4326 36.2094C50.5674 37.0915 51.6469 38.5442 51.5693 39.251C51.5107 39.7811 50.2949 39.0192 49.977 39.251C49.6255 39.5045 50.1689 40.7486 50.0913 41.2787C49.9448 42.2926 49.5771 41.9073 49.5273 43.3064C48.896 43.6149 48.8257 44.7809 49.0293 44.2783C49.6723 42.6851 48.0654 38.0821 48.0654 37.7606C48.0654 37.4391 49.6767 37.7606 49.6767 37.7606L48.8726 34.5829C48.8726 34.5829 50.6406 35.378 50.9614 35.0594C51.2822 34.7407 49.0718 30.6838 49.0308 30.5984L50.4956 31.5152C50.4062 31.5963 50.4341 31.7571 50.5278 31.9671C50.8442 32.6667 51.9282 33.9108 52.0205 34.522C52.2153 35.8096 52.2138 35.449 52.5888 36.9959C52.8261 37.9576 50.2934 35.3114 50.4326 36.2094Z"
        fill="#BC6F2F"
      />
      <path
        d="M50.8293 31.8947C50.7561 31.7991 50.6828 31.7049 50.6096 31.6137C50.5363 31.5224 50.4704 31.4442 50.4001 31.3617C49.5689 30.3832 48.5824 29.5447 47.4792 28.8791C47.4402 28.8555 47.3968 28.8399 47.3515 28.8332C47.3062 28.8265 47.2601 28.8289 47.2158 28.8402C47.1715 28.8515 47.1299 28.8715 47.0936 28.8991C47.0573 28.9266 47.0269 28.961 47.0043 29.0003C46.9817 29.0397 46.9673 29.0831 46.9621 29.1281C46.9568 29.173 46.9607 29.2185 46.9736 29.262C46.9865 29.3054 47.008 29.3458 47.037 29.3808C47.066 29.4158 47.1018 29.4447 47.1423 29.4657C48.1615 30.0949 49.0757 30.8767 49.8523 31.7831C49.9987 31.9497 50.1452 32.1264 50.2785 32.3118C51.2692 33.5855 51.8914 35.1014 52.0788 36.6975L50.4016 35.5938C50.343 35.5554 50.2736 35.5363 50.2034 35.5393C50.1331 35.5423 50.0657 35.5672 50.0107 35.6105C49.9556 35.6538 49.9159 35.7132 49.8972 35.7802C49.8785 35.8472 49.8817 35.9184 49.9065 35.9834L51.0783 39.0714L49.1887 38.5992L49.3484 39.1612C49.3615 39.2061 50.5422 43.5063 46.5505 47.4821C46.5187 47.5134 46.4935 47.5507 46.4763 47.5917C46.4591 47.6327 46.4502 47.6767 46.4502 47.7211C46.4502 47.7655 46.4591 47.8094 46.4763 47.8504C46.4935 47.8914 46.5187 47.9287 46.5505 47.96C46.5979 48.0054 46.6573 48.0365 46.7219 48.0498C46.7445 48.0551 46.7676 48.058 46.7908 48.0585C46.8815 48.0576 46.9685 48.0223 47.0339 47.96C47.9454 47.0711 48.6986 46.0364 49.2619 44.8996C49.3322 44.7548 49.3982 44.6099 49.4582 44.4651C50.1313 42.9147 50.3603 41.2111 50.1203 39.5406L51.1838 39.8086C51.281 39.8339 51.3834 39.8324 51.4798 39.804C51.5762 39.7756 51.6628 39.7216 51.7302 39.6478C51.7922 39.5808 51.8343 39.4981 51.8516 39.4088C51.8689 39.3196 51.8609 39.2273 51.8283 39.1423L50.6564 36.3759L52.07 37.5187C52.1433 37.5663 52.2284 37.593 52.316 37.5958C52.4037 37.5986 52.4904 37.5774 52.5666 37.5346C52.6385 37.4945 52.6979 37.4356 52.7382 37.3643C52.7785 37.293 52.7982 37.2121 52.7951 37.1305C52.6867 35.2296 52.0016 33.4051 50.8293 31.8947Z"
        fill="black"
      />
      <path
        d="M56.2689 40.963L53.4506 36.8105C53.1825 36.4689 52.8887 36.1479 52.5717 35.8502L38.7451 22.9712L46.5014 21.6228L56.1268 29.6135L57.7381 36.0139L56.2689 40.963Z"
        fill="#D38A3C"
      />
      <path
        d="M41.6201 24.5963C41.6201 24.5963 53.3388 28.0724 56.0927 39.041L55.8099 27.9536L52.6811 24.7339C51.7352 23.7627 50.5321 23.0742 49.2092 22.7471C47.8863 22.42 46.497 22.4676 45.2002 22.8843L41.4736 24.4587L41.6201 24.5963Z"
        fill="white"
      />
      <path
        d="M38.8369 22.7135C39.4917 22.0009 40.1465 21.6199 41.0268 21.2086C44.7607 19.4705 55.347 16.1682 58.1727 26.0447C60.8885 35.533 57.9178 39.4726 56.7386 40.8746C56.5306 41.1209 56.5921 40.7037 56.5614 40.3836C56.3871 38.0112 54.8036 31.5283 52.06 28.3853C48.5048 24.3067 41.3271 24.4515 41.3271 24.4515L38.7021 22.909L38.8369 22.7135Z"
        fill="#BC6F2F"
      />
      <path
        d="M56.8356 41.257C56.7983 41.2569 56.7611 41.254 56.7242 41.2483C54.8756 40.9427 52.8673 37.1074 52.5729 36.5237C52.1525 35.9863 45.76 27.8334 43.1819 26.892C43.1321 26.8796 43.0856 26.857 43.0453 26.8256C43.005 26.7943 42.9717 26.7549 42.9478 26.7101C42.9238 26.6653 42.9097 26.616 42.9062 26.5654C42.9027 26.5148 42.91 26.464 42.9277 26.4164C42.9453 26.3688 42.9729 26.3254 43.0086 26.289C43.0442 26.2526 43.0873 26.224 43.1348 26.205C43.1824 26.1861 43.2335 26.1772 43.2847 26.1791C43.336 26.1809 43.3863 26.1933 43.4323 26.2156C46.2814 27.2526 52.8922 35.7532 53.172 36.1138L53.2086 36.1732C53.7799 37.3087 55.5348 40.2924 56.8224 40.5328C57.2193 40.3648 58.2638 37.9561 58.5523 33.8876C58.6988 31.9048 58.6812 28.9632 57.8302 26.2199C57.0026 23.5477 55.5729 21.701 53.5822 20.732C50.3039 19.1388 46.863 19.0592 43.3576 20.5047C41.7701 21.1563 40.3037 22.0653 39.0188 23.1943C38.9842 23.2273 38.9433 23.2532 38.8986 23.2706C38.8538 23.288 38.806 23.2965 38.7579 23.2956C38.7098 23.2947 38.6624 23.2845 38.6183 23.2655C38.5742 23.2465 38.5344 23.2191 38.501 23.1849C38.4676 23.1506 38.4414 23.1102 38.4238 23.066C38.4062 23.0217 38.3976 22.9745 38.3985 22.9269C38.3994 22.8794 38.4097 22.8325 38.4289 22.7889C38.4482 22.7453 38.4759 22.7059 38.5105 22.6729C39.8512 21.4829 41.3867 20.5268 43.0515 19.8456C45.6076 18.7869 49.5656 17.9628 53.9059 20.0817C57.5841 21.8734 58.8072 26.0201 59.1866 29.1703C59.6349 32.9042 59.0914 36.8612 58.3546 39.1264C57.8873 40.5545 57.3893 41.257 56.8356 41.257Z"
        fill="black"
      />
      <path
        d="M56.5617 41.1802C56.4687 41.1804 56.3791 41.1454 56.3113 41.0824C56.2435 41.0194 56.2026 40.9331 56.197 40.8413C55.7766 34.4033 53.8327 29.7916 50.4182 27.1339C46.365 23.9779 41.5853 24.7556 41.5369 24.7643C41.4412 24.7809 41.3427 24.7591 41.2632 24.7038C41.1836 24.6485 41.1296 24.5643 41.1129 24.4696C41.0962 24.3749 41.1182 24.2775 41.1741 24.1989C41.23 24.1203 41.3152 24.0668 41.411 24.0503C41.619 24.0155 46.5452 23.203 50.8621 26.5574C54.4524 29.347 56.4929 34.1368 56.9279 40.795C56.934 40.8909 56.9013 40.9854 56.837 41.0576C56.7728 41.1298 56.6822 41.1739 56.5852 41.1802H56.5617Z"
        fill="black"
      />
      <path
        d="M28.7683 31.8527C28.7244 33.6487 26.7893 35.2578 24.948 34.3873C23.347 33.6284 22.8182 31.4008 23.9651 30.0422C25.2513 28.5229 27.8147 29.0153 28.572 30.8113C28.7114 31.1407 28.7783 31.4957 28.7683 31.8527Z"
        fill="#BC6F2F"
      />
      <path
        d="M39.3824 32.0091C39.3751 34.1295 36.9669 35.4403 35.1476 34.2845C33.5993 33.3011 33.4718 31.0199 34.9074 29.8728C35.3558 29.5286 35.8982 29.3249 36.4646 29.288C37.0311 29.2511 37.5958 29.3826 38.0861 29.6657C38.4889 29.9118 38.8203 30.2571 39.0475 30.668C39.2748 31.0788 39.3902 31.5409 39.3824 32.0091Z"
        fill="#BC6F2F"
      />
      <path
        d="M27.3586 32.9462C26.4401 33.7298 24.8244 33.8428 24.4772 32.1409C24.1389 30.4854 26.2775 29.4035 27.4758 30.5868C28.3312 31.4298 28.0339 32.3698 27.3586 32.9462Z"
        fill="black"
      />
      <path
        d="M26.6186 31.7194C26.901 31.7194 27.1299 31.4931 27.1299 31.2139C27.1299 30.9347 26.901 30.7084 26.6186 30.7084C26.3363 30.7084 26.1074 30.9347 26.1074 31.2139C26.1074 31.4931 26.3363 31.7194 26.6186 31.7194Z"
        fill="#E5E5E5"
      />
      <path
        d="M37.542 33.1867C37.3645 33.3784 37.1426 33.5247 36.8955 33.6132C36.6483 33.7018 36.3831 33.7298 36.1226 33.695C33.3511 33.3257 34.7032 28.9806 37.1699 30.442C37.3977 30.5814 37.5913 30.7689 37.737 30.9912C37.8826 31.2135 37.9766 31.4649 38.0122 31.7273C38.0477 31.9898 38.024 32.2568 37.9427 32.5092C37.8614 32.7615 37.7246 32.9929 37.542 33.1867Z"
        fill="black"
      />
      <path
        d="M35.4897 32.0569C35.7721 32.0569 36.001 31.8306 36.001 31.5514C36.001 31.2723 35.7721 31.046 35.4897 31.046C35.2074 31.046 34.9785 31.2723 34.9785 31.5514C34.9785 31.8306 35.2074 32.0569 35.4897 32.0569Z"
        fill="#E5E5E5"
      />
    </svg>
  `;
}

function lessonsIcon() {
  return `
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8125 2.875V11.5L12.9375 9.34375L10.0625 11.5V2.875"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.31252 19.4063C4.31133 19.1228 4.36629 18.8418 4.47423 18.5797C4.58217 18.3176 4.74096 18.0794 4.94142 17.8789C5.14188 17.6785 5.38006 17.5197 5.6422 17.4117C5.90435 17.3038 6.18527 17.2488 6.46877 17.25H18.6875V2.87502H6.46877C6.18527 2.87383 5.90435 2.92879 5.6422 3.03673C5.38006 3.14467 5.14188 3.30346 4.94142 3.50392C4.74096 3.70438 4.58217 3.94256 4.47423 4.2047C4.36629 4.46685 4.31133 4.74777 4.31252 5.03127V19.4063Z"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.3125 19.4062V20.125H17.25"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function coursesIcon() {
  return `
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.1875 3.59375H4.3125C3.91555 3.59375 3.59375 3.91555 3.59375 4.3125V18.6875C3.59375 19.0845 3.91555 19.4062 4.3125 19.4062H7.1875C7.58445 19.4062 7.90625 19.0845 7.90625 18.6875V4.3125C7.90625 3.91555 7.58445 3.59375 7.1875 3.59375Z"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.59375 7.1875H7.90625"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5 3.59375H8.625C8.22805 3.59375 7.90625 3.91555 7.90625 4.3125V18.6875C7.90625 19.0845 8.22805 19.4062 8.625 19.4062H11.5C11.897 19.4062 12.2188 19.0845 12.2188 18.6875V4.3125C12.2188 3.91555 11.897 3.59375 11.5 3.59375Z"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.90625 15.8125H12.2188"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7711 3.35859L12.9823 4.10609C12.5973 4.2093 12.3688 4.60511 12.472 4.99016L16.2095 18.9339C16.3127 19.319 16.7085 19.5474 17.0936 19.4442L19.8823 18.6967C20.2674 18.5935 20.4959 18.1977 20.3927 17.8127L16.6552 3.86891C16.5519 3.48386 16.1561 3.25539 15.7711 3.35859Z"
        stroke="#9747FF"
        stroke-width="2.00848"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3809 16.1001L19.5496 14.9771"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1533 7.7625L17.3221 6.64844"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function savedIcon() {
  return `
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 20.125L11.5 16.5312L5.75 20.125V4.3125C5.75 4.12188 5.82573 3.93906 5.96052 3.80427C6.09531 3.66948 6.27813 3.59375 6.46875 3.59375H16.5312C16.7219 3.59375 16.9047 3.66948 17.0395 3.80427C17.1743 3.93906 17.25 4.12188 17.25 4.3125V20.125Z"
        stroke="#9747FF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function pawIcon() {
  return `
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2188 11C19.168 11 19.9375 10.2305 19.9375 9.28125C19.9375 8.33201 19.168 7.5625 18.2188 7.5625C17.2695 7.5625 16.5 8.33201 16.5 9.28125C16.5 10.2305 17.2695 11 18.2188 11Z"
        stroke="#9747FF"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.78125 11C4.73049 11 5.5 10.2305 5.5 9.28125C5.5 8.33201 4.73049 7.5625 3.78125 7.5625C2.83201 7.5625 2.0625 8.33201 2.0625 9.28125C2.0625 10.2305 2.83201 11 3.78125 11Z"
        stroke="#9747FF"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.90625 6.875C8.85549 6.875 9.625 6.10549 9.625 5.15625C9.625 4.20701 8.85549 3.4375 7.90625 3.4375C6.95701 3.4375 6.1875 4.20701 6.1875 5.15625C6.1875 6.10549 6.95701 6.875 7.90625 6.875Z"
        stroke="#9747FF"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0938 6.875C15.043 6.875 15.8125 6.10549 15.8125 5.15625C15.8125 4.20701 15.043 3.4375 14.0938 3.4375C13.1445 3.4375 12.375 4.20701 12.375 5.15625C12.375 6.10549 13.1445 6.875 14.0938 6.875Z"
        stroke="#9747FF"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7441 13.3976C14.8827 12.9151 14.2465 12.1122 13.9738 11.1632V11.1632C13.7884 10.5178 13.398 9.95027 12.8616 9.54629C12.3252 9.14231 11.6719 8.92383 11.0004 8.92383C10.3289 8.92383 9.67557 9.14231 9.13917 9.54629C8.60277 9.95027 8.21237 10.5178 8.02692 11.1632C7.75426 12.1122 7.11806 12.9151 6.25661 13.3976C5.72061 13.6896 5.29699 14.1517 5.05251 14.7109C4.80802 15.2702 4.75655 15.895 4.90621 16.4867C5.05587 17.0785 5.39816 17.6036 5.87914 17.9794C6.36013 18.3552 6.95247 18.5603 7.56286 18.5624C7.93163 18.5626 8.29677 18.4896 8.63708 18.3476C9.38626 18.0369 10.1893 17.8771 11.0004 17.8771C11.8114 17.8771 12.6145 18.0369 13.3636 18.3476C13.704 18.4896 14.0691 18.5626 14.4379 18.5624C15.0482 18.5603 15.6406 18.3552 16.1216 17.9794C16.6026 17.6036 16.9448 17.0785 17.0945 16.4867C17.2442 15.895 17.1927 15.2702 16.9482 14.7109C16.7037 14.1517 16.2801 13.6896 15.7441 13.3976Z"
        stroke="#9747FF"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
}

function externalLinkIcon() {
  return `
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 194.818 194.818" style="enable-background:new 0 0 194.818 194.818;" xml:space="preserve">
    <g>
      <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
        c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
        C194.818,6.19,190.789,2.161,185.818,2.161z"/>
      <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
        c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"/>
    </g>
    </svg>
  `;
}