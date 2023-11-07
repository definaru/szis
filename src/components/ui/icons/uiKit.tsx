import React from 'react'

export function Close()
{
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.625 4.375L4.375 15.625" stroke="#B9B9B9" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.625 15.625L4.375 4.375" stroke="#B9B9B9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Scenario({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.8 9.33333H7.66667C6.74619 9.33333 6 8.58714 6 7.66667V7.6C6 6.71634 6.71634 6 7.6 6V6C8.48366 6 9.2 6.71634 9.2 7.6V24.4C9.2 25.2837 9.91634 26 10.8 26V26C11.6837 26 12.4 25.2837 12.4 24.4V22.8333C12.4 22.7413 12.4746 22.6667 12.5667 22.6667H25.8333C25.9254 22.6667 26 22.7413 26 22.8333V24.3333C26 25.2538 25.2538 26 24.3333 26H10.8" stroke={color} strokeWidth="0.833333"/>
            <path d="M12.667 10.1666H20.167" stroke={color} strokeWidth="0.833333" strokeLinecap="round"/>
            <path d="M12.667 12.6666H20.167" stroke={color} strokeWidth="0.833333" strokeLinecap="round"/>
            <path d="M12.667 15.1666H20.167" stroke={color} strokeWidth="0.833333" strokeLinecap="round"/>
            <path d="M12.667 17.6666H17.667" stroke={color} strokeWidth="0.833333" strokeLinecap="round"/>
            <path d="M7.66699 6H21.8337C22.7541 6 23.5003 6.74619 23.5003 7.66667V22.6667" stroke={color} strokeWidth="0.833333"/>
        </svg>
    )
}

export function Dashboard({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1813 24.293V20.0544C18.1813 19.8671 18.1047 19.6874 17.9683 19.5549C17.8319 19.4224 17.6469 19.348 17.454 19.348H14.5449C14.352 19.348 14.1671 19.4224 14.0307 19.5549C13.8943 19.6874 13.8176 19.8671 13.8176 20.0544V24.293C13.8176 24.4804 13.741 24.66 13.6047 24.7925C13.4683 24.925 13.2833 24.9994 13.0905 24.9994L8.72736 25C8.63185 25 8.53727 24.9817 8.44902 24.9462C8.36077 24.9108 8.28059 24.8587 8.21305 24.7931C8.1455 24.7275 8.09192 24.6496 8.05537 24.5639C8.01881 24.4782 8 24.3864 8 24.2936V16.1291C8 16.0307 8.02117 15.9333 8.06216 15.8433C8.10315 15.7533 8.16304 15.6726 8.23801 15.6064L15.5102 9.18375C15.6441 9.06552 15.8185 9.00001 15.9995 9C16.1804 8.99999 16.3549 9.0655 16.4887 9.18372L23.762 15.6064C23.8369 15.6726 23.8968 15.7533 23.9378 15.8433C23.9788 15.9333 24 16.0307 24 16.1291V24.2936C24 24.3864 23.9812 24.4782 23.9446 24.5639C23.9081 24.6496 23.8545 24.7275 23.787 24.7931C23.7194 24.8587 23.6392 24.9108 23.551 24.9463C23.4627 24.9817 23.3682 25 23.2726 25L18.9085 24.9994C18.7156 24.9994 18.5306 24.925 18.3943 24.7925C18.2579 24.66 18.1813 24.4804 18.1813 24.293V24.293Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export function Map({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18V14.1562C3 14.0644 3.06246 13.9844 3.15149 13.9621L10.9564 12.0109C10.9851 12.0037 11.0151 12.003 11.0441 12.0088L13.5 12.5M29 17V12.2493C29 12.1214 28.8815 12.0263 28.7566 12.0541L20.0461 13.9898C20.0158 13.9965 19.9843 13.9961 19.9542 13.9885L18 13.5" stroke={color} strokeLinecap="round"/>
            <path d="M3 22V25.7438C3 25.874 3.12228 25.9694 3.24851 25.9379L10.9542 24.0115C10.9843 24.0039 11.0158 24.0035 11.0461 24.0102L19.9566 25.9904C19.9852 25.9967 20.0148 25.9967 20.0434 25.9904L28.8434 24.0348C28.9349 24.0145 29 23.9333 29 23.8396V21" stroke={color} strokeLinecap="round"/>
            <path d="M20 14V26" stroke={color}/>
            <path d="M11 12V24" stroke={color}/>
            <circle cx="3" cy="20" r="0.5" fill={color}/>
            <circle cx="29" cy="19" r="0.5" fill={color}/>
            <path d="M20.5 7C20.5 7.53373 20.3202 8.22149 19.9946 9.03439C19.6723 9.8389 19.2251 10.7234 18.7278 11.6396C18.4237 12.1999 18.0987 12.7753 17.7747 13.349C17.1187 14.5105 16.4666 15.665 16 16.6727C15.5334 15.665 14.8813 14.5105 14.2253 13.349C13.9013 12.7753 13.5763 12.1999 13.2722 11.6396C12.7749 10.7234 12.3277 9.8389 12.0054 9.03439C11.6798 8.22149 11.5 7.53373 11.5 7C11.5 4.51472 13.5147 2.5 16 2.5C18.4853 2.5 20.5 4.51472 20.5 7Z" stroke={color}/>
            <circle cx="16" cy="7" r="2.5" stroke={color}/>
        </svg>
    )
}

export function Locator({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8333 21.0085C21.9663 21.1144 26 22.1894 26 23.5C26 24.8807 21.5228 26 16 26C10.4772 26 6 24.8807 6 23.5C6 22.1894 10.0337 21.1144 15.1667 21.0085" stroke={color} />
            <path d="M21.3334 11.8333C21.3334 12.4473 21.1352 13.2246 20.7796 14.1322C20.427 15.0322 19.9361 16.0204 19.3855 17.0457C18.9921 17.7782 18.5646 18.5352 18.1395 19.2881C17.3914 20.6127 16.6506 21.9246 16.1153 23.068L16.1152 23.0681C16.1145 23.0696 16.1115 23.0762 16.0946 23.0854C16.0745 23.0963 16.0413 23.1064 16.0001 23.1064C15.9589 23.1064 15.9257 23.0963 15.9056 23.0854C15.888 23.0759 15.8854 23.0691 15.8849 23.068C15.3495 21.9246 14.6087 20.6127 13.8607 19.2881C13.4356 18.5352 13.0081 17.7782 12.6147 17.0457C12.064 16.0204 11.5731 15.0322 11.2206 14.1322C10.865 13.2246 10.6667 12.4473 10.6667 11.8333C10.6667 8.88781 13.0546 6.5 16.0001 6.5C18.9456 6.5 21.3334 8.88781 21.3334 11.8333Z" stroke={color} />
            <circle cx="16" cy="11.8334" r="3" stroke={color}/>
        </svg>
    )
}

export function Directory({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 9.52941H23.1176C23.605 9.52941 24 9.92445 24 10.4118V24.5294C24 25.504 23.2099 26.2941 22.2353 26.2941H10.7647C9.79009 26.2941 9 25.504 9 24.5294V7.76471C9 6.79009 9.79008 6 10.7647 6H20.9118C21.8864 6 22.6765 6.79009 22.6765 7.76471V7.76471H11.6471C11.1597 7.76471 10.7647 8.15975 10.7647 8.64706V8.64706C10.7647 9.13437 11.1597 9.52941 11.6471 9.52941H12.9706M16.5 9.52941V17.9118L14.7353 16.1471L12.9706 17.9118V9.52941M16.5 9.52941H12.9706" stroke={color} strokeLinecap="round"/>
        </svg>
    )
}

export function Reports({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 25.8V7.2C8 7.08954 8.08954 7 8.2 7H17.9298C17.9753 7 18.0193 7.01546 18.0548 7.04383L22.9249 10.94C22.9724 10.9779 23 11.0354 23 11.0961V25.8C23 25.9105 22.9105 26 22.8 26H8.2C8.08954 26 8 25.9105 8 25.8Z" stroke={color} strokeLinecap="round" />
            <path d="M10 10H15.5" stroke={color} strokeLinecap="round"/>
            <path d="M10 12H15.5" stroke={color} strokeLinecap="round"/>
            <path d="M10 23H21" stroke={color} strokeLinecap="round"/>
            <path d="M10.596 19.7054L10.3014 20.1094L11.1094 20.6986L11.404 20.2946L10.596 19.7054ZM13.9167 16L14.1994 15.5876L13.7988 15.3129L13.5127 15.7054L13.9167 16ZM16.8333 18L16.5506 18.4124L16.9512 18.6871L17.2373 18.2946L16.8333 18ZM11.404 20.2946L14.3207 16.2946L13.5127 15.7054L10.596 19.7054L11.404 20.2946ZM13.6339 16.4124L16.5506 18.4124L17.1161 17.5876L14.1994 15.5876L13.6339 16.4124ZM17.2373 18.2946L20.154 14.2946L19.346 13.7054L16.4293 17.7054L17.2373 18.2946Z" fill={color} />
            <path d="M20 14H18" stroke={color} strokeLinecap="square"/>
            <path d="M20 14V15.75" stroke={color} strokeLinecap="square"/>
            <path d="M18 7V10.8C18 10.9105 18.0895 11 18.2 11H23" stroke={color} strokeLinecap="round"/>
        </svg>
    )
}

export function Settings({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9063 20.0676V11.9323C23.9063 11.8106 23.8739 11.691 23.8126 11.5859C23.7512 11.4807 23.663 11.3937 23.557 11.3338L16.3383 7.25366C16.2351 7.19533 16.1186 7.16467 16 7.16467C15.8815 7.16467 15.7649 7.19533 15.6617 7.25366L8.44296 11.3338C8.33697 11.3937 8.24879 11.4807 8.18744 11.5859C8.12608 11.691 8.09375 11.8106 8.09375 11.9323V20.0676C8.09375 20.1893 8.12608 20.3089 8.18744 20.414C8.24879 20.5192 8.33697 20.6062 8.44296 20.6661L15.6617 24.7462C15.7649 24.8046 15.8815 24.8352 16 24.8352C16.1186 24.8352 16.2351 24.8046 16.3383 24.7462L23.557 20.6661C23.663 20.6062 23.7512 20.5192 23.8126 20.414C23.8739 20.3089 23.9063 20.1893 23.9063 20.0676V20.0676Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 19.0938C17.7086 19.0938 19.0938 17.7086 19.0938 16C19.0938 14.2914 17.7086 12.9062 16 12.9062C14.2914 12.9062 12.9062 14.2914 12.9062 16C12.9062 17.7086 14.2914 19.0938 16 19.0938Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function Users({color = '#fff'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 24.25C20.5563 24.25 24.25 20.5563 24.25 16C24.25 11.4437 20.5563 7.75 16 7.75C11.4437 7.75 7.75 11.4437 7.75 16C7.75 20.5563 11.4437 24.25 16 24.25Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 18.75C17.8985 18.75 19.4375 17.211 19.4375 15.3125C19.4375 13.414 17.8985 11.875 16 11.875C14.1015 11.875 12.5625 13.414 12.5625 15.3125C12.5625 17.211 14.1015 18.75 16 18.75Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4828 22.1337C11.0007 21.1155 11.7902 20.2605 12.7639 19.6633C13.7377 19.0661 14.8577 18.75 16 18.75C17.1424 18.75 18.2624 19.0661 19.2362 19.6633C20.2099 20.2605 20.9994 21.1155 21.5173 22.1337" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function UserDefault({color = '#000', size = '30'})
{
    return (
        <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_54_2547)">
                <rect width="30" height="30" rx="15" fill="#CFCFCF"/>
                <rect x="9" y="5" width="12" height="12" rx="6" fill={color}/>
                <rect x="-7.5" y="20" width="45" height="45" rx="22.5" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_54_2547">
                    <rect width="30" height="30" rx="15" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export function Exit({color = '#7C7C7C'})
{
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 20V23C21 23.5523 20.5523 24 20 24H11C10.4477 24 10 23.5523 10 23V9C10 8.44772 10.4477 8 11 8H20C20.5523 8 21 8.44772 21 9V12" stroke={color} strokeLinecap="round"/>
            <path d="M16 16H27" stroke={color} strokeLinecap="round"/>
            <path d="M27 16L25 14" stroke={color} strokeLinecap="round"/>
            <path d="M27 16L25 18" stroke={color} strokeLinecap="round"/>
        </svg>
    )
}

export function PlusCircle({color = '#fff'})
{
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5625 11H14.4375" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 7.5625V14.4375" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function SlidersHorizontal({color = '#000'})
{
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5625 13.437L3.125 13.437" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.875 13.437L14.6875 13.437" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.125 14.9995C13.9879 14.9995 14.6875 14.2999 14.6875 13.437C14.6875 12.5741 13.9879 11.8745 13.125 11.8745C12.2621 11.8745 11.5625 12.5741 11.5625 13.437C11.5625 14.2999 12.2621 14.9995 13.125 14.9995Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5625 6.56202L3.125 6.56195" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.875 6.56195L9.6875 6.56202" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.125 8.1245C8.98794 8.1245 9.6875 7.42494 9.6875 6.562C9.6875 5.69905 8.98794 4.9995 8.125 4.9995C7.26206 4.9995 6.5625 5.69905 6.5625 6.562C6.5625 7.42494 7.26206 8.1245 8.125 8.1245Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function ActionUpload()
{
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_53_2222)">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.05956 0.192789C5.14118 -0.100895 6.28671 -0.0571244 7.34277 0.31824C8.39882 0.693604 9.315 1.38264 9.96862 2.2931V1.20341C9.96862 1.06666 10.0229 0.935511 10.1196 0.838812C10.2163 0.742114 10.3475 0.687789 10.4842 0.687789C10.621 0.687789 10.7522 0.742114 10.8488 0.838812C10.9455 0.935511 10.9999 1.06666 10.9999 1.20341V4.12529H8.078C7.94125 4.12529 7.81009 4.07096 7.7134 3.97427C7.6167 3.87757 7.56237 3.74642 7.56237 3.60966C7.56237 3.47291 7.6167 3.34176 7.7134 3.24506C7.81009 3.14836 7.94125 3.09404 8.078 3.09404H9.26531C8.72677 2.2515 7.92121 1.61393 6.97749 1.28332C6.03378 0.952718 5.00644 0.948182 4.05985 1.27044C3.11325 1.5927 2.30209 2.22314 1.75613 3.06089C1.21017 3.89864 0.960965 4.8953 1.04838 5.89142C1.13579 6.88754 1.55478 7.82556 2.2383 8.55542C2.92182 9.28527 3.83039 9.76479 4.81864 9.91726C5.8069 10.0697 6.81774 9.88634 7.68945 9.39642C8.56116 8.9065 9.24337 8.13837 9.62694 7.21491C9.65183 7.15089 9.68927 7.09249 9.73706 7.04314C9.78484 6.99379 9.842 6.95448 9.90519 6.92753C9.96837 6.90057 10.0363 6.88652 10.105 6.88619C10.1737 6.88585 10.2418 6.89925 10.3052 6.92559C10.3686 6.95193 10.4262 6.99068 10.4744 7.03957C10.5227 7.08845 10.5607 7.14649 10.5862 7.21027C10.6117 7.27405 10.6243 7.34228 10.623 7.41096C10.6218 7.47965 10.6069 7.54739 10.5791 7.61023C10.2208 8.47272 9.64875 9.22976 8.91689 9.80999C8.18502 10.3902 7.31746 10.7745 6.39597 10.9267C5.47449 11.0788 4.52943 10.9938 3.6499 10.6796C2.77036 10.3654 1.98531 9.83248 1.36876 9.13095C0.752206 8.42942 0.324453 7.58243 0.125823 6.66984C-0.0728069 5.75724 -0.0357704 4.80909 0.233441 3.91477C0.502653 3.02045 0.995171 2.20941 1.66457 1.55811C2.33397 0.906813 3.1582 0.437392 4.05956 0.192789Z" fill="#36B44C" />
            </g>
            <defs>
                <clipPath id="clip0_53_2222">
                    <rect width="11" height="11" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export function ActionPause()
{
    return (
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.33333 12.0416C3.20417 12.0416 3.91667 11.3291 3.91667 10.4583V2.54165C3.91667 1.67081 3.20417 0.958313 2.33333 0.958313C1.4625 0.958313 0.75 1.67081 0.75 2.54165V10.4583C0.75 11.3291 1.4625 12.0416 2.33333 12.0416ZM7.08333 2.54165V10.4583C7.08333 11.3291 7.79583 12.0416 8.66667 12.0416C9.5375 12.0416 10.25 11.3291 10.25 10.4583V2.54165C10.25 1.67081 9.5375 0.958313 8.66667 0.958313C7.79583 0.958313 7.08333 1.67081 7.08333 2.54165Z" fill="#FFF1B8"/>
        </svg>
    )
}

export function ActionPlay()
{
    return (
        <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.875 7.99998C12.8755 8.19097 12.8265 8.37883 12.7329 8.54529C12.6392 8.71175 12.5041 8.85114 12.3406 8.94991L2.21 15.1473C2.0392 15.2518 1.84358 15.3089 1.64334 15.3126C1.44309 15.3164 1.24549 15.2665 1.07094 15.1683C0.898046 15.0717 0.754022 14.9307 0.653678 14.7599C0.553333 14.5891 0.500289 14.3947 0.5 14.1966V1.80334C0.500289 1.60526 0.553333 1.41083 0.653678 1.24005C0.754022 1.06927 0.898046 0.928293 1.07094 0.831625C1.24549 0.733433 1.44309 0.683618 1.64334 0.687327C1.84358 0.691035 2.0392 0.748131 2.21 0.852719L12.3406 7.05006C12.5041 7.14883 12.6392 7.28822 12.7329 7.45468C12.8265 7.62114 12.8755 7.809 12.875 7.99998Z" fill="#BEFBC9"/>
        </svg>
    )
}

export function ActionStop()
{
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="11" height="11" rx="1" fill="#FF9498"/>
        </svg>
    )
}

export function Sort({color = '#7C7C7C'})
{
    return (
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 5L11 1" stroke={color} strokeLinecap="round"/>
        </svg>
    )
}

export function EnterID({color = '#7C7C7C'})
{
    return (
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1C1.5 0.723858 1.27614 0.5 1 0.5C0.723858 0.5 0.5 0.723858 0.5 1H1.5ZM1 11H0.5V11.5H1V11ZM8.35355 11.3536C8.54882 11.1583 8.54882 10.8417 8.35355 10.6464L5.17157 7.46447C4.97631 7.2692 4.65973 7.2692 4.46447 7.46447C4.2692 7.65973 4.2692 7.97631 4.46447 8.17157L7.29289 11L4.46447 13.8284C4.2692 14.0237 4.2692 14.3403 4.46447 14.5355C4.65973 14.7308 4.97631 14.7308 5.17157 14.5355L8.35355 11.3536ZM0.5 1V11H1.5V1H0.5ZM1 11.5H8V10.5H1V11.5Z" fill={color}/>
        </svg>
    )
}

export function WarningAlert({color = 'currentColor'})
{
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill={color} 
            // {...(title ? {title: `${title}`} : {})}
            viewBox="0 0 16 16"
        >
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
    )
}

export function PersonLock({color = 'currentColor'})
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color} viewBox="0 0 16 16">
            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
        </svg>
    )
}

export function PencilEdit({color = 'currentColor'})
{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={color} viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
    )
}

export function LocatorIcon()
{
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#CC2128" fillOpacity="0.3"/>
            <circle cx="12" cy="12" r="6" fill="#CC2128"/>
        </svg>
    )
}

export function CsvIcon()
{
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56 56" style={{background: 'new 0 0 56 56'}} xmlSpace="preserve">
            <g>
                <path fill="#e9e9e0" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"/>
                <polygon fill="#d9d7ca" points="37.5,0.151 37.5,12 49.349,12"/>
                <path fill="#f36fa0" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"/>
                <g>
                    <path fill="#fff" d="M21.58,51.975c-0.374,0.364-0.798,0.638-1.271,0.82c-0.474,0.183-0.984,0.273-1.531,0.273 c-0.602,0-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971c-0.378-0.429-0.675-0.966-0.889-1.613 c-0.214-0.647-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235c0.214-0.643,0.51-1.178,0.889-1.606 c0.378-0.429,0.822-0.754,1.333-0.978c0.51-0.224,1.062-0.335,1.654-0.335c0.547,0,1.057,0.091,1.531,0.273 c0.474,0.183,0.897,0.456,1.271,0.82l-1.135,1.012c-0.228-0.265-0.481-0.456-0.759-0.574c-0.278-0.118-0.567-0.178-0.868-0.178 c-0.337,0-0.659,0.063-0.964,0.191c-0.306,0.128-0.579,0.344-0.82,0.649c-0.242,0.306-0.431,0.699-0.567,1.183 s-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.267,0.212,1.75c0.132,0.483,0.314,0.877,0.547,1.183s0.497,0.528,0.793,0.67 c0.296,0.142,0.608,0.212,0.937,0.212s0.636-0.06,0.923-0.178s0.549-0.31,0.786-0.574L21.58,51.975z"/>
                    <path fill="#fff" d="M29.633,50.238c0,0.364-0.075,0.718-0.226,1.06s-0.362,0.643-0.636,0.902s-0.611,0.467-1.012,0.622 c-0.401,0.155-0.857,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116 c-0.237-0.055-0.463-0.13-0.677-0.226c-0.214-0.096-0.399-0.212-0.554-0.349l0.287-1.176c0.127,0.073,0.289,0.144,0.485,0.212 c0.196,0.068,0.398,0.132,0.608,0.191c0.209,0.06,0.419,0.107,0.629,0.144c0.209,0.036,0.405,0.055,0.588,0.055 c0.556,0,0.982-0.13,1.278-0.39c0.296-0.26,0.444-0.645,0.444-1.155c0-0.31-0.105-0.574-0.314-0.793 c-0.21-0.219-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533c-0.365-0.178-0.707-0.388-1.025-0.629 c-0.319-0.241-0.583-0.526-0.793-0.854c-0.21-0.328-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189 s0.385-0.641,0.663-0.882c0.278-0.241,0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116 c0.428,0.077,0.774,0.203,1.039,0.376c-0.055,0.118-0.119,0.248-0.191,0.39c-0.073,0.142-0.142,0.273-0.205,0.396 c-0.064,0.123-0.119,0.226-0.164,0.308c-0.046,0.082-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109 s-0.167-0.091-0.294-0.137c-0.128-0.046-0.296-0.077-0.506-0.096c-0.21-0.019-0.479-0.014-0.807,0.014 c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321c-0.128,0.128-0.228,0.271-0.301,0.431 c-0.073,0.159-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882c0.209,0.224,0.469,0.419,0.779,0.588 c0.31,0.169,0.647,0.333,1.012,0.492c0.364,0.159,0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854 C29.528,49.261,29.633,49.7,29.633,50.238z"/>
                    <path fill="#fff" d="M34.035,53.055l-3.131-10.131h1.873l2.338,8.695l2.475-8.695h1.859l-3.281,10.131H34.035z"/>
                </g>
                <path fill="#c8bdb8" d="M23.5,16v-4h-12v4v2v2v2v2v2v2v2v4h10h2h21v-4v-2v-2v-2v-2v-2v-4H23.5z M13.5,14h8v2h-8V14z M13.5,18h8v2h-8V18z M13.5,22h8v2h-8V22z M13.5,26h8v2h-8V26z M21.5,32h-8v-2h8V32z M42.5,32h-19v-2h19V32z M42.5,28h-19v-2h19V28 z M42.5,24h-19v-2h19V24z M23.5,20v-2h19v2H23.5z"/>
            </g>
        </svg>
    )
}

export function XlsIcon()
{
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56 56" style={{ background: 'new 0 0 56 56'}} xmlSpace="preserve">
            <g>
                <path fill="#e9e9e0" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"/>
                <polygon fill="#d9d7ca" points="37.5,0.151 37.5,12 49.349,12"/>
                <path fill="#91cda0" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"/>
                <g>
                    <path fill="#fff" d="M20.379,48.105L22.936,53h-1.9l-1.6-3.801h-0.137L17.576,53h-1.9l2.557-4.895l-2.721-5.182h1.873 l1.777,4.102h0.137l1.928-4.102H23.1L20.379,48.105z"/>
                    <path fill="#fff" d="M27.037,42.924v8.832h4.635V53h-6.303V42.924H27.037z"/>
                    <path fill="#fff" d="M39.041,50.238c0,0.364-0.075,0.718-0.226,1.06S38.453,51.94,38.18,52.2s-0.611,0.467-1.012,0.622 c-0.401,0.155-0.857,0.232-1.367,0.232c-0.219,0-0.444-0.012-0.677-0.034s-0.467-0.062-0.704-0.116 c-0.237-0.055-0.463-0.13-0.677-0.226c-0.214-0.096-0.399-0.212-0.554-0.349l0.287-1.176c0.127,0.073,0.289,0.144,0.485,0.212 c0.196,0.068,0.398,0.132,0.608,0.191c0.209,0.06,0.419,0.107,0.629,0.144c0.209,0.036,0.405,0.055,0.588,0.055 c0.556,0,0.982-0.13,1.278-0.39c0.296-0.26,0.444-0.645,0.444-1.155c0-0.31-0.105-0.574-0.314-0.793 c-0.21-0.219-0.472-0.417-0.786-0.595s-0.654-0.355-1.019-0.533c-0.365-0.178-0.707-0.388-1.025-0.629 c-0.319-0.241-0.583-0.526-0.793-0.854c-0.21-0.328-0.314-0.738-0.314-1.23c0-0.446,0.082-0.843,0.246-1.189 s0.385-0.641,0.663-0.882c0.278-0.241,0.602-0.426,0.971-0.554s0.759-0.191,1.169-0.191c0.419,0,0.843,0.039,1.271,0.116 c0.428,0.077,0.774,0.203,1.039,0.376c-0.055,0.118-0.119,0.248-0.191,0.39c-0.073,0.142-0.142,0.273-0.205,0.396 c-0.064,0.123-0.119,0.226-0.164,0.308c-0.046,0.082-0.073,0.128-0.082,0.137c-0.055-0.027-0.116-0.063-0.185-0.109 s-0.167-0.091-0.294-0.137c-0.128-0.046-0.296-0.077-0.506-0.096c-0.21-0.019-0.479-0.014-0.807,0.014 c-0.183,0.019-0.355,0.07-0.52,0.157s-0.31,0.193-0.438,0.321c-0.128,0.128-0.228,0.271-0.301,0.431 c-0.073,0.159-0.109,0.313-0.109,0.458c0,0.364,0.104,0.658,0.314,0.882c0.209,0.224,0.469,0.419,0.779,0.588 c0.31,0.169,0.647,0.333,1.012,0.492c0.364,0.159,0.704,0.354,1.019,0.581s0.576,0.513,0.786,0.854 C38.936,49.261,39.041,49.7,39.041,50.238z"/>
                </g>
                <path fill="#c8bdb8" d="M23.5,16v-4h-12v4v2v2v2v2v2v2v2v4h10h2h21v-4v-2v-2v-2v-2v-2v-4H23.5z M13.5,14h8v2h-8V14z M13.5,18h8v2h-8V18z M13.5,22h8v2h-8V22z M13.5,26h8v2h-8V26z M21.5,32h-8v-2h8V32z M42.5,32h-19v-2h19V32z M42.5,28h-19v-2h19V28 z M42.5,24h-19v-2h19V24z M23.5,20v-2h19v2H23.5z"/>
            </g>
        </svg>
    )
}

export function XmlIcon()
{
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56 56" style={{ background: 'new 0 0 56 56' }} xmlSpace="preserve">
            <g>
                <path fill="#e9e9e0" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"/>
                <polygon fill="#d9d7ca" points="37.5,0.151 37.5,12 49.349,12"/>
                <path fill="#f29c1f" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"/>
                <g>
                    <path fill="#fff" d="M19.379,48.105L21.936,53h-1.9l-1.6-3.801h-0.137L16.576,53h-1.9l2.557-4.895l-2.721-5.182h1.873 l1.777,4.102h0.137l1.928-4.102H22.1L19.379,48.105z"/>
                    <path fill="#fff" d="M31.998,42.924h1.668V53h-1.668v-6.932l-2.256,5.605h-1.449l-2.27-5.605V53h-1.668V42.924h1.668 l2.994,6.891L31.998,42.924z"/>
                    <path fill="#fff" d="M37.863,42.924v8.832h4.635V53h-6.303V42.924H37.863z"/>
                </g>
                <path fill="#f29c1f" d="M15.5,24c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C16.012,23.902,15.756,24,15.5,24z"/>
                <path fill="#f29c1f" d="M21.5,30c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C22.012,29.902,21.756,30,21.5,30z"/>
                <path fill="#f29c1f" d="M33.5,30c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C34.012,29.902,33.756,30,33.5,30z"/>
                <path fill="#f29c1f" d="M39.5,24c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C40.012,23.902,39.756,24,39.5,24z"/>
                <path fill="#f29c1f" d="M24.5,32c-0.11,0-0.223-0.019-0.333-0.058c-0.521-0.184-0.794-0.755-0.61-1.276l6-17 c0.185-0.521,0.753-0.795,1.276-0.61c0.521,0.184,0.794,0.755,0.61,1.276l-6,17C25.298,31.744,24.912,32,24.5,32z"/>
            </g>
        </svg>
    )
}

export function CircleIcon({color = 'currentColor', size = '30'})
{
    return (
        <svg width={size} height={size} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve">
            <path fill={color} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"></path>
        </svg>
    )
}