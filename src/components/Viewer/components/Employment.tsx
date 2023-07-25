import { InfoComponent } from "../../../utils/types";

function Employment({ data }: { data: InfoComponent }) {
  return (
    <section key={data.type} className="mb-8">
      <h1 className="text-2xl">{data.header}</h1>
      <hr className="my-2 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-100" />
      <p>{data.about}</p>
    </section>
  );
}

export default Employment;
