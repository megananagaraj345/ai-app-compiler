type Props = {
  database: any[];
};

export default function DatabaseView({ database }: Props) {

  return (

    <div className="grid md:grid-cols-2 gap-6">

      {database.map((table, index) => (

        <div
          key={index}
          className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl"
        >

          <h3 className="text-xl font-bold mb-4 capitalize">
            {table.name}
          </h3>

          <div className="space-y-2">

            {table.columns.map((column: string) => (

              <div
                key={column}
                className="bg-zinc-800 p-3 rounded-xl"
              >
                {column}
              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}