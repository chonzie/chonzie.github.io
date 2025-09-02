import styles from "./body.module.css";
import List from "../components/list";
import Itinerary from "../components/itinerary";
import Courousel from "../components/courousel";
import carouselData from "../../data/carousel-data.json";

export default function Body() {

    return (
        <div className={styles.container}>
            <main className={styles.main}>
            {carouselData.carousels.map((carousel) => (
                <Courousel 
                    key={carousel.day}
                    day={carousel.day} 
                    listImages={carousel.listImages}
                    distance={carousel.distance}
                    route={carousel.route}
                    map={carousel.map}
                    blip={carousel.blip}
                />
            ))}

            <Itinerary />
            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1uJdUCuOU6pGl2ZpmQDGjB9SU_33UuaQ&ehbc=2E312F&noprof=1"
                width="640"
                    height="480"
                ></iframe>

                <div className={styles.listsGrid}>
                    <List
                        title="Do"
                        listItems={[
                            "Apply for visa a couple of months in advance",
                            "Email the Motorbike Tour Company in advance",
                            "Download Vietnam Google Maps Offline",
                            "Download ?? App for Hotels",
                            "Get Vietnam local SIM, it will work better in remote areas",
                            "Pack everything into a GiantLoop Saddlebag",
                            "Get malaria tablets and vaccines up to date",
                            
                        ]}
                    />
                    <List
                        title="Don't"
                        listItems={[
                            "Get a Vietnam visa online if your name has non alphnumeric characters. Go through a travel agent instead",
                            "Expect your glasses to survive the dusty roads",
                            "Expect 10 days is enough to cover the trail with liesure"
                        ]}
                    />
                </div>
            </main>
        </div>
    )
  };