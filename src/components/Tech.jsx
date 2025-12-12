// src/components/Tech.jsx
import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants/constants";

const Bar = ({ name, icon, pct = 80, delay = 0 }) => {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#0f1724] flex items-center justify-center border border-[#1f2430]">
        <img src={icon} alt={name} className="w-8 h-8 object-contain" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-white text-sm font-medium">{name}</span>
          <span className="text-secondary text-xs">{pct}%</span>
        </div>

        <div className="w-full bg-[#0f1724] rounded-full h-3 overflow-hidden border border-[#1f2430]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, delay }}
            className="h-3 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(236,72,153,1) 100%)",
            }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  // assign simple skill %s, tweak as you like
  const skillPercent = {
    "HTML 5": 90,
    "CSS 3": 88,
    "JavaScript": 85,
    "TypeScript": 70,
    "React JS": 82,
    "Tailwind CSS": 78,
    "Node JS": 72,
    "MongoDB": 68,
    "MySQL / SQL": 60,
    "Git & GitHub": 80,
    "Figma": 65,
    "Python": 55,
    "C / C++": 50,
    "PHP": 45,
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-6">Technologies & Skills</h2>
        <p className="text-secondary mb-8 max-w-2xl">
          I work with front-end & back-end tech, plus tools for design and deployment.
          Below are the techs I use most — hover or click a bar to see details.
        </p>

        <div className="space-y-4">
          {technologies.map((t, i) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Bar name={t.name} icon={t.icon} pct={skillPercent[t.name] || 60} delay={i * 0.06} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
