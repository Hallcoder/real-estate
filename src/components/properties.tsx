import PropertyCard from "./propertyCard";

function Properties() {
    const properties = [
        {
            id: 1,
            name: "Kibagabaga Apartment",
            status: 'Rent',
            price: '4000',
            location:'Kibagabaga,Kigali',
            amenities: {
                bed: 3,
                bath: 4
            },
            size: 405.24
        },
        {
            id: 2,
            name: "Downtown Loft",
            status: 'Sale',
            price: '650000',
            location:'Gacuriro,Kicukiro',
            amenities: {
                bed: 2,
                bath: 2
            },
            size: 1200.75
        },
        {
            id: 3,
            name: "Seaside Villa",
            status: 'Rent',
            price:'800',
            location:'Nyamata,Bugesera',
            amenities: {
                bed: 5,
                bath: 6
            },
            size: 1800.50
        },
        {
            id: 4,
            name: "Cozy Cottage",
            status: 'Sale',
            price: '120000',
            location:'Rebero,Kicukiro',
            amenities: {
                bed: 1,
                bath: 1
            },
            size: 600.00
        },
        {
            id: 5,
            name: "Urban Condo",
            status: 'Rent',
            price: '1500',
            location:'Kabuga,Kigali',
            amenities: {
                bed: 2,
                bath: 2
            },
            size: 950.25
        },
        {
            id: 6,
            name: "Mountain Retreat",
            status: 'Sale',
            price: '380000',
            location:'Masoro,Gasabo',
            amenities: {
                bed: 4,
                bath: 3
            },
            size: 2200.00
        }
    ];
    
    return (<div className="flex w-full flex-wrap items-center justify-center">
        {properties.map(prop =>{
    return <PropertyCard name={prop.name} key={prop.id} location={prop.location} size={prop.size} status={prop.status} price={prop.price} amenities={prop.amenities} />
        })}
    </div>  );
}

export default Properties;