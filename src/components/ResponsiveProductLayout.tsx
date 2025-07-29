import React from 'react';
import { ProductCarousel } from './ProductCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductImage {
  id: string;
  image_url: string;
  alt_text?: string;
  caption?: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface Product {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  testimonials: Testimonial[];
  images: ProductImage[];
}

interface ResponsiveProductLayoutProps {
  product: Product;
  onPurchase?: () => void;
  className?: string;
}

export const ResponsiveProductLayout: React.FC<ResponsiveProductLayoutProps> = ({
  product,
  onPurchase,
  className
}) => {
  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      {/* Mobile/Tablet Layout (Image First) */}
      <div className="lg:hidden space-y-8">
        {/* Image Carousel */}
        <ProductCarousel images={product.images} />
        
        {/* Product Info */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Badge variant="secondary" className="mb-2">
              {product.tagline}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
            <p className="text-lg text-muted-foreground">{product.description}</p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-4">{product.price}</div>
            <Button size="lg" className="w-full md:w-auto" onClick={onPurchase}>
              Get Started Now
            </Button>
          </div>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="grid gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <div className="grid gap-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          {product.testimonials.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What Our Users Say</h3>
              {product.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <blockquote className="italic text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout (Current Style) */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-2">
                {product.tagline}
              </Badge>
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                {product.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-4xl font-bold text-primary">{product.price}</div>
              <Button size="lg" onClick={onPurchase}>
                Get Started Now
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <div className="grid gap-3">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Carousel */}
          <div className="lg:sticky lg:top-8">
            <ProductCarousel images={product.images} />
            
            {/* Testimonials */}
            {product.testimonials.length > 0 && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">What Our Users Say</h3>
                {product.testimonials.slice(0, 2).map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <blockquote className="italic text-muted-foreground mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};