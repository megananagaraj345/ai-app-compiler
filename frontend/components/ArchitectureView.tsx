export default function PipelineFlow() {

  const stages = [
    "Intent",
    "Architecture",
    "Schemas",
    "Validation",
    "Repair",
    "Runtime"
  ];

  return (

    <div className="flex flex-wrap items-center gap-4">

      {stages.map((stage, index) => (

        <div
          key={stage}
          className="flex items-center gap-4"
        >

          <div className="bg-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg">
            {stage}
          </div>

          {index !== stages.length - 1 && (
            <div className="text-2xl">
              →
            </div>
          )}

        </div>

      ))}

    </div>
  );
}