import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const FramerAnimeComponent = ({children, className=""}) => {
    return (
        <motion.div 
          className={className}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
        >
          {children}
        </motion.div>
      );
};

export default FramerAnimeComponent;