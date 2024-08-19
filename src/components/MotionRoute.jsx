import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const MotionRoute = ({ children }) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // Adjust duration as needed
        >
            {children}
        </motion.div>
    )
};

export default MotionRoute;
