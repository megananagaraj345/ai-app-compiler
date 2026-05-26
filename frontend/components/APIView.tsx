type Props = {
  apis: any[];
};

export default function APIView({ apis }: Props) {

  return (

    <div className="space-y-4">

      {apis.map((api, index) => (

        <div
          key={index}
          className="bg-zinc-900 border border-zinc-700 p-5 rounded-2xl flex justify-between items-center"
        >

          <div>

            <p className="text-lg font-bold">
              {api.path}
            </p>

          </div>

          <div className="bg-blue-600 px-4 py-2 rounded-xl font-semibold">
            {api.method}
          </div>

        </div>

      ))}

    </div>
  );
}