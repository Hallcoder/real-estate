// schemas/apartment.js
export default {
  name: 'apartment',
  title: 'Apartment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'blockNumber',
              title: 'Block Number',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'Available',
              title: 'Available',
              type: 'boolean',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: ['Rent', 'Sale'],
              },
            },
            {
              name: 'blockImage',
              title: 'Block Image',
              type: 'image', // Single image field for the block
            },

            {
              name: 'apartments',
              title: 'Apartments',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'apartmentNumber',
                      title: 'Apartment Number',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'price',
                      title: 'Price',
                      type: 'number',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'apartmentImages',
                      title: 'Apartment Images',
                      type: 'array',
                      of: [{type: 'image'}], // Multiple images field for each apartment
                    },
                    {
                      name: 'features',
                      title: 'Apartment Features',
                      type: 'object',
                      fields: [
                        {
                          name: 'rooms',
                          title: 'Number of Rooms',
                          type: 'number',
                        },
                        {
                          name: 'bathrooms',
                          title: 'Number of Bathrooms',
                          type: 'number',
                        },
                        {
                          name: 'livingRoom',
                          title: 'Living Room',
                          type: 'boolean',
                        },
                        {
                          name: 'balcony',
                          title: 'Balcony',
                          type: 'boolean',
                        },
                        {
                          name: 'bathtub',
                          title: 'Bathtub',
                          type: 'boolean',
                        },
                        {
                          name: 'laundryRoom',
                          title: 'Laundry Room',
                          type: 'boolean',
                        },
                        {
                          name: 'swimmingPool',
                          title: 'Swimming Pool',
                          type: 'boolean',
                        },
                        {
                          name: 'airConditioning',
                          title: 'Air Conditioning',
                          type: 'boolean',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'number',
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
          name: 'sector',
          title: 'Sector',
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
          name: 'zipCode',
          title: 'Zip Code',
          type: 'string',
          validation: (Rule) => Rule.required(),
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
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: ['Sold out', 'Rent out', 'Available'],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Rent', 'Sale'],
      },
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
                list: ['Health', 'Government service', 'Commerce', 'Religion', 'Education'],
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'agentInfo',
      title: 'Agent Information',
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
          title: 'Agent Name',
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
}
