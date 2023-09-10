import React from 'react';
import NaturalFoodSection from "../../components/NaturalFoodSection/NaturalFoodSection";
import OfferBannersSection from "../../components/OfferBannersSection/OfferBannersSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import OfferSection from "../../components/OfferSection/OfferSection";
import EcoFriendlySection from "../../components/EcoFriendlySection/EcoFriendlySection";
import GallerySection from "../../components/GallerySection/GallerySection";
import NewsSection from "../../components/NewsSection/NewsSection";
import SubscribeSection from "../../components/SubscribeSection/SubscribeSection";

function Home () {
    return (
        <section >
            <NaturalFoodSection />
            <OfferBannersSection />
            <AboutSection />
            <ProductsSection />
            <TestimonialSection />
            <OfferSection />
            <EcoFriendlySection />
            <GallerySection />
            <NewsSection />
            <SubscribeSection />
        </section>
    )
}
export default Home;