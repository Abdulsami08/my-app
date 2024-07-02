import category from "../../sanity/category"

export interface simplifiedProduct{
    _id: number
    price: number,
    name:string,
    slug : string, 
    categoryName: string,   
    imageUrl: any,   
      
}

export interface fullProduct {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
  }