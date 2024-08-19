import { useLocation, useOutlet, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useEffect, useState, useLayoutEffect } from "react";



const AnimatedOutlet = () => {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const shouldAnimate = useRef(true);

    // Initialize pathDepthArray with two null values
    const pathDepthArray = useRef([null, null]);

    useEffect(() => {
        const pathParts = location.pathname.split("/").filter(part => part !== '');
        const currentPathArraySize = pathParts.length;

        // Shift the old value out and push the new depth in
        pathDepthArray.current.shift();
        pathDepthArray.current.push(currentPathArraySize);

        const [prevDepth, currDepth] = pathDepthArray.current;

        // Logic to decide if animation should happen
        if (prevDepth === 1 && currDepth === 2) {
            shouldAnimate.current = false;
        }
        else {
            shouldAnimate.current = true;
        }

        console.log(`Previous: ${prevDepth} - Current: ${currDepth} - Animate: ${shouldAnimate.current}`);

    }, [location.pathname]);

    console.log(`###Outside Animate: ${shouldAnimate.current}`);

    const animationConfig = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
    };

    return (
        <AnimatePresence mode="wait" initial={false}>
            {shouldAnimate.current ? (
                <motion.div
                    key={location.pathname}
                    {...animationConfig}
                >
                    {currentOutlet}
                </motion.div>
            ) : (
                currentOutlet
            )}
        </AnimatePresence>
    );
};

export default AnimatedOutlet;



// const AnimatedOutlet = () => {
//     const location = useLocation();
//     const currentOutlet = useOutlet();
//     const shouldAnimate = useRef(true);

//     const currentRoute = useRef(null);
//     const currentRouteName = useRef(null);
//     const [previousRoute, setPreviousRoute] = useState(null);


//     useLayoutEffect(() => {
//         const pathParts = location.pathname.split("/").filter(part => part !== '');
//         const currentPathArraySize = pathParts.length;

//         setPreviousRoute(currentPathArraySize);

//         currentRoute.current = currentPathArraySize;
//         currentRouteName.current = location.pathname;

//         if (previousRoute === 1 && currentRoute.current === 2) {
//             shouldAnimate.current = false;
//         }
//         else {
//             shouldAnimate.current = true;
//         }

//         console.log(`Previous: ${previousRoute} - Current: ${currentRoute.current} - Animate: ${shouldAnimate.current}`)
//     }, [location]);


//     const animationConfig = {
//         initial: { opacity: 0 },
//         animate: { opacity: 1 },
//         exit: { opacity: 0 },
//         transition: { duration: 0.3 }
//     };

//     return (
//         <AnimatePresence mode="wait" initial={false}>
//             {shouldAnimate.current ? (
//                 <motion.div
//                     key={location.pathname}
//                     {...animationConfig}
//                 >
//                     {currentOutlet}
//                 </motion.div>
//             ) : (
//                 currentOutlet
//             )}
//         </AnimatePresence>
//     );
// };

// export default AnimatedOutlet;











// import { useLocation, useOutlet, matchPath } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// const AnimatedOutlet = () => {
//     const location = useLocation();
//     const currentOutlet = useOutlet();
//     const prevOutletRef = useRef(null);

//     // List of paths that should be animated
//     const animatedPaths = ['/', '/Projects', '/About', '/Contact'];

//     const shouldAnimate = animatedPaths.includes(location.pathname);

//     useEffect(() => {
//         prevOutletRef.current = currentOutlet;
//     }, [currentOutlet]);


//     const animationConfig = {
//         initial: { opacity: 0},
//         animate: { opacity: 1},
//         exit: { opacity: 0},
//         transition: { duration: 0.3 }
//     };

//     if (!shouldAnimate) {
//         return currentOutlet;
//     }



//     return (
//         <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//                 key={location.pathname}
//                 {...animationConfig}
//             >
//                 {currentOutlet || prevOutletRef.current}
//             </motion.div>
//         </AnimatePresence>
//     );
// };

// export default AnimatedOutlet;