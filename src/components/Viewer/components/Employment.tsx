import { InfoComponent } from "../../../utils/types";

function Employment({ data }: { data: InfoComponent }) {
  return (
    <section className="mt-20 text-center">
      <h1 className="text-2xl">{data.header}</h1>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
      <p>{data.about}</p>
    </section>
  );
}

export default Employment;
