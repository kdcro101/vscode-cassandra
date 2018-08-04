const easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

const easeInCubic = function (t, b, c, d) {
    const tc = (t /= d) * t * t;
    return b + c * (tc);
};

const inOutQuintic = function (t, b, c, d) {
    const ts = (t /= d) * t,
        tc = ts * t;
    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};
// main function
export const scrollToY = (element: HTMLDivElement, to: number, duration: number) => {
    return new Promise((resolve, reject) => {

        const start = element.scrollTop;
        const change = to - start;
        let currentTime = 0;
        const increment = 20;
        duration = (typeof (duration) === "undefined") ? 500 : duration;

        if (start === to) {
            console.log("resolving scroll early");
            resolve();
            return;
        }

        const animateScroll = function () {
            // increment the time
            currentTime += increment;
            // find the value with the quadratic in-out easing function
            const val = easeInOutQuad(currentTime, start, change, duration);
            // move the document.body
            element.scrollTop = val;

            // do the animation unless its over
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                resolve();
            }
        };
        animateScroll();
    });
};
/**
 *
 * @param element scrolling element
 * @param to destination scroll position
 * @param pps speed in pixels per second
 * @param updateCallback callback per iteration!
 */
export const scrollToY_pps = (element: HTMLDivElement, to: number, pps: number) => {
    // console.error("scrollToY_pps");
    return new Promise((resolve, reject) => {
        try {

            const start = element.scrollTop;
            const change = to - start;
            let currentTime = 0;
            const increment = 1000 / 60;
            const duration = Math.abs(change) / pps * 1000;
            const abs_change = Math.abs(change);

            // console.error("scrollToY_pps start  to: %s duration: %s pps: %s abs_change: %s", to, duration, pps, Math.abs(change));

            if (abs_change === 0) {
                resolve();
                return;
            }

            const animateScroll = function () {
                // increment the time
                currentTime += increment;
                // find the value with the quadratic in-out easing function
                const val = easeInCubic(currentTime, start, change, duration);
                // move the document.body
                element.scrollTop = val;
                // do the animation unless its over
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                } else {
                    resolve();
                }
            };
            animateScroll();
        } catch (e) {
            console.error(e);
        }
    });
};
