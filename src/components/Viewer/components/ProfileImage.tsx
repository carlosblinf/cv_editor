import { InfoComponent } from "../../../utils/types";

function ProfileImage({ data }: { data: InfoComponent }) {
  return (
    <section className="grid items-center w-full ml-1 text-center">
      <img
        src={data.profileImageURL}
        className="w-40 h-40 mx-auto mb-8 bg-white border-4 border-white rounded-full"
      />
    </section>
  );
}

export default ProfileImage;
