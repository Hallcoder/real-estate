// schemas/office.js
export default {
    name: 'office',
    title: 'Office',
    type: 'document',
    fields: [
      {
        name: 'size',
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
            name: 'meetingRooms',
            title: 'Meeting Rooms',
            type: 'number',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'offices',
            title: 'Offices',
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
        name: 'nearByFacilities',
        title: 'NearByFacilities',
        type: 'array',
        of: [
          {
            name: 'facility',
            title: 'Facility',
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Name',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'type',
                title: 'Type',
                type: 'string',
                options: {
                  list: ['Health', 'Government service','Service','Banking', 'Commerce', 'Religion', 'Education'],
                },
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
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
          list: ['commercial', 'office'],
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
            title: 'City/Province',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'street',
            title: 'Street',
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
            name: 'district',
            title: 'District',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'sector',
            title: 'Sector',
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
  