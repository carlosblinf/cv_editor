import { InfoComponent } from "../../../utils/types";

function Education({ data }: { data: InfoComponent }) {
  return (
    <section key={data.type} className="mt-20 text-center">
      <h1 className="text-lg">{data.header}</h1>
      <div>{data.degree}</div>
      <div className="block text-xs">{data.date}</div>
    </section>
  );
}

export default Education;
