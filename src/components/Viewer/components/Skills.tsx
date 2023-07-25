import { InfoComponent } from "../../../utils/types";

function Skills({ data }: { data: InfoComponent }) {
  return (
    <section className="mb-8">
      <h1 className="text-2xl">{data.header}</h1>
      <hr className="my-2 h-0.5 border-t-0 bg-black opacity-100 dark:opacity-100" />
      <p>{data.text}</p>
    </section>
  );
}

export default Skills;
