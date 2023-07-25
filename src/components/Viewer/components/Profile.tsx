import { InfoComponent } from "../../../utils/types";

function Profile({ data }: { data: InfoComponent }) {
  return (
    <section className="flex flex-col items-center text-center">
      <img
        src={data.profileImageURL}
        className="w-20 h-20 mb-4 bg-white border-4 border-white rounded-full"
      />
      <h1 className="text-lg text-center">{data.name}</h1>
      <span className="text-sm">{data.profession}</span>
    </section>
  );
}

export default Profile;
