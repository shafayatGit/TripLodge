import React, { useState } from "react";
import Title from "../../../Components/Title";
import { assets } from "../../../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [input, setInput] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <form className="mt-20">
      <Title
        align={"left"}
        font={"outfit"}
        title={"Add Room"}
        subtitle={
          "Fill in details carefully and accurate room details, pricing and amenities, to enhance the user booking experience."
        }
      />

      {/* uploaded area for images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages${key}`} key={key}>
            <img
              className="max-h-13 cursor-pointer opacity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              className="cursor-pointer"
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>
    </form>
  );
};

export default AddRoom;
