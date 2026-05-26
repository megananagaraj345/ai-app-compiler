"use client";

export default function ArchitectureView({ design }: any) {

  if (!design) return null;

  return (

    <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-800/70 p-6 rounded-2xl">

          <h3 className="text-2xl font-bold mb-4">
            App Type
          </h3>

          <p className="text-zinc-300 capitalize">
            {design.app_type}
          </p>

        </div>

        <div className="bg-zinc-800/70 p-6 rounded-2xl">

          <h3 className="text-2xl font-bold mb-4">
            Roles
          </h3>

          <div className="flex flex-wrap gap-3">

            {design.roles?.map((role: string) => (

              <div
                key={role}
                className="bg-blue-600 px-4 py-2 rounded-xl"
              >
                {role}
              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="mt-8 bg-zinc-800/70 p-6 rounded-2xl">

        <h3 className="text-2xl font-bold mb-6">
          Pages
        </h3>

        <div className="flex flex-wrap gap-4">

          {design.pages?.map((page: string) => (

            <div
              key={page}
              className="bg-purple-600 px-5 py-3 rounded-2xl capitalize"
            >
              {page}
            </div>

          ))}

        </div>

      </div>

      <div className="mt-8 bg-zinc-800/70 p-6 rounded-2xl">

        <h3 className="text-2xl font-bold mb-6">
          Entities
        </h3>

        <div className="flex flex-wrap gap-4">

          {design.entities?.map((entity: string) => (

            <div
              key={entity}
              className="bg-cyan-600 px-5 py-3 rounded-2xl"
            >
              {entity}
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}