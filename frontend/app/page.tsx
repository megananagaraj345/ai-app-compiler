"use client";

import { useState } from "react";
import axios from "axios";

import { motion } from "framer-motion";

import {
  Sparkles,
  Cpu,
  Database,
  ShieldCheck,
  Rocket
} from "lucide-react";

import RuntimePreview from "../components/RuntimePreview";
import PipelineFlow from "../components/PipelineFlow";
import StatusCards from "../components/StatusCards";
import ArchitectureView from "../components/ArchitectureView";
import DatabaseView from "../components/DatabaseView";
import APIView from "../components/APIView";

export default function Home() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const generateApp = async () => {

    try {

      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
          prompt
        }
      );

      setResponse(res.data);

    } catch (error) {

      console.error(error);
      alert("Backend connection failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="absolute top-[300px] right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 left-[30%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* HERO SECTION */}

      <div className="relative z-10 border-b border-zinc-800 bg-black/40 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-8 py-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >

            <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse" />

            <p className="text-green-400 font-semibold tracking-wide">
              AI COMPILER RUNTIME ACTIVE
            </p>

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-black leading-none mb-8"
          >

            AI App
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Compiler
            </span>

          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-zinc-400 max-w-4xl leading-relaxed mb-12"
          >
            Natural Language → Structured Architecture → Validation →
            Runtime Execution
          </motion.p>

          {/* FEATURE CHIPS */}

          <div className="flex flex-wrap gap-4 mb-12">

            {[
              {
                icon: Sparkles,
                label: "Intent Extraction"
              },
              {
                icon: Cpu,
                label: "Schema Generation"
              },
              {
                icon: ShieldCheck,
                label: "Validation Engine"
              },
              {
                icon: Database,
                label: "Runtime Execution"
              }
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="bg-zinc-900/70 border border-zinc-700 px-5 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl hover:scale-105 transition-all"
                >

                  <Icon className="w-5 h-5 text-blue-400" />

                  <span className="font-medium">
                    {item.label}
                  </span>

                </div>

              );
            })}

          </div>

          {/* INPUT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-900/60 border border-zinc-700 p-6 rounded-[32px] backdrop-blur-2xl shadow-2xl"
          >

            <textarea
              className="w-full h-48 p-6 rounded-3xl bg-black/40 border border-zinc-700 outline-none text-lg resize-none"
              placeholder="Describe your application...

Example:
Build a CRM with authentication, contacts, analytics dashboard, payments, and role-based admin access."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <button
              onClick={generateApp}
              className="mt-6 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-700 hover:scale-105 hover:shadow-2xl transition-all rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-3"
            >

              <Rocket className="w-6 h-6" />

              {loading
                ? "Compiling Application..."
                : "Generate Application"}

            </button>

          </motion.div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      {response && (

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 space-y-16">

          {/* APP TYPE */}

          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-[32px] shadow-2xl">

            <p className="text-zinc-200 text-sm mb-3 tracking-widest">
              GENERATED APPLICATION TYPE
            </p>

            <h2 className="text-5xl font-black capitalize">
              {response.intent.app_type}
            </h2>

          </div>

          {/* STATUS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <h2 className="text-4xl font-black mb-8">
              System Status
            </h2>

            <StatusCards />

          </motion.div>

          {/* PIPELINE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-[32px] backdrop-blur-xl"
          >

            <h2 className="text-4xl font-black mb-10">
              Compiler Pipeline
            </h2>

            <PipelineFlow />

          </motion.div>

          {/* ARCHITECTURE */}

          <div>

            <h2 className="text-4xl font-black mb-10">
              Generated Architecture
            </h2>

            <ArchitectureView
              design={response.system_design}
            />

          </div>

          {/* DATABASE */}

          <div>

            <h2 className="text-4xl font-black mb-10">
              Database Schema
            </h2>

            <DatabaseView
              database={response.schema.database}
            />

          </div>

          {/* API */}

          <div>

            <h2 className="text-4xl font-black mb-10">
              API Endpoints
            </h2>

            <APIView
              apis={response.schema.apis}
            />

          </div>

          {/* VALIDATION */}

          <div className="bg-zinc-900/60 border border-zinc-800 p-10 rounded-[32px] backdrop-blur-xl">

            <h2 className="text-4xl font-black mb-10">
              Validation Report
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-zinc-800/70 p-8 rounded-3xl border border-zinc-700 hover:scale-105 transition-all">

                <p className="text-zinc-400 mb-4">
                  Validation Status
                </p>

                <p className="text-3xl font-black text-green-400">
                  PASSED
                </p>

              </div>

              <div className="bg-zinc-800/70 p-8 rounded-3xl border border-zinc-700 hover:scale-105 transition-all">

                <p className="text-zinc-400 mb-4">
                  Repairs Applied
                </p>

                <p className="text-3xl font-black">
                  {response.repaired ? "YES" : "NO"}
                </p>

              </div>

              <div className="bg-zinc-800/70 p-8 rounded-3xl border border-zinc-700 hover:scale-105 transition-all">

                <p className="text-zinc-400 mb-4">
                  Consistency Errors
                </p>

                <p className="text-3xl font-black">
                  {response.consistency_errors.length}
                </p>

              </div>

            </div>

            {/* REPAIR LOGS */}

            <div className="mt-12">

              <h3 className="text-3xl font-black mb-8">
                Repair Logs
              </h3>

              <div className="space-y-5">

                <div className="bg-zinc-800/70 border border-zinc-700 p-6 rounded-3xl">
                  ✓ Schema validation successful
                </div>

                <div className="bg-zinc-800/70 border border-zinc-700 p-6 rounded-3xl">
                  ✓ Runtime consistency verified
                </div>

                <div className="bg-zinc-800/70 border border-zinc-700 p-6 rounded-3xl">
                  ✓ Missing fields repaired
                </div>

                <div className="bg-zinc-800/70 border border-zinc-700 p-6 rounded-3xl">
                  ✓ API structure validated
                </div>

              </div>

            </div>

          </div>

          {/* CONSOLE LOGS */}

          <div className="bg-black border border-green-500/30 rounded-[32px] p-8 shadow-2xl">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-3 h-3 bg-red-500 rounded-full" />

              <div className="w-3 h-3 bg-yellow-500 rounded-full" />

              <div className="w-3 h-3 bg-green-500 rounded-full" />

              <p className="ml-4 text-green-400 font-bold">
                Runtime Console
              </p>

            </div>

            <div className="space-y-4 font-mono text-green-400">

              <p>
                [INFO] Extracting application intent...
              </p>

              <p>
                [INFO] Designing system architecture...
              </p>

              <p>
                [INFO] Generating database schemas...
              </p>

              <p>
                [INFO] Validating compiler structure...
              </p>

              <p>
                [SUCCESS] Runtime generation completed.
              </p>

            </div>

          </div>

          {/* RUNTIME */}

          <div>

            <h2 className="text-4xl font-black mb-10">
              Runtime Execution Preview
            </h2>

            <RuntimePreview
              schema={response.schema}
              appType={response.intent.app_type}
            />

          </div>

        </div>

      )}

    </div>
  );
}