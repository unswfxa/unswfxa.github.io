import { Link } from "react-router-dom";
import placeholder from "../assets/team/2025/placeholder.png";

const EventCardDetails = ({ array, divStyle, gridStyle, img, imgStyle, cardStyle, home }) => {
  return (
    <div className={divStyle}>
      {array && array.length > 0 ? (
        array.map((o) => (
          <div key={o.name} className={gridStyle}>
            <Link to={o.link} target="_blank" rel="nonreferrer noopener">
              {img && <img src={o.cp} alt={o.name} className={imgStyle} />}
              <div className={cardStyle}>
                {home ? (
                  <>
                    <h3 className="text-md md:text-lg font-semibold text-black">{o.name}</h3>
                    <p className="text-gray-400 italic mt-1 font-normal">{o.type} event</p>
                  </>
                ) : (
                  <>
                    <p className="text-md md:text-lg text-black mt-2">{o.name}</p>
                  </>
                )}
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="h-[50px]">Coming Soon!</div>
      )}
    </div>
  );
};

export const EventCard = ({ array }) => {
  return (
    <EventCardDetails
      array={array}
      divStyle="w-full flex flex-row overflow-x-auto whitespace-nowrap gap-4 p-4"
      gridStyle="flex flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
      img={true}
      imgStyle="w-full h-[150px] md:h-[280px] object-cover rounded-md"
      cardStyle="flex flex-col gap-2"
      home={false}
    />
  );
};

export const HomeEventCard = ({ array }) => {
  return (
    <EventCardDetails
      array={array}
      divStyle="flex flex-wrap justify-center gap-8 w-full"
      gridStyle="w-[500px] bg-white rounded-xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105"
      img={true}
      imgStyle="w-full h-[280px] object-cover"
      cardStyle="p-4"
      home={true}
    />
  );
};

export const ProfileCard = ({ name, role, img }) => {
  return (
    <div
      className="w-[245px] h-[368px] rounded-2xl flex flex-col items-center justify-center gap-6 pt-6 px-4 text-center"
      style={{
        background: "linear-gradient(to bottom, #2A7CBF 0%, #56ACC6 8%, #9BCDDF 20%, #E0EFF9 60%, #F1F7FF)",
      }}
    >
      <img src={img || placeholder} alt={name} className="w-[150px] h-[150px] rounded-full object-cover" />
      <p className="font-bold text-lg text-black">{name}</p>
      <p className="text-sm text-black">{role}</p>
    </div>
  );
};

export const PublicationsCard = ({ item }) => {
  return (
    <div className="py-4 flex flex-col transform transition-transform duration-300 hover:scale-105">
      <img src={item.image?.[0] || ""} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="text-xs font-semibold mb-2">{item.title}</h3>
      {item.publishdate?.[0] && <p className="text-xs text-gray-600 mb-2">Published on {item.publishdate}</p>}
      {item.authors?.[0] && <p className="text-xs text-gray-600">By {item.authors.filter(Boolean).join(", ")}</p>}
    </div>
  );
};
