// schemas/room.js
export default {
    name: 'room',
    title: 'Room',
    type: 'object',
    fields: [
      {
        name: 'name',
        title: 'Room Name',
        type: 'string',
      },
      {
        name: 'sizeInMeterSquare',
        title: 'Size in Meter Square',
        type: 'number',
      },
      {
        name: 'description',
        title: 'Room Description',
        type: 'text',
      },
    ],
  };
  