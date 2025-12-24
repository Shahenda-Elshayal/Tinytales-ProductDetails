'use client';

import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/layout/HeroSection';
import Breadcrumb from '@/components/layout/Breadcrumb';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import ProductInfo from '@/components/product/ProductInfo';
import RatingReviews from '@/components/product/RatingReviews';
import SimilarItems from '@/components/product/SimilarItems';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Breadcrumb />
      
      {/* Product Details Content */}
      <main className="bg-white mt-10">
        <div className="mx-5 md:mx-[120px] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-5">
            {/* Product Image Gallery */}
            <div className="w-full">
              <ProductImageGallery />
            </div>

            {/* Product Information */}
            <div className="w-full">
              <ProductInfo />
            </div>
          </div>
        </div>
      </main>

      {/* Rating and Reviews */}
      <RatingReviews />

      {/* Similar Items */}
      <SimilarItems />

      {/* Footer */}
      <Footer />
    </div>
  );
}
