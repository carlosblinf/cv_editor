import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { BuilderContext } from "../Builder";
import ToggleButton from "./ToggleButton";
// import { useBuilderContext } from "@/utils/BuilderContext";
import { useAppDispatch, useAppSelector } from "@/store";
import { getData } from "@/utils/dataHooks";
import { updateInfo } from "@/store/builder/builderSlice";
import { store } from "@/store";

const Profile = () => {
  // const { updateInfo, getComponentData } = useBuilderContext();
  const dispatch = useDispatch();
  const builder = useAppSelector((state) => state.builder);
  // const builder = store.getState().builder;
  const [profile, setProfile] = useState(getData(builder, "Profile"));

  function save(save) {
    console.log("first");
    console.log("second", getData(builder, "Profile"));
    store.dispatch(updateInfo(save));
  }

  return (
    <div className="pb-11">
      <TextArea
        placeholder="Full name"
        handleChange={(e) => setProfile({ ...profile, name: e.target.value })}
        style="pb-3"
        rows="2"
        defaultValue={profile.name}
      />

      <TextInput
        placeholder="Profession"
        handleChange={(e) =>
          setProfile({ ...profile, profession: e.target.value })
        }
        style="pb-3"
        defaultValue={profile.profession}
      />
      <div className="flex flex-row">
        <TextInput
          placeholder="Profile Image Url"
          handleChange={(e) =>
            setProfile({ ...profile, profileImageURL: e.target.value })
          }
          style="pb-3 pr-3"
          defaultValue={profile.profileImageURL}
        />
        <ToggleButton
          defaultValue={profile.display}
          handleChange={(name, prop, isEnabled) => {
            updateInfo({ ...profile, display: isEnabled });
          }}
        />
      </div>
      <button
        className="px-6 py-1 text-gray-600 bg-gray-200 border-gray-300 rounded-lg shadow hover:bg-gray-300"
        onClick={() => save(profile)}
      >
        Save
      </button>
    </div>
  );
};

export default Profile;
