import { InfoComponent } from "../../../utils/types";

function Contact({ data }: { data: InfoComponent }) {
  return (
    <section className="mt-20 text-center ml-1">
      <h1 className="text-lg text-left">{data.header}</h1>
      <ul className="text-left text-xs">
        <li>{data.email}</li>
        <li>{data.phone}</li>
        <li>{data.cite}</li>
      </ul>
    </section>
  );
}

export default Contact;
