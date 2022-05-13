import React, {FC} from "react";

interface loadingProps {
    className?: string;
}
export const Loading:FC<loadingProps> = ({className}) =>
    <div className={"w-full h-96 flex justify-center items-center ".concat(className ? className : "")}>
    <svg className={"animate-spin"} width="100" viewBox="0 0 561 561" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M280.209 0C434.959 0 560.419 125.46 560.419 280.21C560.419 325.718 549.567 368.687 530.31 406.69L492.509 384.862C508.091 353.319 516.845 317.792 516.845 280.212C516.845 149.512 410.915 43.582 280.215 43.582C149.505 43.582 43.575 149.512 43.575 280.212C43.575 355.778 79.341 426.152 139.95 470.822V522.842C53.473 472.737 0 380.662 0 280.212C0 125.462 125.46 0.002 280.22 0.002L280.209 0ZM514.759 433.56C507.017 445.384 498.407 456.583 489.005 467.08L458.15 436.217C464.927 428.494 471.216 420.311 476.959 411.74L514.759 433.56ZM467.06 489.033C456.572 498.424 445.372 507.037 433.548 514.779L411.72 476.978C420.298 471.236 428.47 464.947 436.204 458.169L467.06 489.033ZM406.677 530.326C394.173 536.658 381.122 542.092 367.622 546.521L356.329 504.349C366.145 501.021 375.669 497.056 384.852 492.517L406.672 530.326H406.677ZM337.638 554.537C324.005 557.373 310.009 559.224 295.724 560.006V516.365C306.126 515.685 316.341 514.341 326.337 512.365L337.638 554.537Z" fill="url(#paint0_angular_585_240)"/>
<defs>
    <radialGradient id="paint0_angular_585_240" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(280.209 280.003) rotate(90.0429) scale(279.997 280.204)">
<stop/>
<stop offset="1" stopColor="#A8A8A8"/>
    </radialGradient>
    </defs>
    </svg>
    </div>;