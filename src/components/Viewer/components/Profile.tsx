import { InfoComponent } from "../../../utils/types";

function Profile({ data }: { data: InfoComponent }) {
  return (
    <section className="grid items-center text-center w-full ml-1">
      <img
        src={data.profileImageURL}
        className="w-40 h-40 mb-8 bg-white border-4 border-white rounded-full mx-auto"
      />
      <h1 className="text-lg text-left ">{data.name}</h1>
      <span className="text-sm text-left">{data.profession}</span>
    </section>
  );
}

export default Profile;
