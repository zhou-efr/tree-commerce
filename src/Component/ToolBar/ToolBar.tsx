import {FC, useContext, useEffect, useState, useRef} from "react";
import {Link, NavLink, Outlet, useLocation} from "react-router-dom";
import {UserContext} from "../../App";
import "./ToolBar.scss";
import {Default, Shopping} from "./assets/Menus";

interface ToolBarProps {
    onLogout: () => void;
}

export const ToolBar:FC<ToolBarProps> = (props) => {
    const context = useContext(UserContext);
    const [defaultEntered, setDefaultEntered] = useState(true);
    const [shoppingEntered, setShoppingEntered] = useState(false);
    const [defaultAnimationEnd, setDefaultAnimationEnd] = useState(false);
    const [shoppingAnimationEnd, setShoppingAnimationEnd] = useState(true);
    const [open, setOpen] = useState(true);

    const location = useLocation();
    const isAuthenticated = context?.user !== null;

    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current !== currentScrollY ) {
                setGoingUp(true);
                setOpen(true);
            }else {
                setGoingUp(false);
            }

            prevScrollY.current = currentScrollY;
            console.log(goingUp, currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    useEffect(() => {
        setDefaultEntered(true);
        setShoppingEntered(false);
    }, [location]);
    const handleMouseEnterShopping = async () => {
        setDefaultEntered(false);
        await new Promise(r => setTimeout(r, 0));
        setDefaultAnimationEnd(true);
        setShoppingAnimationEnd(false);
        await new Promise(r => setTimeout(r, 0));
        setShoppingEntered(true);
    };

    const handleMouseLeaveShopping = async () => {
        setShoppingEntered(false);
        await new Promise(r => setTimeout(r, 0));
        setShoppingAnimationEnd(true);
        setDefaultAnimationEnd(false);
        await new Promise(r => setTimeout(r, 0));
        setDefaultEntered(true);
    };

    return (
        <div>
            {
                (location.pathname !== "/" && location.pathname !== "/login") &&
                <nav className={"flex flex-col justify-center items-center"}>
                    <NavLink to="/">
                        <svg className={`mt-5 mb-1 transition-all delay-300 duration-500 ${open ? "h-14" : "h-20"}`} width="579" height="187" viewBox="0 0 579 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M264.486 8.11441C250.617 4.83266 234.014 2.57901 214.677 1.35345C212.115 1.12274 209.324 0.960479 206.303 0.866683C203.44 0.626579 200.346 0.45494 197.023 0.351764C192.492 0.211069 187.807 0.141184 182.968 0.142107C178.286 -0.00327674 173.749 0.00702276 169.357 0.173006C164.971 0.187992 160.733 0.28317 156.643 0.45854C152.71 0.487595 149.306 0.533068 146.43 0.594959C135.671 1.16795 126.73 1.64623 119.607 2.02978C112.636 2.41803 106.265 2.90054 100.496 3.4773C94.8842 3.90775 89.4172 4.49389 84.0953 5.23572C78.7793 5.82655 72.4726 6.61338 65.1754 7.59623C45.5669 10.1621 30.3326 13.015 19.4725 16.1549C8.6183 19.1438 2.37078 22.2758 0.729938 25.5508C0.0724137 26.891 -0.140891 28.4717 0.0900249 30.293C0.477909 31.9681 1.25228 33.4283 2.41315 34.6738C3.27787 35.7589 4.96144 37.1718 7.46386 38.9124C9.97221 40.5021 13.0758 42.337 16.7747 44.4172C20.4736 46.4974 24.6226 48.6671 29.2217 50.9264C33.8209 53.1857 38.5711 55.4497 43.4724 57.7184C51.0508 61.1285 57.5779 64.3548 63.0536 67.3972C68.6804 70.4443 74.0687 73.7863 79.2187 77.4234C81.8662 79.3197 84.2176 81.0557 86.2729 82.6313C88.3281 84.2069 90.1568 85.7755 91.7589 87.337C93.3669 88.7476 94.8935 90.3067 96.3387 92.0146C97.7898 93.5714 99.232 95.3548 100.665 97.3646C104.118 101.856 107.176 106.789 109.838 112.163C112.651 117.541 114.648 122.517 115.83 127.089C116.2 129.217 116.498 131.267 116.723 133.239C116.942 135.362 117.001 137.707 116.9 140.274C116.799 142.841 116.532 145.781 116.1 149.093C115.667 152.406 114.982 156.391 114.043 161.048C113.5 163.299 113.179 165.708 113.078 168.275C112.971 170.993 112.949 173.487 113.011 175.756C113.224 178.031 113.528 179.93 113.922 181.454C114.31 183.129 114.724 184.124 115.165 184.44C115.601 184.907 116.67 184.638 118.373 183.633C118.681 183.491 118.94 182.668 119.15 181.163C119.506 179.813 119.795 178.235 120.017 176.427C120.686 167.075 121.198 159.834 121.55 154.705C121.897 149.727 121.97 145.95 121.769 143.374C121.532 141.703 121.449 139.962 121.52 138.15C121.736 136.494 121.868 135.062 121.916 133.854C122.126 132.349 122.686 129.645 123.595 125.742C124.656 121.845 125.719 117.871 126.785 113.823C128.009 109.628 129.139 105.883 130.175 102.59C131.212 99.2958 131.884 97.5781 132.192 97.4365L131.966 97.4294L134.56 89.1196C135.393 87.1801 136.158 85.0118 136.857 82.6146C137.556 80.2175 138.229 78.4998 138.874 77.4616L142.691 66.922C144.554 61.8397 147.214 55.724 150.67 48.5747C154.127 41.4255 158.036 34.2903 162.399 27.1691C163.587 23.8801 162.676 22.0377 159.667 21.6419C158.918 21.4674 158.229 21.6728 157.601 22.258C156.979 22.6923 156.258 23.7281 155.438 25.3656C154.623 26.8521 153.631 29.0134 152.461 31.8495C151.291 34.6856 149.862 38.3451 148.174 42.828C147.004 45.6641 145.988 48.4293 145.126 51.1238C144.421 53.6719 143.649 55.9913 142.811 58.0817L140.812 62.7818C139.316 66.2125 137.552 70.6931 135.521 76.2236C133.64 81.7588 131.753 87.445 129.86 93.2822C127.974 98.9684 126.253 104.282 124.698 109.222C123.294 114.168 122.324 117.69 121.787 119.79C121.349 123.254 120.834 124.825 120.241 124.504C119.643 124.335 118.593 122.185 117.092 118.057C116.692 116.684 115.857 114.844 114.587 112.537C113.316 110.23 111.825 107.765 110.114 105.141C108.553 102.523 106.914 99.9775 105.196 97.5053C103.485 94.8821 101.906 92.7166 100.461 91.0088C96.2649 86.1919 90.2621 81.1678 82.4528 75.9364C74.8004 70.5587 65.8583 65.2922 55.6264 60.1367C49.5465 57.0756 44.4276 54.5733 40.2697 52.6301C36.2687 50.5405 32.8601 48.7717 30.0437 47.3237C27.3784 45.8803 25.0818 44.6751 23.1539 43.7082C21.2319 42.5903 19.3854 41.4747 17.6145 40.3615C13.6372 37.6679 10.7721 35.538 9.0189 33.9718C7.27167 32.2546 6.27074 30.7873 6.0161 29.57C5.88285 29.1123 6.13609 28.4399 6.77583 27.5527C7.5666 26.6701 8.58097 25.8701 9.81892 25.1527C12.4696 23.1185 17.9959 21.0224 26.3979 18.8644C34.9569 16.5602 45.6244 14.4725 58.4006 12.6015C64.1816 11.7228 69.3525 10.9763 73.9133 10.362C78.48 9.59672 83.1163 8.98479 87.8222 8.5262C92.534 7.9166 97.6205 7.39423 103.082 6.95909C108.549 6.37295 115.148 5.82199 122.881 5.30619C136.226 4.35994 148.347 3.75366 159.246 3.48735C170.15 3.07005 180.587 3.01616 190.555 3.32568C192.519 3.38665 194.328 3.51842 195.984 3.721L201.195 3.8828C209.188 4.43335 216.35 4.95811 222.682 5.45707C229.014 5.95603 234.886 6.59192 240.3 7.36473C245.714 8.13754 250.747 8.97413 255.399 9.87448C256.247 10.0343 257.095 10.1987 257.943 10.3679C249.407 13.5491 241.024 17.8477 232.794 23.2636C223.703 29.0979 215.034 36.0001 206.787 43.9701C198.54 51.9402 191.108 60.4582 184.492 69.5243C177.876 78.5903 172.232 87.9813 167.562 97.6973C167.184 98.5097 166.817 99.3208 166.459 100.13C165.277 101.601 163.995 103.21 162.613 104.957C161.02 107.024 159.496 109.245 158.042 111.618C156.587 113.992 155.363 116.297 154.367 118.534C154.089 117.921 154.058 116.786 154.274 115.13C154.491 113.473 154.864 111.671 155.394 109.722C155.93 107.622 156.542 105.525 157.229 103.43C158.073 101.188 158.908 99.1731 159.735 97.3846C160.537 96.2001 161.113 95.0085 161.463 93.81C161.812 92.6114 161.999 91.7101 162.023 91.1061C161.442 90.4834 160.624 90.1556 159.566 90.1228C158.515 89.9389 157.603 90.0618 156.83 90.4913C155.888 91.3692 154.896 93.5305 153.853 96.9752C152.967 100.274 152.224 103.803 151.623 107.564C151.021 111.325 150.731 114.869 150.751 118.195C150.621 121.517 150.997 123.494 151.879 124.126C152.605 124.905 153.436 124.93 154.372 124.203C155.459 123.481 156.412 122.302 157.233 120.664C157.896 119.173 158.719 117.46 159.703 115.525C160.545 113.988 161.385 112.493 162.224 111.038C160.508 116.173 159.211 121.253 158.33 126.276C158.148 127.33 157.964 128.459 157.777 129.664L157.684 132.836C157.328 144.92 160.138 154.734 166.114 162.28C172.09 169.825 179.858 175.523 189.42 179.373C199.133 183.227 210.028 185.446 222.104 186.029C234.181 186.613 246.145 185.909 257.995 183.917C269.841 182.077 280.962 179.162 291.359 175.172C301.757 171.182 310.132 166.54 316.486 161.247C318.81 159.336 318.444 158.949 315.387 160.087C306.3 165.771 296.109 170.446 284.815 174.113C273.515 177.931 262.025 180.535 250.344 181.925C238.813 183.32 227.548 183.435 216.546 182.272C205.696 181.113 196.098 178.471 187.754 174.347C179.561 170.226 173.154 164.484 168.533 157.122C163.912 149.759 162.067 140.571 162.996 129.559C163.68 121.715 165.82 113.225 169.415 104.089C170.118 102.301 170.859 100.514 171.638 98.7273L171.707 98.6634C172.021 98.3708 172.232 98.7553 172.342 99.817C172.502 103.45 173.234 105.967 174.54 107.369C175.997 108.774 177.249 109.645 178.294 109.98C180.681 110.81 183.028 110.731 185.335 109.745C187.793 108.763 189.647 107.762 190.897 106.743C193.391 104.855 194.487 103.906 194.185 103.897C193.888 103.736 192.279 104.291 189.356 105.561C184.893 107.539 181.621 108.042 179.543 107.07C177.615 106.103 177.039 103.44 177.815 99.0798C178.357 96.829 178.643 95.3261 178.672 94.5711C178.708 93.6651 178.433 92.9763 177.846 92.5045C176.83 91.4147 175.939 91.0091 175.172 91.2876C175.144 91.298 175.114 91.3095 175.084 91.3221C177.492 86.4576 180.179 81.5996 183.145 76.7481C188.855 67.6609 195.385 58.9707 202.734 50.6775C210.235 42.3878 218.233 35.1677 226.728 29.0172C231.972 25.5117 237.357 22.3118 242.884 19.4176C248.412 16.5233 253.848 14.1559 259.194 12.3154C260.214 11.9465 261.224 11.5956 262.223 11.2626C264.748 11.8141 267.271 12.4074 269.792 13.0426C272.487 13.731 275.324 14.6506 278.304 15.8013C281.44 16.8058 284.347 17.8787 287.024 19.0201C289.707 20.0105 291.937 20.9868 293.714 21.949C295.648 22.765 296.681 23.4018 296.814 23.8595L297.214 25.2325L297.187 25.912C297.339 25.9166 297.411 25.9945 297.405 26.1455C297.672 27.0608 298.18 27.6057 298.929 27.7802C299.684 27.8036 300.309 27.2939 300.803 26.251C302.077 24.6276 301.015 22.7805 297.619 20.7097C294.379 18.4926 289.033 15.9833 281.582 13.1819C277.699 11.7486 273.499 10.4344 268.982 9.23953C270.949 8.72111 272.869 8.28002 274.743 7.91626C279.764 6.82397 284.314 6.32531 288.393 6.42028C295.191 6.57857 300.283 8.20862 303.668 11.3104C307.209 14.2647 308.902 18.3852 308.746 23.6718C308.64 27.2968 307.691 31.2802 305.9 35.6218C304.109 39.9635 301.383 45.2658 297.722 51.5288C295.185 55.5508 293.505 58.6858 292.683 60.9339C292.016 63.0345 291.679 64.2358 291.67 64.5379C291.647 65.2931 292.241 65.6848 293.449 65.7129C294.809 65.7446 296.264 65.0983 297.815 63.7741C299.365 62.4498 300.156 61.259 300.188 60.2017L300.214 59.2954C300.241 58.3892 300.827 56.4379 301.974 53.4416C303.125 50.2943 304.436 46.8484 305.907 43.1039C307.377 39.3594 308.693 35.7624 309.853 32.313C311.017 28.7125 311.628 25.9305 311.686 23.9669C311.89 17.0188 309.767 12.1326 305.315 9.30824C300.867 6.33286 295.244 4.76602 288.446 4.60773C280.612 4.42533 272.625 5.59422 264.486 8.11441ZM201.064 116.809C201.523 116.672 202.61 115.95 204.324 114.643C206.975 112.609 209.275 109.883 211.224 106.467C213.173 103.05 214.2 99.9828 214.307 97.2649C214.39 95.151 213.99 93.778 213.108 93.1459C212.376 92.5184 211.023 92.3252 209.048 92.5663C207.822 92.9817 206.104 94.3646 203.894 96.7149C201.836 99.0698 200.379 101.519 199.523 104.062C198.702 105.7 197.984 106.66 197.368 106.944C196.903 107.231 195.843 107.274 194.187 107.072C192.538 106.718 191.478 106.761 191.007 107.2C190.391 107.483 189.739 108.672 189.052 110.767L189.061 110.541C188.711 111.739 188.911 112.426 189.66 112.6C190.259 112.77 190.929 113.018 191.673 113.343C193.311 113.999 194.347 114.56 194.782 115.027C195.224 115.343 195.58 115.883 195.853 116.648C196.107 117.865 196.655 119.318 197.496 121.007C198.343 122.545 199.129 123.704 199.855 124.482C201.161 125.883 202.554 126.985 204.035 127.786C205.661 128.744 207.395 128.873 209.237 128.175C211.073 127.627 213.099 126.103 215.314 123.601C217.558 121.235 220.053 117.653 222.799 112.856C222.869 113.288 223.118 113.553 223.545 113.652C224.143 113.822 224.814 114.07 225.557 114.395C227.195 115.051 228.231 115.612 228.666 116.079C229.108 116.395 229.464 116.935 229.737 117.7C229.992 118.917 230.539 120.37 231.38 122.059C232.227 123.597 233.014 124.756 233.739 125.534C235.045 126.935 236.438 128.037 237.919 128.839C239.545 129.796 241.279 129.926 243.121 129.227C244.957 128.679 246.983 127.155 249.198 124.653C251.565 122.157 254.211 118.308 257.137 113.108C259.575 108.8 261.113 106.202 261.753 105.314C262.399 104.276 262.269 103.743 261.362 103.715C260.607 103.691 260.221 103.906 260.203 104.359C260.191 104.661 259.615 105.853 258.475 107.934C257.34 109.864 256.127 111.867 254.836 113.944C249.991 121.806 245.744 125.982 242.095 126.474C238.452 126.814 236.049 124.472 234.885 119.447C234.625 118.381 234.646 117.852 234.948 117.861C235.407 117.725 236.494 117.002 238.208 115.695C240.859 113.661 243.159 110.935 245.108 107.519C247.057 104.102 248.084 101.035 248.191 98.3171C248.274 96.2031 247.874 94.8301 246.992 94.198C246.26 93.5706 244.907 93.3774 242.932 93.6184C241.706 94.0339 239.988 95.4167 237.778 97.767C235.72 100.122 234.263 102.571 233.407 105.115C232.586 106.752 231.868 107.712 231.252 107.996C230.787 108.284 229.727 108.326 228.072 108.124C227.007 107.895 226.188 107.832 225.614 107.934C226.717 106.041 227.469 104.817 227.869 104.262C228.515 103.224 228.385 102.691 227.478 102.663C226.723 102.639 226.337 102.854 226.319 103.307C226.307 103.609 225.731 104.801 224.591 106.882C223.456 108.812 222.243 110.815 220.952 112.892C216.107 120.754 211.86 124.93 208.211 125.422C204.568 125.762 202.165 123.42 201.001 118.395C200.741 117.328 200.762 116.8 201.064 116.809ZM204.418 106.482C202.709 107.639 201.876 107.688 201.917 106.631C201.935 106.178 202.191 105.43 202.686 104.387C203.331 103.349 204.056 102.238 204.858 101.053C205.667 99.7179 206.466 98.6089 207.257 97.7263C208.054 96.6928 208.609 96.0298 208.923 95.7372C209.847 95.3123 210.355 95.8572 210.447 97.3718C210.538 98.8865 210.023 100.458 208.901 102.086C207.772 103.865 206.278 105.33 204.418 106.482ZM238.302 107.534C236.593 108.691 235.76 108.74 235.801 107.683C235.819 107.23 236.075 106.482 236.57 105.44C237.215 104.401 237.94 103.29 238.742 102.105C239.551 100.77 240.35 99.661 241.141 98.7785C241.938 97.7449 242.493 97.0819 242.807 96.7893C243.731 96.3644 244.239 96.9093 244.331 98.424C244.423 99.9386 243.907 101.51 242.785 103.138C241.656 104.917 240.162 106.383 238.302 107.534ZM290.884 103.97C292.519 99.7754 292.128 97.6502 289.711 97.5939C288.653 97.5693 287.347 98.2946 285.792 99.7699C284.237 101.245 283.208 102.808 282.706 104.459L282.712 104.233C282.375 105.434 281.975 106.18 281.513 106.472C281.055 106.612 280.302 106.519 279.253 106.193C277.001 105.687 275.55 106.182 274.901 107.678C274.252 109.175 275.052 110.251 277.3 110.908C278.198 111.232 278.78 112.001 279.046 113.216C279.166 114.277 279.1 116.543 278.846 120.013C278.611 122.88 278.546 125.07 278.653 126.584C278.759 128.098 279.173 129.468 279.892 130.694C280.896 132.531 282.456 133.474 284.571 133.523C286.988 133.58 288.97 133.021 290.516 131.848C292.213 130.678 293.855 128.827 295.442 126.295C297.646 123.323 298.634 120.55 298.408 117.975L298.075 113.886L306.266 112.943C308.013 112.766 309.499 112.583 310.724 112.394C310.603 112.827 310.482 113.269 310.361 113.719C309.499 117.326 309.012 121.018 308.901 124.794C308.639 128.567 308.863 131.217 309.574 132.745C310.134 134.27 311.264 134.372 312.966 133.051C314.819 131.734 317.63 128.701 321.398 123.952L330.356 112.37L330.389 118.946C330.291 122.269 330.833 124.398 332.015 125.332C332.752 125.954 333.352 126.119 333.814 125.828C334.427 125.54 336.043 124.595 338.66 122.993L340.279 121.897L345.598 118.393L346.651 121.139C347.655 122.976 349.119 124.597 351.043 126.002C353.122 127.26 355.442 128.069 358.001 128.431C359.809 128.625 361.931 128.447 364.366 127.899C366.801 127.351 369.087 126.725 371.224 126.019C373.366 125.162 375.128 124.371 376.509 123.648C377.214 123.203 377.721 122.813 378.032 122.476C377.902 123.773 377.818 125.08 377.779 126.398C377.517 130.171 377.741 132.821 378.452 134.349C379.011 135.873 380.142 135.975 381.844 134.655C383.697 133.337 386.507 130.304 390.275 125.555L399.233 113.974L399.267 120.55C399.169 123.873 399.711 126.002 400.893 126.936C401.63 127.558 402.23 127.723 402.692 127.431C403.305 127.143 404.92 126.199 407.537 124.597L409.157 123.501L414.476 119.997L415.529 122.742C416.533 124.58 417.997 126.201 419.921 127.606C422 128.863 424.319 129.673 426.879 130.035C428.687 130.228 430.809 130.051 433.244 129.503C435.679 128.955 437.965 128.328 440.102 127.622C442.146 126.804 443.845 126.047 445.197 125.35C446.053 125.749 446.631 126.106 446.93 126.421C447.374 126.734 447.736 127.271 448.016 128.033C448.283 129.249 448.845 130.698 449.702 132.38C450.564 133.912 451.362 135.064 452.095 135.837C453.414 137.228 454.818 138.319 456.307 139.109C457.942 140.054 459.677 140.17 461.512 139.457C463.343 138.895 465.353 137.355 467.544 134.836C469.579 132.65 471.816 129.441 474.254 125.21C474.054 127.418 473.97 129.543 474.003 131.586C473.905 134.909 474.3 136.883 475.189 137.508C475.922 138.281 476.753 138.3 477.682 137.566C478.761 136.836 479.703 135.648 480.508 134.004C481.156 132.508 481.963 130.789 482.927 128.846C484.047 126.756 485.164 124.742 486.28 122.803C487.546 120.867 488.73 119.157 489.832 117.671C490.939 116.034 491.805 114.845 492.432 114.104L494.765 111.891C495.076 111.596 495.291 111.979 495.411 113.039C495.606 116.672 496.364 119.183 497.683 120.574C499.154 121.969 500.414 122.829 501.462 123.156C503.857 123.968 506.203 123.871 508.5 122.867C510.134 122.199 511.499 121.524 512.595 120.844C511.799 123.583 511.367 126.093 511.3 128.373C511.229 130.79 511.545 132.913 512.247 134.743C512.948 136.574 514.119 137.886 515.759 138.68C519.184 140.422 524.108 140.083 530.528 137.663C535.216 135.833 540.02 132.699 544.938 128.262C545.188 128.422 545.381 128.573 545.516 128.716C545.961 129.029 546.323 129.566 546.603 130.329C546.869 131.544 547.431 132.993 548.289 134.676C549.151 136.207 549.948 137.359 550.681 138.132C552.001 139.523 553.405 140.614 554.893 141.405C556.529 142.349 558.264 142.465 560.099 141.752C561.929 141.19 563.94 139.65 566.131 137.132C568.472 134.617 571.081 130.748 573.956 125.524C576.351 121.197 577.864 118.587 578.495 117.695C579.13 116.651 578.995 116.119 578.088 116.098C577.333 116.08 576.948 116.298 576.935 116.751C576.926 117.053 576.362 118.25 575.242 120.34C574.127 122.279 572.934 124.291 571.663 126.378C566.895 134.278 562.689 138.487 559.046 139.007C555.407 139.376 552.981 137.052 551.768 132.036C551.497 130.972 551.513 130.443 551.815 130.45C552.272 130.31 553.352 129.579 555.054 128.258C557.684 126.203 559.957 123.46 561.872 120.028C563.787 116.596 564.785 113.521 564.865 110.802C564.927 108.688 564.514 107.318 563.626 106.692C562.888 106.071 561.533 105.888 559.56 106.144C558.338 106.569 556.634 107.966 554.448 110.333C552.413 112.704 550.98 115.165 550.149 117.715C549.345 119.359 548.636 120.325 548.023 120.613C547.561 120.904 546.501 120.955 544.844 120.765C543.191 120.425 542.131 120.476 541.664 120.918C541.051 121.206 540.411 122.4 539.745 124.501L539.752 124.274C539.414 125.476 539.62 126.161 540.371 126.329C540.971 126.494 541.644 126.737 542.391 127.057C542.393 127.057 542.395 127.058 542.398 127.059C541.944 127.426 541.482 127.792 541.012 128.158C536.685 131.383 532.532 133.78 528.555 135.35C524.734 136.772 521.477 136.999 518.785 136.029C516.248 134.912 515.13 131.788 515.433 126.656C515.65 124.393 516.261 121.611 517.266 118.309C518.27 115.008 519.939 112.25 522.271 110.037C524.449 107.972 525.599 107.394 525.724 108.304C525.853 109.063 525.262 111.165 523.951 114.611C523.142 116.406 522.651 117.679 522.478 118.431C522.455 119.186 522.591 119.718 522.884 120.027L522.878 120.254C523.171 120.563 523.704 120.424 524.477 119.838C525.25 119.251 526.03 118.438 526.817 117.398C527.754 116.362 528.621 115.173 529.416 113.831C530.362 112.493 531.08 111.225 531.569 110.027C532.702 107.484 532.911 105.524 532.195 104.147C531.48 102.77 530.443 102.065 529.083 102.034C527.572 101.999 525.813 102.713 523.804 104.178C521.8 105.492 519.854 107.411 517.966 109.937C515.976 112.69 514.467 115.455 513.441 118.23C513.138 118.361 512.818 118.501 512.479 118.651C508.036 120.664 504.77 121.193 502.682 120.237C500.745 119.285 500.143 116.626 500.876 112.26C501.396 110.005 501.667 108.499 501.689 107.744C501.716 106.838 501.434 106.151 500.843 105.684C499.817 104.602 498.921 104.203 498.157 104.488C497.393 104.772 496.151 105.877 494.431 107.802C493.338 108.986 492.01 110.466 490.446 112.244C489.033 114.025 487.462 116.028 485.733 118.255C484.16 120.335 482.659 122.567 481.228 124.952C479.797 127.337 478.595 129.652 477.622 131.897C477.337 131.286 477.295 130.151 477.495 128.493C477.695 126.835 478.051 125.029 478.562 123.076C479.077 120.972 479.668 118.87 480.335 116.769C481.157 114.521 481.972 112.5 482.781 110.705C483.572 109.514 484.136 108.318 484.474 107.117C484.812 105.915 484.99 105.013 485.007 104.408C484.421 103.79 483.599 103.469 482.541 103.444C481.488 103.268 480.578 103.398 479.809 103.834C478.876 104.719 477.905 106.888 476.896 110.341C476.043 113.646 475.334 117.182 474.77 120.948C474.748 121.09 474.727 121.232 474.707 121.374C474.178 122.262 473.635 123.165 473.076 124.082C468.308 131.982 464.103 136.192 460.459 136.712C456.82 137.08 454.394 134.757 453.181 129.741C452.91 128.676 452.926 128.148 453.228 128.155C453.686 128.014 454.766 127.284 456.467 125.963C459.098 123.908 461.371 121.165 463.286 117.733C465.201 114.301 466.199 111.226 466.279 108.507C466.341 106.392 465.928 105.022 465.039 104.397C464.302 103.775 462.946 103.592 460.974 103.849C459.752 104.274 458.048 105.67 455.861 108.038C453.826 110.409 452.393 112.869 451.562 115.419C450.758 117.063 450.049 118.029 449.436 118.317C448.974 118.609 447.914 118.66 446.257 118.47C444.604 118.129 443.544 118.18 443.078 118.623C442.465 118.911 441.825 120.105 441.158 122.206L441.165 121.979C440.827 123.18 441.034 123.865 441.785 124.034C442.133 124.13 442.505 124.251 442.902 124.399C441.568 124.823 440.048 125.279 438.342 125.768C435.908 126.315 433.399 126.786 430.818 127.179C428.236 127.573 425.972 127.444 424.026 126.795C420.88 125.814 419.045 123.958 418.521 121.225C417.535 118.784 416.513 117.551 415.456 117.526C414.549 117.505 412.781 118.522 410.15 120.577C408.453 121.746 406.987 122.77 405.751 123.648C404.516 124.526 403.747 124.962 403.445 124.955C403.143 124.948 402.863 124.186 402.606 122.668C402.352 121 402.257 119.108 402.319 116.993C402.23 114.875 402.053 113.209 401.786 111.993C401.671 110.781 401.388 110.094 400.94 109.933C400.789 109.929 400.167 110.519 399.074 111.703C397.98 112.887 396.803 114.371 395.541 116.155C392.395 120.314 389.573 123.725 387.076 126.388C384.584 128.899 383.191 130 382.897 129.691C382.6 129.533 382.629 128.551 382.984 126.746C383.491 124.944 384.004 122.915 384.524 120.66C385.199 118.257 385.95 115.857 386.777 113.457C387.603 111.058 388.343 109.035 388.996 107.388C390.454 104.096 391.203 101.771 391.243 100.411C391.438 98.9045 391.016 97.8366 389.976 97.2078C387.884 96.4033 386.038 97.494 384.438 100.48C382.838 103.465 381.105 108.413 379.239 115.322C378.745 117.388 378.375 119.481 378.127 121.602C377.729 121.622 376.901 121.844 375.643 122.267C373.963 122.833 371.904 123.465 369.465 124.164C367.03 124.712 364.521 125.182 361.94 125.576C359.358 125.969 357.095 125.841 355.148 125.191C352.003 124.211 350.168 122.354 349.643 119.621C348.657 117.18 347.635 115.947 346.578 115.922C345.671 115.901 343.903 116.918 341.272 118.973C339.575 120.143 338.109 121.166 336.874 122.045C335.638 122.923 334.87 123.358 334.567 123.351C334.265 123.344 333.985 122.582 333.728 121.064C333.474 119.396 333.379 117.504 333.441 115.39C333.353 113.272 333.175 111.605 332.908 110.389C332.793 109.177 332.511 108.491 332.062 108.329C331.911 108.326 331.289 108.916 330.196 110.099C329.103 111.283 327.925 112.767 326.663 114.552C323.517 118.711 320.696 122.121 318.198 124.784C315.706 127.295 314.313 128.397 314.019 128.087C313.722 127.929 313.751 126.948 314.106 125.142C314.613 123.34 315.126 121.312 315.646 119.056C316.321 116.654 317.072 114.253 317.899 111.854C318.725 109.455 319.465 107.431 320.119 105.784C321.576 102.492 322.325 100.167 322.365 98.8077C322.56 97.3008 322.138 96.2329 321.099 95.6041C319.006 94.7996 317.16 95.8902 315.56 98.876C314.298 101.232 312.953 104.809 311.525 109.607C310.907 109.664 310.243 109.744 309.532 109.845C308.621 109.975 307.559 110.101 306.346 110.224L302.72 110.14L299.094 110.056L295.935 109.529L288.931 108.685L290.884 103.97ZM552.571 120.425C553.373 119.512 553.923 118.867 554.222 118.49C554.693 117.896 554.933 117.448 554.942 117.146C554.951 116.868 554.766 116.585 554.389 116.297C554.727 115.769 555.082 115.225 555.454 114.664C556.25 113.322 557.038 112.207 557.82 111.318C558.607 110.279 559.156 109.611 559.467 109.316C560.386 108.884 560.9 109.425 561.006 110.939C561.113 112.453 560.613 114.029 559.506 115.665C558.396 117.453 556.916 118.93 555.068 120.097C553.461 121.204 552.629 121.313 552.571 120.425ZM288.337 113.433C289.568 112.706 291.223 112.971 293.303 114.228C294.489 115.012 295.289 116.088 295.702 117.458C296.119 118.677 296.079 120.037 295.582 121.537C295.24 122.889 294.593 124.31 293.642 125.799C292.691 127.289 291.447 128.469 289.91 129.34C288.217 130.359 286.995 130.784 286.244 130.615C285.497 130.295 284.984 129.754 284.704 128.992C284.287 127.773 284.1 126.408 284.145 124.898C284.189 123.387 284.629 121.282 285.465 118.58C286.304 115.728 287.262 114.012 288.337 113.433ZM456.481 117.801C454.784 118.971 453.95 119.027 453.982 117.97C453.995 117.516 454.244 116.767 454.728 115.72C455.364 114.676 456.077 113.559 456.868 112.369C457.663 111.027 458.452 109.912 459.234 109.023C460.02 107.983 460.569 107.316 460.88 107.021C461.8 106.589 462.313 107.13 462.42 108.644C462.526 110.158 462.026 111.733 460.92 113.37C459.809 115.158 458.329 116.635 456.481 117.801Z" fill="black"/>
                        </svg>
                    </NavLink >
                    <div className={"w-full flex flex-col tracking-wider -mt-6"}>
                        <div className={"flex justify-end w-full pr-3 pb-2"}>
                            {
                                isAuthenticated ? (
                                    <h3 onClick={() => props.onLogout()} className={"text-lg mr-3"}>hello {context?.user?.username}</h3>
                                ):(
                                    <Link to={"/login"} className={"group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px] text-lg mr-3"}>Sign in</Link>
                                )
                            }
                            <svg className={"h-7 hidden"} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.5431 20.5748C16.627 21.8767 14.2887 22.6415 11.7647 22.6415C5.26724 22.6415 0 17.573 0 11.3208C0 5.06847 5.26724 0 11.7647 0C18.2622 0 23.5294 5.06847 23.5294 11.3208C23.5294 14.3276 22.3112 17.0607 20.3237 19.0879L29.6554 28.0674C30.1149 28.5095 30.1149 29.2263 29.6554 29.6684C29.196 30.1105 28.4511 30.1105 27.9916 29.6684L18.5799 20.6118C18.5673 20.5997 18.555 20.5873 18.5431 20.5748ZM21.1765 11.3208C21.1765 16.3226 16.9627 20.3774 11.7647 20.3774C6.56673 20.3774 2.35294 16.3226 2.35294 11.3208C2.35294 6.31893 6.56673 2.26415 11.7647 2.26415C16.9627 2.26415 21.1765 6.31893 21.1765 11.3208Z" fill="black"/>
                            </svg>
                        </div>
                        <div className={`flex border-t-2 border-b-2 border-black w-full ${open ? "h-16" : `h-112`}`}>
                            <div onClick={() => setOpen(false)} className={`ml-3 group flex pl-2 items-center justify-start gap-2 ${open ? "" : "hidden"}`}>
                                <p className={"group-hover:translate-x-1 duration-300 w-max uppercase"}>
                                    {location.pathname.split("/")[location.pathname.split("/").length - 1].replace("-", " ")}
                                </p>
                                <svg className={"-ml-2 scale-50 transition-all -rotate-90 delay-75 duration-500 group-hover:translate-x-1 group-hover:-rotate-0"} width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.0271 14.5588L28.6458 1.94009L27.2316 0.525873L14.6129 13.1445L1.99429 0.525926L0.580078 1.94014L13.1987 14.5588L13.1664 14.5911L14.5806 16.0053L14.6129 15.973L14.6453 16.0054L16.0595 14.5912L16.0271 14.5588Z" fill="black"/>
                                </svg>
                            </div>
                            <div className={`flex transition-all w-full duration-300 ${open ? "scale-y-0" : ""}`}>
                                <div className={"flex w-1/5 flex-col border-r-2 border-black"}>
                                    <div
                                        className={"navbar-link-box border-b-2 border-black group"}
                                        // onMouseLeave={() => {
                                        //     if (entered) {
                                        //         setContent(<Default />);
                                        //         setEntered(false);
                                        //     }
                                        // }}
                                        onMouseEnter={() => handleMouseEnterShopping()}
                                    >
                                        <Link className={"group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px] ml-2"} to={"/shopping"}> Shopping</Link>
                                    </div>
                                    <div className={"navbar-link-box border-b-2 border-black group"}>
                                        <Link className={"group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px] ml-2"} to={"/About-us"}> About Us</Link>
                                    </div>
                                    <div className={"navbar-link-box border-b-2 border-black group"}>
                                        <Link className={"group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px] ml-2"} to={"/contact"}> Contact Us</Link>
                                    </div>
                                    <div className={"navbar-link-box group"}>
                                        <Link className={"group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px] ml-2"} to={"/my-cart"}> My Cart</Link>
                                    </div>
                                </div>
                                <Shopping
                                    entered={shoppingEntered}
                                    animatEnd={shoppingAnimationEnd}
                                    onHoverStart={() => {}}
                                    onHoverEnd={handleMouseLeaveShopping}
                                />
                                <Default
                                    entered={defaultEntered}
                                    animatEnd={defaultAnimationEnd}
                                    onHoverStart={() => {}}
                                    onHoverEnd={() => {}}
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            }
            <Outlet />
        </div>
    );
}