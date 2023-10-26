import Images from "../components/DetailedCard/Images";
import Description from "../components/DetailedCard/Description";
import { useState, useEffect } from "react";
import { activitiesService } from "../Services/ActivitiesServices";
import Card from "../components/DetailedCard/Card";
import climbing1 from "../assets/activitiesImages/climbing1.png";
import climbing2 from "../assets/activitiesImages/climbing2.png";
import climbing3 from "../assets/activitiesImages/climbing3.png";

function Climbing() {
  const [activities, setActivities] = useState([]);
  const cardIndexToShow = 0;
  useEffect(() => {
    activitiesService
      .getProducts()
      .then((fetchedActivities) => {
        setActivities(fetchedActivities);
      })
      .catch((error) => {
        console.error("Error fetching activities", error);
      });
  }, []);
  return (
    <>
     
      <Description
        title={"Escalada deportiva"}
        description={
          "¡Vive la emoción de la escalada con cuerdas en un entorno natural único en la Sierra de Madrid! Nuestra experiencia de escalada con cuerdas te ofrece!"
        }
        text1={
          "Ubicación Escénica: Disfruta de las majestuosas montañas y vistas panorámicas."
        }
        text2={
          "Aventura en la Roca: Tanto para principiantes como para expertos, ¡hay rutas para todos!"
        }
        text3={
          "Seguridad en Todo Momento: Equipamiento y guías profesionales para una experiencia segura."
        }
        duration={"Duración 6 horas  |  Idioma: Español/Inglés"}
        opinion={"🌟🌟🌟🌟🌟"}
      />
      <div className="d-flex w-100">
        <div className=" pr-3">
          {cardIndexToShow < activities.length && (
            <Card
              activity_image={activities[cardIndexToShow].activity_image}
              bookingDate={activities[cardIndexToShow].bookingDate}
              price={activities[cardIndexToShow].price}
              stock={activities[cardIndexToShow].stock}
            />
          )}
        </div>
        <div className="w-60 m-5 ">
        <Images image1={climbing1} image2={climbing2} image3={climbing3} />
        
        </div>
      </div>
    </>
  );
}
export default Climbing;
