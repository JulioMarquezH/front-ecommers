
export function IconEmail({ width = '23px', height = '18px', color = "white" }) {

    return (
        <svg width={width} height={height} viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6429 1H2.35721C1.72603 1 1.21436 1.51167 1.21436 2.14286V15.8571C1.21436 16.4883 1.72603 17 2.35721 17H20.6429C21.2741 17 21.7858 16.4883 21.7858 15.8571V2.14286C21.7858 1.51167 21.2741 1 20.6429 1Z" stroke="white" stroke-width="2" stroke-linecap="round" />
            <path d="M1.21436 2.71436L11.5001 9.00007L21.7858 2.71436" stroke={color} stroke-width="2" stroke-linecap="round" />
        </svg>
    );
}

export function DownArrow({ width = '16px', height = '33px', color = "#DEDEDE" }) {

    return (
        <svg width={width} height={height} viewBox="0 0 16 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 32.7071C7.68342 33.0976 8.31658 33.0976 8.70711 32.7071L15.0711 26.3431C15.4616 25.9526 15.4616 25.3195 15.0711 24.9289C14.6805 24.5384 14.0474 24.5384 13.6569 24.9289L8 30.5858L2.34315 24.9289C1.95262 24.5384 1.31946 24.5384 0.928933 24.9289C0.538409 25.3195 0.538409 25.9526 0.928933 26.3431L7.29289 32.7071ZM7 4.37114e-08L7 32L9 32L9 -4.37114e-08L7 4.37114e-08Z" fill={color} />
        </svg>

    );
}

