import {FC, useContext} from "react";
import {Footer} from "../../../Component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {CarrousselItem} from "../../../Component";
import {NavLink} from "react-router-dom";
import "../../../Component/ToolBar/ToolBar.scss";
import {ProductContext, TreeType} from "../../../App";
import Slider from "react-slick";
// @ts-ignore
import first from "./assets/img/first.png";
// @ts-ignore
import second from "./assets/img/second.png";
// @ts-ignore
import third from "./assets/img/third.png";
// @ts-ignore
import kenya from "./assets/img/kenya.png";

export const HomeShopping:FC = () => {
    const treesContext = useContext(ProductContext);
    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    if (treesContext.trees === null)
        return <></>
    return (
        <div className={"overflow-x-hidden"}>
            <div className={"flex flex-col"}>
                <Slider {...settings}>
                    {treesContext.trees.map((tree: TreeType, index) => {
                        return <CarrousselItem key={index} tree={tree}/>
                    })}
                </Slider>
                <div className={`flex flex-col-reverse lg:flex-row justify-between lg:h-[70vh] border-b-2 border-black`}>
                    <div className={"flex flex-col w-full lg:w-3/5 py-5 lg:py-20 px-5 lg:px-24"}>
                        <div className={"mt-10 mb-7 tracking-wide text-justify"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a orci justo. Nunc pellentesque augue et arcu commodo, ac porta mi iaculis. Sed et urna eleifend, maximus lorem in, accumsan dui. Pellentesque sit amet laoreet turpis, ac tempor lacus. Nam ut ipsum suscipit, rutrum libero tempor, scelerisque dui. Cras condimentum bibendum lorem, a laoreet dolor aliquam vitae. Etiam ligula mi, sollicitudin non varius nec, pretium sit amet justo. Donec gravida volutpat ex nec rutrum. Integer ut efficitur ante. Aenean imperdiet efficitur suscipit. Ut sed justo nulla. Proin vehicula dolor eget ullamcorper mattis.</div>
                        <div className={"flex justify-end mr-32 mb-3 lg:mb-0"}>
                            <NavLink className={"text-underline-red tracking-wider text-lg group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px]"} to={"/shopping-page?filter=Collection&value=Kenya"}>
                                Check here
                            </NavLink>
                        </div>

                    </div>
                    <div className={"border-b-2 lg:border-b-0 lg:border-l-2 p-5 lg:p-0 border-black w-full lg:w-2/5 flex justify-center items-center"}>
                        <svg width="383" height="356" viewBox="0 0 383 356" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g opacity="0.75">
                                <path d="M0 0H383V356H0V0Z" fill="white"/>
                                <path d="M0 0H383V356H0V0Z" fill="url(#pattern0)" fillOpacity="0.7"/>
                                <path d="M48.8302 189.932C47.1495 190.618 45.2514 190.621 43.136 189.941C41.1952 189.229 39.6258 188.082 38.4278 186.502C36.2268 184.391 35.2925 181.313 35.6247 177.266C35.9244 173.044 37.2553 168.534 39.6174 163.735C42.0565 158.377 45.2487 152.694 49.194 146.685C53.3139 140.643 57.9575 134.499 63.1249 128.255C68.4668 121.977 74.1741 115.72 80.2468 109.482C86.4616 103.037 92.9708 96.7154 99.7743 90.5184C109.001 82.769 115.332 79.3786 118.767 80.347C120.185 81.1606 121.295 82.7572 122.1 85.1369C122.904 87.5167 123.286 91.5164 123.247 97.1361C123.207 102.756 122.739 110.449 121.844 120.216C120.916 129.809 119.532 142.295 117.691 157.675C117.172 162.663 116.73 167.092 116.366 170.964C116.143 174.628 116.048 176.547 116.081 176.722C116.113 176.897 117.735 175.408 120.946 172.256C124.124 168.929 127.641 164.993 131.498 160.45C133.584 158.057 136.2 155.109 139.346 151.608C142.492 148.106 145.867 144.379 149.472 140.427C153.219 136.266 157.053 132.089 160.974 127.895C164.895 123.701 168.674 119.715 172.312 115.938C179.521 108.033 185.829 101.117 191.236 95.1889C196.643 89.2607 201.362 84.008 205.392 79.4307C209.423 74.8535 212.908 70.7434 215.847 67.1003C218.753 63.2826 221.43 59.6899 223.878 56.3225C226.817 52.6795 228.942 50.0077 230.253 48.3072C231.738 46.573 233.021 45.6926 234.101 45.6659C237.865 45.4849 239.81 47.1925 239.936 50.7889C239.738 52.6375 236.914 55.4436 231.467 59.2073C228.507 61.768 224.046 65.9755 218.083 71.8297C212.294 77.6503 205.692 84.4421 198.275 92.2052C191.001 99.7599 183.284 107.852 175.125 116.482C167.141 125.079 159.385 133.45 151.86 141.597C144.508 149.709 137.774 157.251 131.657 164.221C125.714 171.157 121.131 176.655 117.908 180.715C117.198 181.757 116.575 182.782 116.039 183.79C115.645 184.59 115.301 185.652 115.004 186.976C114.85 188.092 114.674 189.574 114.475 191.423C114.244 193.097 114.023 195.312 113.813 198.068C113.741 203.513 113.603 208.608 113.401 213.354C113.199 218.1 112.987 222.304 112.764 225.968C112.716 229.598 112.712 232.495 112.753 234.659C112.794 236.824 112.815 237.906 112.815 237.906C113.262 238.363 114.549 238.478 116.676 238.25C118.978 237.988 121.82 237.713 125.202 237.424C126.599 237.155 128.011 236.974 129.441 236.88C130.87 236.786 132.37 236.588 133.941 236.286C145.211 234.66 155.871 233.153 165.919 231.762C176.175 230.514 185.224 229.587 193.068 228.983C197.53 228.668 202.985 228.342 209.432 228.007C216.054 227.638 222.589 227.286 229.036 226.951C235.516 226.791 241.281 226.677 246.332 226.61C251.382 226.544 254.638 226.551 256.1 226.632C258.008 227.17 259.425 227.984 260.351 229.073C261.452 230.128 261.663 231.264 260.985 232.481L260.937 232.219C260.194 233.086 259.648 233.553 259.299 233.62C259.124 233.654 258.726 233.459 258.105 233.035C257.069 232.329 254.343 231.767 249.926 231.35C245.508 230.933 239.869 230.75 233.007 230.803C226.353 230.997 218.722 231.289 210.115 231.678C201.508 232.066 192.48 232.626 183.033 233.358C173.76 234.056 164.328 234.875 154.739 235.814C145.149 236.754 136.028 237.785 127.376 238.906L113.138 241.103L113.035 244.924L112.987 244.662C112.5 249.825 112.353 254.379 112.544 258.325C112.769 262.445 113.232 266.882 113.935 271.635C114.366 275.897 114.783 278.622 115.185 279.812C115.587 281.002 116.377 281.846 117.555 282.344C118.493 282.525 119.043 283.053 119.205 283.927C119.401 284.975 119.246 286.091 118.743 287.274C118.415 288.424 117.792 289.449 116.874 290.35C115.989 291.425 115.023 292.063 113.976 292.265L111.095 292.819C108.85 291.441 107.461 289.807 106.929 287.918C106.571 285.996 106.542 282.924 106.842 278.702C106.955 275.422 107.123 271.95 107.345 268.286C107.775 264.764 108.046 261.363 108.16 258.082C108.273 254.802 108.292 251.992 108.219 249.653C108.32 247.28 108.289 245.656 108.127 244.782L107.328 241.949C105.234 242.352 102.861 242.718 100.209 243.047C97.7328 243.342 95.3598 243.709 93.0903 244.145C87.4713 245.045 83.4783 245.451 81.1113 245.364C78.9514 245.417 77.1629 245.037 75.7458 244.224C74.7103 243.518 74.0301 242.291 73.7049 240.543C73.5869 238.936 74.0089 237.316 74.9708 235.683C75.1129 235.475 75.6649 234.554 76.6268 232.92C77.7633 231.253 79.184 229.17 80.8888 226.669C82.5935 224.169 84.5114 221.356 86.6424 218.23C88.9479 215.071 91.4118 211.791 94.034 208.39L112.032 182.66L113.655 166.598C115.353 151.426 116.705 138.765 117.71 128.615C118.683 118.29 119.386 109.918 119.819 103.498C120.22 96.9038 120.318 92.0874 120.115 89.049C119.911 86.0105 119.45 84.0174 118.731 83.0695C118.013 82.1215 117.113 81.6609 116.033 81.6877C114.953 81.7144 113.447 82.3663 111.515 83.6432C109.55 84.7454 107 86.5937 103.867 89.188C100.907 91.7487 97.1016 95.1059 92.4495 99.2596C82.6541 107.842 74.1621 116.627 66.9733 125.614C59.7846 134.6 53.8341 143.439 49.1219 152.13C43.2167 164.128 41.0298 172.786 42.5614 178.104C43.6378 180.974 45.3698 182.994 47.7573 184.164C51.0707 186.423 51.3411 188.363 48.5683 189.982L48.8302 189.932ZM111.728 189.779L106.681 196.181C103.917 199.791 101.004 204.062 97.9439 208.996C95.0256 213.721 92.3691 218.396 89.9745 223.02C87.5474 227.47 85.7373 231.349 84.5442 234.656C83.3512 237.963 83.0815 239.916 83.7353 240.514C83.9749 240.83 84.9128 241.012 86.549 241.059C88.1852 241.106 90.1706 241.086 92.5051 240.999C94.8721 241.087 97.2229 241.087 99.5574 241C102.066 240.879 104.281 240.634 106.202 240.265C106.725 240.164 107.2 239.801 107.626 239.176C108.053 238.551 108.365 237.314 108.564 235.466C108.969 233.758 109.245 231.352 109.391 228.246C109.678 224.932 109.978 220.711 110.29 215.582L111.728 189.779Z" fill="black"/>
                                <path d="M158.643 208.994C157.015 210.937 155.956 212.046 155.465 212.321C155.116 212.388 155.229 213 155.806 214.156C158.45 219.622 161.818 221.689 165.911 220.359C169.97 218.854 173.757 212.966 177.272 202.695C178.213 199.979 179.084 197.368 179.883 194.86C180.65 192.178 181.001 190.663 180.936 190.313C180.838 189.789 181.226 189.443 182.099 189.275C183.146 189.073 183.435 189.651 182.964 191.009C182.461 192.192 181.371 195.57 179.695 201.142C177.691 207.864 175.656 212.963 173.59 216.438C171.698 219.879 169.77 222.151 167.805 223.253C165.873 224.53 163.849 224.829 161.734 224.15C159.825 223.612 157.939 222.707 156.075 221.437C155.04 220.731 153.836 219.604 152.463 218.058C151.058 216.337 150.051 214.811 149.442 213.48C148.93 212.673 148.38 212.146 147.791 211.897C147.17 211.473 145.834 211.097 143.784 210.767C142.846 210.585 142.012 210.474 141.281 210.434C140.375 210.427 139.967 209.691 140.056 208.225L140.105 208.488C140.348 205.906 140.786 204.374 141.42 203.89C141.846 203.265 143.052 202.942 145.037 202.922C146.99 202.728 148.196 202.405 148.654 201.955C149.288 201.471 149.862 200.184 150.377 198.093C150.697 194.954 151.732 191.768 153.481 188.535C155.405 185.268 157.017 183.238 158.316 182.445C160.52 181.659 162.124 181.531 163.127 182.063C164.304 182.56 165.121 184.032 165.576 186.479C166.161 189.625 165.78 193.41 164.433 197.833C163.086 202.256 161.156 205.976 158.643 208.994ZM153.794 200.423C154.022 201.646 154.966 201.374 156.626 199.607C158.461 197.805 159.794 195.738 160.626 193.406C161.49 191.248 161.673 189.312 161.173 187.598C160.673 185.884 159.948 185.39 158.998 186.115C158.714 186.532 158.25 187.436 157.604 188.828C156.927 190.044 156.297 191.523 155.717 193.264C155.104 194.83 154.563 196.292 154.092 197.65C153.796 198.974 153.696 199.899 153.794 200.423Z" fill="black"/>
                                <path d="M184.782 189.03C184.462 192.169 184.245 195.379 184.132 198.659C183.986 201.765 184.044 204.017 184.304 205.415L185.066 210.971L190.052 201.322C193.693 194.647 196.278 190.077 197.808 187.61C199.513 185.109 200.851 184.037 201.821 184.394C202.377 184.468 203.309 185.103 204.617 186.3C206.066 187.288 207.445 188.381 208.753 189.578C210.267 190.915 211.869 192.237 213.558 193.541C215.215 194.67 216.512 195.326 217.45 195.508C219.468 195.662 222.158 195.054 225.519 193.684C228.881 192.313 232.636 190.142 236.785 187.171C239.318 185.236 240.808 184.496 241.254 184.954C241.669 185.236 240.784 186.311 238.6 188.18C235.389 191.332 232.08 193.96 228.674 196.064C225.236 197.992 222.469 199.158 220.374 199.561C219.501 199.729 218.318 199.686 216.824 199.43C215.472 198.966 214.016 198.431 212.457 197.826C211.04 197.013 209.606 196.112 208.157 195.123C206.707 194.135 205.519 193.096 204.593 192.007C204.049 191.026 203.363 190.252 202.535 189.688C201.848 188.914 201.331 188.562 200.981 188.629C200.632 188.696 199.977 189.546 199.015 191.179C198.053 192.813 196.965 194.742 195.752 196.967C194.538 199.192 193.286 201.695 191.995 204.478C190.672 207.086 189.562 209.382 188.665 211.365C187.724 214.08 186.325 215.798 184.47 216.517C182.789 217.202 181.508 216.634 180.627 214.812C179.746 212.99 179.018 210.053 178.445 205.999C177.839 201.771 177.497 196.043 177.419 188.817C177.597 185.886 177.714 183.601 177.771 181.961C177.828 180.32 177.965 179.117 178.185 178.351C178.546 177.376 178.885 176.768 179.201 176.526C179.485 176.109 179.977 175.834 180.675 175.699C183.054 174.88 184.51 175.414 185.042 177.303C185.541 179.017 185.455 182.926 184.782 189.03Z" fill="black"/>
                                <path d="M267.872 201.014C269.565 199.421 270.576 198.049 270.904 196.9C271.375 195.542 271.667 193.223 271.78 189.943C271.876 182.683 271.79 177.359 271.521 173.971C271.253 170.583 270.775 168.502 270.089 167.729C269.642 167.272 268.747 167.806 267.404 169.332C266.202 170.649 264.678 172.663 262.831 175.371C260.984 178.08 259.028 181.172 256.962 184.647C254.896 188.122 252.934 191.668 251.075 195.284C249.675 198.45 248.226 201.354 246.728 203.995C245.372 206.429 244.536 207.766 244.22 208.008C243.302 208.909 242.031 208.882 240.407 207.927C238.99 207.113 237.699 206.004 236.533 204.599C235.652 202.777 235.197 200.33 235.168 197.258C234.932 194.045 235.077 190.939 235.605 187.941C236.099 184.769 236.85 181.999 237.857 179.633C239.038 177.234 240.397 175.795 241.936 175.318C243.791 174.599 245.182 174.784 246.108 175.873C247.208 176.929 247.397 178.431 246.675 180.381C246.314 181.355 245.963 182.871 245.622 184.928C245.282 186.985 244.941 189.042 244.6 191.099C244.434 193.122 244.323 194.954 244.266 196.594C244.177 198.059 244.236 198.863 244.443 199.004C244.857 199.286 245.42 198.907 246.13 197.865C246.808 196.648 247.715 195.206 248.852 193.539C253.126 186.381 256.596 180.735 259.263 176.601C261.897 172.292 264.028 169.167 265.655 167.224C267.425 165.074 268.818 163.81 269.833 163.434C270.99 162.849 272.07 162.822 273.073 163.353C274.283 164.026 275.245 166.285 275.96 170.13C276.578 173.451 276.808 177.118 276.651 181.131C276.594 182.771 276.608 184.307 276.694 185.739C276.779 187.17 276.855 188.061 276.92 188.411C277.366 188.868 278.31 188.596 279.751 187.594C281.335 186.385 283.131 184.862 285.14 183.027C289.553 178.558 293.288 175.305 296.344 173.268C299.543 171.024 301.661 170.254 302.696 170.96C303.699 171.491 303.758 172.295 302.873 173.37C301.956 174.271 300.569 175.08 298.714 175.8C297.557 176.384 295.712 177.644 293.179 179.58C290.788 181.307 288.271 183.33 285.628 185.649L276.062 194.007C275.973 195.472 275.9 197.025 275.844 198.665C275.787 200.305 275.714 201.858 275.625 203.324C275.106 208.311 274.352 213.978 273.363 220.324C272.406 226.844 271.242 233.223 269.87 239.461C268.674 245.665 267.38 251.345 265.988 256.501C264.596 261.657 263.31 265.434 262.129 267.834C260.083 272.391 257.009 275.789 252.904 278.027C248.8 280.265 244.998 280.725 241.498 279.407C237.202 277.699 234.664 274.748 233.884 270.553C233.266 267.232 233.566 263.011 234.783 257.889C236.032 252.941 238.145 247.285 241.119 240.919C242.158 238.728 243.143 236.728 244.072 234.92C244.859 233.32 245.411 232.4 245.728 232.158C246.012 231.741 246.974 230.108 248.614 227.258C250.428 224.374 252.543 221.161 254.958 217.619C257.373 214.077 259.821 210.709 262.301 207.516C264.781 204.324 266.638 202.156 267.872 201.014ZM271.703 199.733L264.542 207.9C254.382 220.355 247.19 232.238 242.965 243.551C238.741 254.864 238.206 263.657 241.362 269.929C244.757 276.517 248.996 275.973 254.078 268.297C255.783 265.796 257.664 261.814 259.721 256.349C261.811 251.059 263.629 245.278 265.175 239.007C266.928 232.876 268.331 226.813 269.386 220.817C270.615 214.788 271.292 209.679 271.417 205.491L271.703 199.733Z" fill="black"/>
                                <path d="M326.711 159.822C326.358 162.787 326.131 165.456 326.03 167.828C325.897 170.027 325.834 172.12 325.843 174.11C325.851 176.1 325.947 178.073 326.13 180.029C326.488 181.952 326.894 184.136 327.349 186.583C328.508 193.783 329.773 198.156 331.146 199.702C332.551 201.423 334.199 200.563 336.09 197.121L335.828 197.172C336.681 195.922 337.884 193.156 339.438 188.874C340.993 184.592 342.569 179.944 344.168 174.929C346.895 166.258 348.832 160.635 349.981 158.061C351.129 155.487 351.882 155.161 352.24 157.083C352.338 157.608 352.058 159.019 351.4 161.318C350.918 163.583 350.167 166.353 349.149 169.626C348.272 172.691 347.254 175.965 346.093 179.447C344.933 182.929 343.739 186.236 342.514 189.368C341.463 192.467 340.418 195.112 339.379 197.303C338.372 199.669 337.656 201.165 337.23 201.79C335.886 203.316 334.691 204.179 333.643 204.381C332.77 204.549 331.467 204.347 329.733 203.776C327.618 203.096 325.728 201.197 324.063 198.078C322.43 195.133 321.191 191.389 320.346 186.845C320.086 185.446 319.825 184.048 319.565 182.65C319.273 181.077 319.155 179.47 319.211 177.83C319.158 176.573 319.05 175.508 318.888 174.634C318.693 173.585 318.601 172.607 318.613 171.699C318.451 170.825 318.376 169.935 318.388 169.027C317.766 168.604 316.92 169.4 315.848 171.417C314.952 173.4 313.945 175.766 312.829 178.515C308.3 189.162 304.377 194.805 301.06 195.443C299.14 195.812 297.542 195.486 296.267 194.464C294.959 193.268 294.11 191.621 293.72 189.523C293.103 186.202 293.555 182.314 295.076 177.857C297.88 168.628 302.25 163.442 308.185 162.3C310.979 161.763 312.686 161.706 313.307 162.13C315.029 163.609 316.371 163.532 317.333 161.898C318.262 160.09 319.167 156.205 320.047 150.243C320.322 147.836 320.673 146.32 321.1 145.695C321.493 144.895 322.285 144.29 323.474 143.88C325.33 143.161 326.546 143.38 327.122 144.536C327.362 144.852 327.409 146.563 327.263 149.669C327.26 152.566 327.076 155.951 326.711 159.822ZM305.948 185.27C312.398 174.253 313.091 169.232 308.029 170.206C306.981 170.407 305.786 171.271 304.442 172.797C303.273 174.289 302.153 176.043 301.081 178.06C300.152 179.868 299.429 181.817 298.914 183.908C298.192 185.857 297.944 187.443 298.172 188.667C298.53 190.589 299.478 191.312 301.016 190.835C302.697 190.15 304.428 188.278 306.21 185.219L305.948 185.27Z" fill="black"/>
                            </g>
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_239_3" transform="translate(0 -0.306882) scale(0.00299401 0.00322109)"/>
                                </pattern>
                                <image id="image0_239_3" width="334" height="501" xlinkHref={kenya}/>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div className={`h-[70vh] flex flex-col justify-start`}>
                    <div className={`z-0 flex-row justify-evenly hidden lg:flex mt-20`}>
                        <svg className={"scale-110"} width="297" height="277" viewBox="0 0 297 277" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="297" height="276.063" fill="white"/>
                            <rect width="297" height="276.063" fill="url(#pattern10)" fillOpacity="0.8"/>
                            <defs>
                                <pattern id="pattern10" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_24_391" transform="translate(0 -0.27933) scale(0.00243902 0.00262401)"/>
                                </pattern>
                                <image id="image0_24_391" width="410" height="594" xlinkHref={first}/>
                            </defs>
                        </svg>
                        <svg width="297" height="277" viewBox="0 0 297 277" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="297" height="276.063" fill="white"/>
                            <rect width="297" height="276.063" fill="url(#pattern11)"/>
                            <defs>
                                <pattern id="pattern11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_24_390" transform="translate(-0.197128) scale(0.00234723 0.00252525)"/>
                                </pattern>
                                <image id="image0_24_390" width="594" height="396" xlinkHref={second}/>
                            </defs>
                        </svg>
                        <svg width="297" height="277" viewBox="0 0 297 277" fill="none" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="297" height="276.063" fill="white"/>
                            <rect width="297" height="276.063" fill="url(#pattern12)"/>
                            <defs>
                                <pattern id="pattern12" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_24_392" transform="translate(0 -0.306882) scale(0.00252525 0.00271677)"/>
                                </pattern>
                                <image id="image0_24_392" width="396" height="594" xlinkHref={third}/>
                            </defs>
                        </svg>
                    </div>
                    <div className={"lg:hidden w-full p-5 flex justify-center items-center"}>
                        <Slider className={"lg:hidden w-full"} {...settings}>
                            <img className={"aspect-square w-2/3"} src={first} alt={"tea party tree"}/>
                            <img className={"aspect-square w-2/3"} src={second} alt={"tea party tree"}/>
                            <img className={"aspect-square w-2/3"} src={third} alt={"tea party tree"}/>
                        </Slider>
                    </div>
                    <div className={"z-10 flex-row flex justify-between"}>
                        <div className={"rotate-2 ml-10 -mt-14 font-dreaming text-9xl"}>Tea Party</div>
                        <NavLink className={"text-underline-red mr-48 mt-14 tracking-wider text-lg group-hover:navbar-link-hover navbar-link after:bg-underline-red after:[height:2px]"} to={"/shopping-page?filter=Collection&value=Tea%20Party"}>Check here</NavLink>
                    </div>
                </div>

            </div>
            <Footer/>
            
            
        </div>
    )


}