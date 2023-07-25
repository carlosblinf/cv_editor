import { InfoComponent } from "../../../utils/types";

function Contact({ data }: { data: InfoComponent }) {
  return (
    <section className="mt-20 text-center">
      <h1 className="text-lg">{data.header}</h1>
      <ul className="text-left">
        <li>email: {data.email}</li>
        <li>phone: {data.phone}</li>
        <li>cite: {data.cite}</li>
      </ul>
    </section>
  );
}

export default Contact;
