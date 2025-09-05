'use client';

import styles from "./body.module.css";
import List from "../components/list";
import Itinerary from "../components/itinerary";
import Courousel from "../components/courousel";
import carouselData from "../../data/carousel-data.json";
import React from 'react';

export default function Body() {
    // Ensure we have carousel data
    if (!carouselData?.carousels?.length) {
        return (
            <div className="p-8">
                <p>Loading tour information...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-12">            
            <div className="space-y-12">
                {carouselData.carousels.map((carousel) => ({
                    ...carousel,
                    listImages: Array.isArray(carousel.listImages) 
                        ? carousel.listImages.map(img => img.startsWith('/') ? img : `/${img}`)
                        : [],
                    distance: carousel.distance || 'Not specified',
                    route: carousel.route || 'Route not specified',
                    map: carousel.map || '#',
                    blip: carousel.blip || 'No description available.'
                })).map((carousel) => (
                    <div key={carousel.day} className="mb-16">
                        <Courousel 
                            day={carousel.day} 
                            listImages={carousel.listImages}
                            distance={carousel.distance}
                            route={carousel.route}
                            map={carousel.map}
                            blip={carousel.blip}
                        />
                    </div>
                ))}
                
                <Itinerary />
                
                <div className="w-full flex justify-center my-8">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1uJdUCuOU6pGl2ZpmQDGjB9SU_33UuaQ&ehbc=2E312F&noprof=1"
                        width="100%"
                        height="480"
                        className="max-w-4xl"
                        title="Vietnam Motorcycle Tour Route"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    <List
                        title="Do"
                        listItems={[
                            "Apply for visa a couple of months in advance",
                            "Email the Motorbike Tour Company in advance",
                            "Download Vietnam Google Maps Offline",
                            "Download ?? App for Hotels",
                            "Get Vietnam local SIM, it will work better in remote areas",
                            "Pack everything into a GiantLoop Saddlebag",
                            "Get malaria tablets and vaccines up to date"
                        ]}
                    />
                    <List
                        title="Don't"
                        listItems={[
                            "Get a Vietnam visa online if your name has non-alphanumeric characters. Go through a travel agent instead",
                            "Expect your glasses to survive the dusty roads",
                            "Expect 10 days is enough to cover the trail with leisure"
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}