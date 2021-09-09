export type Feature = {
    id:number;
    title:string;
    icon:any;
    paragraph: string;
}

type Highlight = {
    icon:any;
    label:string;
}

export type Home = {
    id:number;
    title: string;
    image: string;
    location: Highlight;
    rooms: Highlight;
    meters: Highlight;
    price: Highlight;
}

export type Image = {
    id: number;
    route:string;
    alt:string;
    gridRow?:string;
    gridColumn?:string;
}