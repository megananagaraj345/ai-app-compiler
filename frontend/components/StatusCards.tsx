"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Database,
  Cpu,
  CheckCircle
} from "lucide-react";

export default function StatusCards() {

  const cards = [
    {
      title: "Validated",
      icon: ShieldCheck,
      color: "from-green-500 to-emerald-700"
    },
    {
      title: "Executable",
      icon: Cpu,
      color: "from-blue-500 to-cyan-700"
    },
    {
      title: "Consistent",
      icon: Database,
      color: "from-purple-500 to-fuchsia-700"
    },
    {
      title: "Production Ready",
      icon: CheckCircle,
      color: "from-orange-500 to-red-700"
    }
  ];

  return (

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.05
            }}
            className={`bg-gradient-to-br ${card.color} p-[1px] rounded-3xl`}
          >

            <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-6 h-full">

              <div className="flex items-center justify-between mb-6">

                <Icon className="w-10 h-10 text-white" />

                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  ACTIVE
                </span>

              </div>

              <h3 className="text-xl font-bold mb-2">
                {card.title}
              </h3>

              <p className="text-zinc-300 text-sm">
                Compiler validation successful
              </p>

            </div>

          </motion.div>

        );
      })}

    </div>
  );
}