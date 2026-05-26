"use client";

import { motion } from "framer-motion";

const stages = [
  "Intent",
  "Architecture",
  "Schemas",
  "Validation",
  "Repair",
  "Runtime"
];

export default function PipelineFlow() {

  return (

    <div className="flex flex-wrap items-center justify-center gap-5">

      {stages.map((stage, index) => (

        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            scale: 1.08
          }}
          className="flex items-center gap-5"
        >

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-5 rounded-2xl shadow-2xl font-bold text-lg">

            {stage}

          </div>

          {index !== stages.length - 1 && (

            <motion.div
              animate={{
                x: [0, 8, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2
              }}
              className="text-3xl"
            >
              →
            </motion.div>

          )}

        </motion.div>

      ))}

    </div>
  );
}