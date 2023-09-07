// schemas/property.js
export default {
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    {
      name: 'sizeInMeterSquare',
      title: 'Size in Meter Square',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'object',
      fields: [
        {
          name: 'baths',
          title: 'Number of Bathrooms',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bedrooms',
          title: 'Number of Bedrooms',
          type: 'number',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['rent', 'sale'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nearbyFacilities',
      title: 'Nearby Facilities',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'additionalAmenities',
      title: 'Additional Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['plot', 'residential', 'apartment', 'commercial'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dateCreated',
      title: 'Date Created',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastUpdatedDate',
      title: 'Last Updated Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'fullAddress',
          title: 'Full Address',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'area',
          title: 'Area',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'zipCode',
          title: 'Zip Code',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'agentInfo',
      title: 'Agent Info',
      type: 'object',
      fields: [
        {
          name: 'mobileNumber',
          title: 'Mobile Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'telephone',
          title: 'Telephone',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'whatsapp',
          title: 'WhatsApp',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};
 