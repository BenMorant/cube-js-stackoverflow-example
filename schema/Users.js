cube('Users', {
  sql: 'SELECT * FROM public.Users WHERE geometry is not null',

  measures: {
    max: {
      sql: 'reputation',
      type: 'max',
    },

    min: {
      sql: 'reputation',
      type: 'min',
    }
  },

  dimensions: {
    value: {
      sql: 'reputation',
      type: 'number'

    },

    geometry: {
      sql: 'geometry',
      type: 'string'
    }
  }
});