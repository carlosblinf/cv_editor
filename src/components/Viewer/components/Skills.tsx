import { InfoComponent } from "../../../utils/types";

function Skills({ data }: { data: InfoComponent }) {
  return (
    <section className="mt-8">
      <h1 className="text-2xl">{data.header}</h1>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
      <p>{data.text}</p>
    </section>
  );
}

export default Skills;
